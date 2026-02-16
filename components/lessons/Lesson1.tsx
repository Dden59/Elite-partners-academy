import React from 'react';
import { 
  ArrowLeft, BookOpen, TrendingUp, Globe2, Zap, Rocket, Gamepad2, Users, 
  Clock, Smartphone, BarChart3, CheckCircle2, Wallet, AlertTriangle, 
  RefreshCw, ShieldCheck, DollarSign, MousePointerClick, LayoutDashboard, ListTodo
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

       <div className="px-5 py-6 space-y-10">
          
          {/* Info Block */}
          <div className="space-y-2">
             <h1 className="text-2xl font-serif text-white leading-tight">Фундамент Элиты: Pocket Option</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Чтение</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> 30-40 мин</span>
             </div>
          </div>
          <hr className="border-white/10" />

          {/* === ВСТУПЛЕНИЕ === */}
          <section className="space-y-6 animate-fade-in">
             <h3 className="text-xl font-serif text-ios-lilac">Введение</h3>
             
             <div className="glass-card p-5 rounded-xl border-l-4 border-l-ios-lilac relative overflow-hidden">
                <p className="text-white font-serif leading-relaxed text-base">
                  <span className="text-2xl float-left mr-2 mt-[-6px]">👋</span>
                  <strong>Привет, будущие мастера трафика!</strong><br/><br/>
                  Добро пожаловать на борт самого амбициозного обучения, которое превратит вас из простого пользователя интернета в профессионального генератора лидов для одной из самых горячих платформ в мире трейдинга. Сегодня я дам вам ключ к финансовой свободе, который называется <strong className="text-ios-lilac">«лить трафик трейдеров и зарабатывать на их активности годами»</strong>.
                </p>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p>
                  Забудьте про скучную теорию. Здесь мы говорим про деньги. Про то, как превратить поток людей, интересующихся заработком, криптовалютами и инвестициями, в ваш стабильный пассивный доход. Вы будете привлекать игроков (трейдеров) на платформу Pocket Option, а платформа будет платить вам комиссию с каждой их сделки. Месяц за месяцем, пока они активны.
                </p>
                <p>
                  Это не «пирамида» и не привлечение партнёров под себя — это чистая классика партнерского маркетинга: вы даёте людям качественный продукт, они пользуются, вы получаете процент.
                </p>
                <p className="text-white font-medium">
                  И сейчас я расскажу вам про этот продукт всё. Максимально подробно, сочно, с деталями, чтобы вы могли не просто вставить ссылку куда-то, а продавать идею, закрывать возражения и становиться экспертом в глазах своей аудитории. Поехали!
                </p>
             </div>
          </section>

          {/* === 1. ЧТО ТАКОЕ PO === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">1</div>
                <h3 className="text-xl font-serif text-white">Что это вообще такое?</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p>
                   Pocket Option — это не просто очередной брокер. Это международная торговая экосистема, запущенная в 2017 году, которая за несколько лет превратилась в одну из самых быстрорастущих платформ для трейдинга в мире. На сегодняшний день аудитория платформы насчитывает миллионы пользователей по всему земному шару — от Европы до Азии, от Америки до Африки.
                </p>
                
                <div className="glass-card p-4 rounded-xl border border-white/10">
                   <Globe2 className="mb-3 text-ios-lilac" size={24} />
                   <p className="text-white italic">
                      "Миссия платформы звучит дерзко: сделать трейдинг доступным для каждого."
                   </p>
                </div>

                <p>
                   Неважно, живёте вы в мегаполисе с кучей дипломов или в небольшом городке и только начинаете интересоваться финансами. Pocket Option ломает стереотип о том, что торговля на бирже — это удел седых профессоров с математическим складом ума. Здесь всё по-другому: просто, быстро, визуально красиво и, что самое главное, — интересно.
                </p>
                <p>
                   Если описывать платформу одним предложением, то это — место, где пересекаются <strong>технологии, финансы и геймификация</strong>. Интерфейс разработан так, чтобы даже поколение TikTok, привыкшее к свайпам и мгновенному отклику, чувствовало себя как рыба в воде. Но за этой лёгкостью скрывается мощная инженерия, серьёзные торговые инструменты и глубокая аналитика.
                </p>
             </div>
          </section>

          {/* === 2. МЕХАНИКА === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">2</div>
                <h3 className="text-xl font-serif text-white">Механика изнутри</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p>
                   В основе работы Pocket Option лежит торговля бинарными и цифровыми опционами. Давайте объясним это максимально просто, чтобы вы могли пересказывать своим друзьям, подписчикам и потенциальным трейдерам на пальцах.
                </p>
                <p className="text-white font-bold">Как это работает?</p>
                <p>
                   Представьте, что вы делаете прогноз погоды: будет сегодня дождь или солнце? Только вместо погоды вы прогнозируете движение цены актива (например, биткоина или акций Apple).
                </p>
             </div>

             <div className="space-y-4">
                <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Zap size={16} className="text-amber-400"/> 1. Выбор актива</h4>
                   <p className="text-sm text-ios-textSec leading-relaxed">
                      Трейдер заходит на платформу и выбирает, чем он хочет торговать. Это может быть валютная пара (EUR/USD), криптовалюта (BTC, ETH), акции Tesla, Amazon, золото, нефть, индексы S&P 500 — выбор огромен.
                   </p>
                </div>

                <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2 flex items-center gap-2"><TrendingUp size={16} className="text-blue-400"/> 2. Прогноз (Куда пойдет цена?)</h4>
                   <p className="text-sm text-ios-textSec leading-relaxed">
                      Трейдер должен ответить всего на один вопрос: цена на этот актив через указанное время будет <span className="text-green-400">ВЫШЕ (CALL)</span> или <span className="text-rose-400">НИЖЕ (PUT)</span>, чем сейчас? Никаких сложных графиков, если не хочешь, просто выбираешь направление.
                   </p>
                </div>

                <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Clock size={16} className="text-ios-lilac"/> 3. Время и Результат</h4>
                   <p className="text-sm text-ios-textSec leading-relaxed">
                      На Pocket Option можно торговать на сверхкоротких дистанциях — от 30 секунд. Это настоящий рай для любителей адреналина. 
                      Если прогноз верен — трейдер получает до 95% прибыли. Если ошибся — теряет только сумму сделки. Риск ограничен, потенциал — высок.
                   </p>
                </div>
             </div>

             <p className="text-ios-textSec text-sm leading-7 font-serif">
                Это база. Но платформа пошла дальше и добавила другие форматы, например, опционы «Одно касание», где цель — угадать, коснётся ли цена заданного уровня. Там доходность может доходить до 500%, что звучит просто космически и привлекает самых азартных трейдеров.
             </p>
          </section>

          {/* === 3. ПРЕИМУЩЕСТВА === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">3</div>
                <h3 className="text-xl font-serif text-white">Киллер-фичи</h3>
             </div>
             
             <p className="text-ios-textSec text-sm mb-2">
                Чтобы вы могли эффектно презентовать платформу своей аудитории, нужно знать её уникальные торговые преимущества. Вот они, разложенные по полочкам.
             </p>

             <div className="space-y-6">
                <div>
                    <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2"><Rocket className="text-ios-lilac"/> Низкий порог входа и Демо</h4>
                    <p className="text-sm text-ios-textSec leading-7 font-serif">
                        Это, пожалуй, главная "завлекалочка". Минимальный депозит на платформе составляет всего $5–$10. Скажите честно: где вы ещё найдёте возможность начать торговать на международных рынках с такими деньгами? Это снимает психологический барьер у новичков.
                        <br/><br/>
                        Но самое крутое — <strong>бесконечный демо-счет</strong>. Любой желающий может получить виртуальные деньги и тренироваться без риска. Это идеальный «крючок». Вы можете сказать: «Заходи, пробуй бесплатно, сколько хочешь. А когда будешь готов — начнёшь с реальными».
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2"><Gamepad2 className="text-blue-400"/> Геймификация</h4>
                    <p className="text-sm text-ios-textSec leading-7 font-serif">
                        Pocket Option первой поняла, что трейдинг может быть увлекательным.
                        <br/>• <strong>Турниры:</strong> Соревнования с реальными призами. Это спорт.
                        <br/>• <strong>Достижения:</strong> Ачивки и бонусы за активность. Как в игре.
                        <br/>• <strong>Кэшбэк:</strong> Возврат до 10% от убытков. Это мощнейший инструмент удержания.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2"><Users className="text-green-400"/> Социальный трейдинг</h4>
                    <p className="text-sm text-ios-textSec leading-7 font-serif">
                        Просто бомба для новичков. Функция позволяет автоматически копировать сделки профитных трейдеров. Новичок видит рейтинг успешных трейдеров и просто нажимает кнопку «Копировать». Он зарабатывает вместе с гуру, учится и не уходит с платформы.
                    </p>
                </div>
             </div>
          </section>

          {/* === 4. ТЕХНОЛОГИИ И АНАЛИТИКА === */}
          <section className="space-y-6 animate-fade-in">
             <div className="glass-card p-5 rounded-xl border border-ios-lilac/20">
                <div className="flex items-center gap-2 mb-4">
                   <Smartphone className="text-ios-lilac" size={24} />
                   <h3 className="text-lg font-serif text-white">Технологичность и Мобильность</h3>
                </div>
                <div className="text-sm text-ios-textSec leading-7 font-serif space-y-3">
                   <p>Pocket Option — это не просто сайт. Это полноценное мобильное приложение с оценкой 4.7.</p>
                   <ul className="list-disc list-inside space-y-1 ml-1">
                      <li>Синхронизация с десктопной версией.</li>
                      <li>Торговля откуда угодно: метро, пляж, кофейня.</li>
                      <li>Молниеносная скорость исполнения сделок.</li>
                   </ul>
                </div>
             </div>

             <div className="glass-card p-5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                   <BarChart3 className="text-blue-400" size={24} />
                   <h3 className="text-lg font-serif text-white">Аналитическая мощь</h3>
                </div>
                <div className="text-sm text-ios-textSec leading-7 font-serif space-y-3">
                   <p>Для тех, кто предпочитает анализировать:</p>
                   <ul className="list-disc list-inside space-y-1 ml-1">
                      <li>Более 30 встроенных индикаторов (RSI, MACD и т.д.).</li>
                      <li>Функция бэктестинга стратегий на истории.</li>
                      <li>Экономический календарь прямо в интерфейсе.</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* === 5. АССОРТИМЕНТ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">4</div>
                <h3 className="text-xl font-serif text-white">Ассортимент активов</h3>
             </div>
             
             <p className="text-sm text-ios-textSec leading-7 font-serif">
                Вы должны понимать широту выбора, чтобы привлекать самую разную аудиторию. На платформе доступно более 130 торговых инструментов.
             </p>

             <div className="grid grid-cols-1 gap-3 text-sm">
                 <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5">
                    <p className="text-white font-bold mb-1">💱 Валютные пары (Форекс)</p>
                    <p className="text-ios-textSec text-xs">От классики EUR/USD до экзотики. Для любителей стабильности.</p>
                 </div>
                 <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5">
                    <p className="text-white font-bold mb-1">₿ Криптовалюты</p>
                    <p className="text-ios-textSec text-xs">Bitcoin, Ethereum, Dogecoin. Самая горячая тема. Молодёжь будет в восторге.</p>
                 </div>
                 <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5">
                    <p className="text-white font-bold mb-1">🏢 Акции</p>
                    <p className="text-ios-textSec text-xs">Apple, Tesla, Amazon. Люди торгуют брендами, не покупая их физически.</p>
                 </div>
                 <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5">
                    <p className="text-white font-bold mb-1">🛢 Товары и Индексы</p>
                    <p className="text-ios-textSec text-xs">Золото, нефть, S&P 500. Классика для консервативных трейдеров.</p>
                 </div>
             </div>
          </section>

          {/* === 6. ФИНАНСЫ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">5</div>
                <h3 className="text-xl font-serif text-white">Финансы и Прозрачность</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p>Этот блок важен, потому что вопросы денег — самые острые. Ваши трейдеры будут спрашивать: «А не кинут ли?», «Сколько с меня снимут?». Вы должны знать ответы.</p>
                
                <ul className="space-y-4">
                   <li className="flex gap-3 items-start">
                      <CheckCircle2 size={20} className="text-green-500 mt-1 shrink-0" />
                      <div>
                          <strong className="text-white block">Никаких комиссий за торговлю</strong>
                          Pocket Option не берёт комиссию за открытие и закрытие сделок. Заработок заложен в спред. Честная модель.
                      </div>
                   </li>
                   <li className="flex gap-3 items-start">
                      <CheckCircle2 size={20} className="text-green-500 mt-1 shrink-0" />
                      <div>
                          <strong className="text-white block">50+ способов оплаты</strong>
                          Криптовалюты (USDT, BTC), электронные кошельки, карты. Платформа заточена под весь мир.
                      </div>
                   </li>
                   <li className="flex gap-3 items-start">
                      <CheckCircle2 size={20} className="text-green-500 mt-1 shrink-0" />
                      <div>
                          <strong className="text-white block">Скорость выплат</strong>
                          Заявлено до 24 часов, на практике часто мгновенно. Это вызывает доверие.
                      </div>
                   </li>
                </ul>
             </div>
          </section>

          {/* === 7. БОНУСЫ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">6</div>
                <h3 className="text-xl font-serif text-white">Бонусная система</h3>
             </div>

             <div className="glass-card p-5 rounded-xl border border-amber-500/20">
                <div className="space-y-4 text-sm text-ios-textSec leading-relaxed">
                   <p>То, что заставляет клиентов вносить депозиты снова и снова:</p>
                   <ul className="list-disc list-inside space-y-2 text-white">
                      <li><strong>Приветственный бонус:</strong> До 50% на первый депозит. Внес 100$, получил 150$.</li>
                      <li><strong>Регулярные акции:</strong> Бонусы за пополнение.</li>
                      <li><strong>Майнинг токенов:</strong> Уникальная фишка. Пользователи "майнят" кристаллы прямо во время торговли. Это как игра, которая приносит реальный доход.</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* === 8. РИСКИ И ВОЗРАЖЕНИЯ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">7</div>
                <h3 className="text-xl font-serif text-white">Честный разговор о рисках</h3>
             </div>

             <div className="bg-rose-500/10 border border-rose-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                   <AlertTriangle size={24} className="text-rose-400" />
                   <h4 className="text-rose-100 font-bold text-lg">Позиция Партнера</h4>
                </div>
                <p className="text-sm text-rose-200/90 leading-7 font-serif mb-4">
                   В обучении партнёров важно учить вас говорить правду. Да, бинарные опционы — это высокорисковый инструмент. Люди могут потерять деньги. Вы не должны обещать «золотые горы».
                </p>
                <div className="bg-rose-500/20 p-4 rounded-lg border-l-2 border-rose-500 italic text-rose-100 text-sm">
                   «Ты можешь зарабатывать, но должен понимать, что это не лотерея, а анализ и риск. Начни с демо, научись, копируй у профи, и только потом вкладывай серьёзные деньги».
                </div>
             </div>

             <div className="space-y-4 text-sm text-ios-textSec leading-7 font-serif">
                <p><strong className="text-white">Регуляция:</strong> Компания имеет лицензию IFMRRC. Это позволяет работать быстро и без бюрократии. Для трейдера главное — надёжность выплат, а у Pocket Option с этим порядок.</p>
                <p><strong className="text-white">Отзывы:</strong> Есть и хорошие, и плохие. Это норма. Важно знать, что поддержка работает 24/7. Если что — пишем на support@pocketoption.com.</p>
             </div>
          </section>

          {/* === 9. LTV === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">8</div>
                <h3 className="text-xl font-serif text-white">Почему они остаются?</h3>
             </div>

             <div className="glass-card p-5 rounded-xl border border-ios-lilac/30 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                 <div className="flex items-center gap-2 mb-3">
                    <RefreshCw size={24} className="text-ios-lilac" />
                    <h4 className="text-white font-bold text-lg">LTV — Ваш золотой грааль</h4>
                 </div>
                 <p className="text-sm text-ios-textSec leading-7 font-serif mb-3">
                    Трейдеры — народ непостоянный. Но Pocket Option создала экосистему, которая удерживает: обновления, турниры, общение, мгновенные выплаты.
                 </p>
                 <p className="text-sm text-white font-bold">
                    Чем дольше трейдер остаётся на платформе, тем дольше он приносит вам доход. Один привлечённый клиент может кормить вас годами.
                 </p>
             </div>
          </section>

          {/* === 10. ЗАРАБОТОК === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">9</div>
                <h3 className="text-xl font-serif text-white">Ваш заработок</h3>
             </div>

             <p className="text-sm text-ios-textSec leading-7 font-serif">
                В двух словах: вы получаете комиссию от оборота всех привлечённых вами трейдеров. Моделей несколько:
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#120B1F] p-5 rounded-xl border border-ios-lilac/20">
                    <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="text-ios-lilac" size={24} />
                        <span className="text-white font-bold text-lg">RevShare</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium mb-2">50-80% от дохода платформы</p>
                    <p className="text-xs text-ios-textSec leading-relaxed">
                        Вы получаете процент от каждой сделки. Если трейдер активен, вы получаете деньги каждый месяц. Лучший выбор в долгую.
                    </p>
                </div>

                <div className="bg-[#120B1F] p-5 rounded-xl border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                        <MousePointerClick className="text-blue-400" size={24} />
                        <span className="text-white font-bold text-lg">CPA / CPL</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium mb-2">Оплата за регистрацию/депозит</p>
                    <p className="text-xs text-ios-textSec leading-relaxed">
                        Фиксированная сумма за каждого, кто внес депозит. Хорошо для быстрого заработка здесь и сейчас.
                    </p>
                </div>
             </div>

             <div className="bg-gradient-to-r from-ios-lilac/10 to-transparent p-6 rounded-xl border-l-4 border-ios-lilac">
                <h4 className="text-white text-base font-bold mb-3">Математика успеха:</h4>
                <p className="text-sm text-gray-300 leading-7 font-serif">
                    Представьте: вы привлекли 10 трейдеров, каждый делает объем $1000/мес. Ваша комиссия ≈ <span className="text-white font-bold">$300-$400</span> с одного. Умножаем на 10 = <span className="text-white font-bold">$3000-$4000 в месяц</span>.
                    <br/><br/>
                    А теперь представьте, что у вас 50, 100 или 500 рефералов. Это финансовая независимость.
                </p>
             </div>

             <div className="glass-card p-5 rounded-xl bg-white/5 border border-white/10 italic text-sm text-ios-textSec leading-7 font-serif">
                "Друзья, Pocket Option — это идеальный продукт. Вход 5 баксов, демо-счет, турниры. Это реально сочная игрушка для взрослых, где можно рубить капусту. Нам есть что предложить людям! А главное — это всё приносит нам деньги, пока трейдеры просто занимаются своим делом."
             </div>
          </section>

          {/* === 11. ИНСТРУКЦИЯ ПО РЕГИСТРАЦИИ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">10</div>
                <h3 className="text-xl font-serif text-white">Регистрация Партнера</h3>
             </div>

             <div className="bg-ios-card p-6 rounded-xl border border-white/10 space-y-6">
                <h4 className="text-white font-medium flex items-center gap-2">
                    <LayoutDashboard size={20} className="text-ios-lilac"/> 
                    Пошаговое руководство (5-10 минут)
                </h4>

                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-ios-lilac flex items-center justify-center text-[#05010D] font-bold text-sm">1</div>
                            <div className="w-0.5 h-full bg-white/10 my-1"></div>
                        </div>
                        <div className="pb-4">
                            <h5 className="text-white font-bold text-sm mb-1">Переход на сайт</h5>
                            <p className="text-sm text-ios-textSec leading-relaxed">
                                Заходим на зеркало: <a href="#" className="text-ios-lilac underline">affiliate.p.finance/ru</a>. Нажимаем кнопку «Регистрация» или «Стать партнёром». Важно регистрироваться именно в партнерском разделе.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">2</div>
                            <div className="w-0.5 h-full bg-white/10 my-1"></div>
                        </div>
                        <div className="pb-4">
                            <h5 className="text-white font-bold text-sm mb-1">Заполнение формы</h5>
                            <p className="text-sm text-ios-textSec leading-relaxed">
                                Email, надежный Пароль, реальные Имя и Фамилия. Валюта счета: USD.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">3</div>
                        </div>
                        <div className="pb-4">
                            <h5 className="text-white font-bold text-sm mb-1">Подтверждение почты</h5>
                            <p className="text-sm text-ios-textSec leading-relaxed">
                                Придет письмо со ссылкой. Обязательно перейдите по ней! (Проверьте папку Спам).
                            </p>
                        </div>
                    </div>
                </div>
             </div>

             {/* === CRITICAL WARNING === */}
             <div className="relative overflow-hidden bg-rose-500/10 border border-rose-500 rounded-xl p-6 animate-pulse-glow shadow-[0_0_25px_rgba(244,63,94,0.3)]">
                <div className="absolute -right-6 -top-6 text-rose-500 opacity-20 rotate-12">
                   <AlertTriangle size={100} />
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                    <AlertTriangle className="text-rose-500 shrink-0" size={32} />
                    <h4 className="text-rose-500 font-bold text-xl uppercase tracking-wider">Самый важный шаг!</h4>
                </div>
                <p className="text-white text-base leading-relaxed font-medium mb-4 relative z-10">
                    Чтобы площадка допустила вас к работе, вы <span className="text-rose-400 underline decoration-rose-400 font-bold">ОБЯЗАНЫ</span> прислать нам в поддержку (в наш бот, а не в Pocket Option) ваш <strong>ID и Email</strong>.
                </p>
                <div className="bg-[#05010D]/60 p-3 rounded border border-rose-500/30 relative z-10">
                    <p className="text-rose-300 text-sm italic font-medium text-center">
                        ⛔ Иначе в регистрации вам будет отказано и мы не сможем начать работу.
                    </p>
                </div>
             </div>

             {/* === CABINET SETUP === */}
             <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-4">Настройка профиля:</h4>
                <ul className="space-y-4 text-sm text-ios-textSec leading-relaxed">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-ios-lilac mt-1 shrink-0"/>
                        <span><strong>Выбор модели:</strong> RevShare (до 80%) — для пассивного дохода. CPA — для быстрых денег.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-ios-lilac mt-1 shrink-0"/>
                        <span><strong>Ссылки:</strong> В разделе "Affiliate Links" создайте ссылки под разные источники (Instagram, TG, Яндекс).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-ios-lilac mt-1 shrink-0"/>
                        <span><strong>Вывод:</strong> Настройте кошелек (USDT, BTC, карты) в профиле. Выплаты еженедельно.</span>
                    </li>
                </ul>
             </div>
          </section>

          {/* === ЧЕК-ЛИСТ И ФИНАЛ === */}
          <section className="space-y-6 pb-6 animate-fade-in">
             <div className="flex items-center gap-2 mb-2">
                <ListTodo className="text-ios-lilac" size={24} />
                <h3 className="text-xl font-serif text-white">Чек-лист партнера</h3>
             </div>

             <div className="space-y-2">
                 {[
                    "Зарегистрировался на сайте",
                    "Подтвердил Email",
                    "ОТПРАВИЛ ID В ПОДДЕРЖКУ (!!!)",
                    "Выбрал модель (RevShare/CPA)",
                    "Сгенерировал ссылки",
                    "Настроил вывод средств"
                 ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5">
                        <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center shrink-0">
                            <div className="w-3 h-3 bg-ios-lilac rounded-sm opacity-50"></div>
                        </div>
                        <span className="text-sm text-gray-200">{item}</span>
                     </div>
                 ))}
             </div>

             {/* Footer Card */}
             <div className="bg-gradient-to-br from-ios-lilac/20 to-purple-900/20 p-8 rounded-2xl border border-ios-lilac/30 text-center relative overflow-hidden mt-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-lilac"></div>
                
                <h3 className="text-white font-serif text-2xl mb-4">Что дальше?</h3>
                <p className="text-sm text-ios-textSec mb-8 leading-relaxed">
                    Ты прошел самый важный шаг — стал официальным партнером. <br/>
                    В следующих модулях: <br/>
                    <span className="text-white font-bold text-base mt-2 block">Трафик • Контент • Реклама • Воронки</span>
                </p>
                
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-ios-lilac/20 rounded-full border border-ios-lilac/50 mb-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                   <Rocket size={18} className="text-ios-lilac" />
                   <span className="text-xs text-white font-bold uppercase tracking-widest">Погнали зарабатывать! 🚀</span>
                </div>
             </div>
          </section>

          {/* Finish Button */}
          <div className="pt-4 pb-4">
             <button 
               onClick={onComplete}
               className="w-full btn-primary h-16 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-purple-900/20 active:scale-95 transition-transform"
             >
                ЗАВЕРШИТЬ МОДУЛЬ 1
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson1;