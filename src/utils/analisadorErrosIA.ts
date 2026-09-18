import { Questao, RespostaUsuario, MateriaEdital, TopicoTeoria } from '../types';
import { canonicalizeDisciplina } from './disciplinaUtils';

export interface DiagnosticoIA {
  tipoCenario: 'com_erros' | 'sem_erros_com_questoes' | 'sem_questoes';
  totalRespondidas: number;
  totalAcertos: number;
  totalErros: number;
  taxaAcertoGeral: number;
  materiaAlvo: MateriaEdital;
  topicoAlvo: TopicoTeoria;
  assuntoNome: string;
  errosNoTema: number;
  acertosNoTema: number;
  taxaAcertoNoTema: number;
  motivoDestaque: string;
  diagnosticoPedagogico: string;
  planoAcao: string[];
  bizuDeOuro: string;
  origem: 'ia_remota' | 'ia_local';
}

/**
 * Mapeamento semântico entre termos/assuntos de questões e IDs de tópicos da teoria
 */
const MAPEAMENTO_TOPICOS_CHAVE: Array<{
  topicoId: string;
  materiaId: string;
  termos: string[];
}> = [
  // Direito Constitucional
  {
    topicoId: 'tc-1',
    materiaId: 'mat-const',
    termos: ['domicilio', 'inviolabilidade', 'art. 5', 'artigo 5', 'remedio', 'habeas corpus', 'mandado de seguranca', 'habeas data', 'garantias fundamentais', 'prisao legal', 'casa']
  },
  {
    topicoId: 'tc-2',
    materiaId: 'mat-const',
    termos: ['144', 'seguranca publica', 'policia militar', 'policia ostensiva', 'ordem publica', 'forcas auxiliares', 'guarda municipal', 'bombeiro militar', 'exercito']
  },
  // Direito Penal
  {
    topicoId: 'tpen-1',
    materiaId: 'mat-penal',
    termos: ['ilicitude', 'legitima defesa', 'estado de necessidade', 'estrito cumprimento', 'exercicio regular', 'artigo 23', 'art. 23', 'excludente', 'excesso punivel', 'agressao injusta']
  },
  {
    topicoId: 'tpen-2',
    materiaId: 'mat-penal',
    termos: ['furto', 'roubo', 'extorsao', 'patrimonio', '155', '157', '158', 'coisa alheia', 'grave ameaca', 'subtracao']
  },
  // Direito Administrativo
  {
    topicoId: 'ta-1',
    materiaId: 'mat-admin',
    termos: ['estatuto', '7.990', 'hierarquia', 'disciplina', 'comandante geral', 'circulo hierarquico', 'policiais militares da bahia', 'uniforme', 'regime disciplinar', 'postos e graduacoes']
  },
  {
    topicoId: 'ta-2',
    materiaId: 'mat-admin',
    termos: ['limpe', 'art. 37', 'artigo 37', 'legalidade', 'impessoalidade', 'moralidade', 'publicidade', 'eficiencia', 'principios expressos', 'administracao publica']
  },
  // Direitos Humanos
  {
    topicoId: 'tdh-1',
    materiaId: 'mat-dh',
    termos: ['dudh', '1948', 'onu', 'tortura', 'presuncao de inocencia', 'direitos humanos', 'declaracao universal', 'san jose', 'pacto']
  },
  // Igualdade Racial e de Gênero
  {
    topicoId: 'ti-1',
    materiaId: 'mat-igualdade',
    termos: ['12.288', 'estatuto da igualdade racial', 'populacao negra', 'pretos e pardos', 'acoes afirmativas', 'quilombola', 'preconceito', 'discriminacao racial']
  },
  {
    topicoId: 'ti-2',
    materiaId: 'mat-igualdade',
    termos: ['maria da penha', '11.340', 'violencia domestica', 'violencia moral', 'violencia patrimonial', 'violencia psicologica', 'violencia fisica', 'violencia sexual', 'medidas protetivas']
  },
  // História da Bahia
  {
    topicoId: 'th-1',
    materiaId: 'mat-historia',
    termos: ['2 de julho', '1823', 'independencia da bahia', 'piraja', 'maria quiteria', 'maria felipa', 'joana angelica', 'corneteiro lopes', 'madeira de melo', 'cachoeira', 'labatut']
  },
  {
    topicoId: 'th-2',
    materiaId: 'mat-historia',
    termos: ['buzios', 'alfaiates', 'conjuracao baiana', '1798', 'males', '1835', 'canudos', 'antonio conselheiro', 'escravidao', 'nagô', 'islamismo']
  },
  // Geografia da Bahia
  {
    topicoId: 'tg-1',
    materiaId: 'mat-geo',
    termos: ['caatinga', 'cerrado', 'mata atlantica', 'semiarido', 'sao francisco', 'velho chico', 'bioma', 'clima', 'sobradinho', 'oeste baiano', 'chapada diamantina']
  },
  // Língua Portuguesa
  {
    topicoId: 'tp-1',
    materiaId: 'mat-port',
    termos: ['crase', 'preposicao', 'locucao feminina', 'fusao', 'a craseado', 'facultativa', 'maria']
  },
  {
    topicoId: 'tp-2',
    materiaId: 'mat-port',
    termos: ['concordancia', 'verbo haver', 'verbo fazer', 'impessoal', 'sujeito', 'concordancia verbal', 'existir', 'havia']
  },
  // Raciocínio Lógico
  {
    topicoId: 'trlm-1',
    materiaId: 'mat-rlm',
    termos: ['logica proposicional', 'conectivos', 'se entao', 'condicional', 'regra do mane', 'equivalencia', 'de morgan', 'tabela verdade', 'negacao']
  }
];

function normalizarTexto(texto: string): string {
  return (texto || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function identificarMateriaId(disciplina: string): string | null {
  const norm = normalizarTexto(canonicalizeDisciplina(disciplina));
  if (norm.includes('constitucional')) return 'mat-const';
  if (norm.includes('penal')) return 'mat-penal';
  if (norm.includes('admin')) return 'mat-admin';
  if (norm.includes('humano')) return 'mat-dh';
  if (norm.includes('igualdade') || norm.includes('racial') || norm.includes('genero')) return 'mat-igualdade';
  if (norm.includes('historia')) return 'mat-historia';
  if (norm.includes('geografia')) return 'mat-geo';
  if (norm.includes('portugues')) return 'mat-port';
  if (norm.includes('logica') || norm.includes('matematica') || norm.includes('rlm')) return 'mat-rlm';
  return null;
}

/**
 * Encontra a matéria e o tópico exatos dentro de TEORIA_PMBA
 */
function encontrarTopicoNoEdital(
  topicoId: string,
  materias: MateriaEdital[]
): { materia: MateriaEdital; topico: TopicoTeoria } | null {
  for (const m of materias) {
    const t = m.topicos.find((item) => item.id === topicoId);
    if (t) return { materia: m, topico: t };
  }
  return null;
}

/**
 * Algoritmo determinístico de análise de fraquezas e seleção de tema de reforço
 */
export function analisarHistoricoParaSugestaoTeoria(
  questoes: Questao[],
  historicoRespostas: Record<string, RespostaUsuario>,
  materias: MateriaEdital[],
  topicosLidos: Record<string, boolean> = {}
): DiagnosticoIA {
  const mapaQuestoes = new Map<string, Questao>();
  questoes.forEach((q) => {
    if (q.id) mapaQuestoes.set(q.id, q);
  });

  const respostasArray = Object.values(historicoRespostas);
  const totalRespondidas = respostasArray.length;
  const acertosTotal = respostasArray.filter((r) => r.acertou).length;
  const errosTotal = totalRespondidas - acertosTotal;
  const taxaGeral = totalRespondidas > 0 ? Math.round((acertosTotal / totalRespondidas) * 100) : 0;

  // CENÁRIO 1: Usuário ainda não respondeu nenhuma questão
  if (totalRespondidas === 0) {
    const par = encontrarTopicoNoEdital('tc-1', materias) || {
      materia: materias[0],
      topico: materias[0].topicos[0]
    };

    return {
      tipoCenario: 'sem_questoes',
      totalRespondidas: 0,
      totalAcertos: 0,
      totalErros: 0,
      taxaAcertoGeral: 0,
      materiaAlvo: par.materia,
      topicoAlvo: par.topico,
      assuntoNome: 'Art. 5º da CF/88 (Garantias e Inviolabilidade)',
      errosNoTema: 0,
      acertosNoTema: 0,
      taxaAcertoNoTema: 0,
      motivoDestaque: 'Disciplina de maior peso e índice de recorrência nas provas da PMBA.',
      diagnosticoPedagogico:
        'Você ainda não respondeu questões nesta sessão. Para construir uma base sólida antes de testar simulados, a recomendação tática é iniciar pelo Artigo 5º da Constituição Federal, que concentra a maior fatia de pontos do edital.',
      planoAcao: [
        '1. Leia o resumo com foco em Inviolabilidade de Domicílio (regra do dia x noite)',
        '2. Grave os Remédios Constitucionais gratuitos (Habeas Corpus e Habeas Data)',
        '3. Faça o primeiro simulado diagnóstico para mapear suas áreas fortes'
      ],
      bizuDeOuro:
        'Regra de ouro FCC/IBFC: Mandado judicial NUNCA autoriza entrada domiciliar à noite sem consentimento! À noite, somente socorro, desastre ou flagrante delito.',
      origem: 'ia_local'
    };
  }

  // CENÁRIO 2: Usuário respondeu questões mas teve ZERO erros (100% acertos)
  if (errosTotal === 0) {
    // Escolhe o primeiro tópico ainda NÃO lido pelo usuário, ou o Estatuto dos PMs da Bahia
    let alvo = encontrarTopicoNoEdital('ta-1', materias); // Estatuto PMBA como prioridade de legislação
    for (const m of materias) {
      for (const t of m.topicos) {
        if (!topicosLidos[t.id]) {
          alvo = { materia: m, topico: t };
          break;
        }
      }
      if (alvo && !topicosLidos[alvo.topico.id]) break;
    }

    const par = alvo || { materia: materias[0], topico: materias[0].topicos[0] };

    return {
      tipoCenario: 'sem_erros_com_questoes',
      totalRespondidas,
      totalAcertos: acertosTotal,
      totalErros: 0,
      taxaAcertoGeral: 100,
      materiaAlvo: par.materia,
      topicoAlvo: par.topico,
      assuntoNome: par.topico.titulo,
      errosNoTema: 0,
      acertosNoTema: acertosTotal,
      taxaAcertoNoTema: 100,
      motivoDestaque: 'Excelente precisão! Reforço proativo da legislação específica da PMBA.',
      diagnosticoPedagogico:
        `Você manteve 100% de acertos nas ${totalRespondidas} questões resolvidas. Para garantir a nota de corte nas primeiras colocações, a IA recomenda avançar na teoria de tópicos com alta densidade de pegadinhas como "${par.topico.titulo}".`,
      planoAcao: [
        `1. Faça uma leitura tática de ${par.topico.tempoLeituraMin} minutos da teoria`,
        '2. Memorize os mnemônicos e exceções destacadas no material',
        '3. Gere 3 questões inéditas difíceis com IA para testar sua retenção'
      ],
      bizuDeOuro: par.topico.dicaDeProva || 'Mantenha o ritmo de resolução diária sem relaxar nos detalhes legislativos.',
      origem: 'ia_local'
    };
  }

  // CENÁRIO 3: Usuário possui erros registrados no histórico!
  // Agrupar e pontuar cada tópico do edital com base nos erros do aluno
  interface ScoreTopico {
    topicoId: string;
    materiaId: string;
    erros: number;
    acertos: number;
    pesoEdital: number;
    jaLido: boolean;
    assuntoExemplo: string;
    scoreTotal: number;
  }

  const scoresMap = new Map<string, ScoreTopico>();

  // Inicializa mapa de tópicos
  MAPEAMENTO_TOPICOS_CHAVE.forEach((mapItem) => {
    scoresMap.set(mapItem.topicoId, {
      topicoId: mapItem.topicoId,
      materiaId: mapItem.materiaId,
      erros: 0,
      acertos: 0,
      pesoEdital: mapItem.materiaId === 'mat-const' || mapItem.materiaId === 'mat-admin' || mapItem.materiaId === 'mat-penal' ? 3 : 2,
      jaLido: !!topicosLidos[mapItem.topicoId],
      assuntoExemplo: '',
      scoreTotal: 0
    });
  });

  // Mapear cada resposta do usuário
  Object.entries(historicoRespostas).forEach(([qId, resp]) => {
    const q = mapaQuestoes.get(qId);
    if (!q) return;

    const discNorm = normalizarTexto(canonicalizeDisciplina(q.disciplina));
    const assNorm = normalizarTexto(q.assunto || '');
    const enunNorm = normalizarTexto(q.enunciado || '');
    const textoCombinado = `${discNorm} ${assNorm} ${enunNorm}`;

    // Procurar o tópico correspondente dentro da matéria da questão
    let topicoCorrespondenteId: string | null = null;
    let maxMatch = 0;
    const materiaIdAlvo = identificarMateriaId(q.disciplina);

    // Se temos a matéria identificada, procuramos primeiro dentro dela
    const candidatos = materiaIdAlvo
      ? MAPEAMENTO_TOPICOS_CHAVE.filter((item) => item.materiaId === materiaIdAlvo)
      : MAPEAMENTO_TOPICOS_CHAVE;

    candidatos.forEach((item) => {
      let matches = 0;
      item.termos.forEach((termo) => {
        if (textoCombinado.includes(termo)) {
          matches += termo.length;
        }
      });
      if (matches > maxMatch) {
        maxMatch = matches;
        topicoCorrespondenteId = item.topicoId;
      }
    });

    // Se não encontrou por termos específicos dentro da matéria, usa o tópico padrão da matéria
    if (!topicoCorrespondenteId) {
      if (candidatos.length > 0) {
        topicoCorrespondenteId = candidatos[0].topicoId;
      } else if (discNorm.includes('constitucional')) topicoCorrespondenteId = 'tc-1';
      else if (discNorm.includes('penal')) topicoCorrespondenteId = 'tpen-1';
      else if (discNorm.includes('admin')) topicoCorrespondenteId = 'ta-1';
      else if (discNorm.includes('humano')) topicoCorrespondenteId = 'tdh-1';
      else if (discNorm.includes('igualdade') || discNorm.includes('racial') || discNorm.includes('genero')) topicoCorrespondenteId = 'ti-1';
      else if (discNorm.includes('historia')) topicoCorrespondenteId = 'th-1';
      else if (discNorm.includes('geografia')) topicoCorrespondenteId = 'tg-1';
      else if (discNorm.includes('portugues')) topicoCorrespondenteId = 'tp-1';
      else if (discNorm.includes('logica') || discNorm.includes('matematica')) topicoCorrespondenteId = 'trlm-1';
    }

    if (topicoCorrespondenteId && scoresMap.has(topicoCorrespondenteId)) {
      const registro = scoresMap.get(topicoCorrespondenteId)!;
      if (resp.acertou) {
        registro.acertos += 1;
      } else {
        registro.erros += 1;
        if (!registro.assuntoExemplo && q.assunto) {
          registro.assuntoExemplo = q.assunto;
        }
      }
    }
  });

  // Calcular score de urgência pedagógica para cada tópico
  let maiorScore = -1;
  let topicoVencedorId = 'tc-1';

  scoresMap.forEach((reg) => {
    if (reg.erros > 0) {
      const totalFeitas = reg.erros + reg.acertos;
      const taxaErro = totalFeitas > 0 ? reg.erros / totalFeitas : 1;
      // Score pondera: total de erros (peso 4), taxa de erro (peso 3), peso no edital (peso 2), não lido (bônus)
      let score = reg.erros * 4 + taxaErro * 3 + reg.pesoEdital * 2;
      if (!reg.jaLido) {
        score += 3; // Urgente porque o candidato ainda nem leu a teoria!
      }
      reg.scoreTotal = score;

      if (score > maiorScore) {
        maiorScore = score;
        topicoVencedorId = reg.topicoId;
      }
    }
  });

  const regVencedor = scoresMap.get(topicoVencedorId);
  const par = encontrarTopicoNoEdital(topicoVencedorId, materias) || {
    materia: materias[0],
    topico: materias[0].topicos[0]
  };

  const errosTema = regVencedor ? regVencedor.erros : errosTotal;
  const acertosTema = regVencedor ? regVencedor.acertos : 0;
  const totalTema = errosTema + acertosTema;
  const taxaTema = totalTema > 0 ? Math.round((acertosTema / totalTema) * 100) : 0;

  const assuntoFormatado = regVencedor?.assuntoExemplo || par.topico.titulo;

  return {
    tipoCenario: 'com_erros',
    totalRespondidas,
    totalAcertos: acertosTotal,
    totalErros: errosTotal,
    taxaAcertoGeral: taxaGeral,
    materiaAlvo: par.materia,
    topicoAlvo: par.topico,
    assuntoNome: assuntoFormatado,
    errosNoTema: errosTema,
    acertosNoTema: acertosTema,
    taxaAcertoNoTema: taxaTema,
    motivoDestaque: `Atenção: ${errosTema} erro(s) detectado(s) neste tema com aproveitamento de ${taxaTema}%.`,
    diagnosticoPedagogico: `Identificamos que a maior perda de pontos no seu histórico recente está concentrada em "${par.materia.nome}" (especialmente nos conceitos de "${par.topico.titulo}"). A revisão teórica imediata desse ponto evitará novos tropeços no simulado.`,
    planoAcao: [
      `1. Revise a teoria tática: "${par.topico.titulo}" (${par.topico.tempoLeituraMin} min)`,
      '2. Fixe as exceções e a dica de ouro do edital destacadas',
      '3. Resolva uma bateria de 3 a 5 questões exclusivas desse assunto para blindar o conhecimento'
    ],
    bizuDeOuro: par.topico.dicaDeProva,
    origem: 'ia_local'
  };
}

/**
 * Consulta a IA remota no backend para enriquecer o diagnóstico ou retorna o determinístico
 */
export async function obterRecomendacaoIaComGemini(
  questoes: Questao[],
  historicoRespostas: Record<string, RespostaUsuario>,
  materias: MateriaEdital[],
  topicosLidos: Record<string, boolean>
): Promise<DiagnosticoIA> {
  const base = analisarHistoricoParaSugestaoTeoria(questoes, historicoRespostas, materias, topicosLidos);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch('/api/ia-o-que-estudar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        totalRespondidas: base.totalRespondidas,
        totalAcertos: base.totalAcertos,
        totalErros: base.totalErros,
        taxaGeral: base.taxaAcertoGeral,
        disciplinaAlvo: base.materiaAlvo.nome,
        topicoIdAlvo: base.topicoAlvo.id,
        topicoTituloAlvo: base.topicoAlvo.titulo,
        errosNoTema: base.errosNoTema,
        taxaAcertoNoTema: base.taxaAcertoNoTema,
        dicaBase: base.topicoAlvo.dicaDeProva
      }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.diagnosticoPedagogico) {
        return {
          ...base,
          diagnosticoPedagogico: data.diagnosticoPedagogico || base.diagnosticoPedagogico,
          planoAcao: Array.isArray(data.planoAcao) && data.planoAcao.length > 0 ? data.planoAcao : base.planoAcao,
          bizuDeOuro: data.bizuDeOuro || base.bizuDeOuro,
          origem: 'ia_remota'
        };
      }
    }
  } catch {
    // Graceful fallback to verified local diagnostic - zero interruption
  }

  return base;
}
