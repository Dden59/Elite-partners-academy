import React, { useEffect, useState } from 'react';
import { TelegramUser } from '../types';
import { User, Award, ExternalLink } from 'lucide-react';

const TabProfile: React.FC = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      setUser(window.Telegram.WebApp.initDataUnsafe.user);
    } else {
        setUser({
            id: 123456,
            first_name: "Александр",
            last_name: "Elite",
            username: "alex_elite",
            photo_url: "" 
        });
    }
  }, []);

  return (
    <div className="pb-32 pt-10 px-6 animate-fade-in text-center">
       
       {/* Avatar / Name Section */}
       <div className="mb-12">
           <div className="w-24 h-24 mx-auto bg-gradient-lilac rounded-full p-[2px] mb-4 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
               <div className="w-full h-full bg-ios-bg rounded-full flex items-center justify-center overflow-hidden">
                   {user?.photo_url ? (
                       <img src={user.photo_url} alt="Profile" className="w-full h-full object-cover" />
                   ) : (
                       <User size={40} className="text-ios-lilac" strokeWidth={1} />
                   )}
               </div>
           </div>
           
           <h2 className="text-2xl font-serif text-white mb-1">
               {user?.first_name} {user?.last_name}
           </h2>
           <p className="text-xs text-ios-lilac uppercase tracking-[0.2em]">Elite Member</p>
       </div>

       {/* Stacked Buttons Style (Like Contacts in image) */}
       <div className="space-y-4 max-w-sm mx-auto">
            <h3 className="text-xl font-serif text-white mb-6 font-light">Управление</h3>
            
            {[
                { label: 'Мои сертификаты', icon: Award },
                { label: 'Техническая поддержка', icon: ExternalLink },
                { label: 'Настройки профиля', icon: User },
            ].map((item, idx) => (
                <button 
                    key={idx}
                    className="w-full bg-gradient-to-r from-[#9333EA] to-[#C084FC] h-12 rounded-lg flex items-center justify-center relative overflow-hidden group shadow-lg transition-transform active:scale-95"
                >
                    <span className="text-white font-sans font-medium uppercase tracking-[0.1em] text-xs relative z-10">
                        {item.label}
                    </span>
                    {/* Shine effect */}
                    <div className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-[-20deg] group-hover:animate-shimmer transition-all"></div>
                </button>
            ))}
            
            <button className="w-full bg-[#1E1233] border border-ios-lilac/30 h-12 rounded-lg flex items-center justify-center mt-8">
                 <span className="text-ios-lilac font-sans uppercase tracking-[0.1em] text-xs">
                     Выйти
                 </span>
            </button>
       </div>

       <div className="mt-16 opacity-50">
            <p className="text-[9px] text-ios-textSec uppercase tracking-[0.3em] font-light">
                Designed by Elite Partners
            </p>
       </div>
    </div>
  );
};

export default TabProfile;