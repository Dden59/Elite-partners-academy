import React from 'react';
import { Home, Layers, User } from 'lucide-react';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'intro', icon: Home, label: 'Главная' },
    { id: 'course', icon: Layers, label: 'Обучение' },
    { id: 'profile', icon: User, label: 'Профиль' },
  ];

  const handleTabClick = (id: string) => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.selectionChanged();
    }
    onTabChange(id);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-nav pb-safe pt-2 px-6 z-50 h-[84px] flex justify-between items-start border-t border-ios-lilac/10">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className="flex-1 flex flex-col items-center justify-start pt-2 group"
          >
            <div className={`
               relative p-1.5 transition-all duration-500 ease-out mb-1
               ${isActive ? 'transform translate-y-[-4px]' : 'opacity-50'}
            `}>
              {isActive && (
                 <div className="absolute inset-0 bg-ios-lilac opacity-30 blur-lg rounded-full"></div>
              )}
              <Icon 
                size={24} 
                className={`transition-colors duration-500 ${isActive ? 'text-ios-lilac' : 'text-ios-textSec'}`}
                strokeWidth={1.5}
              />
            </div>
            
            <span className={`text-[10px] font-sans uppercase tracking-[0.1em] transition-colors duration-500 ${isActive ? 'text-ios-lilac' : 'text-ios-textSec'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;