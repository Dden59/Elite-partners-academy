// ========================================================================================================
// FILE: components/TabProfile.tsx
// ========================================================================================================
import React, { useEffect, useState } from 'react';
import { User, Award, ExternalLink, MessageCircle, Save, CheckCircle2 } from 'lucide-react';

const TabProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pocketId: ''
  });
  
  const [progress, setProgress] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('elite_progress') || '[]');
    const totalModules = 9;
    const currentProgress = Math.round((completed.length / totalModules) * 100);
    setProgress(currentProgress > 100 ? 100 : currentProgress);

    const savedUser = localStorage.getItem('elite_user_data');
    if (savedUser) {
      setFormData(JSON.parse(savedUser));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('elite_user_data', JSON.stringify(formData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pb-36 pt-10 px-6 animate-fade-in text-center">
       
       {/* 1. АВАТАР И ПРОГРЕСС */}
       <div className="mb-8">
           <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-ios-lilac to-blue-500 rounded-full p-[2px] mb-4 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
               <div className="w-full h-full bg-[#05010D] rounded-full flex items-center justify-center overflow-hidden">
                   <User size={40} className="text-ios-lilac" strokeWidth={1} />
               </div>
           </div>
           
           <div className="max-w-[200px] mx-auto">
              <div className="flex justify-between text-xs mb-1">
                 <span className="text-ios-textSec">Прогресс обучения</span>
                 <span className="text-white font-bold">{progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                 <div 
                    className="h-full bg-gradient-to-r from-ios-lilac to-blue-500 transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                 ></div>
              </div>
           </div>
       </div>

       {/* 2. ФОРМА ДАННЫХ */}
       <div className="glass-card p-5 rounded-xl border border-white/10 mb-6 text-left">
          <h3 className="text-white font-serif mb-4 flex items-center gap-2">
             <User size={16} className="text-ios-lilac"/> Личные данные
          </h3>
          <div className="space-y-3">
             <input type="text" name="lastName" placeholder="Фамилия" value={formData.lastName} onChange={handleInputChange} className="w-full bg-[#05010D] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-600 focus:border-ios-lilac outline-none transition-colors" />
             <input type="text" name="firstName" placeholder="Имя" value={formData.firstName} onChange={handleInputChange} className="w-full bg-[#05010D] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-600 focus:border-ios-lilac outline-none transition-colors" />
             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full bg-[#05010D] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-600 focus:border-ios-lilac outline-none transition-colors" />
             <input type="text" name="pocketId" placeholder="ID Pocket Option" value={formData.pocketId} onChange={handleInputChange} className="w-full bg-[#05010D] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-600 focus:border-ios-lilac outline-none transition-colors" />
          </div>
          <button onClick={handleSave} className="w-full mt-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95">
             {isSaved ? <CheckCircle2 size={14} className="text-green-400"/> : <Save size={14}/>}
             {isSaved ? 'СОХРАНЕНО' : 'СОХРАНИТЬ ДАННЫЕ'}
          </button>
       </div>

       {/* 3. КНОПКИ ДЕЙСТВИЯ */}
       <div className="space-y-3 mb-8">
           <a href="https://affiliate.p.finance/ru" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 h-14 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 active:scale-95 transition-transform">
              <ExternalLink size={18} className="text-white"/>
              <span className="text-white font-bold text-sm uppercase tracking-wide">Вход в Pocket Option</span>
           </a>
           <a href="https://t.me/adm_ria" target="_blank" rel="noopener noreferrer" className="w-full bg-[#120B1F] border border-ios-lilac/30 h-14 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <MessageCircle size={18} className="text-ios-lilac"/>
              <span className="text-white font-medium text-sm">Поддержка Elite Partners</span>
           </a>
       </div>

       {/* 4. СЕРТИФИКАТ */}
       {progress >= 100 ? (
          <div className="animate-fade-in">
             {!showCertificate ? (
                <button onClick={() => setShowCertificate(true)} className="w-full bg-gradient-to-r from-amber-300 to-amber-500 h-14 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse-glow text-black font-bold uppercase tracking-widest">
                   <Award size={20} /> Получить Сертификат
                </button>
             ) : (
                <div className="relative bg-[#1a1a1a] p-1 border-4 border-amber-500 rounded-lg shadow-2xl">
                   <div className="bg-white text-black p-6 rounded-sm text-center font-serif relative overflow-hidden">
                      <div className="absolute inset-0 border-[4px] border-double border-amber-600/20 m-2 pointer-events-none"></div>
                      
                      {/* Header */}
                      <div className="flex justify-center items-center gap-2 mb-4 opacity-80">
                         <Award size={32} className="text-amber-500" />
                         <span className="font-bold text-sm tracking-widest uppercase text-gray-600">Elite Partners Academy</span>
                      </div>

                      <h2 className="text-3xl font-bold uppercase mb-2 tracking-widest text-gray-900">Сертификат</h2>
                      <p className="text-[10px] text-amber-600 uppercase tracking-[0.3em] mb-6 font-bold">О профессиональной подготовке</p>
                      
                      <p className="text-xs text-gray-500 mb-2 italic">Настоящим подтверждается, что</p>
                      <h3 className="text-2xl font-bold border-b-2 border-amber-500 inline-block px-6 pb-2 mb-6 min-w-[200px]">
                         {formData.firstName || 'Имя'} {formData.lastName || 'Фамилия'}
                      </h3>
                      
                      <p className="text-[11px] text-gray-600 leading-relaxed mb-6 px-4">
                         Успешно завершил(а) полный курс обучения по программе <strong>«Партнерский маркетинг в сфере трейдинга»</strong>. 
                         <br/><br/>
                         Владеет навыками: Арбитраж трафика, Контент-маркетинг, Построение личного бренда, Управление сообществом и Автоматизация процессов.
                      </p>
                      
                      <div className="flex justify-between items-end mt-8 border-t border-gray-200 pt-4 px-2">
                         <div className="text-left">
                            <p className="text-[8px] text-gray-400 uppercase tracking-widest mb-1">Дата выдачи</p>
                            <p className="text-[10px] font-bold text-gray-800">{new Date().toLocaleDateString()}</p>
                         </div>
                         <div className="text-right">
                            <div className="w-20 h-8 bg-contain bg-no-repeat bg-right opacity-60 mb-1" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Signature_sample.svg/1200px-Signature_sample.svg.png)'}}></div>
                            <p className="text-[8px] text-gray-400 uppercase tracking-widest border-t border-gray-300 pt-1">CEO Academy</p>
                         </div>
                      </div>
                   </div>
                   <button onClick={() => setShowCertificate(false)} className="absolute top-2 right-2 bg-black/50 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs hover:bg-black/70">✕</button>
                </div>
             )}
          </div>
       ) : (
          <div className="opacity-50 grayscale select-none">
             <div className="border border-dashed border-white/20 rounded-xl p-4 flex flex-col items-center">
                <Award size={24} className="text-gray-500 mb-2"/>
                <p className="text-xs text-gray-400">Сертификат доступен после прохождения 100% курса</p>
             </div>
          </div>
       )}

       <div className="mt-12 opacity-30">
           <p className="text-[9px] text-ios-textSec uppercase tracking-[0.3em] font-light">
              ID: {formData.pocketId || '---'}
           </p>
       </div>
    </div>
  );
};

export default TabProfile;