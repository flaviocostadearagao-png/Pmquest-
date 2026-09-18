import { Questao, RespostaUsuario, MateriaEdital } from '../types';

export interface AssuntoEditalDetalhado {
  id: string;
  disciplina: string;
  assunto: string;
  subtopicos?: string[];
  metaAcertosRequerida: number; // default 2
  taxaMinimaRequerida: number;  // default 70%
  // Computed properties
  totalQuestoesBanco: number;
  respondidas: number;
  acertos: number;
  erros: number;
  taxaAcerto: number;
  status: 'dominado' | 'em_progresso' | 'pendente';
  statusLabel: string;
  motivo: string;
  teoriaLida: boolean;
}

export interface DisciplinaCoberturaResumo {
  disciplina: string;
  totalAssuntos: number;
  assuntosDominados: number;
  assuntosEmProgresso: number;
  assuntosPendentes: number;
  porcentagemCobertura: number; // 0 to 100
  totalQuestoesBanco: number;
  questoesRespondidas: number;
  acertos: number;
  taxaAcertoGeral: number;
  assuntos: AssuntoEditalDetalhado[];
}

export interface EditalCoverageData {
  totalAssuntosEdital: number;
  assuntosDominados: number;
  assuntosEmProgresso: number;
  assuntosPendentes: number;
  porcentagemGeral: number; // 0 to 100 (Assuntos Dominados / Total)
  porcentagemComProgresso: number; // Dominados + 0.5 * Em progresso
  statusEdital: string;
  nivelClassificacao: string;
  mensagemMotivacional: string;
  disciplinas: DisciplinaCoberturaResumo[];
  regraDominioTexto: string;
}

// Catálogo Oficial dos Assuntos do Edital PMBA 2026
export const CATALOGO_EDITAL_PMBA: Array<{
  id: string;
  disciplina: string;
  assunto: string;
  aliases?: string[];
}> = [
  // 1. DIREITO CONSTITUCIONAL
  {
    id: 'const-01',
    disciplina: 'Direito Constitucional',
    assunto: 'Art. 5º da CF/88: Inviolabilidade de Domicílio e Prisão Legal',
    aliases: ['Art. 5º', 'Inviolabilidade de Domicílio', 'Direitos e Garantias Fundamentais']
  },
  {
    id: 'const-02',
    disciplina: 'Direito Constitucional',
    assunto: 'Remédios Constitucionais (Habeas Corpus, Mandado de Segurança, Habeas Data)',
    aliases: ['Remédios Constitucionais', 'Habeas Corpus', 'Mandado de Segurança', 'Habeas Data']
  },
  {
    id: 'const-03',
    disciplina: 'Direito Constitucional',
    assunto: 'Art. 144 da CF/88: Da Segurança Pública e Atribuições da PM',
    aliases: ['Art. 144', 'Segurança Pública', 'Polícia Militar', 'Atribuições da Polícia Militar']
  },
  {
    id: 'const-04',
    disciplina: 'Direito Constitucional',
    assunto: 'Direitos Sociais, Nacionalidade e Direitos Políticos (Arts. 6º a 17 da CF/88)',
    aliases: ['Direitos Sociais', 'Nacionalidade', 'Direitos Políticos']
  },

  // 2. NOÇÕES DE DIREITO PENAL
  {
    id: 'pen-01',
    disciplina: 'Noções de Direito Penal',
    assunto: 'Excludentes de Ilicitude e Legítima Defesa (Arts. 23 a 25 do CP)',
    aliases: ['Excludentes de Ilicitude', 'Legítima Defesa', 'Estado de Necessidade', 'Direito Penal']
  },
  {
    id: 'pen-02',
    disciplina: 'Noções de Direito Penal',
    assunto: 'Crimes Contra o Patrimônio: Furto, Roubo e Extorsão (Arts. 155 a 158)',
    aliases: ['Crimes Contra o Patrimônio', 'Furto', 'Roubo', 'Extorsão']
  },
  {
    id: 'pen-03',
    disciplina: 'Noções de Direito Penal',
    assunto: 'Crimes Praticados por Funcionário Público Contra a Administração Geral (Peculato, Concussão, Prevaricação)',
    aliases: ['Crimes Contra a Administração Pública', 'Peculato', 'Concussão', 'Prevaricação', 'Corrupção']
  },
  {
    id: 'pen-04',
    disciplina: 'Noções de Direito Penal',
    assunto: 'Crimes Contra a Pessoa: Homicídio, Lesão Corporal e Rixa',
    aliases: ['Crimes Contra a Pessoa', 'Homicídio', 'Lesão Corporal']
  },

  // 3. DIREITO ADMINISTRATIVO
  {
    id: 'adm-01',
    disciplina: 'Direito Administrativo',
    assunto: 'Estatuto dos Policiais Militares da Bahia (Lei Estadual nº 7.990/2001) - Hierarquia e Disciplina',
    aliases: ['Lei Estadual nº 7.990/2001', 'Estatuto dos Policiais Militares', 'Hierarquia e Disciplina', 'Estatuto PMBA']
  },
  {
    id: 'adm-02',
    disciplina: 'Direito Administrativo',
    assunto: 'Princípios Expressos da Administração Pública (LIMPE - Art. 37 CF/88)',
    aliases: ['Princípios da Administração Pública', 'LIMPE', 'Art. 37 CF/88']
  },
  {
    id: 'adm-03',
    disciplina: 'Direito Administrativo',
    assunto: 'Poderes Administrativos (Poder de Polícia, Disciplinar, Hierárquico)',
    aliases: ['Poderes Administrativos', 'Poder de Polícia']
  },
  {
    id: 'adm-04',
    disciplina: 'Direito Administrativo',
    assunto: 'Atos Administrativos: Conceito, Requisitos, Atributos e Espécies',
    aliases: ['Atos Administrativos', 'Requisitos do Ato Administrativo']
  },

  // 4. DIREITOS HUMANOS
  {
    id: 'dh-01',
    disciplina: 'Direitos Humanos',
    assunto: 'Declaração Universal dos Direitos Humanos (DUDH/1948)',
    aliases: ['DUDH', 'Declaração Universal']
  },
  {
    id: 'dh-02',
    disciplina: 'Direitos Humanos',
    assunto: 'Pacto de San José da Costa Rica (CADH) - Garantias Judiciais e Integridade',
    aliases: ['Pacto de San José', 'CADH', 'Convenção Americana']
  },
  {
    id: 'dh-03',
    disciplina: 'Direitos Humanos',
    assunto: 'Uso Progressivo e Diferenciado da Força (PBUFAF - ONU 1990)',
    aliases: ['PBUFAF', 'Uso da Força', 'Princípios Básicos sobre o Uso da Força']
  },
  {
    id: 'dh-04',
    disciplina: 'Direitos Humanos',
    assunto: 'Regras de Mandela (Regras Mínimas da ONU para Tratamento de Presos)',
    aliases: ['Regras de Mandela', 'Tratamento de Presos']
  },
  {
    id: 'dh-05',
    disciplina: 'Direitos Humanos',
    assunto: 'Convenção Contra a Tortura e Lei Federal nº 9.455/1997',
    aliases: ['Lei de Tortura', 'Lei 9.455/1997', 'Tortura']
  },
  {
    id: 'dh-06',
    disciplina: 'Direitos Humanos',
    assunto: 'Dimensões / Gerações dos Direitos Humanos e Código de Conduta da ONU',
    aliases: ['Dimensões dos Direitos Humanos', 'Gerações dos Direitos Humanos', 'Código de Conduta']
  },

  // 5. PROMOÇÃO DA IGUALDADE RACIAL E DE GÊNERO
  {
    id: 'ir-01',
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Lei Federal nº 12.288/2010: Estatuto da Igualdade Racial',
    aliases: ['Estatuto da Igualdade Racial', 'Lei 12.288/2010', 'População Negra']
  },
  {
    id: 'ir-02',
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Lei Maria da Penha (Lei nº 11.340/2006) e Formas de Violência',
    aliases: ['Lei Maria da Penha', 'Lei 11.340/2006', 'Violência Doméstica']
  },
  {
    id: 'ir-03',
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Crimes de Preconceito de Raça ou de Cor (Lei nº 7.716/1989 e Injúria Racial)',
    aliases: ['Lei 7.716/1989', 'Racismo', 'Injúria Racial']
  },
  {
    id: 'ir-04',
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Lei Estadual da Bahia nº 13.182/2014 (Estatuto da Igualdade Racial da Bahia)',
    aliases: ['Lei Estadual nº 13.182/2014', 'Estatuto da Bahia']
  },

  // 6. HISTÓRIA DA BAHIA
  {
    id: 'hist-01',
    disciplina: 'História da Bahia',
    assunto: 'A Independência da Bahia: 2 de Julho de 1823 e Batalha de Pirajá',
    aliases: ['Independência da Bahia', '2 de Julho de 1823', 'Batalha de Pirajá', 'Maria Quitéria']
  },
  {
    id: 'hist-02',
    disciplina: 'História da Bahia',
    assunto: 'Revolta dos Búzios (Conjuração Baiana / 1798)',
    aliases: ['Revolta dos Búzios', 'Conjuração Baiana', 'Alfaiates']
  },
  {
    id: 'hist-03',
    disciplina: 'História da Bahia',
    assunto: 'Revolta dos Malês (1835) e Movimentos Abolicionistas',
    aliases: ['Revolta dos Malês', 'Malês', '1835']
  },
  {
    id: 'hist-04',
    disciplina: 'História da Bahia',
    assunto: 'Guerra de Canudos (1896-1897) e Antônio Conselheiro',
    aliases: ['Guerra de Canudos', 'Canudos', 'Antônio Conselheiro']
  },

  // 7. GEOGRAFIA DA BAHIA
  {
    id: 'geo-01',
    disciplina: 'Geografia da Bahia',
    assunto: 'Quadro Natural da Bahia: Climas, Biomas (Caatinga, Cerrado, Mata Atlântica)',
    aliases: ['Climas e Biomas', 'Caatinga', 'Cerrado', 'Mata Atlântica', 'Quadro Natural']
  },
  {
    id: 'geo-02',
    disciplina: 'Geografia da Bahia',
    assunto: 'Bacia Hidrográfica do Rio São Francisco e Recursos Hídricos',
    aliases: ['Rio São Francisco', 'Hidrografia', 'Bacia do São Francisco']
  },
  {
    id: 'geo-03',
    disciplina: 'Geografia da Bahia',
    assunto: 'Mesorregiões Baianas, Agronegócio do Oeste e Dinâmica Econômica',
    aliases: ['Mesorregiões', 'Agronegócio', 'Economia da Bahia', 'Oeste Baiano']
  },

  // 8. LÍNGUA PORTUGUESA
  {
    id: 'port-01',
    disciplina: 'Língua Portuguesa',
    assunto: 'Regras de Ouro da Crase para a Prova da PMBA',
    aliases: ['Crase', 'Uso da Crase']
  },
  {
    id: 'port-02',
    disciplina: 'Língua Portuguesa',
    assunto: 'Concordância Verbal: Verbo Haver e Fazer Impessoais',
    aliases: ['Concordância Verbal', 'Verbo Haver', 'Verbo Fazer']
  },
  {
    id: 'port-03',
    disciplina: 'Língua Portuguesa',
    assunto: 'Interpretação de Textos e Coesão Textual (Padrão FCC/IBFC)',
    aliases: ['Interpretação de Texto', 'Coesão e Coerência', 'Tipologia Textual']
  },
  {
    id: 'port-04',
    disciplina: 'Língua Portuguesa',
    assunto: 'Regência Verbal, Nominal e Emprego da Pontuação',
    aliases: ['Regência', 'Pontuação', 'Uso da Vírgula']
  },

  // 9. RACIOCÍNIO LÓGICO & MATEMÁTICA
  {
    id: 'rlm-01',
    disciplina: 'Raciocínio Lógico & Matemática',
    assunto: 'Lógica Proposicional: Conectivos, Negação do Se... Então (Regra do MANÉ)',
    aliases: ['Lógica Proposicional', 'Negação da Condicional', 'Tabela Verdade', 'Conectivos']
  },
  {
    id: 'rlm-02',
    disciplina: 'Raciocínio Lógico & Matemática',
    assunto: 'Equivalências Lógicas e Leis de De Morgan',
    aliases: ['Equivalências Lógicas', 'De Morgan', 'Contrapositiva']
  },
  {
    id: 'rlm-03',
    disciplina: 'Raciocínio Lógico & Matemática',
    assunto: 'Porcentagem, Razão, Proporção e Regra de Três',
    aliases: ['Porcentagem', 'Razão e Proporção', 'Regra de Três']
  },
  {
    id: 'rlm-04',
    disciplina: 'Raciocínio Lógico & Matemática',
    assunto: 'Análise Combinatória e Noções de Probabilidade',
    aliases: ['Análise Combinatória', 'Probabilidade', 'Arranjo e Combinação']
  }
];

/**
 * Normaliza strings para comparador fuzzy de disciplinas e assuntos
 */
function normalizar(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Verifica se uma questão do banco pertence a um tópico do catálogo
 */
function questaoCorrespondeAoTopico(
  questao: Questao,
  itemCatalogo: typeof CATALOGO_EDITAL_PMBA[0]
): boolean {
  const discQ = normalizar(questao.disciplina);
  const discCat = normalizar(itemCatalogo.disciplina);

  const matchDisciplina =
    discQ === discCat ||
    discQ.includes(discCat) ||
    discCat.includes(discQ) ||
    (discCat.includes('penal') && discQ.includes('penal')) ||
    (discCat.includes('portugues') && discQ.includes('portugues')) ||
    (discCat.includes('raciocinio') && (discQ.includes('raciocinio') || discQ.includes('matematica') || discQ.includes('rlm'))) ||
    (discCat.includes('igualdade') && (discQ.includes('igualdade') || discQ.includes('raca')));

  if (!matchDisciplina) return false;

  const assQ = normalizar(questao.assunto);
  const assCat = normalizar(itemCatalogo.assunto);

  if (assQ === assCat || assQ.includes(assCat) || assCat.includes(assQ)) {
    return true;
  }

  // Verifica aliases
  if (itemCatalogo.aliases) {
    for (const alias of itemCatalogo.aliases) {
      const aliasNorm = normalizar(alias);
      if (assQ.includes(aliasNorm) || aliasNorm.includes(assQ)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Função principal para calcular a cobertura completa do Edital PMBA
 * com base no histórico de respostas e teoria do aluno.
 *
 * REGRA PEDAGÓGICA DE DOMÍNIO:
 * - O assunto é considerado "Dominado / Batido" se o aluno tiver:
 *   >= 2 acertos E taxa de acerto >= 70% nas questões daquele tópico
 *   (ou >= 1 acerto se o banco contiver apenas 1 questão daquele tópico).
 */
export function calcularCoberturaEdital(
  todasQuestoes: Questao[],
  historicoRespostas: Record<string, RespostaUsuario>,
  topicosLidos: Record<string, boolean> = {},
  metaAcertosPadrao: number = 2,
  taxaMinimaPadrao: number = 70
): EditalCoverageData {
  const catalogo = CATALOGO_EDITAL_PMBA;

  // Processar cada item do catálogo
  const assuntosDetalhados: AssuntoEditalDetalhado[] = catalogo.map((item) => {
    // Encontrar questões vinculadas a este assunto
    const questoesDoAssunto = todasQuestoes.filter((q) => questaoCorrespondeAoTopico(q, item));
    const totalQuestoesBanco = questoesDoAssunto.length;

    // Respostas do aluno para este assunto
    const respostasDoAssunto = questoesDoAssunto
      .map((q) => historicoRespostas[q.id])
      .filter(Boolean);

    const respondidas = respostasDoAssunto.length;
    const acertos = respostasDoAssunto.filter((r) => r.acertou).length;
    const erros = respondidas - acertos;
    const taxaAcerto = respondidas > 0 ? Math.round((acertos / respondidas) * 100) : 0;

    // Verificar se o tópico da teoria foi marcado como lido
    const teoriaLida = Object.entries(topicosLidos).some(([topicoId, lido]) => {
      if (!lido) return false;
      const tNorm = normalizar(topicoId);
      const itemNorm = normalizar(item.assunto);
      return tNorm.includes(item.id) || itemNorm.includes(tNorm);
    });

    // Critério de Domínio / Cobertura
    // Se o banco tiver apenas 1 questão, basta 1 acerto. Se tiver 2+, requer metaAcertosPadrao (ex: 2).
    const metaEfetiva = totalQuestoesBanco === 1 ? 1 : metaAcertosPadrao;

    let status: 'dominado' | 'em_progresso' | 'pendente' = 'pendente';
    let statusLabel = 'Não Iniciado';
    let motivo = `Pendente: resolva ${metaEfetiva} questões com ≥${taxaMinimaPadrao}% de acerto para bater este assunto`;

    if (respondidas > 0) {
      if (acertos >= metaEfetiva && taxaAcerto >= taxaMinimaPadrao) {
        status = 'dominado';
        statusLabel = 'Batido / Dominado';
        motivo = `Meta batida: ${acertos}/${respondidas} acertos (${taxaAcerto}% de precisão)`;
      } else {
        status = 'em_progresso';
        statusLabel = 'Em Progresso';
        const faltam = Math.max(1, metaEfetiva - acertos);
        if (taxaAcerto < taxaMinimaPadrao && acertos > 0) {
          motivo = `Em progresso: ${acertos} acerto(s), taxa de ${taxaAcerto}%. Necessário elevar para ≥${taxaMinimaPadrao}%`;
        } else {
          motivo = `Em progresso: ${acertos}/${respondidas} acerto(s). Falta(m) ${faltam} acerto(s) para bater`;
        }
      }
    } else if (teoriaLida) {
      status = 'em_progresso';
      statusLabel = 'Teoria Lida';
      motivo = 'Teoria estudada! Agora resolva questões para cravar o domínio';
    }

    return {
      id: item.id,
      disciplina: item.disciplina,
      assunto: item.assunto,
      metaAcertosRequerida: metaEfetiva,
      taxaMinimaRequerida: taxaMinimaPadrao,
      totalQuestoesBanco,
      respondidas,
      acertos,
      erros,
      taxaAcerto,
      status,
      statusLabel,
      motivo,
      teoriaLida
    };
  });

  // Agrupar por disciplina
  const disciplinasMap = new Map<string, AssuntoEditalDetalhado[]>();
  for (const assunto of assuntosDetalhados) {
    if (!disciplinasMap.has(assunto.disciplina)) {
      disciplinasMap.set(assunto.disciplina, []);
    }
    disciplinasMap.get(assunto.disciplina)!.push(assunto);
  }

  const disciplinas: DisciplinaCoberturaResumo[] = [];
  disciplinasMap.forEach((assuntos, discNome) => {
    const totalAssuntos = assuntos.length;
    const dominados = assuntos.filter((a) => a.status === 'dominado').length;
    const emProgresso = assuntos.filter((a) => a.status === 'em_progresso').length;
    const pendentes = assuntos.filter((a) => a.status === 'pendente').length;
    const porcentagem = totalAssuntos > 0 ? Math.round((dominados / totalAssuntos) * 100) : 0;

    const totalQuestoesBanco = assuntos.reduce((sum, a) => sum + a.totalQuestoesBanco, 0);
    const questoesRespondidas = assuntos.reduce((sum, a) => sum + a.respondidas, 0);
    const acertosTotal = assuntos.reduce((sum, a) => sum + a.acertos, 0);
    const taxaAcertoGeral = questoesRespondidas > 0 ? Math.round((acertosTotal / questoesRespondidas) * 100) : 0;

    disciplinas.push({
      disciplina: discNome,
      totalAssuntos,
      assuntosDominados: dominados,
      assuntosEmProgresso: emProgresso,
      assuntosPendentes: pendentes,
      porcentagemCobertura: porcentagem,
      totalQuestoesBanco,
      questoesRespondidas,
      acertos: acertosTotal,
      taxaAcertoGeral,
      assuntos
    });
  });

  // Totais Gerais
  const totalAssuntosEdital = catalogo.length;
  const assuntosDominados = assuntosDetalhados.filter((a) => a.status === 'dominado').length;
  const assuntosEmProgresso = assuntosDetalhados.filter((a) => a.status === 'em_progresso').length;
  const assuntosPendentes = assuntosDetalhados.filter((a) => a.status === 'pendente').length;

  const porcentagemGeral = totalAssuntosEdital > 0 ? Math.round((assuntosDominados / totalAssuntosEdital) * 100) : 0;
  const porcentagemComProgresso = totalAssuntosEdital > 0
    ? Math.min(100, Math.round(((assuntosDominados + (assuntosEmProgresso * 0.4)) / totalAssuntosEdital) * 100))
    : 0;

  // Classificação do Aluno
  let statusEdital = 'Edital Não Iniciado';
  let nivelClassificacao = 'Recruta Inicial';
  let mensagemMotivacional = 'Comece a responder questões para cobrir os primeiros tópicos do edital.';

  if (porcentagemGeral >= 100) {
    statusEdital = '🏆 Edital 100% Batido e Dominado!';
    nivelClassificacao = 'Candidato de Elite PMBA';
    mensagemMotivacional = 'Sensacional! Você cobriu todos os assuntos com alto rendimento. Mantenha os simulados para consolidação.';
  } else if (porcentagemGeral >= 80) {
    statusEdital = 'Edital 80%+ Batido (Reta Final)';
    nivelClassificacao = 'Excelente Nível Tático';
    mensagemMotivacional = 'Faltam poucos tópicos para bater 100% do edital! Ataque os assuntos restantes.';
  } else if (porcentagemGeral >= 50) {
    statusEdital = 'Metade do Edital Conquistado (50%+)';
    nivelClassificacao = 'Evolução Acelerada';
    mensagemMotivacional = 'Você já domina metade dos temas prioritários da PMBA. Mantenha a disciplina!';
  } else if (porcentagemGeral >= 25) {
    statusEdital = 'Edital em Marcha (25%+)';
    nivelClassificacao = 'Em Treinamento Ativo';
    mensagemMotivacional = 'Boa arrancada! Continue focado nas matérias de peso alto (Constitucional, Penal e Igualdade).';
  } else if (assuntosEmProgresso > 0 || assuntosDominados > 0) {
    statusEdital = 'Primeiros Assuntos em Andamento';
    nivelClassificacao = 'Soldado em Instrução';
    mensagemMotivacional = 'Cada questão certa eleva sua cobertura do edital. Rumo ao topo!';
  }

  const regraDominioTexto = `Regra de Proficiência: Mínimo de ${metaAcertosPadrao} acertos com taxa de acerto ≥ ${taxaMinimaPadrao}% por assunto para ser considerado "Batido / Dominado" no edital.`;

  return {
    totalAssuntosEdital,
    assuntosDominados,
    assuntosEmProgresso,
    assuntosPendentes,
    porcentagemGeral,
    porcentagemComProgresso,
    statusEdital,
    nivelClassificacao,
    mensagemMotivacional,
    disciplinas,
    regraDominioTexto
  };
}
