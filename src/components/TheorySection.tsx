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

interface TheorySectionProps {
  materias: MateriaEdital[];
  onIrParaQuestoesDaMateria: (disciplinaNome: string) => void;
}

// Icon helper
const getMateriaIcon = (iconName: string) => {
  const iconProps = { className: 'w-5 h-5 text-amber-400' };
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
  onIrParaQuestoesDaMateria
}) => {
  const [expandedMateriaId, setExpandedMateriaId] = useState<string | null>(materias[0]?.id || null);
  const [selectedTopico, setSelectedTopico] = useState<{
    materia: MateriaEdital;
    topico: TopicoTeoria;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [topicosLidos, setTopicosLidos] = useState<Record<string, boolean>>({});

  const toggleMateria = (id: string) => {
    setExpandedMateriaId((prev) => (prev === id ? null : id));
  };

  const toggleLido = (topicoId: string) => {
    setTopicosLidos((prev) => ({
      ...prev,
      [topicoId]: !prev[topicoId]
    }));
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
      <section className="bg-slate-900/90 rounded-2xl border border-slate-800 p-3.5 shadow-md space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              Sumário Teórico do Edital PMBA
            </h2>
            <p className="text-[11px] text-slate-400">
              Resumos táticos, pontos-chave e bizus de prova
            </p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
            {materias.length} Disciplinas
          </span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="input-busca-teoria"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar assunto (ex: crase, Maria da Penha, 2 de Julho)..."
            className="w-full text-xs bg-slate-950 text-slate-100 placeholder-slate-500 pl-9 pr-3 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-amber-400 transition-colors"
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
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg transition-colors"
            >
              {/* Header do Accordion da Matéria */}
              <button
                type="button"
                onClick={() => toggleMateria(materia.id)}
                className="w-full px-4 py-3.5 flex items-center justify-between text-left gap-3 bg-[#08172c] hover:bg-[#0c203b] transition-colors cursor-pointer select-none"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center shrink-0">
                    {getMateriaIcon(materia.icone)}
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-100 truncate">
                        {materia.nome}
                      </h3>
                      {materia.relevancia === 'Muito Alta' && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-950 text-red-300 font-extrabold border border-red-800 shrink-0">
                          Peso Alto
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                      {materia.totalQuestoesEdital}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {materia.topicos.length} {materia.topicos.length === 1 ? 'tópico' : 'tópicos'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-amber-400' : ''
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
                    className="border-t border-slate-800/80 bg-slate-950/70 p-3 space-y-2.5"
                  >
                    <p className="text-[11px] text-slate-400 px-1 italic">
                      {materia.descricao}
                    </p>

                    <div className="space-y-2">
                      {materia.topicos.map((topico) => {
                        const isLido = topicosLidos[topico.id];
                        return (
                          <div
                            key={topico.id}
                            className="bg-slate-900 rounded-xl p-3 border border-slate-800 hover:border-slate-700 transition-all space-y-2"
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
                                    isLido ? 'text-emerald-400' : 'text-slate-600 hover:text-slate-400'
                                  }`}
                                  title={isLido ? 'Marcar como não lido' : 'Marcar como estudado'}
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                                <div>
                                  <h4 className="text-xs font-bold text-slate-200 leading-snug">
                                    {topico.titulo}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400 font-medium">
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3 h-3 text-amber-400" />
                                      {topico.tempoLeituraMin} min de leitura
                                    </span>
                                    <span>•</span>
                                    <span className="text-blue-400">Teoria Tática</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Action to open topic reading modal / view */}
                            <div className="flex items-center justify-between pt-1 border-t border-slate-800/60">
                              <button
                                type="button"
                                onClick={() => setSelectedTopico({ materia, topico })}
                                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 py-1 px-2 rounded-lg bg-amber-950/40 border border-amber-500/30 active:scale-95 cursor-pointer"
                              >
                                <span>Ler Teoria & Bizus</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>

                              <button
                                type="button"
                                onClick={() => onIrParaQuestoesDaMateria(materia.nome)}
                                className="text-[11px] font-semibold text-blue-300 hover:text-blue-200 flex items-center gap-1 py-1 px-2 rounded-lg bg-blue-950/60 border border-blue-800/60 cursor-pointer"
                                title="Treinar questões desta matéria"
                              >
                                <span>Questões</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
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
              className="bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-4 bg-[#08172c] border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="overflow-hidden pr-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    {selectedTopico.materia.nome}
                  </span>
                  <h3 className="text-sm font-bold text-slate-100 truncate">
                    {selectedTopico.topico.titulo}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedTopico(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body (Scrollable Theory Text) */}
              <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-200">
                {/* Intro Summary */}
                <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 leading-relaxed text-slate-300">
                  <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    Resumo Direto ao Ponto
                  </h4>
                  <p>{selectedTopico.topico.resumoIntro}</p>
                </div>

                {/* Key Points (Bullet Points formatados) */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-amber-400" />
                    Pontos Oficiais Mais Cobrados no Edital
                  </h4>
                  <ul className="space-y-2">
                    {selectedTopico.topico.pontosImportantes.map((ponto, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80 leading-relaxed text-slate-300"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-700/50">
                          {i + 1}
                        </span>
                        <span>{ponto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Caixa de Destaque "Dica de Prova / Bizu do Concurso PMBA" */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/80 via-amber-900/30 to-red-950/50 border-2 border-amber-500/70 text-amber-100 shadow-lg space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black shrink-0">
                      <Lightbulb className="w-4 h-4 fill-slate-950" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 leading-none">
                        Dica de Prova • Bizu da PMBA
                      </h4>
                      <span className="text-[10px] text-amber-400/90 font-medium">
                        Pegadinhas clássicas da banca (FCC / IBFC)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed font-semibold pt-1 border-t border-amber-500/30">
                    {selectedTopico.topico.dicaDeProva}
                  </p>
                </div>

                {/* Legislação de Referência */}
                <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="font-semibold text-slate-300">Referência Legal:</span>
                  <span className="text-amber-300 font-mono text-[10px]">
                    {selectedTopico.topico.legislacaoOuReferencia}
                  </span>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 bg-[#08172c] border-t border-slate-800 flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    toggleLido(selectedTopico.topico.id);
                  }}
                  className={`flex-1 min-h-[44px] rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    topicosLidos[selectedTopico.topico.id]
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                      : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
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
