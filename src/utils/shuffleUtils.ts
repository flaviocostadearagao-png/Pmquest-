/**
 * Shuffles alternatives and updates the correct answer ID accordingly.
 */
export function embaralharAlternativas(questao: any) {
  if (!questao.alternativas || !Array.isArray(questao.alternativas) || questao.alternativas.length < 2) {
    return questao;
  }

  const cleanResp = (questao.respostaCorreta || 'A').toString().trim().toUpperCase() as 'A' | 'B' | 'C' | 'D' | 'E';
  
  // 1. Identify correct text
  const altCorretaOriginal = questao.alternativas.find((a: any) => a.id === cleanResp);
  const textoCorreto = altCorretaOriginal ? altCorretaOriginal.texto : '';
  
  // 2. Map justifications if they exist
  const justifPorTexto: Record<string, string> = {};
  const oldJustif = questao.comentario?.justificativaAlternativas || {};
  questao.alternativas.forEach((alt: any) => {
    justifPorTexto[alt.texto] = oldJustif[alt.id] || '';
  });

  // 3. Shuffle
  const altsShuffled = [...questao.alternativas];
  for (let i = altsShuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [altsShuffled[i], altsShuffled[j]] = [altsShuffled[j], altsShuffled[i]];
  }

  // 4. Re-assign IDs and find new correct ID
  let novoGabarito: 'A' | 'B' | 'C' | 'D' | 'E' = 'A';
  const novasJustificativas: Record<string, string> = {};
  
  const altsFinais = altsShuffled.slice(0, 5).map((alt: any, aIdx: number) => {
    const newId = (['A', 'B', 'C', 'D', 'E'][aIdx]) as 'A' | 'B' | 'C' | 'D' | 'E';
    if (alt.texto === textoCorreto) {
      novoGabarito = newId;
    }
    novasJustificativas[newId] = justifPorTexto[alt.texto] || '';
    return {
      id: newId,
      texto: alt.texto
    };
  });

  return {
    ...questao,
    alternativas: altsFinais,
    respostaCorreta: novoGabarito,
    comentario: {
      ...questao.comentario,
      justificativaAlternativas: novasJustificativas
    }
  };
}
