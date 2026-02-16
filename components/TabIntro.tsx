import React from 'react';
import { Sparkles, Activity, TrendingUp, Crown, Zap, ShieldCheck, ArrowDown, BarChart3, Wallet } from 'lucide-react';

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

      {/* 1. HERO HEADER */}
      <section className="relative pt-4 text-center z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-ios-lilac/30 bg-ios-lilac/10 mb-6 backdrop-blur-md">
            <Sparkles size={12} className="text-ios-lilac" />
            <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-ios-lilacLight">Introduction</span>
        </div>

        <h2 className="text-xl font-serif text-white leading-relaxed px-2 font-medium">
          Эволюция дохода: От <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">рискованной торговли</span> к построению <span className="text-transparent bg-clip-text bg-gradient-to-r from-ios-lilac to-blue-400">собственной Империи</span>.
        </h2>
      </section>

      {/* 2. THE TRADER REALITY (Problem) */}
      <section className="animate-slide-up delay-100">
         <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-t-2 border-t-rose-500/20">
             {/* Background ambients */}
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500 opacity-5 blur-3xl rounded-full"></div>
             
             <div className="flex items-center space-x-3 mb-4 opacity-80">
                 <Activity size={20} className="text-rose-400" />
                 <h3 className="text-lg font-serif text-white">Путь Одиночки</h3>
             </div>

             <div className="space-y-4 text-sm font-serif text-ios-textSec leading-relaxed">
                <p>
                   Ты знаешь, как это работает в трейдинге. Ты анализируешь графики на Pocket Option, используешь сигналы, нервничаешь на каждой свече. Твой доход напрямую зависит от того, угадал ты или нет.
                </p>
                <p>
                   Один неверный шаг, эмоции, тильт — и депозит исчезает. Ты сражаешься с рынком один на один. Это путь постоянного напряжения, где <span className="text-white italic">деньги приходят и уходят</span>.
                </p>
             </div>

             <div className="mt-6 flex justify-between items-center bg-rose-500/5 rounded-lg p-4 border border-rose-500/10">
                 <div className="text-center w-1/3 border-r border-rose-500/10">
                    <span className="block text-[10px] font-serif text-rose-300 uppercase tracking-wider mb-1">Риск</span>
                    <span className="text-rose-500 font-bold">100%</span>
                 </div>
                 <div className="text-center w-1/3 border-r border-rose-500/10">
                    <span className="block text-[10px] font-serif text-rose-300 uppercase tracking-wider mb-1">Нервы</span>
                    <span className="text-rose-500 font-bold">MAX</span>
                 </div>
                 <div className="text-center w-1/3">
                    <span className="block text-[10px] font-serif text-rose-300 uppercase tracking-wider mb-1">Стабильность</span>
                    <span className="text-rose-500 font-bold">0%</span>
                 </div>
             </div>
         </div>
      </section>

      {/* 3. TRANSITION */}
      <section className="text-center py-4 animate-slide-up delay-200">
          <ArrowDown className="mx-auto text-ios-lilac animate-bounce opacity-50" size={24} strokeWidth={1} />
      </section>

      {/* 4. THE PARTNER REALITY (Solution) */}
      <section className="animate-slide-up delay-200">
         <div className="glass-card rounded-2xl p-6 relative overflow-hidden ring-1 ring-ios-lilac/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
             {/* Shine Effect */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-lilac"></div>
             
             <div className="flex items-center space-x-3 mb-4">
                 <Crown size={20} className="text-amber-400" fill="currentColor" fillOpacity={0.2} />
                 <h3 className="text-lg font-serif text-white">Путь Партнёра</h3>
             </div>

             <div className="space-y-4 text-sm font-serif text-white/90 leading-relaxed">
                <p>
                   Elite Partners предлагает другую модель. Мы не играем с графиком — мы <span className="text-ios-lilac font-medium">владеем ситуацией</span>.
                </p>
                <p>
                   Твоя задача — не делать ставки, а строить систему. Ты получаешь процент от оборота платформы. Тебе не важно, в плюсе трейдер или в минусе — ты зарабатываешь на <span className="text-ios-lilac font-medium">объеме</span>. Это бизнес с математическим преимуществом на твоей стороне.
                </p>
             </div>
             
              <div className="mt-6 flex gap-2">
                 <div className="bg-ios-lilac/10 rounded-lg p-3 flex-1 flex flex-col items-center justify-center border border-ios-lilac/20">
                    <BarChart3 size={16} className="text-ios-lilac mb-2" />
                    <span className="text-[9px] uppercase tracking-wider text-white text-center">Доход от <br/>оборота</span>
                 </div>
                 <div className="bg-ios-lilac/10 rounded-lg p-3 flex-1 flex flex-col items-center justify-center border border-ios-lilac/20">
                    <Wallet size={16} className="text-ios-lilac mb-2" />
                    <span className="text-[9px] uppercase tracking-wider text-white text-center">Выплаты <br/>в $$</span>
                 </div>
              </div>
         </div>
      </section>

      {/* 5. VISUAL COMPARISON */}
      <section className="space-y-6 animate-slide-up delay-300 py-4">
          <h3 className="text-center text-xs font-serif uppercase tracking-[0.2em] text-ios-textSec opacity-70">Сравнение подходов</h3>
          
          {/* TRADER CARD */}
          <div className="bg-[#0F0A16] border border-white/5 rounded-xl p-5 relative grayscale-[0.3]">
              <h4 className="text-base font-serif text-white mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2 animate-pulse"></span>
                  Трейдер / Пользователь
              </h4>
              <ul className="space-y-3">
                  <li className="flex gap-3">
                      <Zap size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-ios-textSec leading-snug">Рискует своими деньгами каждую минуту.</p>
                      </div>
                  </li>
                  <li className="flex gap-3">
                      <Activity size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-ios-textSec leading-snug">Потолок дохода ограничен депозитом.</p>
                      </div>
                  </li>
              </ul>
          </div>

          {/* PARTNER CARD */}
          <div className="bg-[#150F25] border border-ios-lilac/30 rounded-xl p-5 relative">
              <h4 className="text-base font-serif text-white mb-4 flex items-center">
                  <Crown size={16} className="text-amber-400 mr-2" />
                  Elite Partner
              </h4>
              <ul className="space-y-3">
                  <li className="flex gap-3">
                      <TrendingUp size={16} className="text-ios-lilac shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-white leading-snug">Создает актив, который приносит прибыль 24/7.</p>
                      </div>
                  </li>
                  <li className="flex gap-3">
                      <ShieldCheck size={16} className="text-ios-lilac shrink-0 mt-0.5" />
                      <div>
                          <p className="text-xs font-serif text-white leading-snug">0% финансовых рисков. Только масштабирование.</p>
                      </div>
                  </li>
              </ul>
          </div>
      </section>

      {/* 6. CONCLUSION */}
      <section className="pt-6 pb-8 animate-slide-up delay-500 text-center">
          <div className="mb-8 px-2">
              <p className="text-lg font-serif text-white leading-relaxed font-medium">
                  ELITE PARTNERS — это твой переход из статуса "Клиент" в статус "Совладелец Бизнеса".
              </p>
              <p className="text-sm font-serif text-ios-lilacLight mt-4 italic opacity-90">
                 Хватит искать удачные сигналы. <br/> Начни зарабатывать на самом рынке. 🚀
              </p>
          </div>

          <div className="glass-card p-1 rounded-xl bg-gradient-lilac/20">
            <button 
                onClick={() => triggerHaptic('heavy')} 
                className="w-full bg-[#05010D] hover:bg-[#120B1F] border border-ios-lilac/50 h-14 rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-95 group"
            >
                <span className="text-transparent bg-clip-text bg-gradient-lilac font-serif text-lg tracking-wide group-hover:tracking-widest transition-all duration-300">
                    ПЕРЕЙТИ К ОБУЧЕНИЮ
                </span>
            </button>
          </div>
      </section>

    </div>
  );
};

export default TabIntro;