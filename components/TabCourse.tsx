// ========================================================================================================
// FILE: components/TabCourse.tsx
// ========================================================================================================
import React, { useState } from 'react';
import { 
  BookOpen, ChevronRight, Play, Cpu, MessageCircle, 
  ShieldAlert, TrendingUp, Gift, Crown 
} from 'lucide-react';

// Импорт компонентов уроков
import Lesson1 from './lessons/Lesson1';
import Lesson2 from './lessons/Lesson2';
import Lesson3 from './lessons/Lesson3';
import Lesson4 from './lessons/Lesson4';
import Lesson5 from './lessons/Lesson5';
import Lesson6 from './lessons/Lesson6';
import Lesson7 from './lessons/Lesson7';
import Lesson8 from './lessons/Lesson8';
import Lesson9 from './lessons/Lesson9';

const TabCourse: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const handleComplete = () => {
    setActiveLessonId(null);
  };

  // --- RENDER ACTIVE LESSON ---
  if (activeLessonId === 'module-1') return <Lesson1 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  if (activeLessonId === 'module-2') return <Lesson2 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  if (activeLessonId === 'module-3') return <Lesson3 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  if (activeLessonId === 'module-4') return <Lesson4 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  if (activeLessonId === 'module-5') return <Lesson5 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  if (activeLessonId === 'module-6') return <Lesson6 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  if (activeLessonId === 'module-7') return <Lesson7 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  if (activeLessonId === 'module-8') return <Lesson8 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  if (activeLessonId === 'module-9') return <Lesson9 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;

  // --- CONFIGURATION ---
  const modules = [
    { 
      id: 'module-1', 
      title: 'Блок 1: База', 
      desc: 'Регистрация, платформа, первые шаги. Фундамент заработка.', 
      duration: '30 мин', 
      icon: Play, 
      color: 'text-white' 
    },
    { 
      id: 'module-2', 
      title: 'Блок 2: Трафик PRO', 
      desc: 'Контент (Insta, TT) + Платный трафик (Директ, TG Ads, VK).', 
      duration: '60 мин', 
      icon: BookOpen, 
      color: 'text-blue-400' 
    },
    { 
      id: 'module-3', 
      title: 'Блок 3: Личный Бренд', 
      desc: 'Как превратить себя в актив, который работает 24/7.', 
      duration: '40 мин', 
      icon: Crown, 
      color: 'text-amber-500' 
    },
    { 
      id: 'module-4', 
      title: 'Блок 4: Автоматизация и AI', 
      desc: 'Боты, нейросети, автопостинг. Работаем меньше, получаем больше.', 
      duration: 'Скоро', 
      icon: Cpu, 
      color: 'text-purple-400' 
    },
    { 
      id: 'module-5', 
      title: 'Блок 5: Секретные фишки', 
      desc: 'Обход блокировок, клоакинг, маскировка ссылок.', 
      duration: 'Скоро', 
      icon: ShieldAlert, 
      color: 'text-rose-500' 
    },
    { 
      id: 'module-6', 
      title: 'Блок 6: Психология', 
      desc: 'Психология продаж и построение комьюнити.', 
      duration: 'Скоро', 
      icon: MessageCircle, 
      color: 'text-green-400' 
    },
    { 
      id: 'module-7', 
      title: 'Блок 7: Масштаб и Право', 
      desc: 'Юридические вопросы и стратегии кратного роста.', 
      duration: 'Скоро', 
      icon: TrendingUp, 
      color: 'text-cyan-400' 
    },
    { 
      id: 'module-8', 
      title: 'Бонус-модуль', 
      desc: 'Готовые воронки и инструменты для быстрого старта.', 
      duration: 'Скоро', 
      icon: Gift, 
      color: 'text-yellow-400' 
    },
    { 
      id: 'module-9', 
      title: 'Блок 9: Стратегия Будущего', 
      desc: 'Долгосрочное планирование и новые горизонты.', 
      duration: 'Скоро', 
      icon: Play, 
      color: 'text-gray-400' 
    },
  ];

  // --- RENDER MENU ---
  return (
    <div className="pb-36 pt-6 px-4 animate-fade-in">
       <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif text-white">Академия</h2>
          <div className="text-xs font-mono text-ios-lilac border border-ios-lilac/30 px-2 py-1 rounded">
             Elite v2.0
          </div>
       </div>

       <div className="space-y-4">
          {modules.map((mod, idx) => {
             const Icon = mod.icon;
             // Первые 3 урока активны, остальные пока заглушки (но кликабельны, ведут на экраны "Скоро")
             const isReady = idx < 9; 
             
             return (
               <div 
                 key={mod.id}
                 onClick={() => isReady && setActiveLessonId(mod.id)}
                 className={`glass-card p-0 rounded-2xl overflow-hidden group transition-all duration-300 border border-ios-lilac/20 ${isReady ? 'active:scale-[0.98] cursor-pointer' : 'opacity-80 grayscale-[0.3]'}`}
               >
                  <div className={`h-24 bg-gradient-to-r relative overflow-hidden ${idx < 3 ? 'from-[#2E1065] to-[#4C1D95]' : 'from-[#120B1F] to-[#1E1233]'}`}>
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                     <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold tracking-wider uppercase">
                        {idx === 7 ? 'BONUS' : `Модуль ${idx + 1}`}
                     </div>
                     <Icon className={`absolute bottom-4 right-4 opacity-20 rotate-12 ${mod.color}`} size={40} />
                  </div>
                  
                  <div className="p-5">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-serif text-white leading-tight pr-4">{mod.title}</h3>
                        <span className={`text-[10px] flex items-center gap-1 px-2 py-1 rounded ${mod.duration === 'Скоро' ? 'bg-white/5 text-gray-400' : 'bg-ios-lilac/10 text-ios-lilac'}`}>
                           {mod.duration}
                        </span>
                     </div>
                     <p className="text-xs text-ios-textSec line-clamp-2 mb-3">{mod.desc}</p>
                     
                     <div className={`pt-3 border-t border-white/5 flex items-center text-xs font-medium transition-transform group-hover:translate-x-1 ${idx < 3 ? 'text-ios-lilac' : 'text-gray-500'}`}>
                        {idx < 3 ? 'Начать обучение' : 'В разработке'} <ChevronRight size={14} className="ml-1" />
                     </div>
                  </div>
               </div>
             );
          })}
       </div>
    </div>
  );
};

export default TabCourse;