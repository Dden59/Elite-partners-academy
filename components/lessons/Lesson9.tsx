// ========================================================================================================
// FILE: components/lessons/Lesson9.tsx
// ========================================================================================================
import React from 'react';
import { 
  ArrowLeft, BookOpen, TrendingUp, Globe, Bot, Smartphone, 
  Zap, Package, CheckCircle2, MessageCircle, Clock, ShieldCheck 
} from 'lucide-react';

interface LessonProps {
  onBack: () => void;
  onComplete: () => void;
}

const Lesson9: React.FC<LessonProps> = ({ onBack, onComplete }) => {
  return (
    <div className="pb-36 pt-4 animate-slide-up bg-[#05010D] min-h-screen absolute top-0 left-0 w-full z-20">
       
       {/* Sticky Header */}
       <div className="sticky top-0 bg-[#05010D]/90 backdrop-blur-xl border-b border-white/5 px-4 py-4 flex items-center gap-4 z-30">
          <button 
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white active:bg-white/10"
          >
             <ArrowLeft size={18} />
          </button>
          <h2 className="text-sm font-medium text-white line-clamp-1">Блок 9: Магазин Решений</h2>
       </div>

       <div className="px-5 py-6 space-y-10">
          
          {/* Header Info */}
          <div className="space-y-2">
             <h1 className="text-2xl font-serif text-white leading-tight">ВИТРИНА ГОТОВЫХ РЕШЕНИЙ ПОД КЛЮЧ</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Каталог</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> Premium Tools</span>
             </div>
          </div>
          <hr className="border-white/10" />

          {/* === ВСТУПЛЕНИЕ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="glass-card p-6 rounded-xl border-l-4 border-l-ios-lilac relative overflow-hidden">
                <p className="text-white font-serif leading-relaxed text-base relative z-10">
                  Привет! Ты уже знаешь, как привлекать трафик, но есть вещи, которые лучше доверить профессионалам.
                  <br/><br/>
                  В этом блоке я открываю свою витрину инструментов под ключ. Мы берём на себя всю техническую работу. Ты получаешь полностью готовый продукт.
                </p>
             </div>
          </section>

          {/* === ПРОДУКТ 1: ЛЕНДИНГ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-[#120B1F] p-6 rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden group">
                {/* Price Badge */}
                <div className="absolute top-0 right-0 bg-blue-600 px-4 py-2 rounded-bl-xl shadow-lg z-10">
                   <span className="text-white font-bold text-sm">10 000 ₽</span>
                </div>

                <div className="flex flex-col gap-2 mb-4 relative z-0">
                   <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2"><Globe size={24}/></div>
                   {/* Title with padding to avoid overlap */}
                   <h3 className="text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500 leading-tight pr-24">
                      1. ПРОДАЮЩИЙ ЛЕНДИНГ
                   </h3>
                   <p className="text-xs text-blue-200/70 uppercase tracking-wider">Посадочная страница</p>
                </div>

                <div className="space-y-4 text-ios-textSec text-sm leading-7">
                   <p>Это готовый, профессионально разработанный лендинг, который мы создадим специально для тебя. Идеально для сбора подписчиков или редиректа.</p>

                   <div className="bg-blue-900/10 p-4 rounded-xl border border-blue-500/20">
                      <p className="text-blue-100 font-bold mb-2 text-xs uppercase">Что входит в стоимость:</p>
                      <ul className="space-y-2 text-xs text-gray-300">
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 shrink-0"/> Уникальный дизайн и адаптив</li>
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 shrink-0"/> Продающая структура (Оффер, Отзывы, CTA)</li>
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 shrink-0"/> Хостинг + Домен + Метрика</li>
                      </ul>
                   </div>
                </div>
             </div>
          </section>

          {/* === ПРОДУКТ 2: НЕЙРОКОММЕНТИНГ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-[#120B1F] p-6 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-purple-600 px-4 py-2 rounded-bl-xl shadow-lg z-10">
                   <span className="text-white font-bold text-sm">15 000 ₽</span>
                </div>

                <div className="flex flex-col gap-2 mb-4 relative z-0">
                   <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-2"><Bot size={24}/></div>
                   <h3 className="text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-500 leading-tight pr-24">
                      2. НЕЙРОКОММЕНТИНГ
                   </h3>
                   <p className="text-xs text-purple-200/70 uppercase tracking-wider">Бесплатный трафик</p>
                </div>

                <div className="space-y-4 text-ios-textSec text-sm leading-7">
                   <p>Уникальная программа для авто-комментариев в Telegram с помощью AI. Привлекает внимание к твоему профилю 24/7.</p>

                   <div className="bg-purple-900/10 p-4 rounded-xl border border-purple-500/20">
                      <p className="text-purple-100 font-bold mb-2 text-xs uppercase">Преимущества:</p>
                      <ul className="space-y-2 text-xs text-gray-300">
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 shrink-0"/> Бесплатный органический трафик</li>
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 shrink-0"/> Комментарии от "живых" людей (AI)</li>
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 shrink-0"/> Настройка под ключ + Обучение</li>
                      </ul>
                   </div>
                </div>
             </div>
          </section>

          {/* === ПРОДУКТ 3: БОТ СИГНАЛОВ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-[#120B1F] p-6 rounded-xl border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-green-600 px-4 py-2 rounded-bl-xl shadow-lg z-10">
                   <span className="text-white font-bold text-sm">25 000 ₽</span>
                </div>

                <div className="flex flex-col gap-2 mb-4 relative z-0">
                   <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-2"><Smartphone size={24}/></div>
                   <h3 className="text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500 leading-tight pr-24">
                      3. БОТ ДЛЯ СИГНАЛОВ
                   </h3>
                   <p className="text-xs text-green-200/70 uppercase tracking-wider">Mini App в Telegram</p>
                </div>

                <div className="space-y-4 text-ios-textSec text-sm leading-7">
                   <p>Твой личный бот с красивым интерфейсом. Выдаёт сигналы, собирает базу контактов и продаёт за тебя.</p>

                   <div className="bg-green-900/10 p-4 rounded-xl border border-green-500/20">
                      <p className="text-green-100 font-bold mb-2 text-xs uppercase">Функционал:</p>
                      <ul className="space-y-2 text-xs text-gray-300">
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 shrink-0"/> Стильный Mini App дизайн</li>
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 shrink-0"/> Авто-выдача сигналов (парсинг/ручной)</li>
                         <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 shrink-0"/> Сбор базы лидов в таблицу</li>
                      </ul>
                   </div>
                </div>
             </div>
          </section>

          {/* === ПРОДУКТ 4: ПОЛНАЯ ВОРОНКА (PREMIUM) === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-gradient-to-br from-[#2E1065] to-[#4C1D95] p-1 rounded-xl shadow-[0_0_40px_rgba(168,85,247,0.3)] relative">
                <div className="bg-[#120B1F] rounded-lg p-6 relative overflow-hidden h-full">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 z-10 flex flex-col items-end">
                       <div className="bg-amber-500 text-black font-bold px-4 py-2 rounded-bl-xl shadow-lg">
                          47 000 ₽
                       </div>
                       <div className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg backdrop-blur-md">
                          Выгода 23 000 ₽
                       </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-6 relative z-0">
                       <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black mb-2 shadow-[0_0_15px_rgba(245,158,11,0.5)]"><Zap size={24} fill="currentColor"/></div>
                       <h3 className="text-2xl font-serif font-bold text-white leading-tight pr-24 drop-shadow-md">
                          4. ПОЛНАЯ ВОРОНКА
                       </h3>
                       <p className="text-xs text-amber-300 uppercase tracking-widest font-bold">Твой личный отдел продаж</p>
                    </div>

                    <div className="space-y-4 text-white/90 text-sm leading-7">
                       <p>Полностью автоматизированная система: от клика до регистрации. 3 этапа прогрева.</p>

                       <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
                          <div className="flex items-center gap-3">
                             <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">1</div>
                             <span className="text-xs">Конвертирующий Лендинг</span>
                          </div>
                          <div className="w-0.5 h-3 bg-white/10 ml-3"></div>
                          <div className="flex items-center gap-3">
                             <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">2</div>
                             <span className="text-xs">ИИ-бот (маскировка под человека)</span>
                          </div>
                          <div className="w-0.5 h-3 bg-white/10 ml-3"></div>
                          <div className="flex items-center gap-3">
                             <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">3</div>
                             <span className="text-xs">Бот с сигналами (Mini App)</span>
                          </div>
                       </div>
                       
                       <p className="text-center text-amber-300 text-xs font-bold pt-2">Под ключ + Поддержка + Гарантия</p>
                    </div>
                </div>
             </div>
          </section>

          {/* === ПАКЕТЫ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold"><Package size={18}/></div>
                <h3 className="text-xl font-serif text-white">ВЫГОДНЫЕ КОМБО</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-ios-textSec text-sm">
                {/* Package 1 */}
                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5 relative overflow-hidden">
                   <div className="flex justify-between items-start mb-2 relative z-10">
                      <h4 className="text-white font-bold text-lg">Пакет "ТРАФИК"</h4>
                   </div>
                   <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-white">22 000 ₽</span>
                      <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded">-3 000 ₽</span>
                   </div>
                   
                   <ul className="space-y-2 text-xs mb-4">
                      <li className="flex gap-2"><span className="text-purple-400">●</span> Нейрокомментинг</li>
                      <li className="flex gap-2"><span className="text-blue-400">●</span> Продающий лендинг</li>
                   </ul>
                   <p className="text-[10px] bg-white/5 p-2 rounded text-gray-400">Идеально для старта: трафик + посадочная.</p>
                </div>

                {/* Package 2 */}
                <div className="bg-[#120B1F] p-5 rounded-xl border border-amber-500/20 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500 opacity-10 blur-2xl rounded-full"></div>
                   <div className="flex justify-between items-start mb-2 relative z-10">
                      <h4 className="text-amber-400 font-bold text-lg">Пакет "АВТОМАТ"</h4>
                   </div>
                   <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-white">29 000 ₽</span>
                      <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">Выгода 6 000 ₽</span>
                   </div>
                   
                   <ul className="space-y-2 text-xs mb-4">
                      <li className="flex gap-2"><span className="text-green-400">●</span> Бот для сигналов</li>
                      <li className="flex gap-2"><span className="text-blue-400">●</span> Продающий лендинг</li>
                   </ul>
                   <p className="text-[10px] bg-white/5 p-2 rounded text-gray-400">Полная упаковка для монетизации канала.</p>
                </div>
             </div>
          </section>

          {/* === CTA & ORDER === */}
          <section className="space-y-6 pb-6 animate-fade-in">
             <div className="bg-gradient-to-br from-green-600 to-emerald-800 p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                
                <h3 className="text-white font-serif text-2xl mb-4 relative z-10">КАК ЗАКАЗАТЬ?</h3>
                <p className="text-sm text-white/90 mb-6 leading-relaxed relative z-10">
                    Твой доход ждёт. Хватит тратить время на технические детали.
                </p>
                
                <a 
                   href="https://t.me/adm_ria" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-green-700 hover:bg-green-50 font-bold rounded-xl shadow-lg transition-all active:scale-95 relative z-10"
                >
                   <MessageCircle size={20} />
                   НАПИСАТЬ МЕНЕДЖЕРУ
                </a>
             </div>
          </section>

          {/* Finish Button */}
          <div className="pt-4 pb-4">
             <button 
               onClick={onComplete}
               className="w-full btn-primary h-16 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-yellow-900/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
             >
                <CheckCircle2 size={20} />
                ОЗНАКОМИЛСЯ И ЗАВЕРШИТЬ КУРС
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson9;