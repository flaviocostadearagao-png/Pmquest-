import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { BottomNav, ActiveTab } from './components/BottomNav';
import { QuestionCard } from './components/QuestionCard';
import { TheorySection } from './components/TheorySection';
import { StatsModal } from './components/StatsModal';
import { QUESTOES_PMBA, TEORIA_PMBA } from './data/mockData';
import { AlternativaId, RespostaUsuario } from './types';

const STORAGE_KEY_RESPOSTAS = 'simulado_pmba_respostas_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('questoes');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [disciplinaFiltro, setDisciplinaFiltro] = useState<string>('Todas as Disciplinas');
  const [assuntoFiltro, setAssuntoFiltro] = useState<string>('Todos os Assuntos');
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(true);

  // User answers history stored in state & localStorage
  const [historicoRespostas, setHistoricoRespostas] = useState<Record<string, RespostaUsuario>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESPOSTAS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RESPOSTAS, JSON.stringify(historicoRespostas));
    } catch (err) {
      console.warn('Erro ao salvar progresso no localStorage:', err);
    }
  }, [historicoRespostas]);

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
        data: new Date().toISOString()
      }
    }));
  };

  const handleResetarQuestao = (questaoId: string) => {
    setHistoricoRespostas((prev) => {
      const copy = { ...prev };
      delete copy[questaoId];
      return copy;
    });
  };

  const handleResetarTudo = () => {
    setHistoricoRespostas({});
    setCurrentIndex(0);
    localStorage.removeItem(STORAGE_KEY_RESPOSTAS);
  };

  // Switch from theory directly to questions of that subject
  const handleIrParaQuestoesDaMateria = (disciplinaNome: string) => {
    // Map official names to question disciplines
    let match = 'Todas as Disciplinas';
    if (disciplinaNome.includes('Constitucional')) match = 'Direito Constitucional';
    else if (disciplinaNome.includes('Igualdade')) match = 'Igualdade de Gênero e Raça';
    else if (disciplinaNome.includes('História')) match = 'História da Bahia';
    else if (disciplinaNome.includes('Portuguesa')) match = 'Língua Portuguesa';
    else if (disciplinaNome.includes('Administrativo')) match = 'Direito Administrativo';
    else if (disciplinaNome.includes('Humanos')) match = 'Direitos Humanos';

    setDisciplinaFiltro(match);
    setAssuntoFiltro('Todos os Assuntos');
    setCurrentIndex(0);
    setActiveTab('questoes');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Outer Shell: Simulated smartphone frame on larger screens, full width on actual phones */}
      <div
        className={`w-full transition-all duration-300 ${
          isMobileFrame
            ? 'max-w-md min-h-screen sm:min-h-[92vh] sm:my-4 sm:rounded-[36px] sm:border-4 sm:border-slate-800/90 sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] sm:ring-1 sm:ring-slate-700/50'
            : 'max-w-2xl min-h-screen'
        } bg-[#071326] flex flex-col relative overflow-x-hidden`}
      >
        {/* Top Header */}
        <Header
          acertos={acertos}
          totalRespondidas={totalRespondidas}
          onOpenStats={() => setIsStatsOpen(true)}
          isMobileFrame={isMobileFrame}
          onToggleFrame={() => setIsMobileFrame(!isMobileFrame)}
        />

        {/* Dynamic Main Body with smooth tab transitions */}
        <main className="flex-1 p-3 sm:p-4 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'questoes' ? (
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
