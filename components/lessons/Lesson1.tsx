import React from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  Globe2, 
  ArrowLeft,
  LayoutDashboard,
  Smartphone,
  Users
} from 'lucide-react';

interface LessonProps {
  onBack: () => void;
  onComplete: () => void;
}

const Lesson1: React.FC<LessonProps> = ({ onBack, onComplete }) => {
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
          <h2 className="text-sm font-medium text-white line-clamp-1">Модуль 1: Фундамент Элиты</h2>
       </div>

       <div className="px-4 py-6 space-y-8">
          {/* Intro Section */}
          <div className="space-y-2">
             <h1 className="text-2xl font-serif text-white leading-tight">Фундамент Элиты: Pocket Option</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Чтение</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> 25 мин</span>
             </div>
          </div>

          <hr className="border-white/10" />

          {/* SECTION 0: WELCOME */}
          <section className="animate-fade-in">
             <div className="space-y-6">
                <div className="glass-card p-5 rounded-xl border-l-4 border-l-ios-lilac">
                  <p className="text-white font-serif leading-relaxed">
                    <span className="text-2xl float-left mr-2 mt-[-6px]">👋</span>
                    <strong className="text-white">Привет, будущие мастера трафика!</strong><br/>
                    Добро пожаловать на борт самого амбициозного обучения. Сегодня я дам вам ключ к финансовой свободе: «лить трафик трейдеров и зарабатывать на их активности годами».
                  </p>
                </div>
                
                <p className="text-ios-textSec text-sm font-serif leading-relaxed">
                  Забудьте про скучную теорию. Здесь мы говорим про деньги. Вы будете привлекать игроков (трейдеров) на платформу <span className="text-white">Pocket Option</span>, а платформа будет платить вам комиссию с каждой их сделки. Это классика партнерского маркетинга: вы даёте качественный продукт, люди пользуются, вы получаете процент.
                </p>
             </div>
          </section>

          {/* SECTION 1: WHAT IS PO */}
          <section className="animate-fade-in delay-100">
             <h3 className="text-lg font-serif text-ios-lilac mb-4 flex items-center gap-2">1. Что такое Pocket Option?</h3>
             <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1033] to-[#0A0612] p-5 border border-white/5">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Globe2 size={100} />
                </div>
                <h3 className="text-lg font-serif text-white mb-3 relative z-10">Экосистема, а не просто брокер</h3>
                <p className="text-sm text-ios-textSec relative z-10 mb-4">
                  Запущена в 2017 году. Миллионы пользователей. Миссия дерзкая: сделать трейдинг доступным для каждого. Это место, где пересекаются технологии, финансы и геймификация. Интерфейс разработан так, чтобы даже поколение TikTok чувствовало себя как рыба в воде.
                </p>
             </div>
          </section>

          {/* SECTION 2: MECHANICS */}
          <section className="animate-fade-in delay-200">
            <h3 className="text-lg font-serif text-ios-lilac mb-4 flex items-center gap-2">2. Механика: Как это работает?</h3>
            <p className="text-sm text-ios-textSec mb-4">
              Это база для объяснения клиентам. Представьте прогноз погоды, только для цены актива.
            </p>
            
            <div className="grid grid-cols-1 gap-3">
               <div className="bg-[#120B1F] p-4 rounded-xl flex items-start gap-4 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Выбор актива</h4>
                    <p className="text-xs text-ios-textSec mt-1">Валюты (EUR/USD), Крипта, Акции (Tesla, Amazon), Сырье (Золото, Нефть).</p>
                  </div>
               </div>
               
               <div className="bg-[#120B1F] p-4 rounded-xl flex items-start gap-4 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Прогноз (ВВЕРХ или ВНИЗ?)</h4>
                    <p className="text-xs text-ios-textSec mt-1">Трейдер решает: цена пойдет <span className="text-green-400">ВЫШЕ (CALL)</span> или <span className="text-rose-400">НИЖЕ (PUT)</span>.</p>
                  </div>
               </div>

               <div className="bg-[#120B1F] p-4 rounded-xl flex items-start gap-4 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Время и Результат</h4>
                    <p className="text-xs text-ios-textSec mt-1">От 30 секунд. Угадал? Получи до 95% прибыли. Не угадал? Потерял сумму сделки. Риск ограничен, потенциал — высок.</p>
                  </div>
               </div>
            </div>
          </section>

          {/* SECTION 3: ADVANTAGES */}
          <section className="animate-fade-in delay-300">
             <h3 className="text-lg font-serif text-ios-lilac mb-4 flex items-center gap-2">3. Преимущества (Киллер-фичи)</h3>
             <div className="space-y-3">
                <div className="glass-card p-4 rounded-xl">
                   <div className="flex items-center gap-2 mb-2 text-white">
                      <TrendingUp size={18} className="text-green-400" />
                      <span className="font-bold text-sm">Низкий порог входа</span>
                   </div>
                   <p className="text-xs text-ios-textSec">Депозит от $5-10. И бесконечный Демо-счет для тренировок без риска.</p>
                </div>

                <div className="glass-card p-4 rounded-xl">
                   <div className="flex items-center gap-2 mb-2 text-white">
                      <Smartphone size={18} className="text-blue-400" />
                      <span className="font-bold text-sm">Мобильность</span>
                   </div>
                   <p className="text-xs text-ios-textSec">Лучшее приложение (4.7 рейтинг). Торговля из метро, с пляжа, откуда угодно.</p>
                </div>

                <div className="glass-card p-4 rounded-xl">
                   <div className="flex items-center gap-2 mb-2 text-white">
                      <Users size={18} className="text-purple-400" />
                      <span className="font-bold text-sm">Социальный трейдинг</span>
                   </div>
                   <p className="text-xs text-ios-textSec">Новичок может нажать кнопку «Копировать» и повторять сделки за профи. Это мощно удерживает аудиторию.</p>
                </div>
             </div>
          </section>

          {/* SECTION 4: FINANCE */}
          <section className="animate-fade-in delay-400">
             <h3 className="text-lg font-serif text-ios-lilac mb-4 flex items-center gap-2">4. Финансы и Честность</h3>
             <div className="glass-card p-5 rounded-xl space-y-4">
                <ul className="space-y-3">
                   <li className="flex gap-2 items-start">
                      <CheckCircle2 size={16} className="text-ios-lilac mt-0.5 shrink-0" />
                      <span className="text-xs text-ios-textSec"><strong className="text-white">0% Комиссий</strong> за торговлю. Брокер живет за счет спреда.</span>
                   </li>
                   <li className="flex gap-2 items-start">
                      <CheckCircle2 size={16} className="text-ios-lilac mt-0.5 shrink-0" />
                      <span className="text-xs text-ios-textSec"><strong className="text-white">Вывод средств:</strong> Крипта, Карты, Кошельки. От пары минут до 24 часов.</span>
                   </li>
                   <li className="flex gap-2 items-start">
                      <AlertTriangle size={16} className="text-rose-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-ios-textSec"><strong className="text-white">Риски:</strong> Говорим честно. Это риск. Не обещайте золотые горы. "Начни с демо, научись, потом торгуй".</span>
                   </li>
                </ul>
             </div>
          </section>

          {/* SECTION 5: EARNINGS */}
          <section className="animate-fade-in delay-500">
            <h3 className="text-lg font-serif text-ios-lilac mb-4 flex items-center gap-2">5. Твой Заработок (Цифры)</h3>
            <div className="space-y-4">
                <p className="text-sm text-ios-textSec">Мы зарабатываем на обороте. Чем дольше трейдер живет (LTV), тем нам выгоднее.</p>
                
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#120B1F] p-3 rounded-lg border border-ios-lilac/20 text-center">
                        <span className="block text-xs text-ios-lilac uppercase font-bold mb-1">RevShare</span>
                        <span className="text-white font-bold text-sm block mb-1">% от прибыли</span>
                        <p className="text-[10px] text-gray-400">Пассивный доход годами. Лучший выбор.</p>
                    </div>
                    <div className="bg-[#120B1F] p-3 rounded-lg border border-white/5 text-center">
                        <span className="block text-xs text-blue-400 uppercase font-bold mb-1">CPA</span>
                        <span className="text-white font-bold text-sm block mb-1">Фикс за лида</span>
                        <p className="text-[10px] text-gray-400">Быстрые деньги за первый депозит.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-ios-lilac/10 to-transparent p-4 rounded-xl border-l-2 border-ios-lilac">
                    <h4 className="text-white text-sm font-bold mb-2">Математика успеха:</h4>
                    <p className="text-xs text-gray-300 italic">
                        10 трейдеров × $1000 объем = $300-$400 вашей комиссии.<br/>
                        А если их 100? Это уже $3000-$4000 в месяц.
                    </p>
                </div>
            </div>
          </section>

          {/* SECTION 6: REGISTRATION */}
          <section className="animate-fade-in delay-600">
            <h3 className="text-lg font-serif text-ios-lilac mb-4 flex items-center gap-2">6. РЕГИСТРАЦИЯ ПАРТНЕРА (Важно!)</h3>
            <div className="space-y-4">
                <div className="bg-ios-card p-4 rounded-xl border border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <LayoutDashboard size={16} className="text-ios-lilac"/> 
                        Пошаговый процесс
                    </h4>
                    <ol className="list-decimal list-inside space-y-3 text-xs text-ios-textSec">
                        <li>
                            <span className="text-white">Переход:</span> Используем зеркало <span className="text-ios-lilac underline">affiliate.p.finance/ru</span>
                        </li>
                        <li>
                            <span className="text-white">Форма:</span> Email, Пароль, Имя (реальное!), Валюта (USD).
                        </li>
                        <li>
                            <span className="text-white">Подтверждение:</span> Жмем ссылку в письме на почте.
                        </li>
                    </ol>
                </div>

                {/* CRITICAL WARNING */}
                <div className="bg-rose-500/10 border border-rose-500 rounded-xl p-4 animate-pulse-glow">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="text-rose-500" size={24} />
                        <h4 className="text-rose-500 font-bold text-sm uppercase">Шаг 4: Самый важный!</h4>
                    </div>
                    <p className="text-white text-xs leading-relaxed font-medium">
                        Чтобы площадка допустила вас к работе, вы <span className="text-rose-400 underline decoration-rose-400">ОБЯЗАНЫ</span> прислать нам в поддержку (в наш бот, а не в Pocket Option) ваш <strong>ID и Email</strong>.
                    </p>
                    <p className="text-rose-300 text-[10px] mt-2 italic">
                        Иначе в регистрации вам будет отказано и мы не сможем начать работу.
                    </p>
                </div>

                <div className="bg-[#120B1F] p-4 rounded-xl">
                    <h4 className="text-white font-medium mb-2 text-sm">Дальнейшие настройки:</h4>
                    <ul className="space-y-2 text-xs text-ios-textSec">
                        <li>• Выберите модель (советую RevShare).</li>
                        <li>• Сгенерируйте ссылки в разделе "My Links".</li>
                        <li>• Добавьте кошелек для вывода (Crypto/Cards).</li>
                    </ul>
                </div>
            </div>
          </section>

          {/* SECTION 7: FAQ & FINISH */}
          <section className="animate-fade-in delay-700">
             <h3 className="text-lg font-serif text-ios-lilac mb-4 flex items-center gap-2">7. FAQ и Финал</h3>
             <div className="space-y-6">
                <div className="space-y-3">
                    <div className="glass-card p-3 rounded-lg">
                        <p className="text-xs font-bold text-white mb-1">❓ Я зарегистрировался, но статистика пустая.</p>
                        <p className="text-[10px] text-ios-textSec">Это нормально. Скинь мне свой ID, я проверю привязку. Цифры появятся с первыми трейдерами.</p>
                    </div>
                    <div className="glass-card p-3 rounded-lg">
                        <p className="text-xs font-bold text-white mb-1">❓ Когда деньги?</p>
                        <p className="text-[10px] text-ios-textSec">Начисления — в реальном времени. Вывод — еженедельно или по запросу.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-ios-lilac/20 to-purple-900/20 p-5 rounded-2xl border border-ios-lilac/30 text-center">
                    <h3 className="text-white font-serif text-lg mb-2">Что дальше?</h3>
                    <p className="text-xs text-ios-textSec mb-4">
                        Вы — официальный партнер. У вас есть статус и ссылки.<br/>
                        В следующих модулях мы научимся лить трафик: соцсети, контент, реклама.
                    </p>
                    <p className="text-white font-bold text-sm uppercase tracking-widest">
                        Погнали зарабатывать! 🚀
                    </p>
                </div>
             </div>
          </section>

          {/* Finish Button */}
          <div className="pt-8 pb-4">
             <button 
               onClick={onComplete}
               className="w-full btn-primary h-14 rounded-xl text-white font-medium tracking-wide shadow-lg shadow-purple-900/20 active:scale-95 transition-transform"
             >
                ЗАВЕРШИТЬ УРОК
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson1;