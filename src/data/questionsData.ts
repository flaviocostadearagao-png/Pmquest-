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

  // =========================================================================
  // 2. PROMOÇÃO DA IGUALDADE RACIAL E DE GÊNERO
  // =========================================================================
  {
    id: 'q-igual-1',
    numero: 5,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Igualdade de Gênero e Raça',
    assunto: 'Estatuto da Igualdade Racial (Lei Federal nº 12.288/2010)',
    dificuldade: 'Fácil',
    enunciado: 'A Lei Federal nº 12.288/2010 (Estatuto da Igualdade Racial) é de observância obrigatória no edital da Polícia Militar da Bahia. De acordo com o art. 1º dessa lei, considera-se "discriminação racial ou étnico-racial":',
    alternativas: [
      { id: 'A', texto: 'Toda distinção, exclusão, restrição ou preferência baseada em raça, cor, descendência ou origem nacional ou étnica que tenha por objeto anular ou restringir o reconhecimento ou exercício de direitos fundamentais.' },
      { id: 'B', texto: 'Exclusivamente as agressões físicas comprovadas contra indivíduos pertencentes a povos e comunidades tradicionais em áreas urbanas.' },
      { id: 'C', texto: 'Apenas a recusa formal e documentada de contratação de pessoas autodeclaradas pretas ou pardas no setor público.' },
      { id: 'D', texto: 'A adoção de medidas de ação afirmativa de incentivo temporário a grupos étnico-raciais historicamente vulnerabilizados.' },
      { id: 'E', texto: 'Toda medida governamental que vise equiparar salários de homens e mulheres no serviço militar estadual.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof.ª Dra. Luiza Dandara',
      cargo: 'Professora de Legislação Especial e Direitos Étnico-Raciais',
      analiseGeral: 'A banca copiou literalmente o texto legal do art. 1º, parágrafo único, inciso I, da Lei 12.288/2010.',
      justificativaAlternativas: {
        A: 'CORRETA. Transcrição literal do art. 1º, parágrafo único, I, da Lei nº 12.288/2010.',
        B: 'Incorreta. Discriminação não é restrita a agressões físicas nem a áreas urbanas.',
        C: 'Incorreta. Não se restringe a recusa formal de contratação nem exclusivamente ao setor público.',
        D: 'Incorreta. As ações afirmativas NÃO configuram discriminação racial; pelo contrário, são instrumentos legítimos de reparação e promoção da igualdade material (art. 4º, parágrafo único).',
        E: 'Incorreta. Alternativa confusa misturando temas laborais genéricos.'
      },
      bizuPMBA: 'Bizu do Edital: A banca adora confundir "discriminação racial" com "ações afirmativas". Lembre-se: Ação afirmativa é política pública legal de inclusão, NUNCA é discriminação!',
      artigosCitados: ['Lei nº 12.288/2010, Art. 1º, Parágrafo Único, Inciso I']
    }
  },
  {
    id: 'q-igual-2',
    numero: 6,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Igualdade de Gênero e Raça',
    assunto: 'Lei Maria da Penha (Lei Federal nº 11.340/2006) - Formas de Violência',
    dificuldade: 'Média',
    enunciado: 'A Lei Maria da Penha (Lei Federal nº 11.340/2006) define em seu artigo 7º as formas de violência doméstica e familiar contra a mulher. A conduta do agressor consistente em rasgar deliberadamente a carteira de trabalho da vítima, quebrar seu telefone celular e subtrair suas ferramentas de costura configura forma de violência:',
    alternativas: [
      { id: 'A', texto: 'Moral.' },
      { id: 'B', texto: 'Patrimonial.' },
      { id: 'C', texto: 'Psicológica exclusiva.' },
      { id: 'D', texto: 'Institucional.' },
      { id: 'E', texto: 'Física qualificada.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Major PMBA Dra. Clarice Mattos',
      cargo: 'Coordenadora de Ronda Maria da Penha',
      analiseGeral: 'Artigo 7º, inciso IV da Lei 11.340/2006: "a violência patrimonial, entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades".',
      justificativaAlternativas: {
        A: 'Incorreta. Violência moral é a que configura calúnia, difamação ou injúria (art. 7º, V).',
        B: 'CORRETA. Destruição de objetos, instrumentos de trabalho (máquina de costura) e documentos (CTPS) = VIOLÊNCIA PATRIMONIAL.',
        C: 'Incorreta. Psicológica abrange dano emocional e diminuição da autoestima (art. 7º, II).',
        D: 'Incorreta. Não é a tipologia do art. 7º.',
        E: 'Incorreta. Física é a conduta que ofende a integridade ou saúde corporal.'
      },
      bizuPMBA: 'Bizu Ronda Maria da Penha PMBA: Celular quebrado, documento rasgado, instrumento de trabalho escondido = VIOLÊNCIA PATRIMONIAL!',
      artigosCitados: ['Lei nº 11.340/2006, Artigo 7º, Inciso IV']
    }
  },
  {
    id: 'q-igual-3',
    numero: 7,
    banca: 'AOCP',
    orgao: 'Polícia Militar',
    cargo: 'Soldado PM',
    ano: 2022,
    disciplina: 'Igualdade de Gênero e Raça',
    assunto: 'Crimes de Preconceito de Raça ou de Cor (Lei Federal nº 7.716/1989 e Lei 14.532/2023)',
    dificuldade: 'Difícil',
    enunciado: 'Nos termos da Lei Federal nº 7.716/1989 e das recentes atualizações legislativas que equipararam a injúria racial ao crime de racismo (Lei nº 14.532/2023), sobre a persecução penal desses delitos é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O crime de racismo prescreve em cinco anos a contar da data do fato e admite liberdade provisória mediante fiança.' },
      { id: 'B', texto: 'A injúria racial e os crimes resultantes de preconceito de raça ou de cor são inafiançáveis e imprescritíveis, sujeitos à pena de reclusão.' },
      { id: 'C', texto: 'A prática de recusar atendimento em estabelecimento comercial por motivo de cor é mera contravenção penal sujeita apenas a multa administrativa.' },
      { id: 'D', texto: 'Caso o crime de racismo seja cometido por agente público no exercício de suas funções, a pena será atenuada em decorrência da hierarquia funcional.' },
      { id: 'E', texto: 'A ação penal para apuração de injúria racial é de iniciativa privada personalíssima da vítima perante o juizado de pequenas causas.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof.ª Dra. Luiza Dandara',
      cargo: 'Especialista em Legislação Antirracista',
      analiseGeral: 'Com a Lei nº 14.532/2023 e o julgamento do HC 154.248 pelo STF, a injúria qualificada por elementos de raça/cor foi inserida na Lei 7.716/1989 (art. 2º-A). Tratando-se de espécie de racismo, é delito INAFIANÇÁVEL e IMPRESCRITÍVEL, nos termos do art. 5º, XLII da CF/88.',
      justificativaAlternativas: {
        A: 'Incorreta. Racismo é constitucionalmente inafiançável e imprescritível.',
        B: 'CORRETA. Art. 5º, XLII da CF/88 e Lei 14.532/2023: Racismo e injúria racial são inafiançáveis e imprescritíveis!',
        C: 'Incorreta. É crime punido com reclusão de 1 a 3 anos (art. 5º da Lei 7.716/89).',
        D: 'Incorreta. Se cometido por funcionário público, a pena é AUMENTADA (art. 20-B).',
        E: 'Incorreta. A ação penal é pública incondicionada.'
      },
      bizuPMBA: 'Bizu de Ouro PMBA: O artigo 5º, XLII da CF é taxativo: "a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei". Com a Lei 14.532/23, injúria racial = RACISMO!',
      artigosCitados: ['Art. 5º, XLII da CF/88', 'Lei 7.716/1989, Art. 2º-A e Art. 20-B', 'Lei 14.532/2023']
    }
  },

  // =========================================================================
  // 3. HISTÓRIA DA BAHIA
  // =========================================================================
  {
    id: 'q-hist-1',
    numero: 8,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'História da Bahia',
    assunto: 'Independência da Bahia (Dois de Julho de 1823) e Heroínas da Independência',
    dificuldade: 'Média',
    enunciado: 'Em 2 de julho de 1823, consolidou-se a Independência da Bahia e a efetiva expulsão das tropas portuguesas comandadas pelo brigadeiro Madeira de Melo. Sobre este episódio marcante da história baiana e nacional, assinale a afirmação correta:',
    alternativas: [
      { id: 'A', texto: 'A luta se restringiu a negociações diplomáticas em Salvador, sem que houvesse engajamento popular ou confrontos armados no Recôncavo.' },
      { id: 'B', texto: 'Maria Quitéria de Jesus alistou-se no Batalhão dos "Voluntários do Príncipe Dom Pedro", destacando-se por sua bravura em combates como a Batalha de Pirajá.' },
      { id: 'C', texto: 'Joana Angélica participou liderando tropas no front militar de Cachoeira, recebendo condecoração imperial direta de Dom Pedro I.' },
      { id: 'D', texto: 'O movimento foi repelido pelo povo soteropolitano, que preferia a permanência sob a coroa lusitana devido ao livre comércio de açúcar.' },
      { id: 'E', texto: 'O 2 de Julho ocorreu antes do 7 de Setembro de 1822 e não teve relação com a independência do restante do território brasileiro.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Antônio Carlos Ribeiro',
      cargo: 'Historiador e Especialista em História da Bahia',
      analiseGeral: 'A Independência da Bahia representa a verdadeira expulsão militar das tropas de Portugal do Brasil.',
      justificativaAlternativas: {
        A: 'Incorreta. Houve sangrentos confrontos armados no Recôncavo Baiano (Cachoeira, Santo Amaro, Itaparica) e Pirajá.',
        B: 'CORRETA. Maria Quitéria usou o pseudônimo "Soldado Medeiros", lutou com heroísmo no Batalhão dos Voluntários do Príncipe e foi condecorada com a Ordem Imperial do Cruzeiro.',
        C: 'Incorreta. Joana Angélica foi a abadessa do Convento da Lapa martirizada ao defender o claustro em Salvador.',
        D: 'Incorreta. A população baiana cerrou fileiras contra Madeira de Melo.',
        E: 'Incorreta. O 2 de Julho ocorreu em 1823 (depois de 1822).'
      },
      bizuPMBA: 'Bizu da Bahia: Trinca de heroínas da Independência Baiana: Maria Quitéria (armas/batalha), Maria Felipa (mariscadeira/Itaparica queimando barcos) e Joana Angélica (mártir no Convento da Lapa).',
      artigosCitados: ['Historiografia Oficial da Bahia / Edital PMBA']
    }
  },
  {
    id: 'q-hist-2',
    numero: 9,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'História da Bahia',
    assunto: 'Revolta dos Búzios (1798) / Conjuração Baiana dos Alfaiates',
    dificuldade: 'Média',
    enunciado: 'A Revolta dos Búzios (também conhecida como Conjuração Baiana ou Revolta dos Alfaiates), ocorrida em Salvador no ano de 1798, destacou-se no cenário colonial por apresentar caráter marcadamente:',
    alternativas: [
      { id: 'A', texto: 'Aristocrático e favorável à manutenção do exclusivo comercial português e do tráfico negreiro transatlântico.' },
      { id: 'B', texto: 'Popular, republicano, anticolonial e abolicionista, com forte participação de negros libertos, escravizados e homens pardos.' },
      { id: 'C', texto: 'Monarquista absolutista em apoio ao príncipe regente D. João VI contra as ideias da Revolução Francesa.' },
      { id: 'D', texto: 'Restrito aos grandes senhores de engenho do Recôncavo, que desejavam apenas a diminuição de impostos sobre a cana-de-açúcar.' },
      { id: 'E', texto: 'Clerical, cujo único objetivo era a fundação do primeiro bispado da América do Sul na cidade de Feira de Santana.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Antônio Carlos Ribeiro',
      cargo: 'Historiador e Especialista em História da Bahia',
      analiseGeral: 'Diferente da Inconfidência Mineira (1789), que era de elite, a Conjuração Baiana de 1798 teve ampla base popular (alfaiates, soldados, artesãos) e postulava o fim da escravidão, proclamação da República e livre comércio.',
      justificativaAlternativas: {
        A: 'Incorreta. O movimento era expressamente abolicionista e anticolonial.',
        B: 'CORRETA. Lideranças: Lucas Dantas, Manuel Faustino, Luís Gonzaga das Virgens e João de Deus.',
        C: 'Incorreta. Defendia a República inspirada na Revolução Francesa.',
        D: 'Incorreta. Não foi liderada por senhores de engenho.',
        E: 'Incorreta. O movimento era laico e de emancipação política e social.'
      },
      bizuPMBA: 'Bizu Histórico: Búzios (1798) = Popular + Republicana + ABOLICIONISTA (queria o fim da escravidão!). Guarde os mártires: Lucas Dantas, Manuel Faustino, Luís Gonzaga e João de Deus.',
      artigosCitados: ['Lei Federal nº 12.391/2011 (Heróis da Pátria)']
    }
  },
  {
    id: 'q-hist-3',
    numero: 10,
    banca: 'UNEB',
    orgao: 'Polícia Militar da Bahia',
    cargo: 'Soldado PMBA',
    ano: 2021,
    disciplina: 'História da Bahia',
    assunto: 'A Guerra de Canudos (1896-1897) e o Sertão Baiano',
    dificuldade: 'Média',
    enunciado: 'O conflito de Canudos (1896-1897), desenrolado no sertão baiano nas margens do Rio Vaza-Barris, opôs as forças do arraial de Belo Monte às tropas do Exército e da Polícia Militar da Bahia. Sobre esse acontecimento, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Antônio Conselheiro liderou um movimento militar burguês para reinstalar a corte portuguesa na cidade de Salvador.' },
      { id: 'B', texto: 'O arraial atraiu milhares de sertanejos, ex-escravizados e sertanejos despossuídos, sendo visto pela jovem República como uma ameaça monarquista e de fanatismo que precisava ser erradicada.' },
      { id: 'C', texto: 'A primeira expedição governamental, liderada pelo Coronel Moreira César, dizimou o arraial em apenas 24 horas de combate pacífico.' },
      { id: 'D', texto: 'O conflito terminou com um armistício assinado entre Conselheiro e o presidente Prudente de Morais sem perdas humanas.' },
      { id: 'E', texto: 'Canudos ocorreu na região do Recôncavo Baiano e teve apoio irrestrito dos grandes latifundiários e fazendeiros de gado locais.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Antônio Carlos Ribeiro',
      cargo: 'Historiador da Bahia',
      analiseGeral: 'Canudos representou o embate entre o sertão esquecido pelo poder republicano oligárquico e as forças estatais. O arraial de Belo Monte chegou a abrigar mais de 25 mil pessoas sob a liderança messiânica de Antônio Conselheiro e foi narrado com maestria por Euclides da Cunha em "Os Sertões".',
      justificativaAlternativas: {
        A: 'Incorreta. O movimento era de sertanejos pobres, sem vínculo com a corte portuguesa.',
        B: 'CORRETA. A República nascente acusava Canudos de reduto de conspiração monarquista.',
        C: 'Incorreta. Moreira César liderou a 3ª expedição e foi derrotado e morto pelos sertanejos.',
        D: 'Incorreta. Canudos foi completamente destruído e massacrado na 4ª expedição.',
        E: 'Incorreta. Ocorreu no Sertão de Canudos (Rio Vaza-Barris), contra os interesses dos coronéis latifundiários.'
      },
      bizuPMBA: 'Bizu de Canudos: Rio Vaza-Barris + Antônio Conselheiro + Arraial de Belo Monte + "Os Sertões" de Euclides da Cunha. Foram 4 expedições militares até a queda final em outubro de 1897.',
      artigosCitados: ['Historiografia da Guerra de Canudos / Euclides da Cunha']
    }
  },

  // =========================================================================
  // 4. DIREITO ADMINISTRATIVO & ESTATUTO PMBA
  // =========================================================================
  {
    id: 'q-admin-1',
    numero: 11,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Direito Administrativo',
    assunto: 'Estatuto dos Policiais Militares da Bahia (Lei Estadual nº 7.990/2001)',
    dificuldade: 'Difícil',
    enunciado: 'Em conformidade com o Estatuto dos Policiais Militares do Estado da Bahia (Lei Estadual nº 7.990/2001), a hierarquia e a disciplina são a base institucional da Polícia Militar. Sobre a precedência hierárquica e círculos hierárquicos, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A precedência entre policiais militares da ativa, do mesmo grau hierárquico, é assegurada pela antiguidade no posto ou graduação, salvo nos casos de precedência funcional estabelecida em lei.' },
      { id: 'B', texto: 'Os Alunos-a-Oficial PM e os Alunos do Curso de Formação de Soldados pertencem ao mesmo círculo hierárquico dos Oficiais Superiores.' },
      { id: 'C', texto: 'A disciplina militar consiste unicamente no direito do subordinado de questionar previamente qualquer ordem do superior em redes sociais.' },
      { id: 'D', texto: 'A hierarquia militar prevalece apenas em situações de combate ou operação especial de garantia da lei e da ordem.' },
      { id: 'E', texto: 'O policial militar da reserva remunerada quando convocado terá precedência hierárquica automática sobre qualquer oficial da ativa.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Major PMBA Carlos Eduardo',
      cargo: 'Bacharel em Direito e Instrutor da Academia de Polícia Militar da Bahia',
      analiseGeral: 'A Lei Estadual nº 7.990/2001 é a legislação específica de maior peso no concurso da PMBA.',
      justificativaAlternativas: {
        A: 'CORRETA. É a regra matriz estampada no art. 16 da Lei Estadual 7.990/2001: a precedência entre militares do mesmo grau decorre da antiguidade, salvo precedência funcional.',
        B: 'Incorreta. Alunos são praças especiais e têm círculo próprio.',
        C: 'Incorreta. A disciplina militar é o acatamento integral das leis e ordens legítimas dos superiores.',
        D: 'Incorreta. A hierarquia e disciplina são permanentes.',
        E: 'Incorreta. Convocação não garante supremacia irrestrita sobre oficiais da ativa.'
      },
      bizuPMBA: 'Bizu do Estatuto: Artigo 14 da Lei 7.990/2001: A hierarquia e a disciplina são as BASES INSTITUCIONAIS da Polícia Militar da Bahia!',
      artigosCitados: ['Lei Estadual nº 7.990/2001, Art. 14 a 19']
    }
  },
  {
    id: 'q-admin-2',
    numero: 12,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direito Administrativo',
    assunto: 'Princípios Expressos da Administração Pública (LIMPE - Art. 37 da CF/88)',
    dificuldade: 'Fácil',
    enunciado: 'O artigo 37, caput, da Constituição Federal de 1988 estabelece que a administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá a princípios fundamentais. O princípio segundo o qual a atuação do administrador e do policial não pode visar à promoção pessoal nem a perseguições individuais, tratando todos os administrados com neutralidade, é o princípio da:',
    alternativas: [
      { id: 'A', texto: 'Legalidade estrita.' },
      { id: 'B', texto: 'Impessoalidade.' },
      { id: 'C', texto: 'Publicidade irrestrita.' },
      { id: 'D', texto: 'Autotutela.' },
      { id: 'E', texto: 'Continuidade dos serviços.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. André Lins',
      cargo: 'Advogado e Professor de Direito Administrativo',
      analiseGeral: 'O princípio da Impessoalidade veda que o agente público utilize o aparato estatal para autopromoção pessoal (ex: colocar seu nome ou foto em viaturas) ou para perseguição/favoritismo de particulares.',
      justificativaAlternativas: {
        A: 'Incorreta. A legalidade impõe que a administração só pode fazer o que a lei expressamente autoriza.',
        B: 'CORRETA. Impessoalidade = finalidade pública + vedação à promoção pessoal + tratamento isonômico neutro.',
        C: 'Incorreta. A publicidade é a divulgação oficial dos atos.',
        D: 'Incorreta. Autotutela é princípio implícito de controle de legalidade.',
        E: 'Incorreta. Continuidade refere-se à não interrupção de serviços essenciais.'
      },
      bizuPMBA: 'Bizu do LIMPE: L = Legalidade | I = Impessoalidade | M = Moralidade | P = Publicidade | E = Eficiência. Vedação à promoção pessoal = IMPESSOALIDADE!',
      artigosCitados: ['Art. 37, caput e § 1º da Constituição Federal de 1988']
    }
  },
  {
    id: 'q-admin-3',
    numero: 13,
    banca: 'CESPE / Cebraspe',
    orgao: 'Polícia Militar',
    cargo: 'Soldado PM',
    ano: 2022,
    disciplina: 'Direito Administrativo',
    assunto: 'Poder de Polícia Administrativa e Seus Atributos',
    dificuldade: 'Média',
    enunciado: 'Em uma operação de fiscalização de trânsito e ordem urbana, uma guarnição da Polícia Militar aborda um veículo que trafegava sem condições de segurança e apreende mercadorias ilícitas no local, sem necessidade de autorização judicial prévia para a apreensão física das coisas ilegais. Esse atributo do poder de polícia administrativa que permite à Administração executar diretamente seus próprios atos é denominado:',
    alternativas: [
      { id: 'A', texto: 'Tipicidade estrita.' },
      { id: 'B', texto: 'Autoexecutoriedade.' },
      { id: 'C', texto: 'Presunção de culpabilidade.' },
      { id: 'D', texto: 'Inalienabilidade.' },
      { id: 'E', texto: 'Desconcentração.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. André Lins',
      cargo: 'Especialista em Direito Administrativo Policial',
      analiseGeral: 'O poder de polícia administrativa possui como atributos essenciais a Discricionariedade, a Autoexecutoriedade e a Coercibilidade (mnemônico DAC).',
      justificativaAlternativas: {
        A: 'Incorreta. Tipicidade é requisito do ato administrativo, não atributo específico.',
        B: 'CORRETA. A Autoexecutoriedade autoriza a prática e execução direta de atos materiais pela polícia sem prévia chancela judicial.',
        C: 'Incorreta. O direito adota a presunção de inocência e legitimidade dos atos.',
        D: 'Incorreta. Inalienabilidade é atributo de bens públicos de uso comum.',
        E: 'Incorreta. Desconcentração é técnica de distribuição interna de competências.'
      },
      bizuPMBA: 'Bizu do Poder de Polícia: Mnemônico D-A-C: D = Discricionariedade | A = Autoexecutoriedade (agir direto sem ordem judicial prévia) | C = Coercibilidade (uso legítimo da força).',
      artigosCitados: ['Art. 78 do Código Tributário Nacional (Conceito de Poder de Polícia)']
    }
  },

  // =========================================================================
  // 5. LÍNGUA PORTUGUESA
  // =========================================================================
  {
    id: 'q-port-1',
    numero: 14,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Língua Portuguesa',
    assunto: 'Emprego do Sinal Indicativo de Crase',
    dificuldade: 'Média',
    enunciado: 'Considere a seguinte frase adaptada de uma ocorrência policial: "O policial militar dirigiu-se ___ guarnição de serviço para prestar apoio ___ vítimas, obedecendo ___ ordens do oficial de dia." Assinale a alternativa que preenche correta e respectivamente as lacunas:',
    alternativas: [
      { id: 'A', texto: 'à — às — às' },
      { id: 'B', texto: 'a — as — às' },
      { id: 'C', texto: 'à — as — as' },
      { id: 'D', texto: 'a — às — as' },
      { id: 'E', texto: 'à — as — às' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Sérgio Nogueira',
      cargo: 'Mestre em Língua Portuguesa para Carreiras Policiais',
      analiseGeral: 'A FCC cobra com muita frequência a regência de verbos de movimento (dirigir-se a), transitivos indiretos (prestar apoio a) e o verbo obedecer (que exige a preposição "a").',
      justificativaAlternativas: {
        A: 'CORRETA. 1ª: quem se dirige, dirige-se "a" + "a guarnição" = à. 2ª: prestar apoio "a" + "as vítimas" = às. 3ª: o verbo obedecer exige preposição "a" + "as ordens" = às ordens.',
        B: 'Incorreta. "Dirigiu-se a" exige crase diante de substantivo feminino.',
        C: 'Incorreta. O apoio foi prestado "a" alguém + "as vítimas", exigindo a crase.',
        D: 'Incorreta. O verbo obedecer rege preposição "a", portanto obedece-se "às" ordens.',
        E: 'Incorreta. Faltou a crase na segunda lacuna (às vítimas).'
      },
      bizuPMBA: 'Bizu de Português: Lembra do verbo OBEDECER / DESOBEDECER! Eles exigem a preposição "A" ("Obedeceu às leis", "Obedeceu ao regulamento"). Nunca use sem preposição!',
      artigosCitados: ['Regência Verbal e Sintaxe de Concordância']
    }
  },
  {
    id: 'q-port-2',
    numero: 15,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Língua Portuguesa',
    assunto: 'Concordância Verbal e Voz Passiva Sintética',
    dificuldade: 'Média',
    enunciado: 'Em conformidade com a norma-padrão da Língua Portuguesa, assinale a alternativa em que a concordância verbal está inteiramente correta:',
    alternativas: [
      { id: 'A', texto: 'Apreendeu-se vários armamentos ilegais durante a operação noturna no bairro periférico.' },
      { id: 'B', texto: 'Apreenderam-se vários armamentos ilegais durante a operação noturna no bairro periférico.' },
      { id: 'C', texto: 'Faziam muitos anos que a corporação não realizava um curso tático tão exigente.' },
      { id: 'D', texto: 'Haviam muitos suspeitos congregados em frente ao estabelecimento comercial.' },
      { id: 'E', texto: 'Deve haverem muitos candidatos inscritos no concurso da Polícia Militar da Bahia.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Sérgio Nogueira',
      cargo: 'Professor de Gramática para Concursos',
      analiseGeral: 'Com o verbo transitivo direto acompanhado do pronome apassivador "se" (voz passiva sintética), o substantivo seguinte é o sujeito paciente e o verbo DEVE concordar com ele no plural: "Vários armamentos foram apreendidos" -> "Apreenderam-se vários armamentos".',
      justificativaAlternativas: {
        A: 'Incorreta. "Vários armamentos" está no plural, exigindo "Apreenderam-se".',
        B: 'CORRETA. Verbo concorda com o sujeito paciente plural.',
        C: 'Incorreta. O verbo "fazer" indicando tempo transcorrido é impessoal e fica no singular: "Fazia muitos anos".',
        D: 'Incorreta. O verbo "haver" no sentido de existir é impessoal: "Havia muitos suspeitos".',
        E: 'Incorreta. Na locução com haver impessoal, o verbo auxiliar fica no singular: "Deve haver muitos candidatos".'
      },
      bizuPMBA: 'Bizu de Prova: Verbo HAVER (existir/tempo) e FAZER (tempo) NÃO TÊM PLURAL! E com VTD + SE: o verbo vai para o plural se o sujeito estiver no plural ("Vendem-se casas", "Apreenderam-se armas").',
      artigosCitados: ['Concordância com Sujeito Paciente e Verbos Impessoais']
    }
  },
  {
    id: 'q-port-3',
    numero: 16,
    banca: 'FGV',
    orgao: 'Polícia Militar',
    cargo: 'Soldado PM',
    ano: 2022,
    disciplina: 'Língua Portuguesa',
    assunto: 'Pontuação - Emprego da Vírgula',
    dificuldade: 'Difícil',
    enunciado: 'Assinale a alternativa redigida em estrita consonância com as regras de pontuação da norma culta:',
    alternativas: [
      { id: 'A', texto: 'Os soldados recém-formados, chegaram ao quartel de Salvador com bastante entusiasmo.' },
      { id: 'B', texto: 'Durante a madrugada fria de ontem, a viatura da Polícia Militar realizou diversas rondas ostensivas na orla.' },
      { id: 'C', texto: 'O Comandante Geral da PMBA convocou, todos os oficiais para a reunião matinal.' },
      { id: 'D', texto: 'O cidadão informou aos policiais, que havia presenciado o furto nas imediações do mercado.' },
      { id: 'E', texto: 'Os policiais que estavam cansados, decidiram interromper o descanso para atender à ocorrência com reféns.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Sérgio Nogueira',
      cargo: 'Língua Portuguesa',
      analiseGeral: 'Regra básica inquebrável: NUNCA se separa sujeito de predicado nem verbo de seu complemento com uma vírgula única.',
      justificativaAlternativas: {
        A: 'Incorreta. Vírgula separando o sujeito ("Os soldados recém-formados") do verbo ("chegaram"). Erro grave!',
        B: 'CORRETA. O adjunto adverbial de tempo deslocado ("Durante a madrugada fria de ontem") está corretamente isolado por vírgula.',
        C: 'Incorreta. Vírgula separando o verbo transitivo direto de seu objeto direto.',
        D: 'Incorreta. Vírgula separando a oração subordinada substantiva objetiva direta da oração principal.',
        E: 'Incorreta. Faltou a vírgula antes do pronome relativo "que" se a oração fosse explicativa, ou não se pode deixar apenas uma vírgula antes do verbo.'
      },
      bizuPMBA: 'Bizu da Vírgula: Regra do Semáforo Vermelho: NUNCA separe Sujeito + Verbo + Objeto por vírgula! Adjunto adverbial deslocado no início da oração: VÍRGULA NELE!',
      artigosCitados: ['Sintaxe de Pontuação da Língua Portuguesa']
    }
  },

  // =========================================================================
  // 6. DIREITOS HUMANOS
  // =========================================================================
  {
    id: 'q-dh-1',
    numero: 17,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direitos Humanos',
    assunto: 'Declaração Universal dos Direitos Humanos (DUDH 1948) e Prisão Legal',
    dificuldade: 'Fácil',
    enunciado: 'Segundo o Artigo 9º da Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 1948:',
    alternativas: [
      { id: 'A', texto: 'Ninguém será arbitrariamente preso, detido ou exilado.' },
      { id: 'B', texto: 'Todo cidadão suspeito perde de imediato sua presunção de inocência no momento da abordagem policial ostensiva.' },
      { id: 'C', texto: 'A prisão civil por dívida de qualquer natureza pode ser decretada discricionariamente pelo agente policial.' },
      { id: 'D', texto: 'O banimento de cidadãos nacionais é incentivado quando houver reincidência em contravenções penais.' },
      { id: 'E', texto: 'As penas cruéis e degradantes são permitidas excepcionalmente em interrogatórios de crimes hediondos.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Rafael Barretto',
      cargo: 'Especialista em Direitos Humanos e Segurança Pública',
      analiseGeral: 'A DUDH veda prisões arbitrárias no Artigo 9º: "Ninguém será arbitrariamente preso, detido ou exilado".',
      justificativaAlternativas: {
        A: 'CORRETA. Artigo 9º literal da DUDH.',
        B: 'Incorreta. Art. 11 assegura presunção de inocência.',
        C: 'Incorreta. Polícia não decreta prisão civil.',
        D: 'Incorreta. Banimento e exílio arbitrário são proibidos.',
        E: 'Incorreta. Artigo 5º veda tortura de forma absoluta.'
      },
      bizuPMBA: 'Bizu de Direitos Humanos: Os artigos 1º ao 11 da DUDH são os mais cobrados pela FCC. A vedação à tortura e à prisão arbitrária são cláusulas pétreas internacionais.',
      artigosCitados: ['DUDH de 1948, Artigo 9º e Artigo 5º']
    }
  },
  {
    id: 'q-dh-2',
    numero: 18,
    banca: 'CESPE / Cebraspe',
    orgao: 'Polícia Militar',
    cargo: 'Soldado PM',
    ano: 2021,
    disciplina: 'Direitos Humanos',
    assunto: 'Pacto de San José da Costa Rica (CADH) e Audiência de Custódia',
    dificuldade: 'Média',
    enunciado: 'A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica, de 1969, promulgada no Brasil pelo Decreto nº 678/1992) prevê no seu artigo 7º garantias fundamentais relativas à liberdade pessoal. Dentre essas garantias, destaca-se que:',
    alternativas: [
      { id: 'A', texto: 'Toda pessoa detida tem o direito de ser conduzida, sem demora, à presença de um juiz ou outra autoridade autorizada por lei a exercer funções judiciais (audiência de custódia).' },
      { id: 'B', texto: 'É lícita a prisão perpétua para indivíduos que cometam crimes contra o patrimônio de bancos estatais.' },
      { id: 'C', texto: 'A incomunicabilidade do preso por até trinta dias pode ser decretada pelo comandante da guarda policial sem aviso ao juiz.' },
      { id: 'D', texto: 'A prisão civil de depositário infiel é obrigatória e deve ser executada prioritariamente pelas forças policiais.' },
      { id: 'E', texto: 'O indivíduo privado de sua liberdade perde o direito de ser assistido por advogado durante a fase de inquérito.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Rafael Barretto',
      cargo: 'Direitos Humanos',
      analiseGeral: 'Artigo 7.5 do Pacto de San José: "Toda pessoa detida ou retida deve ser conduzida, sem demora, à presença de um juiz...". Foi essa norma que deu origem à obrigatoriedade das AUDIÊNCIAS DE CUSTÓDIA no Brasil.',
      justificativaAlternativas: {
        A: 'CORRETA. Base internacional da audiência de custódia.',
        B: 'Incorreta. O ordenamento brasileiro e o Pacto não admitem prisão perpétua.',
        C: 'Incorreta. A CF veda incomunicabilidade (Art. 136, § 3º, IV).',
        D: 'Incorreta. Súmula Vinculante 25 do STF declarou ilícita a prisão do depositário infiel.',
        E: 'Incorreta. Assistência de advogado é garantia basilar inafastável.'
      },
      bizuPMBA: 'Bizu do Pacto de San José: Depositário Infiel = NÃO PODE MAIS SER PRESO (Súmula Vinculante 25). Audiência de Custódia = OBRIGATÓRIA perante Juiz!',
      artigosCitados: ['CADH (Pacto de San José), Art. 7.5', 'Súmula Vinculante nº 25 do STF']
    }
  },

  // =========================================================================
  // 7. GEOGRAFIA DA BAHIA
  // =========================================================================
  {
    id: 'q-geo-1',
    numero: 19,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Geografia da Bahia',
    assunto: 'Quadro Natural: Biomas e Bacias Hidrográficas Baianas',
    dificuldade: 'Média',
    enunciado: 'O estado da Bahia apresenta extensa diversidade física e ambiental, abrigando três importantes biomas brasileiros. Sobre o relevo, clima e hidrografia do território baiano, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'A Caatinga ocupa exclusivamente a faixa litorânea de Salvador, sob influência direta das massas de ar equatoriais úmidas.' },
      { id: 'B', texto: 'O Rio São Francisco atravessa o estado da Bahia e tem papel estratégico na geração de energia hidrelétrica (como em Sobradinho e Paulo Afonso) e no polo de fruticultura irrigada no Vale do São Francisco.' },
      { id: 'C', texto: 'A Chapada Diamantina localiza-se na bacia do Rio Amazonas e não possui nascentes de rios que correm para o território baiano.' },
      { id: 'D', texto: 'O clima predominante em todo o território baiano é o subtropical úmido, caracterizado por invernos rigorosos com queda de neve regular.' },
      { id: 'E', texto: 'A Bahia não possui saída para o Oceano Atlântico, dependendo integralmente do porto de Santos para o escoamento de sua produção.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Marcelo Bahia',
      cargo: 'Geógrafo e Professor de Geografia Regional',
      analiseGeral: 'O Rio São Francisco ("Velho Chico") é a espinha dorsal hidrográfica da Bahia: represa de Sobradinho, usinas do Complexo de Paulo Afonso e polo agrícola de Juazeiro.',
      justificativaAlternativas: {
        A: 'Incorreta. A Caatinga predomina no Sertão semiárido, no interior, não no litoral.',
        B: 'CORRETA. O Rio São Francisco é vital para energia e agricultura irrigada no Vale.',
        C: 'Incorreta. A Chapada Diamantina é o "coração das águas" da Bahia, gerando bacias como Paraguaçu e Rio de Contas.',
        D: 'Incorreta. Climas baianos são Tropical, Tropical Semiárido e Tropical Litorâneo Úmido.',
        E: 'Incorreta. A Bahia possui o maior litoral do Brasil, com cerca de 1.183 km de costa.'
      },
      bizuPMBA: 'Bizu da Geografia Baiana: A Bahia possui o MAIOR LITORAL DO BRASIL! E os 3 Biomas são: CAATINGA (maior área no semiárido), MATA ATLÂNTICA (faixa leste/litoral) e CERRADO (Oeste baiano - Barreiras/LEM).',
      artigosCitados: ['SEI - Superintendência de Estudos Econômicos e Sociais da Bahia']
    }
  },
  {
    id: 'q-geo-2',
    numero: 20,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Geografia da Bahia',
    assunto: 'Dinâmica Socioeconômica: O Agronegócio no Oeste Baiano',
    dificuldade: 'Fácil',
    enunciado: 'Nas últimas décadas, a região do Oeste Baiano, inserida no bioma Cerrado e abrangendo municípios como Barreiras e Luís Eduardo Magalhães, consolidou-se como um dos principais vetores econômicos do Estado da Bahia devido:',
    alternativas: [
      { id: 'A', texto: 'À extração intensiva de carvão mineral para a indústria automobilística do Recôncavo.' },
      { id: 'B', texto: 'À agricultura empresarial moderna, altamente mecanizada e de alta produtividade, voltada à exportação de grãos como soja e algodão.' },
      { id: 'C', texto: 'Ao turismo religioso voltado à peregrinação no arquipélago de Abrolhos.' },
      { id: 'D', texto: 'Ao cultivo de videiras exclusivamente artesanais nas encostas do Monte Pascoal.' },
      { id: 'E', texto: 'À implantação da maior refinaria de petróleo offshore do hemisfério norte.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Marcelo Bahia',
      cargo: 'Geógrafo',
      analiseGeral: 'O Oeste Baiano faz parte da região do MATOPIBA e se destaca nacional e internacionalmente na produção de grãos (soja, milho e algodão) com alta tecnologia.',
      justificativaAlternativas: {
        A: 'Incorreta. Não há mineração de carvão mineral de destaque em Barreiras.',
        B: 'CORRETA. Agro moderno, plano e mecanizado no Cerrado do Oeste.',
        C: 'Incorreta. Abrolhos é no litoral sul do estado (Caravelas).',
        D: 'Incorreta. Monte Pascoal é no extremo sul litorâneo (Porto Seguro).',
        E: 'Incorreta. O polo petroquímico e refinarias ficam em Camaçari e São Francisco do Conde.'
      },
      bizuPMBA: 'Bizu Econômico PMBA: Oeste Baiano (Barreiras / Luís Eduardo Magalhães) = CERRADO + SOJA + ALGODÃO + AGRONEGÓCIO. Já Camaçari = POLO INDUSTRIAL / PETROQUÍMICO!',
      artigosCitados: ['Geografia Econômica da Bahia / IBGE']
    }
  },

  // =========================================================================
  // 8. DIREITO PENAL & PENAL MILITAR
  // =========================================================================
  {
    id: 'q-penal-1',
    numero: 21,
    banca: 'VUNESP',
    orgao: 'Carreiras Policiais Militares',
    cargo: 'Soldado PM',
    ano: 2022,
    disciplina: 'Direito Penal & Penal Militar',
    assunto: 'Excludentes de Ilicitude - Legítima Defesa (Art. 23 e 25 do CP)',
    dificuldade: 'Média',
    enunciado: 'Durante um patrulhamento ostensivo no centro de Salvador, uma guarnição da Polícia Militar depara-se com um assaltante armado que mantinha uma funcionária como refém sob a mira de um revólver, ameaçando disparar contra sua cabeça caso os policiais se aproximassem. Diante do iminente risco de morte da vítima, o atirador policial efetua um disparo incapacitante contra o agressor, neutralizando a ameaça e salvando a refém. Nos termos do Código Penal Brasileiro (Art. 25, parágrafo único, incluído pelo Pacote Anticrime - Lei 13.964/2019), a conduta do policial está acobertada pela excludente de ilicitude da:',
    alternativas: [
      { id: 'A', texto: 'Coação moral irresistível.' },
      { id: 'B', texto: 'Legítima defesa de terceiro.' },
      { id: 'C', texto: 'Inimputabilidade circunstancial.' },
      { id: 'D', texto: 'Obediência hierárquica putativa.' },
      { id: 'E', texto: 'Transgressão disciplinar atenuada.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Capitão PMBA Dr. Rodrigo Dantas',
      cargo: 'Promotor e Instrutor de Tiro Policial e Direito Penal',
      analiseGeral: 'Artigo 25, Parágrafo Único do Código Penal: "Observados os requisitos previstos no caput deste artigo, considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes".',
      justificativaAlternativas: {
        A: 'Incorreta. Coação moral irresistível é excludente de culpabilidade.',
        B: 'CORRETA. É expressamente legítima defesa de terceiro, com previsão expressa no parágrafo único do art. 25 do CP.',
        C: 'Incorreta. Inimputabilidade refere-se à capacidade mental/etária do agente.',
        D: 'Incorreta. Obediência hierárquica é excludente de culpabilidade.',
        E: 'Incorreta. A ação foi legal e em cumprimento das normas de segurança.'
      },
      bizuPMBA: 'Bizu Penal PMBA: O Pacote Anticrime (Lei 13.964/19) inseriu o parágrafo único no art. 25: Policial militar que abate agressor para salvar REFÉM atua em LEGÍTIMA DEFESA!',
      artigosCitados: ['Código Penal Brasileiro, Art. 25, Parágrafo Único']
    }
  },
  {
    id: 'q-penal-2',
    numero: 22,
    banca: 'CESPE / Cebraspe',
    orgao: 'Polícia Militar',
    cargo: 'Soldado PM',
    ano: 2021,
    disciplina: 'Direito Penal & Penal Militar',
    assunto: 'Crimes Militares em Espécie: Motim e Revolta (Art. 149 do CPM)',
    dificuldade: 'Difícil',
    enunciado: 'Nos termos do Código Penal Militar (Decreto-Lei nº 1.001/1969), reunirem-se militares agindo contra a ordem recebida de superior, ou recusando obediência a superior, configura crime militar. Se os agentes estiverem armados, o crime praticado é tipificado como:',
    alternativas: [
      { id: 'A', texto: 'Insubmissão qualificada.' },
      { id: 'B', texto: 'Revolta.' },
      { id: 'C', texto: 'Deserção simultânea.' },
      { id: 'D', texto: 'Abandono de posto simples.' },
      { id: 'E', texto: 'Desacato militar residual.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Major PMBA Carlos Eduardo',
      cargo: 'Direito Penal Militar',
      analiseGeral: 'Artigo 149 do Código Penal Militar: Tipifica o Motim (reunirem-se militares...). O Parágrafo Único diz textualmente: "Se os agentes estão armados: Pena - reclusão de oito a vinte anos, com exclusão das forças armadas ou demissão da polícia militar. CRIME: REVOLTA".',
      justificativaAlternativas: {
        A: 'Incorreta. Insubmissão é crime de recusa à incorporação inicial.',
        B: 'CORRETA. Motim de militares armados chama-se REVOLTA!',
        C: 'Incorreta. Deserção é ausentar-se sem licença por mais de 8 dias (art. 187).',
        D: 'Incorreta. Abandono de posto é afastar-se do local de serviço (art. 195).',
        E: 'Incorreta. Desacato ofende a autoridade militar individual.'
      },
      bizuPMBA: 'Bizu Militar: Militares desarmados reunidos desobedecendo = MOTIM. Militares ARMADOS reunidos desobedecendo = REVOLTA! (Grave: "Revolta = Motim com Revolver / Armas").',
      artigosCitados: ['Código Penal Militar (Decreto-Lei 1.001/1969), Art. 149, Parágrafo Único']
    }
  },

  // =========================================================================
  // 9. RACIOCÍNIO LÓGICO & MATEMÁTICA
  // =========================================================================
  {
    id: 'q-rlm-1',
    numero: 23,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Raciocínio Lógico & Matemática',
    assunto: 'Lógica Proposicional: Negação de Proposição Condicional (Se... então)',
    dificuldade: 'Média',
    enunciado: 'Considere a seguinte afirmação lógica de uma instrução policial: "Se o policial militar usa colete balístico, então ele está seguro." Assinale a alternativa que apresenta a correta negação lógica dessa afirmação:',
    alternativas: [
      { id: 'A', texto: 'Se o policial militar não usa colete balístico, então ele não está seguro.' },
      { id: 'B', texto: 'O policial militar usa colete balístico e ele não está seguro.' },
      { id: 'C', texto: 'O policial militar não usa colete balístico e está seguro.' },
      { id: 'D', texto: 'Se o policial militar está seguro, então ele usa colete balístico.' },
      { id: 'E', texto: 'O policial militar usa colete balístico ou ele não está seguro.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Renato Oliveira',
      cargo: 'Mestre em Raciocínio Lógico e Estatística',
      analiseGeral: 'Para negar uma proposição condicional "Se P, então Q", aplica-se a regra do MANÉ: Mantém a primeira (P) E nega a segunda (~Q). Portanto: ~(P -> Q) <=> P ^ ~Q.',
      justificativaAlternativas: {
        A: 'Incorreta. Isso é a contrapositiva invertida, não a negação.',
        B: 'CORRETA. Mantém a 1ª ("O policial usa colete") + conectivo "E" + nega a 2ª ("ele NÃO está seguro").',
        C: 'Incorreta. Negou a primeira e manteve a segunda.',
        D: 'Incorreta. Apenas inverteu a ordem da condicional.',
        E: 'Incorreta. Usou o conectivo "OU" em vez de "E".'
      },
      bizuPMBA: 'Bizu do MANÉ no Raciocínio Lógico: Negação do "SE ENTÃO": MAném a primeira E NEga a segunda! Se P então Q -> Vira: P e ~Q!',
      artigosCitados: ['Lógica Proposicional - Tabela Verdade e Equivalências']
    }
  },
  {
    id: 'q-rlm-2',
    numero: 24,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Raciocínio Lógico & Matemática',
    assunto: 'Porcentagem e Estatística de Ocorrências Policiais',
    dificuldade: 'Fácil',
    enunciado: 'Em determinado batalhão da Polícia Militar da Bahia, 120 policiais estavam escalados para uma operação de Carnaval em Salvador. Desses, 40% foram alocados no Circuito Barra-Ondina (Dodô), 35% no Circuito Campo Grande (Osmar) e o restante foi destinado à reserva tática no quartel. O número de policiais na reserva tática foi de:',
    alternativas: [
      { id: 'A', texto: '25 policiais.' },
      { id: 'B', texto: '30 policiais.' },
      { id: 'C', texto: '35 policiais.' },
      { id: 'D', texto: '48 policiais.' },
      { id: 'E', texto: '20 policiais.' }
    ],
    respostaCorreta: 'B',
    comentario: {
      professor: 'Prof. Renato Oliveira',
      cargo: 'Raciocínio Lógico',
      analiseGeral: 'Cálculo direto de porcentagem: Total = 100%. Circuito Dodô = 40%. Circuito Osmar = 35%. Soma = 40% + 35% = 75%. O restante para a reserva tática é 100% - 75% = 25%. Calculando 25% de 120: 120 / 4 = 30 policiais.',
      justificativaAlternativas: {
        A: 'Incorreta. 25 é a porcentagem (25%), não a quantidade de policiais.',
        B: 'CORRETA. 25% de 120 policiais = 0,25 * 120 = 30 policiais!',
        C: 'Incorreta. Erro aritmético.',
        D: 'Incorreta. 48 policiais representam os 40% alocados na Barra-Ondina.',
        E: 'Incorreta. Erro de cálculo.'
      },
      bizuPMBA: 'Bizu de Porcentagem: 25% de qualquer valor é simplesmente DIVIDIR POR 4! 120 dividido por 4 = 30 policiais exatos.',
      artigosCitados: ['Matemática Básica / Edital PMBA']
    }
  }
];
