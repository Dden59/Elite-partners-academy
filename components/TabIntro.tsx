import React from 'react';
import { Sparkles, Activity, TrendingUp, Crown, Zap, ShieldCheck, ArrowDown, Gamepad2, Coins } from 'lucide-react';

// Принимаем функцию переключения
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
            <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-ios-lilacLight">Evolution</span>
        </div>

        <h2 className="text-xl font-serif text-white leading-relaxed px-2 font-medium">
          От азарта в <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">1win</span> к управлению системой в <span className="text-transparent bg-clip-text bg-gradient-to-r from-ios-lilac to-fuchsia-400">Pocket Option</span>.
        </h2>
      </section>

      {/* 2. THE PLAYER REALITY (Respectful) */}
      <section className="animate-slide-up delay-100">
         <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-t-2 border-t-blue-500/20">
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>
             
             <div className="flex items-center space-x-3 mb-4 opacity-90">
                 <Gamepad2 size={20} className="text-blue-400" />
                 <h3 className="text-lg font-serif text-white">Драйв Игрока</h3>
             </div>

             <div className="space-y-4 text-sm font-serif text-ios-textSec leading-relaxed">
                <p>
                   Ты знаешь этот кайф. Lucky Jet, Rocket Queen, ставки — это чистый адреналин. Когда коэффициент летит вверх, сердце замирает. Это крутые эмоции, и в этом нет ничего плохого. Игрок — это охотник за удачей.
                </p>
                <p>
                   Но давай честно: в игре твой доход зависит от исхода раунда. Улетел самолетик раньше — минус. Угадал — плюс. Ты всегда "на лезвии".
                </p>
             </div>
         </div>
      </section>

      {/* 3. TRANSITION */}
      <section className="text-center py-2 animate-slide-up delay-200">
          <ArrowDown className="mx-auto text-ios-lilac animate-bounce opacity-50" size={24} strokeWidth={1} />
      </section>

      {/* 4. THE PARTNER REALITY (Upgrade) */}
      <section className="animate-slide-up delay-200">
         <div className="glass-card rounded-2xl p-6 relative overflow-hidden ring-1 ring-ios-lilac/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-lilac"></div>
             
             <div className="flex items-center space-x-3 mb-4">
                 <Crown size={20} className="text-amber-400" fill="currentColor" fillOpacity={0.2} />
                 <h3 className="text-lg font-serif text-white">Статус Партнёра</h3>
             </div>

             <div className="space-y-4 text-sm font-serif text-white/90 leading-relaxed">
                <p>
                   Быть Партнером — это не отказ от игры, это <span className="text-ios-lilac font-medium">левел-ап</span>. Ты переходишь на сторону бизнеса.
                </p>
                <p>
                   Вместо того чтобы гадать на исход раунда, ты создаешь систему, где другие люди испытывают этот азарт. А ты? Ты получаешь процент с оборота. 
                   Неважно, выиграл трейдер или проиграл — платформа делится с тобой прибылью.
                </p>
             </div>
             
              <div className="mt-6 flex gap-2">
                 <div className="bg-ios-lilac/10 rounded-lg p-3 flex-1 flex flex-col items-center justify-center border border-ios-lilac/20">
                    <Coins size={16} className="text-ios-lilac mb-2" />
                    <span className="text-[9px] uppercase tracking-wider text-white text-center">Доход <br/>от оборота</span>
                 </div>
                 <div className="bg-ios-lilac/10 rounded-lg p-3 flex-1 flex flex-col items-center justify-center border border-ios-lilac/20">
                    <Activity size={16} className="text-ios-lilac mb-2" />
                    <span className="text-[9px] uppercase tracking-wider text-white text-center">Вечный <br/>актив</span>
                 </div>
              </div>
         </div>
      </section>

      {/* 5. VISUAL COMPARISON */}
      <section className="space-y-6 animate-slide-up delay-300 py-4">
          <h3 className="text-center text-xs font-serif uppercase tracking-[0.2em] text-ios-textSec opacity-70">Твоя Эволюция</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {/* PLAYER ROW */}
            <div className="bg-[#0F0A16] border border-white/5 rounded-xl p-4 relative grayscale-[0.3]">
                <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-serif text-white flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                        Игрок (Участник)
                    </h4>
                    <span className="text-[10px] text-gray-500 border border-gray-700 px-2 py-0.5 rounded">Level 1</span>
                </div>
                <p className="text-xs text-ios-textSec">Зависит от удачи и исхода раунда. Получает эмоции, но рискует своими деньгами.</p>
            </div>

            <div className="flex justify-center -my-6 relative z-10">
                <div className="bg-ios-lilac rounded-full p-1 border-4 border-[#05010D]">
                    <ArrowDown size={14} className="text-white" />
                </div>
            </div>

            {/* PARTNER ROW */}
            <div className="bg-[#150F25] border border-ios-lilac/40 rounded-xl p-4 relative shadow-lg shadow-purple-900/10">
                <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-serif text-white flex items-center">
                        <Crown size={14} className="text-amber-400 mr-2" />
                        Партнер (Совладелец)
                    </h4>
                    <span className="text-[10px] text-ios-lilac border border-ios-lilac/30 px-2 py-0.5 rounded bg-ios-lilac/10">Level 100</span>
                </div>
                <p className="text-xs text-white">Зависит от бизнес-системы. Зарабатывает на активности других. Риски сведены к нулю.</p>
            </div>
          </div>
      </section>

      {/* 6. CONCLUSION */}
      <section className="pt-6 pb-8 animate-slide-up delay-500 text-center">
          <div className="mb-8 px-2">
              <p className="text-lg font-serif text-white leading-relaxed font-medium">
                  ELITE PARTNERS — это твой переход из зала ожидания в совет директоров.
              </p>
              <p className="text-sm font-serif text-ios-lilacLight mt-4 italic opacity-90">
                 Оставайся игроком в душе, но веди дела как Партнер. 🚀
              </p>
          </div>

          <div className="glass-card p-1 rounded-xl bg-gradient-lilac/20">
            <button 
                onClick={handleStart} 
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