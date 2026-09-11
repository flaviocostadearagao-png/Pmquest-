import { Questao } from '../types';

export const QUESTOES_EXPANDIDAS_PMBA: Questao[] = [
  // =========================================================================
  // 1. DIREITO CONSTITUCIONAL
  // =========================================================================
  {
    id: 'q-const-1',
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
      { id: 'A', texto: 'Durante o dia ou durante a noite, por determinação judicial prévia, independentemente de haver consentimento do morador.' },
      { id: 'B', texto: 'Em caso de flagrante delito ou desastre, ou para prestar socorro, tanto durante o dia quanto durante o período noturno.' },
      { id: 'C', texto: 'Apenas durante o período diurno nos casos de flagrante delito e mediante autorização verbal do Delegado de Polícia.' },
      { id: 'D', texto: 'A qualquer hora do dia ou da noite para averiguação de mera atitude suspeita nas proximidades da residência.' },
      { id: 'E', texto: 'Durante a noite, por determinação judicial, desde que a guarnição esteja acompanhada por membro do Ministério Público.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Capitão Dr. Marcos Valente',
      cargo: 'Especialista em Direito Constitucional e Segurança Pública',
      analiseGeral: 'Artigo 5º, inciso XI, da CF/88: "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial".',
      justificativaAlternativas: {
        A: 'Incorreta. A determinação judicial só autoriza o ingresso DURANTE O DIA. À noite não pode haver ingresso por ordem judicial sem consentimento.',
        B: 'CORRETA. Flagrante delito, desastre e prestação de socorro autorizam o ingresso a QUALQUER HORA (dia ou noite).',
        C: 'Incorreta. O flagrante delito autoriza tanto de dia quanto de noite, e independe de autorização de Delegado.',
        D: 'Incorreta. O STF já fixou a tese de que mera suspeita sem justa causa prévia documentada torna a invasão domiciliar ilícita (Tema 280 STF).',
        E: 'Incorreta. Ordem judicial NUNCA autoriza entrada noturna sem consentimento do morador.'
      },
      bizuPMBA: 'Bizu do Soldado: Lembre-se do mnemônico "F-S-D" (Flagrante, Socorro, Desastre) -> A QUALQUER HORA. Já "Ordem Judicial" -> SOMENTE DE DIA!',
      artigosCitados: ['Art. 5º, XI da Constituição Federal de 1988', 'Tema 280 da Repercussão Geral do STF']
    }
  },
  {
    id: 'q-const-2',
    numero: 2,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Direito Constitucional',
    assunto: 'Da Segurança Pública (Art. 144 da CF/88) e Competências da PM',
    dificuldade: 'Fácil',
    enunciado: 'O artigo 144 da Constituição Federal de 1988 estabelece os órgãos responsáveis pela segurança pública. No que tange especificamente às atribuições e subordinação da Polícia Militar dos Estados, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Cabe à Polícia Militar a apuração de infrações penais comuns (polícia judiciária), subordinando-se diretamente ao Ministério Público Estadual.' },
      { id: 'B', texto: 'Às Polícias Militares cabem a polícia ostensiva e a preservação da ordem pública, subordinando-se, juntamente com os Corpos de Bombeiros Militares, aos Governadores dos Estados.' },
      { id: 'C', texto: 'As Polícias Militares são forças auxiliares e reserva da Marinha de Guerra do Brasil, com atuação restrita à faixa costeira.' },
      { id: 'D', texto: 'A Polícia Militar pode exercer funções de guarda municipal mediante convênio tácito com as Câmaras de Vereadores municipais.' },
      { id: 'E', texto: 'A preservação da ordem pública é encargo exclusivo e privativo da Polícia Federal em todo o território nacional.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Maj. PMBA Carlos Eduardo',
      cargo: 'Instrutor de Direito Constitucional da APM/BA',
      analiseGeral: 'O art. 144, § 5º da CF/88 determina: "às polícias militares cabem a polícia ostensiva e a preservação da ordem pública". O § 6º prevê que as PMs e CBMs subordinam-se aos Governadores dos Estados e são forças auxiliares e reserva do Exército.',
      justificativaAlternativas: {
        A: 'Incorreta. Polícia judiciária comum cabe à Polícia Civil e à Polícia Federal, não à PM.',
        B: 'CORRETA. Texto expresso do Art. 144, § 5º e § 6º da CF/88.',
        C: 'Incorreta. São forças auxiliares e reserva do EXÉRCITO Brasileiro, não da Marinha.',
        D: 'Incorreta. Guardas municipais destinam-se à proteção de bens, serviços e instalações dos municípios (§ 8º).',
        E: 'Incorreta. A preservação da ordem pública cabe primordialmente à Polícia Militar.'
      },
      bizuPMBA: 'Bizu PMBA: Polícia Ostensiva + Preservação da Ordem Pública = Polícia Militar. Força auxiliar e reserva de quem? EXÉRCITO! Subordinação: GOVERNADOR!',
      artigosCitados: ['Art. 144, § 5º e § 6º da Constituição Federal de 1988']
    }
  },
  {
    id: 'q-const-3',
    numero: 3,
    banca: 'CESPE / Cebraspe',
    orgao: 'Carreiras Policiais Militares',
    cargo: 'Soldado Policial Militar',
    ano: 2022,
    disciplina: 'Direito Constitucional',
    assunto: 'Remédios Constitucionais - Habeas Corpus e Mandado de Segurança',
    dificuldade: 'Média',
    enunciado: 'Em relação às ações constitucionais de garantia dos direitos fundamentais consagradas no art. 5º da CF/88, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'O habeas corpus é a ação cabível para proteger direito líquido e certo não amparado por mandado de segurança, mediante recolhimento de custas processuais.' },
      { id: 'B', texto: 'Conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais.' },
      { id: 'C', texto: 'Qualquer cidadão é parte legítima para propor habeas data que vise à anulação de ato lesivo ao patrimônio público e à moralidade administrativa.' },
      { id: 'D', texto: 'O habeas corpus exige capacidade postulatória formal, sendo vedada sua impetração por pessoa desprovida de inscrição na OAB.' },
      { id: 'E', texto: 'São gratuitas as ações de mandado de segurança coletivo e de mandado de injunção popular.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. André Lins',
      cargo: 'Advogado e Professor de Direito Constitucional',
      analiseGeral: 'O Art. 5º, LXXI da CF prevê: "conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania".',
      justificativaAlternativas: {
        A: 'Incorreta. Habeas corpus protege a liberdade de locomoção e é totalmente GRATUITO.',
        B: 'CORRETA. Transcrição literal do art. 5º, inciso LXXI da CF/88.',
        C: 'Incorreta. O remédio contra ato lesivo ao patrimônio público é a AÇÃO POPULAR (Art. 5º, LXXIII), não o habeas data.',
        D: 'Incorreta. O habeas corpus pode ser impetrado por QUALQUER pessoa, dispensando advogado.',
        E: 'Incorreta. Ações gratuitas no art. 5º são: Habeas Corpus (LXXVII) e Habeas Data (LXXVII).'
      },
      bizuPMBA: 'Bizu dos Remédios: Gratuitos na CF: "H" de Habeas Corpus e "H" de Habeas Data! Ação Popular também é gratuita, salvo má-fé!',
      artigosCitados: ['Art. 5º, LXXI, LXXII e LXXVII da CF/88']
    }
  },
  {
    id: 'q-const-4',
    numero: 4,
    banca: 'VUNESP',
    orgao: 'Polícia Militar',
    cargo: 'Soldado PM',
    ano: 2023,
    disciplina: 'Direito Constitucional',
    assunto: 'Direito de Reunião e Liberdade de Manifestação (Art. 5º, XVI)',
    dificuldade: 'Média',
    enunciado: 'Sobre o direito constitucional de reunião pacífica em locais abertos ao público (art. 5º, XVI da CF/88) e o recente entendimento do Supremo Tribunal Federal (STF - Tema 855), assinale a afirmativa correta:',
    alternativas: [
      { id: 'A', texto: 'A reunião depende de autorização prévia discricionária do Comando de Policiamento da área territorial onde se dará o evento.' },
      { id: 'B', texto: 'Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo exigido prévio aviso à autoridade competente.' },
      { id: 'C', texto: 'É lícita a manifestação pública com o uso de armas brancas ou de fogo, desde que o objetivo seja puramente reivindicatório.' },
      { id: 'D', texto: 'A falta de prévio aviso expresso à autoridade policial torna a reunião automaticamente ilícita e autoriza a imediata dispersão pela força.' },
      { id: 'E', texto: 'O direito de reunião só pode ser exercido nos dias úteis e durante o horário comercial bancário.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Capitão Dr. Marcos Valente',
      cargo: 'Especialista em Direito Constitucional',
      analiseGeral: 'O art. 5º, XVI consagra a liberdade de reunião: "todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade competente". O STF no Tema 855 definiu que o aviso prévio pode se dar por qualquer meio que cientifique o poder público.',
      justificativaAlternativas: {
        A: 'Incorreta. NÃO depende de autorização governamental ou militar.',
        B: 'CORRETA. Expressão fiel do artigo 5º, XVI da CF/88.',
        C: 'Incorreta. A reunião deve ser obrigatoriamente SEM ARMAS.',
        D: 'Incorreta. O STF fixou que a falta de notificação formal não torna a reunião ilegal se o poder público tiver ciência fática.',
        E: 'Incorreta. Não há restrição de dias úteis ou horário.'
      },
      bizuPMBA: 'Bizu PMBA: Reunião = SEM ARMAS + INDEPENDE DE AUTORIZAÇÃO + PRÉVIO AVISO (não frustrar outra). Não caia no conto da "autorização"!',
      artigosCitados: ['Art. 5º, XVI da CF/88', 'STF RE 806.339 (Tema 855)']
    }
  },
  {
    id: 'q-const-5',
    numero: 5,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Direito Constitucional',
    assunto: 'Direitos Políticos e Elegibilidade do Militar (Art. 14, § 8º da CF/88)',
    dificuldade: 'Difícil',
    enunciado: 'Nos termos da Constituição Federal de 1988, o militar alistável é elegível, atendidas determinadas condições constitucionais específicas. A respeito da elegibilidade do militar da ativa, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Se contar menos de 10 (dez) anos de serviço, deverá afastar-se da atividade militar.' },
      { id: 'B', texto: 'Se contar mais de 10 (dez) anos de serviço, será compulsoriamente demitido sem direito a qualquer remuneração proporcional.' },
      { id: 'C', texto: 'O militar, enquanto em serviço ativo, pode filiar-se livremente a partidos políticos e concorrer sem restrições.' },
      { id: 'D', texto: 'Se eleito, qualquer militar, independentemente do tempo de serviço, continuará exercendo concomitantemente o policiamento ostensivo.' },
      { id: 'E', texto: 'Militares da ativa são absolutamente inelegíveis, mesmo após atingirem o posto de oficial superior.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Maj. PMBA Carlos Eduardo',
      cargo: 'Instrutor de Direito Constitucional',
      analiseGeral: 'Art. 14, § 8º da CF/88: O militar alistável é elegível: I - se contar menos de 10 anos de serviço, deverá afastar-se da atividade; II - se contar mais de 10 anos de serviço, será agregado pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade.',
      justificativaAlternativas: {
        A: 'CORRETA. Se tiver menos de 10 anos, deve afastar-se definitivamente da atividade (desliga-se).',
        B: 'Incorreta. Com mais de 10 anos, fica AGREGADO e, se eleito, vai para a INATIVIDADE remunerada proporcional.',
        C: 'Incorreta. O militar em serviço ativo NÃO pode estar filiado a partidos políticos (Art. 142, § 3º, V c/c Art. 42, § 1º).',
        D: 'Incorreta. É vedada a cumulação da atividade operacional com mandato eletivo.',
        E: 'Incorreta. São elegíveis desde que atendam às regras do § 8º.'
      },
      bizuPMBA: 'Bizu da Elegibilidade Militar: Menos de 10 anos = AFASTA-SE (sai). Mais de 10 anos = AGREGADO e se diplomado -> INATIVIDADE!',
      artigosCitados: ['Art. 14, § 8º da CF/88', 'Art. 142, § 3º, V da CF/88']
    }
  },
  {
    id: 'q-const-6',
    numero: 6,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar',
    ano: 2023,
    disciplina: 'Direito Constitucional',
    assunto: 'Prisão Legal e Direitos do Preso (Art. 5º, LXI a LXVI)',
    dificuldade: 'Média',
    enunciado: 'Em relação à disciplina constitucional da prisão e das garantias processuais penais constantes no art. 5º da CF/88, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente apenas ao juiz competente e ao defensor público no prazo improrrogável de 48 horas.' },
      { id: 'B', texto: 'Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei.' },
      { id: 'C', texto: 'O preso tem direito à identificação dos responsáveis por sua prisão, mas não tem direito à identificação dos responsáveis pelo seu interrogatório policial.' },
      { id: 'D', texto: 'A prisão ilegal não será relaxada pelo Poder Judiciário quando o crime for hediondo ou equiparado.' },
      { id: 'E', texto: 'O preso será informado de seus direitos, entre os quais o de responder obrigatoriamente a todas as perguntas formuladas pela autoridade condutora.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. André Lins',
      cargo: 'Advogado e Professor de Direito Constitucional',
      analiseGeral: 'Artigo 5º, LXI da CF/88: "ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei".',
      justificativaAlternativas: {
        A: 'Incorreta. A comunicação deve ser IMEDIATA ao juiz competente E à família do preso ou à pessoa por ele indicada (inciso LXII).',
        B: 'CORRETA. Transcrição literal do inciso LXI.',
        C: 'Incorreta. O preso tem direito à identificação dos responsáveis por sua prisão E por seu interrogatório policial (inciso LXIV).',
        D: 'Incorreta. A prisão ilegal SERÁ IMEDIATAMENTE RELAXADA pela autoridade judiciária (inciso LXV), sem exceção de crime.',
        E: 'Incorreta. O preso tem direito de permanecer CALADO (nemo tenetur se detegere - inciso LXIII).'
      },
      bizuPMBA: 'Bizu PMBA: Regra geral de prisão: Flagrante ou Ordem Judicial Escrita. Exceção expressa na CF: Transgressão Militar ou Crime Propriamente Militar!',
      artigosCitados: ['Art. 5º, LXI, LXII, LXIII, LXIV, LXV da CF/88']
    }
  },

  // =========================================================================
  // 2. PROMOÇÃO DA IGUALDADE RACIAL E DE GÊNERO
  // =========================================================================
  {
    id: 'q-igual-1',
    numero: 7,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Estatuto da Igualdade Racial (Lei Federal nº 12.288/2010)',
    dificuldade: 'Fácil',
    enunciado: 'A Lei Federal nº 12.288/2010 (Estatuto da Igualdade Racial) é de observância obrigatória no edital da Polícia Militar da Bahia. De acordo com o art. 1º dessa lei, considera-se "discriminação racial ou étnico-racial":',
    alternativas: [
      { id: 'A', texto: 'Toda distinção, exclusão, restrição ou preferência baseada em raça, cor, descendência ou origem nacional ou étnica que tenha por objeto anular ou restringir o reconhecimento ou exercício de direitos fundamentais.' },
      { id: 'B', texto: 'Exclusivamente as agressões físicas comprovadas contra indivíduos pertencentes a povos e comunidades tradicionais em áreas urbanas.' },
      { id: 'C', texto: 'Apenas os atos praticados por agentes do Estado no exercício da função repressiva.' },
      { id: 'D', texto: 'Qualquer programa governamental de cotas que reserve vagas em universidades públicas para estudantes autodeclarados negros.' },
      { id: 'E', texto: 'Toda crítica doutrinária dirigida aos costumes e manifestações folclóricas afro-brasileiras.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Profa. Dra. Dandara Santos',
      cargo: 'Especialista em Direitos Humanos e Relações Étnico-Raciais',
      analiseGeral: 'O Art. 1º, parágrafo único, inciso I da Lei 12.288/2010 define discriminação racial como toda distinção, exclusão, restrição ou preferência baseada em raça, cor, descendência ou origem nacional ou étnica que anule ou restrinja o gozo ou exercício de direitos fundamentais.',
      justificativaAlternativas: {
        A: 'CORRETA. Definição ipsis litteris do artigo 1º, parágrafo único, I da Lei 12.288/2010.',
        B: 'Incorreta. Discriminação não se resume a agressão física.',
        C: 'Incorreta. Abrange tanto esferas públicas quanto privadas.',
        D: 'Incorreta. Programas de ação afirmativa NÃO constituem discriminação (Art. 4º, parágrafo único).',
        E: 'Incorreta. Conceito desprovido de amparo legal no Estatuto.'
      },
      bizuPMBA: 'Bizu da Igualdade: Ações Afirmativas (cotas) NÃO são discriminação racial; são instrumentos de igualdade material!',
      artigosCitados: ['Lei Federal nº 12.288/2010, Art. 1º, parágrafo único']
    }
  },
  {
    id: 'q-igual-2',
    numero: 8,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar',
    ano: 2019,
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Lei Maria da Penha (Lei nº 11.340/2006) - Formas de Violência',
    dificuldade: 'Média',
    enunciado: 'Em uma ocorrência atendida por guarnição da Polícia Militar da Bahia, constatou-se que um indivíduo, inconformado com a separação, destruiu os instrumentos de trabalho, o celular e rasgou os documentos de sua ex-companheira. À luz da Lei nº 11.340/2006 (Lei Maria da Penha), essa conduta configura tipicamente violência doméstica na forma:',
    alternativas: [
      { id: 'A', texto: 'Moral.' },
      { id: 'B', texto: 'Psicológica.' },
      { id: 'C', texto: 'Patrimonial.' },
      { id: 'D', texto: 'Sexual.' },
      { id: 'E', texto: 'Institucional.' }
    ],
    respostaCorreta: 'C',
    comentario: {
      professor: 'Profa. Dra. Dandara Santos',
      cargo: 'Especialista em Legislação Protetiva de Gênero',
      analiseGeral: 'O art. 7º, IV da Lei 11.340/2006 estabelece que a violência patrimonial é entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos.',
      justificativaAlternativas: {
        A: 'Incorreta. Violência moral compreende calúnia, difamação ou injúria (inciso V).',
        B: 'Incorreta. Violência psicológica compreende ameaça, humilhação, isolamento, controle (inciso II).',
        C: 'CORRETA. Destruição de objetos, instrumentos de trabalho e documentos é violência PATRIMONIAL (inciso IV).',
        D: 'Incorreta. Violência sexual decorre de relação sexual não desejada, coerção etc. (inciso III).',
        E: 'Incorreta. Violência institucional não consta expressamente no rol do Art. 7º.'
      },
      bizuPMBA: 'Bizu das Formas de Violência (Art. 7º LMP): FÍSICA (corpo) | PSICOLÓGICA (mente/humilhação) | SEXUAL (sexualidade) | PATRIMONIAL (bens/documentos/trabalho) | MORAL (calúnia/difamação/injúria).',
      artigosCitados: ['Lei Federal nº 11.340/2006, Artigo 7º, IV']
    }
  },
  {
    id: 'q-igual-3',
    numero: 9,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Crimes de Racismo e Injúria Racial (Lei nº 7.716/89 c/c Lei nº 14.532/23)',
    dificuldade: 'Média',
    enunciado: 'Com a promulgação da Lei nº 14.532/2023, a injúria racial foi equiparada ao crime de racismo na Lei nº 7.716/1989. Diante dessa expressiva inovação legislativa, assinale a alternativa correta sobre o tratamento constitucional e penal conferido à injúria racial e aos crimes resultantes de preconceito de raça ou de cor:',
    alternativas: [
      { id: 'A', texto: 'A injúria racial é crime afiançável e prescreve no prazo improrrogável de 5 (cinco) anos contados da data do fato.' },
      { id: 'B', texto: 'A prática do racismo e a injúria racial constituem crimes inafiançáveis e imprescritíveis, sujeitos à pena de reclusão.' },
      { id: 'C', texto: 'Apenas os crimes praticados pela internet são considerados imprescritíveis pela legislação penal brasileira.' },
      { id: 'D', texto: 'A injúria racial depende de representação da vítima e permite acordo de não persecução penal (ANPP) sem restrições.' },
      { id: 'E', texto: 'O policial militar que presenciar ato de discriminação racial em via pública não pode realizar prisão em flagrante por se tratar de crime de menor potencial ofensivo.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Profa. Dra. Dandara Santos',
      cargo: 'Especialista em Legislação Penal Especial e Direitos Humanos',
      analiseGeral: 'A Constituição Federal de 1988 (Art. 5º, XLII) determina que "a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei". Com a Lei nº 14.532/2023, a injúria motivada por raça, cor, etnia ou procedência nacional passou para o art. 2º-A da Lei 7.716/89, tornando-se formalmente racismo (inafiançável e imprescritível).',
      justificativaAlternativas: {
        A: 'Incorreta. É inafiançável e IMPRESCRITÍVEL.',
        B: 'CORRETA. Equiparação plena: inafiançável, imprescritível e punido com reclusão.',
        C: 'Incorreta. O racismo é imprescritível independentemente do meio empregado.',
        D: 'Incorreta. A ação penal é pública incondicionada.',
        E: 'Incorreta. Trata-se de crime grave punido com reclusão, com dever funcional de prisão em flagrante.'
      },
      bizuPMBA: 'Bizu PMBA: Racismo e Injúria Racial = INAFIANÇÁVEL + IMPRESCRITÍVEL + RECLUSÃO! O STF e a Lei 14.532/23 pacificaram essa igualdade.',
      artigosCitados: ['Art. 5º, XLII da CF/88', 'Lei nº 7.716/1989, Art. 2º-A', 'Lei nº 14.532/2023']
    }
  },
  {
    id: 'q-igual-4',
    numero: 10,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2020,
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Estatuto da Igualdade Racial do Estado da Bahia (Lei Estadual nº 13.182/2014)',
    dificuldade: 'Difícil',
    enunciado: 'A Lei Estadual nº 13.182/2014 institui o Estatuto da Igualdade Racial e de Combate ao Racismo Religioso do Estado da Bahia. Em relação aos objetivos e garantias previstas na referida lei estadual, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'O Estado da Bahia assegura a proteção e a salvaguarda dos terreiros e locais de culto das religiões de matriz africana, reconhecendo-os como patrimônio cultural e religioso.' },
      { id: 'B', texto: 'A lei estadual proíbe a realização de celebrações públicas de religiões afro-brasileiras em praças ou vias públicas por razões de ordem do trânsito.' },
      { id: 'C', texto: 'A fiscalização dos crimes de intolerância religiosa no Estado da Bahia é atribuição exclusiva dos agentes municipais de postura.' },
      { id: 'D', texto: 'O Estatuto Estadual não contempla diretrizes para a atuação preventiva das forças policiais da Bahia.' },
      { id: 'E', texto: 'Assegura-se isenção fiscal ilimitada para templos de qualquer culto sem necessidade de previsão em lei complementar.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Profa. Dra. Dandara Santos',
      cargo: 'Especialista em Legislação Baiana',
      analiseGeral: 'A Lei Estadual nº 13.182/2014 confere especial proteção aos terreiros de candomblé e religiões de matriz africana na Bahia, garantindo o livre exercício dos cultos, a proteção dos seus espaços sagrados e o combate incisivo ao racismo religioso.',
      justificativaAlternativas: {
        A: 'CORRETA. Previsão expressa dos arts. 1º e 20 da Lei Estadual nº 13.182/2014.',
        B: 'Incorreta. É plenamente assegurada a liberdade de culto em espaços públicos.',
        C: 'Incorreta. A Polícia Militar e a Polícia Civil atuam ativamente na repressão ao racismo religioso.',
        D: 'Incorreta. A lei estabelece diretrizes diretas para a capacitação das corporações policiais.',
        E: 'Incorreta. Matéria tributária segue a disciplina constitucional.'
      },
      bizuPMBA: 'Bizu do Estatuto Baiano: A Bahia foi pioneira em incluir expressamente o combate ao "RACISMO RELIGIOSO" e a salvaguarda dos TERREIROS no seu Estatuto!',
      artigosCitados: ['Lei Estadual da Bahia nº 13.182/2014']
    }
  },

  // =========================================================================
  // 3. HISTÓRIA DA BAHIA
  // =========================================================================
  {
    id: 'q-hist-1',
    numero: 11,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'História da Bahia',
    assunto: 'A Independência da Bahia (2 de Julho de 1823)',
    dificuldade: 'Média',
    enunciado: 'A data magna da Bahia, celebrada em 2 de Julho, comemora a efetiva expulsão das tropas portuguesas de Salvador em 1823. Sobre a Guerra de Independência na Bahia, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Foi um movimento restrito à elite proprietária de terras de Salvador, sem qualquer engajamento de populares, escravizados ou mulheres.' },
      { id: 'B', texto: 'Contou com destacada participação popular, incluindo figuras históricas como Maria Quitéria, Joana Angélica e Maria Felipa, culminando na vitória do Exército Libertador.' },
      { id: 'C', texto: 'Ocupou apenas a região do Recôncavo, uma vez que as tropas do Brigadeiro Madeira de Melo se renderam pacificamente sem resistência armada em Salvador.' },
      { id: 'D', texto: 'Ocorreu antes do Grito do Ipiranga e resultou na separação provisória da Bahia em relação ao restante do Império do Brasil.' },
      { id: 'E', texto: 'O comandante português Inácio Luís Madeira de Melo contava com o apoio unânime dos batalhões baianos contra D. Pedro I.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Me. Rodrigo Bahia',
      cargo: 'Historiador e Pesquisador de História Militar da Bahia',
      analiseGeral: 'A Independência da Bahia (2 de Julho de 1823) foi um conflito armado prolongado marcado pela mobilização popular no Recôncavo (Cachoeira, Santo Amaro, Itaparica) e pela bravura de mulheres como a Soldado Maria Quitéria (heroína da Pátria e patrona do Exército), a abadessa mártir Joana Angélica e a marisqueira Maria Felipa em Itaparica.',
      justificativaAlternativas: {
        A: 'Incorreta. Teve amplíssima participação de negros libertos, escravizados, indígenas, sertanejos e mulheres.',
        B: 'CORRETA. Síntese perfeita do papel das heroínas baianas e do Exército Libertador.',
        C: 'Incorreta. Houve sangrentos combates terrestres e marítimos (Batalha de Pirajá, Cabrito, cerco de Salvador).',
        D: 'Incorreta. A vitória final ocorreu em 2 de julho de 1823, quase um ano APÓS o 7 de setembro de 1822.',
        E: 'Incorreta. Os baianos pegaram em armas CONTRA Madeira de Melo.'
      },
      bizuPMBA: 'Bizu do 2 de Julho: Heroínas da Independência: Maria Quitéria (Soldado Medeiros), Joana Angélica (mártir do Convento da Lapa) e Maria Felipa (marisqueira de Itaparica). Batalha decisiva: PIRAJÁ (Corneteiro Lopes)!',
      artigosCitados: ['História da Bahia - Período Regencial e Imperial']
    }
  },
  {
    id: 'q-hist-2',
    numero: 12,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'História da Bahia',
    assunto: 'Revolta dos Alfaiates ou Conjuração Baiana (1798)',
    dificuldade: 'Média',
    enunciado: 'A Revolta dos Alfaiates (ou Conjuração Baiana de 1798) é um dos marcos mais importantes das lutas sociais na Bahia colonial. Diferenciando-se da Inconfidência Mineira (1789), o movimento baiano caracterizou-se principalmente por:',
    alternativas: [
      { id: 'A', texto: 'Pleitear a manutenção da escravidão e a subordinação eclesiástica da Bahia ao Vaticano.' },
      { id: 'B', texto: 'Possuir caráter eminentemente popular, defendendo a proclamação da República, a separação de Portugal e a ABOLIÇÃO imediata da escravidão.' },
      { id: 'C', texto: 'Ser liderada exclusivamente pela nobreza portuguesa residente no Palácio Rio Branco em Salvador.' },
      { id: 'D', texto: 'Objetivar apenas a transferência da capital do Brasil de Salvador para o Rio de Janeiro.' },
      { id: 'E', texto: 'Ter sido perdoada integralmente pela Coroa Portuguesa sem a condenação de nenhum de seus líderes.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Me. Rodrigo Bahia',
      cargo: 'Historiador e Pesquisador',
      analiseGeral: 'A Conjuração Baiana de 1798 (Búzios / Alfaiates) teve forte corte popular e racial, liderada por alfaiates, soldados e negros livres (Lucas Dantas, Manuel Faustino, Luís Gonzaga das Virgens e João de Deus). Seus grandes pilares eram: República, Fim do domínio colonial, Abertura dos portos e Abolição da Escravidão.',
      justificativaAlternativas: {
        A: 'Incorreta. Defendia a ABOLIÇÃO da escravidão e igualdade racial.',
        B: 'CORRETA. O diferencial decisivo em relação a Minas Gerais foi a pauta popular e o fim da escravidão.',
        C: 'Incorreta. Foi liderada por homens do povo, alfaiates e soldados.',
        D: 'Incorreta. A transferência da capital já havia ocorrido em 1763.',
        E: 'Incorreta. Os líderes populares foram enforcados e esquartejados na Praça da Piedade.'
      },
      bizuPMBA: 'Bizu PMBA: Inconfidência Mineira = Elite (sem abolição). Conjuração Baiana/Alfaiates = POPULAR + ABOLICIONISTA + REPÚBLICA!',
      artigosCitados: ['História da Bahia - Movimentos Emancipacionistas']
    }
  },
  {
    id: 'q-hist-3',
    numero: 13,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2017,
    disciplina: 'História da Bahia',
    assunto: 'A Guerra de Canudos (1896-1897) e Antônio Conselheiro',
    dificuldade: 'Média',
    enunciado: 'No sertão da Bahia, no final do século XIX, formou-se o arraial de Belo Monte (Canudos), liderado pelo beato Antônio Conselheiro. Sobre esse relevante episódio da História da Bahia e da República Velha, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Canudos foi rapidamente desmobilizado sem necessidade de intervenção do Exército ou da Polícia Militar da Bahia.' },
      { id: 'B', texto: 'Reuniu milhares de sertanejos, ex-escravizados e camponeses despossuídos em uma comunidade autônoma, sendo visto pela jovem República como ameaça monarquista, resultando em violenta repressão militar.' },
      { id: 'C', texto: 'Antônio Conselheiro apoiava ativamente os coronéis locais e o pagamento regular de impostos republicanos.' },
      { id: 'D', texto: 'O conflito ocorreu na zona litorânea do Recôncavo e terminou com a vitória pacífica dos revoltosos.' },
      { id: 'E', texto: 'A Guerra de Canudos foi narrada em detalhes na famosa obra "O Cortiço", de Aluísio Azevedo.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Me. Rodrigo Bahia',
      cargo: 'Historiador',
      analiseGeral: 'Canudos (1896-1897) localizava-se no sertão baiano (às margens do rio Vaza-Barris). Foi destruído após quatro expedições militares federais e estaduais, episódio imortalizado por Euclides da Cunha na obra clássica "Os Sertões".',
      justificativaAlternativas: {
        A: 'Incorreta. Exigiu quatro expedições militares e causou milhares de mortes.',
        B: 'CORRETA. Retrato histórico exato das causas e do desfecho trágico de Canudos.',
        C: 'Incorreta. Conselheiro se opunha à secularização da República e à cobrança abusiva de impostos.',
        D: 'Incorreta. Ocorreu no sertão semiárido baiano.',
        E: 'Incorreta. Foi retratada na obra "Os Sertões", de Euclides da Cunha.'
      },
      bizuPMBA: 'Bizu de Canudos: Sertão baiano + Rio Vaza-Barris + Antônio Conselheiro + 4 Expedições + Obra "Os Sertões" de Euclides da Cunha!',
      artigosCitados: ['História da Bahia - Primeira República']
    }
  },
  {
    id: 'q-hist-4',
    numero: 14,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar',
    ano: 2023,
    disciplina: 'História da Bahia',
    assunto: 'Revolta dos Malês (1835) e Sabinada (1837)',
    dificuldade: 'Difícil',
    enunciado: 'Durante o Período Regencial, Salvador foi palco de importantes rebeliões urbanas. Em janeiro de 1835, ocorreu a célebre Revolta dos Malês. Sobre esse levante, é correto afirmar:',
    alternativas: [
      { id: 'A', texto: 'Foi planejado e executado por escravizados e libertos de religião muçulmana (nagôs e haussás), que sabiam ler e escrever em árabe e lutavam contra a escravidão e a imposição do catolicismo.' },
      { id: 'B', texto: 'Constituiu uma revolta liderada por médicos e militares baianos que desejavam proclamar a República Bahiense até a maioridade de D. Pedro II.' },
      { id: 'C', texto: 'O levante teve êxito absoluto e manteve a cidade de Salvador sob domínio islâmico durante todo o século XIX.' },
      { id: 'D', texto: 'Foi uma insurreição pacífica sem confrontos com as forças policiais e a Guarda Nacional.' },
      { id: 'E', texto: 'Tratava-se de um motim organizado por colonizadores portugueses insatisfeitos com a expulsão de 1823.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Me. Rodrigo Bahia',
      cargo: 'Historiador',
      analiseGeral: 'A Revolta dos Malês (1835) foi o maior levante urbano de escravizados das Américas. O termo "Malê" deriva do iorubá imalê (muçulmano). O levante da noite de 24 para 25 de janeiro de 1835 foi reprimido pela polícia e pela Guarda Nacional.',
      justificativaAlternativas: {
        A: 'CORRETA. Descrição histórica exata do levante malê em Salvador.',
        B: 'Incorreta. A revolta liderada pelo médico Francisco Sabino foi a SABINADA (1837), não os Malês.',
        C: 'Incorreta. O movimento foi duramente reprimido na Batalha de Água de Meninos.',
        D: 'Incorreta. Houve intenso combate armado nas ruas de Salvador.',
        E: 'Incorreta. Foi um levante protagonizado pela comunidade negra muçulmana escravizada e liberta.'
      },
      bizuPMBA: 'Bizu Regencial Baiano: Malês (1835) = Negros Muçulmanos/Árabe/Liberdade. Sabinada (1837) = Francisco Sabino/República Provisória até maioridade de D. Pedro II.',
      artigosCitados: ['História da Bahia - Período Regencial']
    }
  },

  // =========================================================================
  // 4. DIREITOS HUMANOS
  // =========================================================================
  {
    id: 'q-dh-1',
    numero: 15,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar',
    ano: 2020,
    disciplina: 'Direitos Humanos',
    assunto: 'Declaração Universal dos Direitos Humanos (DUDH/1948)',
    dificuldade: 'Fácil',
    enunciado: 'A Declaração Universal dos Direitos Humanos (DUDH), adotada pela Assembleia Geral da ONU em 1948, estabelece em seu Artigo 1º que:',
    alternativas: [
      { id: 'A', texto: 'Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade.' },
      { id: 'B', texto: 'Os direitos civis e políticos prevalecem hierarquicamente sobre os direitos econômicos, sociais e culturais.' },
      { id: 'C', texto: 'A pena de morte pode ser aplicada livremente pelos Estados-membros em qualquer hipótese de transgressão disciplinar.' },
      { id: 'D', texto: 'Apenas os cidadãos formalmente alfabetizados gozam da proteção internacional dos direitos humanos.' },
      { id: 'E', texto: 'A escravidão é permitida exclusivamente para o cumprimento de penas de trabalhos forçados decretadas por tribunal militar.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Professor de Direito Internacional e Direitos Humanos',
      analiseGeral: 'O Artigo 1º da DUDH/1948 consagra a matriz axiológica de todos os direitos humanos: "Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade".',
      justificativaAlternativas: {
        A: 'CORRETA. Transcrição exata do Artigo 1º da DUDH/1948.',
        B: 'Incorreta. Os direitos humanos são indivisíveis, universais e interdependentes (não há hierarquia).',
        C: 'Incorreta. A DUDH protege o direito à vida (Art. 3º) e veda tortura ou penas cruéis (Art. 5º).',
        D: 'Incorreta. O princípio basilar é a UNIVERSALIDADE (para todo ser humano).',
        E: 'Incorreta. O Artigo 4º proíbe a escravidão e a servidão em TODAS as suas formas.'
      },
      bizuPMBA: 'Bizu da DUDH: Art. 1º = Livres e Iguais em Dignidade e Direitos + Razão e Consciência + Fraternidade. Art. 4º = Vedação total à escravidão. Art. 5º = Vedação à tortura.',
      artigosCitados: ['Declaração Universal dos Direitos Humanos (1948), Artigo 1º']
    }
  },
  {
    id: 'q-dh-2',
    numero: 16,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direitos Humanos',
    assunto: 'Pacto de San José da Costa Rica (CADH) e Uso da Força',
    dificuldade: 'Média',
    enunciado: 'A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica, 1969) integra o ordenamento jurídico brasileiro com estatura supralegal. No que concerne à proteção da integridade pessoal e às garantias judiciais na atuação policial, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'É permitida a aplicação de castigos corporais a presos provisórios para obtenção célere de confissão.' },
      { id: 'B', texto: 'Toda pessoa privada da liberdade deve ser tratada com o respeito devido à dignidade inerente ao ser humano, sendo os processados separados dos condenados.' },
      { id: 'C', texto: 'A prisão civil por dívida de qualquer natureza é amplamente admitida pela Convenção Americana.' },
      { id: 'D', texto: 'O agente policial pode determinar a incomunicabilidade absoluta do preso por até 30 dias sem autorização judicial.' },
      { id: 'E', texto: 'A Convenção autoriza os Estados a suspenderem retroativamente as garantias contra leis penais ex post facto em caso de estado de sítio.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Professor de Direitos Humanos',
      analiseGeral: 'Artigo 5º, item 4 da CADH: "Os processados devem ficar separados dos condenados, salvo em circunstâncias excepcionais, e devem ser submetidos a tratamento adequado à sua condição de pessoas não condenadas". O item 2 assegura que ninguém será submetido a torturas ou penas cruéis.',
      justificativaAlternativas: {
        A: 'Incorreta. Tortura e castigos corporais são vedados de modo absoluto (Art. 5.2).',
        B: 'CORRETA. Regra fundamental de custódia e dignidade constante no Art. 5º da CADH.',
        C: 'Incorreta. Apenas a dívida de pensão alimentícia é admitida (Súmula Vinculante 25 do STF).',
        D: 'Incorreta. A incomunicabilidade do preso é vedada no Estado Democrático de Direito.',
        E: 'Incorreta. O princípio da legalidade e anterioridade penal não pode ser suspenso nem em estado de emergência.'
      },
      bizuPMBA: 'Bizu CADH / Pacto de San José: Supralegalidade no Brasil (STF) + Separação entre presos provisórios e condenados + Proibição da prisão do depositário infiel (Súmula Vinculante 25).',
      artigosCitados: ['Convenção Americana de Direitos Humanos (1969), Artigo 5º', 'Súmula Vinculante nº 25 do STF']
    }
  },

  // =========================================================================
  // 5. DIREITO ADMINISTRATIVO
  // =========================================================================
  {
    id: 'q-adm-1',
    numero: 17,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direito Administrativo',
    assunto: 'Estatuto dos Policiais Militares da Bahia (Lei Estadual nº 7.990/2001) - Hierarquia e Disciplina',
    dificuldade: 'Média',
    enunciado: 'Nos termos da Lei Estadual nº 7.990/2001 (Estatuto dos Policiais Militares do Estado da Bahia), a hierarquia e a disciplina são as bases institucionais da Polícia Militar. Sobre a hierarquia militar e os círculos hierárquicos, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'A hierarquia militar é o rigoroso acatamento das leis e regulamentos, ao passo que a disciplina militar é a ordenação da autoridade em níveis funcionais de antiguidade.' },
      { id: 'B', texto: 'A hierarquia militar é a ordenação da autoridade, em níveis diferentes, dentro da estrutura da Polícia Militar, crescendo a responsabilidade com a elevação do grau hierárquico.' },
      { id: 'C', texto: 'Posto é o grau hierárquico da Praça, conferido por portaria do Comandante Geral da PMBA.' },
      { id: 'D', texto: 'Graduação é o grau hierárquico do Oficial, conferido por Decreto do Governador do Estado.' },
      { id: 'E', texto: 'Círculos hierárquicos são reuniões sindicais autorizadas para debater reivindicações salariais com o Secretário de Segurança Pública.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Cap. PMBA Rogério Silva',
      cargo: 'Especialista em Legislação Institucional da PMBA',
      analiseGeral: 'Art. 14 da Lei 7.990/2001: "A hierarquia militar é a ordenação da autoridade, em níveis diferentes, dentro da estrutura da Polícia Militar, por postos e graduações". A responsabilidade cresce proporcionalmente ao grau hierárquico.',
      justificativaAlternativas: {
        A: 'Incorreta. Inverteu os conceitos de Hierarquia e Disciplina.',
        B: 'CORRETA. Definição precisa do art. 14 da Lei Estadual 7.990/2001.',
        C: 'Incorreta. Posto é o grau hierárquico do OFICIAL (conferido por ato do Governador).',
        D: 'Incorreta. Graduação é o grau hierárquico da PRAÇA (conferido pelo Comandante Geral).',
        E: 'Incorreta. Militar é proibido de fazer greve ou sindicalizar-se (Art. 142 CF).'
      },
      bizuPMBA: 'Bizu do Estatuto PMBA (Lei 7.990/01): OFICIAL tem POSTO (Governador). PRAÇA tem GRADUAÇÃO (Comandante Geral). Não erre essa questão clássica!',
      artigosCitados: ['Lei Estadual nº 7.990/2001, Artigos 14, 15 e 16']
    }
  },
  {
    id: 'q-adm-2',
    numero: 18,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2020,
    disciplina: 'Direito Administrativo',
    assunto: 'Poderes Administrativos - Poder de Polícia e Atributos',
    dificuldade: 'Média',
    enunciado: 'No exercício do policiamento ostensivo e fiscalizatório, a Polícia Militar desempenha atos fundamentados no Poder de Polícia Administrativa. São atributos clássicos do Poder de Polícia:',
    alternativas: [
      { id: 'A', texto: 'Discricionariedade, Autoexecutoriedade e Coercibilidade.' },
      { id: 'B', texto: 'Soberania, Imunidade Absoluta e Irrevogabilidade.' },
      { id: 'C', texto: 'Publicidade Obrigatória, Gratuidade e Inalienabilidade.' },
      { id: 'D', texto: 'Legalidade Relativa, Arbitrariedade e Subjetivismo.' },
      { id: 'E', texto: 'Vinculação Plena em todos os atos e Inexigibilidade de motivo.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. PMBA Rogério Silva',
      cargo: 'Instrutor de Direito Administrativo',
      analiseGeral: 'Os atributos do poder de polícia consagrados pela doutrina de Direito Administrativo são representados pelo mnemônico "DAC": Discricionariedade (margem de escolha do meio na lei), Autoexecutoriedade (decidir e executar diretamente sem aval prévio do juiz) e Coercibilidade (imposição forçada legítima da ordem).',
      justificativaAlternativas: {
        A: 'CORRETA. Atributos "D-A-C" clássicos do Poder de Polícia.',
        B: 'Incorreta. O poder de polícia não possui imunidade absoluta.',
        C: 'Incorreta. A taxa de polícia, por exemplo, é remunerada.',
        D: 'Incorreta. A arbitrariedade é conduta ilegal e abusiva.',
        E: 'Incorreta. O ato de polícia exige motivo e finalidade pública.'
      },
      bizuPMBA: 'Bizu do Poder de Polícia: Mnemônico "D-A-C" -> Discricionariedade, Autoexecutoriedade e Coercibilidade!',
      artigosCitados: ['Código Tributário Nacional, Artigo 78', 'Doutrina de Direito Administrativo']
    }
  },
  {
    id: 'q-adm-3',
    numero: 19,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar',
    ano: 2023,
    disciplina: 'Direito Administrativo',
    assunto: 'Princípios Expressos da Administração Pública (Art. 37 da CF/88)',
    dificuldade: 'Fácil',
    enunciado: 'A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios expressos no caput do art. 37 da Constituição Federal de 1988, que são:',
    alternativas: [
      { id: 'A', texto: 'Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.' },
      { id: 'B', texto: 'Legalidade, Supremacia, Celeridade, Supremacia e Continuidade.' },
      { id: 'C', texto: 'Hierarquia, Sigilo, Isonomia, Centralização e Prerrogativa.' },
      { id: 'D', texto: 'Autonomia, Razoabilidade, Proporcionalidade, Confiança e Motivação.' },
      { id: 'E', texto: 'Lealdade, Informalidade, Eficácia, Unicidade e Universalidade.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. André Lins',
      cargo: 'Advogado e Professor',
      analiseGeral: 'Artigo 37, caput da CF/88: "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência...".',
      justificativaAlternativas: {
        A: 'CORRETA. Princípios expressos que formam o famoso acrônimo L-I-M-P-E.',
        B: 'Incorreta. Supremacia é princípio implícito.',
        C: 'Incorreta. A regra na Administração Pública é a Publicidade (o sigilo é exceção).',
        D: 'Incorreta. Razoabilidade e proporcionalidade são implícitos.',
        E: 'Incorreta. Não figuram no caput do Art. 37.'
      },
      bizuPMBA: 'Bizu do LIMPE: L = Legalidade | I = Impessoalidade | M = Moralidade | P = Publicidade | E = Eficiência (EC 19/98).',
      artigosCitados: ['Constituição Federal de 1988, Artigo 37, caput']
    }
  },

  // =========================================================================
  // 6. LÍNGUA PORTUGUESA
  // =========================================================================
  {
    id: 'q-port-1',
    numero: 20,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Língua Portuguesa',
    assunto: 'Crase e Regência Verbal no Padrão Culto',
    dificuldade: 'Média',
    enunciado: 'Assinale a alternativa em que o uso do acento indicativo de crase está inteiramente CORRETO de acordo com a norma-padrão da língua portuguesa:',
    alternativas: [
      { id: 'A', texto: 'A guarnição da PM deslocou-se à pé até o local do tumulto no Pelourinho.' },
      { id: 'B', texto: 'O Comandante comunicou a decisão às tropas perfiladas no pátio do quartel.' },
      { id: 'C', texto: 'O soldado solicitou autorização à partir das dezoito horas.' },
      { id: 'D', texto: 'O oficial dirigiu-se à ele com respeito e disciplina funcional.' },
      { id: 'E', texto: 'A viatura realizava rondas diárias de uma à outra extremidade da avenida.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Me. Cláudio Brandão',
      cargo: 'Gramático e Revisor de Provas Militares',
      analiseGeral: 'Em "O Comandante comunicou a decisão às tropas", quem comunica comunica algo (a decisão - objeto direto) a alguém (às tropas - objeto indireto). Há a fusão da preposição "a" (exigida pela regência do verbo comunicar) com o artigo feminino plural "as" (que determina o substantivo "tropas"): a + as = às.',
      justificativaAlternativas: {
        A: 'Incorreta. "Pé" é palavra masculina; não ocorre crase antes de palavra masculina.',
        B: 'CORRETA. Regência transitiva direta e indireta com preposição "a" + artigo "as" = às.',
        C: 'Incorreta. "Partir" é verbo; NUNCA ocorre crase antes de verbo.',
        D: 'Incorreta. "Ele" é pronome pessoal reto masculino; não admite crase.',
        E: 'Incorreta. Não ocorre crase entre palavras repetidas ou antes de pronomes indefinidos/cardinais sem artigo.'
      },
      bizuPMBA: 'Bizu da Crase: Proibida antes de: 1) Palavra Masculina | 2) Verbo no Infinitivo | 3) Pronome Pessoal (ele, ela, mim) | 4) Palavras repetidas (dia a dia).',
      artigosCitados: ['Gramática Normativa da Língua Portuguesa - Regência e Crase']
    }
  },
  {
    id: 'q-port-2',
    numero: 21,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2020,
    disciplina: 'Língua Portuguesa',
    assunto: 'Concordância Verbal e Partícula "SE"',
    dificuldade: 'Difícil',
    enunciado: 'Em conformidade com a norma-padrão da língua portuguesa, assinale a opção que apresenta a concordância verbal correta:',
    alternativas: [
      { id: 'A', texto: 'Necessita-se de novos policiais militares para o policiamento comunitário.' },
      { id: 'B', texto: 'Alugam-se salas no centro, mas precisa-se de novos instrutores para o curso.' },
      { id: 'C', texto: 'Haviam muitos candidatos inscritos no concurso da Polícia Militar da Bahia.' },
      { id: 'D', texto: 'Fazem dez anos que a Lei Estadual foi promulgada pelo Governador.' },
      { id: 'E', texto: 'Tratam-se de ocorrências de alta complexidade técnica e tática.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Me. Cláudio Brandão',
      cargo: 'Gramático',
      analiseGeral: 'Em "Necessita-se de novos policiais militares", o verbo "necessitar" é transitivo indireto (rege a preposição "de"). O "se" é índice de indeterminação do sujeito (IIS). O verbo permanece obrigatoriamente na 3ª pessoa do SINGULAR.',
      justificativaAlternativas: {
        A: 'CORRETA. VTI + preposição + SE (índice de indeterminação) = verbo no singular obrigatório.',
        B: 'Incorreta. "Alugam-se salas" está correto (VTD + apassivador), mas na letra A o foco direto na regra de IIS é exemplar.',
        C: 'Incorreta. O verbo "haver" no sentido de existir é impessoal: o correto é "Havia muitos candidatos".',
        D: 'Incorreta. O verbo "fazer" indicando tempo decorrido é impessoal: o correto é "Faz dez anos".',
        E: 'Incorreta. "Tratar-se de" é VTI com IIS: o correto é "Trata-se de ocorrências".'
      },
      bizuPMBA: 'Bizu dos Impessoais: HAVER (existir/tempo) e FAZER (tempo decorrido/clima) = SEMPRE NO SINGULAR! "Havia 100 soldados" (e NUNCA "Haviam"). "Faz 5 anos" (e NUNCA "Fazem 5 anos").',
      artigosCitados: ['Norma Culta - Concordância Verbal']
    }
  },

  // =========================================================================
  // 7. GEOGRAFIA DA BAHIA
  // =========================================================================
  {
    id: 'q-geo-1',
    numero: 22,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Geografia da Bahia',
    assunto: 'Hidrografia e a Bacia do Rio São Francisco na Bahia',
    dificuldade: 'Fácil',
    enunciado: 'O Rio São Francisco ("Velho Chico") desempenha papel crucial no desenvolvimento socioeconômico e na geografia física do Estado da Bahia. Sobre o Rio São Francisco e sua importância regional, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Nasce na Bahia, na Chapada Diamantina, e deságua exclusivamente na Baía de Todos-os-Santos.' },
      { id: 'B', texto: 'É um rio perene que atravessa o semiárido baiano, viabilizando polos de fruticultura irrigada de exportação no Vale do São Francisco (Juazeiro/BA) e a geração de energia em hidrelétricas como Sobradinho e Paulo Afonso.' },
      { id: 'C', texto: 'Trata-se de um rio temporário que seca completamente durante os meses de estiagem no sertão baiano.' },
      { id: 'D', texto: 'Seu curso na Bahia é exclusivamente subterrâneo, sem aproveitamento agrícola na superfície.' },
      { id: 'E', texto: 'Tem sua foz localizada na divisa entre a Bahia e Minas Gerais.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Dr. Marcelo Argolo',
      cargo: 'Geógrafo e Pesquisador do Território Baiano',
      analiseGeral: 'O Rio São Francisco nasce na Serra da Canastra (MG) e percorre ampla extensão da Bahia. Apesar de atravessar o Polígono das Secas, é um rio perene que sustenta a fruticultura irrigada (manga e uva em Juazeiro/Petrolina) e grandes complexos hidrelétricos (Sobradinho, Paulo Afonso, Itaparica).',
      justificativaAlternativas: {
        A: 'Incorreta. Nasce em Minas Gerais e deságua no Oceano Atlântico entre AL e SE.',
        B: 'CORRETA. Descrição geográfica e econômica perfeita da bacia são-franciscana na Bahia.',
        C: 'Incorreta. É um rio PERENE (nunca seca).',
        D: 'Incorreta. É um rio de superfície navegável em longos trechos.',
        E: 'Incorreta. Sua foz fica na divisa entre Sergipe e Alagoas.'
      },
      bizuPMBA: 'Bizu do Velho Chico: Perene + Juazeiro (Fruticultura Irrigada) + Hidrelétricas de Sobradinho e Paulo Afonso + Travessia do Semiárido.',
      artigosCitados: ['Geografia da Bahia - Bacias Hidrográficas']
    }
  },
  {
    id: 'q-geo-2',
    numero: 23,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2020,
    disciplina: 'Geografia da Bahia',
    assunto: 'Domínios Morfoclimáticos e Biomas Baianos (Caatinga, Cerrado e Mata Atlântica)',
    dificuldade: 'Média',
    enunciado: 'O Estado da Bahia apresenta grande diversidade de domínios naturais e biomas. O bioma exclusivamente brasileiro que ocupa mais da metade do território da Bahia, caracterizado por clima semiárido, vegetação xerófila, plantas caducifólias e solos rasos e pedregosos, é denominado:',
    alternativas: [
      { id: 'A', texto: 'Pampa.' },
      { id: 'B', texto: 'Pantanal.' },
      { id: 'C', texto: 'Caatinga.' },
      { id: 'D', texto: 'Floresta Amazônica.' },
      { id: 'E', texto: 'Manguezal de Altitude.' }
    ],
    respostaCorreta: 'C',
    comentario: {
      professor: 'Prof. Dr. Marcelo Argolo',
      cargo: 'Geógrafo',
      analiseGeral: 'A Caatinga é o único bioma 100% exclusivamente brasileiro e domina a porção central e sertaneja da Bahia (mais de 50% do estado). Adapta-se ao clima semiárido através de folhas reduzidas, espinhos (cactos como o mandacaru e xique-xique) e perda de folhas na estiagem (caducifólia).',
      justificativaAlternativas: {
        A: 'Incorreta. Típico do Rio Grande do Sul.',
        B: 'Incorreta. Localizado no Centro-Oeste (MS/MT).',
        C: 'CORRETA. Bioma xerófilo predominante no interior baiano.',
        D: 'Incorreta. Localizado no Norte do Brasil.',
        E: 'Incorreta. Vegetação costeira de transição fluviomarinha.'
      },
      bizuPMBA: 'Bizu dos Biomas da Bahia: 1) CAATINGA (Maior área, Sertão, Exclusivo do Brasil) | 2) CERRADO (Oeste baiano / Agronegócio de Barreiras e Luís Eduardo Magalhães) | 3) MATA ATLÂNTICA (Faixa Litorânea úmida / Sul e Recôncavo).',
      artigosCitados: ['Geografia da Bahia - Clima e Vegetação']
    }
  },

  // =========================================================================
  // 8. NOÇÕES DE DIREITO PENAL
  // =========================================================================
  {
    id: 'q-pen-1',
    numero: 24,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Noções de Direito Penal',
    assunto: 'Excludentes de Ilicitude (Artigo 23 do Código Penal)',
    dificuldade: 'Média',
    enunciado: 'Durante patrulhamento tático em Salvador, uma guarnição da Polícia Militar é surpreendida por disparos de arma de fogo efetuados por um criminoso contra a viatura. Para repelir a injusta e atual agressão, um dos policiais efetua disparos com arma da corporação, alvejando e neutralizando o agressor sem cometer excesso. De acordo com o Código Penal Brasileiro (Art. 23 e 25), o policial agiu amparado por qual causa excludente de ilicitude?',
    alternativas: [
      { id: 'A', texto: 'Legítima Defesa.' },
      { id: 'B', texto: 'Estado de Necessidade apenas de terceiros.' },
      { id: 'C', texto: 'Estrito Cumprimento do Dever Legal.' },
      { id: 'D', texto: 'Exercício Regular de Direito Privado.' },
      { id: 'E', texto: 'Coação Moral Irresistível.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. Dr. Marcos Valente',
      cargo: 'Especialista em Direito Penal Militar e Segurança Pública',
      analiseGeral: 'Artigo 25 do Código Penal (com a redação dada pelo Pacote Anticrime - Lei 13.964/19): "Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem". O parágrafo único do art. 25 prevê expressamente a legítima defesa do agente de segurança pública que repele agressão ou risco de agressão a refém ou à sua própria vida.',
      justificativaAlternativas: {
        A: 'CORRETA. Repelir injusta agressão atual ou iminente com uso moderado dos meios é LEGÍTIMA DEFESA.',
        B: 'Incorreta. O estado de necessidade pressupõe perigo atual sem agressão injusta humana.',
        C: 'Incorreta. A resposta armada a tiro de criminoso é legítima defesa (o dever legal não impõe sofrer disparos).',
        D: 'Incorreta. Trata-se de defesa perante agressão ilícita.',
        E: 'Incorreta. Coação moral irresistível é causa excludente de culpabilidade.'
      },
      bizuPMBA: 'Bizu das Excludentes de Ilicitude (Art. 23 CP): "B-R-A-S-U-C-A": 1) Estado de Necessidade (perigo atual) | 2) Legítima Defesa (injusta agressão) | 3) Estrito Cumprimento do Dever Legal | 4) Exercício Regular de Direito.',
      artigosCitados: ['Código Penal Brasileiro, Artigos 23 e 25 (Lei 13.964/2019)']
    }
  },
  {
    id: 'q-pen-2',
    numero: 25,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2020,
    disciplina: 'Noções de Direito Penal',
    assunto: 'Crimes Contra a Administração Pública - Corrupção Passiva vs Concussão',
    dificuldade: 'Difícil',
    enunciado: 'O Código Penal Brasileiro tipifica os crimes praticados por funcionário público contra a administração em geral. Assinale a alternativa que descreve a distinção elementar entre o crime de CONCUSSÃO (Art. 316) e o crime de CORRUPÇÃO PASSIVA (Art. 317):',
    alternativas: [
      { id: 'A', texto: 'Na concussão o funcionário público EXIGE vantagem indevida; na corrupção passiva ele SOLICITA, RECEBE ou ACEITA promessa de vantagem.' },
      { id: 'B', texto: 'Na concussão o funcionário apropria-se de dinheiro público; na corrupção ele desvia em proveito alheio.' },
      { id: 'C', texto: 'Concussão é crime praticado exclusivamente por particulares; corrupção passiva é praticada por militares.' },
      { id: 'D', texto: 'Ambos os crimes exigem violência física ou grave ameaça de morte contra a vítima.' },
      { id: 'E', texto: 'A concussão admite perdão judicial se a vantagem for de pequeno valor financeiro.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. Dr. Marcos Valente',
      cargo: 'Especialista em Direito Penal',
      analiseGeral: 'Art. 316 CP (Concussão): "EXIGIR, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida". Art. 317 CP (Corrupção Passiva): "SOLICITAR ou RECEBER, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, ou ACEITAR PROMESSA de tal vantagem".',
      justificativaAlternativas: {
        A: 'CORRETA. Concussão = EXIGIR (verbo forte/imposição do cargo). Corrupção Passiva = SOLICITAR, RECEBER ou ACEITAR promessa.',
        B: 'Incorreta. Essa conduta descreve o Peculato (Art. 312 CP).',
        C: 'Incorreta. Ambos são crimes funcionais próprios (praticados por funcionário público).',
        D: 'Incorreta. A exigência na concussão decorre do temor da autoridade do cargo (metus publicae potestatis), não de violência física típica do roubo.',
        E: 'Incorreta. Não há previsão de perdão judicial para a concussão.'
      },
      bizuPMBA: 'Bizu Infalível dos Crimes da Administração: 1) Concussão = EXIGIR (verbo com "X") | 2) Corrupção Passiva = SOLICITAR / RECEBER / ACEITAR | 3) Prevaricação = SATISFAZER interesse ou sentimento pessoal | 4) Peculato = APROPRIAR-SE / DESVIAR dinheiro ou bem público.',
      artigosCitados: ['Código Penal Brasileiro, Artigos 316 e 317']
    }
  },
  {
    id: 'q-pen-3',
    numero: 26,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar',
    ano: 2023,
    disciplina: 'Noções de Direito Penal',
    assunto: 'Crimes Contra a Vida e o Patrimônio - Homicídio e Roubo Majorado',
    dificuldade: 'Média',
    enunciado: 'Acerca dos crimes contra a pessoa e contra o patrimônio tipificados no Código Penal Brasileiro, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'O crime de roubo consuma-se com a inversão da posse do bem mediante violência ou grave ameaça, ainda que por breve tempo e mesmo sem posse mansa ou pacífica da coisa.' },
      { id: 'B', texto: 'O homicídio culposo admite perdão judicial apenas quando o réu for primário e confessar perante autoridade policial.' },
      { id: 'C', texto: 'O furto noturno é considerado crime hediondo inafiançável pelo Código Penal.' },
      { id: 'D', texto: 'A lesão corporal leve contra agente de segurança pública não enseja qualquer causa de aumento de pena.' },
      { id: 'E', texto: 'O roubo praticado com emprego de simulacro de arma de fogo (arma de brinquedo) enseja a aplicação da majorante de uso de arma de fogo.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. Dr. Marcos Valente',
      cargo: 'Especialista em Direito Penal',
      analiseGeral: 'Súmula 582 do STJ: "Consuma-se o crime de roubo com a inversão da posse do bem mediante emprego de violência ou grave ameaça, ainda que por breve espaço de tempo e de pronto seguido de perseguição do agente e recuperação da coisa roubada, sendo prescindível a posse mansa e pacífica ou desvigiada".',
      justificativaAlternativas: {
        A: 'CORRETA. Teoria da amotio/apprehensio consagrada na Súmula 582 do STJ.',
        B: 'Incorreta. O perdão judicial no homicídio culposo cabe quando as consequências da infração atingirem o agente de forma tão grave que a sanção penal se torne desnecessária (Art. 121, § 5º CP).',
        C: 'Incorreta. Furto noturno é causa de aumento (Art. 155, § 1º), não é hediondo.',
        D: 'Incorreta. Há previsão de aumento ou qualificadora quando praticado contra agente de segurança pública no exercício da função (Art. 129, § 12 CP).',
        E: 'Incorreta. A Súmula 174 do STJ foi cancelada; arma de brinquedo serve para caracterizar a grave ameaça, mas NÃO autoriza a causa de aumento de pena por uso de arma.'
      },
      bizuPMBA: 'Bizu do STJ (Súmula 582): Roubo e Furto NÃO exigem posse mansa ou pacífica! Basta a INVERSÃO DA POSSE da coisa, mesmo que o policial persiga e capture o criminoso em seguida.',
      artigosCitados: ['Código Penal, Art. 157', 'Súmula 582 do STJ']
    }
  }
];
