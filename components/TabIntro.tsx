// ========================================================================================================
// FILE: components/TabIntro.tsx
// ========================================================================================================
import React from 'react';
import { Sparkles, Rocket, Crown, ArrowDown, Flame, TrendingUp, AlertTriangle, Play } from 'lucide-react';

interface TabIntroProps {
  onStartLearning: () => void;
}

const TabIntro: React.FC<TabIntroProps> = ({ onStartLearning }) => {
  
  const triggerHaptic = (style: 'light' | 'medium' | 'heavy' = 'light') => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
    }
  };

  const handleStart = () => {
    triggerHaptic('heavy');
    onStartLearning();
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
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-ios-lilac opacity-20 blur-[60px] -z-10 pointer-events-none"></div>
         </div>
      </div>

      {/* 1. HERO HEADER */}
      <section className="relative pt-4 text-center z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-ios-lilac/30 bg-ios-lilac/10 mb-6 backdrop-blur-md">
            <Sparkles size={12} className="text-ios-lilac" />
            <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-ios-lilacLight">Reality Shift</span>
        </div>

        <h2 className="text-xl font-serif text-white leading-relaxed px-2 font-medium">
          От игрока в <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Rocket Queen</span> к Партнёру <span className="text-transparent bg-clip-text bg-gradient-to-r from-ios-lilac to-blue-400">Pocket Option</span>: два мира, две реальности
        </h2>
      </section>

      {/* 2. THE PLAYER REALITY (PAIN) */}
      <section className="animate-slide-up delay-100">
         <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-t-2 border-t-rose-500/20">
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500 opacity-5 blur-3xl rounded-full"></div>
             
             <div className="flex items-center space-x-3 mb-4 opacity-90">
                 <Rocket size={20} className="text-rose-400" />
                 <h3 className="text-lg font-serif text-white">Реальность Игрока</h3>
             </div>

             <div className="space-y-4 text-sm font-serif text-ios-textSec leading-relaxed">
                <p>
                   Давай честно. Если ты хоть раз запускал Rocket Queen, Lucky Jet или любые другие краш-игры, ты знаешь это чувство.
                </p>
                <p>
                   Сердце колотится. Глаза прикованы к экрану. Самолётик взлетает, коэффициент растёт: х2, х3, х5... А в голове одна мысль: <span className="text-white italic">"Ещё секунду... ещё чуть-чуть... ну давай, не падай!"</span>
                </p>
                <p>
                   И вот он — момент истины. Либо ты забираешь деньги и выдыхаешь, либо самолётик падает, и твоя ставка сгорает за долю секунды.
                </p>
             </div>

             <div className="mt-6 flex justify-between items-center bg-rose-500/5 rounded-lg p-4 border border-rose-500/10">
                 <div className="text-center w-1/3 border-r border-rose-500/10">
                    <span className="block text-[10px] font-serif text-rose-300 uppercase tracking-wider mb-1">Адреналин</span>
                 </div>
                 <div className="text-center w-1/3 border-r border-rose-500/10">
                    <span className="block text-[10px] font-serif text-rose-300 uppercase tracking-wider mb-1">Риск</span>
                 </div>
                 <div className="text-center w-1/3">
                    <span className="block text-[10px] font-serif text-rose-300 uppercase tracking-wider mb-1">Зависимость от удачи</span>
                 </div>
             </div>
         </div>
      </section>

      {/* 3. TRANSITION */}
      <section className="text-center py-2 animate-slide-up delay-200">
          <ArrowDown className="mx-auto text-ios-lilac animate-bounce opacity-50" size={24} strokeWidth={1} />
      </section>

      {/* 4. THE PARTNER REALITY (VISION) */}
      <section className="animate-slide-up delay-200">
         <div className="glass-card rounded-2xl p-6 relative overflow-hidden ring-1 ring-ios-lilac/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-lilac"></div>
             
             <div className="flex items-center space-x-3 mb-4">
                 <Crown size={20} className="text-amber-400" fill="currentColor" fillOpacity={0.2} />
                 <h3 className="text-lg font-serif text-white">Реальность Партнёра</h3>
             </div>

             <div className="space-y-4 text-sm font-serif text-white/90 leading-relaxed">
                <p>
                   А теперь представь другую реальность. Ту, где ты вообще не смотришь на график. Где тебе всё равно, упал самолётик или взлетел до небес. Где твой доход идёт независимо от того, зелёный сегодня день или красный.
                </p>
                <p>
                   Это не фантастика. Это переход из категории <span className="text-rose-400 font-bold">игрок</span> в категорию <span className="text-ios-lilac font-bold">партнёр</span>.
                </p>
                <p className="text-ios-textSec text-xs uppercase tracking-widest mt-4 border-t border-white/10 pt-4 text-center">
                   Давай разложим по полочкам, чем они отличаются
                </p>
             </div>
         </div>
      </section>

      {/* 5. VISUAL COMPARISON */}
      <section className="space-y-6 animate-slide-up delay-300 py-4">
          
          {/* PLAYER CARD */}
          <div className="bg-[#0F0A16] border border-white/5 rounded-xl p-5 relative grayscale-[0.3]">
              <h4 className="text-base font-serif text-white mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2 animate-pulse"></span>
                  Игрок в Rocket Queen / Lucky Jet
              </h4>
              <p className="text-xs text-ios-textSec mb-4 italic">
                 Ты заходишь в игру. У тебя есть баланс. Ты делаешь ставку. И начинается самое интересное — ожидание.
              </p>
              <ul className="space-y-3">
                  <li className="flex gap-3">
                      <AlertTriangle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-ios-textSec leading-snug"><strong className="text-white">Твой доход:</strong> Зависит от того, успеешь ли ты выйти до падения. Сегодня повезло — завтра нет.</p>
                      </div>
                  </li>
                  <li className="flex gap-3">
                      <Flame size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-ios-textSec leading-snug"><strong className="text-white">Твои риски:</strong> Ты рискуешь своими деньгами. Каждая ставка — это потенциальная потеря.</p>
                      </div>
                  </li>
                  <li className="flex gap-3">
                      <TrendingUp size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-ios-textSec leading-snug"><strong className="text-white">Твой потолок:</strong> Ты ограничен своим депозитом и своей удачей.</p>
                      </div>
                  </li>
              </ul>
              <div className="mt-4 bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
                 <p className="text-[10px] text-rose-200 text-center">
                    В этой реальности ты всегда "под графиком". Твоя судьба — в руках случайных чисел.
                 </p>
              </div>
          </div>

          <div className="flex justify-center -my-4 relative z-10">
             <div className="bg-ios-lilac rounded-full p-1 border-4 border-[#05010D]">
                 <ArrowDown size={16} className="text-white" />
             </div>
          </div>

          {/* PARTNER CARD */}
          <div className="bg-[#150F25] border border-ios-lilac/40 rounded-xl p-5 relative shadow-lg shadow-purple-900/10">
              <h4 className="text-base font-serif text-white mb-4 flex items-center">
                  <Crown size={16} className="text-amber-400 mr-2" />
                  Партнёр Pocket Option
              </h4>
              <p className="text-xs text-ios-textSec mb-4 italic">
                 А теперь посмотрим на твою новую реальность.
              </p>
              <ul className="space-y-3">
                  <li className="flex gap-3">
                      <TrendingUp size={16} className="text-ios-lilac shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-white leading-snug"><strong className="text-ios-lilac">Твой доход:</strong> Стабильный процент от оборота других людей. Самолётик упал? Ты получил процент. Взлетел? Ты получил процент. Ты выигрываешь в любом исходе.</p>
                      </div>
                  </li>
                  <li className="flex gap-3">
                      <Sparkles size={16} className="text-ios-lilac shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-white leading-snug"><strong className="text-ios-lilac">Твоя роль:</strong> Ты владелец. Ты над процессом. Ты строишь систему, которая работает на тебя.</p>
                      </div>
                  </li>
                  <li className="flex gap-3">
                      <Crown size={16} className="text-ios-lilac shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-white leading-snug"><strong className="text-ios-lilac">Твой потолок:</strong> Ты ограничен только количеством людей. А это количество можно масштабировать бесконечно.</p>
                      </div>
                  </li>
              </ul>
              <div className="mt-4 bg-ios-lilac/10 p-3 rounded-lg border border-ios-lilac/20">
                 <p className="text-[10px] text-white text-center">
                    В этой реальности ты смотришь на график свысока. Каждая ставка приносит тебе деньги. Не потому что ты угадал, а потому что ты организовал этот процесс.
                 </p>
              </div>
          </div>
      </section>

      {/* 6. PHILOSOPHY & CONCLUSION */}
      <section className="pt-2 pb-8 animate-slide-up delay-500 text-center">
          <div className="mb-8 px-2 space-y-4">
              <div className="glass-card p-4 rounded-xl border border-white/10">
                  <p className="text-sm font-serif text-rose-300">
                     Игрок молится, чтобы самолётик не упал.<br/>
                     Игрок зарабатывает, когда везёт.
                  </p>
                  <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <p className="text-sm font-serif text-ios-lilac">
                     Партнёр молиться перестаёт вообще — он просто считает прибыль.<br/>
                     Партнёр зарабатывает всегда.
                  </p>
              </div>

              <p className="text-lg font-serif text-white leading-relaxed font-medium pt-4">
                  ELITE PARTNERS — это переход из зала игровых автоматов в кабинет владельца целой империи.
              </p>
              <p className="text-sm font-serif text-ios-lilacLight italic opacity-90">
                 Чувствуешь разницу?<br/> Пора перестать играть и начать владеть. 🚀
              </p>
          </div>

          <div className="glass-card p-1 rounded-xl bg-gradient-lilac/20">
            <button 
                onClick={handleStart} 
                className="w-full bg-[#05010D] hover:bg-[#120B1F] border border-ios-lilac/50 h-16 rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-95 group"
            >
                <div className="flex flex-col items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-lilac font-serif text-lg tracking-wide group-hover:tracking-widest transition-all duration-300 uppercase font-bold">
                        НАЧАТЬ ОБУЧЕНИЕ
                    </span>
                    <span className="text-[10px] text-ios-textSec uppercase tracking-[0.2em] flex items-center gap-1">
                       Перейти к урокам <Play size={8} className="fill-current"/>
                    </span>
                </div>
            </button>
          </div>
      </section>

    </div>
  );
};

export default TabIntro;