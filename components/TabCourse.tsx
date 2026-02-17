import React, { useState, useEffect } from 'react';
import { 
  BookOpen, ChevronRight, Play, Cpu, MessageCircle, 
  ShieldAlert, TrendingUp, Gift, Crown, CheckCircle2 
} from 'lucide-react';

// Импорт уроков
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
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // Загружаем прогресс при запуске
  useEffect(() => {
    const saved = localStorage.getItem('elite_progress');
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  const handleComplete = () => {
    if (activeLessonId && !completedLessons.includes(activeLessonId)) {
      const newCompleted = [...completedLessons, activeLessonId];
      setCompletedLessons(newCompleted);
      localStorage.setItem('elite_progress', JSON.stringify(newCompleted));
    }
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
    { id: 'module-1', title: 'Блок 1: База', desc: 'Регистрация, платформа, первые шаги.', duration: '30 мин', icon: Play, color: 'text-white' },
    { id: 'module-2', title: 'Блок 2: Трафик PRO', desc: 'Контент + Платный трафик.', duration: '60 мин', icon: BookOpen, color: 'text-blue-400' },
    { id: 'module-3', title: 'Блок 3: Личный Бренд', desc: 'Как превратить себя в актив.', duration: '40 мин', icon: Crown, color: 'text-amber-500' },
    { id: 'module-4', title: 'Блок 4: Автоматизация', desc: 'Боты, нейросети, автопостинг.', duration: '45 мин', icon: Cpu, color: 'text-purple-400' },
    { id: 'module-5', title: 'Блок 5: Секретные фишки', desc: 'Обход блокировок, маскировка.', duration: '30 мин', icon: ShieldAlert, color: 'text-rose-500' },
    { id: 'module-6', title: 'Блок 6: Психология', desc: 'Психология продаж и комьюнити.', duration: '35 мин', icon: MessageCircle, color: 'text-green-400' },
    { id: 'module-7', title: 'Блок 7: Масштаб и Право', desc: 'Юридические вопросы и рост.', duration: '25 мин', icon: TrendingUp, color: 'text-cyan-400' },
    { id: 'module-8', title: 'Бонус-модуль', desc: 'Готовые воронки и инструменты.', duration: '20 мин', icon: Gift, color: 'text-yellow-400' },
    { id: 'module-9', title: 'Блок 9: Стратегия', desc: 'Долгосрочное планирование.', duration: '15 мин', icon: Play, color: 'text-gray-400' },
  ];

  return (
    <div className="pb-36 pt-6 px-4 animate-fade-in">
       <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif text-white">Академия</h2>
          <div className="text-xs font-mono text-ios-lilac border border-ios-lilac/30 px-2 py-1 rounded">
             {completedLessons.length} / 9
          </div>
       </div>

       <div className="space-y-4">
          {modules.map((mod, idx) => {
             const Icon = mod.icon;
             const isCompleted = completedLessons.includes(mod.id);
             
             return (
               <div 
                 key={mod.id}
                 onClick={() => setActiveLessonId(mod.id)}
                 className={`glass-card p-0 rounded-2xl overflow-hidden group transition-all duration-300 border active:scale-[0.98] cursor-pointer ${isCompleted ? 'border-green-500/50' : 'border-ios-lilac/20'}`}
               >
                  <div className={`h-24 bg-gradient-to-r relative overflow-hidden ${isCompleted ? 'from-green-900 to-emerald-900' : 'from-[#120B1F] to-[#1E1233]'}`}>
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                     <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold tracking-wider uppercase flex items-center gap-2">
                        {idx === 7 ? 'BONUS' : `Модуль ${idx + 1}`}
                        {isCompleted && <CheckCircle2 size={10} className="text-green-400"/>}
                     </div>
                     <Icon className={`absolute bottom-4 right-4 opacity-20 rotate-12 ${mod.color}`} size={40} />
                  </div>
                  
                  <div className="p-5">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-serif text-white leading-tight pr-4">{mod.title}</h3>
                     </div>
                     <p className="text-xs text-ios-textSec line-clamp-2 mb-3">{mod.desc}</p>
                     
                     <div className={`pt-3 border-t border-white/5 flex items-center text-xs font-medium transition-transform group-hover:translate-x-1 ${isCompleted ? 'text-green-400' : 'text-ios-lilac'}`}>
                        {isCompleted ? 'Пройдено' : 'Начать обучение'} <ChevronRight size={14} className="ml-1" />
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