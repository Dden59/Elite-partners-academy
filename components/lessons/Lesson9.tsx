import React from 'react';
import { ArrowLeft, Lock, Crown } from 'lucide-react';

interface LessonProps { onBack: () => void; onComplete: () => void; }

const Lesson9: React.FC<LessonProps> = ({ onBack }) => {
  return (
    <div className="pb-36 pt-4 animate-slide-up bg-[#05010D] min-h-screen absolute top-0 left-0 w-full z-20">
       <div className="sticky top-0 bg-[#05010D]/90 backdrop-blur-xl border-b border-white/5 px-4 py-4 flex items-center gap-4 z-30">
          <button onClick={onBack} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white active:bg-white/10"><ArrowLeft size={18} /></button>
          <h2 className="text-sm font-medium text-white line-clamp-1">Модуль 9: Гранд Финал</h2>
       </div>
       <div className="px-5 py-20 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center relative">
             <Crown size={40} className="text-ios-textSec opacity-50" />
             <div className="absolute -bottom-2 -right-2 bg-ios-lilac p-2 rounded-full border-4 border-[#05010D]"><Lock size={16} className="text-white" /></div>
          </div>
          <div className="space-y-2">
             <h3 className="text-2xl font-serif text-white">Материал готовится</h3>
             <p className="text-sm text-ios-textSec max-w-xs mx-auto">Стратегия выхода на $10,000+ в месяц. Долгосрочное планирование и создание пассивного капитала.</p>
          </div>
       </div>
    </div>
  );
};
export default Lesson9;