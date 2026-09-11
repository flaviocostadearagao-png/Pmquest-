import { Questao, MateriaEdital } from '../types';
import { QUESTOES_EXPANDIDAS_PMBA } from './questionsData';

export const QUESTOES_PMBA: Questao[] = QUESTOES_EXPANDIDAS_PMBA;

export const TEORIA_PMBA: MateriaEdital[] = [
  {
    id: 'mat-const',
    nome: 'Direito Constitucional',
    icone: 'Scale',
    totalQuestoesEdital: '08 Questões no Edital',
    relevancia: 'Muito Alta',
    descricao: 'Art. 5º (Direitos e Garantias Fundamentais) e Art. 144 (Da Segurança Pública). Matéria de maior índice de cobrança.',
    topicos: [
      {
        id: 'tc-1',
        titulo: 'Art. 5º da CF/88: Inviolabilidade de Domicílio e Remédios Constitucionais',
        tempoLeituraMin: 5,
        resumoIntro: 'O artigo 5º é o coração do Direito Constitucional no concurso da PMBA. Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.',
        pontosImportantes: [
          'Inviolabilidade de domicílio (XI): Casa como asilo inviolável. Exceções sem ordem judicial (a qualquer hora do dia ou da noite): Flagrante delito, desastre ou prestar socorro. Com ordem judicial: Somente durante o dia.',
          'Prisão legal (LXI): Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei.',
          'Habeas Corpus (LXVIII): Protege a liberdade de locomoção contra ilegalidade ou abuso de poder. É gratuito e não exige advogado!',
          'Mandado de Segurança (LXIX): Protege direito líquido e certo não amparado por HC ou HD.',
          'Habeas Data (LXXII): Assegura o conhecimento ou retificação de informações relativas à pessoa do impetrante em registros governamentais. Também é gratuito.'
        ],
        dicaDeProva: 'A FCC adora trocar as hipóteses de entrada em domicílio. Lembre-se: ordem de Juiz NUNCA permite entrar à noite sem consentimento do morador! Se cair "mandado judicial à noite", a questão está FALSA!',
        legislacaoOuReferencia: 'CF/88, Art. 5º, incisos XI, LXI, LXVIII, LXIX e LXXII.'
      },
      {
        id: 'tc-2',
        titulo: 'Art. 144 da CF/88: Da Segurança Pública e o Papel da Polícia Militar',
        tempoLeituraMin: 4,
        resumoIntro: 'A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.',
        pontosImportantes: [
          'Órgãos da Segurança Pública (Art. 144): PF, PRF, PFF, Polícias Civis, Polícias Militares e Corpos de Bombeiros Militares, e Polícias Penais (federal, estaduais e distrital).',
          'Missão Constitucional da PM (Art. 144, § 5º): Cabe à Polícia Militar a polícia ostensiva e a preservação da ordem pública.',
          'Forças Auxiliares: As Polícias Militares e Corpos de Bombeiros Militares são forças auxiliares e reserva do Exército Brasileiro e subordinam-se aos Governadores de Estado.',
          'Guarda Municipal (§ 8º): Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações (não são forças militares).'
        ],
        dicaDeProva: 'Cuidado! A Polícia Militar NÃO faz polícia judiciária comum (que cabe à Polícia Civil e Federal). A PM faz Polícia Ostensiva e Preservação da Ordem Pública! Atenção com pegadinhas de bancas invertendo essas atribuições.',
        legislacaoOuReferencia: 'CF/88, Artigo 144, § 5º e § 6º.'
      }
    ]
  },
  {
    id: 'mat-igualdade',
    nome: 'Promoção da Igualdade Racial e de Gênero',
    icone: 'HeartHandshake',
    totalQuestoesEdital: '06 Questões no Edital',
    relevancia: 'Muito Alta',
    descricao: 'Estatuto da Igualdade Racial (Lei 12.288/2010), Crimes de Preconceito (Lei 7.716/1989) e Lei Maria da Penha (Lei 11.340/2006).',
    topicos: [
      {
        id: 'ti-1',
        titulo: 'Lei Federal nº 12.288/2010: Estatuto da Igualdade Racial',
        tempoLeituraMin: 6,
        resumoIntro: 'Destinado a garantir à população negra a efetivação da igualdade de oportunidades, a defesa dos direitos étnicos individuais, coletivos e difusos e o combate à discriminação e demais formas de intolerância étnica.',
        pontosImportantes: [
          'População negra: O conjunto de pessoas que se autodeclaram pretas e pardas, conforme o quesito cor ou raça usado pelo IBGE, ou que adotam autodefinição análoga.',
          'Políticas públicas: Ações, iniciativas e programas adotados pelo Estado no cumprimento das suas atribuições institucionais.',
          'Ações Afirmativas: Programas e medidas especiais adotados pelo Estado e na iniciativa privada para a correção das desigualdades raciais e para a promoção da igualdade de oportunidades. NÃO são consideradas discriminação!',
          'Direito à saúde: Atenção especial e tratamento específico às doenças com maior prevalência na população negra (ex: anemia falciforme).',
          'Liberdade de crença e culto: Garantida a proteção e a inviolabilidade dos locais de culto de matriz africana (terreiros).'
        ],
        dicaDeProva: 'Cai sempre: Quem compõe a "população negra" segundo a lei? Resposta: PRETAS + PARDAS (critério do IBGE). Jamais marque alternativas que excluam os pardos.',
        legislacaoOuReferencia: 'Lei Federal nº 12.288/2010, Art. 1º ao 8º.'
      },
      {
        id: 'ti-2',
        titulo: 'Lei Maria da Penha (Lei nº 11.340/2006) e Formas de Violência',
        tempoLeituraMin: 5,
        resumoIntro: 'Cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher, nos termos do § 8º do art. 226 da Constituição Federal.',
        pontosImportantes: [
          'Cinco formas de violência doméstica contra a mulher (Art. 7º): Física, Psicológica, Sexual, Patrimonial e Moral.',
          'Violência Patrimonial: Subtração, retenção, destruição de objetos, instrumentos de trabalho, documentos pessoais e bens.',
          'Violência Moral: Conduta que configure calúnia, difamação ou injúria.',
          'Atuação Policial: O policial militar deve adotar providências imediatas para proteger a vítima, encaminhá-la a atendimento médico, garantir o afastamento do agressor do lar e conduzi-lo em flagrante.',
          'Vedação: É proibida a aplicação de penas de cesta básica ou outras de prestação pecuniária nos crimes praticados com violência doméstica.'
        ],
        dicaDeProva: 'Grave as 5 formas de violência: FÍSICA, PSICOLÓGICA, SEXUAL, PATRIMONIAL e MORAL. A destruição de documentos e objetos é violência PATRIMONIAL. A injúria e calúnia são violência MORAL.',
        legislacaoOuReferencia: 'Lei Federal nº 11.340/2006, Artigo 7º.'
      }
    ]
  },
  {
    id: 'mat-historia',
    nome: 'História da Bahia',
    icone: 'Landmark',
    totalQuestoesEdital: '06 Questões no Edital',
    relevancia: 'Alta',
    descricao: 'A Independência da Bahia (1823), Revolta dos Búzios (Conjuração Baiana 1798), Revolta dos Malês (1835) e Guerra de Canudos (1896-1897).',
    topicos: [
      {
        id: 'th-1',
        titulo: 'A Independência da Bahia: 2 de Julho de 1823',
        tempoLeituraMin: 6,
        resumoIntro: 'Enquanto a proclamação oficial do Brasil ocorreu em 7 de setembro de 1822 às margens do Ipiranga, na Bahia a independência só se consumou em 2 de julho de 1823 através de uma verdadeira guerra popular contra as tropas de Portugal.',
        pontosImportantes: [
          'Ocupação de Salvador: Comandada pelo brigadeiro português Inácio Luís Madeira de Melo, que jurou fidelidade às Cortes de Lisboa.',
          'Cachoeira - Capital Provisória: Em 25 de junho de 1822, Cachoeira aclamou D. Pedro como Regente e iniciou a resistência armada no Recôncavo.',
          'Batalha de Pirajá (8 de novembro de 1822): Ponto de inflexão decisivo. O famoso toque de "avançar cavalaria" pelo corneteiro Luís Lopes desorientou as tropas portuguesas.',
          'Personagens Centrais: General Labatut, Coronel Lima e Silva, Maria Quitéria (Soldado Medeiros), Maria Felipa em Itaparica e Joana Angélica no Convento da Lapa.',
          'O Caboclo e a Cabocla: Símbolos máximos de orgulho e vitória cívica do povo baiano nos festejos anuais de 2 de Julho.'
        ],
        dicaDeProva: 'Não esqueça: Na Bahia, a independência foi conquistada com sangue e armas pelo povo simples e sertanejos ("encouraçados de Pedrão"). O feriado estadual de 2 de Julho celebra a expulsão definitiva de Madeira de Melo.',
        legislacaoOuReferencia: 'História Militar e Cívica da Bahia / Edital PMBA.'
      },
      {
        id: 'th-2',
        titulo: 'Revolta dos Búzios (1798) e Revolta dos Malês (1835)',
        tempoLeituraMin: 5,
        resumoIntro: 'Dois grandes movimentos populares e emancipatórios de Salvador de imenso destaque histórico.',
        pontosImportantes: [
          'Revolta dos Búzios (Conjuração Baiana / Alfaiates - 1798): Caráter popular, republicano, abolicionista e de igualdade racial. Lideranças: Lucas Dantas, Manuel Faustino, Luís Gonzaga das Virgens e João de Deus.',
          'Revolta dos Malês (1835): Ocorrida na noite de 24 para 25 de janeiro de 1835 durante o mês sagrado do Ramadã. Liderada por negros islamizados (malês/nagôs) alfabetizados em árabe em plena capital baiana.'
        ],
        dicaDeProva: 'Diferença-chave de prova: Búzios (1798) queria proclamação de República e fim da escravidão (influência da Revolução Francesa). Já Malês (1835) foi liderada por muçulmanos letrados em Salvador contra o cativeiro e opressão religiosa.',
        legislacaoOuReferencia: 'Historiografia Baiana - Luís Henrique Dias Tavares.'
      }
    ]
  },
  {
    id: 'mat-admin',
    nome: 'Direito Administrativo & Estatuto PMBA',
    icone: 'ShieldAlert',
    totalQuestoesEdital: '08 Questões no Edital',
    relevancia: 'Muito Alta',
    descricao: 'Princípios do Art. 37 da CF/88 (LIMPE), Regime Jurídico e o Estatuto dos Policiais Militares da Bahia (Lei Estadual nº 7.990/2001).',
    topicos: [
      {
        id: 'ta-1',
        titulo: 'Estatuto dos PMs da Bahia (Lei Estadual nº 7.990/2001): Hierarquia e Disciplina',
        tempoLeituraMin: 5,
        resumoIntro: 'O Estatuto regula o ingresso, as situações funcionais, direitos, deveres, prerrogativas e regime disciplinar dos militares estaduais da Bahia.',
        pontosImportantes: [
          'Hierarquia Militar: É a ordenação da autoridade em níveis diferentes, dentro da estrutura das Forças Militares do Estado.',
          'Disciplina Militar: É a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições.',
          'Círculos Hierárquicos: Âmbitos de convivência entre policiais militares da mesma categoria destinados a desenvolver o espírito de camaradagem.',
          'Comandante Geral: Oficial da ativa do último posto do Quadro de Oficiais Policiais Militares (QOPM), de livre escolha e nomeação pelo Governador do Estado.',
          'Uso do Uniforme: Prerrogativa privativa dos policiais militares em serviço ativo ou em solenidades autorizadas para inativos.'
        ],
        dicaDeProva: 'Grave para o Estatuto: Quem nomeia o Comandante Geral da PMBA? O Governador do Estado. A hierarquia e disciplina são as bases institucionais permanentes!',
        legislacaoOuReferencia: 'Lei Estadual da Bahia nº 7.990, de 27 de dezembro de 2001.'
      }
    ]
  },
  {
    id: 'mat-port',
    nome: 'Língua Portuguesa',
    icone: 'BookOpen',
    totalQuestoesEdital: '10 Questões no Edital',
    relevancia: 'Muito Alta',
    descricao: 'Interpretação de textos, crase, concordância verbal e nominal, regência e pontuação (padrão FCC/IBFC).',
    topicos: [
      {
        id: 'tp-1',
        titulo: 'Regras de Ouro da Crase para a Prova da PMBA',
        tempoLeituraMin: 4,
        resumoIntro: 'A crase é a fusão da preposição "a" com o artigo definido feminino "a(s)" ou com os pronomes aquele(s), aquela(s), aquilo.',
        pontosImportantes: [
          'Nunca ocorre crase: Diante de palavras masculinas, diante de verbos, diante da maioria dos pronomes (ele, você, quem, ninguém), e quando o "a" está no singular diante de palavra no plural.',
          'Crase obrigatória: Locuções prepositivas, conjuntivas e adverbiais femininas (à noite, às pressas, à medida que, à proporção que).',
          'Crase facultativa (Mnemônico ATÉ A MINHA MARIA): Diante de nomes próprios femininos, diante de pronomes possessivos femininos no singular (a minha, a sua), e após a preposição "até".'
        ],
        dicaDeProva: 'Substitua a palavra feminina por uma masculina. Se virar "AO", TEM CRASE! Ex: "Fui à feira" -> "Fui ao mercado" (tem crase!). Se virar apenas "O", não tem crase: "Conheço a cidade" -> "Conheço o país".',
        legislacaoOuReferencia: 'Gramática Normativa e Padrão FCC.'
      }
    ]
  },
  {
    id: 'mat-dh',
    nome: 'Direitos Humanos',
    icone: 'Globe2',
    totalQuestoesEdital: '05 Questões no Edital',
    relevancia: 'Alta',
    descricao: 'Declaração Universal dos Direitos Humanos (1948) e Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica).',
    topicos: [
      {
        id: 'tdh-1',
        titulo: 'DUDH (1948) e Princípios Internacionais de Segurança Pública',
        tempoLeituraMin: 5,
        resumoIntro: 'Aprovada pela Resolução 217 A (III) da Assembleia Geral da ONU em 10 de dezembro de 1948, em Paris, como marco de reconstrução pós-Segunda Guerra Mundial.',
        pontosImportantes: [
          'Artigo 1º: Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade.',
          'Artigo 3º: Todo indivíduo tem direito à vida, à liberdade e à segurança pessoal.',
          'Artigo 5º: Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante (norma cogente absoluta).',
          'Artigo 9º: Ninguém será arbitrariamente preso, detido ou exilado.',
          'Artigo 11: Toda pessoa acusada de um ato delituoso tem o direito de ser presumida inocente até que a sua culpabilidade tenha sido provada perante a lei.'
        ],
        dicaDeProva: 'A DUDH é uma Resolução da ONU e possui força moral e principiológica basilar. A proibição de tortura e tratamento degradante NÃO admite qualquer tipo de exceção, nem mesmo em estado de sítio ou guerra!',
        legislacaoOuReferencia: 'DUDH de 1948 / Pacto de San José (Decreto 678/1992).'
      }
    ]
  },
  {
    id: 'mat-geo',
    nome: 'Geografia da Bahia',
    icone: 'MapPin',
    totalQuestoesEdital: '05 Questões no Edital',
    relevancia: 'Média',
    descricao: 'Relevo, clima, vegetação (Caatinga, Cerrado, Mata Atlântica), hidrografia (Bacia do São Francisco) e dinâmica socioeconômica.',
    topicos: [
      {
        id: 'tg-1',
        titulo: 'Quadro Natural da Bahia: Climas, Biomas e o Semiárido',
        tempoLeituraMin: 4,
        resumoIntro: 'A Bahia é o maior estado do Nordeste e possui notável diversidade biogeográfica, abrigando três biomas: Caatinga, Mata Atlântica e Cerrado.',
        pontosImportantes: [
          'Caatinga: Único bioma exclusivamente brasileiro, recobre a maior parte do território baiano no Polígono das Secas.',
          'Rio São Francisco (O "Velho Chico"): Principal bacia hidrográfica do estado, fundamental para fruticultura irrigada (Polo Juazeiro-Petrolina) e geração hidrelétrica (Sobradinho e Paulo Afonso).',
          'Planalto da Chapada Diamantina: Divisor de águas entre o Rio São Francisco e as bacias de rios que correm para o Oceano Atlântico (Rio de Contas, Paraguaçu).'
        ],
        dicaDeProva: 'Atenção com as mesorregiões e a economia: O Oeste Baiano (Barreiras, Luís Eduardo Magalhães) é o grande polo do agronegócio de grãos (soja e algodão) no bioma Cerrado.',
        legislacaoOuReferencia: 'Geografia Regional da Bahia - SEI e IBGE.'
      }
    ]
  },
  {
    id: 'mat-penal',
    nome: 'Direito Penal & Penal Militar',
    icone: 'Gavel',
    totalQuestoesEdital: '06 Questões no Edital',
    relevancia: 'Alta',
    descricao: 'Aplicação da lei penal, crimes contra a pessoa, crimes contra o patrimônio e noções de crimes militares (CPM).',
    topicos: [
      {
        id: 'tpen-1',
        titulo: 'Crimes Contra a Pessoa e Excludentes de Ilicitude',
        tempoLeituraMin: 5,
        resumoIntro: 'Noções fundamentais do Código Penal aplicáveis à conduta e atuação ostensiva do policial militar.',
        pontosImportantes: [
          'Excludentes de Ilicitude (Art. 23 do CP): Estado de necessidade, Legítima defesa, Estrito cumprimento de dever legal e Exercício regular de direito.',
          'Legítima Defesa (Art. 25 do CP): Quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.',
          'Pacote Anticrime e Policiais: Considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.'
        ],
        dicaDeProva: 'O excesso punível: Não há crime quando o militar atua em estrito cumprimento do dever legal ou legítima defesa, MAS responderá pelo excesso doloso ou culposo!',
        legislacaoOuReferencia: 'Código Penal Brasileiro, Arts. 23 a 25.'
      }
    ]
  },
  {
    id: 'mat-rlm',
    nome: 'Raciocínio Lógico & Matemática',
    icone: 'Calculator',
    totalQuestoesEdital: '06 Questões no Edital',
    relevancia: 'Alta',
    descricao: 'Lógica proposicional, conectivos lógicos, negações, equivalências, porcentagem, razão, proporção e análise combinatória.',
    topicos: [
      {
        id: 'trlm-1',
        titulo: 'Lógica Proposicional: Conectivos e Negação do Se... Então',
        tempoLeituraMin: 5,
        resumoIntro: 'Compreensão de proposições simples e compostas, tabelas-verdade essenciais e a tão cobrada regra de negação da condicional.',
        pontosImportantes: [
          'Conectivos Lógicos: Conjunção (E / ^), Disjunção inclusiva (OU / v), Condicional (Se... então / ->) e Bicondicional (Se e somente se / <->).',
          'Negação da Condicional (Regra do MANÉ): ~(P -> Q) <=> P ^ ~Q. Mantém a primeira afirmação E nega a segunda afirmação.',
          'Leis de De Morgan: Negação de (P e Q) = ~P ou ~Q. Negação de (P ou Q) = ~P e ~Q.',
          'Equivalência da Condicional (Contrapositiva): P -> Q é logicamente equivalente a ~Q -> ~P.'
        ],
        dicaDeProva: 'Cuidado: NUNCA negue "Se P então Q" com outro "Se não P então não Q"! Use a regra do MANÉ: mantém a 1ª E nega a 2ª!',
        legislacaoOuReferencia: 'Lógica Matemática / Edital Soldado PMBA'
      }
    ]
  }
];
