import React, { useState } from 'react';
import { BookOpen, ChevronRight, Play, Lock } from 'lucide-react';
import Lesson1 from './lessons/Lesson1';
import Lesson2 from './lessons/Lesson2'; // Импортируем новый урок

const TabCourse: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const handleComplete = () => {
    setActiveLessonId(null);
  };

  // --- RENDER LESSONS ---
  if (activeLessonId === 'module-1') {
    return <Lesson1 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  }
  if (activeLessonId === 'module-2') {
    return <Lesson2 onBack={() => setActiveLessonId(null)} onComplete={handleComplete} />;
  }

  // --- MENU ---
  return (
    <div className="pb-36 pt-6 px-4 animate-fade-in">
       <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif text-white">Программа</h2>
          <div className="text-xs font-mono text-ios-lilac border border-ios-lilac/30 px-2 py-1 rounded">
             v1.3
          </div>
       </div>

       <div className="space-y-4">
          
          {/* MODULE 1 */}
          <div 
            onClick={() => setActiveLessonId('module-1')}
            className="glass-card p-0 rounded-2xl overflow-hidden group active:scale-[0.98] transition-all duration-300 cursor-pointer border border-ios-lilac/20"
          >
             <div className="h-28 bg-gradient-to-r from-[#2E1065] to-[#4C1D95] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold tracking-wider uppercase">
                   Введение
                </div>
             </div>
             <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-[10px] text-ios-lilac font-bold uppercase tracking-widest">Модуль 1</span>
                   <span className="text-[10px] text-ios-textSec flex items-center gap-1"><BookOpen size={12} /> 30 мин</span>
                </div>
                <h3 className="text-lg font-serif text-white mb-2 leading-tight">Фундамент Элиты</h3>
                <p className="text-xs text-ios-textSec">Платформа, Финансы, Регистрация.</p>
             </div>
          </div>

          {/* MODULE 2 (NEW) */}
          <div 
            onClick={() => setActiveLessonId('module-2')}
            className="glass-card p-0 rounded-2xl overflow-hidden group active:scale-[0.98] transition-all duration-300 cursor-pointer border border-ios-lilac/20"
          >
             <div className="h-28 bg-gradient-to-r from-blue-900 to-cyan-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold tracking-wider uppercase">
                   Трафик
                </div>
             </div>
             <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Модуль 2</span>
                   <span className="text-[10px] text-ios-textSec flex items-center gap-1"><BookOpen size={12} /> 45 мин</span>
                </div>
                <h3 className="text-lg font-serif text-white mb-2 leading-tight">Мастер Трафика</h3>
                <p className="text-xs text-ios-textSec">Insta, TikTok, ВК, Telegram Ads, Директ. Полное руководство.</p>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center text-blue-400 text-xs font-medium group-hover:translate-x-1 transition-transform">
                   Начать обучение <ChevronRight size={14} className="ml-1" />
                </div>
             </div>
          </div>

          {/* LOCKED MODULE */}
          <div className="glass-card p-5 rounded-2xl opacity-50 grayscale border border-white/5 relative">
             <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-xs text-white flex items-center gap-2">
                   <Lock size={12} /> Скоро
                </div>
             </div>
             <span className="text-[10px] text-ios-textSec font-bold uppercase tracking-widest block mb-2">Модуль 3</span>
             <h3 className="text-lg font-serif text-white mb-2">Масштабирование</h3>
          </div>

       </div>
    </div>
  );
};

export default TabCourse;