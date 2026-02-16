import React, { useEffect, useState } from 'react';
import TabBar from './components/TabBar';
import TabIntro from './components/TabIntro';
import TabCourse from './components/TabCourse';
import TabProfile from './components/TabProfile';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize Telegram Web App
    const telegram = window.Telegram?.WebApp;
    if (telegram) {
      telegram.ready();
      telegram.expand();
      
      // Deep Purple Theme
      telegram.headerColor = '#05010D';
      telegram.backgroundColor = '#05010D';
      
      setIsReady(true);
    } else {
        setIsReady(true);
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        // Передаем функцию переключения вкладки
        return <TabIntro onStartLearning={() => setActiveTab('course')} />;
      case 'course':
        return <TabCourse />;
      case 'profile':
        return <TabProfile />;
      default:
        return <TabIntro onStartLearning={() => setActiveTab('course')} />;
    }
  };

  if (!isReady) return <div className="min-h-screen bg-ios-bg" />;

  return (
    <div className="min-h-screen bg-ios-bg text-white font-sans antialiased select-none selection:bg-ios-lilac selection:text-white">
      <main className="px-4 pt-4 relative z-10">
        {renderContent()}
      </main>
      
      {/* Ambient Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
         <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-ios-lilac opacity-[0.08] blur-[100px] rounded-full"></div>
         <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#4C1D95] opacity-[0.1] blur-[120px] rounded-full"></div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ios-lilac opacity-[0.03] blur-[150px] rounded-full"></div>
      </div>
      
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;