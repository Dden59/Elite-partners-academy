import React, { useState, useEffect } from 'react';
import { Lock, PlayCircle, Star, ChevronLeft, BookOpen, Target, DollarSign, Smartphone, BarChart2, Shield, Users, Layers, Instagram, Video, Send, Search, Globe, MessageCircle, PenTool, Layout, Radio, MousePointer, AlertTriangle, CheckCircle, Briefcase, Megaphone, TrendingUp, Cpu, Key, Zap, Link, LogIn, Mail, FileText, CreditCard, HelpCircle } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  priceTag?: string;
  locked?: boolean;
}

const modules: Module[] = [
  { 
    id: 1, 
    title: 'БЛОК 1: БАЗА', 
    description: 'Регистрация, платформа, первые шаги.',
    priceTag: 'ОТКРЫТО',
    locked: false
  },
  { 
    id: 2, 
    title: 'БЛОК 2: КОНТЕНТ-МАРКЕТИНГ', 
    description: 'Instagram, TikTok, VK, Telegram Ads, Yandex.Direct + Скрипты.',
    priceTag: 'POPULAR',
    locked: false 
  },
  { 
    id: 3, 
    title: 'БЛОК 3: ПЛАТНЫЙ ТРАФИК', 
    description: 'Продвинутые стратегии закупки.',
    priceTag: 'PRO',
    locked: true
  },
  { 
    id: 4, 
    title: 'БЛОК 4: АВТОМАТИЗАЦИЯ И AI', 
    description: 'Боты, нейросети, автопостинг.',
    priceTag: 'NEW',
    locked: true
  },
  { 
    id: 5, 
    title: 'БЛОК 5: СЕКРЕТНЫЕ ФИШКИ', 
    description: 'Обход блокировок, маскировка ссылок.',
    priceTag: 'VIP',
    locked: true
  },
  { 
    id: 6, 
    title: 'БЛОК 6: ПСИХОЛОГИЯ', 
    description: 'Психология и комьюнити.',
    locked: true
  },
  { 
    id: 7, 
    title: 'БЛОК 7: МАСШТАБИРОВАНИЕ', 
    description: 'Масштабирование и право.',
    locked: true
  },
  { 
    id: 8, 
    title: 'БОНУС-МОДУЛЬ', 
    description: 'Готовые воронки и инструменты.',
    priceTag: 'GIFT',
    locked: true
  },
];

const TabCourse: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  
  const triggerHaptic = (style: 'light' | 'medium' = 'light') => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
    }
  };

  const handleModuleClick = (module: Module) => {
      if (module.locked) {
          triggerHaptic('medium'); // Error/Lock haptic
          if (window.Telegram?.WebApp?.showPopup) {
              window.Telegram.WebApp.showPopup({
                  title: 'Доступ закрыт',
                  message: 'Этот модуль откроется после прохождения предыдущих.',
                  buttons: [{type: 'ok'}]
              });
          }
          return;
      }
      triggerHaptic('light');
      setSelectedModuleId(module.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
      triggerHaptic('light');
      setSelectedModuleId(null);
  };

  // --- DETAIL VIEW RENDERER ---
  if (selectedModuleId === 1) {
      return (
          <div className="pb-32 pt-4 px-4 animate-slide-up bg-ios-bg min-h-screen absolute top-0 left-0 w-full z-50 overflow-y-auto">
              
              {/* Sticky Header */}
              <div className="sticky top-0 z-40 bg-ios-bg/95 backdrop-blur-xl border-b border-ios-lilac/10 -mx-4 px-4 py-4 mb-6 flex items-center space-x-4 shadow-2xl shadow-black/50">
                  <button onClick={handleBack} className="p-2 -ml-2 text-ios-lilac active:opacity-50 transition-opacity">
                      <ChevronLeft size={28} />
                  </button>
                  <div>
                      <h2 className="text-lg font-serif text-white leading-none">БЛОК 1: БАЗА</h2>
                      <p className="text-[10px] text-ios-textSec uppercase tracking-widest mt-1">Введение в платформу</p>
                  </div>
              </div>

              {/* Content Body */}
              <div className="space-y-10 animate-fade-in text-white/90 pb-12">
                  
                  {/* Intro */}
                  <div className="prose prose-invert max-w-none">
                      <p className="text-sm font-sans text-ios-textSec leading-relaxed mb-4">
                        Добро пожаловать на борт самого амбициозного обучения, которое превратит вас из простого пользователя интернета в профессионального генератора лидов для одной из самых горячих платформ в мире трейдинга. Сегодня я дам вам ключ к финансовой свободе, который называется <span className="text-ios-lilac font-medium">«лить трафик трейдеров и зарабатывать на их активности годами»</span>.
                      </p>
                      <p className="text-sm font-sans text-ios-textSec leading-relaxed mb-4">
                        Забудьте про скучную теорию. Здесь мы говорим про деньги. Про то, как превратить поток людей, интересующихся заработком, криптовалютами и инвестициями, в ваш стабильный пассивный доход. Вы будете привлекать игроков (трейдеров) на платформу Pocket Option, а платформа будет платить вам комиссию с каждой их сделки. Месяц за месяцем, пока они активны. Это не «пирамида» и не привлечение партнёров под себя — это чистая классика партнерского маркетинга: вы даёте людям качественный продукт, они пользуются, вы получаете процент.
                      </p>
                      <div className="p-4 bg-gradient-lilac/10 rounded-xl border border-ios-lilac/20">
                        <p className="text-sm font-sans text-white leading-relaxed font-medium">
                            И сейчас я расскажу вам про этот продукт всё. Максимально подробно, сочно, с деталями, чтобы вы могли не просто вставить ссылку куда-то, а продавать идею, закрывать возражения и становиться экспертом в глазах своей аудитории. Поехали!
                        </p>
                      </div>
                  </div>

                  <div className="w-full h-px bg-white/5"></div>

                  {/* 1. Pocket Option Overview */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Target size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">1. Что это вообще такое? Позиционирование и миссия</h3>
                      </div>
                      
                      <p className="text-sm text-ios-textSec leading-relaxed mb-4">
                        Pocket Option — это не просто очередной брокер. Это международная торговая экосистема, запущенная в 2017 году, которая за несколько лет превратилась в одну из самых быстрорастущих платформ для трейдинга в мире. На сегодняшний день аудитория платформы насчитывает миллионы пользователей по всему земному шару — от Европы до Азии, от Америки до Африки.
                      </p>
                      <p className="text-sm text-ios-textSec leading-relaxed mb-4">
                        Миссия платформы звучит дерзко: сделать трейдинг доступным для каждого. Неважно, живёте вы в мегаполисе с кучей дипломов или в небольшом городке и только начинаете интересоваться финансами. Pocket Option ломает стереотип о том, что торговля на бирже — это удел седых профессоров с математическим складом ума. Здесь всё по-другому: просто, быстро, визуально красиво и, что самое главное, — интересно.
                      </p>
                      
                      <div className="glass-card p-5 rounded-xl border-l-4 border-l-blue-500 my-6">
                        <p className="text-sm italic text-white/90 leading-relaxed">
                          "Если описывать платформу одним предложением, то это — место, где пересекаются технологии, финансы и геймификация. Интерфейс разработан так, чтобы даже поколение TikTok, привыкшее к свайпам и мгновенному отклику, чувствовало себя как рыба в воде."
                        </p>
                      </div>
                  </section>

                  {/* 2. Mechanics */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-green-500/10 rounded-lg text-green-400"><BookOpen size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">2. Чем конкретно занимается платформа? Механика изнутри</h3>
                      </div>

                      <p className="text-sm text-ios-textSec leading-relaxed mb-6">
                        В основе работы Pocket Option лежит торговля бинарными и цифровыми опционами. Давайте объясним это максимально просто.
                      </p>
                      
                      <div className="mb-6">
                          <p className="text-base text-white font-medium mb-3">Как это работает?</p>
                          <p className="text-sm text-ios-textSec mb-4">
                            Представьте, что вы делаете прогноз погоды: будет сегодня дождь или солнце? Только вместо погоды вы прогнозируете движение цены актива.
                          </p>
                      </div>
                      
                      <div className="space-y-4">
                          {[
                              {title: "Выбор актива", text: "Валюты (EUR/USD), крипта (BTC), акции Tesla, золото. Выбор огромен."},
                              {title: "Прогноз", text: "Цена пойдет ВЫШЕ (CALL) или НИЖЕ (PUT)? Никаких сложных графиков."},
                              {title: "Время экспирации", text: "От 30 секунд до часов. Рай для адреналина и быстрых результатов."},
                              {title: "Результат", text: "Доходность до 95%. Ошибся — потерял ставку. Угадал — забрал прибыль."}
                          ].map((item, idx) => (
                              <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                                  <div className="text-ios-lilac font-serif font-bold text-lg mb-1">{idx + 1}. {item.title}</div>
                                  <div className="text-sm text-ios-textSec leading-snug">{item.text}</div>
                              </div>
                          ))}
                      </div>

                      <p className="text-sm text-ios-textSec leading-relaxed mt-6 p-4 bg-[#1E1233] rounded-lg">
                        Это база. Но платформа пошла дальше и добавила опционы «Одно касание», где доходность может доходить до 500%, что звучит просто космически и привлекает самых азартных трейдеров.
                      </p>
                  </section>

                  {/* 3. Advantages */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Star size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">3. Киллер-фичи (Почему это покупают?)</h3>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                           <h4 className="flex items-center text-base font-bold text-white mb-2">
                               <span className="w-8 h-8 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac mr-3 text-xs">01</span>
                               Низкий порог входа и демо-счет
                           </h4>
                           <p className="text-sm text-ios-textSec leading-relaxed pl-11">
                             Минимальный депозит всего $5–$10. Это снимает психологический барьер. Плюс бесконечный демо-счет: любой может получить виртуальные деньги и тренироваться без риска. Идеальный «крючок».
                           </p>
                        </div>

                        <div>
                           <h4 className="flex items-center text-base font-bold text-white mb-2">
                               <span className="w-8 h-8 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac mr-3 text-xs">02</span>
                               Геймификация
                           </h4>
                           <p className="text-sm text-ios-textSec leading-relaxed pl-11 mb-2">
                             Трейдинг как увлекательный процесс.
                           </p>
                           <ul className="pl-11 space-y-2">
                               <li className="text-sm text-ios-textSec"><span className="text-white font-medium">Турниры:</span> Соревнования с реальными призами.</li>
                               <li className="text-sm text-ios-textSec"><span className="text-white font-medium">Ачивки:</span> Достижения и уровни.</li>
                               <li className="text-sm text-ios-textSec"><span className="text-white font-medium">Кэшбэк:</span> Возврат до 10% от убытков.</li>
                           </ul>
                        </div>

                        <div>
                           <h4 className="flex items-center text-base font-bold text-white mb-2">
                               <span className="w-8 h-8 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac mr-3 text-xs">03</span>
                               Социальный трейдинг
                           </h4>
                           <p className="text-sm text-ios-textSec leading-relaxed pl-11">
                             Бомба для новичков. Копирование сделок успешных трейдеров. Нажал кнопку — зарабатываешь вместе с гуру.
                           </p>
                        </div>

                        <div>
                           <h4 className="flex items-center text-base font-bold text-white mb-2">
                               <span className="w-8 h-8 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac mr-3 text-xs">04</span>
                               Мобильность и Аналитика
                           </h4>
                           <p className="text-sm text-ios-textSec leading-relaxed pl-11">
                             Приложение топ-уровня (4.7 звезд). 30+ индикаторов, бэктестинг, экономический календарь.
                           </p>
                        </div>
                      </div>
                  </section>

                  {/* 4. Assets List */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400"><Layers size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">4. Ассортимент активов</h3>
                      </div>
                      <div className="bg-[#120B1F] rounded-xl p-5 border border-white/5">
                          <ul className="space-y-3">
                              <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span> <span className="text-sm text-ios-textSec"><strong className="text-white">Валютные пары:</strong> От EUR/USD до экзотики.</span></li>
                              <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span> <span className="text-sm text-ios-textSec"><strong className="text-white">Криптовалюты:</strong> Bitcoin, Ethereum, Ripple, Doge.</span></li>
                              <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span> <span className="text-sm text-ios-textSec"><strong className="text-white">Акции:</strong> Tesla, Apple, Amazon, Google.</span></li>
                              <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span> <span className="text-sm text-ios-textSec"><strong className="text-white">Товары:</strong> Золото, нефть, серебро.</span></li>
                          </ul>
                      </div>
                  </section>

                  {/* 5. Transparency */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><DollarSign size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">5. Финансы и Выплаты</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/5 p-3 rounded-lg text-center">
                              <div className="text-emerald-400 font-bold text-lg mb-1">0%</div>
                              <div className="text-xs text-ios-textSec">Комиссии за торговлю</div>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg text-center">
                              <div className="text-emerald-400 font-bold text-lg mb-1">24ч</div>
                              <div className="text-xs text-ios-textSec">Скорость вывода</div>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg text-center col-span-2">
                              <div className="text-white font-bold text-base mb-1">50+ Способов</div>
                              <div className="text-xs text-ios-textSec">Visa, Crypto (USDT), WebMoney</div>
                          </div>
                      </div>
                  </section>

                  {/* 6. Bonuses */}
                  <section>
                      <h3 className="text-lg font-bold text-white mb-3">6. Бонусная система</h3>
                      <p className="text-sm text-ios-textSec leading-relaxed">
                          Приветственный бонус до 50% на первый депозит. Регулярные промокоды. Майнинг токенов (выполняй задания — получай кристаллы, меняй на реальные деньги).
                      </p>
                  </section>

                  {/* 7. Risks */}
                  <section className="bg-rose-500/10 border border-rose-500/20 p-5 rounded-xl">
                      <div className="flex items-center space-x-3 mb-4">
                          <Shield size={20} className="text-rose-400" />
                          <h3 className="text-lg font-bold text-rose-200">7. Честный разговор о рисках</h3>
                      </div>
                      <div className="space-y-4 text-sm text-white/80">
                          <p>
                              <strong className="text-rose-200 block mb-1">Регуляция:</strong> 
                              Лицензия IFMRRC (Маршалловы Острова). Это позволяет платформе быть гибкой и доступной всем, избегая бюрократии. Надежность выплат проверена годами.
                          </p>
                          <p>
                              <strong className="text-rose-200 block mb-1">Риски торговли:</strong> 
                              Бинарные опционы — высокорисковый инструмент. Не обещайте "золотые горы". Позиция: "Вот инструмент, учись на демо, копируй профи".
                          </p>
                          <p>
                              <strong className="text-rose-200 block mb-1">Поддержка:</strong> 
                              Работает 24/7. Любые вопросы решаются через support@pocketoption.com.
                          </p>
                      </div>
                  </section>

                  {/* 8. Retention & 9. Earnings */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-ios-lilac/10 rounded-lg text-ios-lilac"><BarChart2 size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">8. LTV и Ваш Заработок</h3>
                      </div>
                      
                      <p className="text-sm text-ios-textSec mb-4">
                          Трейдеры остаются благодаря турнирам и бонусам. Чем дольше они живут, тем больше вы получаете.
                      </p>

                      <div className="glass-card p-5 rounded-xl bg-gradient-lilac/5 border border-ios-lilac/30">
                          <h4 className="text-white font-bold mb-3">Модели заработка:</h4>
                          <ul className="space-y-3 mb-4">
                              <li className="flex justify-between">
                                  <span className="text-sm text-ios-textSec">RevShare</span>
                                  <span className="text-sm font-bold text-ios-lilac">50-80% от дохода</span>
                              </li>
                              <li className="flex justify-between">
                                  <span className="text-sm text-ios-textSec">CPL</span>
                                  <span className="text-sm font-bold text-ios-lilac">Оплата за регу</span>
                              </li>
                          </ul>
                          <div className="pt-4 border-t border-white/10 text-center">
                              <p className="text-sm font-medium text-white mb-1">Математика проста:</p>
                              <p className="text-xs text-ios-textSec">10 трейдеров x $1000 оборот = <span className="text-white font-bold">$3000-$4000/мес</span></p>
                          </div>
                      </div>
                  </section>

                  <div className="w-full h-px bg-white/5 my-8"></div>

                  {/* --- NEW: DETAILED REGISTRATION GUIDE --- */}
                  <section className="animate-slide-up">
                      <div className="text-center mb-10">
                          <h2 className="text-2xl font-serif text-white leading-tight tracking-wide">
                             ПОШАГОВАЯ ИНСТРУКЦИЯ <br/><span className="text-ios-lilac">РЕГИСТРАЦИИ</span>
                          </h2>
                          <p className="text-xs text-ios-textSec mt-2">Следуй каждому пункту, чтобы не потерять комиссию</p>
                      </div>

                      {/* STEP 1: LINK */}
                      <div className="glass-card p-6 rounded-xl border-l-4 border-l-ios-lilac mb-8">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                              <Link className="mr-2 text-ios-lilac" size={20}/> Шаг 1. Перейди по ссылке
                          </h3>
                          
                          <a href="https://po-ru4.click/register?utm_campaign=805492&utm_source=affiliate&utm_medium=sr&a=SZdHqCuCOQ415b&ac=elitepartners" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="block w-full bg-gradient-lilac text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-ios-lilac/20 hover:scale-[1.02] active:scale-[0.98] transition-all mb-4"
                          >
                              👉 Ссылка для регистрации
                          </a>

                          <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20 flex items-start">
                              <AlertTriangle className="text-red-400 mr-3 mt-1 shrink-0" size={18} />
                              <p className="text-xs text-red-200 leading-relaxed">
                                  <strong>Важно:</strong> Ни в коем случае не заходи на сайт через поисковик (Яндекс, Google) и не вбивай адрес вручную. Только по ссылке выше! Иначе ты не привяжешься к моей команде, и мы оба потеряем комиссию.
                              </p>
                          </div>
                          <p className="text-xs text-ios-textSec mt-4">
                              После перехода ты увидишь главную страницу Pocket Option. В правом верхнем углу будет кнопка «Регистрация» — нажимай.
                          </p>
                      </div>

                      {/* STEP 2: METHODS */}
                      <div className="glass-card p-6 rounded-xl mb-8">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                              <Layout className="mr-2 text-ios-lilac" size={20}/> Шаг 2. Выбери способ регистрации
                          </h3>
                          <p className="text-sm text-ios-textSec mb-4">Pocket Option даёт три варианта. Выбери тот, который тебе удобнее:</p>
                          
                          <div className="grid grid-cols-1 gap-4">
                              <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                  <div className="flex justify-between items-center mb-2">
                                      <span className="font-bold text-white text-sm">📧 Через email</span>
                                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-ios-textSec">Классика</span>
                                  </div>
                                  <p className="text-xs text-ios-textSec mb-2">Введи имя, фамилию, email, придумай пароль → нажми «Зарегистрироваться».</p>
                                  <p className="text-[10px] text-green-400">Плюс: Подходит всем</p>
                              </div>

                              <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                  <div className="flex justify-between items-center mb-2">
                                      <span className="font-bold text-white text-sm">G Через Google</span>
                                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-ios-textSec">Быстро</span>
                                  </div>
                                  <p className="text-xs text-ios-textSec mb-2">Нажми кнопку Google → выбери свой аккаунт → разреши доступ.</p>
                                  <p className="text-[10px] text-green-400">Плюс: Данные подтянутся сами</p>
                              </div>

                              <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                  <div className="flex justify-between items-center mb-2">
                                      <span className="font-bold text-white text-sm">f Через Facebook</span>
                                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-ios-textSec">Альтернатива</span>
                                  </div>
                                  <p className="text-xs text-ios-textSec mb-2">Нажми кнопку Facebook → подтверди доступ.</p>
                              </div>
                          </div>
                          <div className="mt-4 p-3 bg-ios-lilac/10 rounded-lg">
                              <p className="text-xs text-ios-lilac"><strong>Совет:</strong> Если выбираешь email, обязательно используй реальную почту — на неё придёт подтверждение.</p>
                          </div>
                      </div>

                      {/* STEP 3 & 4 */}
                      <div className="grid grid-cols-1 gap-4 mb-8">
                          <div className="glass-card p-5 rounded-xl">
                              <h3 className="text-base font-bold text-white mb-2 flex items-center">
                                  <Mail className="mr-2 text-green-400" size={18}/> Шаг 3. Подтверди email
                              </h3>
                              <p className="text-xs text-ios-textSec leading-relaxed">
                                  После отправки формы зайди в свою почту. Ты увидишь письмо от Pocket Option (если его нет в папке «Входящие» — проверь «Спам»). В письме будет ссылка для подтверждения. Нажми на неё. <br/><span className="text-white font-medium mt-1 block">Готово! Твоя учётная запись активирована. 🎉</span>
                              </p>
                          </div>

                          <div className="glass-card p-5 rounded-xl">
                              <h3 className="text-base font-bold text-white mb-2 flex items-center">
                                  <LogIn className="mr-2 text-blue-400" size={18}/> Шаг 4. Войди в личный кабинет
                              </h3>
                              <p className="text-xs text-ios-textSec leading-relaxed">
                                  Вернись на сайт Pocket Option и нажми «Войти» в правом верхнем углу. Введи свой email и пароль (которые указывал при регистрации).
                              </p>
                          </div>
                      </div>

                      {/* STEP 5: PARTNER STATUS */}
                      <div className="glass-card p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent mb-8">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                              <Briefcase className="mr-2 text-amber-400" size={22}/> Шаг 5. Стань партнёром
                          </h3>
                          <p className="text-sm text-ios-textSec mb-4">
                              Сейчас ты находишься в личном кабинете трейдера. Чтобы начать зарабатывать как партнёр, нужно сделать ещё один шаг:
                          </p>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-white/90">
                              <li>В меню слева найди раздел <span className="text-amber-300 font-medium">«Партнёрам»</span> или «Affiliate Program».</li>
                              <li>Нажми кнопку <span className="text-amber-300 font-medium">«Стать партнёром»</span>.</li>
                              <li>Если система спросит — подтверди своё согласие с условиями партнёрской программы.</li>
                          </ol>
                          <p className="text-xs text-center text-amber-200 mt-4 uppercase tracking-widest font-bold">
                              Поздравляю! Ты теперь официально партнёр Pocket Option. 🚀
                          </p>
                      </div>

                      {/* STEP 6: VERIFICATION */}
                      <div className="glass-card p-6 rounded-xl mb-8">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                              <FileText className="mr-2 text-ios-lilac" size={20}/> Шаг 6. Пройди верификацию личности
                          </h3>
                          <p className="text-xs text-ios-textSec mb-4 uppercase tracking-wider opacity-70">Обязательно для вывода денег</p>
                          
                          <div className="space-y-4 text-sm text-ios-textSec">
                              <p>Чтобы в будущем выводить заработанные комиссии, нужно подтвердить свою личность. Это стандартная процедура для всех финансовых платформ.</p>
                              
                              <div className="bg-white/5 p-4 rounded-lg">
                                  <strong className="text-white block mb-2">Что нужно сделать:</strong>
                                  <ul className="list-disc pl-4 space-y-1 text-xs">
                                      <li>В личном кабинете найди раздел «Верификация» или «Документы».</li>
                                      <li>Загрузи фото или скан Паспорта (главный разворот с фото) или водительских прав.</li>
                                      <li>Иногда могут запросить подтверждение адреса (счёт за коммунальные услуги или выписка из банка).</li>
                                      <li>Отправь на проверку.</li>
                                  </ul>
                              </div>
                              <p className="text-xs italic">Сколько ждать: Обычно проверка занимает от 24 до 48 часов. Ты получишь уведомление на email, когда всё одобрят.</p>
                          </div>
                      </div>

                      {/* STEP 7: SETUP */}
                      <div className="glass-card p-6 rounded-xl mb-8">
                          <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                              <Zap className="mr-2 text-purple-400" size={20}/> Шаг 7. Настрой партнёрский профиль
                          </h3>
                          <p className="text-sm text-ios-textSec mb-6">Пока ждёшь верификацию, можешь настроить всё остальное.</p>

                          {/* 7.1 */}
                          <div className="mb-6 border-b border-white/10 pb-6">
                              <h4 className="text-white font-bold text-sm mb-2">7.1. Проверь модель комиссии (только RevShare!)</h4>
                              <p className="text-xs text-ios-textSec mb-3">В нашей партнёрской программе действует только одна модель — RevShare. Ты будешь получать процент от прибыли, которую платформа зарабатывает на твоих рефералах.</p>
                              <div className="bg-[#120B1F] p-3 rounded text-xs space-y-1">
                                  <div className="flex justify-between text-ios-textSec"><span>Стартовый процент:</span> <span className="text-white font-bold">от 50%</span></div>
                                  <div className="flex justify-between text-ios-textSec"><span>Максимальный:</span> <span className="text-white font-bold">до 80%</span></div>
                                  <div className="flex justify-between text-ios-textSec"><span>Начисление:</span> <span className="text-white">Каждый месяц</span></div>
                              </div>
                          </div>

                          {/* 7.2 */}
                          <div className="mb-6 border-b border-white/10 pb-6">
                              <h4 className="text-white font-bold text-sm mb-2">7.2. Получи свои партнёрские ссылки</h4>
                              <p className="text-xs text-ios-textSec mb-3">Это твой инструмент для заработка. В партнёрском кабинете перейди в раздел «Мои ссылки». Скопируй уникальную ссылку и сохрани её.</p>
                              <div className="bg-ios-lilac/10 border border-ios-lilac/20 p-2 rounded text-xs text-ios-lilac">
                                  <strong>Совет:</strong> Создавай разные ссылки для разных каналов (Insta, TikTok, TG), чтобы отслеживать статистику.
                              </div>
                          </div>

                          {/* 7.3 */}
                          <div>
                              <h4 className="text-white font-bold text-sm mb-2">7.3. Настрой способы вывода денег</h4>
                              <div className="flex items-center space-x-2 text-xs text-ios-textSec mb-3">
                                  <CreditCard size={14}/> <span>Крипта, Карты, Кошельки</span>
                              </div>
                              <p className="text-xs text-ios-textSec">В разделе «Выплаты» выбери удобный способ и введи реквизиты. Выплаты производятся еженедельно по понедельникам (мин. сумма от $10).</p>
                          </div>
                      </div>

                      {/* CHECKLIST */}
                      <div className="glass-card p-6 rounded-xl border border-green-500/20 bg-green-500/5 mb-8">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                              <CheckCircle className="mr-2 text-green-400" size={20}/> ✅ Чек-лист: что ты уже сделал
                          </h3>
                          <ul className="space-y-3 text-xs text-ios-textSec">
                              <li className="flex items-start"><span className="text-green-400 mr-2">✔</span> Перешёл по моей партнёрской ссылке</li>
                              <li className="flex items-start"><span className="text-green-400 mr-2">✔</span> Зарегистрировался и подтвердил email</li>
                              <li className="flex items-start"><span className="text-green-400 mr-2">✔</span> Активировал партнёрский статус</li>
                              <li className="flex items-start"><span className="text-green-400 mr-2">✔</span> Отправил документы на верификацию</li>
                              <li className="flex items-start"><span className="text-green-400 mr-2">✔</span> Получил свои партнёрские ссылки</li>
                              <li className="flex items-start"><span className="text-green-400 mr-2">✔</span> Настроил способы вывода денег</li>
                          </ul>
                      </div>

                      {/* FAQ */}
                      <div className="mb-10">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                              <HelpCircle className="mr-2 text-ios-lilac" size={20}/> Частые вопросы новичков
                          </h3>
                          <div className="space-y-4">
                              {[
                                  {q: "Я зарегистрировался, но в статистике никого не вижу. Всё правильно?", a: "Да, сейчас ты только начал. Твоя статистика появится, когда ты привлечёшь первых трейдеров. ВАЖНО: Отпиши мне в личку свой логин/email, я проверю привязку к команде."},
                                  {q: "Сколько я буду зарабатывать?", a: "Всё зависит от тебя. RevShare даёт пассивный доход. 10 трейдеров могут приносить $200–500/мес. А 100 трейдеров — считай сам."},
                                  {q: "Когда я получу первую выплату?", a: "Как только твои рефералы начнут торговать и платформа получит прибыль. Начисления в реальном времени, вывод раз в неделю."},
                                  {q: "Что делать, если у меня проблемы с регистрацией?", a: "Сразу пиши мне в личные сообщения! Я помогу, подскажу, решу любой вопрос."}
                              ].map((item, i) => (
                                  <div key={i} className="glass-card p-4 rounded-lg">
                                      <p className="text-sm font-bold text-white mb-2">В: {item.q}</p>
                                      <p className="text-xs text-ios-textSec leading-relaxed">О: {item.a}</p>
                                  </div>
                              ))}
                          </div>
                      </div>

                  </section>

                  {/* Resume Quote */}
                  <section className="bg-[#1E1233] p-6 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 text-[100px] leading-none text-white/5 font-serif">”</div>
                      <p className="text-sm italic text-white/90 leading-relaxed relative z-10 font-serif">
                        "Друзья, Pocket Option — это идеальный продукт для заливки трафика. Низкий вход ($5), демо-счет, крутые фичи. Это не скучный банк, а сочная игрушка для взрослых, где можно рубить капусту. Платформа платит нам, пока трейдеры занимаются делом."
                      </p>
                  </section>

                  {/* Footer CTA */}
                  <div className="pt-6 pb-4">
                      <h3 className="text-2xl font-serif text-white mb-4 text-center">Что дальше?</h3>
                      <p className="text-sm text-ios-textSec mb-8 text-center px-4">
                          Впереди: поиск трейдеров, создание контента, настройка рекламы, автоматизация и масштабирование. <br/>
                          Ты уже сделал первый шаг — зарегистрировался. <span className="text-white font-medium">Добро пожаловать в команду! 🚀🔥</span>
                      </p>
                      
                      <button 
                        onClick={handleBack}
                        className="w-full bg-ios-lilac text-white h-14 rounded-xl text-base font-bold uppercase tracking-widest shadow-lg shadow-ios-lilac/20 active:scale-95 transition-transform"
                      >
                          Завершить урок
                      </button>
                      <p className="text-xs text-center text-ios-textSec mt-4 opacity-50 uppercase tracking-widest">
                          Elite Partners Academy
                      </p>
                  </div>

              </div>
          </div>
      );
  }

  // --- MODULE 2 RENDERER (Instagram/TikTok/VK/TG/Yandex) ---
  if (selectedModuleId === 2) {
      return (
          <div className="pb-32 pt-4 px-4 animate-slide-up bg-ios-bg min-h-screen absolute top-0 left-0 w-full z-50 overflow-y-auto">
              {/* Sticky Header */}
              <div className="sticky top-0 z-40 bg-ios-bg/95 backdrop-blur-xl border-b border-ios-lilac/10 -mx-4 px-4 py-4 mb-6 flex items-center space-x-4 shadow-2xl shadow-black/50">
                  <button onClick={handleBack} className="p-2 -ml-2 text-ios-lilac active:opacity-50 transition-opacity">
                      <ChevronLeft size={28} />
                  </button>
                  <div>
                      <h2 className="text-lg font-serif text-white leading-none">БЛОК 2</h2>
                      <p className="text-[10px] text-ios-textSec uppercase tracking-widest mt-1">КОНТЕНТ & ТРАФИК</p>
                  </div>
              </div>

              <div className="space-y-12 animate-fade-in text-white/90 pb-12">

                  {/* INTRO */}
                  <div className="prose prose-invert max-w-none">
                      <h3 className="text-xl font-serif text-white leading-tight mb-4">Полное руководство по привлечению трейдеров: Instagram, TikTok, VK, Telegram, Yandex</h3>
                      <p className="text-sm font-sans text-ios-textSec leading-relaxed mb-4">
                          Привет, будущие мастера трафика! 👋
                      </p>
                      <p className="text-sm font-sans text-ios-textSec leading-relaxed mb-4">
                          Мы разобрали платформу Pocket Option вдоль и поперёк. Теперь самое мясо — где искать трейдеров, как оформлять аккаунты, чтобы они доверяли, и какой контент лить, чтобы они регистрировались по вашим ссылкам. Этот блок обучения — самая практическая часть. Здесь нет воды, только конкретные инструкции, названия, примеры и чек-листы.
                      </p>
                      <p className="text-sm font-sans text-ios-textSec leading-relaxed font-medium text-white">
                          Поехали!
                      </p>
                  </div>

                  <div className="w-full h-px bg-white/5"></div>

                  {/* 1. INSTAGRAM */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white"><Instagram size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">1. Instagram: настраиваем профессиональный аккаунт для привлечения трейдеров</h3>
                      </div>
                      
                      <p className="text-sm text-ios-textSec leading-relaxed mb-6">
                          Instagram остаётся одной из самых мощных площадок для привлечения аудитории, интересующейся заработком, инвестициями и трейдингом. Но чтобы люди доверяли и переходили по ссылке, аккаунт должен выглядеть солидно и профессионально.
                      </p>

                      <div className="space-y-6">
                          {/* Account Setup */}
                          <div className="glass-card p-5 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-3">🔧 Как создать и настроить бизнес-аккаунт</h4>
                              <div className="space-y-4">
                                  <div>
                                      <h5 className="text-white text-sm font-semibold mb-1">Шаг 1. Переход на профессиональный аккаунт</h5>
                                      <p className="text-sm text-ios-textSec mb-2">Если у вас уже есть личный аккаунт, его нужно конвертировать в профессиональный:</p>
                                      <ul className="space-y-2 text-sm text-ios-textSec list-disc pl-4">
                                          <li>Зайдите в профиль, нажмите «Редактировать профиль»</li>
                                          <li>Выберите «Переключиться на профессиональный аккаунт»</li>
                                          <li>Выберите категорию «Блогер» или «Финансовые услуги» (это повышает доверие)</li>
                                          <li>Подтвердите действие</li>
                                      </ul>
                                      <p className="text-xs text-ios-textSec mt-2 italic">Профессиональный аккаунт даёт доступ к статистике, рекламному кабинету и кнопкам связи.</p>
                                  </div>
                                  <div>
                                      <h5 className="text-white text-sm font-semibold mb-1">Шаг 2. Привязка к Facebook (обязательно)</h5>
                                      <p className="text-sm text-ios-textSec">Без страницы в Facebook нельзя в полной мере использовать бизнес-аккаунт Instagram. Создайте пустую страницу (или используйте существующую) и привяжите её в настройках.</p>
                                  </div>
                              </div>
                          </div>

                          {/* Username */}
                          <div className="glass-card p-5 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-3">📝 Как назвать аккаунт (Username)</h4>
                              <p className="text-sm text-ios-textSec mb-3">Ваш username должен быть: 1. Узнаваемым. 2. Связанным с тематикой. 3. Легким для запоминания.</p>
                              
                              <p className="text-sm font-semibold text-white mb-2">Варианты названий для трейдерской тематики:</p>
                              <div className="overflow-x-auto">
                                <table className="w-full text-xs text-left">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-2 text-ios-lilac">Стиль</th>
                                            <th className="py-2 text-white">Примеры</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-ios-textSec">
                                        <tr className="border-b border-white/5"><td className="py-2">Имя + трейдинг</td><td>@alex_trader, @kate_invest, @dmitry.trades</td></tr>
                                        <tr className="border-b border-white/5"><td className="py-2">Крипто-стиль</td><td>@crypto_samurai, @bitcoin_hunter, @eth_whale</td></tr>
                                        <tr className="border-b border-white/5"><td className="py-2">Профессиональный</td><td>@market_pro, @forex_life, @trading_master</td></tr>
                                        <tr className="border-b border-white/5"><td className="py-2">Игровой</td><td>@profit_hacker, @money_machine, @chart_killer</td></tr>
                                        <tr><td className="py-2">Сообщество</td><td>@traders_club, @invest_community, @pips_family</td></tr>
                                    </tbody>
                                </table>
                              </div>
                              <p className="text-xs text-red-300 mt-2">Важно: Не используйте одинаковые имена с цифрой в конце на всех аккаунтах — это выглядит как ферма и вызывает бан.</p>
                          </div>

                          {/* Avatar & Name */}
                          <div className="glass-card p-5 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-3">🖼️ Аватарка (Profile picture)</h4>
                              <p className="text-sm text-ios-textSec mb-2">Аватарка — это лицо вашего бренда. Варианты:</p>
                              <ul className="list-disc pl-4 text-sm text-ios-textSec mb-4">
                                  <li>Ваше реальное фото в деловом стиле (максимум доверия)</li>
                                  <li>Логотип, если вы строите бренд</li>
                                  <li>Абстрактное изображение с крипто- или трейдерской тематикой (биткоин, графики)</li>
                              </ul>
                              <p className="text-xs text-ios-textSec mb-4 italic">Главное правило: аватарка должна быть качественной и не вызывать подозрений. Если ведёте несколько аккаунтов — делайте их разными.</p>

                              <h4 className="text-white font-bold mb-3">📋 Поле "Имя" (Name field)</h4>
                              <p className="text-sm text-ios-textSec mb-2">Это поле работает как поисковые ключи. Здесь нужно указать не только имя, но и ключевые слова.</p>
                              <p className="text-xs text-ios-textSec bg-white/5 p-2 rounded">Примеры: Александр Трейдер | Крипта и Forex; Екатерина | Инвестиции для всех; Trading Hub | Сигналы и аналитика; Crypto Whale | Биткоин и альты</p>
                          </div>

                          {/* Bio */}
                          <div className="glass-card p-5 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-3">✍️ Био (Bio) — самый важный элемент</h4>
                              <p className="text-sm text-ios-textSec mb-3">Био должно за 3 секунды отвечать на вопросы: кто ты, чем полезен, что делать дальше. У вас 150 символов, используйте их максимально эффективно.</p>
                              
                              <p className="text-sm font-semibold text-white mb-2">Структура идеального био:</p>
                              <ol className="list-decimal pl-4 text-sm text-ios-textSec mb-4">
                                  <li>Кто ты / чем занимаешься (коротко и ясно)</li>
                                  <li>Что получает подписчик (ценность)</li>
                                  <li>Призыв к действию (CTA) + ссылка</li>
                              </ol>

                              <p className="text-sm font-semibold text-white mb-2">Готовые шаблоны био для трейдеров:</p>
                              <div className="space-y-3">
                                <div className="bg-[#120B1F] p-3 rounded-lg border-l-2 border-ios-lilac">
                                    <p className="text-xs font-mono text-gray-300 whitespace-pre-line">
                                        📊 Трейдер с 5-летним опытом
                                        📈 Делюсь сетапами и аналитикой
                                        👇 Забрать бонус + стратегию
                                    </p>
                                </div>
                                <div className="bg-[#120B1F] p-3 rounded-lg border-l-2 border-green-500">
                                    <p className="text-xs font-mono text-gray-300 whitespace-pre-line">
                                        ₿ Bitcoin maximalist
                                        🚀 Ищу альты до взлёта
                                        🔽 Переходи за сигналами
                                    </p>
                                </div>
                                <div className="bg-[#120B1F] p-3 rounded-lg border-l-2 border-pink-500">
                                    <p className="text-xs font-mono text-gray-300 whitespace-pre-line">
                                        💔 Моя девушка думает, что я смотрю порно
                                        📈 На самом деле я смотрю графики
                                        👇 Зацени мои сделки
                                    </p>
                                </div>
                                <div className="bg-[#120B1F] p-3 rounded-lg border-l-2 border-blue-500">
                                    <p className="text-xs font-mono text-gray-300 whitespace-pre-line">
                                        Trade simply.
                                        Charts. Coffee. Calm.
                                        Signal &gt; Noise
                                        Process over profit.
                                    </p>
                                </div>
                              </div>
                              <div className="mt-4">
                                  <h5 className="text-white text-sm font-semibold mb-1">🔗 Кнопки действия и ссылки</h5>
                                  <p className="text-xs text-ios-textSec">В бизнес-аккаунте можно добавить до 5 ссылок. Используйте это: основная ссылка — на ваш Telegram-канал или лендинг с промокодом. Дополнительные — на YouTube, Discord. Также настройте кнопки связи (email, телефон).</p>
                              </div>
                          </div>

                          {/* INSTAGRAM EXTRA: SCRIPTS & STORIES */}
                          <div className="glass-card p-5 rounded-xl border border-ios-lilac/30 bg-gradient-to-r from-ios-lilac/10 to-transparent">
                              <h4 className="text-white font-bold mb-4 flex items-center">
                                  <Zap size={18} className="text-amber-400 mr-2" />
                                  БОНУС: Практические скрипты для Instagram
                              </h4>

                              <div className="space-y-4">
                                  <div>
                                      <strong className="text-ios-lilac text-xs uppercase tracking-widest block mb-1">Сторис-стратегия на день</strong>
                                      <ul className="text-xs text-ios-textSec space-y-2">
                                          <li className="flex gap-2"><span className="text-white font-bold">10:00</span><span><strong>Затравка:</strong> Фото кофе/ноутбука. Текст: "Рынок сегодня бешеный. Готовлю обзор."</span></li>
                                          <li className="flex gap-2"><span className="text-white font-bold">14:00</span><span><strong>Результат:</strong> Скриншот успешной сделки. Текст: "+$120 за 15 минут. Кто хочет так же?"</span></li>
                                          <li className="flex gap-2"><span className="text-white font-bold">18:00</span><span><strong>Польза:</strong> Мини-урок (как работает индикатор RSI).</span></li>
                                          <li className="flex gap-2"><span className="text-white font-bold">21:00</span><span><strong>Продажа:</strong> "Осталось 3 места на обучение. Пиши + в Директ."</span></li>
                                      </ul>
                                  </div>

                                  <div>
                                      <strong className="text-ios-lilac text-xs uppercase tracking-widest block mb-1">Скрипт ответа в Директ (на "Хочу обучение")</strong>
                                      <div className="bg-[#05010D] p-3 rounded border border-white/10 italic text-xs text-gray-300">
                                          "Привет! 👋 Круто, что решил разобраться. У меня есть бесплатный гайд для старта и закрытый канал с сигналами. Ты раньше торговал или новичок? (ждем ответ). Понял! Тогда держи ссылку на регистрацию [ССЫЛКА], там получишь бонус +50% к депо. Как зарегаешься — скинь ID, я добавлю в VIP-чат."
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  {/* 2. TIKTOK */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-black border border-white/20 rounded-lg text-white"><Video size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">2. TikTok: настраиваем аккаунт под бешеный трафик</h3>
                      </div>

                      <p className="text-sm text-ios-textSec leading-relaxed mb-4">
                          TikTok — это главный хайповый канал для привлечения молодой аудитории, которая интересуется криптой и быстрым заработком. Здесь самые высокие охваты и низкий порог входа.
                      </p>

                      <div className="space-y-6">
                           <div className="glass-card p-4 rounded-xl">
                               <h4 className="text-white font-bold mb-2">🔧 Создание аккаунта</h4>
                               <ul className="list-disc pl-4 space-y-2 text-sm text-ios-textSec">
                                   <li><strong>Шаг 1. Скачиваем и регистрируемся.</strong> Используйте бизнес-почту. Желательно подключить прокси и поставить английский язык. Возраст — от 18 лет (обязательно).</li>
                                   <li><strong>Шаг 2. Переключаемся на бизнес-аккаунт.</strong> Нажмите три полоски → «Настройки и конфиденциальность» → «Управление аккаунтом» → «Переключиться на бизнес-аккаунт». Выберите категорию (Финансы/Бизнес).</li>
                               </ul>
                               <p className="text-xs text-ios-textSec mt-2 italic">Бизнес-аккаунт даёт аналитику и доступ к рекламным инструментам.</p>
                           </div>

                           <div className="glass-card p-4 rounded-xl">
                               <h4 className="text-white font-bold mb-2">📝 Имя аккаунта (Username)</h4>
                               <p className="text-sm text-ios-textSec mb-2">Правила те же, что и в Instagram, но TikTok любит креатив. Варианты: @crypto.drops, @forex.dog, @trading.panda, @profit.pulse, @alex.trades.</p>
                           </div>

                           <div className="glass-card p-4 rounded-xl">
                               <h4 className="text-white font-bold mb-2">🖼️ Аватарка</h4>
                               <p className="text-sm text-ios-textSec mb-2">В TikTok для привлечения внимания часто работают: красивые девушки, крутые локации (дорогая жизнь, тачки, яхты), популярные NFT или крипто-арт, ваше фото в стиле "успешный трейдер".</p>
                               <p className="text-xs text-red-300 italic">Важно: аватарки должны быть разными для разных аккаунтов, чтобы не спалиться под ферму.</p>
                           </div>

                           <div className="glass-card p-4 rounded-xl">
                               <h4 className="text-white font-bold mb-2">✍️ Био в TikTok</h4>
                               <p className="text-sm text-ios-textSec mb-2">Био должно быть коротким, броским и содержать призыв перейти по ссылке.</p>
                               <div className="bg-[#120B1F] p-3 rounded-lg border-l-2 border-ios-lilac mb-2">
                                  <p className="text-xs font-mono text-gray-300 whitespace-pre-line">
                                      🔥 Зарабатывай на трейдинге
                                      💸 Бонус 50% на первый депозит
                                      👇 Жми, забирай
                                      [домен com]
                                  </p>
                               </div>
                               <div className="bg-[#120B1F] p-3 rounded-lg border-l-2 border-blue-500 mb-2">
                                  <p className="text-xs font-mono text-gray-300 whitespace-pre-line">
                                      🚀 Новый крипто-проект
                                      🎁 Free mint & Whitelist
                                      🔽 Линк внизу
                                      [ссылка на Twitter]
                                  </p>
                               </div>
                           </div>

                           <div className="glass-card p-4 rounded-xl">
                               <h4 className="text-white font-bold mb-2">🔑 Хештеги</h4>
                               <p className="text-sm text-ios-textSec mb-2">Используйте только тематические хештеги, это критически важно для попадания в целевую аудиторию.</p>
                               <p className="text-xs text-ios-textSec bg-white/5 p-2 rounded mb-2 font-mono">
                                   #trading #forex #crypto #bitcoin #investing #stocks #options #wallstreet #finance #stonks #sp500 #altcoins #eth #btc #trader
                               </p>
                               <p className="text-xs text-ios-textSec bg-white/5 p-2 rounded mb-2 font-mono">
                                   Дополнительные: #money #rich #success #motivation #passiveincome #financialfreedom
                               </p>
                               <p className="text-sm text-ios-textSec">Важно: Не ставьте одни и те же хештеги под каждым видео — меняйте их, импровизируйте.</p>
                           </div>
                           
                           <div className="glass-card p-4 rounded-xl">
                               <h4 className="text-white font-bold mb-2">🎵 Музыка</h4>
                               <p className="text-sm text-ios-textSec">Используйте трендовую музыку — это даёт дополнительные охваты. Музыка должна быть приятной. Для спокойных обзоров — инструментал или lo-fi. Для динамичных нарезок — энергичные треки.</p>
                           </div>
                      </div>
                  </section>

                  {/* 3. CONTENT STRATEGY */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-ios-lilac/20 rounded-lg text-ios-lilac"><Layout size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">3. Контент-стратегия: ТОП-30 идей для видео (Reels + TikTok)</h3>
                      </div>
                      
                      <p className="text-sm text-ios-textSec mb-4">Теперь самое главное — что снимать, чтобы люди подписывались, верили и переходили по вашей ссылке. Я разбил идеи на категории. Выбирайте те, что ближе вам, и тестируйте.</p>

                      <div className="space-y-4">
                          <div className="border-l-2 border-blue-500 pl-4">
                              <h4 className="text-white font-medium mb-1">Категория 1: Образовательный контент (строим доверие)</h4>
                              <ul className="list-decimal pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>«Что такое бинарные опционы за 60 секунд» — анимация или простое объяснение на пальцах</li>
                                  <li>«Как читать свечной график» — базовый ликбез</li>
                                  <li>«Топ-3 индикатора для новичка» — показываете на экране</li>
                                  <li>«Что такое уровни поддержки и сопротивления» — рисуете на графике</li>
                                  <li>«Почему 90% новичков сливают депозит» — разбор ошибок</li>
                                  <li>«Как ставить стоп-лосс и тейк-профит» — объяснение риск-менеджмента</li>
                                  <li>«Самые частые ошибки в трейдинге» — список + ваши рекомендации</li>
                                  <li>«Что такое плечо и маржинальная торговля» — для продвинутых</li>
                                  <li>«Как работает копирование сделок» — объясняете фишку Pocket Option</li>
                                  <li>«5 книг, которые обязан прочитать трейдер» — нативная рекомендация</li>
                              </ul>
                          </div>
                          <div className="border-l-2 border-green-500 pl-4">
                              <h4 className="text-white font-medium mb-1">Категория 2: Личный опыт и лайфстайл (вызываем доверие)</h4>
                              <ul className="list-decimal pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>«Мой путь в трейдинге: с чего я начинал» — история успеха (или неудач)</li>
                                  <li>«Мой рабочий день трейдера» — встал, включил комп, проанализировал рынок</li>
                                  <li>«Сколько я заработал сегодня?» — челлендж, показываете экран (честно или легенда)</li>
                                  <li>«Моя самая крупная прибыль и самый большой убыток» — честный разбор</li>
                                  <li>«Как трейдинг изменил мою жизнь» — эмоциональная история</li>
                                  <li>«Оборудование трейдера: что у меня в арсенале» — мониторы, мышки, кресло</li>
                                  <li>«Утро трейдера: кофе, графики, новости» — эстетичное видео</li>
                                  <li>«Реакция на удачную сделку» — эмоциональный момент</li>
                                  <li>«Провал: как я не угадал движение» — честность подкупает</li>
                                  <li>«Что я ем во время торговой сессии» — разгрузочный лайфстайл</li>
                              </ul>
                          </div>
                          <div className="border-l-2 border-purple-500 pl-4">
                              <h4 className="text-white font-medium mb-1">Категория 3: Новости и аналитика (актуальность)</h4>
                              <ul className="list-decimal pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>«Крипта сегодня: главное событие дня» — новости биткоина или эфира</li>
                                  <li>«ФРС подняла ставку: что будет с рынком?» — влияние макроэкономики</li>
                                  <li>«Эта монета выстрелила на 100%: разбор» — кейс</li>
                                  <li>«Прогноз на сегодня: куда пойдёт цена?» — короткий анализ</li>
                                  <li>«Что сейчас покупают киты?» — обзор крупных движений</li>
                              </ul>
                          </div>
                          <div className="border-l-2 border-yellow-500 pl-4">
                              <h4 className="text-white font-medium mb-1">Категория 4: Платформа Pocket Option (прямая реклама)</h4>
                              <ul className="list-decimal pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>«Обзор платформы Pocket Option: интерфейс, фишки» — просто показываете, как всё красиво</li>
                                  <li>«Как зарегистрироваться и получить бонус 50%» — пошаговка с вашим промокодом</li>
                                  <li>«Как вывести деньги с Pocket Option» — показываете скорость выплат</li>
                                  <li>«Турниры на Pocket Option: как участвовать и побеждать» — про геймификацию</li>
                                  <li>«Копирование сделок: как зарабатывать без опыта» — про социальный трейдинг</li>
                              </ul>
                          </div>
                          <div className="border-l-2 border-pink-500 pl-4">
                              <h4 className="text-white font-medium mb-1">Категория 5: Вирусные/трендовые форматы</h4>
                              <ul className="list-decimal pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>«POV: Ты трейдер и видишь зелёный график» — эмоциональный монтаж под трендовую музыку</li>
                                  <li>«Трейдинг vs Офисная работа» — сравнение в юмористическом ключе</li>
                                  <li>«Топ-5 отмазок, почему ты ещё не начал торговать» — юмор</li>
                                  <li>«Когда зашёл в сделку, а цена пошла не туда» — смешная реакция</li>
                                  <li>«Мама: чем ты занимаешься? Я: трейдер» — диалог-стендап</li>
                              </ul>
                          </div>
                      </div>
                  </section>

                  {/* 4. TECHNICAL TIPS */}
                  <section>
                      <div className="glass-card p-5 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                          <h3 className="text-lg font-bold text-white mb-4">4. Технические фишки для TikTok (из практики арбитражников)</h3>
                          <ul className="space-y-4 text-sm text-ios-textSec">
                              <li>
                                  <strong className="text-white block mb-1">🔥 Текст на видео (обязательно!)</strong>
                                  <span className="text-xs">В самом видео должен быть текст, который доносит ключевое сообщение. Используйте красивые шрифты. Пример текста: Домен + ваш промокод, «Забери бонус 50% на первый депозит», «Торгуй без риска на демо-счёте», «Копируй сделки профитов». Текст не должен перекрывать важные элементы.</span>
                              </li>
                              <li>
                                  <strong className="text-white block mb-1">🎤 Озвучка</strong>
                                  <span className="text-xs">Голос в видео вызывает больше доверия, чем просто текст. Варианты: записываете свой голос (максимум доверия) или используете робота женским голосом. Примеры озвучки: "Look at this crazy project that i found for you guys", "They will be organizing a free mint, yes this is real", "Follow me for more trading tips".</span>
                              </li>
                              <li>
                                  <strong className="text-white block mb-1">🔄 Прогрев аккаунта</strong>
                                  <span className="text-xs">Перед тем как выкладывать видео, аккаунт нужно "прогреть": 10-20 минут листаете ленту, досматриваете видео до конца, подписываетесь на каналы по тематике крипты и трейдинга, лайкаете, комментируете. Когда ваша лента станет полностью состоять из тематических видео — можно начинать выкладывать свои.</span>
                              </li>
                          </ul>

                          {/* TIKTOK EXTRA: HOOKS */}
                          <div className="mt-6 border-t border-white/10 pt-4">
                              <h4 className="text-ios-lilac font-bold text-sm mb-2 flex items-center"><Zap size={14} className="mr-1"/>Библиотека хуков (для начала видео)</h4>
                              <div className="grid grid-cols-2 gap-2 text-[10px] text-ios-textSec">
                                  <div className="bg-white/5 p-2 rounded">"Никогда не совершай эту ошибку..."</div>
                                  <div className="bg-white/5 p-2 rounded">"Секрет, о котором молчат брокеры..."</div>
                                  <div className="bg-white/5 p-2 rounded">"Я покажу, как сделать $100 за минуту..."</div>
                                  <div className="bg-white/5 p-2 rounded">"Перестань терять деньги на крипте..."</div>
                              </div>
                          </div>
                      </div>
                  </section>

                  {/* 5. CHECKLIST */}
                  <section>
                      <h3 className="text-lg font-bold text-white mb-4">5. Чек-лист перед запуском</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white/5 p-4 rounded-xl">
                              <h4 className="text-white font-bold text-sm mb-2">Instagram-аккаунт:</h4>
                              <ul className="text-xs text-ios-textSec list-disc pl-4 space-y-1">
                                  <li>Переключен на профессиональный</li>
                                  <li>Привязан к Facebook-странице</li>
                                  <li>Username: понятный, без цифр в конце</li>
                                  <li>Аватарка: качественная, тематическая</li>
                                  <li>Имя: содержит ключевые слова</li>
                                  <li>Био: 150 символов, эмодзи, CTA, ссылка</li>
                                  <li>Кнопки связи настроены</li>
                                  <li>5-10 постов уже в ленте (для доверия)</li>
                              </ul>
                          </div>
                          <div className="bg-white/5 p-4 rounded-xl">
                              <h4 className="text-white font-bold text-sm mb-2">TikTok-аккаунт:</h4>
                              <ul className="text-xs text-ios-textSec list-disc pl-4 space-y-1">
                                  <li>Зарегистрирован, возраст 18+</li>
                                  <li>Переключен на бизнес-аккаунт</li>
                                  <li>Username: креативный, тематический</li>
                                  <li>Аватарка: цепляющая</li>
                                  <li>Био: короткое, с призывом и ссылкой</li>
                                  <li>Прогрет (лента из тематических видео)</li>
                                  <li>3-5 видео уже загружено для теста</li>
                              </ul>
                          </div>
                      </div>
                  </section>

                  {/* 6. WHAT NEXT */}
                  <section>
                       <h3 className="text-lg font-bold text-white mb-2">6. Что дальше?</h3>
                       <p className="text-sm text-ios-textSec">
                           Когда аккаунты настроены и первые видео запущены, вы начинаете получать трафик. Люди переходят по ссылке, регистрируются с вашим промокодом, и вы получаете комиссию с каждой их сделки.
                           В следующих блоках обучения мы разберём: Как настраивать платную рекламу (таргет, контекст, посевы), Как работать с возражениями и увеличивать конверсию, Как масштабировать успешные связки и выводить доход на новый уровень.
                           Но основа основ — это правильно оформленный аккаунт и регулярный качественный контент. Начните с этого, и результат не заставит себя ждать.
                       </p>
                  </section>

                  <div className="w-full h-px bg-white/5"></div>

                  {/* VKONTAKTE */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-blue-600 rounded-lg text-white"><Globe size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">Воронка привлечения трейдеров во ВКонтакте: полное руководство</h3>
                      </div>
                      
                      <p className="text-sm text-ios-textSec mb-4">
                          Привет! Мы разобрали Instagram и TikTok. Теперь — ВКонтакте. Это золотая жила для финансовой вертикали с аудиторией свыше 90 миллионов активных пользователей ежемесячно. Здесь сидят платёжеспособные мужчины 25–45 лет, которые интересуются заработком, криптой и инвестициями. ВК идеально подходит для долгих воронок и построения доверия.
                      </p>

                      <div className="space-y-6">
                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">1. Фундамент: создаём сообщество-магнит</h4>
                              <p className="text-xs text-ios-textSec mb-2">Прежде чем лить трафик, нужно подготовить посадочную страницу. Это будет ваше сообщество ВК.</p>
                              <div className="space-y-3">
                                  <div>
                                      <strong className="text-white text-xs block">Тип сообщества:</strong>
                                      <span className="text-xs text-ios-textSec">Публичная страница (если строите личный бренд) или Группа (если хотите создать активное комьюнити).</span>
                                  </div>
                                  <div>
                                      <strong className="text-white text-xs block">Оформление (продаёт за 3 секунды):</strong>
                                      <ul className="list-disc pl-4 text-xs text-ios-textSec">
                                          <li>Аватарка: Ваше реальное фото в деловом стиле или Логотип с символикой.</li>
                                          <li>Обложка (самый важный элемент): Чёткий оффер и призыв. Примеры: «Зарабатывай на трейдинге с нуля», «+50% к первому депозиту», «Торгуй без риска на демо-счёте».</li>
                                          <li>Описание сообщества: Ключевые слова и суть. В расширенном — детали и ссылка с призывом.</li>
                                          <li>Закреплённый пост: Ваша мини-воронка (Кто вы, что получит подписчик, кнопка/ссылка).</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">2. Структура воронки: 5 этапов</h4>
                              <div className="space-y-4">
                                  <div>
                                      <strong className="text-white text-sm block mb-1">Этап 1: Привлечение трафика</strong>
                                      <p className="text-xs text-ios-textSec">ВК даёт огромный выбор источников. Таргет ВК (настройка рекламы на целевую аудиторию), Постовая реклама (закупка постов в пабликах), РСЯ, Участие в обсуждениях, Парсинг групп.</p>
                                      <p className="text-xs text-ios-textSec mt-1">Настройка таргета ВК (самый эффективный платный способ). Целевая аудитория: Интересующиеся криптой, инвестициями, Бизнесмены, Подписчики групп по обучению заработку. Демография: Мужчины, 25–45 лет, Города-миллионники.</p>
                                  </div>
                                  <div>
                                      <strong className="text-white text-sm block mb-1">Этап 2: Посадочная страница</strong>
                                      <p className="text-xs text-ios-textSec">Куда вести трафик? Группа ВК, Лендинг, Лонгрид с прямой ссылкой, или Витрина LeadCore (специальный инструмент для финансовых офферов). Кейс с витринами: Вебмастер направил трафик из ВК на витрину — конверсия выросла с 3,8% до 6,1%, ROI увеличился на 40%.</p>
                                  </div>
                                  <div>
                                      <strong className="text-white text-sm block mb-1">Этап 3: Сбор контактов и лид-магнит</strong>
                                      <p className="text-xs text-ios-textSec">Нужно собрать контакты для прогрева. Используем: Автоматизацию Senler (собирает в базу всех, кто написал), Чат-боты ВК, Квизы, Лид-магниты (бесплатный гайд в обмен на контакт). Пример: «Скачай бесплатный гайд: 5 стратегий для стабильного заработка на трейдинге».</p>
                                  </div>
                                  <div>
                                      <strong className="text-white text-sm block mb-1">Этап 4: Прогрев и построение доверия</strong>
                                      <p className="text-xs text-ios-textSec">Контент-стратегия (80/20): 80% полезный контент (обучение, аналитика, мемы), 20% прямые призывы. Виджеты доверия LeadCore также повышают конверсию.</p>
                                  </div>
                                  <div>
                                      <strong className="text-white text-sm block mb-1">Этап 5: Закрытие на сделку и дожим</strong>
                                      <p className="text-xs text-ios-textSec">Инструменты: Smart-ссылки LeadCore (автоматически подбирают лучший оффер), Сплит-трафика (TDS), Trafficback-витрина. Работа с личными сообщениями: Автоответчик, скрипт продаж.</p>
                                  </div>
                              </div>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">3. Технические фишки для максимальной эффективности</h4>
                              <ul className="list-disc pl-4 text-xs text-ios-textSec space-y-1">
                                  <li><strong className="text-white">Аналитика и тесты:</strong> Тестируйте разные источники от 3000₽. Используйте SubID в VK Ads. Отключайте неэффективные потоки.</li>
                                  <li><strong className="text-white">Автоматизация:</strong> Сенлер — рассылки. Гамаюн — ответы по ключевым словам. LeadCore — витрины, TDS.</li>
                                  <li><strong className="text-white">Масштабирование:</strong> Увеличивайте бюджет на успешную аудиторию. Запускайте дожимные посты. Копируйте настройки на похожие офферы.</li>
                              </ul>
                          </div>

                          {/* VK EXTRA: SENLER STRATEGY */}
                          <div className="glass-card p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
                              <h4 className="text-blue-200 font-bold text-sm mb-3 flex items-center">
                                  <MessageCircle size={16} className="mr-2"/>
                                  БОНУС: Схема рассылки Senler (5 дней)
                              </h4>
                              <div className="space-y-3">
                                  <div className="text-[10px] text-ios-textSec">
                                      <strong className="text-white block">День 0 (Сразу):</strong> "Привет! Вот твой обещанный гайд по стратегиям [ССЫЛКА]. Изучай, завтра пришлю разбор частых ошибок."
                                  </div>
                                  <div className="text-[10px] text-ios-textSec">
                                      <strong className="text-white block">День 1:</strong> "Почему 90% теряют деньги? Они не соблюдают Рис-менеджмент. Читай пост [ССЫЛКА]."
                                  </div>
                                  <div className="text-[10px] text-ios-textSec">
                                      <strong className="text-white block">День 2 (Польза + Social Proof):</strong> "Смотри, сколько заработал наш подписчик Алексей (+30% к депо). Он использовал стратегию RSI."
                                  </div>
                                  <div className="text-[10px] text-ios-textSec">
                                      <strong className="text-white block">День 3 (Продажа):</strong> "Мы открыли доступ к закрытому чату сигналов. Мест мало. Регистрируйся, пополняй и пиши ID."
                                  </div>
                              </div>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">4. Пример готовой воронки (схема)</h4>
                              <ol className="list-decimal pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>Трафик: Таргет ВК на мужчин 30–45 лет, интересы: крипта, инвестиции.</li>
                                  <li>Креатив: Пост «Как я зарабатываю на трейдинге без опыта» + призыв перейти.</li>
                                  <li>Посадочная: Группа ВК с закреплённым постом-лонгридом о платформе + ссылка на витрину.</li>
                                  <li>Лид-магнит: Чек-лист «5 стратегий для новичка» (подписка через Сенлер).</li>
                                  <li>Прогрев: В течение недели посты: разбор ошибок, отзывы, видео-обзор платформы, мемы.</li>
                                  <li>Закрытие: Smart-ссылка на регистрацию с бонусом + Trafficback на случай ухода.</li>
                                  <li>Ретаргетинг: На тех, кто кликнул, но не зарегистрировался — дожимной пост через неделю.</li>
                              </ol>
                          </div>

                          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                              <h4 className="text-white font-bold text-xs mb-1">5. Важное предупреждение (чтобы вы работали чисто)</h4>
                              <p className="text-xs text-red-200">
                                  При продвижении финансовых продуктов важно помнить о репутационных рисках. Не обещайте "золотые горы" и 100% гарантию прибыли. Говорите честно о рисках. Делайте акцент на обучении, демо-счете и копировании сделок. Работайте с реальными кейсами, а не с фейковыми фото денег и яхт.
                              </p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">6. Чек-лист перед запуском во ВКонтакте</h4>
                              <ul className="list-disc pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>Создано и оформлено сообщество (аватарка, обложка, описание, закреп)</li>
                                  <li>Настроены приложения (Senler, Гамаюн, чат-бот)</li>
                                  <li>Подготовлен лид-магнит (гайд/чек-лист)</li>
                                  <li>Составлен контент-план на 2 недели (80% полезного, 20% продающего)</li>
                                  <li>Собраны сегменты ЦА для таргета (интересы, демография)</li>
                                  <li>Подготовлены креативы для рекламы (3-5 вариантов)</li>
                                  <li>Настроены витрины/Smart-ссылки/Trafficback (если используете LeadCore)</li>
                                  <li>Выделен бюджет на тест (от 3000₽)</li>
                                  <li>Настроена аналитика (пиксели, SubID)</li>
                              </ul>
                          </div>

                          <div className="p-3 bg-ios-lilac/10 border border-ios-lilac/20 rounded-lg">
                              <h4 className="text-white font-bold text-xs mb-1">Резюме</h4>
                              <p className="text-xs text-ios-textSec">
                                  ВКонтакте — идеальная площадка для финансовой вертикали, если подходить системно. Главное — не просто лить на прямой оффер, а строить воронку: привлёк → заинтересовал → прогрел → закрыл → дожал. Используйте инструменты автоматизации, тестируйте разные сегменты и никогда не обещайте лёгких денег.
                              </p>
                          </div>
                      </div>
                  </section>

                  <div className="w-full h-px bg-white/5"></div>

                  {/* TELEGRAM ADS */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-sky-500 rounded-lg text-white"><Send size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">Telegram Ads: полное руководство по привлечению трейдеров в 2026 году</h3>
                      </div>

                      <div className="space-y-6">
                          <div className="prose prose-invert">
                              <p className="text-sm text-ios-textSec">
                                  Привет! Мы разобрали Instagram, TikTok и ВКонтакте. Теперь — Telegram Ads. Это один из самых эффективных и недооценённых каналов для финансовой вертикали в 2026 году. Платформа даёт прямой доступ к аудитории, которая уже потребляет контент по теме инвестиций, крипты и трейдинга.
                              </p>
                          </div>

                          <div className="glass-card p-4 rounded-xl">
                              <h4 className="text-white font-bold mb-2">1. Что такое Telegram Ads и почему это работает</h4>
                              <p className="text-xs text-ios-textSec mb-2">Telegram Ads — это официальная рекламная платформа Telegram, где объявления показываются внизу ленты публичных каналов (от 1000 подписчиков). Оплата за CPM (от 0,1 TON), минимальный бюджет от 250-500€.</p>
                              <p className="text-xs text-ios-textSec">Почему идеально для трейдинга? Аудитория Telegram уже потребляет контент по теме, низкий процент оттока, высокий уровень доверия, возможность точечно попадать в каналы конкурентов.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl">
                              <h4 className="text-white font-bold mb-2">2. Что изменилось в Telegram Ads к 2026 году</h4>
                              <ul className="list-disc pl-4 text-xs text-ios-textSec space-y-1">
                                  <li><strong className="text-white">Медиаформаты:</strong> Теперь можно добавлять изображения и видео. CTR растёт на 25–50%.</li>
                                  <li><strong className="text-white">Расширенный таргетинг:</strong> Тематики, языки, гео, устройства.</li>
                                  <li><strong className="text-white">Search Ads:</strong> Реклама в результатах поиска.</li>
                                  <li><strong className="text-white">TON-интеграция:</strong> Оплата доступна в TON, евро или Telegram Stars.</li>
                              </ul>
                          </div>

                          <div className="glass-card p-4 rounded-xl">
                              <h4 className="text-white font-bold mb-2">3. Пошаговая настройка кампании</h4>
                              <ol className="list-decimal pl-4 text-xs text-ios-textSec space-y-2">
                                  <li><strong>Регистрация:</strong> ads.telegram.org или через реселлера.</li>
                                  <li><strong>Пополнение баланса:</strong> Минимум 300–500 евро для теста.</li>
                                  <li><strong>Создание кампании:</strong> Текст (до 160 символов) + Медиафайл (обязательно используем).</li>
                                  <li><strong>Настройка таргетинга:</strong> Тематики каналов (финансы, крипта), Конкретные каналы (самый высокий CTR, competitor targeting), География (РФ, КЗ, РБ).</li>
                                  <li><strong>Установка ставки:</strong> Минимальная CPM 1 евро, рабочая 1,5–2 евро.</li>
                                  <li><strong>Модерация и запуск.</strong></li>
                              </ol>
                          </div>

                          <div className="glass-card p-4 rounded-xl">
                              <h4 className="text-white font-bold mb-2">4. Как подбирать каналы для размещения</h4>
                              <p className="text-xs text-ios-textSec mb-2">Это самый важный этап. Где искать: TGStat, Похожие каналы, Ручной мониторинг. На что смотреть: Реальный охват, Динамика роста, Вовлечённость.</p>
                              <p className="text-xs text-ios-textSec">Категории каналов: Профессиональные (трейдинг), Бизнес и стартапы, Экономика, Технологии и IT, Образование.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl">
                              <h4 className="text-white font-bold mb-2">5. Как писать тексты, которые конвертируют</h4>
                              <p className="text-xs text-ios-textSec mb-2">Структура: Крючок -> Выгода -> Призыв. Без капслока и спама. Принципы: Конкретика, Цифры, Решение боли.</p>
                              <div className="bg-[#120B1F] p-3 rounded-lg mb-2">
                                  <p className="text-xs font-mono text-gray-300">
                                      ₿ Bitcoin пробил $50K. Куда дальше?<br/>
                                      Аналитика и сигналы каждый день<br/>
                                      👇 Забирай стратегию бесплатно
                                  </p>
                              </div>
                              <div className="bg-[#120B1F] p-3 rounded-lg">
                                  <p className="text-xs font-mono text-gray-300">
                                      Трейдинг для занятых: 15 мин в день<br/>
                                      Копируй сделки профитов без опыта<br/>
                                      💰 Бонус 50% на первый депозит
                                  </p>
                              </div>
                          </div>

                          <div className="glass-card p-4 rounded-xl">
                              <h4 className="text-white font-bold mb-2">6. Куда вести трафик и стратегии</h4>
                              <ul className="list-disc pl-4 text-xs text-ios-textSec space-y-1">
                                  <li><strong className="text-white">Telegram-канал:</strong> Быстрый набор подписчиков, нужен качественный контент.</li>
                                  <li><strong className="text-white">Telegram-бот:</strong> Сбор базы, лид-магниты (рекомендуется для сбора базы). Механика: реклама -> бот -> гайд -> прогрев.</li>
                              </ul>
                          </div>

                          {/* TELEGRAM EXTRA: CHANNEL CHECK */}
                          <div className="glass-card p-5 rounded-xl border border-sky-500/20 bg-sky-500/5">
                              <h4 className="text-sky-200 font-bold text-sm mb-3 flex items-center">
                                  <CheckCircle size={16} className="mr-2"/>
                                  БОНУС: Чек-лист проверки канала (перед покупкой рекламы)
                              </h4>
                              <ul className="text-xs text-ios-textSec space-y-2">
                                  <li><span className="text-red-300">❌ Красный флаг:</span> Резкий скачок подписчиков за 1 день без упоминаний (накрутка).</li>
                                  <li><span className="text-red-300">❌ Красный флаг:</span> Охваты постов одинаковые (1500, 1502, 1498) — это боты.</li>
                                  <li><span className="text-green-300">✅ Зеленый флаг:</span> Наличие комментариев и реакций, цитирование другими каналами (Индекс цитирования в TGStat).</li>
                              </ul>
                          </div>

                          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                              <p className="text-xs text-red-200">
                                  ⚠️ <strong className="text-red-100">Модерация:</strong> Telegram тщательно проверяет рекламу. Не пишите "бинарные опционы" в лоб, используйте "трейдинг", "аналитика". Работайте только с белыми офферами.
                              </p>
                          </div>

                          <div className="glass-card p-4 rounded-xl">
                              <h4 className="text-white font-bold mb-2">8. Аналитика и Чек-лист</h4>
                              <p className="text-xs text-ios-textSec mb-2">Ключевые метрики: CTR (0,5-2%), CPM, Cost per Subscriber. Оптимизация: отключайте каналы с низким CTR.</p>
                              <ul className="list-disc pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>Аккаунт зарегистрирован и пополнен</li>
                                  <li>Подготовлены креативы</li>
                                  <li>Собран список каналов (50-100 шт)</li>
                                  <li>Подготовлена посадочная страница</li>
                                  <li>Настроены UTM</li>
                              </ul>
                          </div>
                      </div>
                  </section>

                  <div className="w-full h-px bg-white/5"></div>

                  {/* YANDEX DIRECT */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-yellow-500 rounded-lg text-black font-bold font-serif">Я</div>
                          <h3 className="text-xl font-serif text-white leading-tight">Яндекс.Директ 2026: полное руководство по привлечению трейдеров</h3>
                      </div>
                      
                      <p className="text-sm text-ios-textSec mb-4">
                          Привет! Теперь — Яндекс.Директ. Это самый мощный инструмент для работы с «горячей» аудиторией, которая уже ищет возможности заработка, трейдинга и инвестиций. Важнейшее предупреждение на 2026 год: реклама финансовых услуг жёстко регулируется. Прямая реклама бинарных опционов запрещена. Но есть легальные способы — мы будем лить трафик на обучение и аналитику.
                      </p>

                      <div className="space-y-6">
                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">1. Что такое Яндекс.Директ и как он работает</h4>
                              <p className="text-xs text-ios-textSec mb-2">Две основные зоны: Поиск (горячие запросы) и РСЯ (догоняющая реклама). Важно: логично делать две отдельные кампании.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">2. Правовые ограничения: что можно и нельзя</h4>
                              <div className="grid grid-cols-1 gap-2">
                                  <div className="bg-red-500/10 p-2 rounded text-xs text-red-200">
                                      ⛔ НЕЛЬЗЯ: Прямая реклама крипты, обещания дохода, Форекс без лицензии РФ, Бинарные опционы.
                                  </div>
                                  <div className="bg-green-500/10 p-2 rounded text-xs text-green-200">
                                      ⚠️ МОЖНО (с осторожностью): Обучение и образование, Аналитика и новости, Оборудование для вычислений, Юридические услуги.
                                  </div>
                              </div>
                              <p className="text-xs text-red-300 mt-2">Критически важно: в объявлении и на посадочной странице обязательно должно быть предупреждение о высоких рисках.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">3. Подготовка к запуску: фундамент</h4>
                              <ul className="list-disc pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>Создание счётчика Яндекс.Метрики (metrika.yandex.ru). Обязательно "Вебвизор". Установите код на сайт.</li>
                                  <li>Регистрация в кабинете Директа.</li>
                                  <li>Переход в «Директ Про» (режим эксперта).</li>
                              </ul>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">4. Пошаговая настройка поисковой кампании</h4>
                              <ul className="list-disc pl-4 text-xs text-ios-textSec space-y-1">
                                  <li>Создание кампании: «Единая перфоманс-кампания».</li>
                                  <li>Базовые настройки: Только поиск, Гео (РФ, КЗ, РБ).</li>
                                  <li>Стратегия: «Максимум конверсий» (автостратегия).</li>
                              </ul>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">5. Сбор семантического ядра</h4>
                              <p className="text-xs text-ios-textSec mb-2">Категории запросов: Информационные ("обучение трейдингу", "курсы"), Аналитические ("курс биткоина"), Оборудование.</p>
                              <p className="text-xs text-ios-textSec">Минус-слова (обязательно): бесплатно, скачать, вакансия, работа.</p>
                              {/* YANDEX EXTRA: KEYWORDS */}
                              <div className="mt-2 bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
                                  <strong className="text-white text-xs block mb-1">Расширенный список минус-слов:</strong>
                                  <p className="text-[10px] text-ios-textSec font-mono">
                                      -бесплатно -скачать -торрент -реферат -диплом -вакансия -работа -форум -отзывы -развод -обман
                                  </p>
                              </div>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">6. Создание объявлений</h4>
                              <p className="text-xs text-ios-textSec mb-2">Можно писать: "Изучите технологию блокчейн", "Аналитика рынка". Нельзя: "Заработайте на Bitcoin".</p>
                              <div className="bg-[#120B1F] p-3 rounded text-xs text-ios-textSec">
                                  <strong className="text-blue-400 text-sm block mb-1">Обучение трейдингу с нуля</strong>
                                  <p className="mb-1">Бесплатный вводный вебинар. Стратегии, аналитика, поддержка. Начни сейчас!</p>
                                  <p className="text-xs opacity-50">Программа курса | Отзывы | Преподаватели</p>
                              </div>
                              <p className="text-xs mt-2 italic">Используйте AI-креативы Яндекса для повышения конверсии.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">7. РСЯ и Посадка</h4>
                              <p className="text-xs text-ios-textSec mb-2">РСЯ: ретаргетинг на посетителей сайта. Креативы эмоциональные.</p>
                              <p className="text-xs text-ios-textSec">Куда вести: Лендинг (сайт), Telegram-канал, Telegram-бот, Бесплатный лендинг внутри Директа. Требования: дисклеймер, мобильная версия, скорость.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-2">8. Модерация и Аналитика</h4>
                              <p className="text-xs text-ios-textSec mb-2">Стратегия выживания: начните с нейтральной кампании, используйте белый домен. Аналитика: UTM-метки, Цели в Метрике, ROI.</p>
                              <p className="text-xs text-ios-textSec">Чек-лист: Метрика, Директ Про, Семантика, Минус-слова, Объявления, Дисклеймер, Бюджет.</p>
                          </div>

                          <div className="p-3 bg-ios-lilac/10 border border-ios-lilac/20 rounded-lg">
                              <h4 className="text-white font-bold text-xs mb-1">Резюме</h4>
                              <p className="text-xs text-ios-textSec">
                                  Яндекс.Директ в 2026 году — мощный инструмент. Ключ к успеху: работа в белую, качественные данные, точная семантика и раздельные кампании. Погнали лить трафик!
                              </p>
                          </div>
                      </div>
                  </section>

                  <div className="w-full h-px bg-white/5"></div>

                  {/* OTHER SOURCES */}
                  <section>
                      <div className="flex items-center space-x-3 mb-5">
                          <div className="p-2 bg-ios-lilac/20 rounded-lg text-ios-lilac"><Radio size={24} /></div>
                          <h3 className="text-xl font-serif text-white leading-tight">Дополнительные источники трафика (2026)</h3>
                      </div>

                      <p className="text-sm text-ios-textSec mb-4">
                          Отлично! После того как мы разобрали основные каналы, логично расширить воронку. В 2026 году успешный арбитражник собирает устойчивый микс каналов.
                      </p>

                      <div className="space-y-6">
                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-1">1. OEM-каналы и альтернативные сторы (Xiaomi, Huawei)</h4>
                              <p className="text-xs text-ios-textSec">Самый хайповый канал для мобильного трафика. Пользователи скачивают приложения из GetApps, AppGallery. Реклама встроена в систему. Плюсы: Доля рынка 25%, Меньшая конкуренция, Органичность. Форматы: Dynamic Preload, Реклама в сторах. Это долгосрочный актив.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-1">2. Рекламные сети (Push, Pop, In-page)</h4>
                              <p className="text-xs text-ios-textSec">Классика арбитража. Топ-сети 2026: ROIads (AI-оптимизация), RichAds, PropellerAds. Форматы: Push, Popunder. Идеальны для тестирования офферов с массовыми охватами.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-1">3. Инфлюенс-маркетинг (работа с блогерами)</h4>
                              <p className="text-xs text-ios-textSec">Партнерский маркетинг. Микро-блогеры дают отклик лучше. Форматы: YouTube-обзоры, TG-каналы. Как работать: Предлагайте партнерскую программу за % от выигрышей подписчиков.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-1">4. Бесплатные методы (Форумы, Блоги, Дзен)</h4>
                              <p className="text-xs text-ios-textSec">Отзовики (Otzovik), Форумы, Блог-платформы (Дзен, Tilda). Пишите развернутые посты и статьи ("Топ-5 стратегий"). Это даёт "вечный" органический трафик.</p>
                          </div>

                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-1">5. Оффлайн-трафик (QR-коды)</h4>
                              <p className="text-xs text-ios-textSec">Генерируйте QR с партнерской ссылкой. Размещайте на визитках, флаерах в местах скопления ЦА. Локальный, но "тёплый" трафик.</p>
                          </div>
                          
                          <div className="glass-card p-4 rounded-xl border border-white/5">
                              <h4 className="text-white font-bold mb-1">6. SEO и долгосрочный контент</h4>
                              <p className="text-xs text-ios-textSec">Статьи-сравнения, Обучающие гайды. Выигрывают те, кто строит доверие через контент.</p>
                          </div>

                          {/* COMPARISON TABLE */}
                          <div className="mt-6 overflow-x-auto">
                               <table className="w-full text-[10px] text-left">
                                   <thead>
                                       <tr className="border-b border-white/10 text-white">
                                           <th className="py-2 px-1">Канал</th>
                                           <th className="py-2 px-1">Бюджет</th>
                                           <th className="py-2 px-1">Скорость</th>
                                           <th className="py-2 px-1">Сложность</th>
                                           <th className="py-2 px-1">Особенность 2026</th>
                                       </tr>
                                   </thead>
                                   <tbody className="text-ios-textSec">
                                       <tr className="border-b border-white/5"><td className="py-2 px-1 text-white">OEM</td><td className="px-1">Средний</td><td className="px-1">Средняя</td><td className="px-1">Высокая</td><td className="px-1">Растущий тренд</td></tr>
                                       <tr className="border-b border-white/5"><td className="py-2 px-1 text-white">Push/Pop</td><td className="px-1">Низкий</td><td className="px-1">Высокая</td><td className="px-1">Средняя</td><td className="px-1">AI-оптимизация</td></tr>
                                       <tr className="border-b border-white/5"><td className="py-2 px-1 text-white">Блогеры</td><td className="px-1">Средний</td><td className="px-1">Средняя</td><td className="px-1">Высокая</td><td className="px-1">Партнерские системы</td></tr>
                                       <tr className="border-b border-white/5"><td className="py-2 px-1 text-white">Форумы</td><td className="px-1">0₽</td><td className="px-1">Низкая</td><td className="px-1">Низкая</td><td className="px-1">Вечные лиды</td></tr>
                                       <tr className="border-b border-white/5"><td className="py-2 px-1 text-white">Оффлайн</td><td className="px-1">Низкий</td><td className="px-1">Средняя</td><td className="px-1">Средняя</td><td className="px-1">Тёплый трафик</td></tr>
                                       <tr><td className="py-2 px-1 text-white">SEO</td><td className="px-1">0₽</td><td className="px-1">Низкая</td><td className="px-1">Средняя</td><td className="px-1">Окупается LTV</td></tr>
                                   </tbody>
                               </table>
                          </div>
                      </div>
                  </section>

                  {/* BONUS: DICTIONARY */}
                  <section className="bg-[#05010D] border border-white/10 p-5 rounded-2xl">
                      <div className="flex items-center space-x-2 mb-4">
                          <BookOpen size={18} className="text-ios-lilac" />
                          <h3 className="text-lg font-bold text-white">Словарь Арбитражника (База)</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-3 text-xs text-ios-textSec">
                          <div className="flex justify-between border-b border-white/5 pb-1">
                              <span className="font-bold text-white">CPA (Cost Per Action)</span>
                              <span>Оплата за действие (депозит).</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                              <span className="font-bold text-white">RevShare</span>
                              <span>% от дохода брокера (навсегда).</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                              <span className="font-bold text-white">ROI</span>
                              <span>Возврат инвестиций ((Доход-Расход)/Расход * 100).</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                              <span className="font-bold text-white">Клоакинг</span>
                              <span>Подмена страницы для модераторов (чтобы пройти бан).</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                              <span className="font-bold text-white">Лендинг</span>
                              <span>Посадочная страница для сбора контактов.</span>
                          </div>
                      </div>
                  </section>

                  {/* CONCLUSION */}
                  <section className="bg-gradient-to-r from-ios-lilac/20 to-purple-900/20 p-6 rounded-2xl text-center border border-ios-lilac/30">
                      <h3 className="text-lg font-bold text-white mb-2">Главный тренд 2026: ДОВЕРИЕ и ДИВЕРСИФИКАЦИЯ</h3>
                      <p className="text-sm text-ios-textSec mb-4">
                          Люди устали от спама. Они хотят покупать у тех, кому доверяют. Ваша задача — не "впарить", а дать ценность (обучение, аналитику) и выстроить отношения. Диверсифицируйте источники, чтобы не зависеть от одного канала. Теперь у вас есть полная карта источников трафика. Выбирайте, тестируйте и масштабируйте! 🚀📊
                      </p>
                      <button 
                        onClick={handleBack}
                        className="w-full bg-ios-lilac text-white h-12 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg"
                      >
                          Завершить блок
                      </button>
                  </section>

              </div>
          </div>
      );
  }

  // --- MAIN LIST VIEW RENDERER ---
  return (
    <div className="pb-32 pt-8 px-4 animate-fade-in">
      
      {/* Header Style */}
      <div className="mb-10 text-center relative">
         <span className="text-xs font-sans uppercase tracking-[0.2em] text-ios-textSec opacity-70 block mb-2">Программа обучения</span>
         <h1 className="text-3xl font-serif text-white tracking-wide">АКАДЕМИЯ</h1>
         <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ios-lilac/30 to-transparent -z-10"></div>
      </div>

      <div className="space-y-6">
        {modules.map((module) => (
          <div 
            key={module.id} 
            onClick={() => handleModuleClick(module)}
            className={`
              relative bg-[#120B1F] border border-[#2E1065] rounded-xl p-6 
              flex flex-col items-center text-center transition-all duration-300
              ${module.locked ? 'opacity-70 grayscale-[0.5]' : 'active:scale-[0.98] shadow-lg shadow-ios-lilac/5 cursor-pointer'}
            `}
          >
             {/* Decorative top accent */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-ios-lilac/50 to-transparent"></div>
             
             {/* Icon/Status */}
             <div className="mb-4 text-ios-lilacLight opacity-80">
                 {module.locked ? <Lock size={20} strokeWidth={1} /> : <PlayCircle size={28} strokeWidth={1} fill="currentColor" className="text-ios-lilac/20" />}
             </div>

             <h3 className="text-xl font-serif text-white mb-4 leading-snug">
                {module.title}
             </h3>

             <div className="w-8 h-px bg-white/10 mb-4"></div>

             <ul className="text-sm text-ios-textSec font-light leading-relaxed mb-6 px-2">
                <li>{module.description}</li>
             </ul>

             {/* Price/Action Button Lookalike */}
             <div className="mt-auto">
                 {module.locked ? (
                    <div className="text-xs font-sans text-ios-lilac uppercase tracking-widest border border-ios-lilac/30 rounded px-3 py-1.5 opacity-50 flex items-center gap-1 mx-auto w-fit">
                        <Lock size={10} /> Закрыто
                    </div>
                 ) : (
                    <button className="btn-primary w-full px-8 py-3 rounded-lg text-xs font-bold text-white uppercase tracking-widest hover:opacity-90 shadow-lg shadow-ios-lilac/20">
                        Начать
                    </button>
                 )}
             </div>
             
             {/* Price Tag Absolute */}
             {module.priceTag && (
                 <div className="absolute top-4 right-4 text-[9px] text-white/40 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider">
                     {module.priceTag}
                 </div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabCourse;