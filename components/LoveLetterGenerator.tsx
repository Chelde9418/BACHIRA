
import React, { useState } from 'react';
import { generateLovePoem } from '../services/geminiService';

const LoveLetterGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!keywords.trim()) return;
    setLoading(true);
    const result = await generateLovePoem(keywords);
    setMessage(result);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 md:my-12 p-6 md:p-10 bg-white/60 backdrop-blur-lg rounded-3xl border border-primary/10 shadow-2xl font-serif">
      <h3 className="text-2xl md:text-4xl font-black text-primary mb-3 text-center tracking-tight">Un poème pour toi</h3>
      <p className="text-[#8d5e5e] text-center mb-8 text-sm md:text-lg px-2 leading-relaxed italic">
        Partage quelques mots qui évoquent notre histoire, et je laisserai mon cœur s'exprimer...
      </p>
      
      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Ex: rire, douceur, complicité..."
          className="w-full p-4 md:p-5 rounded-2xl border-2 border-primary/5 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white/90 text-lg font-serif"
        />
        <button
          onClick={handleGenerate}
          disabled={loading || !keywords.trim()}
          className="bg-primary text-white font-bold py-4 md:py-5 rounded-2xl shadow-lg hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-50 text-xl font-serif"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Inspiration...
            </span>
          ) : 'Générer mon message'}
        </button>
      </div>

      {message && (
        <div className="mt-10 p-6 md:p-10 bg-white/80 rounded-2xl shadow-inner border-l-[6px] border-primary italic text-lg md:text-2xl leading-relaxed text-[#181010] animate-in zoom-in-95 fade-in duration-700 font-serif">
          "{message}"
        </div>
      )}
    </div>
  );
};

export default LoveLetterGenerator;
