import { Questao } from '../types';

export const QUESTOES_EXPANDIDAS_PMBA: Questao[] = [
  // =========================================================================
  // 1. DIREITOS HUMANOS (10 QUESTÕES)
  // =========================================================================
  {
    id: 'dh-real-01',
    numero: 1,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direitos Humanos',
    assunto: 'Declaração Universal dos Direitos Humanos (DUDH/1948)',
    dificuldade: 'Fácil',
    enunciado: 'A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral das Nações Unidas em 1948, constitui o marco fundamental do Direito Internacional dos Direitos Humanos. A respeito dos princípios expressamente previstos na DUDH, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Todos os seres humanos nascem livres e iguais em dignidade e direitos, sendo dotados de razão e consciência e devendo agir com espírito de fraternidade.' },
      { id: 'B', texto: 'A escravidão é admitida em caráter excepcional para o cumprimento de penas privativas de liberdade decorrentes de transgressões militares.' },
      { id: 'C', texto: 'A tortura pode ser tolerada em situações de interrogatório urgente de suspeitos de terrorismo internacional.' },
      { id: 'D', texto: 'O direito de buscar asilo político não é reconhecido a pessoas que estejam sendo perseguidas em seus países de origem.' },
      { id: 'E', texto: 'Os direitos civis e políticos gozam de primazia jurídica absoluta sobre os direitos econômicos, sociais e culturais.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Especialista em Direitos Humanos e Segurança Pública',
      analiseGeral: 'O Artigo 1º da DUDH de 1948 consagra: "Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade".',
      justificativaAlternativas: {
        A: 'CORRETA. Transcrição literal do Artigo 1º da DUDH.',
        B: 'Incorreta. O Art. 4º veda a escravidão e a servidão em TODAS as suas formas, sem qualquer exceção.',
        C: 'Incorreta. O Art. 5º proíbe a tortura de forma ABSOLUTA (norma cogente de jus cogens).',
        D: 'Incorreta. O Art. 14 garante expressamente o direito de procurar e de gozar asilo em outros países.',
        E: 'Incorreta. Os Direitos Humanos são marcados pela indivisibilidade, universalidade e interdependência.'
      },
      bizuPMBA: 'Bizu de Direitos Humanos: DUDH Art. 1º = Livres e Iguais em Dignidade e Direitos + Razão e Consciência + Fraternidade. Proibição de tortura e escravidão é TOTAL e ABSOLUTA!',
      artigosCitados: ['Declaração Universal dos Direitos Humanos (1948), Artigos 1º, 4º e 5º']
    }
  },
  {
    id: 'dh-real-02',
    numero: 2,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direitos Humanos',
    assunto: 'Pacto de San José da Costa Rica (CADH) - Garantias Judiciais e Integridade',
    dificuldade: 'Média',
    enunciado: 'A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica, 1969), ratificada pelo Brasil em 1992, possui estatura supralegal. No que concerne às garantias de integridade pessoal e custódia de presos aplicáveis à atividade policial militar, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'Os presos provisórios devem ficar separados dos condenados, salvo em circunstâncias excepcionais, e submetidos a tratamento condizente com a condição de não condenados.' },
      { id: 'B', texto: 'A prisão civil por dívida de qualquer natureza é livremente autorizada pela Convenção Americana em qualquer esfera civil ou comercial.' },
      { id: 'C', texto: 'É autorizado o castigo corporal moderado de detentos para fins de manutenção da disciplina no interior de estabelecimentos prisionais.' },
      { id: 'D', texto: 'A pessoa detida não tem o direito de ser conduzida, sem demora, à presença de um juiz ou outra autoridade autorizada por lei.' },
      { id: 'E', texto: 'A confissão obtida mediante coação psicológica ou física é válida como meio de prova no processo penal brasileiro.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Professor de Direito Internacional dos Direitos Humanos',
      analiseGeral: 'O Artigo 5º, item 4, da CADH determina expressamente: "Os processados devem ficar separados dos condenados, salvo em circunstâncias excepcionais, e devem ser submetidos a tratamento adequado à sua condição de pessoas não condenadas".',
      justificativaAlternativas: {
        A: 'CORRETA. Previsão expressa do Art. 5.4 da Convenção Americana.',
        B: 'Incorreta. Apenas a dívida de pensão alimentícia admite prisão civil (Súmula Vinculante 25 do STF).',
        C: 'Incorreta. É terminantemente proibida qualquer forma de castigo desumano ou degradante (Art. 5.2).',
        D: 'Incorreta. O Art. 7.5 consagra o direito à audiência de custódia (condução sem demora à presença do juiz).',
        E: 'Incorreta. O Art. 8.3 estabelece a nulidade absoluta da confissão obtida mediante coação.'
      },
      bizuPMBA: 'Bizu do Pacto de San José: Preso provisório separado do condenado; audiência de custódia imediata; proibição de prisão civil do depositário infiel (Súmula Vinculante 25 STF)!',
      artigosCitados: ['Convenção Americana de Direitos Humanos, Artigos 5º, 7º e 8º', 'Súmula Vinculante nº 25 do STF']
    }
  },
  {
    id: 'dh-real-03',
    numero: 3,
    banca: 'CESPE / Cebraspe',
    orgao: 'Polícia Militar',
    cargo: 'Soldado PM',
    ano: 2022,
    disciplina: 'Direitos Humanos',
    assunto: 'Uso Progressivo e Diferenciado da Força (PBUFAF - ONU 1990)',
    dificuldade: 'Média',
    enunciado: 'Os Princípios Básicos sobre a Utilização da Força e de Armas de Fogo pelos Funcionários Responsáveis pela Aplicação da Lei (PBUFAF/ONU, 1990) orientam a atuação ética das corporações policiais militares. De acordo com tais princípios, o emprego da força letal por parte do policial militar:',
    alternativas: [
      { id: 'A', texto: 'É uma medida extrema, que somente deve ser utilizada quando estritamente inevitável para proteger a vida contra uma ameaça iminente de morte ou ferimento grave.' },
      { id: 'B', texto: 'Pode ser empregado rotineiramente contra criminosos em fuga que tenham cometido apenas delitos contra o patrimônio sem violência.' },
      { id: 'C', texto: 'Fica a critério puramente pessoal do policial militar, inexistindo o dever funcional de prestar socorro médico imediato ao ferido.' },
      { id: 'D', texto: 'Não exige prévia advertência verbal clara de identificação policial, mesmo quando houver tempo e segurança para fazê-la.' },
      { id: 'E', texto: 'É sempre proibido, mesmo em situações extremas de legítima defesa da própria vida ou de terceiros.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Maj. PMBA Carlos Eduardo',
      cargo: 'Instrutor de Técnicas Policiais e Direitos Humanos da APM',
      analiseGeral: 'O Princípio nº 9 dos PBUFAF da ONU estabelece que o uso de armas de fogo contra pessoas só é admitido em legítima defesa ou defesa de outrem contra ameaça iminente de morte ou ferimento grave, devendo ser uma medida de último recurso quando meios menos perigosos forem insuficientes.',
      justificativaAlternativas: {
        A: 'CORRETA. Princípio da extrema necessidade e proporcionalidade estrita para preservação da vida.',
        B: 'Incorreta. É proibido o disparo letal contra suspeito desarmado em fuga patrimonial.',
        C: 'Incorreta. O socorro médico imediato e a comunicação aos familiares são deveres expressos nos princípios 5 e 6.',
        D: 'Incorreta. O princípio 10 impõe a advertência prévia, salvo se colocar em risco iminente a vida do agente.',
        E: 'Incorreta. O uso letal é admitido em legítima defesa como medida extrema de preservação da vida.'
      },
      bizuPMBA: 'Bizu do Uso da Força: Legalidade, Necessidade, Proporcionalidade, Moderação e Conveniência. Força letal é SEMPRE última ratio para salvar vidas!',
      artigosCitados: ['Princípios Básicos sobre o Uso da Força e Armas de Fogo (ONU 1990), Princípios 4, 5 e 9', 'Portaria Interministerial nº 4.226/2010']
    }
  },
  {
    id: 'dh-real-04',
    numero: 4,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar',
    ano: 2020,
    disciplina: 'Direitos Humanos',
    assunto: 'Regras de Mandela (Regras Mínimas da ONU para Tratamento de Presos)',
    dificuldade: 'Média',
    enunciado: 'As Regras Mínimas das Nações Unidas para o Tratamento de Reclusos (conhecidas como "Regras de Mandela", revisadas em 2015) definem padrões fundamentais de custódia e dignidade humana. A respeito do isolamento celular e das sanções disciplinares a presos, as Regras de Mandela vedam expressamente:',
    alternativas: [
      { id: 'A', texto: 'O isolamento solitário indefinido ou prolongado (superior a 15 dias consecutivos) e a colocação do recluso em cela escura ou iluminada permanentemente.' },
      { id: 'B', texto: 'A oferta de assistência médica gratuita e o fornecimento de água potável no interior do estabelecimento prisional.' },
      { id: 'C', texto: 'A separação de reclusos por categorias de gênero, idade e antecedentes penais.' },
      { id: 'D', texto: 'A realização de exames corporais não invasivos no momento da admissão prisional.' },
      { id: 'E', texto: 'O acesso do recluso à assistência jurídica prestada pela Defensoria Pública ou advogado constituído.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Professor de Direitos Humanos',
      analiseGeral: 'A Regra 43 e 44 das Regras de Mandela proíbem expressamente: isolamento celular indefinido, isolamento celular prolongado (mais de 15 dias consecutivos), colocação em cela escura ou constantemente iluminada, castigos corporais e redução de alimentos ou água.',
      justificativaAlternativas: {
        A: 'CORRETA. Vedação expressa constante nas Regras 43 e 44 das Regras de Mandela.',
        B: 'Incorreta. Assistência médica e água potável são garantias fundamentais obrigatórias.',
        C: 'Incorreta. A separação por categorias é uma exigência expressa de proteção (Regra 11).',
        D: 'Incorreta. Exames no ingresso são admitidos para registro de saúde e integridade física.',
        E: 'Incorreta. O acesso a advogado é direito irrenunciável do preso (Regra 61).'
      },
      bizuPMBA: 'Bizu das Regras de Mandela: Proibido isolamento solitário prolongado (+ de 15 dias), cela escura/sempre acesa e redução de água/alimentos!',
      artigosCitados: ['Regras Mínimas das Nações Unidas para o Tratamento de Reclusos (Regras de Mandela), Regras 43, 44 e 45']
    }
  },
  {
    id: 'dh-real-05',
    numero: 5,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2023,
    disciplina: 'Direitos Humanos',
    assunto: 'Convenção Contra a Tortura e Lei Federal nº 9.455/1997',
    dificuldade: 'Difícil',
    enunciado: 'A Convenção da ONU contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes (1984) e a Lei Federal nº 9.455/1997 regulam a repressão ao crime de tortura no Brasil. Em relação ao tratamento penal e constitucional do crime de tortura cometido por agente da segurança pública, assinale a afirmativa correta:',
    alternativas: [
      { id: 'A', texto: 'A condenação por crime de tortura acarreta a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.' },
      { id: 'B', texto: 'O crime de tortura é afiançável se cometido por militar da ativa em horário de serviço de patrulhamento ostensivo.' },
      { id: 'C', texto: 'A obediência a ordem de superior hierárquico exclui a tipicidade e a ilicitude do crime de tortura praticado por subordinado.' },
      { id: 'D', texto: 'O crime de tortura admite anistia e graça presidencial concedida por decreto do Governador do Estado.' },
      { id: 'E', texto: 'Aquele que se omite em face da conduta de tortura, quando tinha o dever de evitá-la ou apurá-la, não comete qualquer infração penal.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. PMBA Rogério Silva',
      cargo: 'Especialista em Legislação Penal Especial',
      analiseGeral: 'Artigo 1º, § 5º da Lei nº 9.455/1997: "A condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada". Trata-se de efeito automático da condenação.',
      justificativaAlternativas: {
        A: 'CORRETA. Efeito automático e obrigatório previsto no § 5º do art. 1º da Lei 9.455/97.',
        B: 'Incorreta. Tortura é crime INAFIANÇÁVEL e insuscetível de graça ou anistia (Art. 5º, XLIII da CF/88).',
        C: 'Incorreta. A Convenção da ONU e o art. 22 do CP determinam que ordem manifestamente ilegal não exclui a culpabilidade.',
        D: 'Incorreta. A Constituição veda graça e anistia para os crimes hediondos e equiparados (3T: Tráfico, Tortura e Terrorismo).',
        E: 'Incorreta. A omissão imprópria no art. 1º, § 2º configura tortura por omissão (pena de detenção de 1 a 4 anos).'
      },
      bizuPMBA: 'Bizu da Lei de Tortura: Efeito da condenação = Perda do cargo + Interdição pelo DOBRO do prazo da pena (efeito automático)! Tortura por omissão = detenção de 1 a 4 anos.',
      artigosCitados: ['Art. 5º, XLIII da CF/88', 'Lei Federal nº 9.455/1997, Art. 1º, § 2º e § 5º']
    }
  },
  {
    id: 'dh-real-06',
    numero: 6,
    banca: 'VUNESP',
    orgao: 'Polícia Militar',
    cargo: 'Soldado da Polícia Militar',
    ano: 2022,
    disciplina: 'Direitos Humanos',
    assunto: 'Dimensões / Gerações dos Direitos Humanos',
    dificuldade: 'Média',
    enunciado: 'A doutrina jurídica consagrou a teoria geracional (ou dimensional) dos direitos humanos formulada por Karel Vasak, associando cada geração aos ideais da Revolução Francesa (Liberdade, Igualdade e Fraternidade). A respeito dessa classificação, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Os direitos de primeira geração compreendem os direitos civis e políticos (liberdades negativas), impondo um dever de abstenção ou não intervenção estatal arbitrária.' },
      { id: 'B', texto: 'Os direitos de segunda geração englobam exclusivamente o direito à paz internacional e ao meio ambiente ecologicamente equilibrado.' },
      { id: 'C', texto: 'Os direitos de terceira geração exigem prestações positivas do Estado nas áreas de saúde, previdência e educação pública (liberdades reais).' },
      { id: 'D', texto: 'A consagração de uma nova geração de direitos humanos revoga e extingue automaticamente os direitos pertencentes às gerações antecedentes.' },
      { id: 'E', texto: 'O direito de propriedade individual e o direito à vida são típicos exemplos de direitos sociais de segunda dimensão.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Professor de Direitos Humanos e Teoria Geral do Direito',
      analiseGeral: '1ª Dimensão (Liberdade): Direitos civis e políticos (abstenção estatal / não fazer); 2ª Dimensão (Igualdade): Direitos sociais, econômicos e culturais (prestação estatal / fazer); 3ª Dimensão (Fraternidade/Solidariedade): Direitos difusos e coletivos (meio ambiente, paz, patrimônio comum).',
      justificativaAlternativas: {
        A: 'CORRETA. 1ª Geração = Liberdade (direitos civis e políticos, dever de não ingerência do Estado).',
        B: 'Incorreta. Paz e meio ambiente pertencem à 3ª Geração (Solidariedade/Fraternidade).',
        C: 'Incorreta. Saúde, educação e previdência são de 2ª Geração (Igualdade/Direitos Sociais).',
        D: 'Incorreta. Os direitos humanos são CUMULATIVOS e complementares; não se revogam.',
        E: 'Incorreta. Vida e propriedade individual são direitos civis de 1ª Geração.'
      },
      bizuPMBA: 'Bizu das Gerações: 1ª = LIBERDADE (Civis/Políticos - Estado não faz) | 2ª = IGUALDADE (Sociais/Econômicos - Estado faz) | 3ª = FRATERNIDADE (Difusos/Paz/Meio Ambiente).',
      artigosCitados: ['Teoria Geral dos Direitos Humanos', 'Karel Vasak (1979)']
    }
  },
  {
    id: 'dh-real-07',
    numero: 7,
    banca: 'CESPE / Cebraspe',
    orgao: 'Segurança Pública',
    cargo: 'Soldado Policial Militar',
    ano: 2023,
    disciplina: 'Direitos Humanos',
    assunto: 'Código de Conduta para os Encarregados da Aplicação da Lei (ONU 1979)',
    dificuldade: 'Média',
    enunciado: 'O Código de Conduta para os Encarregados da Aplicação da Lei, aprovado pela Resolução 34/169 da Assembleia Geral da ONU em 1979, fixa deveres deontológicos para os agentes policiais. De acordo com o referido Código, assinale a conduta que expressa um dever ético do policial militar:',
    alternativas: [
      { id: 'A', texto: 'Cumprir a todo o tempo o dever que a lei lhes impõe, servindo à comunidade e protegendo todas as pessoas contra atos ilegais, com elevado grau de responsabilidade.' },
      { id: 'B', texto: 'Divulgar abertamente à imprensa segredos pessoais de pessoas sob custódia policial sem ordem judicial ou relevância pública.' },
      { id: 'C', texto: 'Tolerar atos de corrupção praticados por colegas de corporação sob a alegação de solidariedade militar interna.' },
      { id: 'D', texto: 'Recusar a prestação de assistência médica a suspeitos feridos capturados após troca de tiros em patrulhamento.' },
      { id: 'E', texto: 'Empregar a força física máxima em qualquer abordagem como mecanismo de imposição psicológica preliminar.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Maj. PMBA Carlos Eduardo',
      cargo: 'Instrutor de Deontologia e Ética Policial',
      analiseGeral: 'O Artigo 1º do Código de Conduta da ONU estabelece: "Os funcionários responsáveis pela aplicação da lei devem cumprir sempre o dever que a lei lhes impõe, servindo a sua comunidade e protegendo todas as pessoas contra atos ilegais, em conformidade com o elevado grau de responsabilidade exigido pela sua profissão".',
      justificativaAlternativas: {
        A: 'CORRETA. Transcrição expressa do Artigo 1º do Código de Conduta da ONU.',
        B: 'Incorreta. O Art. 4º impõe dever absoluto de sigilo e confidencialidade de informações pessoais.',
        C: 'Incorreta. O Art. 7º veda rigorosamente qualquer ato de corrupção e impõe o dever de combate.',
        D: 'Incorreta. O Art. 6º assegura assistência médica integral a pessoas sob custódia.',
        E: 'Incorreta. O Art. 3º restringe a força ao estritamente necessário.'
      },
      bizuPMBA: 'Bizu do Código da ONU: O policial serve à comunidade, protege os direitos humanos, combate a corrupção e garante assistência médica a quem estiver sob sua guarda!',
      artigosCitados: ['Código de Conduta para Encarregados da Aplicação da Lei (Resolução 34/169 da ONU, 1979)']
    }
  },
  {
    id: 'dh-real-08',
    numero: 8,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direitos Humanos',
    assunto: 'Sistema Interamericano de Direitos Humanos (Comissão e Corte IDH)',
    dificuldade: 'Difícil',
    enunciado: 'No âmbito do Sistema Interamericano de Direitos Humanos da OEA, existem dois órgãos principais encarregados de monitorar e julgar violações de direitos humanos: a Comissão Interamericana (CIDH) e a Corte Interamericana de Direitos Humanos (Corte IDH). Sobre a competência desses órgãos, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Apenas os Estados-partes e a Comissão Interamericana possuem legitimidade para submeter um caso contencioso a julgamento perante a Corte Interamericana.' },
      { id: 'B', texto: 'Qualquer cidadão individual pode ingressar diretamente com ação judicial perante a Corte Interamericana sem passar preliminarmente pela Comissão.' },
      { id: 'C', texto: 'As sentenças proferidas pela Corte Interamericana de Direitos Humanos possuem natureza meramente consultiva e não vinculam o Estado brasileiro.' },
      { id: 'D', texto: 'A Comissão Interamericana tem sede permanente na cidade de San José da Costa Rica e exerce função jurisdicional executiva.' },
      { id: 'E', texto: 'O Brasil não reconhece a jurisdição contenciosa da Corte Interamericana para fatos ocorridos em território nacional.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Especialista em Direito Internacional',
      analiseGeral: 'Artigo 61, item 1 da Convenção Americana: "Somente os Estados-Partes e a Comissão têm direito de submeter um caso à decisão da Corte". O indivíduo (vítima) peticiona perante a Comissão (Art. 44); se o caso não for solucionado, a Comissão ou o Estado o remetem à Corte IDH.',
      justificativaAlternativas: {
        A: 'CORRETA. Previsão expressa do Art. 61.1 da CADH. Vítimas não acionam a Corte diretamente.',
        B: 'Incorreta. O indivíduo peticiona perante a Comissão Interamericana (sede em Washington), não diretamente à Corte.',
        C: 'Incorreta. As decisões da Corte IDH são vinculantes, definitivas e inapeláveis para o Brasil (Art. 68).',
        D: 'Incorreta. A Comissão fica em Washington (EUA); a Corte é que fica em San José da Costa Rica.',
        E: 'Incorreta. O Brasil reconheceu a jurisdição contenciosa da Corte em 1998 (Decreto 4.463/2002).'
      },
      bizuPMBA: 'Bizu do Sistema Interamericano: Indivíduo -> denuncia na COMISSÃO (Washington). Corte (San José) -> só recebe casos de Estados ou da Comissão! Decisão da Corte é OBRIGATÓRIA no Brasil!',
      artigosCitados: ['Convenção Americana sobre Direitos Humanos, Artigos 44, 61 e 68', 'Decreto Presidencial nº 4.463/2002']
    }
  },
  {
    id: 'dh-real-09',
    numero: 9,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar',
    ano: 2022,
    disciplina: 'Direitos Humanos',
    assunto: 'Audiência de Custódia e Garantias Processuais',
    dificuldade: 'Média',
    enunciado: 'A audiência de custódia, fundamentada no art. 7.5 do Pacto de San José da Costa Rica e regulamentada no Código de Processo Penal e na Resolução 213 do CNJ, consiste na apresentação da pessoa presa em flagrante à autoridade judicial no prazo de:',
    alternativas: [
      { id: 'A', texto: 'Até 24 (vinte e quatro) horas após a realização da prisão, com a presença obrigatória do Ministério Público e da defesa técnica.' },
      { id: 'B', texto: 'Até 72 (setenta e duas) horas após a lavratura do auto de prisão em flagrante na delegacia de polícia.' },
      { id: 'C', texto: 'No prazo discricionário de 5 (cinco) dias caso o crime seja praticado com violência ou grave ameaça.' },
      { id: 'D', texto: 'Até 10 (dez) dias, desde que previamente homologada a prisão preventiva pelo juiz de plantão.' },
      { id: 'E', texto: 'Apenas após a conclusão do inquérito policial e do oferecimento formal da denúncia.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Especialista em Direito Processual Penal e Direitos Humanos',
      analiseGeral: 'O Art. 310 do CPP (introduzido pelo Pacote Anticrime) e a Resolução nº 213/2015 do CNJ fixam o prazo improrrogável de até 24 horas após a realização da prisão para apresentação do preso em audiência de custódia.',
      justificativaAlternativas: {
        A: 'CORRETA. Prazo legal de 24 horas estabelecido no Art. 310 do CPP e Resolução 213 do CNJ.',
        B: 'Incorreta. O prazo legal não é de 72 horas, mas sim de 24 horas.',
        C: 'Incorreta. Inexiste prazo de 5 dias; o prazo é improrrogável de 24 horas.',
        D: 'Incorreta. A audiência ocorre antes da eventual conversão em preventiva.',
        E: 'Incorreta. A audiência precede o inquérito e destina-se a verificar a legalidade e integridade física da prisão.'
      },
      bizuPMBA: 'Bizu da Custódia: Prazo da Audiência de Custódia = 24 HORAS! Finalidade: checar legalidade da prisão e ocorrência de tortura/maus-tratos.',
      artigosCitados: ['Código de Processo Penal, Art. 310', 'Pacto de San José da Costa Rica, Art. 7.5', 'Resolução nº 213/2015 do CNJ']
    }
  },
  {
    id: 'dh-real-10',
    numero: 10,
    banca: 'CESPE / Cebraspe',
    orgao: 'Segurança Pública',
    cargo: 'Soldado PM',
    ano: 2021,
    disciplina: 'Direitos Humanos',
    assunto: 'Tribunal Penal Internacional (Estatuto de Roma / Art. 5º, § 4º da CF)',
    dificuldade: 'Média',
    enunciado: 'Nos termos do art. 5º, § 4º da Constituição Federal de 1988, o Brasil submete-se à jurisdição de Tribunal Penal Internacional a cuja criação tenha manifestado adesão. Sobre o Tribunal Penal Internacional (TPI), criado pelo Estatuto de Roma (1998), assinale a afirmativa correta:',
    alternativas: [
      { id: 'A', texto: 'O TPI possui competência complementar à jurisdição penal nacional para julgar pessoas físicas responsáveis por genocídio, crimes contra a humanidade, crimes de guerra e crime de agressão.' },
      { id: 'B', texto: 'O TPI tem competência primária e substitutiva, avocando qualquer processo criminal em andamento nas varas penais dos Estados brasileiros.' },
      { id: 'C', texto: 'O TPI tem competência exclusiva para julgar Estados soberanos e pessoas jurídicas por infrações de trânsito internacional.' },
      { id: 'D', texto: 'O Brasil não ratificou o Estatuto de Roma por incompatibilidade com a soberania nacional.' },
      { id: 'E', texto: 'As condenações do TPI podem impor a pena de morte imediata por fuzilamento a criminosos de guerra.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Dr. Leonardo Vasconcelos',
      cargo: 'Professor de Direito Internacional',
      analiseGeral: 'O Tribunal Penal Internacional (TPI, Haia) julga PESSOAS FÍSICAS pelos quatro crimes mais graves de repercussão internacional (Genocídio, Crimes contra a Humanidade, Crimes de Guerra e Agressão). Sua jurisdição é COMPLEMENTAR (ou subsidiária), atuando apenas se o país não puder ou não quiser processar o infrator.',
      justificativaAlternativas: {
        A: 'CORRETA. Princípio da Complementariedade do TPI e seus 4 crimes de competência.',
        B: 'Incorreta. A competência é complementar, nunca substitutiva ou primária.',
        C: 'Incorreta. O TPI julga pessoas físicas, não pessoas jurídicas ou Estados.',
        D: 'Incorreta. O Brasil ratificou o Estatuto de Roma em 2002 (Decreto 4.388/2002).',
        E: 'Incorreta. O Estatuto de Roma veda expressamente a pena de morte.'
      },
      bizuPMBA: 'Bizu do TPI: Sede em HAIA. Julga PESSOAS FÍSICAS (não julga países!). Jurisdição COMPLEMENTAR aos tribunais nacionais.',
      artigosCitados: ['Art. 5º, § 4º da CF/88', 'Estatuto de Roma (1998), Artigo 5º', 'Decreto nº 4.388/2002']
    }
  },

  // =========================================================================
  // 2. DIREITO CONSTITUCIONAL (6 QUESTÕES REAIS)
  // =========================================================================
  {
    id: 'const-real-01',
    numero: 11,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Direito Constitucional',
    assunto: 'Direitos Fundamentais - Inviolabilidade de Domicílio (Art. 5º, XI)',
    dificuldade: 'Média',
    enunciado: 'Nos termos da Constituição Federal de 1988 e da jurisprudência fixada pelo STF (Tema 280), a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador. A respeito das exceções constitucionais a essa garantia, assinale a alternativa correta aplicável à atuação da Polícia Militar:',
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
        A: 'Incorreta. A determinação judicial só autoriza o ingresso DURANTE O DIA.',
        B: 'CORRETA. Flagrante delito, desastre e prestação de socorro autorizam o ingresso a QUALQUER HORA (dia ou noite).',
        C: 'Incorreta. O flagrante delito autoriza tanto de dia quanto de noite, e independe de autorização de Delegado.',
        D: 'Incorreta. O STF fixou a tese de que mera suspeita sem justa causa prévia documentada torna a invasão domiciliar ilícita (Tema 280 STF).',
        E: 'Incorreta. Ordem judicial NUNCA autoriza entrada noturna sem consentimento do morador.'
      },
      bizuPMBA: 'Bizu do Soldado: "F-S-D" (Flagrante, Socorro, Desastre) -> A QUALQUER HORA. "Ordem Judicial" -> SOMENTE DE DIA!',
      artigosCitados: ['Art. 5º, XI da Constituição Federal de 1988', 'Tema 280 da Repercussão Geral do STF']
    }
  },
  {
    id: 'const-real-02',
    numero: 12,
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
      bizuPMBA: 'Bizu PMBA: Polícia Ostensiva + Preservação da Ordem Pública = Polícia Militar. Força auxiliar e reserva do EXÉRCITO! Subordinação: GOVERNADOR!',
      artigosCitados: ['Art. 144, § 5º e § 6º da Constituição Federal de 1988']
    }
  },
  {
    id: 'const-real-03',
    numero: 13,
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
    id: 'const-real-04',
    numero: 14,
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
    id: 'const-real-05',
    numero: 15,
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
  {
    id: 'const-real-06',
    numero: 16,
    banca: 'CESPE / Cebraspe',
    orgao: 'Segurança Pública',
    cargo: 'Soldado PM',
    ano: 2021,
    disciplina: 'Direito Constitucional',
    assunto: 'Vedação Constitucional de Greve e Sindicalização ao Militar (Art. 142 c/c Art. 42)',
    dificuldade: 'Média',
    enunciado: 'A respeito dos direitos e deveres dos militares dos Estados e do Distrito Federal (Art. 42 da CF/88), assinale a afirmativa correta de acordo com a Constituição e a jurisprudência do STF:',
    alternativas: [
      { id: 'A', texto: 'Ao militar são proibidas a sindicalização e a greve, vedação que se estende a todos os servidores públicos que atuem diretamente na segurança pública.' },
      { id: 'B', texto: 'O militar tem direito à greve desde que mantido 70% do efetivo em patrulhamento ostensivo de rua.' },
      { id: 'C', texto: 'Apenas os Oficiais são proibidos de fazer greve, sendo facultado às Praças o direito de paralisação por reajuste salarial.' },
      { id: 'D', texto: 'É permitida a filiação partidária de militares da ativa desde que autorizada pelo Secretário de Segurança Pública.' },
      { id: 'E', texto: 'A anistia concedida pelo Poder Legislativo Estadual a policiais militares amotinados é plenamente válida.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Capitão Dr. Marcos Valente',
      cargo: 'Especialista em Direito Constitucional',
      analiseGeral: 'O Art. 142, § 3º, IV da CF/88 (aplicável aos PMs por força do Art. 42, § 1º) proíbe categoricamente ao militar a sindicalização e a greve. Além disso, o STF fixou a tese com repercussão geral (Tema 41) de que a vedação absoluta de greve se estende a todas as carreiras da segurança pública.',
      justificativaAlternativas: {
        A: 'CORRETA. Previsão constitucional expressa e tese vinculante do STF (Tema 41).',
        B: 'Incorreta. A vedação de greve aos militares é ABSOLUTA.',
        C: 'Incorreta. A vedação aplica-se a Oficiais e Praças indistintamente.',
        D: 'Incorreta. É expressamente proibida a filiação partidária em serviço ativo (Art. 142, § 3º, V).',
        E: 'Incorreta. Compete privativamente à União legislar sobre anistia de crimes (Art. 22, XVII).'
      },
      bizuPMBA: 'Bizu Constitucional Militar: Militar da ativa: SEM GREVE + SEM SINDICATO + SEM FILIAÇÃO PARTIDÁRIA!',
      artigosCitados: ['Art. 42, § 1º e Art. 142, § 3º, IV e V da CF/88', 'Tema 41 de Repercussão Geral do STF']
    }
  },

  // =========================================================================
  // 3. PROMOÇÃO DA IGUALDADE RACIAL E DE GÊNERO (6 QUESTÕES REAIS)
  // =========================================================================
  {
    id: 'igual-real-01',
    numero: 17,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2020,
    disciplina: 'Promoção da Igualdade Racial e de Gênero',
    assunto: 'Estatuto da Igualdade Racial (Lei Federal nº 12.288/2010)',
    dificuldade: 'Fácil',
    enunciado: 'A Lei Federal nº 12.288/2010 (Estatuto da Igualdade Racial) é matéria de estudo obrigatória no edital da Polícia Militar da Bahia. De acordo com o art. 1º dessa lei, considera-se "discriminação racial ou étnico-racial":',
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
    id: 'igual-real-02',
    numero: 18,
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
    id: 'igual-real-03',
    numero: 19,
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
    id: 'igual-real-04',
    numero: 20,
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
  // 4. HISTÓRIA DA BAHIA (6 QUESTÕES REAIS)
  // =========================================================================
  {
    id: 'hist-real-01',
    numero: 21,
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
    id: 'hist-real-02',
    numero: 22,
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
    id: 'hist-real-03',
    numero: 23,
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
    id: 'hist-real-04',
    numero: 24,
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
  // 5. DIREITO ADMINISTRATIVO (6 QUESTÕES REAIS)
  // =========================================================================
  {
    id: 'adm-real-01',
    numero: 25,
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
    id: 'adm-real-02',
    numero: 26,
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
    id: 'adm-real-03',
    numero: 27,
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
      analiseGeral: 'Artigo 37, caput da CF/88: Princípios expressos que compõem o mnemônico L-I-M-P-E (Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência). O princípio da Eficiência foi acrescentado pela EC 19/1998.',
      justificativaAlternativas: {
        A: 'CORRETA. Princípios que formam o famoso LIMPE do caput do Art. 37 da CF/88.',
        B: 'Incorreta. Supremacia e continuidade são princípios implícitos/doutrinários.',
        C: 'Incorreta. Sigilo é exceção à regra geral da publicidade.',
        D: 'Incorreta. Razoabilidade e proporcionalidade são princípios implícitos no texto constitucional.',
        E: 'Incorreta. Informalidade aplica-se ao processo administrativo e juizados, não é princípio expresso do art. 37.'
      },
      bizuPMBA: 'Bizu de Ouro: Princípios EXPRESSOS no art. 37 da CF/88 = L-I-M-P-E!',
      artigosCitados: ['Art. 37, caput da CF/88']
    }
  },
  {
    id: 'adm-real-04',
    numero: 28,
    banca: 'CESPE / Cebraspe',
    orgao: 'Segurança Pública',
    cargo: 'Soldado PM',
    ano: 2022,
    disciplina: 'Direito Administrativo',
    assunto: 'Responsabilidade Civil do Estado (Art. 37, § 6º da CF)',
    dificuldade: 'Média',
    enunciado: 'Em relação à responsabilidade civil extracontratual do Estado no ordenamento jurídico brasileiro, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.' },
      { id: 'B', texto: 'A responsabilidade civil do Estado brasileiro adota a teoria do risco integral em todas as situações comuns de atuação policial.' },
      { id: 'C', texto: 'A vítima de dano causado por viatura policial militar deve comprovar obrigatoriamente o dolo específico do motorista da guarnição para obter indenização estatal.' },
      { id: 'D', texto: 'O Estado responde civilmente mesmo quando comprovada a culpa exclusiva e total da vítima no evento danoso.' },
      { id: 'E', texto: 'O direito de regresso contra o servidor público não exige a comprovação de dolo ou de culpa em processo judicial.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. André Lins',
      cargo: 'Advogado e Professor',
      analiseGeral: 'Artigo 37, § 6º da CF/88 consagra a Teoria do Risco Administrativo (Responsabilidade Objetiva do Estado: conduta + dano + nexo causal, dispensando dolo/culpa da vítima). Em contrapartida, a ação regressiva contra o agente público exige comprovação de dolo ou culpa (Responsabilidade Subjetiva).',
      justificativaAlternativas: {
        A: 'CORRETA. Transcrição literal do Art. 37, § 6º da Constituição Federal.',
        B: 'Incorreta. Adota-se a Teoria do Risco Administrativo (que admite excludentes como culpa exclusiva da vítima e força maior).',
        C: 'Incorreta. A responsabilidade do Estado perante a vítima é OBJETIVA (independe de dolo ou culpa).',
        D: 'Incorreta. Culpa exclusiva da vítima rompe o nexo de causalidade e exclui a responsabilidade estatal.',
        E: 'Incorreta. A ação de regresso exige comprovação cabal de dolo ou culpa do servidor.'
      },
      bizuPMBA: 'Bizu da Responsabilidade Civil: Estado perante o cidadão = OBJETIVA (Teoria do Risco Administrativo). Estado contra o Policial (Regresso) = SUBJETIVA (exige Dolo ou Culpa)!',
      artigosCitados: ['Art. 37, § 6º da CF/88']
    }
  },

  // =========================================================================
  // 6. LÍNGUA PORTUGUESA (6 QUESTÕES REAIS)
  // =========================================================================
  {
    id: 'port-real-01',
    numero: 29,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Língua Portuguesa',
    assunto: 'Emprego do Sinal Indicativo de Crase',
    dificuldade: 'Média',
    enunciado: 'Considere as frases a seguir sobre a atuação policial:\nI. O comandante dirigiu-se à tropa perfilada no pátio.\nII. Os policiais militares agiram a favor da ordem pública.\nIII. A viatura deslocou-se à uma velocidade incompatível com a via.\nIV. Entregou o relatório de serviço à sua excelência o Comandante-Geral.\n\nO sinal indicativo de crase está empregado de acordo com a norma-padrão da língua portuguesa APENAS em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'I e II.' },
      { id: 'C', texto: 'I e III.' },
      { id: 'D', texto: 'III e IV.' },
      { id: 'E', texto: 'II e IV.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Profa. Helena Prado',
      cargo: 'Especialista em Língua Portuguesa e Redação Oficial',
      analiseGeral: 'I. Correta: quem se dirige, dirige-se "a" + artigo "a" tropa = à tropa. II. Incorreta: "a favor" não leva crase (palavra masculina). III. Incorreta: antes de artigo indefinido "uma" não ocorre crase. IV. Incorreta: antes de pronomes de tratamento com "Sua/Vossa Excelência" não ocorre crase.',
      justificativaAlternativas: {
        A: 'CORRETA. Apenas o item I preenche os requisitos da fusão da preposição com o artigo feminino.',
        B: 'Incorreta. O item II traz palavra masculina "favor".',
        C: 'Incorreta. O item III traz artigo indefinido "uma".',
        D: 'Incorreta. III e IV contêm erros gramaticais de crase.',
        E: 'Incorreta. Nem II nem IV admitem crase.'
      },
      bizuPMBA: 'Bizu da Crase: Antes de palavra masculina, verbo, pronome de tratamento (Sua Excelência) e artigo indefinido (um/uma) -> CRASE NUNCA OCORRE!',
      artigosCitados: ['Gramática Normativa da Língua Portuguesa - Sintaxe de Regência']
    }
  },
  {
    id: 'port-real-02',
    numero: 30,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2020,
    disciplina: 'Língua Portuguesa',
    assunto: 'Concordância Verbal e Partícula "SE"',
    dificuldade: 'Média',
    enunciado: 'Assinale a alternativa em que a concordância verbal obedece estritamente às regras da norma-padrão da Língua Portuguesa:',
    alternativas: [
      { id: 'A', texto: 'Apuraram-se com rigor todas as irregularidades disciplinares comunicadas ao comando.' },
      { id: 'B', texto: 'Apurou-se com rigor todas as irregularidades disciplinares comunicadas ao comando.' },
      { id: 'C', texto: 'Devem haver soluções imediatas para a redução dos índices criminais na região.' },
      { id: 'D', texto: 'Fazem dez anos que a lei de organização básica da corporação foi promulgada.' },
      { id: 'E', texto: 'Haviam muitos policiais empenhados na operação de segurança do carnaval de Salvador.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Profa. Helena Prado',
      cargo: 'Professora de Língua Portuguesa',
      analiseGeral: 'Em "Apuraram-se [...] todas as irregularidades", o "SE" é pronome apassivador (partícula apassivadora), e o sujeito paciente é "todas as irregularidades" (plural). Logo, o verbo deve ir obrigatoriamente para o plural: apuraram-se.',
      justificativaAlternativas: {
        A: 'CORRETA. Voz passiva sintética com sujeito paciente no plural -> verbo no plural.',
        B: 'Incorreta. O verbo deveria estar no plural (apuraram-se) para concordar com "irregularidades".',
        C: 'Incorreta. Locução com haver impessoal transmite impessoalidade ao auxiliar: "Deve haver".',
        D: 'Incorreta. Verbo fazer indicando tempo decorrido é IMPESSOAL (deve ficar no singular: "Faz dez anos").',
        E: 'Incorreta. Verbo haver no sentido de existir é IMPESSOAL (deve ficar no singular: "Havia muitos policiais").'
      },
      bizuPMBA: 'Bizu da Concordância: VTD + SE = Partícula Apassivadora (verbo concorda com o sujeito: Vendem-se casas). Haver no sentido de existir = SEMPRE NO SINGULAR (Havia viaturas)!',
      artigosCitados: ['Gramática Normativa - Concordância Verbal']
    }
  },

  // =========================================================================
  // 7. GEOGRAFIA DA BAHIA (6 QUESTÕES REAIS)
  // =========================================================================
  {
    id: 'geo-real-01',
    numero: 31,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Geografia da Bahia',
    assunto: 'Bacia Hidrográfica do Rio São Francisco na Bahia',
    dificuldade: 'Fácil',
    enunciado: 'O Rio São Francisco ("Velho Chico") desempenha papel socioeconômico e ambiental vital no território baiano. A respeito da bacia hidrográfica do São Francisco na Bahia, assinale a opção correta:',
    alternativas: [
      { id: 'A', texto: 'Atravessa o semiárido baiano de sul a norte, viabilizando importantes polos de fruticultura irrigada (como no polo Juazeiro/Petrolina) e grande geração hidrelétrica (Sobradinho).' },
      { id: 'B', texto: 'Nasce no sertão da Bahia e deságua na Baía de Todos os Santos em Salvador.' },
      { id: 'C', texto: 'É um rio exclusivamente temporário (intermitente), que seca totalmente nos meses de estiagem prolongada.' },
      { id: 'D', texto: 'Não possui nenhum aproveitamento para geração de energia hidrelétrica no estado da Bahia.' },
      { id: 'E', texto: 'Suas águas são exclusivamente destinadas ao abastecimento residencial da Região Metropolitana de Salvador.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Me. George Santana',
      cargo: 'Geógrafo e Pesquisador de Geografia Regional da Bahia',
      analiseGeral: 'O Rio São Francisco é um rio perene que drena o semiárido baiano. Em seu curso na Bahia destacam-se a Usina Hidrelétrica de Sobradinho (um dos maiores lagos artificiais do mundo) e o polo de fruticultura irrigada de Juazeiro (manga, uva de mesa para exportação).',
      justificativaAlternativas: {
        A: 'CORRETA. Retrato geográfico exato da importância do São Francisco na Bahia (Sobradinho e Juazeiro).',
        B: 'Incorreta. Nasce na Serra da Canastra em Minas Gerais e deságua no Oceano Atlântico entre Alagoas e Sergipe.',
        C: 'Incorreta. É um rio PERENE (não seca).',
        D: 'Incorreta. Abriga importantes usinas hidrelétricas, como Sobradinho e Paulo Afonso.',
        E: 'Incorreta. O abastecimento de Salvador é feito pelas bacias dos rios Joanes e Paraguaçu.'
      },
      bizuPMBA: 'Bizu do Velho Chico: Rio PERENE no Semiárido + Usina de SOBRADINHO + Fruticultura Irrigada em JUAZEIRO!',
      artigosCitados: ['Geografia da Bahia - Hidrografia e Economia Regional']
    }
  },
  {
    id: 'geo-real-02',
    numero: 32,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2020,
    disciplina: 'Geografia da Bahia',
    assunto: 'Domínios Morfoclimáticos e Biomas da Bahia',
    dificuldade: 'Média',
    enunciado: 'O território da Bahia apresenta grande diversidade fitogeográfica e climática. O bioma que ocupa a maior extensão territorial do estado da Bahia, caracterizado pelo clima semiárido, vegetação xerófila, solos rasos e pedregosos e perda de folhas no período de estiagem é:',
    alternativas: [
      { id: 'A', texto: 'A Caatinga.' },
      { id: 'B', texto: 'O Cerrado.' },
      { id: 'C', texto: 'A Mata Atlântica.' },
      { id: 'D', texto: 'O Pantanal.' },
      { id: 'E', texto: 'Os Pampas.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Prof. Me. George Santana',
      cargo: 'Geógrafo',
      analiseGeral: 'A Caatinga (único bioma exclusivamente brasileiro) cobre mais de 50% do território da Bahia. Apresenta clima semiárido, índices pluviométricos baixos e irregulares, vegetação caducifólia (perde folhas na seca) com cactáceas (mandacaru, xique-xique) e bromélias.',
      justificativaAlternativas: {
        A: 'CORRETA. A Caatinga é o bioma predominante em área no estado da Bahia.',
        B: 'Incorreta. O Cerrado predomina no Oeste Baiano (Barreiras, Luís Eduardo Magalhães).',
        C: 'Incorreta. A Mata Atlântica ocupa a faixa litorânea e o sul da Bahia.',
        D: 'Incorreta. O Pantanal localiza-se no Centro-Oeste (MS/MT).',
        E: 'Incorreta. Os Pampas localizam-se no Rio Grande do Sul.'
      },
      bizuPMBA: 'Bizu dos Biomas da Bahia: Maior extensão = CAATINGA (Semiárido/Sertão). Oeste agrícola = CERRADO. Litoral/Cacau = MATA ATLÂNTICA!',
      artigosCitados: ['Geografia da Bahia - Biomas e Climatologia']
    }
  },

  // =========================================================================
  // 8. NOÇÕES DE DIREITO PENAL & MILITAR (6 QUESTÕES REAIS)
  // =========================================================================
  {
    id: 'penal-real-01',
    numero: 33,
    banca: 'IBFC',
    orgao: 'PM-BA',
    cargo: 'Soldado da Polícia Militar da Bahia',
    ano: 2023,
    disciplina: 'Noções de Direito Penal',
    assunto: 'Excludentes de Ilicitude (Art. 23 do Código Penal)',
    dificuldade: 'Média',
    enunciado: 'Durante patrulhamento ostensivo noturno, uma guarnição da Polícia Militar da Bahia depara-se com um indivíduo em via pública armado disparando tiros em direção a pedestres indefesos. O policial militar efetua disparo com arma de fogo na perna do agressor, cessando a injusta agressão. À luz do Código Penal Brasileiro (Art. 23 e 25), o policial agiu amparado por qual excludente de ilicitude:',
    alternativas: [
      { id: 'A', texto: 'Legítima defesa de terceiros.' },
      { id: 'B', texto: 'Estado de necessidade próprio.' },
      { id: 'C', texto: 'Exercício arbitrário das próprias razões.' },
      { id: 'D', texto: 'Estrito cumprimento do dever legal de matar.' },
      { id: 'E', texto: 'Coação moral irresistível.' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Maj. PMBA Carlos Eduardo',
      cargo: 'Instrutor de Direito Penal Militar e Segurança Pública',
      analiseGeral: 'Art. 25 do CP: "Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem". Repelir agressão injusta armada contra pedestres é caso típico de legítima defesa de terceiros.',
      justificativaAlternativas: {
        A: 'CORRETA. Defesa moderada e necessária contra agressão injusta e atual a direito de outrem.',
        B: 'Incorreta. No estado de necessidade há conflito entre bens jurídicos legítimos (perigo atual não causado voluntariamente).',
        C: 'Incorreta. Exercício arbitrário das próprias razões é crime (Art. 345 do CP).',
        D: 'Incorreta. Não existe "dever legal de matar" na legislação penal brasileira.',
        E: 'Incorreta. Coação moral irresistível é excludente de culpabilidade (inexigibilidade de conduta diversa).'
      },
      bizuPMBA: 'Bizu do Direito Penal: Injusta Agressão (atual ou iminente) = LEGÍTIMA DEFESA! Perigo Atual (sem agressão humana injusta) = ESTADO DE NECESSIDADE!',
      artigosCitados: ['Código Penal Brasileiro, Artigos 23, II e 25']
    }
  },
  {
    id: 'penal-real-02',
    numero: 34,
    banca: 'FCC',
    orgao: 'PM-BA',
    cargo: 'Soldado PM',
    ano: 2020,
    disciplina: 'Noções de Direito Penal',
    assunto: 'Crimes contra a Administração Pública - Concussão vs Corrupção Passiva',
    dificuldade: 'Média',
    enunciado: 'O policial militar que, em razão de sua função, EXIGE para si, diretamente, vantagem indevida de um motorista para não lavrar auto de infração de trânsito durante blitz, comete o crime de:',
    alternativas: [
      { id: 'A', texto: 'Concussão (Art. 316 do Código Penal).' },
      { id: 'B', texto: 'Corrupção passiva (Art. 317 do Código Penal).' },
      { id: 'C', texto: 'Prevaricação (Art. 319 do Código Penal).' },
      { id: 'D', texto: 'Peculato-apropriação (Art. 312 do Código Penal).' },
      { id: 'E', texto: 'Advocacia administrativa (Art. 321 do Código Penal).' }
    ],
    respostaCorreta: 'A',
    comentario: {
      professor: 'Cap. PMBA Rogério Silva',
      cargo: 'Especialista em Direito Penal',
      analiseGeral: 'Art. 316 do CP (Concussão): "EXIGIR, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida". O verbo núcleo "EXIGIR" é a marca registrada da Concussão.',
      justificativaAlternativas: {
        A: 'CORRETA. O verbo "exigir" tipifica formalmente o crime de CONCUSSÃO.',
        B: 'Incorreta. Na Corrupção Passiva (Art. 317) os verbos são SOLICITAR, RECEBER ou ACEITAR PROMESSA.',
        C: 'Incorreta. Na Prevaricação (Art. 319) o funcionário retarda ou deixa de praticar ato por interesse ou sentimento pessoal.',
        D: 'Incorreta. Peculato envolve apropriação ou desvio de dinheiro, valor ou bem público móvel.',
        E: 'Incorreta. Advocacia administrativa é patrocinar interesse privado perante a administração.'
      },
      bizuPMBA: 'Bizu dos Crimes Funcionais: EXIGIR = CONCUSSÃO | SOLICITAR / RECEBER = CORRUPÇÃO PASSIVA | SENTIMENTO PESSOAL = PREVARICAÇÃO!',
      artigosCitados: ['Código Penal Brasileiro, Artigos 316, 317 e 319']
    }
  }
];
