import React, { useState } from 'react';
import { ArrowLeft, BookOpen, TrendingUp, ChevronRight, CheckCircle2 } from 'lucide-react';
import Lesson2_Part1 from './Lesson2_Part1';
import Lesson2_Part2 from './Lesson2_Part2';
import Lesson2_Part3 from './Lesson2_Part3';

interface LessonProps {
  onBack: () => void;
  onComplete: () => void;
}

const Lesson2: React.FC<LessonProps> = ({ onBack, onComplete }) => {
  const [currentPart, setCurrentPart] = useState(1);

  const renderPart = () => {
    switch (currentPart) {
      case 1: return <Lesson2_Part1 />;
      case 2: return <Lesson2_Part2 />;
      case 3: return <Lesson2_Part3 />;
      default: return <Lesson2_Part1 />;
    }
  };

  const handleNext = () => {
    if (currentPart < 3) {
      setCurrentPart(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      onComplete();
    }
  };

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
          <div className="flex-1">
             <h2 className="text-sm font-medium text-white line-clamp-1">Модуль 2: Трафик</h2>
             <div className="flex gap-1 mt-1">
                {[1, 2, 3].map(step => (
                   <div key={step} className={`h-1 flex-1 rounded-full ${step <= currentPart ? 'bg-ios-lilac' : 'bg-white/10'}`}></div>
                ))}
             </div>
          </div>
       </div>

       <div className="px-5 py-6">
          {/* Header Info */}
          <div className="space-y-2 mb-8">
             <h1 className="text-2xl font-serif text-white leading-tight">Энциклопедия Трафика</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Часть {currentPart} из 3</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> ~45 мин</span>
             </div>
          </div>
          
          {renderPart()}

          {/* Navigation Button */}
          <div className="mt-12 pt-4 border-t border-white/10">
             <button 
               onClick={handleNext}
               className="w-full btn-primary h-14 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-purple-900/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
             >
                {currentPart < 3 ? (
                   <>ДАЛЕЕ <ChevronRight size={20} /></>
                ) : (
                   <>ЗАВЕРШИТЬ МОДУЛЬ <CheckCircle2 size={20} /></>
                )}
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson2;