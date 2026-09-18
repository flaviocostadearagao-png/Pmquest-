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
          'Inviolabilidade de domicílio (XI): A casa é asilo inviolável do indivíduo. Exceções sem ordem judicial (a qualquer hora do dia ou da noite): Flagrante delito, desastre ou para prestar socorro. Com ordem judicial: SOMENTE DURANTE O DIA.',
          'Prisão legal (LXI): Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei.',
          'Habeas Corpus (LXVIII): Conceder-se-á para proteger a liberdade de locomoção ameaçada ou violada por ilegalidade ou abuso de poder. É gratuito e NÃO exige advogado!',
          'Mandado de Segurança (LXIX): Protege direito líquido e certo não amparado por Habeas Corpus ou Habeas Data.',
          'Habeas Data (LXXII): Assegura o conhecimento ou retificação de informações relativas à pessoa do impetrante em bancos de dados de entidades governamentais. É gratuito.'
        ],
        dicaDeProva: 'A FCC adora trocar as hipóteses de entrada em domicílio. Lembre-se: ordem de Juiz NUNCA permite entrar à noite sem consentimento do morador! Se a questão falar "mandado judicial à noite", a alternativa está FALSA!',
        legislacaoOuReferencia: 'CF/88, Art. 5º, incisos XI, LXI, LXVIII, LXIX e LXXII.'
      },
      {
        id: 'tc-2',
        titulo: 'Art. 144 da CF/88: Da Segurança Pública e Atribuições da Polícia Militar',
        tempoLeituraMin: 4,
        resumoIntro: 'A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.',
        pontosImportantes: [
          'Órgãos da Segurança Pública (Art. 144): Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, Polícias Civis, Polícias Militares e Corpos de Bombeiros Militares, e Polícias Penais (federal, estaduais e distrital).',
          'Missão Constitucional da PM (Art. 144, § 5º): Cabe à Polícia Militar a polícia ostensiva e a preservação da ordem pública.',
          'Forças Auxiliares: As Polícias Militares e Corpos de Bombeiros Militares são forças auxiliares e reserva do Exército Brasileiro e subordinam-se aos Governadores de Estado.',
          'Guardas Municipais (§ 8º): Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações (não exercem polícia ostensiva de competência militar).'
        ],
        dicaDeProva: 'Cuidado! A Polícia Militar NÃO exerce atribuições de polícia judiciária comum (que cabe à Polícia Civil e Federal). A PM faz Polícia Ostensiva e Preservação da Ordem Pública! Cuidado com pegadinhas invertendo essas funções.',
        legislacaoOuReferencia: 'CF/88, Artigo 144, § 5º e § 6º.'
      }
    ]
  },
  {
    id: 'mat-penal',
    nome: 'Noções de Direito Penal',
    icone: 'Gavel',
    totalQuestoesEdital: '06 Questões no Edital',
    relevancia: 'Muito Alta',
    descricao: 'Aplicação da lei penal, crimes contra a pessoa, patrimônio, legítima defesa e disposições do Código Penal.',
    topicos: [
      {
        id: 'tpen-1',
        titulo: 'Excludentes de Ilicitude e Legítima Defesa no Código Penal',
        tempoLeituraMin: 5,
        resumoIntro: 'As causas excludentes de ilicitude (Art. 23 do CP) retiram a contrariedade da conduta com o ordenamento jurídico, fazendo com que o fato típico não seja considerado crime.',
        pontosImportantes: [
          'Causas Gerais de Exclusão (Art. 23): Estado de necessidade, Legítima defesa, Estrito cumprimento de dever legal e Exercício regular de direito.',
          'Legítima Defesa (Art. 25): Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.',
          'Agente de Segurança Pública (Pacote Anticrime): Considera-se em legítima defesa o agente que repele agressão ou risco de agressão a vítima mantida refém.',
          'Excesso Punível (Art. 23, parágrafo único): O agente, em qualquer das hipóteses, responderá pelo excesso doloso ou culposo.'
        ],
        dicaDeProva: 'Grave a distinção: no Estado de Necessidade há conflito entre dois bens jurídicos legítimos (perigo atual involuntário). Na Legítima Defesa há agressão INJUSTA humana (atual ou iminente).',
        legislacaoOuReferencia: 'Código Penal Brasileiro, Arts. 23 a 25.'
      },
      {
        id: 'tpen-2',
        titulo: 'Crimes Contra o Patrimônio: Furto, Roubo e Extorsão',
        tempoLeituraMin: 5,
        resumoIntro: 'Diferenciação precisa das modalidades de subtração e violência contra a posse e propriedade no Direito Penal.',
        pontosImportantes: [
          'Furto (Art. 155): Subtrair, para si ou para outrem, coisa alheia móvel (SEM violência ou grave ameaça à pessoa).',
          'Roubo (Art. 157): Subtrair coisa móvel alheia, para si ou para outrem, MEDIANTE grave ameaça ou violência à pessoa, ou depois de havê-la reduzido à impossibilidade de resistência.',
          'Roubo Impróprio (§ 1º): A violência ou grave ameaça é empregada LOGO DEPOIS da subtração da coisa para assegurar a impunidade do crime ou a detenção do bem.',
          'Extorsão (Art. 158): Constranger alguém, mediante violência ou grave ameaça, com o intuito de obter indevida vantagem econômica, a FAZER, tolerar que se faça ou deixar de fazer alguma coisa.'
        ],
        dicaDeProva: 'No roubo, o criminoso subtrai a coisa diretamente. Na extorsão, a vítima precisa colaborar ativamente (ex: digitar a senha do PIX sob ameaça). Se a vítima for indispensável para a entrega da vantagem, é extorsão!',
        legislacaoOuReferencia: 'Código Penal Brasileiro, Arts. 155, 157 e 158.'
      }
    ]
  },
  {
    id: 'mat-admin',
    nome: 'Direito Administrativo',
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
          'Hierarquia Militar: Ordenação da autoridade em níveis diferentes, dentro da estrutura das Forças Militares do Estado.',
          'Disciplina Militar: Rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições.',
          'Círculos Hierárquicos: Âmbitos de convivência entre policiais militares da mesma categoria destinados a desenvolver o espírito de camaradagem.',
          'Comandante Geral da PMBA: Oficial da ativa do último posto do Quadro de Oficiais Policiais Militares (QOPM), de livre escolha e nomeação pelo Governador do Estado.',
          'Uso do Uniforme: Prerrogativa privativa dos policiais militares em serviço ativo ou em solenidades autorizadas para inativos.'
        ],
        dicaDeProva: 'Grave para o Estatuto: Quem nomeia o Comandante Geral da PMBA? O Governador do Estado. A hierarquia e a disciplina são as bases institucionais permanentes da corporação militar!',
        legislacaoOuReferencia: 'Lei Estadual da Bahia nº 7.990/2001, Arts. 1º a 20.'
      },
      {
        id: 'ta-2',
        titulo: 'Princípios Expressos da Administração Pública (LIMPE - Art. 37 CF/88)',
        tempoLeituraMin: 4,
        resumoIntro: 'A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência.',
        pontosImportantes: [
          'Legalidade: O administrador público só pode fazer o que a lei expressamente autoriza (diferente do particular, que pode fazer tudo que a lei não proíbe).',
          'Impessoalidade: Veda o favorecimento pessoal e a autopromoção de agentes em obras ou programas públicos.',
          'Moralidade: Exige probidade, boa-fé e lealdade institucional.',
          'Publicidade: Regra geral de transparência dos atos administrativos (salvo segurança pública ou intimidade).',
          'Eficiência: Busca pelo melhor resultado com o menor custo e maior presteza.'
        ],
        dicaDeProva: 'Mnemônico LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. O princípio da Eficiência foi acrescentado pela Emenda Constitucional nº 19/1998.',
        legislacaoOuReferencia: 'CF/88, Artigo 37, caput.'
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
        resumoIntro: 'Aprovada pela Resolução 217 A (III) da Assembleia Geral da ONU em 10 de dezembro de 1948, em Paris, como marco basilar dos direitos fundamentais pós-Segunda Guerra Mundial.',
        pontosImportantes: [
          'Artigo 1º: Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e consciência, devem agir uns para com os outros em espírito de fraternidade.',
          'Artigo 3º: Todo indivíduo tem direito à vida, à liberdade e à segurança pessoal.',
          'Artigo 5º: Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante (norma absoluta de jus cogens).',
          'Artigo 9º: Ninguém será arbitrariamente preso, detido ou exilado.',
          'Artigo 11: Toda pessoa acusada de ato delituoso tem direito a ser presumida inocente até que a culpabilidade tenha sido provada perante a lei.'
        ],
        dicaDeProva: 'A DUDH é uma Resolução da Assembleia Geral da ONU com força principiológica basilar universal. A proibição da tortura NÃO admite qualquer exceção (nem mesmo em estado de defesa, sítio ou guerra)!',
        legislacaoOuReferencia: 'DUDH de 1948 / Pacto de San José (Decreto 678/1992).'
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
        resumoIntro: 'Destinado a garantir à população negra a efetivação da igualdade de oportunidades, a defesa dos direitos étnicos individuais, coletivos e difusos e o combate à discriminação e intolerância.',
        pontosImportantes: [
          'População negra: O conjunto de pessoas que se autodeclaram pretas e pardas, conforme o quesito cor ou raça usado pelo IBGE.',
          'Ações Afirmativas: Programas e medidas especiais adotados pelo Estado e iniciativa privada para reparação das desigualdades raciais e promoção de oportunidades (NÃO configuram discriminação).',
          'Direito à saúde: Tratamento específico às doenças com maior prevalência na população negra (ex: anemia falciforme).',
          'Liberdade de crença e culto: Garantida a proteção e a inviolabilidade dos locais de culto de matriz africana (terreiros).'
        ],
        dicaDeProva: 'Cai sempre: Quem compõe a "população negra" segundo a lei? Resposta: PRETAS + PARDAS (critério do IBGE). Jamais marque alternativas que excluam os pardos!',
        legislacaoOuReferencia: 'Lei Federal nº 12.288/2010, Art. 1º ao 8º.'
      },
      {
        id: 'ti-2',
        titulo: 'Lei Maria da Penha (Lei nº 11.340/2006) e Formas de Violência',
        tempoLeituraMin: 5,
        resumoIntro: 'Mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher, nos termos do § 8º do art. 226 da Constituição Federal.',
        pontosImportantes: [
          'Cinco formas de violência doméstica contra a mulher (Art. 7º): Física, Psicológica, Sexual, Patrimonial e Moral.',
          'Violência Patrimonial: Subtração, retenção, destruição de objetos, instrumentos de trabalho, documentos pessoais e bens.',
          'Violência Moral: Conduta que configure calúnia, difamação ou injúria.',
          'Atuação Policial: O policial militar deve adotar providências imediatas para proteger a vítima, encaminhá-la a atendimento médico, garantir o afastamento do agressor do lar e conduzi-lo em flagrante.',
          'Vedação: É proibida a aplicação de penas de cesta básica ou outras de prestação pecuniária nos crimes de violência doméstica.'
        ],
        dicaDeProva: 'Grave as 5 formas de violência: FÍSICA, PSICOLÓGICA, SEXUAL, PATRIMONIAL e MORAL. A destruição de documentos e instrumentos de trabalho é violência PATRIMONIAL. A injúria e difamação são violência MORAL.',
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
        resumoIntro: 'Dois grandes movimentos populares e emancipatórios de Salvador de imenso destaque na historiografia baiana.',
        pontosImportantes: [
          'Revolta dos Búzios (Conjuração Baiana / Alfaiates - 1798): Caráter popular, republicano, abolicionista e de igualdade racial. Lideranças: Lucas Dantas, Manuel Faustino, Luís Gonzaga das Virgens e João de Deus.',
          'Revolta dos Malês (1835): Ocorrida na noite de 24 para 25 de janeiro de 1835 durante o mês sagrado do Ramadã. Liderada por negros islamizados (malês/nagôs) alfabetizados em árabe em plena capital baiana.'
        ],
        dicaDeProva: 'Diferença-chave de prova: Búzios (1798) queria proclamação de República e fim da escravidão (influência da Revolução Francesa). Já Malês (1835) foi liderada por muçulmanos letrados em Salvador contra o cativeiro e a opressão religiosa.',
        legislacaoOuReferencia: 'Historiografia Baiana - Luís Henrique Dias Tavares.'
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
      },
      {
        id: 'tp-2',
        titulo: 'Concordância Verbal: Verbo Haver e Fazer Impessoais',
        tempoLeituraMin: 4,
        resumoIntro: 'Regras de concordância com orações sem sujeito que mais derrubam candidatos em concursos policiais.',
        pontosImportantes: [
          'Haver no sentido de existir ou ocorrer: É impessoal e fica SEMPRE na 3ª pessoa do singular (ex: "Havia muitos policiais", NUNCA "Haviam muitos policiais").',
          'Haver e Fazer indicando tempo decorrido: São impessoais e não flexionam no plural (ex: "Faz dez anos que estudo", "Há dois meses ocorreu o fato").',
          'Locuções com verbo impessoal: O verbo auxiliar também fica no singular (ex: "Deve haver soluções", NUNCA "Devem haver soluções").'
        ],
        dicaDeProva: 'O verbo EXISTIR tem sujeito e concorda normalmente ("Existiam dúvidas"). O verbo HAVER (no sentido de existir) NÃO tem plural ("Havia dúvidas"). Pegadinha clássica da FCC!',
        legislacaoOuReferencia: 'Sintaxe de Concordância - Gramática da Língua Portuguesa.'
      }
    ]
  },
  {
    id: 'mat-rlm',
    nome: 'Raciocínio Lógico',
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
  },
  {
    id: 'mat-penal-militar',
    nome: 'Noções de Direito Penal Militar',
    icone: 'Sword',
    totalQuestoesEdital: '05 Questões no Edital',
    relevancia: 'Alta',
    descricao: 'Crimes militares em tempo de paz, abandono de posto, dormir em serviço e crimes contra a administração militar.',
    topicos: [
      {
        id: 'tpm-1',
        titulo: 'Crimes em Espécie: Abandono de Posto e Dormir em Serviço',
        tempoLeituraMin: 5,
        resumoIntro: 'Estudo dos tipos penais específicos do Código Penal Militar que protegem o dever e o serviço militar.',
        pontosImportantes: [
          'Abandono de Posto (Art. 195 CPM): Abandonar, sem ordem superior, o posto ou lugar de serviço que lhe tenha sido designado, ou o serviço que lhe cumpria, antes de terminá-lo.',
          'Dormir em Serviço (Art. 203 CPM): Dormir o militar, quando em serviço, como sentinela, vigia, de plantão às máquinas, em posto de sentinela, ou em qualquer serviço de natureza semelhante.',
          'Deserção: Ausência do militar sem licença por mais de 8 dias.'
        ],
        dicaDeProva: 'O Abandono de Posto é crime de perigo abstrato e se consuma no momento em que o militar se afasta do local, independentemente de ocorrer algum prejuízo!',
        legislacaoOuReferencia: 'Código Penal Militar (CPM).'
      }
    ]
  },
  {
    id: 'mat-proc-penal',
    nome: 'Noções de Direito Processual Penal',
    icone: 'Files',
    totalQuestoesEdital: '05 Questões no Edital',
    relevancia: 'Média',
    descricao: 'Inquérito Policial, Prisão em Flagrante e disposições do Código de Processo Penal.',
    topicos: [
      {
        id: 'tpp-1',
        titulo: 'Inquérito Policial e Prisão em Flagrante',
        tempoLeituraMin: 5,
        resumoIntro: 'Fase pré-processual e as modalidades de prisão cautelar mais comuns na atividade policial.',
        pontosImportantes: [
          'Inquérito Policial (IP): Procedimento administrativo, inquisitivo e sigiloso destinado a apurar a autoria e a materialidade da infração penal.',
          'Prisão em Flagrante (Art. 302 CPP): Considera-se em flagrante delito quem: está cometendo a infração; acaba de cometê-la; é perseguido logo após; é encontrado logo depois com instrumentos do crime.',
          'Audiência de Custódia: Deve ocorrer em até 24 horas após a prisão.'
        ],
        dicaDeProva: 'O Inquérito Policial é DISPENSÁVEL para o oferecimento da denúncia se o Ministério Público já possuir elementos suficientes!',
        legislacaoOuReferencia: 'Código de Processo Penal (CPP).'
      }
    ]
  },
  {
    id: 'mat-informatica',
    nome: 'Informática',
    icone: 'Laptop',
    totalQuestoesEdital: '05 Questões no Edital',
    relevancia: 'Média',
    descricao: 'Sistemas operacionais (Windows/Linux), Pacote Office, Internet e Segurança da Informação.',
    topicos: [
      {
        id: 'tinf-1',
        titulo: 'Segurança da Informação e Malwares',
        tempoLeituraMin: 5,
        resumoIntro: 'Conceitos fundamentais de proteção de dados e as principais ameaças virtuais.',
        pontosImportantes: [
          'Confidencialidade, Integridade e Disponibilidade (CID): Os três pilares da segurança.',
          'Vírus vs. Worm: Vírus precisa de um hospedeiro/execução. Worm se autorreplica pela rede.',
          'Phishing: Técnica de engenharia social para roubar dados através de sites ou e-mails falsos.',
          'Firewall: Barreira de proteção que controla o tráfego de rede.'
        ],
        dicaDeProva: 'O Backup é a principal medida de recuperação de dados. Lembre-se da regra 3-2-1: 3 cópias, 2 mídias diferentes, 1 fora do local.',
        legislacaoOuReferencia: 'Segurança da Informação / FCC-IBFC.'
      }
    ]
  },
  {
    id: 'mat-atualidades',
    nome: 'Atualidades',
    icone: 'Newspaper',
    totalQuestoesEdital: '05 Questões no Edital',
    relevancia: 'Média',
    descricao: 'Fatos políticos, econômicos, sociais e culturais relevantes ocorridos no Brasil e no mundo.',
    topicos: [
      {
        id: 'tatu-1',
        titulo: 'Meio Ambiente e Geopolítica Mundial',
        tempoLeituraMin: 5,
        resumoIntro: 'Temas contemporâneos que impactam a sociedade global e nacional.',
        pontosImportantes: [
          'Mudanças Climáticas e Acordo de Paris.',
          'Conflitos internacionais e blocos econômicos.',
          'Desenvolvimento Sustentável e a Agenda 2030 da ONU.'
        ],
        dicaDeProva: 'Fique atento aos eventos ocorridos nos últimos 12 meses antes do edital, especialmente envolvendo a Bahia e o Brasil.',
        legislacaoOuReferencia: 'Atualidades / Jornalismo e Portais Oficiais.'
      }
    ]
  }
];
