import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { BottomNav, ActiveTab } from './components/BottomNav';
import { QuestionCard } from './components/QuestionCard';
import { TheorySection } from './components/TheorySection';
import { StatsModal } from './components/StatsModal';
import { HomeDashboard } from './components/HomeDashboard';
import { QUESTOES_PMBA, TEORIA_PMBA } from './data/mockData';
import { AlternativaId, RespostaUsuario } from './types';
import { useTheme } from './context/ThemeContext';
import {
  loadUserDataFromFirestore,
  saveUserDataToFirestore,
  resetUserDataInFirestore,
} from './lib/syncService';

const STORAGE_KEY_RESPOSTAS = 'simulado_pmba_respostas_v1';
const STORAGE_KEY_TOPICOS = 'simulado_pmba_topicos_v1';

export default function App() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [disciplinaFiltro, setDisciplinaFiltro] = useState<string>('Todas as Disciplinas');
  const [assuntoFiltro, setAssuntoFiltro] = useState<string>('Todos os Assuntos');
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(true);
  const [cloudSyncStatus, setCloudSyncStatus] = useState<'synced' | 'syncing' | 'offline'>('syncing');

  // User answers history stored in state & localStorage
  const [historicoRespostas, setHistoricoRespostas] = useState<Record<string, RespostaUsuario>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESPOSTAS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // User study topics read status
  const [topicosLidos, setTopicosLidos] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TOPICOS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Track initial load from cloud to prevent overwriting with empty state
  const isCloudLoadedRef = useRef(false);

  // Background Load from Firestore on mount
  useEffect(() => {
    let isMounted = true;
    const fetchCloudData = async () => {
      try {
        setCloudSyncStatus('syncing');
        const cloudData = await loadUserDataFromFirestore();
        if (cloudData && isMounted) {
          // Merge with local storage if cloud has data
          setHistoricoRespostas((prev) => ({
            ...prev,
            ...cloudData.historicoRespostas,
          }));
          setTopicosLidos((prev) => ({
            ...prev,
            ...cloudData.topicosLidos,
          }));
          setCloudSyncStatus('synced');
        } else if (isMounted) {
          setCloudSyncStatus('synced');
        }
      } catch (err) {
        console.warn('Erro ao conectar ao Firebase:', err);
        if (isMounted) setCloudSyncStatus('offline');
      } finally {
        isCloudLoadedRef.current = true;
      }
    };

    fetchCloudData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Save to LocalStorage & Debounced Background Sync to Firestore
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RESPOSTAS, JSON.stringify(historicoRespostas));
      localStorage.setItem(STORAGE_KEY_TOPICOS, JSON.stringify(topicosLidos));
    } catch (err) {
      console.warn('Erro ao salvar progresso no localStorage:', err);
    }

    if (!isCloudLoadedRef.current) return;

    setCloudSyncStatus('syncing');
    const timer = setTimeout(async () => {
      try {
        const ok = await saveUserDataToFirestore(historicoRespostas, topicosLidos);
        setCloudSyncStatus(ok ? 'synced' : 'offline');
      } catch {
        setCloudSyncStatus('offline');
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [historicoRespostas, topicosLidos]);

  // Filtered questions
  const questoesFiltradas = QUESTOES_PMBA.filter((q) => {
    const matchDisciplina =
      disciplinaFiltro === 'Todas as Disciplinas' || q.disciplina.toLowerCase() === disciplinaFiltro.toLowerCase();
    const matchAssunto =
      assuntoFiltro === 'Todos os Assuntos' || q.assunto.toLowerCase() === assuntoFiltro.toLowerCase();
    return matchDisciplina && matchAssunto;
  });

  // Calculate stats
  const totalRespondidas = Object.keys(historicoRespostas).length;
  const acertos = (Object.values(historicoRespostas) as RespostaUsuario[]).filter((r) => r.acertou).length;

  const handleResponder = (questaoId: string, alternativa: AlternativaId) => {
    const questao = QUESTOES_PMBA.find((q) => q.id === questaoId);
    if (!questao) return;

    const acertou = questao.respostaCorreta === alternativa;
    setHistoricoRespostas((prev) => ({
      ...prev,
      [questaoId]: {
        alternativaEscolhida: alternativa,
        acertou,
        data: new Date().toISOString(),
      },
    }));
  };

  const handleResetarQuestao = (questaoId: string) => {
    setHistoricoRespostas((prev) => {
      const copy = { ...prev };
      delete copy[questaoId];
      return copy;
    });
  };

  const handleToggleTopicoLido = (topicoId: string) => {
    setTopicosLidos((prev) => ({
      ...prev,
      [topicoId]: !prev[topicoId],
    }));
  };

  const handleResetarTudo = async () => {
    setHistoricoRespostas({});
    setTopicosLidos({});
    setCurrentIndex(0);
    localStorage.removeItem(STORAGE_KEY_RESPOSTAS);
    localStorage.removeItem(STORAGE_KEY_TOPICOS);
    await resetUserDataInFirestore();
    setCloudSyncStatus('synced');
  };

  // Switch from theory or home directly to questions of that subject
  const handleIrParaQuestoesDaMateria = (disciplinaNome: string) => {
    let match = 'Todas as Disciplinas';
    const lower = disciplinaNome.toLowerCase();
    if (lower.includes('constitucional')) match = 'Direito Constitucional';
    else if (lower.includes('igualdade') || lower.includes('raça')) match = 'Igualdade de Gênero e Raça';
    else if (lower.includes('história')) match = 'História da Bahia';
    else if (lower.includes('portuguesa') || lower.includes('português')) match = 'Língua Portuguesa';
    else if (lower.includes('administrativo')) match = 'Direito Administrativo';
    else if (lower.includes('humanos')) match = 'Direitos Humanos';
    else if (lower.includes('geografia')) match = 'Todas as Disciplinas';

    setDisciplinaFiltro(match);
    setAssuntoFiltro('Todos os Assuntos');
    setCurrentIndex(0);
    setActiveTab('questoes');
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-start antialiased selection:bg-amber-500 selection:text-slate-950 transition-colors duration-200 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-200 text-slate-900'
    }`}>
      {/* Outer Shell: Simulated smartphone frame on larger screens, full width on actual phones */}
      <div
        className={`w-full transition-all duration-300 ${
          isMobileFrame
            ? `max-w-md min-h-screen sm:min-h-[92vh] sm:my-4 sm:rounded-[36px] sm:border-4 sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] sm:ring-1 ${
                isDark
                  ? 'sm:border-slate-800/90 sm:ring-slate-700/50'
                  : 'sm:border-slate-300 sm:ring-slate-400/40 shadow-slate-400/50'
              }`
            : 'max-w-2xl min-h-screen'
        } ${isDark ? 'bg-[#071326]' : 'bg-slate-50'} flex flex-col relative overflow-x-hidden`}
      >
        {/* Top Header */}
        <Header
          acertos={acertos}
          totalRespondidas={totalRespondidas}
          onOpenStats={() => setIsStatsOpen(true)}
          isMobileFrame={isMobileFrame}
          onToggleFrame={() => setIsMobileFrame(!isMobileFrame)}
          cloudSyncStatus={cloudSyncStatus}
        />

        {/* Dynamic Main Body with smooth tab transitions */}
        <main className="flex-1 p-3 sm:p-4 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'inicio' ? (
              <motion.div
                key="tab-inicio"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <HomeDashboard
                  questoes={QUESTOES_PMBA}
                  materias={TEORIA_PMBA}
                  historicoRespostas={historicoRespostas}
                  topicosLidos={topicosLidos}
                  onIniciarQuestoes={() => setActiveTab('questoes')}
                  onEstudarTeoria={() => setActiveTab('teoria')}
                  onIrParaMateria={handleIrParaQuestoesDaMateria}
                  onResetarProgresso={handleResetarTudo}
                  cloudSyncStatus={cloudSyncStatus}
                />
              </motion.div>
            ) : activeTab === 'questoes' ? (
              <motion.div
                key="tab-questoes"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <QuestionCard
                  questoes={questoesFiltradas.length > 0 ? questoesFiltradas : QUESTOES_PMBA}
                  todasQuestoes={QUESTOES_PMBA}
                  currentIndex={currentIndex}
                  onNavigate={setCurrentIndex}
                  historicoRespostas={historicoRespostas}
                  onResponder={handleResponder}
                  onResetarQuestao={handleResetarQuestao}
                  disciplinaFiltro={disciplinaFiltro}
                  onSelectDisciplina={(d) => {
                    setDisciplinaFiltro(d);
                    setCurrentIndex(0);
                  }}
                  assuntoFiltro={assuntoFiltro}
                  onSelectAssunto={(a) => {
                    setAssuntoFiltro(a);
                    setCurrentIndex(0);
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="tab-teoria"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <TheorySection
                  materias={TEORIA_PMBA}
                  onIrParaQuestoesDaMateria={handleIrParaQuestoesDaMateria}
                  topicosLidos={topicosLidos}
                  onToggleLido={handleToggleTopicoLido}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Bottom Navigation Bar */}
        <BottomNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
          questoesCount={QUESTOES_PMBA.length}
          questoesRespondidas={totalRespondidas}
        />
      </div>

      {/* Stats Modal */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        historicoRespostas={historicoRespostas}
        todasQuestoes={QUESTOES_PMBA}
        onResetarTudo={handleResetarTudo}
      />
    </div>
  );
}

