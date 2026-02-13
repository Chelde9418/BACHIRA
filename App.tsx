
import React from 'react';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const bachiraPhotoMain = "https://i.ibb.co/YFByvcSs/bachira.jpg";
  const pinkPlush = "https://i.ibb.co/wrz6rcyZ/beautiful-roses-with-cute-teddy-bear.jpg";

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-background-light selection:bg-primary/20 font-serif">
      <FloatingHearts />

      {/* Header Section */}
      <header className="relative z-10 w-full max-w-4xl px-4 md:px-6 pt-16 md:pt-24 pb-8 md:pb-12 text-center">
        <h1 className="text-primary text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 md:mb-6 animate-in fade-in slide-in-from-top-4 duration-1000 leading-tight font-serif">
          Pourquoi je t'aime ?
        </h1>
        <p className="text-base md:text-2xl text-[#8d5e5e] italic max-w-xl mx-auto opacity-80 px-4 font-serif">
          Parce que tu es l'exception à toutes mes règles.
        </p>
      </header>

      {/* Hero Content Section */}
      <main className="relative z-10 w-full max-w-6xl px-4 md:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Main Portrait Section */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-white border-[6px] md:border-8 border-white transform hover:rotate-1 transition-transform duration-500">
                <img 
                  alt="Bachira portrait" 
                  className="w-full h-full object-cover" 
                  src={bachiraPhotoMain} 
                />
              </div>
            </div>
          </div>

          {/* Text & Pink Plush Section */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 md:gap-10">
            <h2 className="text-3xl md:text-6xl font-extrabold leading-tight text-[#181010] text-center lg:text-left font-serif">
              Ma source de bonheur au quotidien
            </h2>
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500 border border-primary/5">
              <img 
                alt="Peluche Rose et Roses" 
                className="w-full h-full object-cover" 
                src={pinkPlush} 
              />
            </div>
          </div>
        </div>
      </main>

      {/* Déclaration Section - Pure Serif Elegance */}
      <section className="relative z-10 w-full py-20 md:py-32 px-4 md:px-6 bg-white/40 backdrop-blur-md border-y border-primary/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-xl md:text-3xl text-[#1a1a1a] leading-relaxed space-y-12 md:space-y-16 text-center font-serif">
            <div className="space-y-6">
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 italic text-[#4a3434]">
                Je vais peut-être te paraître fou, et tu trouveras peut-être ça idiot, mais j’avais besoin que tu saches ce que je ressens. Au début, je ne l'aurais jamais cru, mais je me suis tellement attaché à toi que je ne peux plus m’arrêter de t’aimer.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 font-medium tracking-tight">
                Il y a tant de choses chez toi qui me fascinent. Quand tu souris, quand tu es heureuse, c’est étrange mais ça me rend instantanément heureux moi aussi. J’adore quand tu fais l’idiote, quand tu me racontes tes journées, tes études, tes ressentis… Ton ouverture d’esprit et ton intelligence me touchent énormément.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 italic text-[#4a3434]">
                C’est vrai, on ne traverse pas forcément les moments les plus faciles actuellement, mais j’espère sincèrement que l’avenir nous en offrira de bien meilleurs. Tout ce que je veux, c’est que tu saches que je suis là pour toi.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 font-medium tracking-tight">
                J'espère que tu pourras me faire confiance. J’aimerais tellement que tu me confies un peu de ton cœur et de ton temps, pour que je puisse en prendre soin comme ils le méritent. Voilà, c’est dit. 
              </p>
            </div>

            <div className="pt-16 animate-in fade-in zoom-in duration-1000 delay-1000">
              <p className="text-4xl md:text-8xl font-black text-primary inline-block relative tracking-tighter font-serif">
                Je t’aime, tout simplement
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-primary/30 rounded-full blur-sm"></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Red Banner */}
      <section className="relative z-10 w-full bg-gradient-to-r from-primary to-[#cc0000] py-20 md:py-32 px-4 md:px-6 flex justify-center shadow-inner overflow-hidden">
        <div className="max-w-3xl text-center text-white space-y-6 md:space-y-8 relative z-20 font-serif">
          <h3 className="text-3xl md:text-6xl font-bold leading-tight px-4">
            Un amour tendre, sincère et pur.
          </h3>
          <div className="w-16 md:w-24 h-1 bg-white/40 mx-auto rounded-full"></div>
          <p className="text-lg md:text-2xl font-light opacity-90 px-6 italic">
            Parce que chaque mot vient du fond de mon cœur.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 w-full py-24 md:py-40 px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="mb-8 md:mb-12 animate-bounce">
           <span className="text-primary text-6xl md:text-8xl">❤️</span>
        </div>
        <h2 className="text-4xl md:text-8xl font-black text-[#181010] tracking-tighter mb-4 px-4 leading-none font-serif">
          Joyeuse Saint-Valentin, <br className="md:hidden" /><span className="text-primary">Bachira</span>
        </h2>
        <div className="mt-12 md:mt-20 opacity-40 text-[10px] md:text-xs tracking-[0.5em] md:tracking-[0.8em] uppercase font-bold text-primary font-serif">
          À nous, pour l'éternité
        </div>
      </footer>
    </div>
  );
};

export default App;
