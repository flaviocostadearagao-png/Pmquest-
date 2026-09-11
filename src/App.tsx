import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { BottomNav, ActiveTab } from './components/BottomNav';
import { QuestionCard } from './components/QuestionCard';
import { TheorySection } from './components/TheorySection';
import { StatsModal } from './components/StatsModal';
import { HomeDashboard } from './components/HomeDashboard';
import { GeradorQuestoesModal } from './components/GeradorQuestoesModal';
import { RedacaoSection } from './components/RedacaoSection';
import { QUESTOES_PMBA, TEORIA_PMBA } from './data/mockData';
import { AlternativaId, RespostaUsuario, Questao } from './types';
import { useTheme } from './context/ThemeContext';
import {
  loadUserDataFromFirestore,
  saveUserDataToFirestore,
  resetUserDataInFirestore,
} from './lib/syncService';

const STORAGE_KEY_RESPOSTAS = 'simulado_pmba_respostas_v1';
const STORAGE_KEY_TOPICOS = 'simulado_pmba_topicos_v1';
const STORAGE_KEY_QUESTOES_GERADAS = 'simulado_pmba_questoes_geradas_v1';
const STORAGE_KEY_OCULTAR_RESPONDIDAS = 'simulado_pmba_ocultar_respondidas_v1';

export default function App() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [disciplinaFiltro, setDisciplinaFiltro] = useState<string>('Direito Constitucional');
  const [assuntoFiltro, setAssuntoFiltro] = useState<string>('Todos os Assuntos');
  const [bancaFiltro, setBancaFiltro] = useState<string>('Todas as Bancas');
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(true);
  const [cloudSyncStatus, setCloudSyncStatus] = useState<'synced' | 'syncing' | 'offline'>('syncing');

  // AI Question Generator Modal states
  const [isGeradorOpen, setIsGeradorOpen] = useState<boolean>(false);
  const [geradorDisciplina, setGeradorDisciplina] = useState<string>('Direito Constitucional');
  const [geradorAssunto, setGeradorAssunto] = useState<string>('');

  // User toggle: Ocultar questões já respondidas
  const [ocultarRespondidas, setOcultarRespondidas] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_OCULTAR_RESPONDIDAS);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  // User AI-generated questions persisted locally and merged with base questions
  const [questoesGeradas, setQuestoesGeradas] = useState<Questao[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_QUESTOES_GERADAS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

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

  // Combined pool: original questions + AI-generated questions
  const todasQuestoes = useMemo(() => {
    return [...QUESTOES_PMBA, ...questoesGeradas];
  }, [questoesGeradas]);

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
          if (Array.isArray(cloudData.questoesGeradas) && cloudData.questoesGeradas.length > 0) {
            setQuestoesGeradas((prev) => {
              const existing = new Set(prev.map((q) => q.id));
              const fromCloud = cloudData.questoesGeradas!.filter((q) => !existing.has(q.id));
              return [...prev, ...fromCloud];
            });
          }
          if (typeof cloudData.ocultarRespondidas === 'boolean') {
            setOcultarRespondidas(cloudData.ocultarRespondidas);
          }
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
      localStorage.setItem(STORAGE_KEY_QUESTOES_GERADAS, JSON.stringify(questoesGeradas));
      localStorage.setItem(STORAGE_KEY_OCULTAR_RESPONDIDAS, String(ocultarRespondidas));
    } catch (err) {
      console.warn('Erro ao salvar progresso no localStorage:', err);
    }

    if (!isCloudLoadedRef.current) return;

    setCloudSyncStatus('syncing');
    const timer = setTimeout(async () => {
      try {
        const ok = await saveUserDataToFirestore(
          historicoRespostas,
          topicosLidos,
          undefined,
          questoesGeradas,
          ocultarRespondidas
        );
        setCloudSyncStatus(ok ? 'synced' : 'offline');
      } catch {
        setCloudSyncStatus('offline');
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [historicoRespostas, topicosLidos, questoesGeradas, ocultarRespondidas]);

  // Active question ID to keep the currently answered question visible until the user navigates
  const [questaoAtivaId, setQuestaoAtivaId] = useState<string | null>(null);

  // Filtered questions respecting disciplina, assunto, banca, and "ocultarRespondidas"
  const questoesFiltradas = useMemo(() => {
    return todasQuestoes.filter((q) => {
      const matchDisciplina = q.disciplina.toLowerCase() === disciplinaFiltro.toLowerCase();
      const matchAssunto =
        assuntoFiltro === 'Todos os Assuntos' ||
        q.assunto.toLowerCase() === assuntoFiltro.toLowerCase();
      const matchBanca = 
        bancaFiltro === 'Todas as Bancas' ||
        q.banca.toLowerCase() === bancaFiltro.toLowerCase();
      
      const isCurrentlyActive = questaoAtivaId !== null && q.id === questaoAtivaId;
      const matchOcultar = ocultarRespondidas ? (!historicoRespostas[q.id] || isCurrentlyActive) : true;
      return matchDisciplina && matchAssunto && matchBanca && matchOcultar;
    });
  }, [todasQuestoes, disciplinaFiltro, assuntoFiltro, bancaFiltro, ocultarRespondidas, historicoRespostas, questaoAtivaId]);

  // Keep active question ID in sync with the current question
  useEffect(() => {
    if (questoesFiltradas.length > 0) {
      if (questaoAtivaId) {
        const foundIndex = questoesFiltradas.findIndex(q => q.id === questaoAtivaId);
        if (foundIndex !== -1 && foundIndex !== currentIndex) {
          setCurrentIndex(foundIndex);
          return;
        }
      }
      
      const safeIndex = Math.min(Math.max(currentIndex, 0), questoesFiltradas.length - 1);
      const curr = questoesFiltradas[safeIndex];
      if (curr && (!questaoAtivaId || !questoesFiltradas.some((q) => q.id === questaoAtivaId))) {
        setQuestaoAtivaId(curr.id);
        if (currentIndex !== safeIndex) {
          setCurrentIndex(safeIndex);
        }
      }
    } else {
      setQuestaoAtivaId(null);
    }
  }, [questoesFiltradas, currentIndex, questaoAtivaId]);

  const handleNavigateQuestion = (newIndex: number) => {
    if (questoesFiltradas[newIndex]) {
      setQuestaoAtivaId(questoesFiltradas[newIndex].id);
    }
    setCurrentIndex(newIndex);
  };

  // Calculate stats
  const totalRespondidas = Object.keys(historicoRespostas).length;
  const acertos = (Object.values(historicoRespostas) as RespostaUsuario[]).filter((r) => r.acertou).length;

  const handleResponder = (questaoId: string, alternativa: AlternativaId) => {
    const questao = todasQuestoes.find((q) => q.id === questaoId);
    if (!questao) return;

    const gabaritoNormalizado = String(questao.respostaCorreta || '')
      .trim()
      .toUpperCase()
      .replace(/[^A-E]/g, '')[0] || 'A';

    const alternativaNormalizada = String(alternativa || '')
      .trim()
      .toUpperCase()
      .replace(/[^A-E]/g, '')[0] || 'A';

    const acertou = gabaritoNormalizado === alternativaNormalizada;
    setHistoricoRespostas((prev) => ({
      ...prev,
      [questaoId]: {
        alternativaEscolhida: (alternativaNormalizada as AlternativaId) || alternativa,
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

  // ONE-TIME WIPE (requested by user)
  useEffect(() => {
    if (!localStorage.getItem('force_wipe_stats_v1')) {
      handleResetarTudo();
      localStorage.setItem('force_wipe_stats_v1', 'true');
    }
  }, []);

  // Switch from theory or home directly to questions of that subject
  const handleIrParaQuestoesDaMateria = (disciplinaNome: string) => {
    let match = 'Direito Constitucional';
    const lower = disciplinaNome.toLowerCase();
    if (lower.includes('constitucional')) match = 'Direito Constitucional';
    else if (lower.includes('igualdade') || lower.includes('raça')) match = 'Promoção da Igualdade Racial e de Gênero';
    else if (lower.includes('história')) match = 'História da Bahia';
    else if (lower.includes('portuguesa') || lower.includes('português')) match = 'Língua Portuguesa';
    else if (lower.includes('administrativo')) match = 'Direito Administrativo';
    else if (lower.includes('humanos')) match = 'Direitos Humanos';
    else if (lower.includes('geografia')) match = 'Geografia da Bahia';
    else if (lower.includes('penal')) match = 'Noções de Direito Penal';

    setDisciplinaFiltro(match);
    setAssuntoFiltro('Todos os Assuntos');
    setBancaFiltro('Todas as Bancas');
    setCurrentIndex(0);
    setQuestaoAtivaId(null);
    setActiveTab('questoes');
  };

  const handleAbrirGerador = (disciplina?: string, assunto?: string) => {
    if (disciplina) {
      setGeradorDisciplina(disciplina);
    } else {
      setGeradorDisciplina(disciplinaFiltro);
    }
    
    if (assunto && assunto !== 'Todos os Assuntos') {
      setGeradorAssunto(assunto);
    } else if (assuntoFiltro !== 'Todos os Assuntos') {
      setGeradorAssunto(assuntoFiltro);
    } else {
      setGeradorAssunto('');
    }
    setIsGeradorOpen(true);
  };

  const handleNovasQuestoesGeradas = (novasQuestoes: Questao[], disciplinaGerada: string) => {
    setQuestoesGeradas((prev) => {
      const existingIds = new Set(prev.map((q) => q.id));
      const filtered = novasQuestoes.filter((q) => !existingIds.has(q.id));
      return [...filtered, ...prev];
    });

    setDisciplinaFiltro(disciplinaGerada);
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
          onOpenGerador={() => handleAbrirGerador()}
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
                  questoes={todasQuestoes}
                  materias={TEORIA_PMBA}
                  historicoRespostas={historicoRespostas}
                  topicosLidos={topicosLidos}
                  onIniciarQuestoes={() => setActiveTab('questoes')}
                  onEstudarTeoria={() => setActiveTab('teoria')}
                  onIrParaMateria={handleIrParaQuestoesDaMateria}
                  onResetarProgresso={handleResetarTudo}
                  cloudSyncStatus={cloudSyncStatus}
                  onAbrirGerador={() => handleAbrirGerador()}
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
                  questoes={questoesFiltradas}
                  todasQuestoes={todasQuestoes}
                  currentIndex={currentIndex}
                  onNavigate={handleNavigateQuestion}
                  historicoRespostas={historicoRespostas}
                  onResponder={handleResponder}
                  onResetarQuestao={handleResetarQuestao}
                  disciplinaFiltro={disciplinaFiltro}
                  onSelectDisciplina={(d) => {
                    setDisciplinaFiltro(d);
                    setCurrentIndex(0);
                    setQuestaoAtivaId(null);
                  }}
                  assuntoFiltro={assuntoFiltro}
                  onSelectAssunto={(a) => {
                    setAssuntoFiltro(a);
                    setCurrentIndex(0);
                    setQuestaoAtivaId(null);
                  }}
                  bancaFiltro={bancaFiltro}
                  onSelectBanca={(b) => {
                    setBancaFiltro(b);
                    setCurrentIndex(0);
                    setQuestaoAtivaId(null);
                  }}
                  ocultarRespondidas={ocultarRespondidas}
                  onToggleOcultarRespondidas={() => {
                    setOcultarRespondidas((prev) => !prev);
                    setCurrentIndex(0);
                    setQuestaoAtivaId(null);
                  }}
                  onAbrirGerador={() => handleAbrirGerador()}
                />
              </motion.div>
            ) : activeTab === 'teoria' ? (
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
                  onAbrirGerador={handleAbrirGerador}
                />
              </motion.div>
            ) : (
              <motion.div
                key="tab-redacao"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <RedacaoSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Bottom Navigation Bar */}
        <BottomNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
          questoesCount={todasQuestoes.length}
          questoesRespondidas={totalRespondidas}
        />
      </div>

      {/* Stats Modal */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        historicoRespostas={historicoRespostas}
        todasQuestoes={todasQuestoes}
        onResetarTudo={handleResetarTudo}
      />

      {/* AI Question Generator Modal */}
      <GeradorQuestoesModal
        isOpen={isGeradorOpen}
        onClose={() => setIsGeradorOpen(false)}
        disciplinaInicial={geradorDisciplina}
        assuntoInicial={geradorAssunto}
        onQuestoesGeradas={handleNovasQuestoesGeradas}
      />
    </div>
  );
}
