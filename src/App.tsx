import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { BottomNav, ActiveTab } from './components/BottomNav';
import { QuestionCard } from './components/QuestionCard';
import { TheorySection } from './components/TheorySection';
import { StatsModal } from './components/StatsModal';
import { HomeDashboard } from './components/HomeDashboard';
import { GeradorQuestoesModal } from './components/GeradorQuestoesModal';
import { RedacaoSection } from './components/RedacaoSection';
import { CadernoIASection } from './components/CadernoIASection';
import { SidebarModes } from './components/SidebarModes';
import { ThreeDotsMenu } from './components/ThreeDotsMenu';
import { CoberturaEditalModal } from './components/CoberturaEditalModal';
import { QUESTOES_PMBA, TEORIA_PMBA } from './data/mockData';
import {
  AlternativaId,
  RespostaUsuario,
  Questao,
  ConfigAltaPerformance,
  MetaEstudo,
  FiltroVisualizacao,
  ModoEstudo,
} from './types';
import { useTheme } from './context/ThemeContext';
import {
  loadUserDataFromFirestore,
  saveUserDataToFirestore,
  resetUserDataInFirestore,
} from './lib/syncService';
import { prefetchProximasQuestoes } from './lib/geminiQuestionService';
import { canonicalizeDisciplina, isTodasMateriasFilter } from './utils/disciplinaUtils';

const STORAGE_KEY_RESPOSTAS = 'simulado_pmba_respostas_v1';
const STORAGE_KEY_TOPICOS = 'simulado_pmba_topicos_v1';
const STORAGE_KEY_QUESTOES_GERADAS = 'simulado_pmba_questoes_geradas_v1';
const STORAGE_KEY_OCULTAR_RESPONDIDAS = 'simulado_pmba_ocultar_respondidas_v1';
const STORAGE_KEY_CONFIG_ALTA_PERF = 'simulado_pmba_config_alta_perf_v1';
const STORAGE_KEY_METAS_ESTUDO = 'simulado_pmba_metas_estudo_v1';
const STORAGE_KEY_FILTRO_VISUALIZACAO = 'simulado_pmba_filtro_visualizacao_v1';
const STORAGE_KEY_HASHES_PROCESSADOS = 'simulado_pmba_hashes_processados_v1';

/**
 * Normaliza o texto de enunciados para indexação e cálculo de similaridade
 */
function normalizeEnunciado(text: string): string {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Gera um hash determinístico e identificador para um enunciado
 */
function generateEnunciadoHash(text: string): string {
  const norm = normalizeEnunciado(text);
  let hash = 5381;
  for (let i = 0; i < norm.length; i++) {
    hash = ((hash << 5) + hash) + norm.charCodeAt(i);
    hash |= 0;
  }
  const prefix = norm.slice(0, 32).replace(/\s+/g, '_');
  return `h_${Math.abs(hash)}_${prefix}`;
}

/**
 * Calcula a similaridade textual (0.0 a 1.0) entre dois enunciados
 * Combina Sørensen-Dice (trigramas de caracteres) e Jaccard de tokens de palavras
 */
function calculateEnunciadoSimilarity(str1: string, str2: string): number {
  const s1 = normalizeEnunciado(str1);
  const s2 = normalizeEnunciado(str2);

  if (!s1 || !s2) return 0;
  if (s1 === s2) return 1.0;

  // Checagem de substring de tamanho proporcional
  if (s1.includes(s2) || s2.includes(s1)) {
    const minLen = Math.min(s1.length, s2.length);
    const maxLen = Math.max(s1.length, s2.length);
    const ratio = minLen / maxLen;
    if (ratio >= 0.8) return ratio;
  }

  // 1. Coeficiente Sørensen-Dice baseado em trigramas de caracteres
  let dice = 0;
  if (s1.length >= 3 && s2.length >= 3) {
    const getTrigrams = (str: string) => {
      const trigrams = new Map<string, number>();
      for (let i = 0; i <= str.length - 3; i++) {
        const gram = str.substring(i, i + 3);
        trigrams.set(gram, (trigrams.get(gram) || 0) + 1);
      }
      return trigrams;
    };

    const tri1 = getTrigrams(s1);
    const tri2 = getTrigrams(s2);

    let intersection = 0;
    let total1 = 0;
    for (const [gram, count] of tri1.entries()) {
      total1 += count;
      if (tri2.has(gram)) {
        intersection += Math.min(count, tri2.get(gram)!);
      }
    }
    let total2 = 0;
    for (const count of tri2.values()) {
      total2 += count;
    }

    if (total1 + total2 > 0) {
      dice = (2 * intersection) / (total1 + total2);
    }
  }

  // 2. Coeficiente Jaccard sobre tokens de palavras (> 2 caracteres)
  let jaccard = 0;
  const tokens1 = new Set(s1.split(' ').filter((t) => t.length > 2));
  const tokens2 = new Set(s2.split(' ').filter((t) => t.length > 2));
  if (tokens1.size > 0 && tokens2.size > 0) {
    let tokenIntersection = 0;
    tokens1.forEach((t) => {
      if (tokens2.has(t)) tokenIntersection++;
    });
    const tokenUnion = new Set([...tokens1, ...tokens2]).size;
    jaccard = tokenUnion > 0 ? tokenIntersection / tokenUnion : 0;
  }

  return Math.max(dice, jaccard);
}

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

  // High performance configuration state
  const [configAltaPerformance, setConfigAltaPerformance] = useState<ConfigAltaPerformance>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CONFIG_ALTA_PERF);
      if (saved) return JSON.parse(saved);
    } catch (err) {
      console.warn('Erro ao carregar config alta performance:', err);
    }
    return {
      prefetchAtivado: true,
      tempoLimitePorQuestao: 120,
      modoTurboAtivado: false,
      audioFeedback: true,
      avancarAutomaticoAposResponder: false,
      ocultarComentariosAteResponder: true,
    };
  });

  // Monthly study goals & high-volume tracking state
  const [metaEstudo, setMetaEstudo] = useState<MetaEstudo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_METAS_ESTUDO);
      if (saved) return JSON.parse(saved);
    } catch (err) {
      console.warn('Erro ao carregar metas:', err);
    }
    return {
      metaDiariaQuestoes: 50,
      metaMensalQuestoes: 1500,
      questoesFeitasHoje: 0,
      questoesFeitasMes: 0,
      taxaAcertoAlvo: 80,
      streakDias: 1,
      dataUltimoEstudo: new Date().toISOString().split('T')[0],
    };
  });

  // Filter mode: todas, nao_respondidas, erros, acertos
  const [filtroVisualizacao, setFiltroVisualizacao] = useState<FiltroVisualizacao>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FILTRO_VISUALIZACAO);
      if (saved && ['todas', 'nao_respondidas', 'erros', 'acertos'].includes(saved)) {
        return saved as FiltroVisualizacao;
      }
    } catch {}
    return 'todas';
  });

  // AI Question Generator Modal states
  const [isGeradorOpen, setIsGeradorOpen] = useState<boolean>(false);
  const [geradorDisciplina, setGeradorDisciplina] = useState<string>('Direito Constitucional');
  const [geradorAssunto, setGeradorAssunto] = useState<string>('');
  const [geradorModo, setGeradorModo] = useState<ModoEstudo>('padrao');
  const [isPrefetching, setIsPrefetching] = useState<boolean>(false);

  // Sidebar Modes and Three-Dots Menu state
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isThreeDotsOpen, setIsThreeDotsOpen] = useState<boolean>(false);
  const [isCoberturaEditalOpen, setIsCoberturaEditalOpen] = useState<boolean>(false);
  const [theoryModoInicial, setTheoryModoInicial] = useState<'edital' | 'flashcards'>('edital');
  const [topicoTeoriaSelecionado, setTopicoTeoriaSelecionado] = useState<{ materiaId?: string; topicoId?: string } | null>(null);

  // User toggle: Ocultar questões já respondidas (padrão: ativado)
  const [ocultarRespondidas, setOcultarRespondidas] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_OCULTAR_RESPONDIDAS);
      return saved !== null ? saved === 'true' : true;
    } catch {
      return true;
    }
  });

  // Cache local de hashes de enunciados já processados para anti-duplicação (similaridade > 80%)
  const [hashesProcessadosCache, setHashesProcessadosCache] = useState<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    QUESTOES_PMBA.forEach((q) => {
      if (q.enunciado) {
        const hash = generateEnunciadoHash(q.enunciado);
        seed[hash] = normalizeEnunciado(q.enunciado);
      }
    });

    try {
      const saved = localStorage.getItem(STORAGE_KEY_HASHES_PROCESSADOS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...seed, ...parsed };
      }
    } catch (err) {
      console.warn('Erro ao carregar cache de hashes:', err);
    }
    return seed;
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

  // Combined pool: newly generated questions first, then base PMBA questions
  const todasQuestoes = useMemo(() => {
    const map = new Map<string, Questao>();
    // Prioritize user AI-generated questions so they are at the top and never masked
    for (const q of questoesGeradas) {
      if (q && q.id) {
        map.set(q.id, q);
      }
    }
    // Then add base questions if not already present
    for (const q of QUESTOES_PMBA) {
      if (q && q.id && !map.has(q.id)) {
        map.set(q.id, q);
      }
    }
    return Array.from(map.values());
  }, [questoesGeradas]);

  // Recalculate dynamic daily and monthly counts based on historicoRespostas timestamps
  const metaEstudoCalculada = useMemo<MetaEstudo>(() => {
    const hojeStr = new Date().toISOString().split('T')[0];
    const mesAtual = new Date().getMonth();
    const anoAtual = new Date().getFullYear();

    let feitasHoje = 0;
    let feitasMes = 0;

    (Object.values(historicoRespostas) as RespostaUsuario[]).forEach((r) => {
      if (r?.data) {
        const d = new Date(r.data);
        const dStr = d.toISOString().split('T')[0];
        if (dStr === hojeStr) feitasHoje++;
        if (d.getMonth() === mesAtual && d.getFullYear() === anoAtual) feitasMes++;
      } else {
        feitasHoje++;
        feitasMes++;
      }
    });

    return {
      ...metaEstudo,
      questoesFeitasHoje: feitasHoje,
      questoesFeitasMes: feitasMes,
      dataUltimoEstudo: hojeStr,
    };
  }, [historicoRespostas, metaEstudo]);

  // Aggregated errors for surgical training
  const errosUsuario = useMemo(() => {
    const mapaErros: Record<string, { disciplina: string; assunto: string; totalErros: number }> = {};

    todasQuestoes.forEach((q) => {
      const resp = historicoRespostas[q.id];
      if (resp && !resp.acertou) {
        const chave = `${q.disciplina}:::${q.assunto}`;
        if (!mapaErros[chave]) {
          mapaErros[chave] = {
            disciplina: q.disciplina,
            assunto: q.assunto,
            totalErros: 0,
          };
        }
        mapaErros[chave].totalErros += 1;
      }
    });

    return Object.values(mapaErros).sort((a, b) => b.totalErros - a.totalErros);
  }, [todasQuestoes, historicoRespostas]);

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
      localStorage.setItem(STORAGE_KEY_CONFIG_ALTA_PERF, JSON.stringify(configAltaPerformance));
      localStorage.setItem(STORAGE_KEY_METAS_ESTUDO, JSON.stringify(metaEstudo));
      localStorage.setItem(STORAGE_KEY_FILTRO_VISUALIZACAO, filtroVisualizacao);
      localStorage.setItem(STORAGE_KEY_HASHES_PROCESSADOS, JSON.stringify(hashesProcessadosCache));
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
  }, [historicoRespostas, topicosLidos, questoesGeradas, ocultarRespondidas, configAltaPerformance, metaEstudo, filtroVisualizacao, hashesProcessadosCache]);

  // Active question ID to keep the currently answered question visible until the user navigates
  const [questaoAtivaId, setQuestaoAtivaId] = useState<string | null>(null);
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);

  const handleEmbaralharQuestoes = useCallback(() => {
    setShuffleSeed(Date.now());
    setCurrentIndex(0);
    setQuestaoAtivaId(null);
  }, []);

  // Filtered questions respecting disciplina, assunto, banca, and filtroVisualizacao
  const questoesFiltradas = useMemo(() => {
    const norm = (s: string) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

    const isTodasMaterias = isTodasMateriasFilter(disciplinaFiltro);
    const targetCanon = canonicalizeDisciplina(disciplinaFiltro);

    const filtradas = todasQuestoes.filter((q) => {
      const matchDisciplina = isTodasMaterias || canonicalizeDisciplina(q.disciplina) === targetCanon;
      const matchAssunto =
        assuntoFiltro === 'Todos os Assuntos' ||
        norm(q.assunto) === norm(assuntoFiltro);
      const matchBanca = 
        bancaFiltro === 'Todas as Bancas' ||
        norm(q.banca) === norm(bancaFiltro);
      
      const resp = historicoRespostas[q.id];

      // Filtro por status visualização
      let matchStatus = true;
      if (filtroVisualizacao === 'nao_respondidas') {
        matchStatus = !resp;
      } else if (filtroVisualizacao === 'erros') {
        matchStatus = !!resp && !resp.acertou;
      } else if (filtroVisualizacao === 'acertos') {
        matchStatus = !!resp && resp.acertou;
      } else if (ocultarRespondidas) {
        matchStatus = !resp;
      }

      // CRITICAL FIX: Keep the currently active question in the list even if it was just answered
      // This allows the user to see the explanation before it vanishes due to the filter
      const isActive = q.id === questaoAtivaId;

      return matchDisciplina && matchAssunto && matchBanca && (matchStatus || isActive);
    });

    if (shuffleSeed > 0) {
      const arr = [...filtradas];
      let s = shuffleSeed;
      for (let i = arr.length - 1; i > 0; i--) {
        s = (s * 9301 + 49297) % 233280;
        const j = Math.floor((s / 233280) * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    return filtradas;
  }, [todasQuestoes, disciplinaFiltro, assuntoFiltro, bancaFiltro, ocultarRespondidas, filtroVisualizacao, historicoRespostas, questaoAtivaId, shuffleSeed]);

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
  const taxaAcerto = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;

  const handleResponder = (questaoId: string, alternativa: AlternativaId, tempoGasto?: number) => {
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
        tempoGasto: typeof tempoGasto === 'number' ? tempoGasto : undefined,
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
    localStorage.removeItem(STORAGE_KEY_HASHES_PROCESSADOS);

    // Reseed hashes with official base questions
    const seed: Record<string, string> = {};
    QUESTOES_PMBA.forEach((q) => {
      if (q.enunciado) {
        const hash = generateEnunciadoHash(q.enunciado);
        seed[hash] = normalizeEnunciado(q.enunciado);
      }
    });
    setHashesProcessadosCache(seed);

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
    const match = canonicalizeDisciplina(disciplinaNome);
    const lower = (disciplinaNome || '').toLowerCase();

    setDisciplinaFiltro(match);
    setAssuntoFiltro('Todos os Assuntos');
    setBancaFiltro('Todas as Bancas');
    setFiltroVisualizacao('todas');
    setCurrentIndex(0);
    setQuestaoAtivaId(null);
    if (lower.includes('aleat') || lower.includes('misto') || lower.includes('todas')) {
      handleEmbaralharQuestoes();
    }
    setActiveTab('questoes');
  };

  const handleAbrirGerador = (disciplina?: string, assunto?: string, modo?: ModoEstudo) => {
    if (modo) {
      setGeradorModo(modo);
    } else {
      setGeradorModo('padrao');
    }

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

  /**
   * Valida questões candidatas geradas pela IA contra o cache de hashes e o histórico existente.
   * Descarta imediatamente qualquer item que possua similaridade superior a 80% (0.80).
   */
  const filtrarQuestoesDuplicadasOuSemelhantes = useCallback((
    candidatas: Questao[],
    questoesExistentes: Questao[],
    cacheHashes: Record<string, string>
  ): { aceitas: Questao[]; novosHashes: Record<string, string>; totalDescartadas: number } => {
    const aceitas: Questao[] = [];
    const novosHashes: Record<string, string> = {};

    // Pool de todos os enunciados já existentes normalizados
    const enunciadosExistentesNormalizados: string[] = [
      ...questoesExistentes.map((q) => normalizeEnunciado(q.enunciado)),
      ...Object.values(cacheHashes),
    ];

    let totalDescartadas = 0;

    for (const q of candidatas) {
      if (!q.enunciado || q.enunciado.trim().length < 8) {
        totalDescartadas++;
        continue;
      }

      const normEnunciado = normalizeEnunciado(q.enunciado);
      const hash = generateEnunciadoHash(q.enunciado);

      // 1. Checagem direta de hash no cache e no lote aprovado
      if (cacheHashes[hash] || novosHashes[hash]) {
        totalDescartadas++;
        continue;
      }

      // 2. Checagem estrita de similaridade > 20% (0.20) contra o histórico
      let isDuplicadaOuSimilar = false;
      for (const textoExistente of enunciadosExistentesNormalizados) {
        const similaridade = calculateEnunciadoSimilarity(normEnunciado, textoExistente);
        if (similaridade > 0.20) {
          isDuplicadaOuSimilar = true;
          break;
        }
      }

      if (isDuplicadaOuSimilar) {
        totalDescartadas++;
        continue;
      }

      // Aprovada: questão inédita com similaridade <= 80%
      aceitas.push(q);
      novosHashes[hash] = normEnunciado;
      enunciadosExistentesNormalizados.push(normEnunciado);
    }

    return { aceitas, novosHashes, totalDescartadas };
  }, []);

  const handleRemoverQuestaoIA = (id: string) => {
    setQuestoesGeradas((prev) => prev.filter((q) => q.id !== id));
  };

  const handleLimparTodasQuestoesIA = () => {
    if (window.confirm('Tem certeza que deseja limpar todas as questões geradas por IA do seu caderno?')) {
      setQuestoesGeradas([]);
    }
  };

  const handleNovasQuestoesGeradas = (novasQuestoes: Questao[], disciplinaGerada: string) => {
    if (!novasQuestoes || novasQuestoes.length === 0) return;

    const discDestino = canonicalizeDisciplina(disciplinaGerada);
    const timestamp = Date.now();

    // Prepare fresh questions with unique IDs, clean canonical fields and strict validation
    const preparedNovas: Questao[] = novasQuestoes
      .filter((q) => q && q.enunciado && q.alternativas && q.alternativas.length >= 2)
      .map((q, idx) => {
        // Guaranteed unique fresh ID ensuring it has no prior answer history
        const uniqueId = `q-ia-user-${timestamp}-${idx + 1}-${Math.random().toString(36).substring(2, 7)}`;
        const qDisc = canonicalizeDisciplina(q.disciplina || discDestino);

        return {
          ...q,
          id: uniqueId,
          disciplina: discDestino === 'Todas as Matérias (Misto Aleatório)' ? qDisc : discDestino,
          banca: q.banca || 'IBFC/FCC (PMBA)',
          ano: q.ano || 2026,
          dificuldade: q.dificuldade || 'Média',
        };
      });

    if (preparedNovas.length === 0) return;

    // Filter duplicates and near-identical questions (>80% similarity or same hash)
    const { aceitas, novosHashes } = filtrarQuestoesDuplicadasOuSemelhantes(
      preparedNovas,
      todasQuestoes,
      hashesProcessadosCache
    );

    const questoesFinais = aceitas.length > 0 ? aceitas : preparedNovas;

    // Make sure historicoRespostas has NO recorded answer for these new IDs
    setHistoricoRespostas((prev) => {
      let changed = false;
      const copy = { ...prev };
      questoesFinais.forEach((q) => {
        if (copy[q.id]) {
          delete copy[q.id];
          changed = true;
        }
      });
      return changed ? copy : prev;
    });

    // Update hashes cache with the approved questions
    const hashesParaAtualizar: Record<string, string> = { ...novosHashes };
    questoesFinais.forEach((q) => {
      if (q.enunciado) {
        const hash = generateEnunciadoHash(q.enunciado);
        hashesParaAtualizar[hash] = normalizeEnunciado(q.enunciado);
      }
    });
    setHashesProcessadosCache((prev) => ({
      ...prev,
      ...hashesParaAtualizar,
    }));

    // Prepend new questions to questoesGeradas so they immediately appear first
    setQuestoesGeradas((prev) => {
      const existingIds = new Set(prev.map((q) => q.id));
      const toAdd = questoesFinais.filter((q) => !existingIds.has(q.id));
      return [...toAdd, ...prev];
    });

    // Reset filters that could hide or exclude the new questions
    setDisciplinaFiltro(discDestino);
    setAssuntoFiltro('Todos os Assuntos');
    setBancaFiltro('Todas as Bancas');
    setFiltroVisualizacao('todas');
    setQuestaoAtivaId(questoesFinais[0].id);
    setCurrentIndex(0);
    setActiveTab('questoes');
  };

  // Background Prefetching when running low on unseen questions
  const handleTriggerPrefetch = useCallback(async () => {
    if (isPrefetching || !configAltaPerformance.prefetchAtivado) return;
    setIsPrefetching(true);
    try {
      const questoesUnicasAtuais = todasQuestoes.filter(q => q.disciplina === disciplinaFiltro);
      const novas = await prefetchProximasQuestoes(disciplinaFiltro, assuntoFiltro, questoesUnicasAtuais);
      if (novas.length > 0) {
        const { aceitas, novosHashes } = filtrarQuestoesDuplicadasOuSemelhantes(
          novas,
          todasQuestoes,
          hashesProcessadosCache
        );

        if (Object.keys(novosHashes).length > 0) {
          setHashesProcessadosCache((prev) => ({
            ...prev,
            ...novosHashes,
          }));
        }

        if (aceitas.length > 0) {
          setQuestoesGeradas((prev) => {
            const ids = new Set(prev.map((q) => q.id));
            const toAdd = aceitas.filter((q) => !ids.has(q.id));
            return [...toAdd, ...prev];
          });
        }
      }
    } catch (err) {
      console.warn('Prefetch em segundo plano:', err);
    } finally {
      setIsPrefetching(false);
    }
  }, [disciplinaFiltro, assuntoFiltro, todasQuestoes, isPrefetching, configAltaPerformance.prefetchAtivado, hashesProcessadosCache, filtrarQuestoesDuplicadasOuSemelhantes]);

  // High-performance quick launchers
  const handleIniciarTreinoCirurgico = () => {
    const principalErro = errosUsuario[0];
    if (principalErro) {
      handleAbrirGerador(principalErro.disciplina, principalErro.assunto, 'treino_cirurgico');
    } else {
      handleAbrirGerador(disciplinaFiltro, undefined, 'treino_cirurgico');
    }
  };

  const handleIniciarSimuladoOficial = () => {
    handleAbrirGerador('Direito Constitucional', undefined, 'simulado_oficial');
  };

  const handleIniciarMaratonaTurbo = () => {
    handleAbrirGerador(disciplinaFiltro, assuntoFiltro !== 'Todos os Assuntos' ? assuntoFiltro : undefined, 'maratona');
  };

  const handleAtualizarMeta = (novasMetas: Partial<MetaEstudo>) => {
    setMetaEstudo(prev => ({ ...prev, ...novasMetas }));
  };

  const handleAtualizarConfig = (novasConfigs: Partial<ConfigAltaPerformance>) => {
    setConfigAltaPerformance(prev => ({ ...prev, ...novasConfigs }));
  };

  // Handler para treinar diretamente um assunto específico do Edital
  const handleTreinarAssuntoEdital = (disciplina: string, assunto: string) => {
    setDisciplinaFiltro(disciplina);
    setAssuntoFiltro(assunto);
    setBancaFiltro('Todas as Bancas');
    setFiltroVisualizacao('todas');
    setCurrentIndex(0);
    setQuestaoAtivaId(null);
    setActiveTab('questoes');
  };

  // Handler para abrir tópico específico na Teoria (via IA, o que estudar?)
  const handleAbrirTopicoTeoria = (materiaId: string, topicoId: string) => {
    setTopicoTeoriaSelecionado({ materiaId, topicoId });
    setTheoryModoInicial('edital');
    setActiveTab('teoria');
  };

  // Sidebar Modes selector handler
  const handleSelectSidebarModo = (modoId: string, extraParam?: string) => {
    switch (modoId) {
      case 'simulado_misto':
        setDisciplinaFiltro('Todas as Matérias (Misto Aleatório)');
        setAssuntoFiltro('Todos os Assuntos');
        setBancaFiltro('Todas as Bancas');
        handleEmbaralharQuestoes();
        setActiveTab('questoes');
        break;
      case 'treino_cirurgico':
        handleIniciarTreinoCirurgico();
        break;
      case 'maratona_turbo':
        handleIniciarMaratonaTurbo();
        break;
      case 'simulado_oficial':
        handleIniciarSimuladoOficial();
        break;
      case 'caderno_erros':
        setFiltroVisualizacao('erros');
        setActiveTab('questoes');
        break;
      case 'cobertura_edital':
        setIsCoberturaEditalOpen(true);
        break;
      case 'flashcards':
        setTheoryModoInicial('flashcards');
        setActiveTab('teoria');
        break;
      case 'teoria':
        setTheoryModoInicial('edital');
        setActiveTab('teoria');
        break;
      case 'redacao':
        setActiveTab('redacao');
        break;
      case 'gerador_ia':
        handleAbrirGerador();
        break;
      case 'estatisticas':
        setIsStatsOpen(true);
        break;
      case 'materia_especifica':
        if (extraParam) {
          handleIrParaQuestoesDaMateria(extraParam);
        }
        break;
      default:
        break;
    }
  };

  // Three-dots menu actions handler
  const handleSelectThreeDotsAction = (actionId: string) => {
    switch (actionId) {
      case 'cobertura_edital':
        setIsCoberturaEditalOpen(true);
        break;
      case 'flashcards':
        setTheoryModoInicial('flashcards');
        setActiveTab('teoria');
        break;
      case 'teoria':
        setTheoryModoInicial('edital');
        setActiveTab('teoria');
        break;
      case 'redacao':
        setActiveTab('redacao');
        break;
      case 'estatisticas':
        setIsStatsOpen(true);
        break;
      case 'gerador_ia':
        handleAbrirGerador();
        break;
      case 'resetar_simulado':
        handleResetarTudo();
        break;
      default:
        break;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-start antialiased selection:bg-tactical-accent selection:text-slate-950 transition-colors duration-200 ${
      isDark ? 'bg-camouflage text-slate-100' : 'bg-slate-50 text-slate-900'
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
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onOpenThreeDots={() => setIsThreeDotsOpen(true)}
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
                  metaEstudo={metaEstudoCalculada}
                  configAltaPerformance={configAltaPerformance}
                  onAtualizarMeta={handleAtualizarMeta}
                  onAtualizarConfig={handleAtualizarConfig}
                  onIniciarTreinoCirurgico={handleIniciarTreinoCirurgico}
                  onIniciarSimuladoOficial={handleIniciarSimuladoOficial}
                  onIniciarMaratonaTurbo={handleIniciarMaratonaTurbo}
                  onIniciarQuestoes={() => setActiveTab('questoes')}
                  onEstudarTeoria={() => setActiveTab('teoria')}
                  onIrParaMateria={handleIrParaQuestoesDaMateria}
                  onResetarProgresso={handleResetarTudo}
                  cloudSyncStatus={cloudSyncStatus}
                  onAbrirGerador={handleAbrirGerador}
                  onTreinarAssunto={handleTreinarAssuntoEdital}
                  onAbrirMatrizCompleta={() => setIsCoberturaEditalOpen(true)}
                  onAbrirTopicoTeoria={handleAbrirTopicoTeoria}
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
                  filtroVisualizacao={filtroVisualizacao}
                  onSetFiltroVisualizacao={(f) => {
                    setFiltroVisualizacao(f);
                    setCurrentIndex(0);
                    setQuestaoAtivaId(null);
                  }}
                  onAbrirGerador={() => handleAbrirGerador()}
                  configAltaPerformance={configAltaPerformance}
                  onTriggerPrefetch={handleTriggerPrefetch}
                  isPrefetching={isPrefetching}
                  onEmbaralhar={handleEmbaralharQuestoes}
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
                  initialModoExibicao={theoryModoInicial}
                  topicoInicialSelecionado={topicoTeoriaSelecionado}
                  questoes={todasQuestoes}
                  historicoRespostas={historicoRespostas}
                />
              </motion.div>
            ) : activeTab === 'redacao' ? (
              <motion.div
                key="tab-redacao"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <RedacaoSection />
              </motion.div>
            ) : (
              <motion.div
                key="tab-caderno-ia"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <CadernoIASection
                  questoesGeradas={questoesGeradas}
                  historicoRespostas={historicoRespostas}
                  onResponderQuestao={(qId, altId) => {
                    handleResponder(qId, altId);
                  }}
                  onAbrirGerador={handleAbrirGerador}
                  onRemoverQuestaoIA={handleRemoverQuestaoIA}
                  onLimparTodasQuestoesIA={handleLimparTodasQuestoesIA}
                />
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
          questoesAICount={questoesGeradas.length}
        />
      </div>

      {/* Sidebar with All Modes */}
      <SidebarModes
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSelectModo={handleSelectSidebarModo}
        totalRespondidas={totalRespondidas}
        taxaAcerto={taxaAcerto}
        materias={TEORIA_PMBA}
        errosCount={errosUsuario.length}
      />

      {/* Three Dots ("...") Options Menu */}
      <ThreeDotsMenu
        isOpen={isThreeDotsOpen}
        onClose={() => setIsThreeDotsOpen(false)}
        onSelectAction={handleSelectThreeDotsAction}
      />

      {/* Stats Modal */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        historicoRespostas={historicoRespostas}
        todasQuestoes={todasQuestoes}
        onResetarTudo={handleResetarTudo}
        onIrParaMateria={handleIrParaQuestoesDaMateria}
      />

      {/* Cobertura do Edital (Bater o Edital) Modal */}
      <CoberturaEditalModal
        isOpen={isCoberturaEditalOpen}
        onClose={() => setIsCoberturaEditalOpen(false)}
        questoes={todasQuestoes}
        historicoRespostas={historicoRespostas}
        topicosLidos={topicosLidos}
        onTreinarAssunto={handleTreinarAssuntoEdital}
        onEstudarTeoria={(disc) => {
          setIsCoberturaEditalOpen(false);
          setTheoryModoInicial('edital');
          setActiveTab('teoria');
        }}
        onAbrirGerador={handleAbrirGerador}
      />

      {/* AI Question Generator Modal */}
      <GeradorQuestoesModal
        isOpen={isGeradorOpen}
        onClose={() => setIsGeradorOpen(false)}
        disciplinaInicial={geradorDisciplina}
        assuntoInicial={geradorAssunto}
        modoInicial={geradorModo}
        errosUsuario={errosUsuario}
        questoesExistentes={todasQuestoes}
        onQuestoesGeradas={handleNovasQuestoesGeradas}
      />
    </div>
  );
}

