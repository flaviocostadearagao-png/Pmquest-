import React, { useState } from 'react';
import {
  BarChart2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';
import { RespostaUsuario, Questao } from '../types';
import { useTheme } from '../context/ThemeContext';

interface DisciplinaStats {
  disciplina: string;
  totalRespondidas: number;
  acertos: number;
  erros: number;
  percentual: number;
  totalQuestoesBanco: number;
}

interface GraficoDesempenhoDisciplinasProps {
  historicoRespostas: Record<string, RespostaUsuario>;
  todasQuestoes: Questao[];
  onIrParaMateria?: (disciplinaNome: string) => void;
}

export const GraficoDesempenhoDisciplinas: React.FC<GraficoDesempenhoDisciplinasProps> = ({
  historicoRespostas,
  todasQuestoes,
  onIrParaMateria,
}) => {
  const { isDark } = useTheme();
  const [ordenacao, setOrdenacao] = useState<'edital' | 'menor_acerto' | 'maior_acerto'>('edital');

  // Mapeamento das disciplinas base do edital
  const DISCIPLINAS_PADRAO = [
    'Direito Constitucional',
    'Noções de Direito Penal',
    'Direito Administrativo',
    'Direitos Humanos',
    'Promoção da Igualdade Racial e de Gênero',
    'História da Bahia',
    'Geografia da Bahia',
    'Língua Portuguesa',
    'Raciocínio Lógico & Matemática',
  ];

  // Cálculo das estatísticas por disciplina
  const statsPorDisciplina: DisciplinaStats[] = React.useMemo(() => {
    // Coleta todas as disciplinas presentes no banco + padrão
    const setDisciplinas = new Set<string>(DISCIPLINAS_PADRAO);
    todasQuestoes.forEach((q) => {
      if (q.disciplina && !q.disciplina.toLowerCase().includes('todas')) {
        setDisciplinas.add(q.disciplina);
      }
    });

    const lista: DisciplinaStats[] = [];

    setDisciplinas.forEach((disc) => {
      const questoesDaDisc = todasQuestoes.filter((q) => {
        return q.disciplina.toLowerCase().trim() === disc.toLowerCase().trim();
      });

      let totalRespondidas = 0;
      let acertos = 0;

      questoesDaDisc.forEach((q) => {
        const resp = historicoRespostas[q.id];
        if (resp) {
          totalRespondidas += 1;
          if (resp.acertou) acertos += 1;
        }
      });

      const erros = totalRespondidas - acertos;
      const percentual = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

      lista.push({
        disciplina: disc,
        totalRespondidas,
        acertos,
        erros,
        percentual,
        totalQuestoesBanco: questoesDaDisc.length,
      });
    });

    // Ordenação
    if (ordenacao === 'menor_acerto') {
      return lista.sort((a, b) => {
        if (a.totalRespondidas === 0 && b.totalRespondidas > 0) return 1;
        if (b.totalRespondidas === 0 && a.totalRespondidas > 0) return -1;
        return a.percentual - b.percentual;
      });
    } else if (ordenacao === 'maior_acerto') {
      return lista.sort((a, b) => {
        if (a.totalRespondidas === 0 && b.totalRespondidas > 0) return 1;
        if (b.totalRespondidas === 0 && a.totalRespondidas > 0) return -1;
        return b.percentual - a.percentual;
      });
    }

    return lista;
  }, [historicoRespostas, todasQuestoes, ordenacao]);

  // Estatísticas globais
  const disciplinasComRespostas = statsPorDisciplina.filter((s) => s.totalRespondidas > 0);
  const melhorMateria = [...disciplinasComRespostas].sort((a, b) => b.percentual - a.percentual)[0];
  const piorMateria = [...disciplinasComRespostas].sort((a, b) => a.percentual - b.percentual)[0];

  return (
    <div className="space-y-3.5">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center border ${
              isDark ? 'bg-amber-950/60 border-amber-800/60 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className={`text-xs font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              Desempenho por Disciplina
            </h4>
            <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Meta PMBA: 70%+ de aproveitamento
            </p>
          </div>
        </div>

        {/* Filtro de Ordenação */}
        <div className="flex items-center gap-1 self-end sm:self-auto">
          <span className={`text-[10px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Ordenar:</span>
          <select
            value={ordenacao}
            onChange={(e) => setOrdenacao(e.target.value as any)}
            className={`text-[11px] font-semibold px-2 py-1 rounded-lg border focus:outline-none cursor-pointer ${
              isDark
                ? 'bg-slate-950 text-slate-200 border-slate-700 focus:border-amber-400'
                : 'bg-white text-slate-800 border-slate-300 focus:border-blue-500'
            }`}
          >
            <option value="edital">Ordem do Edital</option>
            <option value="menor_acerto">Menor Acerto (Ponto Fraco)</option>
            <option value="maior_acerto">Maior Acerto</option>
          </select>
        </div>
      </div>

      {/* Destaques Rápido (Melhor vs Ponto a Melhorar) */}
      {disciplinasComRespostas.length > 0 && (
        <div className="grid grid-cols-2 gap-2 text-xs">
          {melhorMateria && (
            <div
              className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                isDark ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
              <div className="overflow-hidden">
                <span className="text-[9px] uppercase font-bold tracking-wider block opacity-80">Mais Forte</span>
                <p className="font-bold truncate text-[11px]">{melhorMateria.disciplina}</p>
                <span className="text-[10px] font-mono font-black text-emerald-500">{melhorMateria.percentual}% de acertos</span>
              </div>
            </div>
          )}

          {piorMateria && peorCondition(piorMateria, melhorMateria) && (
            <div
              className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                isDark ? 'bg-amber-950/30 border-amber-800/40 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="overflow-hidden">
                <span className="text-[9px] uppercase font-bold tracking-wider block opacity-80">Revisar Urgente</span>
                <p className="font-bold truncate text-[11px]">{piorMateria.disciplina}</p>
                <span className="text-[10px] font-mono font-black text-amber-500">{piorMateria.percentual}% de acertos</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Lista de Gráficos de Barras Horizontais */}
      <div className="space-y-2.5 pt-1">
        {statsPorDisciplina.map((item) => {
          const hasResponses = item.totalRespondidas > 0;
          const isAprovado = item.percentual >= 70;
          const isAtencao = item.percentual < 50 && hasResponses;

          // Cores dinâmicas da barra
          let barBg = 'bg-slate-300 dark:bg-slate-700';
          let textColor = isDark ? 'text-slate-400' : 'text-slate-500';
          let badgeBg = isDark ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200';

          if (hasResponses) {
            if (isAprovado) {
              barBg = 'bg-gradient-to-r from-emerald-500 to-teal-400';
              textColor = 'text-emerald-500';
              badgeBg = isDark ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-800 border-emerald-200';
            } else if (item.percentual >= 50) {
              barBg = 'bg-gradient-to-r from-amber-500 to-yellow-400';
              textColor = 'text-amber-500';
              badgeBg = isDark ? 'bg-amber-950/80 text-amber-300 border-amber-800' : 'bg-amber-50 text-amber-800 border-amber-200';
            } else {
              barBg = 'bg-gradient-to-r from-rose-500 to-red-400';
              textColor = 'text-rose-500';
              badgeBg = isDark ? 'bg-rose-950/80 text-rose-300 border-rose-800' : 'bg-rose-50 text-rose-800 border-rose-200';
            }
          }

          return (
            <div
              key={item.disciplina}
              className={`p-2.5 rounded-xl border transition-all ${
                isDark ? 'bg-slate-950/50 border-slate-800/90' : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              {/* Header da Linha */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <span className={`text-xs font-bold truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {item.disciplina}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold border ${badgeBg}`}>
                    {hasResponses ? `${item.percentual}%` : 'Sem dados'}
                  </span>
                  {hasResponses && (
                    <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      ({item.acertos}/{item.totalRespondidas})
                    </span>
                  )}
                </div>
              </div>

              {/* Barra de Progresso com Linha de Corte (70%) */}
              <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                {/* Marcador da meta de 70% */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-blue-500/60 z-10"
                  style={{ left: '70%' }}
                  title="Linha de corte de aprovação (70%)"
                />

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${hasResponses ? item.percentual : 0}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`h-full rounded-full ${barBg}`}
                />
              </div>

              {/* Sub-rodapé com ação direta */}
              <div className="flex items-center justify-between mt-1.5 pt-1 text-[10px]">
                <span className={`${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {hasResponses
                    ? `${item.acertos} acertos • ${item.erros} erros`
                    : `${item.totalQuestoesBanco} questões no banco`}
                </span>

                {onIrParaMateria && (
                  <button
                    type="button"
                    onClick={() => onIrParaMateria(item.disciplina)}
                    className={`flex items-center gap-1 font-bold transition-colors cursor-pointer ${
                      isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    <span>Treinar</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legenda */}
      <div
        className={`p-2.5 rounded-xl border flex items-center justify-between text-[10px] ${
          isDark ? 'bg-slate-950/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>70%+ (Aprovado)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>50-69% (Regular)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>&lt;50% (Crítico)</span>
        </div>
      </div>
    </div>
  );
};

function peorCondition(pior: DisciplinaStats, melhor: DisciplinaStats): boolean {
  if (!pior || !melhor) return false;
  return pior.disciplina !== melhor.disciplina || pior.percentual < 70;
}
