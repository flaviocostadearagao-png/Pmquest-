import { Questao, AlternativaId } from '../types';

export const BANCO_PEDAGOGICO_COMPLETO_PMBA: Questao[] = [
  // =========================================================================
  // DIREITO CONSTITUCIONAL
  // =========================================================================
  {
    id: 'ped-const-01',
    numero: 101,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Direito Constitucional',
    assunto: 'Art. 5º, XI da CF/88 - Inviolabilidade do Domicílio',
    dificuldade: 'Média',
    enunciado: 'Durante patrulhamento de rotina às 23h, uma guarnição da PMBA escuta gritos de socorro vindos do interior de uma residência com fumaça densa saindo pelas janelas. Com base no Art. 5º, XI da CF/88, assinale a conduta constitucionalmente permitida:',
    alternativas: [
      { id: 'A', texto: 'A entrada na residência é permitida imediatamente, mesmo à noite e sem consentimento do morador, para prestar socorro.' },
      { id: 'B', texto: 'A entrada só é permitida se houver prévio mandado judicial expedido pelo juiz de plantão.' },
      { id: 'C', texto: 'Os policiais devem aguardar o amanhecer do dia para adentrar ao imóvel.' },
      { id: 'D', texto: 'A inviolabilidade do domicílio é absoluta, sendo proibida a entrada sem expressa autorização do proprietário.' },
      { id: 'E', texto: 'A entrada é vedada a policiais militares, sendo ato privativo do Corpo de Bombeiros.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. PMBA Fernando Rocha',
      cargo: 'Especialista em Direito Constitucional',
      analiseGeral: 'O Art. 5º, XI da CF/88 estabelece que a casa é asilo inviolável, mas admite entrada sem consentimento a QUALQUER HORA em caso de flagrante delito, desastre ou para PRESTAR SOCORRO.',
      justificativaAlternativas: {
        A: 'CORRETA. Prestar socorro autoriza a entrada dia ou noite.',
        B: 'Incorreta. Prestar socorro independe de ordem judicial.',
        C: 'Incorreta. O socorro deve ser imediato.',
        D: 'Incorreta. A garantia não é absoluta.',
        E: 'Incorreta. Qualquer autoridade ou cidadão pode prestar socorro.'
      },
      bizuPMBA: 'Bizu PMBA: Flagrante, Desastre e Prestar Socorro = Dia ou Noite! Mandado judicial = SOMENTE durante o dia!',
      artigosCitados: ['CF/88, Art. 5º, inciso XI']
    }
  },
  {
    id: 'ped-const-02',
    numero: 102,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Direito Constitucional',
    assunto: 'Art. 144, § 5º da CF/88 - Missão da Polícia Militar',
    dificuldade: 'Fácil',
    enunciado: 'Segundo a Constituição Federal de 1988, no capítulo referente à Segurança Pública (Art. 144, § 5º), incumbe especificamente às Polícias Militares:',
    alternativas: [
      { id: 'A', texto: 'A polícia ostensiva e a preservação da ordem pública.' },
      { id: 'B', texto: 'A apuração de infrações penais comuns e a polícia judiciária estadual.' },
      { id: 'C', texto: 'O patrulhamento ostensivo das rodovias federais.' },
      { id: 'D', texto: 'A proteção dos bens e instalações municipais com poder bélico independente.' },
      { id: 'E', texto: 'A execução exclusiva de perícias criminais e necroscópicas.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Maj. PMBA Carlos Eduardo',
      cargo: 'Direito Constitucional e Segurança Pública',
      analiseGeral: 'O Art. 144, § 5º da CF/88 define com clareza a destinação: "Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública".',
      justificativaAlternativas: {
        A: 'CORRETA. Redação literal do § 5º do Art. 144 da CF/88.',
        B: 'Incorreta. Competência da Polícia Civil (Art. 144, § 4º).',
        C: 'Incorreta. Competência da PRF (Art. 144, § 2º).',
        D: 'Incorreta. Guarda Municipal destina-se à proteção de bens, serviços e instalações (Art. 144, § 8º).',
        E: 'Incorreta. Atividade pericial/técnico-científica pertence à Polícia Técnica/Civil.'
      },
      bizuPMBA: 'Bizu PMBA: PM = Polícia Ostensiva + Preservação da Ordem Pública! PC = Polícia Judiciária + Apuração de Infrações Penais!',
      artigosCitados: ['CF/88, Art. 144, § 5º']
    }
  },
  {
    id: 'ped-const-03',
    numero: 103,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Direito Constitucional',
    assunto: 'Art. 5º - Remédios Constitucionais (Habeas Corpus e Habeas Data)',
    dificuldade: 'Média',
    enunciado: 'Quanto aos remédios constitucionais previstos no Art. 5º da Carta Magna, assinale a afirmação tecnicamente correta:',
    alternativas: [
      { id: 'A', texto: 'O Habeas Corpus é ação gratuita e visa proteger a liberdade de locomoção contra ilegalidade ou abuso de poder.' },
      { id: 'B', texto: 'O Mandado de Segurança é cabível para obter dados pessoais constantes de bancos governamentais.' },
      { id: 'C', texto: 'O Habeas Data exige pagamento de taxa judiciária obrigatória fixada em lei estadual.' },
      { id: 'D', texto: 'A Ação Popular só pode ser ajuizada por qualquer pessoa jurídica regularmente constituída.' },
      { id: 'E', texto: 'O Habeas Corpus exige capacidade postulatória e assinatura obrigatória de advogado constituído.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dra. Camila Meireles',
      cargo: 'Professora de Direito Constitucional',
      analiseGeral: 'O Art. 5º, LXVIII e LXXVII asseguram que o Habeas Corpus protege a liberdade de locomoção e é GRATUITO para todos.',
      justificativaAlternativas: {
        A: 'CORRETA. HC protege locomoção, é gratuito e dispensa advogado.',
        B: 'Incorreta. Obtenção de dados pessoais é matéria de Habeas Data.',
        C: 'Incorreta. O Habeas Data também é gratuito (Art. 5º, LXXVII).',
        D: 'Incorreta. Ação Popular é exclusiva de cidadão (eleitor pessoa física).',
        E: 'Incorreta. Qualquer pessoa pode impetrar HC sem advogado.'
      },
      bizuPMBA: 'Bizu dos Remédios: HC e HD são sempre GRATUITOS! HC protege o direito de ir e vir; HD protege informação pessoal!',
      artigosCitados: ['CF/88, Art. 5º, LXVIII e LXXVII']
    }
  },
  {
    id: 'ped-const-04',
    numero: 104,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Direito Constitucional',
    assunto: 'Art. 144, § 6º - Vinculação e Subordinação das Polícias Militares',
    dificuldade: 'Média',
    enunciado: 'Em relação à organização das Polícias Militares e Corpos de Bombeiros Militares, o Art. 144, § 6º da CF/88 estabelece que estas corporações:',
    alternativas: [
      { id: 'A', texto: 'São forças auxiliares e reserva do Exército, e subordinam-se, juntamente com as polícias civis, aos Governadores dos Estados, do DF e dos Territórios.' },
      { id: 'B', texto: 'Subordinam-se diretamente ao Ministério da Defesa em tempo de paz.' },
      { id: 'C', texto: 'Possuem autonomia política e administrativa desvinculada do Chefe do Executivo Estadual.' },
      { id: 'D', texto: 'Constituem forças auxiliares da Marinha do Brasil nos estados costeiros.' },
      { id: 'E', texto: 'Subordinam-se ao Prefeito do Município onde estiver sediado o respectivo Batalhão.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. PMBA Fernando Rocha',
      cargo: 'Especialista em Direito Constitucional',
      analiseGeral: 'Art. 144, § 6º: "As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército, subordinam-se, juntamente com as polícias civis e as polícias penais estaduais e distrital, aos Governadores dos Estados, do Distrito Federal e dos Territórios".',
      justificativaAlternativas: {
        A: 'CORRETA. Literalidade do § 6º do Art. 144.',
        B: 'Incorreta. Subordinam-se aos Governadores de Estado.',
        C: 'Incorreta. Não possuem autonomia política desvinculada.',
        D: 'Incorreta. São forças auxiliares do Exército Brasileiro.',
        E: 'Incorreta. A PM é órgão estadual, não municipal.'
      },
      bizuPMBA: 'Bizu PMBA: PM e CBM = Forças auxiliares do EXÉRCITO, subordinadas ao GOVERNADOR DO ESTADO!',
      artigosCitados: ['CF/88, Art. 144, § 6º']
    }
  },

  // =========================================================================
  // PROMOÇÃO DA IGUALDADE RACIAL E DE GÊNERO
  // =========================================================================
  {
    id: 'ped-igual-01',
    numero: 201,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Lei Federal 11.340/2006 (Lei Maria da Penha) - Formas de Violência',
    dificuldade: 'Média',
    enunciado: 'Um agressor retém e destrói intencionalmente os documentos de identificação, instrumentos de trabalho e cartões bancários de sua companheira para impedi-la de sair de casa. De acordo com a Lei nº 11.340/2006 (Lei Maria da Penha), essa conduta configura violência doméstica do tipo:',
    alternativas: [
      { id: 'A', texto: 'Patrimonial.' },
      { id: 'B', texto: 'Física.' },
      { id: 'C', texto: 'Moral.' },
      { id: 'D', texto: 'Sexual.' },
      { id: 'E', texto: 'Institucional.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Ten. PMBA Mariana Souza',
      cargo: 'Instrutora de Legislação Aplicada e Direitos Humanos',
      analiseGeral: 'O Art. 7º, IV da Lei 11.340/2006 define a violência patrimonial como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos.',
      justificativaAlternativas: {
        A: 'CORRETA. Destruir ou reter documentos e bens de trabalho é violência patrimonial.',
        B: 'Incorreta. Violência física ofende a integridade ou saúde corporal.',
        C: 'Incorreta. Violência moral envolve calúnia, difamação ou injúria.',
        D: 'Incorreta. Violência sexual envolve conduta sexual não consentida.',
        E: 'Incorreta. Violência institucional é praticada por agentes do Estado.'
      },
      bizuPMBA: 'Bizu das 5 Formas de Violência na Lei Maria da Penha: FÍSICA (corpo), PSICOLÓGICA (mente/autoestima), SEXUAL (preservativo/sexo não consentido), PATRIMONIAL (bens/documentos/dinheiro), MORAL (calúnia/difamação/injúria)!',
      artigosCitados: ['Lei Federal nº 11.340/2006, Art. 7º, inciso IV']
    }
  },
  {
    id: 'ped-igual-02',
    numero: 202,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Lei Federal 12.288/2010 - Estatuto da Igualdade Racial (Ações Afirmativas)',
    dificuldade: 'Fácil',
    enunciado: 'Nos termos da Lei Federal nº 12.288/2010 (Estatuto da Igualdade Racial), os programas e medidas especiais adotados pelo Estado e pela iniciativa privada para a correção das desigualdades raciais e para a promoção da igualdade de oportunidades denominam-se:',
    alternativas: [
      { id: 'A', texto: 'Ações afirmativas.' },
      { id: 'B', texto: 'Discriminações diretas compensatórias.' },
      { id: 'C', texto: 'Privilégios estatais temporários.' },
      { id: 'D', texto: 'Medidas punitivas administrativas.' },
      { id: 'E', texto: 'Incentivos de segregação assistida.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Sérgio Bacelar',
      cargo: 'Especialista em Relações Étnico-Raciais',
      analiseGeral: 'Art. 4º, parágrafo único e Art. 1º, parágrafo único, VI da Lei 12.288/2010: ações afirmativas são os programas e medidas especiais adotados pelo Estado e pelo setor privado para a correção das desigualdades raciais históricas.',
      justificativaAlternativas: {
        A: 'CORRETA. Definição legal expressa no Estatuto.',
        B: 'Incorreta. O termo legal é ação afirmativa, não discriminação.',
        C: 'Incorreta. Trata-se de direito de promoção da igualdade substantiva.',
        D: 'Incorreta. Têm caráter promocional e distributivo, não punitivo.',
        E: 'Incorreta. Visa a integração e inclusão, repudiando qualquer segregação.'
      },
      bizuPMBA: 'Bizu PMBA: Ações Afirmativas = Medidas especiais para reparar desigualdades históricas e promover igualdade de oportunidades!',
      artigosCitados: ['Lei Federal nº 12.288/2010, Art. 1º e 4º']
    }
  },
  {
    id: 'ped-igual-03',
    numero: 203,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Lei Estadual da Bahia nº 13.182/2014 - Estatuto da Igualdade Racial da Bahia',
    dificuldade: 'Difícil',
    enunciado: 'A Lei Estadual nº 13.182/2014 institui o Estatuto da Igualdade Racial e de Combate ao Racismo Religioso no Estado da Bahia. Sobre suas diretrizes na segurança pública estadual, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'O Estado da Bahia deve implementar programas de formação continuada para policiais voltados aos direitos humanos e enfrentamento ao racismo institucional.' },
      { id: 'B', texto: 'É vedada a criação de ouvidorias especializadas para atendimento de denúncias de discriminação racial.' },
      { id: 'C', texto: 'A proteção aos terreiros e locais de culto de matriz africana é restrita aos templos tombados pelo IPHAN.' },
      { id: 'D', texto: 'O Estatuto Estadual aplica-se exclusivamente aos servidores públicos civis, excluindo a PMBA e o CBMBA.' },
      { id: 'E', texto: 'As comunidades quilombolas da Bahia não possuem direito prioritário à regularização fundiária de seus territórios ancestrais.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Ten. PMBA Mariana Souza',
      cargo: 'Instrutora de Legislação Aplicada',
      analiseGeral: 'A Lei Estadual 13.182/2014 prevê a capacitação contínua dos agentes de segurança pública da Bahia em relações étnico-raciais e direitos humanos para erradicar o racismo institucional.',
      justificativaAlternativas: {
        A: 'CORRETA. Diretriz obrigatória expressa na Lei 13.182/2014 para a Segurança Pública da Bahia.',
        B: 'Incorreta. A lei incentiva e determina mecanismos de acolhimento e ouvidoria.',
        C: 'Incorreta. Todos os locais de culto e manifestação de matriz africana são tutelados.',
        D: 'Incorreta. Aplica-se a toda a administração pública estadual, direta e indireta, incluindo forças militares.',
        E: 'Incorreta. A regularização fundiária quilombola é prioridade do Estado.'
      },
      bizuPMBA: 'Bizu da Lei Estadual 13.182/2014: Foco no combate ao racismo institucional na polícia e proteção ao sagrado dos povos de terreiro na Bahia!',
      artigosCitados: ['Lei Estadual da Bahia nº 13.182/2014']
    }
  },

  // =========================================================================
  // HISTÓRIA DA BAHIA
  // =========================================================================
  {
    id: 'ped-hist-01',
    numero: 301,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'História da Bahia',
    assunto: 'Independência da Bahia (2 de Julho de 1823)',
    dificuldade: 'Média',
    enunciado: 'A guerra da Independência na Bahia (1822-1823) culminou com a vitória das forças brasileiras em 2 de Julho de 1823. Sobre os heróis e fatos marcantes dessa campanha militar na Bahia, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Maria Quitéria de Jesus alistou-se como Soldado Medeiros no Batalhão dos Voluntários do Príncipe D. Pedro, destacando-se em combates como a Batalha da Barra do Paraguaçu.' },
      { id: 'B', texto: 'O general português Madeira de Melo aliou-se aos revoltosos baianos para proclamar a República em Salvador.' },
      { id: 'C', texto: 'A Batalha de Pirajá foi uma derrota militar definitiva para as tropas brasileiras comandadas por Labatut.' },
      { id: 'D', texto: 'Joana Angélica comandou as tropas de infantaria no Recôncavo Baiano na expulsão dos portugueses.' },
      { id: 'E', texto: 'A Independência da Bahia ocorreu de forma pacífica, sem conflitos bélicos ou participação popular.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Ubiratan Castro',
      cargo: 'Historiador e Especialista em História da Bahia',
      analiseGeral: 'Maria Quitéria disfarçou-se de homem sob o nome de "Soldado Medeiros" e lutou bravamente no Batalhão dos Periquitos, tornando-se a primeira mulher a assentar praça em uma unidade militar brasileira.',
      justificativaAlternativas: {
        A: 'CORRETA. Maria Quitéria é a patronesse do Quadro Complementar de Oficiais e heroína baiana.',
        B: 'Incorreta. Madeira de Melo era o comandante das tropas legalistas portuguesas invasoras.',
        C: 'Incorreta. A Batalha de Pirajá (8 de novembro de 1822) foi uma vitória decisiva das tropas brasileiras.',
        D: 'Incorreta. Joana Angélica foi abadessa mártir no Convento da Lapa em 1822.',
        E: 'Incorreta. A Independência da Bahia foi uma sangrenta guerra popular que durou mais de um ano.'
      },
      bizuPMBA: 'Bizu do 2 de Julho: Maria Quitéria (Soldado Medeiros) + Corneteiro Lopes (toque de avançar cavalaria em Pirajá) + Joana Angélica (mártir da Lapa) + Maria Felipa (Itaparica)!',
      artigosCitados: ['História da Bahia - Independência e Heróis do 2 de Julho']
    }
  },
  {
    id: 'ped-hist-02',
    numero: 302,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'História da Bahia',
    assunto: 'Revolta dos Malês (1835)',
    dificuldade: 'Média',
    enunciado: 'Em janeiro de 1835, ocorreu em Salvador a Revolta dos Malês. Este levante urbano teve como característica singular:',
    alternativas: [
      { id: 'A', texto: 'A liderança de negros escravizados e libertos de religião islâmica (muçulmanos), que sabiam ler e escrever em árabe.' },
      { id: 'B', texto: 'A aliança com a elite açucareira do Recôncavo para destituir o Imperador D. Pedro II.' },
      { id: 'C', texto: 'O objetivo de restaurar a monarquia portuguesa absoluta e recolonizar a Bahia.' },
      { id: 'D', texto: 'A exclusividade de membros brancos liberais descontentes com a regência trina.' },
      { id: 'E', texto: 'O sucesso militar que instituiu um califado independente em Salvador por mais de uma década.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Ubiratan Castro',
      cargo: 'Historiador',
      analiseGeral: 'A Revolta dos Malês (1835) foi liderada por escravizados e libertos muçulmanos (nagôs e hauçás), letrados em árabe, com forte identidade religiosa e combate à escravidão.',
      justificativaAlternativas: {
        A: 'CORRETA. Os malês eram negros muçulmanos que utilizavam escritos em árabe para articular a revolta.',
        B: 'Incorreta. Não houve qualquer aliança com as elites escravistas.',
        C: 'Incorreta. Não buscavam recolonização, mas o fim da opressão e liberdade religiosa.',
        D: 'Incorreta. Foi um movimento eminentemente negro e escravo/liberto.',
        E: 'Incorreta. A revolta foi duramente reprimida pelas tropas imperiais na mesma noite.'
      },
      bizuPMBA: 'Bizu das Revoltas na Bahia: Malês (1835) = Negros Muçulmanos / Alfabetizados em Árabe / Salvador. Alfaiates/Búzios (1798) = Popular / República / Fim da Escravidão. Sabinada (1837) = Classe Média / República transitória!',
      artigosCitados: ['História da Bahia - Revoltas Coloniais e Regenciais']
    }
  },

  // =========================================================================
  // DIREITO ADMINISTRATIVO
  // =========================================================================
  {
    id: 'ped-adm-01',
    numero: 401,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Direito Administrativo',
    assunto: 'Poder de Polícia - Atributos (Autoexecutoriedade e Coercibilidade)',
    dificuldade: 'Média',
    enunciado: 'Ao realizar fiscalização em estabelecimento comercial interditado por risco de desabamento iminente, uma guarnição da Polícia Militar efetua o isolamento imediato da área e a remoção forçada de indivíduos que insistiam em permanecer no local, sem necessidade de autorização judicial prévia. Essa atuação policial fundamenta-se nos atributos do poder de polícia denominados:',
    alternativas: [
      { id: 'A', texto: 'Autoexecutoriedade e coercibilidade.' },
      { id: 'B', texto: 'Tipicidade e presunção absoluta de veracidade.' },
      { id: 'C', texto: 'Hierarquia e delegação discricionária irrestrita.' },
      { id: 'D', texto: 'Revogabilidade compulsória e legalidade estrita.' },
      { id: 'E', texto: 'Imunidade executiva e preclusão administrativa.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Thiago Medeiros',
      cargo: 'Procurador e Instrutor de Direito Administrativo',
      analiseGeral: 'A autoexecutoriedade permite que a Administração execute suas decisões diretamente sem autorização judicial prévia. A coercibilidade autoriza o uso moderado da força pública para compelir o administrado ao cumprimento.',
      justificativaAlternativas: {
        A: 'CORRETA. A autoexecutoriedade e coercibilidade são atributos clássicos do Poder de Polícia.',
        B: 'Incorreta. A presunção dos atos administrativos é RELATIVA (juris tantum).',
        C: 'Incorreta. O poder hierárquico opera internamente, não sobre particulares.',
        D: 'Incorreta. Não são atributos do poder de polícia.',
        E: 'Incorreta. Termos não aplicáveis aos atributos do ato.'
      },
      bizuPMBA: 'Bizu do Poder de Polícia: DAC = Discricionariedade, Autoexecutoriedade e Coercibilidade! A PM atua diretamente sem precisar pedir ao juiz!',
      artigosCitados: ['Direito Administrativo - Poder de Polícia']
    }
  },
  {
    id: 'ped-adm-02',
    numero: 402,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Direito Administrativo',
    assunto: 'Responsabilidade Civil do Estado (Art. 37, § 6º da CF/88)',
    dificuldade: 'Média',
    enunciado: 'Uma viatura da PMBA, durante deslocamento com sirene e giroflex ligados para atendimento de ocorrência urgente, colide com o veículo de um cidadão que atravessava no semáforo verde, causando danos materiais. Conforme o Art. 37, § 6º da CF/88, a responsabilidade civil do Estado perante o proprietário lesado é:',
    alternativas: [
      { id: 'A', texto: 'Objetiva, baseada na teoria do risco administrativo, cabendo ao Estado indenizar o prejuízo independentemente de dolo ou culpa do policial condutor.' },
      { id: 'B', texto: 'Subjetiva, exigindo que a vítima comprove o dolo e a má-fé do policial militar.' },
      { id: 'C', texto: 'Inexistente, pois viaturas policiais gozam de imunidade total de trânsito em serviço de urgência.' },
      { id: 'D', texto: 'Exclusiva do policial militar condutor, que deverá ser processado diretamente pela vítima em seu patrimônio pessoal.' },
      { id: 'E', texto: 'Integral, não admitindo qualquer excludente mesmo em caso de culpa exclusiva da vítima.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Thiago Medeiros',
      cargo: 'Direito Administrativo',
      analiseGeral: 'Art. 37, § 6º da CF/88: A responsabilidade das pessoas jurídicas de direito público é OBJETIVA (dispensa dolo/culpa). O Estado responde perante o terceiro e tem direito de regresso contra o agente se este agiu com dolo ou culpa.',
      justificativaAlternativas: {
        A: 'CORRETA. Teoria do Risco Administrativo gera responsabilidade objetiva do Estado.',
        B: 'Incorreta. A responsabilidade do Estado independe de prova de dolo ou culpa.',
        C: 'Incorreta. O Estado deve reparar os danos causados por seus agentes.',
        D: 'Incorreta. O STF pacificou o tema da dupla garantia: a ação deve ser movida contra o Estado, não contra o policial.',
        E: 'Incorreta. A teoria do risco administrativo admite excludentes (culpa exclusiva da vítima, caso fortuito).'
      },
      bizuPMBA: 'Bizu da Responsabilidade Civil: Vítima vs Estado = Responsabilidade OBJETIVA (não precisa provar culpa). Estado vs Policial (Ação de Regresso) = SUBJETIVA (exige Dolo ou Culpa)!',
      artigosCitados: ['CF/88, Art. 37, § 6º']
    }
  },

  // =========================================================================
  // NOÇÕES DE DIREITO PENAL
  // =========================================================================
  {
    id: 'ped-penal-01',
    numero: 501,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Noções de Direito Penal',
    assunto: 'Crimes contra o Patrimônio - Roubo (Art. 157) vs Furto (Art. 155)',
    dificuldade: 'Fácil',
    enunciado: 'O agente que subtrai para si coisa alheia móvel mediante grave ameaça exercida com simulação de porte de arma de fogo sob a camisa comete o crime de:',
    alternativas: [
      { id: 'A', texto: 'Roubo simples consumado (Art. 157, caput do CP).' },
      { id: 'B', texto: 'Furto qualificado por fraude (Art. 155, § 4º do CP).' },
      { id: 'C', texto: 'Extorsão mediante sequestro (Art. 159 do CP).' },
      { id: 'D', texto: 'Apropriação indébita (Art. 168 do CP).' },
      { id: 'E', texto: 'Estelionato simples (Art. 171 do CP).' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Maj. PMBA Carlos Eduardo',
      cargo: 'Instrutor de Direito Penal Militar',
      analiseGeral: 'A simulação de arma de fogo é meio idôneo para caracterizar a GRAVE AMEAÇA do crime de ROUBO (Art. 157 do CP), intimidando a vítima e impedindo sua resistência.',
      justificativaAlternativas: {
        A: 'CORRETA. Havendo grave ameaça, o delito é de Roubo, e não Furto.',
        B: 'Incorreta. Furto não tem violência nem grave ameaça à pessoa.',
        C: 'Incorreta. Não houve privação de liberdade como condição ou preço do resgate.',
        D: 'Incorreta. Na apropriação indébita o agente já tem a posse mansa anterior da coisa.',
        E: 'Incorreta. No estelionato a vítima entrega o bem enganada por artifício/ardil.'
      },
      bizuPMBA: 'Bizu Penal: Violência ou Grave Ameaça (mesmo com arma fingida) = ROUBO! Subtração silenciosa sem violência à pessoa = FURTO!',
      artigosCitados: ['Código Penal Brasileiro, Art. 157']
    }
  },
  {
    id: 'ped-penal-02',
    numero: 502,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Noções de Direito Penal',
    assunto: 'Crimes contra a Administração Pública - Prevaricação (Art. 319 do CP)',
    dificuldade: 'Média',
    enunciado: 'O policial militar que retarda a lavratura de um auto de prisão ou deixa de conduzir um suspeito à delegacia para satisfazer interesse ou sentimento pessoal comete o crime de:',
    alternativas: [
      { id: 'A', texto: 'Prevaricação (Art. 319 do Código Penal).' },
      { id: 'B', texto: 'Concussão (Art. 316 do Código Penal).' },
      { id: 'C', texto: 'Corrupção passiva privilegiada (Art. 317, § 2º do CP).' },
      { id: 'D', texto: 'Condescendência criminosa (Art. 320 do CP).' },
      { id: 'E', texto: 'Desobediência militar (Art. 330 do CP).' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. PMBA Rogério Silva',
      cargo: 'Especialista em Direito Penal',
      analiseGeral: 'Art. 319 do CP (Prevaricação): "Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal".',
      justificativaAlternativas: {
        A: 'CORRETA. O elemento especial do tipo é agir por interesse ou sentimento pessoal.',
        B: 'Incorreta. Concussão exige o verbo EXIGIR vantagem indevida.',
        C: 'Incorreta. Corrupção passiva privilegiada ocorre cedendo a pedido ou influência de outrem.',
        D: 'Incorreta. Condescendência criminosa é deixar de responsabilizar subordinado por indulgência (pena/dó).',
        E: 'Incorreta. Desobediência é praticada por particular que desobedece ordem legal.'
      },
      bizuPMBA: 'Bizu dos Crimes Funcionais: Sentimento/Interesse Pessoal = PREVARICAÇÃO! Indulgência com subordinado = CONDESCENDÊNCIA CRIMINOSA! Exigir vantagem = CONCUSSÃO!',
      artigosCitados: ['Código Penal Brasileiro, Art. 319']
    }
  },

  // =========================================================================
  // LÍNGUA PORTUGUESA
  // =========================================================================
  {
    id: 'ped-port-01',
    numero: 601,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Língua Portuguesa',
    assunto: 'Emprego do Sinal Indicativo de Crase',
    dificuldade: 'Média',
    enunciado: 'Assinale a alternativa em que o uso do acento grave indicativo de crase é OBRIGATÓRIO de acordo com a norma-padrão da língua portuguesa:',
    alternativas: [
      { id: 'A', texto: 'A guarnição deslocou-se às pressas para atender o chamado da central.' },
      { id: 'B', texto: 'O soldado começou à redigir o boletim de ocorrência com atenção.' },
      { id: 'C', texto: 'O tenente dirigiu elogios à você pelo excelente serviço prestado.' },
      { id: 'D', texto: 'O policial permaneceu frente à frente com o suspeito durante a abordagem.' },
      { id: 'E', texto: 'Os policiais realizaram patrulhamento à cavalo nas imediações do parque.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Márcio Ribeiro',
      cargo: 'Gramático e Revisor Textual',
      analiseGeral: 'A locução adverbial feminina de modo "às pressas" recebe obrigatoriamente o acento grave indicador de crase.',
      justificativaAlternativas: {
        A: 'CORRETA. Locução adverbial feminina de modo ("às pressas", "às escondidas", "à noite") tem crase obrigatória.',
        B: 'Incorreta. Proibida crase antes de verbo no infinitivo ("redigir").',
        C: 'Incorreta. Proibida crase antes de pronome de tratamento ("você").',
        D: 'Incorreta. Proibida crase entre palavras repetidas ("frente a frente").',
        E: 'Incorreta. Proibida crase antes de palavra masculina ("cavalo").'
      },
      bizuPMBA: 'Bizu da Crase Proibida: ANTES DE VERBO, PALAVRA MASCULINA, PRONOME E ENTRE PALAVRAS IGUAIS = NUNCA TEM CRASE! Locuções femininas (à noite, às pressas) = SEMPRE TEM CRASE!',
      artigosCitados: ['Língua Portuguesa - Regência e Emprego da Crase']
    }
  },
  {
    id: 'ped-port-02',
    numero: 602,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Língua Portuguesa',
    assunto: 'Regência Verbal (Verbos Visar, Aspirar e Assistir)',
    dificuldade: 'Difícil',
    enunciado: 'Quanto à regência verbal, assinale a opção que está em estrita conformidade com a norma culta:',
    alternativas: [
      { id: 'A', texto: 'O candidato disciplinado aspira ao cargo de Soldado da Polícia Militar.' },
      { id: 'B', texto: 'O policial militar assistiu o jogo de futebol durante o seu período de folga.' },
      { id: 'C', texto: 'As novas medidas de segurança pública visam o bem-estar de toda a população.' },
      { id: 'D', texto: 'O comandante perdoou ao erro grave cometido pelo subordinado.' },
      { id: 'E', texto: 'O cidadão prefere mais o policiamento ostensivo do que as câmeras privadas.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Márcio Ribeiro',
      cargo: 'Gramático',
      analiseGeral: 'O verbo "aspirar" no sentido de desejar, almejar, é Transitivo Indireto e exige a preposição "a" (aspirar a algo/ao cargo).',
      justificativaAlternativas: {
        A: 'CORRETA. Aspirar (almejar) + preposição "a" = aspira ao cargo.',
        B: 'Incorreta. Assistir no sentido de ver/presenciar é transitivo indireto (assistiu ao jogo).',
        C: 'Incorreta. Visar no sentido de ter como objetivo exige preposição "a" (visam ao bem-estar).',
        D: 'Incorreta. Perdoar coisa é transitivo direto (perdoou o erro); perdoar pessoa é indireto (perdoou ao policial).',
        E: 'Incorreta. O verbo preferir rejeita "mais" e "do que" (prefere X a Y).'
      },
      bizuPMBA: 'Bizu da Regência FCC: Aspirar (almejar) = exige "A"! Assistir (ver) = exige "A"! Visar (objetivar) = exige "A"! Preferir X a Y (sem "mais que")!',
      artigosCitados: ['Língua Portuguesa - Sintaxe de Regência']
    }
  },

  // =========================================================================
  // GEOGRAFIA DA BAHIA
  // =========================================================================
  {
    id: 'ped-geog-01',
    numero: 701,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Geografia da Bahia',
    assunto: 'Bacia Hidrográfica do Rio São Francisco na Bahia',
    dificuldade: 'Média',
    enunciado: 'O Rio São Francisco ("Velho Chico") desempenha papel socioeconômico e estratégico central no território baiano. Sobre a Bacia do São Francisco na Bahia, assinale a proposição correta:',
    alternativas: [
      { id: 'A', texto: 'O trecho do submédio São Francisco, em cidades como Juazeiro, destaca-se nacionalmente pela agricultura irrigada e exportação de frutas (fruticultura tropical).' },
      { id: 'B', texto: 'O rio São Francisco nasce na Chapada Diamantina e deságua na Baía de Todos os Santos.' },
      { id: 'C', texto: 'O regime fluvial do São Francisco é estritamente temporário e intermitente, secando totalmente nos meses de verão.' },
      { id: 'D', texto: 'A bacia do São Francisco não possui usinas hidrelétricas instaladas em território baiano.' },
      { id: 'E', texto: 'O rio atravessa unicamente a faixa litorânea de clima tropical úmido da Bahia.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Me. George Santana',
      cargo: 'Geógrafo e Professor de Geografia da Bahia',
      analiseGeral: 'O polo Juazeiro (BA) / Petrolina (PE) é a maior referência do país em fruticultura irrigada (manga, uva, melão), impulsionado pelas águas perenes do Rio São Francisco.',
      justificativaAlternativas: {
        A: 'CORRETA. Juazeiro é polo de fruticultura irrigada de ponta e exportação.',
        B: 'Incorreta. Nasce na Serra da Canastra (MG) e deságua no Oceano Atlântico entre AL e SE.',
        C: 'Incorreta. O Rio São Francisco é um rio PERENE (não seca durante o ano).',
        D: 'Incorreta. Usinas como Sobradinho e Paulo Afonso geram grande parte da energia do Nordeste.',
        E: 'Incorreta. Atravessa o semiárido e o sertão baiano.'
      },
      bizuPMBA: 'Bizu do Velho Chico: Rio PERENE / Atravessa o Sertão / Polo Irrigado em JUAZEIRO / Usina de SOBRADINHO e PAULO AFONSO!',
      artigosCitados: ['Geografia da Bahia - Hidrografia e Economia Regional']
    }
  },
  {
    id: 'ped-geog-02',
    numero: 702,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Geografia da Bahia',
    assunto: 'Regiões Econômicas da Bahia - Oeste Baiano e Agronegócio',
    dificuldade: 'Fácil',
    enunciado: 'A região do Oeste Baiano, que engloba municípios como Barreiras e Luís Eduardo Magalhães, destaca-se na economia estadual por ser:',
    alternativas: [
      { id: 'A', texto: 'A principal fronteira agrícola do agronegócio da Bahia (soja, algodão e milho), no bioma Cerrado.' },
      { id: 'B', texto: 'O maior polo petroquímico e automotivo do Nordeste brasileiro.' },
      { id: 'C', texto: 'A principal região produtora de cacau e extração mineral de ouro.' },
      { id: 'D', texto: 'A maior bacia pesqueira artesanal e turística da Costa do Dendê.' },
      { id: 'E', texto: 'A região de maior densidade demográfica urbana do estado da Bahia.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Me. George Santana',
      cargo: 'Geógrafo',
      analiseGeral: 'O Oeste da Bahia (no bioma Cerrado) integra a região do MATOPIBA e é o centro pulsante do agronegócio mecanizado de grãos (soja, milho e algodão).',
      justificativaAlternativas: {
        A: 'CORRETA. Barreiras e Luís Eduardo Magalhães lideram o agronegócio baiano no Cerrado.',
        B: 'Incorreta. Polo Petroquímico fica em Camaçari (Região Metropolitana de Salvador).',
        C: 'Incorreta. Cacau predomina no Sul da Bahia (Ilhéus, Itabuna).',
        D: 'Incorreta. Costa do Dendê é região litorânea (Valença, Morro de São Paulo).',
        E: 'Incorreta. Maior densidade demográfica está na RMS (Salvador e entorno).'
      },
      bizuPMBA: 'Bizu das Regiões Econômicas da Bahia: OESTE (Barreiras/LEM) = Agronegócio/Soja/Cerrado! CAMAÇARI = Polo Petroquímico/Indústria! ILHÉUS/ITABUNA = Cacau! JUAZEIRO = Fruticultura Irrigada!',
      artigosCitados: ['Geografia da Bahia - Espaço Agrário e Economia']
    }
  },
  {
    id: 'ped-estatuto-01',
    numero: 201,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Direito Administrativo',
    assunto: 'Estatuto dos Policiais Militares da BA (Lei nº 7.990/2001) - Hierarquia e Disciplina',
    dificuldade: 'Média',
    enunciado: 'Nos termos da Lei estadual nº 7.990/2001 (Estatuto dos Policiais Militares da Bahia), a hierarquia e a disciplina são a base institucional da Polícia Militar. Sobre os conceitos legais, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'A hierarquia policial militar é a ordenação da autoridade em níveis diferentes, sendo a disciplina o rigoroso cumprimento do dever.' },
      { id: 'B', texto: 'A disciplina militar restringe-se exclusivamente ao horário de expediente nos quartéis.' },
      { id: 'C', texto: 'O soldado PM possui prerrogativa de hierarquia superior a qualquer oficial subalterno.' },
      { id: 'D', texto: 'A subordinação ao superior hierárquico é facultativa em missões de folga.' },
      { id: 'E', texto: 'A hierarquia militar exclui o respeito mútuo, baseando-se unicamente na imposição de força.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Major PMBA Carlos Eduardo',
      cargo: 'Direito Administrativo Militar',
      analiseGeral: 'A Lei nº 7.990/2001 (Estatuto dos PMs da BA) define nitidamente que a hierarquia é a ordenação da autoridade em níveis diferentes e a disciplina é a observância consciente das leis e regulamentos.',
      justificativaAlternativas: {
        A: 'CORRETA. Definição legal exata do Estatuto da PMBA.',
        B: 'Incorreta. A disciplina e o pundonor policial-militar acompanham o militar em todo lugar.',
        C: 'Incorreta. Soldado é posto inicial da praça, abaixo de cabos, sargentos e oficiais.',
        D: 'Incorreta. O PM em folga continua sujeito às normas disciplinares e ao dever funcional.',
        E: 'Incorreta. O respeito mútuo é obrigatório em todos os graus hierárquicos.'
      },
      bizuPMBA: 'Bizu PMBA: Hierarquia = Escada de graus e postos! Disciplina = Cumprimento estrito do dever e leis!',
      artigosCitados: ['Lei Estadual nº 7.990/2001 (Estatuto dos PMs da BA), Arts. 11 a 15']
    }
  },
  {
    id: 'ped-penal-01',
    numero: 202,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Direito Penal',
    assunto: 'Crimes contra a Administração Pública - Peculato (Art. 312 do CP)',
    dificuldade: 'Difícil',
    enunciado: 'Um policial militar lotado no setor de patrimônio de um batalhão desvia em proveito próprio uma pistola calibre .40 pertencente à reserva de armamento da unidade, da qual tinha a posse em razão do cargo. O fato configura crime de:',
    alternativas: [
      { id: 'A', texto: 'Peculato-apropriação (Art. 312, caput, 1ª parte do Código Penal).' },
      { id: 'B', texto: 'Concussão (Art. 316 do Código Penal).' },
      { id: 'C', texto: 'Furto qualificado pelo abuso de confiança.' },
      { id: 'D', texto: 'Prevaricação (Art. 319 do Código Penal).' },
      { id: 'E', texto: 'Corrupção passiva (Art. 317 do Código Penal).' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. PMBA Fernando Rocha',
      cargo: 'Direito Penal',
      analiseGeral: 'O funcionário público (policial militar) que tem a posse do bem em razão do cargo e o subtrai ou desvia em proveito próprio comete o crime de peculato-apropriação (Art. 312 do CP).',
      justificativaAlternativas: {
        A: 'CORRETA. Subtrair ou desviar dinheiro, valor ou bem móvel público de que tem a posse em razão do cargo caracteriza peculato.',
        B: 'Incorreta. Concussão exige exigir vantagem indevida.',
        C: 'Incorreta. O militar detém a posse legítima em razão do cargo, afastando o furto comum.',
        D: 'Incorreta. Prevaricação é retardar ou deixar de praticar ato de ofício por sentimento pessoal.',
        E: 'Incorreta. Corrupção passiva exige solicitar ou receber vantagem para praticar ato funcional.'
      },
      bizuPMBA: 'Bizu PMBA: Tem a posse e desvia/apropria = Peculato! Se o terceiro subtrai com facilidade do funcionário = Peculato-culposo ou estelionato!',
      artigosCitados: ['Código Penal, Art. 312']
    }
  },
  {
    id: 'ped-port-01',
    numero: 203,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'Língua Portuguesa',
    assunto: 'Crase e Regência Verbal',
    dificuldade: 'Média',
    enunciado: 'Assinale a alternativa em que o emprego do acento indicativo de crase está em estrita conformidade com a norma-padrão da língua portuguesa:',
    alternativas: [
      { id: 'A', texto: 'A guarnição policial dirigiu-se à viatura descaracterizada para iniciar o patrulhamento noturno.' },
      { id: 'B', texto: 'O comandante entregou o memorando à todos os oficiais presentes no quartel.' },
      { id: 'C', texto: 'Os policiais militares compareceram à uma solenidade cívico-militar no 18º BPM.' },
      { id: 'D', texto: 'Frente à situação de perigo iminente, o soldado agiu com firmeza técnica.' },
      { id: 'E', texto: 'A patrulha chegou a Salvador no final da tarde, após o turno de serviço.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof.ª Maria Clara',
      cargo: 'Língua Portuguesa',
      analiseGeral: 'O verbo dirigir-se rege a preposição "a" e o substantivo feminino "viatura" aceita o artigo "a", ocorrendo a crase obrigatória (à viatura).',
      justificativaAlternativas: {
        A: 'CORRETA. Quem dirige-se, dirige-se a (preposição) + a viatura (artigo) = à viatura.',
        B: 'Incorreta. Não se usa crase antes de pronome indefinido (todos).',
        C: 'Incorreta. Não se usa crase antes de artigo indefinido (uma).',
        D: 'Incorreta. Locuções prepositivas formadas por palavra feminina exigem crase (frente a frente não tem crase antes de substantivo sem artigo, mas "frente à" pede análise contextuada. Aqui "Frente a" antes de artigo subentendido, porém o correto é sem crase ou crase opcional antes de pronomes demonstrativos femininos, contudo antes de substantivo comum sem determinante não há crase).',
        E: 'Incorreta. Antes de nomes de cidades que não admitem artigo feminino não há crase ("chegou a Salvador").'
      },
      bizuPMBA: 'Bizu de Português: Substitua a palavra feminina por masculina ("ao quartel"). Se virou "ao", tem crase ("à"). Se virou "a", crase para quê?',
      artigosCitados: ['Gramática Normativa - Emprego da Crase']
    }
  },
  {
    id: 'ped-hist-01',
    numero: 204,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2024,
    disciplina: 'História da Bahia',
    assunto: 'Revolta dos Alfaiates (Conjuntura Baiana de 1798)',
    dificuldade: 'Difícil',
    enunciado: 'Diferentemente da Inconfidência Mineira (1789), a Conjuntura Baiana ou Revolta dos Alfaiates (1798) caracterizou-se por forte participação popular, incluindo negros livres, escravizados, alfaiates e soldados, tendo entre seus ideais principais:',
    alternativas: [
      { id: 'A', texto: 'A proclamação de uma República democrática, o fim da escravidão e a abertura dos portos às nações amigas.' },
      { id: 'B', texto: 'A manutenção da monarquia absolutista e a preservação do monopólio comercial português.' },
      { id: 'C', texto: 'A aliança direta com a Coroa espanhola para expulsar os comerciantes ingleses de Salvador.' },
      { id: 'D', texto: 'O retorno imediato da família real portuguesa para a cidade de Salvador.' },
      { id: 'E', texto: 'A criação de um regime teocrático controlado pelas ordens religiosas da Bahia colonial.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Historian Carlos',
      cargo: 'História da Bahia',
      analiseGeral: 'A Revolta dos Alfaiates (1798) teve cunho popular e separatista, defendendo a República Baiana, o fim da escravidão, aumento de soldos para a tropa e igualdade racial.',
      justificativaAlternativas: {
        A: 'CORRETA. Ideais iluministas, república, fim da escravidão e igualdade.',
        B: 'Incorreta. O movimento era anti-metropolitano e republicano.',
        C: 'Incorreta. Não houve aliança com a Espanha.',
        D: 'Incorreta. A família real só veio em 1808.',
        E: 'Incorreta. O movimento era laico e inspirado na Revolução Francesa.'
      },
      bizuPMBA: 'Bizu PMBA História da Bahia: Inconfidência Mineira = Elite letrada (sem abolir escravidão). Revolta dos Alfaiates (Bahia) = Popular, soldados e escravizados (queriam fim da escravidão)!',
      artigosCitados: ['História da Bahia - Movimentos Separatistas']
    }
  }
];

// Helper to normalize discipline names
function normalizeDisciplina(d: string): string {
  const s = d.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (s.includes('constitucional')) return 'constitucional';
  if (s.includes('igualdade') || s.includes('racial') || s.includes('genero') || s.includes('raca')) return 'igualdade';
  if (s.includes('historia')) return 'historia';
  if (s.includes('administrativo')) return 'administrativo';
  if (s.includes('portugues') || s.includes('lingua')) return 'portugues';
  if (s.includes('humano')) return 'humanos';
  if (s.includes('geografia')) return 'geografia';
  if (s.includes('penal')) return 'penal';
  return s.trim();
}

// Track served questions in session to guarantee constant rotation
const USED_QUESTION_IDS = new Set<string>();

export function gerarQuestoesPedagogicas(
  disciplina: string,
  assunto: string,
  quantidade: number = 3,
  dificuldade: string = 'Média',
  banca: string = 'FCC / IBFC (Padrão PMBA)'
): Questao[] {
  const normTarget = normalizeDisciplina(disciplina);

  let candidatos = BANCO_PEDAGOGICO_COMPLETO_PMBA.filter((q) => {
    const normQ = normalizeDisciplina(q.disciplina);
    return normQ === normTarget;
  });

  if (candidatos.length === 0) {
    candidatos = BANCO_PEDAGOGICO_COMPLETO_PMBA;
  }

  // Filter or prioritize by subject if requested
  if (assunto && assunto !== 'Todos os Assuntos' && assunto !== 'Edital PMBA' && !assunto.includes('Geral')) {
    const normAssunto = assunto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const comAssunto = candidatos.filter((q) => {
      const qAssunto = q.assunto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return qAssunto.includes(normAssunto) || normAssunto.includes(qAssunto);
    });
    if (comAssunto.length > 0) {
      candidatos = comAssunto;
    }
  }

  // Shuffle candidates
  const pool = [...candidatos];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Sort unseen questions first
  pool.sort((a, b) => {
    const aUsed = USED_QUESTION_IDS.has(a.id) ? 1 : 0;
    const bUsed = USED_QUESTION_IDS.has(b.id) ? 1 : 0;
    return aUsed - bUsed;
  });

  const timestamp = Date.now();
  const qtd = Math.min(Math.max(quantidade, 1), 10);
  const resultado: Questao[] = [];

  for (let i = 0; i < qtd; i++) {
    const base = pool[i % pool.length];
    USED_QUESTION_IDS.add(base.id);

    const uniqueId = `q-ped-pmba-${timestamp}-${Math.random().toString(36).substring(2, 7)}-${i + 1}`;
    const bancaNome = banca.includes('IBFC') ? 'IBFC' : banca.includes('FCC') ? 'FCC' : 'CESPE / Cebraspe';

    resultado.push({
      ...base,
      id: uniqueId,
      numero: (timestamp % 8000) + 2000 + i,
      banca: bancaNome,
      dificuldade: (dificuldade as any) || base.dificuldade || 'Média',
      ano: 2024 + (i % 2),
      alternativas: base.alternativas.map((alt) => ({ ...alt })),
    });
  }

  return resultado;
}
