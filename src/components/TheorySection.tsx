import React, { useState } from 'react';
import {
  ChevronDown,
  BookOpen,
  Scale,
  HeartHandshake,
  Landmark,
  ShieldAlert,
  Globe2,
  MapPin,
  Gavel,
  Clock,
  Lightbulb,
  Search,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MateriaEdital, TopicoTeoria } from '../types';
import { useTheme } from '../context/ThemeContext';

interface TheorySectionProps {
  materias: MateriaEdital[];
  onIrParaQuestoesDaMateria: (disciplinaNome: string) => void;
  topicosLidos: Record<string, boolean>;
  onToggleLido: (topicoId: string) => void;
  onAbrirGerador?: (disciplina?: string, assunto?: string) => void;
}

// Icon helper
const getMateriaIcon = (iconName: string) => {
  const iconProps = { className: 'w-5 h-5 text-amber-500' };
  switch (iconName) {
    case 'Scale':
      return <Scale {...iconProps} />;
    case 'HeartHandshake':
      return <HeartHandshake {...iconProps} />;
    case 'Landmark':
      return <Landmark {...iconProps} />;
    case 'ShieldAlert':
      return <ShieldAlert {...iconProps} />;
    case 'Globe2':
      return <Globe2 {...iconProps} />;
    case 'MapPin':
      return <MapPin {...iconProps} />;
    case 'Gavel':
      return <Gavel {...iconProps} />;
    default:
      return <BookOpen {...iconProps} />;
  }
};

export const TheorySection: React.FC<TheorySectionProps> = ({
  materias,
  onIrParaQuestoesDaMateria,
  topicosLidos,
  onToggleLido,
  onAbrirGerador,
}) => {
  const { isDark } = useTheme();
  const [expandedMateriaId, setExpandedMateriaId] = useState<string | null>(materias[0]?.id || null);
  const [selectedTopico, setSelectedTopico] = useState<{
    materia: MateriaEdital;
    topico: TopicoTeoria;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleMateria = (id: string) => {
    setExpandedMateriaId((prev) => (prev === id ? null : id));
  };

  const toggleLido = (topicoId: string) => {
    onToggleLido(topicoId);
  };

  // Filter materias & topics based on search term
  const filteredMaterias = materias.filter((m) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const matchMateria = m.nome.toLowerCase().includes(term) || m.descricao.toLowerCase().includes(term);
    const matchTopicos = m.topicos.some(
      (t) =>
        t.titulo.toLowerCase().includes(term) ||
        t.resumoIntro.toLowerCase().includes(term) ||
        t.dicaDeProva.toLowerCase().includes(term)
    );
    return matchMateria || matchTopicos;
  });

  return (
    <div className="w-full max-w-md mx-auto space-y-4 pb-24">
      {/* Search Header */}
      <section
        className={`rounded-2xl p-3.5 shadow-md space-y-2.5 transition-colors ${
          isDark
            ? 'bg-slate-900/90 border border-slate-800'
            : 'bg-white border border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-sm font-bold flex items-center gap-1.5 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              <BookOpen className="w-4 h-4 text-amber-500" />
              Sumário Teórico do Edital PMBA
            </h2>
            <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Resumos táticos, pontos-chave e bizus de prova
            </p>
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
            isDark
              ? 'bg-blue-950 text-blue-300 border-blue-800'
              : 'bg-blue-50 text-blue-900 border-blue-200'
          }`}>
            {materias.length} Disciplinas
          </span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
            isDark ? 'text-slate-400' : 'text-slate-400'
          }`} />
          <input
            id="input-busca-teoria"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar assunto (ex: crase, Maria da Penha, 2 de Julho)..."
            className={`w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border focus:outline-none focus:border-amber-400 transition-colors ${
              isDark
                ? 'bg-slate-950 text-slate-100 placeholder-slate-500 border-slate-700/80'
                : 'bg-slate-50 text-slate-900 placeholder-slate-400 border-slate-300'
            }`}
          />
        </div>
      </section>

      {/* Accordion / Sanfona List */}
      <div className="space-y-3">
        {filteredMaterias.map((materia) => {
          const isExpanded = expandedMateriaId === materia.id || !!searchTerm.trim();

          return (
            <div
              key={materia.id}
              id={`accordion-materia-${materia.id}`}
              className={`rounded-2xl border overflow-hidden shadow-lg transition-colors ${
                isDark
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* Header do Accordion da Matéria */}
              <button
                type="button"
                onClick={() => toggleMateria(materia.id)}
                className={`w-full px-4 py-3.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer select-none ${
                  isDark
                    ? 'bg-[#08172c] hover:bg-[#0c203b]'
                    : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                    isDark
                      ? 'bg-blue-950 border-blue-800/80'
                      : 'bg-blue-50 border-blue-200'
                  }`}>
                    {getMateriaIcon(materia.icone)}
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xs sm:text-sm font-bold truncate ${
                        isDark ? 'text-slate-100' : 'text-slate-900'
                      }`}>
                        {materia.nome}
                      </h3>
                      {materia.relevancia === 'Muito Alta' && (
                        <span className={`text-[9px] px-1.5 py-0.2 rounded font-extrabold border shrink-0 ${
                          isDark
                            ? 'bg-red-950 text-red-300 border-red-800'
                            : 'bg-red-50 text-red-700 border-red-200'
                        }`}>
                          Peso Alto
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] truncate mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {materia.totalQuestoesEdital}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`text-[11px] font-semibold ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {materia.topicos.length} {materia.topicos.length === 1 ? 'tópico' : 'tópicos'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded
                        ? 'rotate-180 text-amber-500'
                        : isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  />
                </div>
              </button>

              {/* Subtópicos da Matéria */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`border-t p-3 space-y-2.5 ${
                      isDark
                        ? 'border-slate-800/80 bg-slate-950/70'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <p className={`text-[11px] px-1 italic ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {materia.descricao}
                    </p>

                    <div className="space-y-2">
                      {materia.topicos.map((topico) => {
                        const isLido = topicosLidos[topico.id];
                        return (
                          <div
                            key={topico.id}
                            className={`rounded-xl p-3 border transition-all space-y-2 ${
                              isDark
                                ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                                : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-start gap-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleLido(topico.id);
                                  }}
                                  className={`mt-0.5 shrink-0 cursor-pointer ${
                                    isLido
                                      ? 'text-emerald-500'
                                      : isDark
                                      ? 'text-slate-600 hover:text-slate-400'
                                      : 'text-slate-300 hover:text-slate-500'
                                  }`}
                                  title={isLido ? 'Marcar como não lido' : 'Marcar como estudado'}
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                                <div>
                                  <h4 className={`text-xs font-bold leading-snug ${
                                    isDark ? 'text-slate-200' : 'text-slate-800'
                                  }`}>
                                    {topico.titulo}
                                  </h4>
                                  <div className={`flex items-center gap-2 mt-1 text-[10px] font-medium ${
                                    isDark ? 'text-slate-400' : 'text-slate-500'
                                  }`}>
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3 h-3 text-amber-500" />
                                      {topico.tempoLeituraMin} min de leitura
                                    </span>
                                    <span>•</span>
                                    <span className="text-blue-600 font-semibold">Teoria Tática</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Action to open topic reading modal / view */}
                            <div className={`flex items-center justify-between pt-1 border-t ${
                              isDark ? 'border-slate-800/60' : 'border-slate-100'
                            }`}>
                              <button
                                type="button"
                                onClick={() => setSelectedTopico({ materia, topico })}
                                className={`text-xs font-bold flex items-center gap-1 py-1 px-2.5 rounded-lg border active:scale-95 cursor-pointer ${
                                  isDark
                                    ? 'text-amber-400 hover:text-amber-300 bg-amber-950/40 border-amber-500/30'
                                    : 'text-amber-900 hover:bg-amber-100 bg-amber-50 border-amber-300'
                                }`}
                              >
                                <span>Ler Teoria & Bizus</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>

                              <div className="flex items-center gap-1.5">
                                {onAbrirGerador && (
                                  <button
                                    type="button"
                                    onClick={() => onAbrirGerador(materia.nome, topico.titulo)}
                                    className={`text-[11px] font-bold flex items-center gap-1 py-1 px-2 rounded-lg border cursor-pointer ${
                                      isDark
                                        ? 'text-amber-400 bg-amber-950/40 border-amber-500/30 hover:bg-amber-950/70'
                                        : 'text-amber-900 bg-amber-100 border-amber-300 hover:bg-amber-200'
                                    }`}
                                    title="Gerar questões inéditas com IA sobre este tópico"
                                  >
                                    <Sparkles className="w-3 h-3 text-amber-500" />
                                    <span>+ IA</span>
                                  </button>
                                )}

                                <button
                                  type="button"
                                  onClick={() => onIrParaQuestoesDaMateria(materia.nome)}
                                  className={`text-[11px] font-semibold flex items-center gap-1 py-1 px-2 rounded-lg border cursor-pointer ${
                                    isDark
                                      ? 'text-blue-300 hover:text-blue-200 bg-blue-950/60 border-blue-800/60'
                                      : 'text-blue-900 hover:bg-blue-100 bg-blue-50 border-blue-200'
                                  }`}
                                  title="Treinar questões desta matéria"
                                >
                                  <span>Questões</span>
                                  <ExternalLink className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Modal / Fullscreen Reading Sheet for Selected Topic */}
      <AnimatePresence>
        {selectedTopico && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`border rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden shadow-2xl ${
                isDark
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* Modal Header */}
              <div className={`p-4 border-b flex items-center justify-between shrink-0 ${
                isDark
                  ? 'bg-[#08172c] border-slate-800'
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="overflow-hidden pr-2">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">
                    {selectedTopico.materia.nome}
                  </span>
                  <h3 className={`text-sm font-bold truncate ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}>
                    {selectedTopico.topico.titulo}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedTopico(null)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer ${
                    isDark
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  ✕
                </button>
              </div>

              {/* Modal Body (Scrollable Theory Text) */}
              <div className={`p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                {/* Intro Summary */}
                <div className={`p-3.5 rounded-xl border leading-relaxed ${
                  isDark
                    ? 'bg-slate-950/70 border-slate-800 text-slate-300'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    Resumo Direto ao Ponto
                  </h4>
                  <p>{selectedTopico.topico.resumoIntro}</p>
                </div>

                {/* Key Points */}
                <div className="space-y-2">
                  <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}>
                    <Tag className="w-3.5 h-3.5 text-amber-500" />
                    Pontos Oficiais Mais Cobrados no Edital
                  </h4>
                  <ul className="space-y-2">
                    {selectedTopico.topico.pontosImportantes.map((ponto, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 p-2.5 rounded-xl border leading-relaxed ${
                          isDark
                            ? 'bg-slate-950/40 border-slate-800/80 text-slate-300'
                            : 'bg-white border-slate-200 text-slate-700 shadow-2xs'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border ${
                          isDark
                            ? 'bg-blue-900/60 text-blue-300 border-blue-700/50'
                            : 'bg-blue-100 text-blue-900 border-blue-200'
                        }`}>
                          {i + 1}
                        </span>
                        <span>{ponto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Caixa de Destaque "Dica de Prova / Bizu do Concurso PMBA" */}
                <div className={`p-4 rounded-2xl border-2 shadow-lg space-y-1.5 ${
                  isDark
                    ? 'bg-gradient-to-br from-amber-950/80 via-amber-900/30 to-red-950/50 border-amber-500/70 text-amber-100'
                    : 'bg-amber-50 border-amber-400 text-amber-950'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black shrink-0">
                      <Lightbulb className="w-4 h-4 fill-slate-950" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-black uppercase tracking-wider leading-none ${
                        isDark ? 'text-amber-300' : 'text-amber-900'
                      }`}>
                        Dica de Prova • Bizu da PMBA
                      </h4>
                      <span className={`text-[10px] font-medium ${
                        isDark ? 'text-amber-400/90' : 'text-amber-700'
                      }`}>
                        Pegadinhas clássicas da banca (FCC / IBFC)
                      </span>
                    </div>
                  </div>
                  <p className={`text-xs leading-relaxed font-semibold pt-1 border-t ${
                    isDark ? 'border-amber-500/30' : 'border-amber-200'
                  }`}>
                    {selectedTopico.topico.dicaDeProva}
                  </p>
                </div>

                {/* Legislação de Referência */}
                <div className={`p-3 rounded-xl border text-[11px] flex items-center justify-between ${
                  isDark
                    ? 'bg-slate-950/50 border-slate-800 text-slate-400'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}>
                  <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Referência Legal:</span>
                  <span className="text-amber-600 font-mono text-[10px] font-bold">
                    {selectedTopico.topico.legislacaoOuReferencia}
                  </span>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className={`p-4 border-t flex items-center gap-2.5 shrink-0 ${
                isDark
                  ? 'bg-[#08172c] border-slate-800'
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <button
                  type="button"
                  onClick={() => {
                    toggleLido(selectedTopico.topico.id);
                  }}
                  className={`flex-1 min-h-[44px] rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    topicosLidos[selectedTopico.topico.id]
                      ? isDark
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                        : 'bg-emerald-100 border-emerald-400 text-emerald-900'
                      : isDark
                      ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                      : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    {topicosLidos[selectedTopico.topico.id]
                      ? 'Tópico Estudado ✓'
                      : 'Marcar como Estudado'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const materiaNome = selectedTopico.materia.nome;
                    setSelectedTopico(null);
                    onIrParaQuestoesDaMateria(materiaNome);
                  }}
                  className="flex-1 min-h-[44px] rounded-xl font-bold text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center justify-center gap-1.5 border border-blue-400/40 cursor-pointer shadow-md shadow-blue-900/30"
                >
                  <span>Treinar Questões</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
