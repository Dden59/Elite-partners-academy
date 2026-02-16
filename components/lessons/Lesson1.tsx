import React from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  TrendingUp, 
  Globe2, 
  Zap, 
  Rocket, 
  Gamepad2, 
  Users, 
  Clock,
  Target,
  Smartphone,
  BarChart3,
  CheckCircle2,
  Wallet,
  AlertTriangle,
  RefreshCw,
  ShieldCheck,
  MessageSquare,
  DollarSign,
  MousePointerClick,
  LayoutDashboard,
  ListTodo,
  ExternalLink
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
          <h2 className="text-sm font-medium text-white line-clamp-1">Модуль 1: Полный курс</h2>
       </div>

       <div className="px-4 py-6 space-y-8">
          
          {/* Header Info */}
          <div className="space-y-2">
             <h1 className="text-2xl font-serif text-white leading-tight">Фундамент Элиты: Pocket Option</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Чтение</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> 30 мин (Полный)</span>
             </div>
          </div>
          <hr className="border-white/10" />

          {/* === ЧАСТЬ 1: ВВЕДЕНИЕ === */}
          <section className="animate-fade-in space-y-4">
             <div className="glass-card p-5 rounded-xl border-l-4 border-l-ios-lilac relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-ios-lilac opacity-10 blur-2xl rounded-full"></div>
                <p className="text-white font-serif leading-relaxed relative z-10">
                  <span className="text-2xl float-left mr-2 mt-[-6px]">👋</span>
                  <strong className="text-white">Привет, будущие мастера трафика!</strong><br/>
                  Добро пожаловать на борт. Сегодня я дам вам ключ к финансовой свободе: <strong className="text-ios-lilac">«лить трафик трейдеров и зарабатывать на их активности годами»</strong>.
                </p>
             </div>
             <p className="text-sm text-ios-textSec font-serif leading-relaxed">
                Это не «пирамида» — это классика партнерского маркетинга: вы даёте людям качественный продукт (Pocket Option), они пользуются, вы получаете процент.
             </p>
          </section>

          {/* === 1. ЧТО ТАКОЕ PO === */}
          <section className="animate-fade-in space-y-4">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac text-xs font-bold">1</div>
                <h3 className="text-lg font-serif text-white">Что это такое?</h3>
             </div>
             <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1033] to-[#0A0612] p-5 border border-white/5">
                <Globe2 size={80} className="absolute -top-4 -right-4 text-white opacity-5 rotate-12" />
                <h4 className="text-base font-medium text-white mb-2 relative z-10">Экосистема с 2017 года</h4>
                <p className="text-sm text-ios-textSec relative z-10 mb-4 leading-relaxed">
                  Платформа, которая сломала стереотип о скучном трейдинге. Место, где пересекаются технологии, финансы и геймификация.
                </p>
             </div>
          </section>

          {/* === 2. МЕХАНИКА === */}
          <section className="animate-fade-in space-y-4">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac text-xs font-bold">2</div>
                <h3 className="text-lg font-serif text-white">Механика: Как это работает?</h3>
             </div>
             <div className="space-y-3">
                <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                   <Zap className="text-amber-400 shrink-0 mt-1" size={20} />
                   <div>
                      <h4 className="text-white font-medium text-sm">1. Выбор актива</h4>
                      <p className="text-xs text-ios-textSec mt-1">Валюты, Крипта, Акции (Tesla), Сырье.</p>
                   </div>
                </div>
                <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                   <TrendingUp className="text-blue-400 shrink-0 mt-1" size={20} />
                   <div>
                      <h4 className="text-white font-medium text-sm">2. Прогноз</h4>
                      <p className="text-xs text-ios-textSec mt-1">Цена пойдет <span className="text-green-400 font-bold">ВЫШЕ</span> или <span className="text-rose-400 font-bold">НИЖЕ</span>?</p>
                   </div>
                </div>
                <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                   <Clock className="text-ios-lilac shrink-0 mt-1" size={20} />
                   <div>
                      <h4 className="text-white font-medium text-sm">3. Результат</h4>
                      <p className="text-xs text-ios-textSec mt-1">Угадал? До 95% прибыли. Риск ограничен суммой сделки.</p>
                   </div>
                </div>
             </div>
          </section>

          {/* === 3. ПРЕИМУЩЕСТВА === */}
          <section className="animate-fade-in space-y-4">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac text-xs font-bold">3</div>
                <h3 className="text-lg font-serif text-white">Киллер-фичи</h3>
             </div>
             <div className="grid grid-cols-1 gap-3">
                <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
                   <Rocket size={24} className="text-ios-lilac" />
                   <div>
                      <h4 className="text-white font-bold text-sm">Вход $5 и Демо-счет</h4>
                      <p className="text-[10px] text-ios-textSec">"Пробуй бесплатно, ничем не рискуя".</p>
                   </div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
                   <Gamepad2 size={24} className="text-blue-400" />
                   <div>
                      <h4 className="text-white font-bold text-sm">Геймификация</h4>
                      <p className="text-[10px] text-ios-textSec">Турниры, кристаллы. Игра, которая удерживает.</p>
                   </div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
                   <Users size={24} className="text-green-400" />
                   <div>
                      <h4 className="text-white font-bold text-sm">Копирование сделок</h4>
                      <p className="text-[10px] text-ios-textSec">Бомба для новичков. Просто повторяй за профи.</p>
                   </div>
                </div>
             </div>
          </section>

          {/* === ЧАСТЬ 2: ТЕХНОЛОГИИ И ФИНАНСЫ === */}
          <section className="animate-fade-in space-y-4">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac text-xs font-bold">4</div>
                <h3 className="text-lg font-serif text-white">Мобильность и Активы</h3>
             </div>
             
             <div className="bg-gradient-to-r from-[#1A1033] to-[#0A0612] p-5 rounded-xl border border-ios-lilac/20 mb-4">
                <div className="flex items-center gap-2 mb-3">
                   <Smartphone className="text-ios-lilac" size={20} />
                   <h4 className="text-white font-bold text-sm">Приложение 4.7★</h4>
                </div>
                <p className="text-xs text-ios-textSec">Синхронизация с ПК. Торгуй из метро или на пляже. Скорость молниеносная.</p>
             </div>

             <div className="grid grid-cols-2 gap-2">
                 <div className="bg-[#120B1F] p-3 rounded-lg border border-white/5"><p className="text-xs font-bold text-white">💱 Форекс</p></div>
                 <div className="bg-[#120B1F] p-3 rounded-lg border border-white/5"><p className="text-xs font-bold text-white">₿ Криптовалюты</p></div>
                 <div className="bg-[#120B1F] p-3 rounded-lg border border-white/5"><p className="text-xs font-bold text-white">🏢 Акции</p></div>
                 <div className="bg-[#120B1F] p-3 rounded-lg border border-white/5"><p className="text-xs font-bold text-white">🛢 Сырье</p></div>
             </div>
          </section>

          <section className="animate-fade-in space-y-4">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac text-xs font-bold">5</div>
                <h3 className="text-lg font-serif text-white">Финансы и Риски</h3>
             </div>
             
             <div className="glass-card p-5 rounded-xl space-y-4 border border-green-500/20">
                <ul className="space-y-4">
                   <li className="flex gap-3 items-start">
                      <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                      <div><strong className="text-white text-sm">0% Комиссий за торговлю</strong></div>
                   </li>
                   <li className="flex gap-3 items-start">
                      <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                      <div><strong className="text-white text-sm">Быстрые выплаты</strong></div>
                   </li>
                </ul>
             </div>

             <div className="bg-rose-500/10 border border-rose-500/30 p-5 rounded-xl space-y-3">
                <div className="flex items-center gap-2">
                   <AlertTriangle size={20} className="text-rose-400" />
                   <h4 className="text-rose-100 font-medium text-sm">Честно о рисках</h4>
                </div>
                <p className="text-xs text-rose-200/90 leading-relaxed italic">
                   «Ты можешь зарабатывать, но это риск. Начни с демо, научись, копируй профи.» — Это ваша позиция.
                </p>
             </div>
             
             {/* LTV Block */}
             <div className="glass-card p-4 rounded-xl border border-ios-lilac/30">
                 <div className="flex items-center gap-2 mb-2">
                    <RefreshCw size={18} className="text-ios-lilac" />
                    <h4 className="text-white font-bold text-sm">LTV (Пожизненная ценность)</h4>
                 </div>
                 <p className="text-xs text-ios-textSec">
                    Трейдеры Pocket Option живут долго, потому что здесь удобно. 1 активный трейдер = доход годами.
                 </p>
             </div>
          </section>

          {/* === ЧАСТЬ 3: ЗАРАБОТОК И РЕГИСТРАЦИЯ === */}
          <section className="animate-fade-in space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac text-xs font-bold">6</div>
                <h3 className="text-lg font-serif text-white">Сколько вы заработаете?</h3>
            </div>
            
            <p className="text-sm text-ios-textSec">Вы получаете комиссию от оборота всех привлеченных трейдеров.</p>

            {/* Models Grid */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#120B1F] p-4 rounded-xl border border-ios-lilac/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-ios-lilac opacity-10 blur-xl rounded-full"></div>
                    <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="text-ios-lilac" size={20} />
                        <span className="text-white font-bold text-sm">RevShare</span>
                    </div>
                    <p className="text-xs text-gray-300 font-medium mb-1">50-80% от дохода</p>
                    <p className="text-[10px] text-ios-textSec">Лучше в долгую. Если трейдер активен — вы получаете деньги каждый месяц.</p>
                </div>

                <div className="bg-[#120B1F] p-4 rounded-xl border border-blue-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 opacity-10 blur-xl rounded-full"></div>
                    <div className="flex items-center gap-2 mb-2">
                        <MousePointerClick className="text-blue-400" size={20} />
                        <span className="text-white font-bold text-sm">CPA / CPL</span>
                    </div>
                    <p className="text-xs text-gray-300 font-medium mb-1">Фикс за лида</p>
                    <p className="text-[10px] text-ios-textSec">Оплата за регистрацию/депозит. Быстрые деньги здесь и сейчас.</p>
                </div>
            </div>

            {/* Success Math */}
            <div className="bg-gradient-to-r from-ios-lilac/10 to-transparent p-5 rounded-xl border-l-2 border-ios-lilac">
                <h4 className="text-white text-sm font-bold mb-2">Математика успеха:</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                    Представьте: 10 трейдеров × $1000 объем = <span className="text-white font-bold">$300-$400 комиссии</span>.<br/>
                    А если их 50, 100 или 500? Это уже не просто доход — это финансовая независимость.
                </p>
            </div>
          </section>

          {/* === РЕГИСТРАЦИЯ (GUIDE) === */}
          <section className="animate-fade-in space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac text-xs font-bold">7</div>
                <h3 className="text-lg font-serif text-white">Регистрация (Инструкция)</h3>
            </div>

            <div className="bg-ios-card p-5 rounded-xl border border-white/10 space-y-5">
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-ios-lilac flex items-center justify-center text-[#05010D] text-xs font-bold">1</div>
                        <div className="w-0.5 h-full bg-white/10 my-1"></div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-1">Переход на сайт</h4>
                        <p className="text-xs text-ios-textSec">Используем официальное зеркало: <span className="text-ios-lilac underline">affiliate.p.finance/ru</span>. Жмем "Стать партнером".</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">2</div>
                        <div className="w-0.5 h-full bg-white/10 my-1"></div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-1">Заполнение формы</h4>
                        <p className="text-xs text-ios-textSec">Email, Пароль, Имя (реальное!). Валюта: USD.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">3</div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-1">Подтверждение почты</h4>
                        <p className="text-xs text-ios-textSec">Придет письмо. Обязательно нажми на ссылку внутри!</p>
                    </div>
                </div>
            </div>

            {/* CRITICAL WARNING - THE MOST IMPORTANT PART */}
            <div className="relative overflow-hidden bg-rose-500/10 border border-rose-500 rounded-xl p-5 animate-pulse-glow shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                <div className="absolute -right-4 -top-4 text-rose-500 opacity-20">
                   <AlertTriangle size={80} />
                </div>
                <div className="flex items-center gap-2 mb-3 relative z-10">
                    <AlertTriangle className="text-rose-500" size={24} />
                    <h4 className="text-rose-500 font-bold text-base uppercase tracking-wider">Самый важный шаг!</h4>
                </div>
                <p className="text-white text-sm leading-relaxed font-medium mb-3 relative z-10">
                    Чтобы площадка допустила вас к работе, вы <span className="text-rose-400 underline decoration-rose-400 font-bold">ОБЯЗАНЫ</span> прислать нам в поддержку (в наш бот) ваш <strong>ID и Email</strong>.
                </p>
                <div className="bg-[#05010D]/50 p-2 rounded relative z-10">
                    <p className="text-rose-300 text-xs italic">
                        ⛔ Иначе в регистрации вам будет отказано и мы не сможем начать работу.
                    </p>
                </div>
            </div>

            {/* Setup Guide */}
            <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                    <LayoutDashboard size={18} className="text-ios-lilac" />
                    <h4 className="text-white font-medium text-sm">Что делать в кабинете?</h4>
                </div>
                <ul className="space-y-3 text-xs text-ios-textSec">
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-ios-lilac mt-1.5"></div>
                        <span><strong>Модель:</strong> Выбери RevShare (80%) или CPA.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-ios-lilac mt-1.5"></div>
                        <span><strong>Ссылки:</strong> В разделе "My Links" создай ссылки под разные источники (TikTok, TG).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-ios-lilac mt-1.5"></div>
                        <span><strong>Вывод:</strong> Добавь кошелек (USDT, BTC) в настройках профиля.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-ios-lilac mt-1.5"></div>
                        <span><strong>Промо:</strong> Скачай баннеры в разделе "Promo Materials".</span>
                    </li>
                </ul>
            </div>
          </section>

          {/* === ЧЕК-ЛИСТ И ФИНАЛ === */}
          <section className="animate-fade-in space-y-6 pb-4">
             <div className="flex items-center gap-2 mb-2">
                <ListTodo className="text-ios-lilac" size={20} />
                <h3 className="text-lg font-serif text-white">Чек-лист партнера</h3>
             </div>

             <div className="space-y-2">
                 {[
                    "Зарегистрировался на affiliate.p.finance",
                    "Подтвердил Email",
                    "ОТПРАВИЛ ID В ПОДДЕРЖКУ (!!!)",
                    "Выбрал модель (RevShare/CPA)",
                    "Сгенерировал ссылки",
                    "Настроил вывод средств"
                 ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                        <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center">
                            <div className="w-3 h-3 bg-ios-lilac rounded-sm opacity-50"></div>
                        </div>
                        <span className="text-xs text-gray-300">{item}</span>
                     </div>
                 ))}
             </div>

             {/* Footer Card */}
             <div className="bg-gradient-to-br from-ios-lilac/20 to-purple-900/20 p-6 rounded-2xl border border-ios-lilac/30 text-center relative overflow-hidden mt-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-lilac"></div>
                
                <h3 className="text-white font-serif text-xl mb-3">Что дальше?</h3>
                <p className="text-xs text-ios-textSec mb-6 leading-relaxed">
                    Ты прошел самый важный шаг — стал официальным партнером. <br/>
                    В следующих модулях: <br/>
                    <span className="text-white font-bold">Трафик, Контент, Реклама, Воронки.</span>
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-ios-lilac/20 rounded-full border border-ios-lilac/50 mb-2">
                   <Rocket size={14} className="text-ios-lilac" />
                   <span className="text-[10px] text-white font-bold uppercase tracking-widest">Погнали зарабатывать!</span>
                </div>
             </div>
          </section>

          {/* Finish Button */}
          <div className="pt-4 pb-4">
             <button 
               onClick={onComplete}
               className="w-full btn-primary h-14 rounded-xl text-white font-medium tracking-wide shadow-lg shadow-purple-900/20 active:scale-95 transition-transform"
             >
                ЗАВЕРШИТЬ МОДУЛЬ 1
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson1;