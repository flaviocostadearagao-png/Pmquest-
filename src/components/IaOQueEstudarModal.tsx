import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  BookOpen,
  Zap,
  Target,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Lightbulb,
  X,
  RefreshCw,
  Award,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Questao, RespostaUsuario, MateriaEdital, ModoEstudo } from '../types';
import { useTheme } from '../context/ThemeContext';
import {
  DiagnosticoIA,
  analisarHistoricoParaSugestaoTeoria,
  obterRecomendacaoIaComGemini
} from '../utils/analisadorErrosIA';

interface IaOQueEstudarModalProps {
  isOpen: boolean;
  onClose: () => void;
  questoes: Questao[];
  historicoRespostas: Record<string, RespostaUsuario>;
  materias: MateriaEdital[];
  topicosLidos: Record<string, boolean>;
  onIrParaTopicoTeoria: (materiaId: string, topicoId: string) => void;
  onTreinarQuestoesAssunto: (disciplina: string, assunto: string) => void;
  onAbrirGeradorQuestoes?: (disciplina: string, assunto: string, modo?: ModoEstudo) => void;
}

export const IaOQueEstudarModal: React.FC<IaOQueEstudarModalProps> = ({
  isOpen,
  onClose,
  questoes,
  historicoRespostas,
  materias,
  topicosLidos,
  onIrParaTopicoTeoria,
  onTreinarQuestoesAssunto,
  onAbrirGeradorQuestoes
}) => {
  const { isDark } = useTheme();
  const [diagnostico, setDiagnostico] = useState<DiagnosticoIA | null>(null);
  const [carregandoIA, setCarregandoIA] = useState(false);

  // Executa o diagnóstico quando abre o modal
  useEffect(() => {
    if (!isOpen) return;

    // 1. Diagnóstico determinístico ultra rápido (0ms)
    const diagBase = analisarHistoricoParaSugestaoTeoria(
      questoes,
      historicoRespostas,
      materias,
      topicosLidos
    );
    setDiagnostico(diagBase);

    // 2. Consulta enriquecida em segundo plano
    setCarregandoIA(true);
    obterRecomendacaoIaComGemini(questoes, historicoRespostas, materias, topicosLidos)
      .then((enriquecido) => {
        setDiagnostico(enriquecido);
      })
      .catch((err) => {
        console.warn('Fallback ativo para diagnóstico da IA:', err);
      })
      .finally(() => {
        setCarregandoIA(false);
      });
  }, [isOpen, questoes, historicoRespostas, materias, topicosLidos]);

  if (!isOpen || !diagnostico) return null;

  const {
    tipoCenario,
    totalRespondidas,
    totalErros,
    materiaAlvo,
    topicoAlvo,
    assuntoNome,
    errosNoTema,
    taxaAcertoNoTema,
    diagnosticoPedagogico,
    planoAcao,
    bizuDeOuro,
    origem
  } = diagnostico;

  const handleIrParaTeoria = () => {
    onIrParaTopicoTeoria(materiaAlvo.id, topicoAlvo.id);
    onClose();
  };

  const handleTreinarQuestoes = () => {
    onTreinarQuestoesAssunto(materiaAlvo.nome, assuntoNome || topicoAlvo.titulo);
    onClose();
  };

  const handleAbrirGerador = () => {
    if (onAbrirGeradorQuestoes) {
      onAbrirGeradorQuestoes(materiaAlvo.nome, topicoAlvo.titulo, 'treino_cirurgico');
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className={`relative w-full max-w-lg max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
            isDark
              ? 'bg-slate-900 border-slate-700/80 text-slate-100 shadow-amber-950/20'
              : 'bg-white border-slate-200 text-slate-900 shadow-blue-950/15'
          }`}
        >
          {/* Header Militar / IA */}
          <div
            className={`p-4 sm:p-5 border-b shrink-0 relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-r from-[#0c2242] via-[#091b33] to-[#081528] border-slate-800'
                : 'bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border-blue-900 text-white'
            }`}
          >
            {/* Glow decorativo */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Sparkles className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                      IA Soldado PMBA
                    </span>
                    {origem === 'ia_remota' && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold border border-emerald-500/30">
                        Gemini Ativo
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                    O que estudar agora?
                  </h3>
                </div>
              </div>

              <button
                id="btn-fechar-modal-ia"
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold transition-colors cursor-pointer"
                title="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conteúdo Rolável */}
          <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
            {/* Faixa de Diagnóstico do Aluno */}
            <div
              className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
                tipoCenario === 'com_erros'
                  ? isDark
                    ? 'bg-rose-950/30 border-rose-800/40 text-rose-200'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                  : tipoCenario === 'sem_erros_com_questoes'
                  ? isDark
                    ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-200'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : isDark
                  ? 'bg-blue-950/30 border-blue-800/40 text-blue-200'
                  : 'bg-blue-50 border-blue-200 text-blue-900'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {tipoCenario === 'com_erros' ? (
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                ) : tipoCenario === 'sem_erros_com_questoes' ? (
                  <Award className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Shield className="w-5 h-5 text-blue-500" />
                )}
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-black uppercase tracking-wide">
                    {tipoCenario === 'com_erros'
                      ? 'Ponto Crítico Identificado'
                      : tipoCenario === 'sem_erros_com_questoes'
                      ? 'Desempenho Impecável'
                      : 'Construção da Base Inicial'}
                  </span>
                  {tipoCenario === 'com_erros' && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      {errosNoTema} erro(s) neste tema • {taxaAcertoNoTema}% acerto
                    </span>
                  )}
                </div>

                <p className="text-xs leading-relaxed opacity-90">
                  {diagnosticoPedagogico}
                </p>
              </div>
            </div>

            {/* Cartão de Destaque do Tópico de Teoria Recomendado */}
            <div
              className={`p-4 rounded-2xl border space-y-3 transition-colors ${
                isDark
                  ? 'bg-gradient-to-br from-slate-950 via-[#07172d] to-[#040f1d] border-amber-500/40'
                  : 'bg-gradient-to-br from-amber-50/50 via-white to-blue-50/50 border-amber-400 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-2 border-b pb-2.5 border-white/10 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-500 border border-amber-500/30">
                    {materiaAlvo.nome}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{topicoAlvo.tempoLeituraMin} min de leitura</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Tema Recomendado para Reforço
                </span>
                <h4 className="text-sm sm:text-base font-black leading-snug mt-0.5">
                  {topicoAlvo.titulo}
                </h4>
                <p className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {topicoAlvo.resumoIntro}
                </p>
              </div>

              {/* Pontos Críticos do Edital */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-500 block">
                  Pontos Cruciais para Memorizar:
                </span>
                <ul className="space-y-1.5 text-xs">
                  {topicoAlvo.pontosImportantes.slice(0, 3).map((ponto, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={`leading-snug ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {ponto}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bizu de Ouro de Prova (FCC / IBFC) */}
              {bizuDeOuro && (
                <div
                  className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                    isDark
                      ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                      : 'bg-amber-100/70 border-amber-300 text-amber-950'
                  }`}
                >
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <span className="font-extrabold uppercase tracking-wide text-[10px] text-amber-500 block">
                      Bizu de Ouro de Prova (Pegadinha Clássica):
                    </span>
                    <p className="leading-relaxed font-medium">
                      {bizuDeOuro}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Plano Tático de 3 Passos */}
            <div
              className={`p-3.5 rounded-2xl border space-y-2 ${
                isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-500" />
                  Plano Tático Imediato
                </span>
                {carregandoIA && (
                  <span className="text-[10px] text-amber-400 flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Sintonizando com IA...
                  </span>
                )}
              </div>

              <div className="space-y-1.5 text-xs">
                {planoAcao.map((passo, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-xl flex items-center gap-2 border ${
                      isDark ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium leading-snug">{passo.replace(/^[0-9]\.\s*/, '')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rodapé com Ações Diretas */}
          <div
            className={`p-4 border-t space-y-2 shrink-0 ${
              isDark ? 'bg-[#08172c] border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {/* CTA Principal: Abrir Teoria Agora */}
            <button
              id="btn-ia-estudar-teoria-agora"
              type="button"
              onClick={handleIrParaTeoria}
              className="w-full min-h-[46px] px-4 py-2.5 rounded-xl font-black text-xs bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 fill-slate-950" />
              <span>Estudar Teoria Deste Tema Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Ações Secundárias em Grid */}
            <div className="grid grid-cols-2 gap-2">
              <button
                id="btn-ia-treinar-questoes"
                type="button"
                onClick={handleTreinarQuestoes}
                className={`min-h-[40px] px-3 py-2 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 border active:scale-95 transition-all cursor-pointer ${
                  isDark
                    ? 'bg-blue-950/60 hover:bg-blue-900/60 text-blue-300 border-blue-800/60'
                    : 'bg-blue-50 hover:bg-blue-100 text-blue-900 border-blue-200'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>Resolver Questões</span>
              </button>

              <button
                id="btn-ia-gerar-com-ia"
                type="button"
                onClick={handleAbrirGerador}
                className={`min-h-[40px] px-3 py-2 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 border active:scale-95 transition-all cursor-pointer ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>+ IA Inéditas</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
