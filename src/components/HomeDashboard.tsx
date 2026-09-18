import React, { useState } from 'react';
import {
  Shield,
  Award,
  Target,
  BookOpen,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  ArrowRight,
  Sparkles,
  RotateCcw,
  Zap,
  HelpCircle,
  FileCheck,
  Sun,
  Moon,
  RefreshCw,
  Flame,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  Questao,
  MateriaEdital,
  RespostaUsuario,
  PatenteFeedback,
  MetaEstudo,
  ConfigAltaPerformance,
  ModoEstudo
} from '../types';
import { useTheme } from '../context/ThemeContext';
import { PainelAltaPerformance } from './PainelAltaPerformance';

interface HomeDashboardProps {
  questoes: Questao[];
  materias: MateriaEdital[];
  historicoRespostas: Record<string, RespostaUsuario>;
  topicosLidos: Record<string, boolean>;
  metaEstudo: MetaEstudo;
  configAltaPerformance: ConfigAltaPerformance;
  onAtualizarMeta: (novasMetas: Partial<MetaEstudo>) => void;
  onAtualizarConfig: (novasConfigs: Partial<ConfigAltaPerformance>) => void;
  onIniciarTreinoCirurgico: () => void;
  onIniciarSimuladoOficial: () => void;
  onIniciarMaratonaTurbo: () => void;
  onIniciarQuestoes: () => void;
  onEstudarTeoria: () => void;
  onIrParaMateria: (materiaNome: string) => void;
  onResetarProgresso: () => void;
  cloudSyncStatus: 'synced' | 'syncing' | 'offline';
  onAbrirGerador?: (disciplina?: string, assunto?: string, modo?: ModoEstudo) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  questoes,
  materias,
  historicoRespostas,
  topicosLidos,
  metaEstudo,
  configAltaPerformance,
  onAtualizarMeta,
  onAtualizarConfig,
  onIniciarTreinoCirurgico,
  onIniciarSimuladoOficial,
  onIniciarMaratonaTurbo,
  onIniciarQuestoes,
  onEstudarTeoria,
  onIrParaMateria,
  onResetarProgresso,
  cloudSyncStatus,
  onAbrirGerador,
}) => {
  const { isDark, toggleTheme } = useTheme();
  const [patenteFeedback, setPatenteFeedback] = useState<PatenteFeedback | null>(null);
  const [isEvaluatingRank, setIsEvaluatingRank] = useState(false);

  const totalQuestoes = questoes.length;
  const respondidas = Object.keys(historicoRespostas).length;
  const acertos = (Object.values(historicoRespostas) as RespostaUsuario[]).filter((r) => r.acertou).length;
  const erros = respondidas - acertos;
  const taxaAcerto = respondidas > 0 ? Math.round((acertos / respondidas) * 100) : 0;

  // Count total topics
  const totalTopicos = materias.reduce((acc, m) => acc + m.topicos.length, 0);
  const totalTopicosEstudados = Object.values(topicosLidos).filter(Boolean).length;
  const progressoTeoria = totalTopicos > 0 ? Math.round((totalTopicosEstudados / totalTopicos) * 100) : 0;

  const avaliarPatente = async () => {
    setIsEvaluatingRank(true);
    try {
      const patenteAtual = patenteFeedback?.nova_patente || 'Civil';
      const res = await fetch('/api/agente-pmba', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          comando: `Patente: ${patenteAtual} | Acertos: ${acertos} | Erros: ${erros} | Materia: Geral`
        })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setPatenteFeedback(data);
    } catch (err) {
      console.error('Erro ao avaliar patente:', err);
    } finally {
      setIsEvaluatingRank(false);
    }
  };

  // Calculo de prontidão estimada para o concurso
  const prontidao = Math.min(100, Math.round((taxaAcerto * 0.7) + (progressoTeoria * 0.3)));

  return (
    <div className="w-full max-w-md mx-auto space-y-4 pb-20">
      {/* Banner Principal de Boas-Vindas da PMBA */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c2242] via-[#091b33] to-[#040c17] border border-blue-800/50 p-4 sm:p-5 shadow-xl text-white">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          {/* Badge Concurso & Theme Quick Indicator */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/90 text-amber-400 border border-amber-500/40 text-[11px] font-extrabold uppercase tracking-wide">
              <Shield className="w-3.5 h-3.5 fill-amber-400" />
              Edital Soldado PMBA
            </span>

            {/* Cloud Sync Status Pill */}
            <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 border border-white/10 text-slate-300">
              <span
                className={`w-2 h-2 rounded-full ${
                  cloudSyncStatus === 'synced'
                    ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                    : cloudSyncStatus === 'syncing'
                    ? 'bg-amber-400 animate-ping'
                    : 'bg-slate-400'
                }`}
              />
              <span>
                {cloudSyncStatus === 'synced'
                  ? 'Firebase OK'
                  : cloudSyncStatus === 'syncing'
                  ? 'Sincronizando...'
                  : 'Nuvem Conectando'}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Central de Alta Performance PMBA
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
              Gestão inteligente com IA para alto volume, treino cirúrgico de erros e simulados oficiais.
            </p>
          </div>

          {/* Quick Action CTA */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              id="home-btn-iniciar-questoes"
              type="button"
              onClick={onIniciarQuestoes}
              className="min-h-[48px] px-3 py-2 rounded-xl font-bold text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center justify-center gap-2 border border-blue-400/50 shadow-md shadow-blue-950/60 cursor-pointer active:scale-95 transition-all"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Resolver ({totalQuestoes})</span>
            </button>

            <button
              id="home-btn-iniciar-teoria"
              type="button"
              onClick={onEstudarTeoria}
              className="min-h-[48px] px-3 py-2 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-amber-300 flex items-center justify-center gap-2 border border-amber-500/40 cursor-pointer active:scale-95 transition-all"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Estudar Teoria</span>
            </button>
          </div>

          {/* Cartão de Avaliação de Patente */}
          <div className="mt-4 pt-4 border-t border-blue-800/50">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Sua Patente: {patenteFeedback?.nova_patente || 'Civil (Em treinamento)'}
                </span>
              </div>
              <button
                onClick={avaliarPatente}
                disabled={isEvaluatingRank}
                className="text-[10px] flex items-center gap-1 bg-blue-900/50 hover:bg-blue-800/80 border border-blue-700/50 px-2.5 py-1 rounded-lg text-slate-200 transition-colors"
              >
                {isEvaluatingRank ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : (
                  <Shield className="w-3 h-3" />
                )}
                {isEvaluatingRank ? 'Avaliando...' : 'Pedir Avaliação'}
              </button>
            </div>
            {patenteFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-950/60 border border-blue-500/30 rounded-xl p-3 space-y-2 mt-2"
              >
                <p className="text-xs text-slate-200 italic border-l-2 border-amber-500 pl-2">
                  "{patenteFeedback.mensagem_comandante}"
                </p>
                <div className="bg-black/30 rounded-lg p-2 flex gap-2 items-start mt-2 border border-blue-900/30">
                  <Target className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Missão do Comandante</span>
                    <span className="text-[11px] text-slate-300 font-medium leading-snug block mt-0.5">
                      {patenteFeedback.missao_diaria}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Painel de Gestão de Alta Performance & Metas Mensais */}
      <PainelAltaPerformance
        metaEstudo={metaEstudo}
        configAltaPerformance={configAltaPerformance}
        historicoRespostas={historicoRespostas}
        todasQuestoes={questoes}
        onAtualizarMeta={onAtualizarMeta}
        onAtualizarConfig={onAtualizarConfig}
        onIniciarTreinoCirurgico={onIniciarTreinoCirurgico}
        onIniciarSimuladoOficial={onIniciarSimuladoOficial}
        onIniciarMaratonaTurbo={onIniciarMaratonaTurbo}
        onAbrirGeradorAvancado={(disc, ass, m) => onAbrirGerador && onAbrirGerador(disc, ass, m)}
      />

      {/* Painel Principal de Métricas & Estatísticas */}
      <section
        className={`rounded-2xl p-4 shadow-md space-y-3 transition-colors ${
          isDark
            ? 'bg-slate-900 border border-slate-800'
            : 'bg-white border border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between">
          <h3
            className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-amber-500" />
            Estatísticas Gerais do Aluno
          </h3>
          <span className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {totalQuestoes} Questões Disponíveis
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Card 1: Taxa de Acerto */}
          <div
            className={`p-3 rounded-xl flex flex-col justify-between transition-colors ${
              isDark
                ? 'bg-[#08172c] border border-slate-800'
                : 'bg-slate-50 border border-slate-200'
            }`}
          >
            <div className={`flex items-center justify-between text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <span>Taxa de Acertos</span>
              <Target className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <div className="mt-1">
              <span className="text-2xl font-extrabold text-amber-500 font-mono">
                {respondidas > 0 ? `${taxaAcerto}%` : '0%'}
              </span>
              <span className={`text-[10px] block mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {taxaAcerto >= 70 ? '🟢 Zona de aprovação' : respondidas > 0 ? '🟡 Meta: alcançar 75%' : 'Nenhuma feita'}
              </span>
            </div>
          </div>

          {/* Card 2: Questões Resolvidas */}
          <div
            className={`p-3 rounded-xl flex flex-col justify-between transition-colors ${
              isDark
                ? 'bg-[#08172c] border border-slate-800'
                : 'bg-slate-50 border border-slate-200'
            }`}
          >
            <div className={`flex items-center justify-between text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <span>Questões Feitas</span>
              <FileCheck className="w-3.5 h-3.5 text-blue-500" />
            </div>
            <div className="mt-1">
              <span className={`text-2xl font-extrabold font-mono ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                {respondidas} <span className={`text-xs font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>/ {totalQuestoes}</span>
              </span>
              <div className="flex items-center gap-2 text-[10px] mt-0.5 font-medium">
                <span className="text-emerald-500 font-bold">{acertos} acertos</span>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                <span className="text-rose-500 font-bold">{erros} erros</span>
              </div>
            </div>
          </div>

          {/* Card 3: Teoria Estudada */}
          <div
            className={`p-3 rounded-xl flex flex-col justify-between transition-colors ${
              isDark
                ? 'bg-[#08172c] border border-slate-800'
                : 'bg-slate-50 border border-slate-200'
            }`}
          >
            <div className={`flex items-center justify-between text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <span>Tópicos Lidos</span>
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
            </div>
            <div className="mt-1">
              <span className={`text-2xl font-extrabold font-mono ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                {totalTopicosEstudados} <span className={`text-xs font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>/ {totalTopicos}</span>
              </span>
              <div className={`w-full rounded-full h-1.5 mt-1.5 overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                <div
                  className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${progressoTeoria}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card 4: Nível de Prontidão */}
          <div
            className={`p-3 rounded-xl flex flex-col justify-between transition-colors ${
              isDark
                ? 'bg-[#08172c] border border-slate-800'
                : 'bg-slate-50 border border-slate-200'
            }`}
          >
            <div className={`flex items-center justify-between text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <span>Índice Prontidão</span>
              <Award className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <div className="mt-1">
              <span className="text-2xl font-extrabold text-emerald-500 font-mono">
                {prontidao}%
              </span>
              <span className={`text-[10px] block mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Simulado + Teoria
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Selector Strip */}
      <section
        className={`p-3 rounded-2xl flex items-center justify-between gap-3 transition-colors ${
          isDark
            ? 'bg-slate-900 border border-slate-800'
            : 'bg-white border border-slate-200 shadow-xs'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-50 text-blue-800'
          }`}>
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </div>
          <div>
            <h4 className={`text-xs font-bold leading-tight ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Tema Visual: {isDark ? 'Modo Noturno (Tático)' : 'Modo Claro'}
            </h4>
            <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Cores oficiais da PMBA adaptadas para seu conforto de leitura
            </p>
          </div>
        </div>

        <button
          id="home-theme-toggle-btn"
          type="button"
          onClick={toggleTheme}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isDark
              ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40'
              : 'bg-blue-900 hover:bg-blue-800 text-white shadow-xs'
          }`}
        >
          {isDark ? 'Ativar Claro' : 'Ativar Escuro'}
        </button>
      </section>

      {/* Disciplinas em Destaque no Edital */}
      <section
        className={`rounded-2xl p-4 shadow-md space-y-3 transition-colors ${
          isDark
            ? 'bg-slate-900 border border-slate-800'
            : 'bg-white border border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Rendimento por Disciplina
          </h3>
          <span
            className="text-[11px] text-amber-500 hover:text-amber-600 font-medium cursor-pointer"
            onClick={onIniciarQuestoes}
          >
            Ver todas →
          </span>
        </div>

        <div className="space-y-2">
          {materias.map((materia) => {
            const questoesDaMateria = questoes.filter((q) => {
              const qd = q.disciplina.toLowerCase();
              const md = materia.nome.toLowerCase();
              if (md.includes('constitucional')) return qd.includes('constitucional');
              if (md.includes('igualdade') || md.includes('raça')) return qd.includes('igualdade') || qd.includes('raça');
              if (md.includes('história')) return qd.includes('história');
              if (md.includes('portuguesa') || md.includes('português')) return qd.includes('portugues') || qd.includes('português');
              if (md.includes('administrativo')) return qd.includes('administrativo');
              if (md.includes('humanos')) return qd.includes('humanos');
              if (md.includes('geografia')) return qd.includes('geografia');
              if (md.includes('penal')) return qd.includes('penal');
              return qd.includes(md.split(' ')[0]);
            });
            const respondidasMat = questoesDaMateria.filter((q) => !!historicoRespostas[q.id]);
            const acertosMat = respondidasMat.filter((q) => historicoRespostas[q.id]?.acertou).length;
            const taxaMat = respondidasMat.length > 0 ? Math.round((acertosMat / respondidasMat.length) * 100) : 0;

            return (
              <div
                key={materia.id}
                onClick={() => onIrParaMateria(materia.nome)}
                className={`p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-3 active:scale-[0.99] ${
                  isDark
                    ? 'bg-[#08172c] hover:bg-[#0d223f] border border-slate-800'
                    : 'bg-slate-50 hover:bg-blue-50/50 border border-slate-200'
                }`}
              >
                <div className="truncate">
                  <div className="flex items-center gap-1.5">
                    <h4 className={`text-xs font-bold truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {materia.nome}
                    </h4>
                    {materia.relevancia === 'Muito Alta' && (
                      <span className="text-[8px] px-1 py-0.2 rounded bg-red-950 text-red-300 font-extrabold border border-red-800 shrink-0">
                        Peso Alto
                      </span>
                    )}
                  </div>
                  <p className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {respondidasMat.length} de {questoesDaMateria.length} respondida(s) • {materia.totalQuestoesEdital}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`font-mono font-bold text-xs ${
                      respondidasMat.length > 0
                        ? taxaMat >= 70
                          ? 'text-emerald-500'
                          : 'text-amber-500'
                        : isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    {respondidasMat.length > 0 ? `${taxaMat}%` : 'Pendente'}
                  </span>
                  <div className={`text-[10px] flex items-center justify-end gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span>Resolver</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dica da Semana para o Concurso da PMBA */}
      <div
        className={`p-3.5 rounded-2xl text-xs space-y-1 transition-colors ${
          isDark
            ? 'bg-gradient-to-r from-blue-950/80 via-slate-900 to-slate-950 border border-blue-700/40'
            : 'bg-blue-50/80 border border-blue-200'
        }`}
      >
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-amber-500">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Estratégia de Aprovação PMBA</span>
        </div>
        <p className={`leading-relaxed text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Priorize Direito Constitucional (Art. 5º e 144), Igualdade Racial e de Gênero e o Estatuto dos Policiais Militares da Bahia (Lei 7.990/2001). Juntas, representam mais de 40% da pontuação específica.
        </p>
      </div>

      {/* Reset Button */}
      <div className="pt-1 text-center">
        <button
          onClick={() => {
            if (window.confirm('Tem certeza que deseja reiniciar todo o progresso do simulado e nuvem?')) {
              onResetarProgresso();
            }
          }}
          className={`text-[11px] flex items-center justify-center gap-1 mx-auto transition-colors cursor-pointer py-1 ${
            isDark ? 'text-slate-500 hover:text-rose-400' : 'text-slate-400 hover:text-rose-600'
          }`}
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reiniciar Progresso Salvo</span>
        </button>
      </div>
    </div>
  );
};
