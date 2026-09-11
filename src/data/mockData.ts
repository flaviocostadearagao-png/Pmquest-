import { Questao, MateriaEdital } from '../types';

export const QUESTOES_PMBA: Questao[] = [
  {
    id: 'q-1',
    numero: 1,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direito Constitucional',
    assunto: 'Direitos Fundamentais - Inviolabilidade de Domicílio (Art. 5º, XI)',
    dificuldade: 'Média',
    enunciado: 'Nos termos da Constituição Federal de 1988 e da consolidada jurisprudência do Supremo Tribunal Federal (STF), a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador. A respeito das exceções constitucionais a essa regra, assinale a alternativa correta aplicável à atuação da Polícia Militar:',
    alternativas: [
      {
        id: 'A',
        texto: 'Durante o dia ou durante a noite, por determinação judicial prévia, independentemente de haver consentimento do morador.'
      },
      {
        id: 'B',
        texto: 'Em caso de flagrante delito ou desastre, ou para prestar socorro, tanto durante o dia quanto durante o período noturno.'
      },
      {
        id: 'C',
        texto: 'Apenas durante o período diurno nos casos de flagrante delito e mediante autorização verbal do Delegado de Polícia.'
      },
      {
        id: 'D',
        texto: 'A qualquer hora do dia ou da noite para averiguação de mera atitude suspeita nas proximidades da residência.'
      },
      {
        id: 'E',
        texto: 'Durante a noite, por determinação judicial, desde que a guarnição esteja acompanhada por membro do Ministério Público.'
      }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Capitão Dr. Marcos Valente',
      cargo: 'Especialista em Direito Constitucional e Segurança Pública',
      analiseGeral: 'Questão clássica do concurso da PMBA! O artigo 5º, inciso XI, da CF/88 é tema certíssimo nas provas. Ele diz textualmente: "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial".',
      justificativaAlternativas: {
        A: 'Incorreta. A determinação judicial só autoriza o ingresso DURANTE O DIA. À noite não pode haver ingresso por ordem judicial sem consentimento.',
        B: 'CORRETA. Flagrante delito, desastre e prestação de socorro autorizam o ingresso a QUALQUER HORA (dia ou noite). Fixe a tríade: "Flagrante, Socorro, Desastre = Dia e Noite".',
        C: 'Incorreta. O flagrante delito autoriza tanto de dia quanto de noite, e não requer autorização de Delegado.',
        D: 'Incorreta. O STF já fixou a tese de que mera suspeita sem justa causa prévia documentada torna a invasão domiciliar ilícita.',
        E: 'Incorreta. Ordem judicial NUNCA autoriza entrada noturna sem consentimento do morador, mesmo com MP.'
      },
      bizuPMBA: 'Bizu do Soldado: Lembre-se do mnemônico "F-S-D" (Flagrante, Socorro, Desastre) -> A QUALQUER HORA. Já "Ordem Judicial" -> SOMENTE DE DIA!',
      artigosCitados: ['Art. 5º, XI da Constituição Federal de 1988', 'Tema 280 da Repercussão Geral do STF']
    }
  },
  {
    id: 'q-2',
    numero: 2,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Igualdade de Gênero e Raça',
    assunto: 'Estatuto da Igualdade Racial (Lei Federal nº 12.288/2010)',
    dificuldade: 'Fácil',
    enunciado: 'A Lei Federal nº 12.288/2010 (Estatuto da Igualdade Racial) é de observância obrigatória e constante no edital da Polícia Militar da Bahia. De acordo com o art. 1º dessa lei, considera-se "discriminação racial ou étnico-racial":',
    alternativas: [
      {
        id: 'A',
        texto: 'Toda distinção, exclusão, restrição ou preferência baseada em raça, cor, descendência ou origem nacional ou étnica que tenha por objeto anular ou restringir o reconhecimento ou exercício de direitos fundamentais.'
      },
      {
        id: 'B',
        texto: 'Exclusivamente as agressões físicas comprovadas contra indivíduos pertencentes a povos e comunidades tradicionais em áreas urbanas.'
      },
      {
        id: 'C',
        texto: 'Apenas a recusa formal e documentada de contratação de pessoas autodeclaradas pretas ou pardas no setor público.'
      },
      {
        id: 'D',
        texto: 'A adoção de medidas de ação afirmativa de incentivo temporário a grupos étnico-raciais historicamente vulnerabilizados.'
      },
      {
        id: 'E',
        texto: 'Toda medida governamental que vise equiparar salários de homens e mulheres no serviço militar estadual.'
      }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof.ª Dra. Luiza Dandara',
      cargo: 'Professora de Legislação Especial e Direitos Étnico-Raciais',
      analiseGeral: 'A banca copiou literalmente o texto legal do art. 1º, parágrafo único, inciso I, da Lei 12.288/2010. É crucial decorar os conceitos essenciais do Estatuto para a prova da PMBA.',
      justificativaAlternativas: {
        A: 'CORRETA. Transcrição literal do art. 1º, parágrafo único, I, da Lei nº 12.288/2010.',
        B: 'Incorreta. Discriminação não é restrita a agressões físicas nem a áreas urbanas; abrange quaisquer atos que restrinjam o gozo de direitos.',
        C: 'Incorreta. Não se restringe a recusa formal de contratação nem exclusivamente ao serviço público.',
        D: 'Incorreta. As ações afirmativas NÃO configuram discriminação racial; pelo contrário, são instrumentos legítimos de reparação e promoção da igualdade material (art. 4º, parágrafo único).',
        E: 'Incorreta. Essa alternativa mistura a lei com equiparação salarial genérica de gênero militar.'
      },
      bizuPMBA: 'Bizu do Edital: A banca adora confundir "discriminação racial" com "ações afirmativas". Lembre-se: Ação afirmativa é política pública legal de inclusão, NUNCA é discriminação!',
      artigosCitados: ['Lei nº 12.288/2010, Art. 1º, Parágrafo Único, Inciso I']
    }
  },
  {
    id: 'q-3',
    numero: 3,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'História da Bahia',
    assunto: 'Independência da Bahia (Dois de Julho de 1823) e Heroínas da Independência',
    dificuldade: 'Média',
    enunciado: 'Em 2 de julho de 1823, consolidou-se a Independência da Bahia e a efetiva expulsão das tropas portuguesas comandadas pelo brigadeiro Madeira de Melo. Sobre este episódio marcante da história baiana e nacional, assinale a afirmação correta:',
    alternativas: [
      {
        id: 'A',
        texto: 'A luta se restringiu a negociações diplomáticas em Salvador, sem que houvesse engajamento popular ou confrontos armados no Recôncavo.'
      },
      {
        id: 'B',
        texto: 'Maria Quitéria de Jesus alistou-se no Batalhão dos "Voluntários do Príncipe Dom Pedro", destacando-se por sua bravura em combates como a Batalha de Pirajá.'
      },
      {
        id: 'C',
        texto: 'Joana Angélica participou liderando tropas no front militar de Cachoeira, recebendo condecoração imperial direta de Dom Pedro I.'
      },
      {
        id: 'D',
        texto: 'O movimento foi repelido pelo povo soteropolitano, que preferia a permanência sob a coroa lusitana devido ao livre comércio de açúcar.'
      },
      {
        id: 'E',
        texto: 'O 2 de Julho ocorreu antes do 7 de Setembro de 1822 e não teve relação com a independência do restante do território brasileiro.'
      }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Antônio Carlos Ribeiro',
      cargo: 'Historiador e Especialista em História e Geografia da Bahia',
      analiseGeral: 'A Independência da Bahia é o tema mais cobrado de História nos concursos da PMBA. A data de 2 de Julho de 1823 representa a verdadeira expulsão das tropas coloniais portuguesas do Brasil com ampla participação popular, sertaneja e feminina.',
      justificativaAlternativas: {
        A: 'Incorreta. Houve sangrentos confrontos armados, especialmente no Recôncavo Baiano (Cachoeira, Santo Amaro, Maragogipe, Itaparica) e na Batalha de Pirajá.',
        B: 'CORRETA. Maria Quitéria usou o pseudônimo "Soldado Medeiros", lutou com heroísmo no Batalhão dos Voluntários do Príncipe e foi condecorada com a Ordem Imperial do Cruzeiro por D. Pedro I.',
        C: 'Incorreta. Joana Angélica foi a abadessa do Convento da Lapa morta ao defender o claustro contra os soldados portugueses em Salvador em fevereiro de 1822.',
        D: 'Incorreta. A população baiana cerrou fileiras em massa contra o domínio de Madeira de Melo.',
        E: 'Incorreta. O 2 de Julho ocorreu em 1823 (depois do 7 de Setembro de 1822), concluindo a independência nacional.'
      },
      bizuPMBA: 'Bizu da Bahia: Grave a trinca de heroínas da Independência Baiana: Maria Quitéria (armas/batalha), Maria Felipa (mariscadeira/Itaparica queimando barcos) e Joana Angélica (mártir no Convento da Lapa).',
      artigosCitados: ['Constituição da Bahia / Efeméride Cívica Estadual']
    }
  },
  {
    id: 'q-4',
    numero: 4,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Língua Portuguesa',
    assunto: 'Emprego do Sinal Indicativo de Crase',
    dificuldade: 'Média',
    enunciado: 'Considere a seguinte frase adaptada de uma ocorrência policial: "O policial militar dirigiu-se ___ guarnição de serviço para prestar apoio ___ vítimas, obedecendo ___ ordens do oficial de dia." Assinale a alternativa que preenche correta e respectivamente as lacunas:',
    alternativas: [
      {
        id: 'A',
        texto: 'à — às — às'
      },
      {
        id: 'B',
        texto: 'a — as — às'
      },
      {
        id: 'C',
        texto: 'à — as — as'
      },
      {
        id: 'D',
        texto: 'a — às — as'
      },
      {
        id: 'E',
        texto: 'à — as — às'
      }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Sérgio Nogueira',
      cargo: 'Mestre em Língua Portuguesa para Carreiras Policiais',
      analiseGeral: 'A FCC cobra com muita frequência a regência de verbos de movimento (dirigir-se a), transitivos indiretos (prestar apoio a algo/alguém) e o verbo obedecer (que exige a preposição "a").',
      justificativaAlternativas: {
        A: 'CORRETA. 1ª: quem se dirige, dirige-se "a" + "a guarnição" = à. 2ª: prestar apoio "a" + "as vítimas" = às. 3ª: o verbo obedecer é transitivo indireto e exige preposição "a" + "as ordens" = às ordens.',
        B: 'Incorreta. "Dirigiu-se a" exige crase diante de substantivo feminino determinado.',
        C: 'Incorreta. O apoio foi prestado "a" alguém + "as vítimas", exigindo a crase.',
        D: 'Incorreta. O verbo obedecer rege preposição "a", portanto obedece-se "às" ordens.',
        E: 'Incorreta. Faltou a crase na segunda lacuna (às vítimas).'
      },
      bizuPMBA: 'Bizu de Português: Lembra do verbo OBEDECER / DESOBEDECER! Eles exigem a preposição "A" ("Obedeceu às leis", "Obedeceu ao regulamento"). Nunca use sem preposição!',
      artigosCitados: ['Regência Verbal e Sintaxe de Concordância']
    }
  },
  {
    id: 'q-5',
    numero: 5,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Direito Administrativo',
    assunto: 'Estatuto dos Policiais Militares da Bahia (Lei Estadual nº 7.990/2001)',
    dificuldade: 'Difícil',
    enunciado: 'Em conformidade com o Estatuto dos Policiais Militares do Estado da Bahia (Lei Estadual nº 7.990/2001), a hierarquia e a disciplina são a base institucional da Polícia Militar. Sobre a precedência hierárquica e círculos hierárquicos, é correto afirmar que:',
    alternativas: [
      {
        id: 'A',
        texto: 'A precedência entre policiais militares da ativa, do mesmo grau hierárquico, é assegurada pela antiguidade no posto ou graduação, salvo nos casos de precedência funcional estabelecida em lei.'
      },
      {
        id: 'B',
        texto: 'Os Alunos-a-Oficial PM e os Alunos do Curso de Formação de Soldados pertencem ao mesmo círculo hierárquico dos Oficiais Superiores.'
      },
      {
        id: 'C',
        texto: 'A disciplina militar consiste unicamente no direito do subordinado de questionar previamente qualquer ordem do superior em redes sociais.'
      },
      {
        id: 'D',
        texto: 'A hierarquia militar prevalece apenas em situações de combate ou operação especial de garantia da lei e da ordem.'
      },
      {
        id: 'E',
        texto: 'O policial militar da reserva remunerada quando convocado terá precedência hierárquica automática sobre qualquer oficial da ativa.'
      }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Major PMBA Carlos Eduardo',
      cargo: 'Bacharel em Direito e Instrutor da Academia de Polícia Militar da Bahia',
      analiseGeral: 'A Lei Estadual nº 7.990/2001 é a legislação específica de maior peso no concurso da PMBA. O candidato a Soldado precisa dominar os artigos iniciais sobre Hierarquia, Disciplina, Antiguidade e Deveres Policiais.',
      justificativaAlternativas: {
        A: 'CORRETA. É a regra matriz estampada na Lei Estadual 7.990/2001: em igualdade de grau hierárquico, a precedência dá-se pela antiguidade, salvo exceção funcional expressa.',
        B: 'Incorreta. Alunos de cursos de formação são praças especiais e têm círculo próprio de convivência.',
        C: 'Incorreta. A disciplina militar é a rigorosa observância e o acatamento integral das leis, regulamentos e ordens.',
        D: 'Incorreta. A hierarquia e a disciplina operam de forma permanente em todos os momentos da vida militar, ativa e inativa.',
        E: 'Incorreta. A convocação de militar da reserva segue regras estritas de antiguidade e não concede supremacia automática irrestrita.'
      },
      bizuPMBA: 'Bizu do Estatuto: Artigo 14 e seguintes da Lei 7.990/2001: A hierarquia é a ordenação da autoridade em níveis diferentes; a disciplina é o acatamento integral das normas. Ambos constituem a BASE INSTITUCIONAL da PMBA!',
      artigosCitados: ['Lei Estadual nº 7.990/2001 (Estatuto dos PMs da Bahia), Art. 14 a 19']
    }
  },
  {
    id: 'q-6',
    numero: 6,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direitos Humanos',
    assunto: 'Declaração Universal dos Direitos Humanos (DUDH) e Prisão Legal',
    dificuldade: 'Fácil',
    enunciado: 'Segundo o Artigo 9º da Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 1948:',
    alternativas: [
      {
        id: 'A',
        texto: 'Ninguém será arbitrariamente preso, detido ou exilado.'
      },
      {
        id: 'B',
        texto: 'Todo cidadão suspeito perde de imediato sua presunção de inocência no momento da abordagem policial ostensiva.'
      },
      {
        id: 'C',
        texto: 'A prisão civil por dívida de qualquer natureza pode ser decretada discricionariamente pelo agente policial.'
      },
      {
        id: 'D',
        texto: 'O banimento de cidadãos nacionais é incentivado quando houver reincidência em contravenções penais.'
      },
      {
        id: 'E',
        texto: 'As penas cruéis e degradantes são permitidas excepcionalmente em interrogatórios de crimes hediondos.'
      }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Rafael Barretto',
      cargo: 'Especialista em Direitos Humanos e Segurança Pública',
      analiseGeral: 'A DUDH é cobrada de forma literal nas provas da FCC e IBFC para a PMBA. O artigo 9º veda prisões e detenções arbitrárias, garantindo a legalidade estrita de qualquer restrição à liberdade.',
      justificativaAlternativas: {
        A: 'CORRETA. Artigo 9º da DUDH: "Ninguém será arbitrariamente preso, detido ou exilado".',
        B: 'Incorreta. O art. 11 da DUDH garante a presunção de inocência até que a culpa seja provada.',
        C: 'Incorreta. A DUDH e o Pacto de San José vedam prisões civis arbitrárias; a polícia não decreta prisões civis.',
        D: 'Incorreta. O exílio e banimento arbitrário são expressamente proibidos.',
        E: 'Incorreta. O artigo 5º da DUDH veda terminantemente a tortura e tratamento cruel, desumano ou degradante, sem exceção.'
      },
      bizuPMBA: 'Bizu de Direitos Humanos: Os artigos 1º ao 11 da DUDH são os mais cobrados pela FCC. A vedação à tortura e à prisão arbitrária são cláusulas pétreas internacionais.',
      artigosCitados: ['DUDH de 1948, Artigo 9º e Artigo 5º']
    }
  }
];

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
  }
];
