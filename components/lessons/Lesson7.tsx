// ========================================================================================================
// FILE: components/lessons/Lesson7.tsx
// ========================================================================================================
import React from 'react';
import { 
  ArrowLeft, BookOpen, TrendingUp, Users, Scale, ShieldCheck, 
  Briefcase, FileText, Globe, AlertTriangle, PieChart, Landmark 
} from 'lucide-react';

interface LessonProps {
  onBack: () => void;
  onComplete: () => void;
}

const Lesson7: React.FC<LessonProps> = ({ onBack, onComplete }) => {
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
          <h2 className="text-sm font-medium text-white line-clamp-1">Модуль 7: Масштабирование и право</h2>
       </div>

       <div className="px-5 py-6 space-y-10">
          
          {/* Header Info */}
          <div className="space-y-2">
             <h1 className="text-2xl font-serif text-white leading-tight">Блок 7: Масштабирование и юридические аспекты — как вырасти до стабильного дохода и спать спокойно</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Чтение</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> Полная версия</span>
             </div>
          </div>
          <hr className="border-white/10" />

          {/* === ВВЕДЕНИЕ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="glass-card p-6 rounded-xl border-l-4 border-l-cyan-500 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>
                <p className="text-white font-serif leading-relaxed text-base relative z-10">
                  Поздравляю! Ты прошёл долгий путь: научился привлекать трафик, создавать контент, автоматизировать рутину, обходить блокировки и строить комьюнити. Теперь у тебя есть стабильный доход от партнёрской программы Pocket Option. Но это только начало.
                </p>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p className="font-bold text-white">В этом блоке ты узнаешь:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Как масштабировать доход, не увеличивая рабочую нагрузку</li>
                   <li>Как нанимать помощников и строить команду</li>
                   <li>Как легально оформить свою деятельность и платить налоги</li>
                   <li>Как защитить себя от юридических рисков</li>
                   <li>Как диверсифицировать доход внутри одной партнёрской программы</li>
                </ul>
                <p>Этот блок — про системный подход и безопасность. Без него ты рискуешь либо упереться в потолок, либо потерять всё из-за налоговой или блокировки.</p>
             </div>
          </section>

          {/* === ЧАСТЬ 1: МАСШТАБИРОВАНИЕ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-500 font-bold">1</div>
                <h3 className="text-xl font-serif text-white">Масштабирование: от одиночки к системе</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-lg">1.1. Почему упёрся в потолок?</h4>
                <p>Ты работаешь по 10–12 часов в день, доход растёт, но потом останавливается. Знакомая ситуация? Это называется потолок одиночки. Один человек физически не может обслуживать бесконечное количество каналов, трафика и подписчиков.</p>
                
                <p><strong>Признаки, что пора масштабироваться:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Ты не успеваешь отвечать в личные сообщения</li>
                   <li>Посты выходят нерегулярно</li>
                   <li>Качество контента падает</li>
                   <li>Ты перестал тестировать новые каналы (нет времени)</li>
                   <li>Доход стоит на месте или падает</li>
                </ul>
                <p>Решение: перестать делать всё самому и начать делегировать.</p>

                <h4 className="text-white font-bold text-lg mt-6 flex items-center gap-2"><Users size={18} className="text-blue-400"/> 1.2. Что можно и нужно делегировать</h4>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Задача</th>
                            <th className="p-2 text-left">Кому можно доверить</th>
                            <th className="p-2 text-left">Примерная стоимость</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Написание постов</td>
                            <td className="p-2">Копирайтер</td>
                            <td className="p-2">100–300 руб/пост</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Создание картинок</td>
                            <td className="p-2">Дизайнер</td>
                            <td className="p-2">200–500 руб/изображение</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Монтаж видео</td>
                            <td className="p-2">Видеомонтажёр</td>
                            <td className="p-2">500–1500 руб/ролик</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Ответы в комментариях</td>
                            <td className="p-2">Модератор (удалённо)</td>
                            <td className="p-2">10–20 тыс руб/мес</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Настройка рекламы</td>
                            <td className="p-2">Таргетолог</td>
                            <td className="p-2">% от бюджета или фикс</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Администрирование чата</td>
                            <td className="p-2">Модератор</td>
                            <td className="p-2">5–15 тыс руб/мес</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Поиск новых каналов</td>
                            <td className="p-2">Ассистент</td>
                            <td className="p-2">Почасовая</td>
                         </tr>
                      </tbody>
                   </table>
                </div>

                <p><strong>Как начать:</strong></p>
                <ol className="list-decimal list-inside ml-2">
                   <li>Выпиши все задачи, которые ты делаешь.</li>
                   <li>Определи, какие из них требуют твоей уникальной экспертизы (стратегия, ключевые решения).</li>
                   <li>Всё остальное — делегируй.</li>
                </ol>

                <h4 className="text-white font-bold text-lg mt-6">1.3. Где искать помощников</h4>
                <ul className="list-disc list-inside space-y-1">
                   <li>Биржи фриланса: Kwork, fl.ru, Weblancer, Freelancehunt</li>
                   <li>Telegram-каналы: @freelance, @work_zaryad, @rabota_udalenka</li>
                   <li>Специализированные чаты: чаты таргетологов, копирайтеров</li>
                   <li>Сарафанное радио: спроси в своём комьюнити (возможно, кто-то из подписчиков ищет подработку)</li>
                </ul>
                <p className="bg-white/5 p-2 rounded italic text-xs">Совет: не бери первого попавшегося. Дай тестовое задание, посмотри, как человек общается, насколько ответственный.</p>

                <h4 className="text-white font-bold text-lg mt-6">1.4. Как управлять удалённой командой</h4>
                <ul className="list-disc list-inside space-y-1">
                   <li>Поставь чёткие задачи (Trello, Asana, Notion)</li>
                   <li>Установи дедлайны</li>
                   <li>Регулярно созванивайся (раз в неделю планерка)</li>
                   <li>Плати вовремя (это мотивирует)</li>
                   <li>Создай базу знаний (где хранятся инструкции, шаблоны, пароли)</li>
                </ul>
                <p>Важно: делегируя, ты не теряешь контроль, а освобождаешь время для роста.</p>

                <h4 className="text-white font-bold text-lg mt-6 flex items-center gap-2"><TrendingUp size={18} className="text-green-400"/> 1.5. Масштабирование через партнёрскую сеть</h4>
                <p>Твои ученики (которые пришли по твоей ссылке) тоже могут стать партнёрами и привлекать трейдеров. А ты будешь получать процент от их комиссий (RevShare) — это и есть главный бонус многоуровневой системы Pocket Option.</p>
                <p>Как это организовать:</p>
                <ol className="list-decimal list-inside ml-2">
                   <li>Обучай их так же, как я учу тебя.</li>
                   <li>Создай закрытый чат для своих партнёров, где вы делитесь опытом.</li>
                   <li>Мотивируй их бонусами (например, дополнительные проценты за объём).</li>
                   <li>Помогай им расти — тогда и твой доход будет расти.</li>
                </ol>
                <p>Эффект: твоя партнёрская сеть работает на тебя 24/7, а ты лишь координируешь процесс.</p>
             </div>
          </section>

          {/* === ЧАСТЬ 2: ЮРИДИЧЕСКИЕ АСПЕКТЫ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-500 font-bold">2</div>
                <h3 className="text-xl font-serif text-white">Юридические аспекты: как работать легально и безопасно</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-lg flex items-center gap-2"><Briefcase size={18} className="text-amber-400"/> 2.1. Нужно ли оформлять ИП или самозанятость?</h4>
                <p>Короткий ответ: если ты зарабатываешь регулярно и суммы значительные — да, лучше оформиться официально.</p>
                <p>Почему:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Защита от блокировок счетов (банки блокируют счета при подозрительных оборотах)</li>
                   <li>Возможность легально платить налоги (спишь спокойно)</li>
                   <li>Возможность заключать договоры с рекламодателями и партнёрами</li>
                   <li>Доверие со стороны платёжных систем</li>
                </ul>

                <p><strong>Варианты оформления в России:</strong></p>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Форма</th>
                            <th className="p-2 text-left">Налог</th>
                            <th className="p-2 text-left">Лимит дохода</th>
                            <th className="p-2 text-left">Плюсы</th>
                            <th className="p-2 text-left">Минусы</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Самозанятость (НПД)</td>
                            <td className="p-2">4% / 6%</td>
                            <td className="p-2">2,4 млн руб/год</td>
                            <td className="p-2">Быстро, бесплатно, нет отчётности</td>
                            <td className="p-2">Нельзя нанимать работников, лимит</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">ИП на НПД</td>
                            <td className="p-2">4% / 6%</td>
                            <td className="p-2">2,4 млн руб/год</td>
                            <td className="p-2">Можно нанимать сотрудников</td>
                            <td className="p-2">Сложнее закрыть, есть взносы</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">ИП на УСН (6%)</td>
                            <td className="p-2">6% от дохода</td>
                            <td className="p-2">150 млн руб/год</td>
                            <td className="p-2">Можно нанимать, большой лимит</td>
                            <td className="p-2">Нужно сдавать декларацию</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">ИП на УСН (15%)</td>
                            <td className="p-2">15% от прибыли</td>
                            <td className="p-2">150 млн руб/год</td>
                            <td className="p-2">Выгодно при больших расходах</td>
                            <td className="p-2">Сложнее считать</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p>Что выбрать для старта:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Если доход до 2,4 млн в год и не планируешь нанимать людей — самозанятость</li>
                   <li>Если доход выше или нужны сотрудники — ИП на УСН 6%</li>
                </ul>

                <h4 className="text-white font-bold text-lg mt-6 flex items-center gap-2"><Scale size={18} className="text-purple-400"/> 2.2. Как платить налоги с партнёрских доходов</h4>
                <p>Ты получаешь доход от иностранной компании (Pocket Option зарегистрирован на Маршалловых островах). Это доход из-за рубежа.</p>
                <p>Для самозанятых:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Ты обязан самостоятельно платить налог 4% или 6%</li>
                   <li>Для этого в приложении "Мой налог" нужно указать поступление и заплатить</li>
                </ul>
                <p>Для ИП:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Доходы от иностранных компаний облагаются так же, как и российские</li>
                   <li>Нужно учитывать их в КУДиР и платить налог</li>
                </ul>
                <p>Важно: не пытайся скрывать доходы. Банки передают информацию в налоговую при оборотах от 100 тыс руб/мес.</p>

                <h4 className="text-white font-bold text-lg mt-6">2.3. Валютный контроль и счета</h4>
                <p>Если ты выводишь деньги в криптовалюте или на зарубежные кошельки, нужно учитывать валютное законодательство.</p>
                <p>Основные правила для резидентов РФ:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Нельзя зачислять иностранную валюту на счета за рубежом без уведомления налоговой</li>
                   <li>Криптовалюта пока не регулируется жёстко, но тенденция к ужесточению</li>
                   <li>Лучше выводить на российские счета (как самозанятый или ИП) и платить налоги</li>
                </ul>
                <p>Как безопасно выводить с Pocket Option:</p>
                <ol className="list-decimal list-inside ml-2">
                   <li>Выводи на AdvCash, Perfect Money, USDT (крипта) — это основные методы на платформе.</li>
                   <li>С AdvCash переводи на российскую карту через P2P-обменники (например, BestChange) или официальные обменники.</li>
                   <li>Либо выводи в USDT и продавай на бирже (Binance, Bybit) за рубли с выводом на карту.</li>
                   <li>Для крупных сумм — оформляй ИП и работай официально с валютным контролем.</li>
                </ol>
                <p className="bg-white/5 p-2 rounded italic text-xs">Рекомендация: для небольших сумм (до 5000$ в месяц) — USDT → Binance P2P → карта. Для крупных сумм — консультируйся с бухгалтером.</p>

                <h4 className="text-white font-bold text-lg mt-6">2.4. Маркировка рекламы (закон о рекламе)</h4>
                <p>С 2022 года в России действует закон о маркировке интернет-рекламы. Если ты рекламируешь что-то в российском сегменте (VK, Яндекс, Instagram, Telegram для россиян), ты обязан:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Передавать данные о рекламе в ОРД (Единый реестр интернет-рекламы)</li>
                   <li>Маркировать посты пометкой "Реклама" и указывать информацию о рекламодателе</li>
                </ul>
                <p>Как это делать:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Использовать сервисы типа ОRDA, Mediascout, Lab.Ads (они автоматически передают данные)</li>
                   <li>В постах ставить метку "Реклама" и ссылку на страницу с информацией о рекламодателе</li>
                </ul>
                <p>Штрафы: до 500 тыс руб за отсутствие маркировки.</p>
                <p>Что делать партнёру Pocket Option:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Если твоя аудитория в России — лучше соблюдать закон</li>
                   <li>Если аудитория в других странах (Казахстан, Беларусь и т.д.) — законы этих стран нужно изучать отдельно</li>
                </ul>
                <p>Упрощение: можно использовать сервисы, которые автоматически маркируют посты в Telegram (например, Telemetry или Реклама.ру).</p>

                <h4 className="text-white font-bold text-lg mt-6 flex items-center gap-2"><FileText size={18} className="text-gray-300"/> 2.5. Юридическая безопасность: договоры и политика конфиденциальности</h4>
                <p>Если у тебя есть сайт, лендинг или бот, обязательно размести:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Политику конфиденциальности (как ты собираешь и обрабатываешь данные)</li>
                   <li>Пользовательское соглашение (правила пользования ресурсом)</li>
                   <li>Дисклеймер о рисках (для финансовых тем)</li>
                </ul>
                <p>Где взять шаблоны:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>На сайтах юридических компаний (бесплатно)</li>
                   <li>В конструкторах сайтов (Tilda, Readymag) есть встроенные</li>
                   <li>Заказать у юриста (надёжно, но платно)</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-xl border-l-2 border-white text-xs font-serif">
                   <p className="font-bold mb-1">Дисклеймер о рисках (обязательно):</p>
                   "Торговля финансовыми инструментами связана с высоким риском. Возможна потеря всех вложенных средств. Данный канал носит информационный характер и не является инвестиционной рекомендацией."
                </div>

                <h4 className="text-white font-bold text-lg mt-6">2.6. Защита от блокировок счетов и кошельков</h4>
                <p>Банки и платёжные системы могут блокировать счета по закону 115-ФЗ (противодействие отмыванию).</p>
                <p>Как избежать:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Не обналичивай сразу крупные суммы</li>
                   <li>Разбивай на несколько платежей</li>
                   <li>Имей документы, подтверждающие происхождение средств (партнёрские отчёты из Pocket Option)</li>
                   <li>Используй несколько платёжных систем</li>
                   <li>Не храни все деньги в одном месте</li>
                </ul>
                <p>Если заблокировали:</p>
                <ol className="list-decimal list-inside ml-2">
                   <li>Свяжись с поддержкой, выясни причину.</li>
                   <li>Предоставь документы (скрины партнёрки, выписки).</li>
                   <li>Если не помогают — обращайся в ЦБ или суд.</li>
                </ol>
             </div>
          </section>

          {/* === ЧАСТЬ 3: ДИВЕРСИФИКАЦИЯ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-500 font-bold">3</div>
                <h3 className="text-xl font-serif text-white">Диверсификация доходов внутри Pocket Option</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p>Ты работаешь только с Pocket Option — это твой основной и, возможно, единственный источник. Но даже внутри одной партнёрской программы можно диверсифицировать доходы, чтобы снизить риски.</p>

                <h4 className="text-white font-bold text-lg">3.1. Почему диверсификация нужна даже с одним оффером</h4>
                <ul className="list-disc list-inside space-y-1">
                   <li>Риски платформы: смена политики, задержки выплат, технические сбои</li>
                   <li>Риски ниши: тренды меняются, трейдинг может временно терять популярность</li>
                   <li>Риски каналов трафика: Instagram или TikTok могут забанить аккаунты</li>
                </ul>
                <p>Что диверсифицировать внутри Pocket Option:</p>
                <ol className="list-decimal list-inside ml-2">
                   <li>Источники трафика: не только Telegram, но и VK, YouTube, TikTok, Яндекс.Директ, Instagram, форумы</li>
                   <li>Типы контента: сигналы, обучение, аналитика, развлекательный контент</li>
                   <li>Продукты: создай свои цифровые товары, которые ведут на Pocket Option (курсы, гайды, подписки)</li>
                </ol>

                <h4 className="text-white font-bold text-lg mt-6">3.2. Создание собственных продуктов, ведущих на Pocket Option</h4>
                <p>Ты можешь создать платные продукты, которые будут:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Обучать людей трейдингу</li>
                   <li>Давать эксклюзивные сигналы</li>
                   <li>Предоставлять доступ к закрытому чату с разборами</li>
                </ul>
                <p>И везде внутри ты будешь рекомендовать Pocket Option как основную платформу для торговли.</p>
                
                <p><strong>Варианты продуктов:</strong></p>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Продукт</th>
                            <th className="p-2 text-left">Цена</th>
                            <th className="p-2 text-left">Сложность</th>
                            <th className="p-2 text-left">Маржинальность</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Платный Telegram-канал</td>
                            <td className="p-2">500–1500 руб/мес</td>
                            <td className="p-2">Средняя</td>
                            <td className="p-2">Высокая</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Обучающий курс</td>
                            <td className="p-2">3000–15000 руб</td>
                            <td className="p-2">Высокая</td>
                            <td className="p-2">Очень высокая</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">PDF-гайд</td>
                            <td className="p-2">500–1000 руб</td>
                            <td className="p-2">Низкая</td>
                            <td className="p-2">Средняя</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Доступ в закрытый чат</td>
                            <td className="p-2">1000–3000 руб/мес</td>
                            <td className="p-2">Средняя</td>
                            <td className="p-2">Высокая</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Индивидуальное наставничество</td>
                            <td className="p-2">10000–30000 руб</td>
                            <td className="p-2">Высокая</td>
                            <td className="p-2">Очень высокая</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p>Как это работает:</p>
                <ol className="list-decimal list-inside ml-2">
                   <li>Ты создаёшь продукт (например, курс по трейдингу).</li>
                   <li>Внутри курса ты показываешь все сделки на платформе Pocket Option.</li>
                   <li>В конце даёшь свою партнёрскую ссылку с призывом зарегистрироваться.</li>
                   <li>Человек покупает курс → учится → регистрируется по твоей ссылке → ты получаешь и деньги за курс, и RevShare от его торговли.</li>
                </ol>

                <h4 className="text-white font-bold text-lg mt-6">3.3. Создание воронок под разные сегменты аудитории</h4>
                <p>Одна и та же партнёрская ссылка может работать по-разному на разную аудиторию. Создай несколько воронок:</p>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Сегмент</th>
                            <th className="p-2 text-left">Что предлагаем</th>
                            <th className="p-2 text-left">Где ищем</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Новички</td>
                            <td className="p-2">Бесплатный гайд + обучение</td>
                            <td className="p-2">TikTok, Instagram, VK</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Опытные трейдеры</td>
                            <td className="p-2">Сигналы, аналитика</td>
                            <td className="p-2">Telegram, YouTube</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Крипто-энтузиасты</td>
                            <td className="p-2">Сигналы по альткоинам</td>
                            <td className="p-2">Крипто-чаты, Twitter</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Любители быстрого заработка</td>
                            <td className="p-2">"Как заработать на трейдинге с нуля"</td>
                            <td className="p-2">ТикТок, реклама ВК</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p>Каждая воронка ведёт к регистрации на Pocket Option, но контент и подход разные.</p>

                <h4 className="text-white font-bold text-lg mt-6 flex items-center gap-2"><PieChart size={18} className="text-ios-lilac"/> 3.4. Инвестиции части дохода</h4>
                <p>Когда доход стабилен, часть денег можно инвестировать:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Криптовалюта (осторожно, волатильно)</li>
                   <li>Акции / ETF (через российских брокеров)</li>
                   <li>Недвижимость (для крупных сумм)</li>
                   <li>Свой бизнес (расширение)</li>
                </ul>
                <p>Но это уже тема отдельного обучения.</p>
             </div>
          </section>

          {/* === ЧАСТЬ 4: АНТИКРИЗИС === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-500 font-bold">4</div>
                <h3 className="text-xl font-serif text-white">Антикризисное управление: что делать, если что-то пошло не так</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-lg flex items-center gap-2"><AlertTriangle size={18} className="text-rose-400"/> 4.1. Упал трафик / заблокировали аккаунты</h4>
                <ol className="list-decimal list-inside ml-2">
                   <li>Не паникуй.</li>
                   <li>Проанализируй причину (изменение алгоритмов, бан, смена сезона).</li>
                   <li>Активируй запасные аккаунты (ферма).</li>
                   <li>Переключи трафик на другие каналы.</li>
                   <li>Свяжись с поддержкой (если бан ошибочный).</li>
                </ol>

                <h4 className="text-white font-bold text-lg mt-6">4.2. Платформа задержала выплату</h4>
                <ol className="list-decimal list-inside ml-2">
                   <li>Проверь условия (минимальная сумма, дни выплат — у Pocket Option выплаты еженедельно по понедельникам).</li>
                   <li>Напиши в поддержку (support@pocketoption.com), возможно, технический сбой.</li>
                   <li>Если задержка длительная — проверь, не нарушил ли ты условия (например, накрутка).</li>
                   <li>Всегда имей запасную подушку на 2-3 месяца.</li>
                </ol>

                <h4 className="text-white font-bold text-lg mt-6">4.3. Изменились условия партнёрской программы</h4>
                <p>Pocket Option может изменить проценты RevShare или правила. Что делать:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Внимательно прочитай новые условия.</li>
                   <li>Оцени, выгодно ли тебе продолжать.</li>
                   <li>Если процент снизился — наращивай объёмы, чтобы компенсировать.</li>
                   <li>Если условия стали неприемлемыми — начинай создавать свои продукты (см. п. 3.2).</li>
                </ul>

                <h4 className="text-white font-bold text-lg mt-6">4.4. Личные форс-мажоры</h4>
                <ul className="list-disc list-inside space-y-1">
                   <li>Болезнь, переезд, семейные обстоятельства.</li>
                   <li>На этот случай у тебя должна быть команда или автоматизация.</li>
                   <li>Поставь посты в отложку, предупреди подписчиков о временном отсутствии.</li>
                </ul>
             </div>
          </section>

          {/* === ЧАСТЬ 5: ПСИХОЛОГИЯ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-500 font-bold">5</div>
                <h3 className="text-xl font-serif text-white">Психология масштабирования: как не сойти с ума</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-lg">5.1. Синдром самозванца</h4>
                <p>Когда доход растёт, многие начинают думать: "Мне просто повезло, я не заслуживаю этого". Это нормально. Помни: ты вложил силы, время, учился — это твой результат.</p>

                <h4 className="text-white font-bold text-lg mt-4">5.2. Выгорание</h4>
                <p>Масштабирование часто связано с ростом нагрузки. Чтобы избежать выгорания:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Делегируй (см. выше)</li>
                   <li>Отдыхай (режим, выходные, отпуск)</li>
                   <li>Занимайся спортом</li>
                   <li>Не забывай про хобби и семью</li>
                </ul>

                <h4 className="text-white font-bold text-lg mt-4 flex items-center gap-2"><Landmark size={18} className="text-amber-400"/> 5.3. Финансовая дисциплина</h4>
                <p>Когда приходят большие деньги, хочется их сразу потратить. Но для стабильности важно:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Откладывать налоги (сразу 6% или 15%)</li>
                   <li>Создавать финансовую подушку (минимум 3–6 месяцев расходов)</li>
                   <li>Реинвестировать часть прибыли в развитие (новые каналы, инструменты)</li>
                </ul>
             </div>
          </section>

          {/* === ЧАСТЬ 6: ЧЕК-ЛИСТ И ФИНАЛ === */}
          <section className="space-y-6 animate-fade-in pb-6">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-500 font-bold">6</div>
                <h3 className="text-xl font-serif text-white">Чек-лист и Резюме</h3>
             </div>

             <div className="glass-card p-6 rounded-xl border border-white/10 space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2"><ShieldCheck size={20} className="text-green-400"/> Чек-лист для масштабирования и юридической защиты</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Проанализировал, какие задачи можно делегировать</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Нашёл первых помощников (копирайтер, модератор)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Настроил систему управления задачами (Trello / Notion)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Оформил самозанятость или ИП</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Настроил регулярную уплату налогов</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Добавил на сайт/в бота политику конфиденциальности и дисклеймер</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Изучил закон о маркировке рекламы и настроил её (если нужно)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Завёл несколько способов вывода денег (USDT, AdvCash, карта)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Начал работать над собственным продуктом (курс, платный канал)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Создал финансовую подушку</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Прописал антикризисный план (что делать при блокировках)</li>
                </ul>
             </div>

             <div className="bg-gradient-to-br from-cyan-500/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/30 text-center relative overflow-hidden mt-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                
                <h3 className="text-white font-serif text-2xl mb-4">Резюме</h3>
                <div className="text-sm text-ios-textSec mb-8 leading-relaxed space-y-4 text-left">
                    <p>Масштабирование и юридическая защита — это фундамент долгосрочного успеха. Без них ты рискуешь либо упереться в потолок, либо потерять всё из-за налоговой или блокировки.</p>
                    <p className="font-bold text-white">Что ты теперь умеешь:</p>
                    <ul className="list-disc list-inside space-y-1">
                       <li>Делегировать и строить команду</li>
                       <li>Легально оформлять доход и платить налоги</li>
                       <li>Защищать себя от юридических рисков</li>
                       <li>Диверсифицировать доходы внутри одной партнёрской программы</li>
                       <li>Действовать в кризисных ситуациях</li>
                    </ul>
                    <p>Твои следующие шаги:</p>
                    <ol className="list-decimal list-inside ml-2">
                       <li>Начни с малого — делегируй одну задачу на следующей неделе.</li>
                       <li>Оформи самозанятость (если доход стабильный).</li>
                       <li>Создай свой первый продукт (например, платный канал или гайд).</li>
                       <li>Создай финансовую подушку.</li>
                    </ol>
                    <p>Ты прошёл полный курс обучения. Теперь у тебя есть все знания, чтобы построить стабильный пассивный доход на партнёрской программе Pocket Option и масштабировать его до любых высот. Осталось только действовать!</p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 rounded-full border border-cyan-500/50 mb-2 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                   <Briefcase size={18} className="text-cyan-400" />
                   <span className="text-xs text-white font-bold uppercase tracking-widest">Поздравляю и желаю успехов! 🚀💰</span>
                </div>
             </div>
          </section>

          {/* Finish Button */}
          <div className="pt-4 pb-4">
             <button 
               onClick={onComplete}
               className="w-full btn-primary h-16 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-cyan-900/20 active:scale-95 transition-transform"
             >
                ЗАВЕРШИТЬ МОДУЛЬ 7
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson7;