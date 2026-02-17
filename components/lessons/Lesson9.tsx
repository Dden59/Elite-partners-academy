// ========================================================================================================
// FILE: components/lessons/Lesson9.tsx
// ========================================================================================================
import React from 'react';
import { 
  ArrowLeft, BookOpen, TrendingUp, Globe, Bot, Smartphone, 
  Zap, Package, CheckCircle2, MessageCircle, CreditCard, 
  ShieldCheck, Clock, ExternalLink 
} from 'lucide-react';

interface LessonProps {
  onBack: () => void;
  onComplete: () => void;
}

const Lesson9: React.FC<LessonProps> = ({ onBack, onComplete }) => {
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
          <h2 className="text-sm font-medium text-white line-clamp-1">Модуль 9: Витрина решений</h2>
       </div>

       <div className="px-5 py-6 space-y-10">
          
          {/* Header Info */}
          <div className="space-y-2">
             <h1 className="text-2xl font-serif text-white leading-tight">ВИТРИНА ГОТОВЫХ РЕШЕНИЙ ПОД КЛЮЧ – инструменты, которые мы настроим и запустим за тебя</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Каталог</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> Premium</span>
             </div>
          </div>
          <hr className="border-white/10" />

          {/* === ВСТУПЛЕНИЕ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="glass-card p-6 rounded-xl border-l-4 border-l-ios-lilac relative overflow-hidden">
                <p className="text-white font-serif leading-relaxed text-base relative z-10">
                  Привет! Ты уже знаешь, как привлекать трафик, создавать контент и строить личный бренд. Но есть вещи, которые лучше доверить профессионалам, чтобы не тратить недели на изучение кода и нейросетей.
                  <br/><br/>
                  В этом блоке я открываю свою витрину инструментов под ключ. Мы берём на себя всю техническую работу: программирование, дизайн, настройку, интеграцию. Ты получаешь полностью готовый продукт, который сразу начинает приносить тебе бесплатный трафик, лидов и регистрации.
                </p>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p className="font-bold text-white">Почему это выгодно?</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Экономия времени – не нужно учиться программировать, разбираться в API или дизайне.</li>
                   <li>Гарантия результата – мы уже сделали это десятки раз, всё работает.</li>
                   <li>Поддержка – если что-то пойдёт не так, мы поможем.</li>
                </ul>
                <p>Выбирай то, что нужно именно тебе, и мы сделаем всё остальное.</p>
             </div>
          </section>

          {/* === ПРОДУКТ 1: ЛЕНДИНГ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 bg-blue-600 rounded-bl-xl text-white font-bold text-xs">
                   10 000 ₽
                </div>
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><Globe size={20}/></div>
                   <h3 className="text-lg font-serif text-white leading-tight pr-10">1. 🌐 ПРОДАЮЩИЙ ЛЕНДИНГ – твоя посадочная страница</h3>
                </div>

                <div className="space-y-4 text-ios-textSec text-sm leading-7">
                   <p><strong>Что это такое?</strong><br/>
                   Это готовый, профессионально разработанный лендинг, который мы создадим специально для тебя. Он идеально подходит для сбора подписчиков в Telegram или прямого редиректа на партнёрскую ссылку Pocket Option. Размещай ссылку в шапке профиля Instagram, TikTok, используй в рекламе – и получай максимальную конверсию.</p>

                   <p><strong>Что входит в стоимость:</strong></p>
                   <ul className="space-y-1">
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0"/> ✅ Уникальный дизайн – выбирай один из трёх готовых макетов, или мы разработаем под твой бренд</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0"/> ✅ Адаптация под мобильные устройства – всё выглядит идеально на телефонах</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0"/> ✅ Продающая структура: Заголовок с оффером, УТП, Блок с преимуществами, Инструкция "Как начать", Блок с отзывами, Кнопка с твоей ссылкой, Дисклеймер о рисках</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0"/> ✅ Размещение на хостинге – первый год обслуживания бесплатно</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0"/> ✅ Подключение твоего домена (если есть, если нет – дадим поддомен)</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0"/> ✅ Настройка Яндекс.Метрики – ты видишь статистику посещений</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0"/> ✅ Интеграция с Telegram – кнопка ведёт прямо в твой канал или на бота</li>
                   </ul>

                   <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-white font-bold mb-2">Преимущества:</p>
                      <ul className="list-disc list-inside text-xs space-y-1">
                         <li>✅ Высокая конверсия – дизайн и тексты протестированы</li>
                         <li>✅ Экономия денег – разработка лендинга у фрилансера стоит от 30 000 ₽</li>
                         <li>✅ Готов к использованию – получил ссылку и сразу запускаешь рекламу</li>
                         <li>✅ Проходит модерацию – учтены все требования Яндекса и VK</li>
                      </ul>
                   </div>

                   <p className="text-xs"><strong>Кому подойдёт:</strong> Тем, кто запускает таргет ВК или Яндекс.Директ. Тем, у кого есть Instagram или TikTok и нужна посадочная страница. Тем, кто хочет собирать email-подписчиков для рассылок.</p>
                </div>
             </div>
          </section>

          {/* === ПРОДУКТ 2: НЕЙРОКОММЕНТИНГ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 bg-purple-600 rounded-bl-xl text-white font-bold text-xs">
                   15 000 ₽
                </div>
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500"><Bot size={20}/></div>
                   <h3 className="text-lg font-serif text-white leading-tight pr-10">2. 🤖 НЕЙРОКОММЕНТИНГ – бесплатный трафик</h3>
                </div>

                <div className="space-y-4 text-ios-textSec text-sm leading-7">
                   <p><strong>Что это такое?</strong><br/>
                   Это уникальная программа, которая автоматически комментирует посты в чужих Telegram-каналах с помощью нейросетей. Боты подписываются на каналы с открытыми обсуждениями, отслеживают новые посты и оставляют под ними умные, естественные комментарии, которые привлекают внимание и ведут людей на твой канал.</p>

                   <p><strong>Как это работает?</strong></p>
                   <ol className="list-decimal list-inside ml-2">
                      <li>Ты предоставляешь аккаунты Telegram (покупаешь или создаёшь сам – мы поможем советом).</li>
                      <li>Ты даёшь нам ссылки на каналы, где хочешь комментировать (например, крупные паблики про трейдинг, крипту, инвестиции).</li>
                      <li>Мы настраиваем программу под твои задачи: подключаем нейросеть, прописываем сценарии комментариев (дружелюбные, экспертные, с вопросом).</li>
                      <li>Ты запускаешь программу у себя на ПК (или на сервере) – она работает 24/7.</li>
                      <li>Результат: твои боты оставляют сотни комментариев в день, люди переходят к тебе в профиль и подписываются на твой канал. Бесплатный органический трафик!</li>
                   </ol>

                   <p><strong>Что входит в стоимость:</strong></p>
                   <ul className="space-y-1">
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-1 shrink-0"/> ✅ Настройка программы под твой компьютер (Windows)</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-1 shrink-0"/> ✅ Подключение нейросети (ChatGPT или аналог) для генерации уникальных комментариев</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-1 shrink-0"/> ✅ Добавление до 50 каналов для мониторинга</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-1 shrink-0"/> ✅ Инструкция по покупке/созданию аккаунтов Telegram</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-1 shrink-0"/> ✅ Обучение: как запускать и останавливать программу</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-purple-500 mt-1 shrink-0"/> ✅ Поддержка 1 месяц (помогаем, если возникают вопросы)</li>
                   </ul>

                   <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-white font-bold mb-2">Преимущества:</p>
                      <ul className="list-disc list-inside text-xs space-y-1">
                         <li>✅ Бесплатный трафик – не нужно платить за рекламу</li>
                         <li>✅ Органичность – комментарии выглядят как от живых людей, их не банят</li>
                         <li>✅ Масштабирование – можно добавить сколько угодно аккаунтов и каналов</li>
                         <li>✅ Автоматизация – ты просто следишь за ростом подписчиков</li>
                      </ul>
                   </div>

                   <p className="text-xs"><strong>Кому подойдёт:</strong> Тем, кто хочет получать подписчиков без рекламного бюджета. Тем, у кого уже есть канал и нужно его раскачать. Тем, кто готов потратить немного времени на первоначальную настройку (мы поможем).</p>
                </div>
             </div>
          </section>

          {/* === ПРОДУКТ 3: БОТ СИГНАЛОВ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 bg-green-600 rounded-bl-xl text-white font-bold text-xs">
                   25 000 ₽
                </div>
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Smartphone size={20}/></div>
                   <h3 className="text-lg font-serif text-white leading-tight pr-10">3. 📊 БОТ ДЛЯ СИГНАЛОВ (Mini App) – личный помощник</h3>
                </div>

                <div className="space-y-4 text-ios-textSec text-sm leading-7">
                   <p><strong>Что это такое?</strong><br/>
                   Это твой собственный Telegram-бот, который выдаёт подписчикам сигналы для торговли. Бот оформлен как стильное Mini App (встроенное приложение) с удобным интерфейсом. Он работает полностью автоматически: ты просто получаешь уведомления о новых регистрациях и лидах.</p>

                   <p><strong>Что умеет бот:</strong></p>
                   <ul className="list-disc list-inside space-y-1">
                      <li>✅ Выдавать сигналы – ты можешь загружать их вручную или настроить автоматическое получение из любого источника (по желанию)</li>
                      <li>✅ Красивый интерфейс – дизайн разработан специально для финансовой тематики</li>
                      <li>✅ Сбор контактов – бот просит оставить email или номер телефона перед выдачей сигнала</li>
                      <li>✅ Интеграция с партнёрской ссылкой – в каждом сигнале или отдельном меню есть твоя ссылка на Pocket Option</li>
                      <li>✅ Статистика – ты видишь, сколько человек подписалось, сколько запросило сигналов</li>
                   </ul>

                   <p><strong>Что входит в стоимость:</strong></p>
                   <ul className="space-y-1">
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0"/> ✅ Разработка бота (Mini App) на заказ с уникальным дизайном</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0"/> ✅ Подключение к твоему Telegram-аккаунту</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0"/> ✅ Настройка автоматической выдачи сигналов (по твоему желанию: ручной ввод / автопостинг / парсинг)</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0"/> ✅ Интеграция с Google Таблицей для сбора лидов</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0"/> ✅ Инструкция по добавлению сигналов (если будешь делать это сам)</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0"/> ✅ Поддержка 1 месяц</li>
                   </ul>

                   <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-white font-bold mb-2">Преимущества:</p>
                      <ul className="list-disc list-inside text-xs space-y-1">
                         <li>✅ Престижно и современно – Mini App выглядит дорого и вызывает доверие</li>
                         <li>✅ Автоматизация – бот работает без выходных</li>
                         <li>✅ Сбор лидов – ты получаешь базу подписчиков для дальнейших продаж</li>
                         <li>✅ Простота – не нужно разбираться в коде, просто пользуешься</li>
                      </ul>
                   </div>

                   <p className="text-xs"><strong>Кому подойдёт:</strong> Тем, кто хочет выделиться среди конкурентов. Тем, кто хочет автоматизировать выдачу сигналов. Тем, кто строит личный бренд и хочет предложить подписчикам полезный инструмент.</p>
                </div>
             </div>
          </section>

          {/* === ПРОДУКТ 4: ПОЛНАЯ ВОРОНКА (PREMIUM) === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-gradient-to-br from-[#2E1065] to-[#4C1D95] p-6 rounded-xl border border-ios-lilac/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <div className="absolute top-0 right-0 p-3 bg-amber-500 text-black font-bold text-xs rounded-bl-xl">
                   47 000 ₽ (Выгода 23к)
                </div>
                
                <div className="flex items-center gap-3 mb-4 mt-2">
                   <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black"><Zap size={20} fill="currentColor"/></div>
                   <h3 className="text-lg font-serif text-white leading-tight pr-20">4. 🎯 ПОЛНАЯ ВОРОНКА ПРОДАЖ – твой личный отдел продаж</h3>
                </div>

                <div className="space-y-4 text-white/90 text-sm leading-7">
                   <p><strong>Что это такое?</strong><br/>
                   Это полностью автоматизированная система, которая проводит подписчика от первого клика до регистрации на Pocket Option. Воронка состоит из трёх этапов, каждый из которых мы настраиваем под ключ. Тебе остаётся только запустить трафик и собирать прибыль.</p>

                   <div className="space-y-4 bg-black/20 p-4 rounded-xl border border-white/10">
                      <p className="font-bold text-amber-400">Как выглядит воронка:</p>
                      
                      <div>
                         <p className="font-bold text-white text-xs uppercase">Этап 1. Конвертирующий лендинг</p>
                         <p className="text-xs text-gray-300">Красивый лендинг, адаптированный под мобильные. Заголовок, оффер, кнопка ведёт в Telegram на бота. Настройка Метрики.</p>
                      </div>
                      
                      <div>
                         <p className="font-bold text-white text-xs uppercase">Этап 2. ИИ-бот, который маскируется под человека</p>
                         <p className="text-xs text-gray-300">Telegram-бот с ИИ, который общается как реальный человек. Ведёт диалог, высылает гайд, даёт ссылку на сигнального бота. Подписчик думает, что общается с тобой!</p>
                      </div>

                      <div>
                         <p className="font-bold text-white text-xs uppercase">Этап 3. Бот с сигналами (Mini App)</p>
                         <p className="text-xs text-gray-300">Тот же бот, что описан выше. Выдаёт сигналы, собирает контакты, мотивирует зарегистрироваться.</p>
                      </div>
                   </div>

                   <p><strong>Что входит в стоимость:</strong></p>
                   <ul className="space-y-1 text-xs">
                      <li className="flex gap-2"><CheckCircle2 size={12} className="text-amber-400 mt-1 shrink-0"/> ✅ Разработка лендинга (уникальный дизайн, адаптив, хостинг)</li>
                      <li className="flex gap-2"><CheckCircle2 size={12} className="text-amber-400 mt-1 shrink-0"/> ✅ Создание ИИ-бота с диалоговым сценарием (интеграция с ChatGPT)</li>
                      <li className="flex gap-2"><CheckCircle2 size={12} className="text-amber-400 mt-1 shrink-0"/> ✅ Разработка сигнального бота (Mini App)</li>
                      <li className="flex gap-2"><CheckCircle2 size={12} className="text-amber-400 mt-1 shrink-0"/> ✅ Настройка всей цепочки: лендинг → бот-человек → сигнальный бот → регистрация</li>
                      <li className="flex gap-2"><CheckCircle2 size={12} className="text-amber-400 mt-1 shrink-0"/> ✅ Подготовка бесплатного гайда (текст + дизайн)</li>
                      <li className="flex gap-2"><CheckCircle2 size={12} className="text-amber-400 mt-1 shrink-0"/> ✅ Интеграция с Google Таблицей для сбора всех лидов</li>
                      <li className="flex gap-2"><CheckCircle2 size={12} className="text-amber-400 mt-1 shrink-0"/> ✅ Подробная инструкция и поддержка 1 месяц</li>
                   </ul>

                   <p className="text-xs pt-2"><strong>Кому подойдёт:</strong> Тем, кто серьёзно настроен построить пассивный доход. Тем, у кого уже есть бюджет на рекламу и нужно максимально эффективно его использовать.</p>
                </div>
             </div>
          </section>

          {/* === ПАКЕТЫ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold"><Package size={18}/></div>
                <h3 className="text-xl font-serif text-white">ДРУГИЕ ГОТОВЫЕ ПАКЕТЫ</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-ios-textSec text-sm">
                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-bold">Пакет "ТРАФИК"</h4>
                      <span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded">22 000 ₽</span>
                   </div>
                   <p className="text-xs text-green-400 mb-2">Экономия 3 000 ₽</p>
                   <ul className="space-y-1 text-xs">
                      <li>🤖 Нейрокомментинг</li>
                      <li>🌐 Продающий лендинг</li>
                   </ul>
                   <p className="text-xs mt-3 italic">Идеально для старта: ты получаешь и инструмент привлечения, и посадочную страницу.</p>
                </div>

                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-bold">Пакет "АВТОМАТ"</h4>
                      <span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded">22 000 ₽</span>
                   </div>
                   <p className="text-xs text-green-400 mb-2">Экономия 13 000 ₽</p>
                   <ul className="space-y-1 text-xs">
                      <li>📊 Бот для сигналов (Mini App)</li>
                      <li>🌐 Продающий лендинг</li>
                   </ul>
                   <p className="text-xs mt-3 italic">Твой канал с сигналами + посадочная страница – всё готово к монетизации.</p>
                </div>
             </div>
          </section>

          {/* === ПРОЦЕСС И ГАРАНТИИ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-6 text-sm">
                <div>
                   <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Clock size={16}/> КАК МЫ ПЕРЕДАЁМ ПРОДУКТ</h4>
                   <ol className="list-decimal list-inside space-y-1 text-gray-300">
                      <li>Ты выбираешь нужный продукт или пакет.</li>
                      <li>Оплачиваешь (карты РФ, крипта, USDT).</li>
                      <li>Мы связываемся с тобой в Telegram в течение 24 часов.</li>
                      <li>Для продуктов, где нужно твоё участие, мы даём инструкции.</li>
                      <li>Для продуктов "под ключ" мы всё делаем сами.</li>
                      <li>Через 1–5 дней ты получаешь готовый инструмент.</li>
                      <li>Мы на связи месяц – помогаем с вопросами.</li>
                   </ol>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                   <h4 className="text-white font-bold mb-3 flex items-center gap-2"><ShieldCheck size={16}/> ГАРАНТИИ</h4>
                   <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>✅ Гарантия возврата 14 дней, если продукт не работает технически.</li>
                      <li>✅ Бесплатные обновления в течение года.</li>
                      <li>✅ Поддержка – ты не остаёшься один на один с проблемой.</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* === ПОЧЕМУ СЕЙЧАС === */}
          <section className="space-y-4 animate-fade-in">
             <h3 className="text-lg font-serif text-white">ПОЧЕМУ СТОИТ КУПИТЬ СЕЙЧАС?</h3>
             <ul className="list-disc list-inside text-sm text-ios-textSec space-y-2">
                <li>Ты экономишь недели на изучение программирования и нейросетей.</li>
                <li>Ты получаешь проверенные инструменты, которые уже приносят деньги нашим ученикам.</li>
                <li>Ты можешь масштабироваться быстрее – пока другие настраивают, ты уже зарабатываешь.</li>
                <li>Количество мест ограничено, потому что мы делаем всё вручную.</li>
             </ul>
          </section>

          {/* === КАК ЗАКАЗАТЬ === */}
          <section className="space-y-6 pb-6 animate-fade-in">
             <div className="bg-gradient-to-br from-green-500/20 to-emerald-900/20 p-8 rounded-2xl border border-green-500/30 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                
                <h3 className="text-white font-serif text-2xl mb-4">КАК ЗАКАЗАТЬ?</h3>
                <div className="text-sm text-ios-textSec mb-8 leading-relaxed text-left mx-auto max-w-xs">
                    <ol className="list-decimal list-inside space-y-2">
                       <li>Напиши мне в личные сообщения.</li>
                       <li>Скажи, какой продукт или пакет хочешь.</li>
                       <li>Я отправлю реквизиты для оплаты.</li>
                       <li>После оплаты мы начинаем работу.</li>
                    </ol>
                </div>
                
                <a 
                   href="https://t.me/adm_ria" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transition-all active:scale-95"
                >
                   <MessageCircle size={20} />
                   НАПИСАТЬ МЕНЕДЖЕРУ
                </a>
             </div>
             
             <p className="text-center text-xs text-ios-textSec italic">
                Твой доход ждёт, когда ты перестанешь тратить время на технические детали и начнёшь использовать готовые решения. Выбирай инструмент и запускай свой финансовый поток уже сегодня! 🚀
             </p>
          </section>

          {/* Finish Button */}
          <div className="pt-4 pb-4">
             <button 
               onClick={onComplete}
               className="w-full btn-primary h-16 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-yellow-900/20 active:scale-95 transition-transform"
             >
                ОЗНАКОМИЛСЯ И ЗАВЕРШИТЬ КУРС
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson9;