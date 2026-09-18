import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  BrainCircuit,
  Filter,
  Trash2,
  Play,
  CheckCircle,
  BookOpen,
  Search,
  Award,
  Layers,
  ShieldCheck,
  RefreshCw,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { Questao, RespostaUsuario } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CadernoIASectionProps {
  questoesGeradas: Questao[];
  historicoRespostas: Record<string, RespostaUsuario>;
  onResponderQuestao: (questaoId: string, alternativaId: any) => void;
  onAbrirGerador: () => void;
  onRemoverQuestaoIA: (id: string) => void;
  onLimparTodasQuestoesIA: () => void;
}

export const CadernoIASection: React.FC<CadernoIASectionProps> = ({
  questoesGeradas,
  historicoRespostas,
  onResponderQuestao,
  onAbrirGerador,
  onRemoverQuestaoIA,
  onLimparTodasQuestoesIA,
}) => {
  const { isDark } = useTheme();
  const [selectedDisciplina, setSelectedDisciplina] = useState<string>('todas');
  const [selectedDificuldade, setSelectedDificuldade] = useState<string>('todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeQuestaoIndex, setActiveQuestaoIndex] = useState<number | null>(null);
  const [respostasAtuais, setRespostasAtuais] = useState<Record<string, string>>({});
  const [mostrarExplicacao, setMostrarExplicacao] = useState<Record<string, boolean>>({});

  const disciplinasDisponiveis = useMemo(() => {
    const set = new Set<string>();
    questoesGeradas.forEach(q => {
      if (q.disciplina) set.add(q.disciplina);
    });
    return Array.from(set);
  }, [questoesGeradas]);

  const questoesFiltradas = useMemo(() => {
    return questoesGeradas.filter(q => {
      const matchDisc = selectedDisciplina === 'todas' || q.disciplina.toLowerCase() === selectedDisciplina.toLowerCase();
      const matchDif = selectedDificuldade === 'todas' || q.dificuldade === selectedDificuldade;
      const matchSearch = !searchTerm || 
        q.enunciado.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.assunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.disciplina.toLowerCase().includes(searchTerm.toLowerCase());
      return matchDisc && matchDif && matchSearch;
    });
  }, [questoesGeradas, selectedDisciplina, selectedDificuldade, searchTerm]);

  const totalAcertos = useMemo(() => {
    return questoesGeradas.filter(q => historicoRespostas[q.id]?.acertou).length;
  }, [questoesGeradas, historicoRespostas]);

  const handleSelecionarAlternativa = (questaoId: string, altId: string) => {
    setRespostasAtuais(prev => ({ ...prev, [questaoId]: altId }));
    setMostrarExplicacao(prev => ({ ...prev, [questaoId]: true }));
    onResponderQuestao(questaoId, altId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header Caderno IA */}
      <div className={`p-6 rounded-3xl border shadow-xl relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-indigo-950/90 via-slate-900 to-slate-950 border-indigo-500/30' 
          : 'bg-gradient-to-br from-indigo-50 via-white to-blue-50 border-indigo-200'
      }`}>
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <BrainCircuit className="w-48 h-48 text-indigo-500" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Caderno Exclusivo de Questões Inéditas IA</span>
            </div>
            <h1 className={`text-2xl md:text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Banco de Questões Inteligentes PMBA
            </h1>
            <p className={`text-sm max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Questões geradas por inteligência artificial com rigor estatístico e pedagógico para o padrão de cobrança da PMBA. Separado do banco oficial de provas anteriores.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onAbrirGerador}
              className="px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 flex items-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Gerar Nova Bateria com IA</span>
            </button>

            {questoesGeradas.length > 0 && (
              <button
                onClick={onLimparTodasQuestoesIA}
                className={`px-4 py-3 rounded-2xl font-bold text-xs border flex items-center gap-2 cursor-pointer transition-all ${
                  isDark 
                    ? 'bg-rose-950/40 border-rose-500/30 text-rose-300 hover:bg-rose-900/50' 
                    : 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100'
                }`}
                title="Limpar Caderno de IA"
              >
                <Trash2 className="w-4 h-4" />
                <span>Limpar Caderno</span>
              </button>
            )}
          </div>
        </div>

        {/* Estatísticas Rápidas do Caderno */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-indigo-500/20">
          <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-indigo-100'}`}>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Total no Caderno
            </span>
            <div className={`text-2xl font-black mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {questoesGeradas.length} <span className="text-xs font-medium text-slate-500">questões</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-indigo-100'}`}>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Acertos Confirmados
            </span>
            <div className="text-2xl font-black mt-1 text-emerald-500">
              {totalAcertos} <span className="text-xs font-medium text-slate-500">corretas</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-indigo-100'}`}>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Disciplinas Únicas
            </span>
            <div className={`text-2xl font-black mt-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              {disciplinasDisponiveis.length}
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-indigo-100'}`}>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Taxa de Aproveitamento
            </span>
            <div className={`text-2xl font-black mt-1 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
              {questoesGeradas.length > 0 ? Math.round((totalAcertos / questoesGeradas.length) * 100) : 0}%
            </div>
          </div>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className={`p-4 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar em enunciados..."
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border outline-none font-medium transition-all ${
                isDark 
                  ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500' 
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500'
              }`}
            />
          </div>

          <select
            value={selectedDisciplina}
            onChange={(e) => setSelectedDisciplina(e.target.value)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border outline-none cursor-pointer ${
              isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
            }`}
          >
            <option value="todas">Todas as Disciplinas ({questoesGeradas.length})</option>
            {disciplinasDisponiveis.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={selectedDificuldade}
            onChange={(e) => setSelectedDificuldade(e.target.value)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border outline-none cursor-pointer ${
              isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
            }`}
          >
            <option value="todas">Todas as Dificuldades</option>
            <option value="Fácil">Fácil</option>
            <option value="Média">Média</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>

        <div className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Mostrando <span className="font-bold text-indigo-500">{questoesFiltradas.length}</span> de {questoesGeradas.length} questões
        </div>
      </div>

      {/* Lista de Questões IA */}
      {questoesFiltradas.length === 0 ? (
        <div className={`p-12 text-center rounded-3xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} space-y-4`}>
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
            <BrainCircuit className="w-8 h-8" />
          </div>
          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Nenhuma questão de IA encontrada com os filtros atuais
          </h3>
          <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Gere novas baterias personalizadas clicando no botão abaixo para abastecer seu caderno exclusivo.
          </p>
          <button
            onClick={onAbrirGerador}
            className="px-6 py-3 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Gerar Nova Bateria Agora</span>
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {questoesFiltradas.map((q, idx) => {
            const respostaSalva = historicoRespostas[q.id];
            const alternativaEscolhida = respostasAtuais[q.id] || respostaSalva?.alternativaEscolhida;
            const resolvida = Boolean(alternativaEscolhida);
            const acertou = respostaSalva?.acertou ?? (alternativaEscolhida === q.respostaCorreta);
            const showExp = mostrarExplicacao[q.id] || resolvida;

            return (
              <div
                key={q.id}
                className={`p-6 rounded-3xl border transition-all space-y-4 ${
                  isDark ? 'bg-slate-900 border-slate-800 shadow-lg' : 'bg-white border-slate-200 shadow-md'
                }`}
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-black bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                      IA PMBA #{idx + 1}
                    </span>
                    <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {q.disciplina}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {q.assunto}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      q.dificuldade === 'Fácil' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/25' :
                      q.dificuldade === 'Média' ? 'bg-amber-500/10 text-amber-500 border-amber-500/25' :
                      'bg-rose-500/10 text-rose-500 border-rose-500/25'
                    }`}>
                      {q.dificuldade}
                    </span>
                    <button
                      onClick={() => onRemoverQuestaoIA(q.id)}
                      className={`p-1.5 rounded-lg border text-slate-400 hover:text-rose-500 hover:border-rose-500/30 cursor-pointer transition-colors ${
                        isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}
                      title="Remover esta questão do caderno"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Enunciado */}
                <p className={`text-sm md:text-base font-medium leading-relaxed ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {q.enunciado}
                </p>

                {/* Alternativas */}
                <div className="space-y-2.5 pt-2">
                  {q.alternativas.map((alt) => {
                    const isSelected = alternativaEscolhida === alt.id;
                    const isCorrect = alt.id === q.respostaCorreta;
                    
                    let btnStyle = isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700' : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300';
                    
                    if (resolvida) {
                      if (isCorrect) {
                        btnStyle = isDark ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200 font-bold' : 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = isDark ? 'bg-rose-950/50 border-rose-500/50 text-rose-200 font-bold' : 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                      }
                    } else if (isSelected) {
                      btnStyle = isDark ? 'bg-indigo-950/50 border-indigo-500 text-indigo-200' : 'bg-indigo-50 border-indigo-300 text-indigo-950';
                    }

                    return (
                      <button
                        key={alt.id}
                        disabled={resolvida}
                        onClick={() => handleSelecionarAlternativa(q.id, alt.id)}
                        className={`w-full text-left p-3.5 rounded-2xl border text-xs md:text-sm flex items-start gap-3 transition-all cursor-pointer ${btnStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-lg font-bold flex items-center justify-center shrink-0 ${
                          resolvida && isCorrect ? 'bg-emerald-500 text-slate-950' :
                          resolvida && isSelected && !isCorrect ? 'bg-rose-500 text-white' :
                          isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {alt.id}
                        </span>
                        <span className="leading-relaxed pt-0.5">{alt.texto}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Comentário e Gabarito Comentado */}
                {showExp && q.comentario && (
                  <div className={`mt-4 p-5 rounded-2xl border space-y-3 ${
                    isDark ? 'bg-slate-950 border-indigo-500/30 text-slate-300' : 'bg-indigo-50/60 border-indigo-200 text-slate-800'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-indigo-500 text-white flex items-center justify-center font-bold text-xs">
                          <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-xs font-black uppercase tracking-wider ${isDark ? 'text-indigo-400' : 'text-indigo-900'}`}>
                          Gabarito Comentado • {q.comentario.professor || 'Coordenação Pedagógica PMBA'}
                        </span>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-lg ${
                        acertou ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                      }`}>
                        {acertou ? '✓ Você Acertou!' : '✗ Resposta Incorreta'}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed">
                      {q.comentario.analiseGeral}
                    </p>

                    {q.comentario.justificativaAlternativas && (
                      <div className="space-y-1 pt-2 border-t border-indigo-500/20 text-[11px]">
                        <span className="font-bold block mb-1">Análise das Alternativas:</span>
                        {Object.entries(q.comentario.justificativaAlternativas).map(([idAlt, justificativa]) => (
                          <div key={idAlt} className="flex items-start gap-1.5">
                            <span className="font-bold font-mono shrink-0">({idAlt}):</span>
                            <span className={idAlt === q.respostaCorreta ? 'text-emerald-500 font-semibold' : 'opacity-80'}>
                              {String(justificativa)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {q.comentario.bizuPMBA && (
                      <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                        isDark ? 'bg-amber-950/30 border-amber-500/30 text-amber-200' : 'bg-amber-50 border-amber-300 text-amber-950'
                      }`}>
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[11px] font-black uppercase tracking-wide">Bizu PMBA:</strong>
                          <span className="text-xs leading-relaxed">{q.comentario.bizuPMBA}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
