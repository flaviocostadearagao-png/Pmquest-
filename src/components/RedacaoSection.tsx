import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PenTool, CheckCircle, FileText, Send, AlertCircle, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { RedacaoTema, RedacaoCorrecao } from '../types';

export const RedacaoSection: React.FC = () => {
  const { isDark } = useTheme();
  const [tema, setTema] = useState<RedacaoTema | null>(null);
  const [textoAluno, setTextoAluno] = useState('');
  const [correcao, setCorrecao] = useState<RedacaoCorrecao | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const gerarTema = async () => {
    setIsLoading(true);
    setError(null);
    setCorrecao(null);
    setTextoAluno('');
    try {
      const res = await fetch('/api/agente-pmba', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comando: 'Redação: Gerar Tema' })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setTema(data);
    } catch (err: any) {
      setError(err.message || 'Erro ao gerar tema');
    } finally {
      setIsLoading(false);
    }
  };

  const corrigirRedacao = async () => {
    if (!textoAluno.trim() || !tema) return;
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/agente-pmba', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          comando: `Redação: Corrigir | Tema: ${tema.tema} | Texto: ${textoAluno}`
        })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setCorrecao(data);
    } catch (err: any) {
      setError(err.message || 'Erro ao corrigir redação');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
          Laboratório de Redação
        </h2>
      </div>

      {!tema && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-3xl text-center border ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <PenTool className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-amber-500' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Treinamento de Redação PMBA
          </h3>
          <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Gere um tema inédito focado na realidade da Bahia ou segurança pública e receba uma correção detalhada.
          </p>
          <button
            onClick={gerarTema}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center w-full gap-2 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Gerar Tema Inédito
          </button>
        </motion.div>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <RefreshCw className={`w-8 h-8 animate-spin mb-4 ${isDark ? 'text-amber-500' : 'text-blue-600'}`} />
          <p className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Comandante da IA está processando...
          </p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-500 font-medium">{error}</p>
        </div>
      )}

      {tema && !isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex justify-between items-start mb-4">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-100 text-blue-700'}`}>
                Tema Gerado
              </span>
              <button onClick={gerarTema} className={`text-xs flex items-center gap-1 ${isDark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'}`}>
                <RefreshCw className="w-3 h-3" /> Novo Tema
              </button>
            </div>
            <h3 className={`text-base font-bold leading-tight mb-4 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              {tema.tema}
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className={`text-xs font-semibold uppercase mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Textos Motivadores</h4>
                {tema.textos_motivadores.map((texto, i) => (
                  <p key={i} className={`text-sm mb-2 italic border-l-2 pl-3 ${isDark ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>
                    "{texto}"
                  </p>
                ))}
              </div>
              <div className={`p-3 rounded-xl text-sm ${isDark ? 'bg-slate-800/50 text-slate-300' : 'bg-slate-50 text-slate-700'}`}>
                <span className="font-semibold block mb-1">Diretrizes:</span>
                {tema.diretrizes}
              </div>
            </div>
          </div>

          {!correcao && (
            <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <h4 className={`font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                Sua Redação
              </h4>
              <textarea
                value={textoAluno}
                onChange={(e) => setTextoAluno(e.target.value)}
                placeholder="Digite sua redação aqui..."
                className={`w-full min-h-[300px] p-4 rounded-xl text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  isDark ? 'bg-slate-950 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
                } border`}
              />
              <button
                onClick={corrigirRedacao}
                disabled={textoAluno.length < 50}
                className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                Enviar para Correção
              </button>
            </div>
          )}

          {correcao && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-5 rounded-2xl border ${isDark ? 'bg-[#0f172a] border-blue-900/30' : 'bg-blue-50 border-blue-200'}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                  correcao.nota_final >= 80 ? 'bg-green-500 text-white' :
                  correcao.nota_final >= 60 ? 'bg-amber-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {correcao.nota_final}
                </div>
                <div>
                  <h4 className={`font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Avaliação da Banca</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Escala de 0 a 100 pontos</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className={`text-xs font-bold uppercase mb-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Ortografia e Gramática</div>
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{correcao.criterios.ortografia_gramatica}</p>
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase mb-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Estrutura Dissertativa</div>
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{correcao.criterios.estrutura_dissertativa}</p>
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase mb-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Relevância ao Tema</div>
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{correcao.criterios.relevancia_ao_tema}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-green-500/10 border-green-500/20' : 'bg-green-50 border-green-200'}`}>
                  <h5 className="text-xs font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Pontos Fortes
                  </h5>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-green-700 dark:text-green-300">
                    {correcao.pontos_fortes.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
                  <h5 className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Melhorias
                  </h5>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                    {correcao.pontos_de_melhoria.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-300'}`}>
                <h5 className={`text-xs font-bold uppercase mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Exemplo Melhorado</h5>
                <p className={`text-sm italic ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{correcao.exemplo_melhorado}"
                </p>
              </div>

              <button
                onClick={() => setCorrecao(null)}
                className="mt-6 w-full py-3 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
              >
                Revisar Texto Original
              </button>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};
