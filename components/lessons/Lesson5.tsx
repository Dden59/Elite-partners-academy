// ========================================================================================================
// FILE: components/lessons/Lesson5.tsx
// ========================================================================================================
import React from 'react';
import { 
  ArrowLeft, BookOpen, TrendingUp, ShieldCheck, Globe, Link2, 
  Smartphone, UserPlus, AlertTriangle, Layers, Lock, Monitor 
} from 'lucide-react';

interface LessonProps {
  onBack: () => void;
  onComplete: () => void;
}

const Lesson5: React.FC<LessonProps> = ({ onBack, onComplete }) => {
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
          <h2 className="text-sm font-medium text-white line-clamp-1">Модуль 5: Секретные фишки</h2>
       </div>

       <div className="px-5 py-6 space-y-10">
          
          {/* Header Info */}
          <div className="space-y-2">
             <h1 className="text-2xl font-serif text-white leading-tight">Блок 5: Секретные фишки — обход блокировок, маскировка ссылок и мультиаккаунтинг</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Чтение</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> Полная версия</span>
             </div>
          </div>
          <hr className="border-white/10" />

          {/* === ВВЕДЕНИЕ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="glass-card p-6 rounded-xl border-l-4 border-l-rose-500 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-rose-500 opacity-10 blur-3xl rounded-full"></div>
                <p className="text-white font-serif leading-relaxed text-base relative z-10">
                  Привет! В этом блоке мы залезаем в самое святая святых арбитража трафика — технические хитрости, которые позволяют лить там, где другие сливают бюджеты и аккаунты. Ты узнаешь, как регистрировать сотни аккаунтов, не попадая под блокировки, как маскировать партнёрские ссылки, чтобы они проходили модерацию, и как защитить себя от банов в Яндекс.Директе, VK и Telegram.
                </p>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p>Этот блок — твоя страховка и возможность масштабироваться без оглядки на запреты платформ.</p>

                <h3 className="text-xl font-serif text-white mt-6 mb-2">Введение: Почему без этих фишек ты потеряешь деньги</h3>
                <p>Каждый арбитражник рано или поздно сталкивается с проблемами:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Аккаунты в Instagram и Facebook блокируют за "подозрительную активность"</li>
                   <li>Яндекс.Директ отклоняет объявления из-за "финансовой тематики"</li>
                   <li>Telegram может забанить канал за рекламу без меток</li>
                   <li>Партнёрские ссылки выглядят подозрительно и их не кликают</li>
                </ul>
                <p>В 2026 году платформы ужесточили модерацию, особенно в финансовой нише. Но это не значит, что нужно останавливаться. Это значит, что нужно работать умнее, используя проверенные технические решения.</p>
                
                <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5 mt-4">
                   <p className="text-white font-bold mb-2">Что ты получишь после этого блока:</p>
                   <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Твои аккаунты будут жить дольше и реже попадать под баны</li>
                      <li>Ты сможешь регистрировать неограниченное количество профилей</li>
                      <li>Твои ссылки будут проходить модерацию с вероятностью 95%</li>
                      <li>Ты сэкономишь тысячи рублей на сгоревших аккаунтах</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* === ЧАСТЬ 1: АНТИДЕТЕКТ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">1</div>
                <h3 className="text-xl font-serif text-white">Антидетект-браузеры: твой главный инструмент мультиаккаунтинга</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                
                <h4 className="text-white font-bold text-lg flex items-center gap-2"><Monitor size={18} className="text-blue-400"/> 1.1. Что такое антидетект-браузер и зачем он нужен</h4>
                <p>Каждый раз, когда ты заходишь в интернет, сайты собирают о тебе цифровой отпечаток (fingerprint):</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>IP-адрес</li>
                   <li>Операционная система</li>
                   <li>Разрешение экрана</li>
                   <li>Установленные шрифты</li>
                   <li>Версия браузера</li>
                   <li>Часовой пояс</li>
                   <li>WebGL-данные</li>
                   <li>И многое другое</li>
                </ul>
                <p>Если ты зарегистрируешь 10 аккаунтов с одного компьютера и одного IP, платформа легко поймёт, что это один человек, и заблокирует все аккаунты (ферму).</p>
                <p>Антидетект-браузер создаёт для каждого аккаунта уникальный цифровой отпечаток. Ты можешь одновременно вести десятки профилей, и для сайта это будут совершенно разные люди из разных стран.</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><ShieldCheck size={18} className="text-green-400"/> 1.2. Топ-антидетект браузеров 2026 года</h4>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Название</th>
                            <th className="p-2 text-left">Особенности</th>
                            <th className="p-2 text-left">Цена</th>
                            <th className="p-2 text-left">Для кого</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Indigo Browser</td>
                            <td className="p-2">Российская разработка, отличная поддержка, есть бесплатная версия на 3 профиля</td>
                            <td className="p-2">от 990 руб/мес</td>
                            <td className="p-2">Новички и профи</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Dolphin{'{'}anty{'}'}</td>
                            <td className="p-2">Очень популярен среди арбитражников, удобный интерфейс, интеграция с прокси</td>
                            <td className="p-2">от $10/мес</td>
                            <td className="p-2">Массовый мультиаккаунтинг</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">AdsPower</td>
                            <td className="p-2">Международный, много функций, автоматизация</td>
                            <td className="p-2">от $9/мес</td>
                            <td className="p-2">Для работы с Facebook и Google</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">GoLogin</td>
                            <td className="p-2">Облачные профили, можно работать с любого устройства</td>
                            <td className="p-2">от $24/мес</td>
                            <td className="p-2">Для команд</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Octo Browser</td>
                            <td className="p-2">Высокая скорость, удобный для Facebook и Instagram</td>
                            <td className="p-2">от €30/мес</td>
                            <td className="p-2">Профессионалы</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p><strong>Какой выбрать для старта:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Если бюджет ограничен — Indigo Browser (бесплатно 3 профиля, потом недорого)</li>
                   <li>Если нужно много аккаунтов — Dolphin{'{'}anty{'}'} (оптимальное соотношение цена/качество)</li>
                </ul>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><Layers size={18} className="text-amber-400"/> 1.3. Как правильно работать с антидетект-браузером</h4>
                <p>Пошаговая инструкция:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Скачай и установи выбранный браузер.</li>
                   <li>Создай новый профиль (укажи название, например, "Instagram 1").</li>
                   <li>Настрой прокси (см. часть 2) — это обязательно, иначе все профили будут с одинаковым IP.</li>
                   <li>Браузер автоматически сгенерирует уникальный отпечаток (можно изменить вручную, но обычно авто-настройки достаточно).</li>
                   <li>Запусти профиль и зарегистрируй аккаунт.</li>
                   <li>Повтори для каждого нового аккаунта.</li>
                </ol>
                <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/30 mt-2">
                   <p className="text-xs text-rose-200"><strong>Важно:</strong> Никогда не заходи в свои профили через обычный браузер — только через антидетект. Иначе платформа увидит, что аккаунт, созданный с уникальным отпечатком, вдруг зашёл с твоего стандартного Chrome — это мгновенный бан.</p>
                </div>
             </div>
          </section>

          {/* === ЧАСТЬ 2: ПРОКСИ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">2</div>
                <h3 className="text-xl font-serif text-white">Прокси: твоя анонимность и гео-таргетинг</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                
                <h4 className="text-white font-bold text-lg flex items-center gap-2"><Globe size={18} className="text-sky-400"/> 2.1. Виды прокси и их назначение</h4>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Тип прокси</th>
                            <th className="p-2 text-left">Плюсы</th>
                            <th className="p-2 text-left">Минусы</th>
                            <th className="p-2 text-left">Для чего</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Мобильные (3G/4G/5G)</td>
                            <td className="p-2">Динамические, живые IP сотовых операторов, высокое доверие</td>
                            <td className="p-2">Дороже, могут переключаться</td>
                            <td className="p-2">Instagram, Facebook, TikTok — самые строгие площадки</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Резидентские</td>
                            <td className="p-2">IP реальных пользователей, привязаны к определённому городу</td>
                            <td className="p-2">Средняя цена</td>
                            <td className="p-2">VK, Яндекс, Google, регистрации</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Серверные (дата-центры)</td>
                            <td className="p-2">Дешёвые, быстрые</td>
                            <td className="p-2">Легко определяются как прокси</td>
                            <td className="p-2">Для парсинга, регистраций на форумах, не для соцсетей</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">IPv6</td>
                            <td className="p-2">Очень дешёвые, много адресов</td>
                            <td className="p-2">Не все сайты поддерживают, могут банить</td>
                            <td className="p-2">Для массовых регистраций на нестрогих площадках</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p>Для нашей ниши лучший выбор:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Мобильные прокси для Instagram, TikTok, Facebook</li>
                   <li>Резидентские для VK, Яндекс, Telegram</li>
                </ul>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><Lock size={18} className="text-ios-lilac"/> 2.2. Как выбрать прокси-провайдера</h4>
                <p>В 2026 году на рынке много предложений. Критерии выбора:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Гео: нужны IP той страны, где будешь регистрировать аккаунты (Россия, Казахстан, Украина, EU)</li>
                   <li>Скорость и стабильность: не должно быть частых обрывов</li>
                   <li>Поддержка: желательно русскоязычная и 24/7</li>
                   <li>Цена: от 50 руб/день за мобильный прокси, от 30 руб за резидентский</li>
                </ul>
                <p>Проверенные провайдеры (на 2026 год):</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>ProxyLine (мобильные, резидентские, отзывы хорошие)</li>
                   <li>LiveProxy (мобильные, гибкие тарифы)</li>
                   <li>MobileProxy.Space (специализируются на мобильных)</li>
                   <li>OxyLabs (международный, дорого, но качественно)</li>
                   <li>BrightData (бывш. Luminati) — топ-уровень, но дорого</li>
                </ul>
                <p>Совет: для старта бери мобильные прокси с оплатой за трафик — так дешевле протестировать.</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><TrendingUp size={18} className="text-green-400"/> 2.3. Как привязать прокси к антидетект-браузеру</h4>
                <p>В каждом антидетект-браузере есть поле для ввода прокси при создании профиля. Обычно это формат:</p>
                <div className="bg-white/5 p-3 rounded font-mono text-xs text-gray-300">
                   IP:PORT<br/>
                   или<br/>
                   socks5://user:password@ip:port
                </div>
                <p>Процесс:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Покупаешь прокси (обычно тебе дают список IP, портов и логин/пароль).</li>
                   <li>В настройках профиля вставляешь данные.</li>
                   <li>Проверяешь, что IP изменился (можно зайти на сайт 2ip.ru внутри профиля).</li>
                   <li>Готово.</li>
                </ol>
             </div>
          </section>

          {/* === ЧАСТЬ 3: МАСКИРОВКА ССЫЛОК === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">3</div>
                <h3 className="text-xl font-serif text-white">Маскировка ссылок: как спрятать партнёрскую ссылку</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p>Прямая партнёрская ссылка (https://pocketoption.com/ru/?ref=123456) часто выглядит подозрительно для модераторов и пользователей. Её нужно маскировать.</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2"><Link2 size={18} className="text-amber-400"/> 3.1. Клоакинг (Cloaking) — показываем разный контент разным пользователям</h4>
                <p>Суть клоакинга: модератору показывается одна страница (например, "обучение трейдингу"), а обычному пользователю — страница с прямой ссылкой на регистрацию.</p>
                <p>Как это работает:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Определяется IP и другие параметры посетителя</li>
                   <li>Если это бот модерации (известные IP Яндекса, VK, Facebook) — показывается "белая" страница</li>
                   <li>Если это реальный пользователь — редирект на оффер</li>
                </ul>
                <p>Инструменты для клоакинга:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Keitaro (самый популярный трекер, умеет клоакинг, платный)</li>
                   <li>Binom (аналог Keitaro, тоже платный)</li>
                   <li>Self-hosted решения (на PHP скриптах, но сложнее)</li>
                </ul>
                <p>Для новичков клоакинг может быть сложен. Есть более простые способы.</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><AlertTriangle size={18} className="text-rose-400"/> 3.2. Сокращение и редиректы</h4>
                <p>Сервисы коротких ссылок:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>clck.ru (бесплатно, от Яндекса, доверенный)</li>
                   <li>tinyurl.com</li>
                   <li>bit.ly</li>
                   <li>shorturl.at</li>
                </ul>
                <p>Проблема: модераторы тоже видят конечный URL. Но для соцсетей и мессенджеров сокращение повышает кликабельность.</p>
                
                <p><strong>Редиректы через свои домены:</strong></p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Покупаешь красивый домен (например, trading-for-you.ru).</li>
                   <li>Настраиваешь редирект с этого домена на свою партнёрскую ссылку.</li>
                   <li>В рекламе используешь свой домен.</li>
                </ol>
                <p>Это самый надёжный способ. Домен должен быть тематическим (связан с обучением, трейдингом, инвестициями), тогда модераторы пропускают.</p>
                <p>Как настроить редирект:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Заказываешь хостинг или просто управляешь DNS у регистратора.</li>
                   <li>Создаёшь запись типа 301 (постоянный редирект) или 302 (временный).</li>
                   <li>Указываешь целевой URL.</li>
                </ul>
                <p>Пример: заходишь на trading-for-you.ru → перекидывает на pocketoption.com/?ref=123.</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><Layers size={18} className="text-purple-400"/> 3.3. Использование промежуточных страниц (лендингов)</h4>
                <p>Создаёшь простую страницу с полезным контентом (например, статья "5 советов для начинающих трейдеров"), внутри которой размещаешь свою ссылку (можно сокращённую) и призыв.</p>
                <p>Модераторы видят полезную статью, а пользователь кликает на ссылку внутри.</p>
                <p>Где создать бесплатный лендинг:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Tilda (есть бесплатный тариф)</li>
                   <li>Readymag</li>
                   <li>Google Sites</li>
                   <li>LPGenerator</li>
                </ul>
                <p>Важно: на лендинге обязательно должно быть предупреждение о рисках (для финансовой тематики).</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><Smartphone size={18} className="text-ios-lilac"/> 3.4. Использование ботов-посредников</h4>
                <p>В Telegram можно создать бота, который выдаёт партнёрскую ссылку только после того, как пользователь подпишется на канал или нажмёт кнопку. Ссылка бота (t.me/your_bot) не вызывает подозрений.</p>
                <p>Схема:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Реклама ведёт на бота</li>
                   <li>Бот приветствует и даёт ссылку (уже с меткой)</li>
                   <li>Пользователь переходит и регистрируется</li>
                </ul>
                <p>Бота легко создать через @BotFather.</p>
             </div>
          </section>

          {/* === ЧАСТЬ 4: ОБХОД БЛОКИРОВОК === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">4</div>
                <h3 className="text-xl font-serif text-white">Обход блокировок в социальных сетях</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                
                <h4 className="text-white font-bold text-lg">4.1. Instagram и Facebook (Meta)</h4>
                <p>В 2026 году Meta ужесточила правила для аккаунтов, продвигающих финансы. Основные проблемы:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Блокировка аккаунтов при регистрации с "чистого" IP</li>
                   <li>Ограничения на рекламу финансовых услуг</li>
                   <li>Блокировка за массовые действия (лайки, подписки)</li>
                </ul>
                <p>Как обходить:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li><strong>Прогрев аккаунтов:</strong> Новый аккаунт должен жить минимум 3-5 дней без активных действий. Постить фото, ставить лайки, комментировать (как обычный человек). Использовать мобильные прокси (желательно 4G).</li>
                   <li><strong>Использование антидетект-браузеров + прокси:</strong> Каждый аккаунт в отдельном профиле. Прокси для каждого аккаунта разные (можно использовать одну подсеть, но разные IP).</li>
                   <li><strong>Фермы аккаунтов:</strong> Покупать готовые отлежанные аккаунты у проверенных продавцов (аккаунты с историей, постами). Стоимость от 50 руб за аккаунт.</li>
                   <li><strong>Автоматизация действий:</strong> Использовать Dolphin + ZennoPoster или Browser Automation Studio для автоматического прогрева. Но осторожно: слишком роботизированные действия могут быть замечены.</li>
                   <li><strong>Реклама:</strong> В финансовой ниче лучше не лить трафик напрямую на оффер. Ведём на лендинг с полезным контентом (см. п.3.3).</li>
                </ol>

                <h4 className="text-white font-bold text-lg mt-4">4.2. ВКонтакте</h4>
                <p>VK более лоялен к финансовой тематике, но банит за спам и массовые действия.</p>
                <p>Правила выживания:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Использовать антидетект и мобильные прокси</li>
                   <li>Прогревать аккаунты: добавлять друзей, вступать в группы</li>
                   <li>Не ставить партнёрскую ссылку в первом посте</li>
                   <li>Использовать клоакинг или редирект через свой домен</li>
                   <li>Покупать аккаунты у проверенных (от 30 руб)</li>
                </ul>
                <p>Массфолловинг и масслайкинг: Использовать сервисы типа VKTarget или BroBot, но аккуратно, чтобы не словить бан.</p>

                <h4 className="text-white font-bold text-lg mt-4">4.3. TikTok</h4>
                <p>TikTok очень чувствителен к прокси. Только мобильные, желательно той страны, где зарегистрирован аккаунт.</p>
                <p>Особенности:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Аккаунты быстро банятся за подозрительную активность</li>
                   <li>Важен прогрев: смотреть видео, лайкать, подписываться</li>
                   <li>Нельзя использовать дешёвые дата-центры</li>
                   <li>Для массовых регистраций используй виртуальные номера (см. часть 5)</li>
                </ul>

                <h4 className="text-white font-bold text-lg mt-4">4.4. Telegram</h4>
                <p>Teleman банит каналы за:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Спам-рассылки</li>
                   <li>Отсутствие маркировки рекламы</li>
                   <li>Финансовые пирамиды</li>
                </ul>
                <p>Как избежать:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Не покупать накрученных подписчиков</li>
                   <li>Указывать информацию о рекламе в описании канала (если требуется по закону)</li>
                   <li>Использовать официальную биржу Telegram Ads — там модерация жёсткая, но безопасная</li>
                   <li>Для масштабирования — мультиаккаунтинг через антидетект и прокси</li>
                </ul>
             </div>
          </section>

          {/* === ЧАСТЬ 5: ВИРТУАЛЬНЫЕ НОМЕРА === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">5</div>
                <h3 className="text-xl font-serif text-white">Виртуальные номера для регистрации аккаунтов</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p>Чтобы регистрировать много аккаунтов, нужны разные номера телефонов. Виртуальные SMS-сервисы позволяют получать SMS на временные номера.</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2"><Smartphone size={18} className="text-green-400"/> 5.1. Топ сервисов активации (2026)</h4>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Сервис</th>
                            <th className="p-2 text-left">Цены</th>
                            <th className="p-2 text-left">Особенности</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">SMS-aktivator.ru</td>
                            <td className="p-2">от 1 руб за номер</td>
                            <td className="p-2">Много стран, быстро, есть API</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Vak-sms.com</td>
                            <td className="p-2">от 2 руб</td>
                            <td className="p-2">Хорошо для VK и Instagram</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">5sim.net</td>
                            <td className="p-2">от 2 руб</td>
                            <td className="p-2">Удобный интерфейс, много сервисов</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">SMSPool.net</td>
                            <td className="p-2">от $0.2</td>
                            <td className="p-2">Зарубежный, для глобальных аккаунтов</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Darksms.ru</td>
                            <td className="p-2">от 5 руб</td>
                            <td className="p-2">Специализация на России и СНГ</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p>Как пользоваться:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Регистрируешься, пополняешь баланс.</li>
                   <li>Выбираешь нужный сервис (например, VK, Instagram, Telegram).</li>
                   <li>Получаешь номер.</li>
                   <li>Вводишь его при регистрации аккаунта.</li>
                   <li>Ждёшь SMS в личном кабинете сервиса.</li>
                   <li>Вводишь код.</li>
                </ol>
                <p>Важно: Некоторые номера могут быть уже использованы ранее. Если код не приходит — запроси замену (обычно бесплатно).</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><Layers size={18} className="text-amber-400"/> 5.2. Сим-боксы (для профи)</h4>
                <p>Если нужно очень много аккаунтов и есть бюджет, можно купить сим-бокс (GSM-шлюз) и комплект сим-карт. Это позволяет принимать SMS на реальные симки, что надёжнее виртуальных номеров.</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Стоимость сим-бокса от 10 000 руб</li>
                   <li>Сим-карты покупаются отдельно</li>
                   <li>Нужно поддерживать баланс на каждой симке</li>
                </ul>
                <p>Для новичков — избыточно, лучше начать с виртуальных.</p>
             </div>
          </section>

          {/* === ЧАСТЬ 6: МУЛЬТИАККАУНТИНГ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">6</div>
                <h3 className="text-xl font-serif text-white">Мультиаккаунтинг и работа с фермами</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-lg">6.1. Стратегия "Много аккаунтов — мало риска"</h4>
                <p>Основной принцип: не клади все яйца в одну корзину. Если у тебя 10 аккаунтов в Instagram, и один забанят — остальные 9 продолжают работать.</p>
                <p>Сколько аккаунтов нужно:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Для теста: 3-5 аккаунтов на платформу</li>
                   <li>Для стабильной работы: 10-20</li>
                   <li>Для масштабирования: 50+</li>
                </ul>

                <h4 className="text-white font-bold text-lg mt-4">6.2. Как организовать ферму</h4>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Антидетект-браузер — создаёшь профили, каждому присваиваешь отдельный прокси.</li>
                   <li>Прокси — мобильные или резидентские, разные для каждого аккаунта.</li>
                   <li>Виртуальные номера — для регистрации.</li>
                   <li>Почта — для каждого аккаунта нужна отдельная почта (можно использовать Gmail с точками, но лучше отдельные ящики на mail.ru, yandex.ru).</li>
                   <li>Отлёжка — не запускай все аккаунты одновременно. Регистрируй по 2-3 в день, прогревай.</li>
                </ol>

                <h4 className="text-white font-bold text-lg mt-4">6.3. Программы для автоматизации ферм</h4>
                <ul className="list-disc list-inside space-y-1">
                   <li>ZennoPoster — мощный софт для автоматизации действий в браузере, но требует обучения.</li>
                   <li>Browser Automation Studio (BAS) — аналог, проще.</li>
                   <li>Python + Selenium — для программистов.</li>
                </ul>
                <p>Для новичков лучше начать с ручного прогрева и небольших ферм.</p>
             </div>
          </section>

          {/* === ЧАСТЬ 7: БЕЗОПАСНОСТЬ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">7</div>
                <h3 className="text-xl font-serif text-white">Безопасность и защита от банов</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-lg">7.1. Основные причины банов и как их избежать</h4>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Причина</th>
                            <th className="p-2 text-left">Решение</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Одинаковый IP</td>
                            <td className="p-2">Использовать уникальные прокси</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Одинаковый fingerprint</td>
                            <td className="p-2">Использовать антидетект-браузер</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Массовые действия</td>
                            <td className="p-2">Делать паузы между действиями, рандомизировать</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Спам-контент</td>
                            <td className="p-2">Публиковать полезный контент, а не только ссылки</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Жалобы пользователей</td>
                            <td className="p-2">Быть вежливым, не обманывать</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Модерация рекламы</td>
                            <td className="p-2">Маскировать ссылки, использовать белые лендинги</td>
                         </tr>
                      </tbody>
                   </table>
                </div>

                <h4 className="text-white font-bold text-lg mt-4">7.2. Что делать, если аккаунт заблокировали</h4>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Не паникуй, не пытайся сразу восстановить — это может навредить.</li>
                   <li>Попробуй обжаловать (если есть шанс).</li>
                   <li>Если не восстановили — создавай новый аккаунт, но с новыми данными (другой номер, прокси).</li>
                   <li>Проанализируй причину, чтобы не повторить.</li>
                </ol>

                <h4 className="text-white font-bold text-lg mt-4">7.3. Смена цифрового отпечатка</h4>
                <p>Если твой профиль в антидетекте был скомпрометирован (например, ты зашёл с обычного браузера), нужно создать новый профиль с новым отпечатком. Никогда не используй старый отпечаток для нового аккаунта.</p>
             </div>
          </section>

          {/* === ЧАСТЬ 8: ПРИМЕРЫ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">8</div>
                <h3 className="text-xl font-serif text-white">Примеры готовых решений (воронки с обходом)</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2">Пример 1. Воронка для Instagram с мультиаккаунтингом</h4>
                   <ol className="list-decimal list-inside space-y-1">
                      <li>Покупаем 10 отлежанных аккаунтов Instagram (с фото, постами) у проверенного продавца.</li>
                      <li>Загружаем их в Dolphin{'{'}anty{'}'}, каждому назначаем мобильный прокси.</li>
                      <li>Создаём уникальный лендинг на Tilda (статья "Топ-5 стратегий для новичков").</li>
                      <li>Маскируем партнёрскую ссылку через редирект с домена trading-for-you.ru.</li>
                      <li>Начинаем постинг полезного контента с каждого аккаунта (по 1 посту в день).</li>
                      <li>Через неделю запускаем рекламу через встроенные инструменты Instagram (но осторожно, с белого лендинга).</li>
                      <li>Трафик собираем в Telegram-канал, где уже даём прямую ссылку.</li>
                   </ol>
                </div>

                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2">Пример 2. Яндекс.Директ с клоакингом</h4>
                   <ol className="list-decimal list-inside space-y-1">
                      <li>Покупаем домен для редиректа (например, invest-club.ru).</li>
                      <li>Настраиваем Keitaro: модераторам Яндекса показываем страницу с общим описанием инвестиций, пользователям — редирект на оффер.</li>
                      <li>Запускаем кампанию с ключами "обучение инвестициям", "курсы трейдинга".</li>
                      <li>После модерации трафик идёт напрямую на партнёрскую ссылку.</li>
                   </ol>
                </div>

                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2">Пример 3. Telegram с ботами-прослойками</h4>
                   <ol className="list-decimal list-inside space-y-1">
                      <li>Создаём бота через @BotFather.</li>
                      <li>Настраиваем приветствие: "Привет! Чтобы получить доступ к сигналам, нажми кнопку".</li>
                      <li>Кнопка ведёт на регистрацию через наш редирект.</li>
                      <li>Рекламируем бота в каналах через посты или Telegram Ads.</li>
                   </ol>
                </div>
             </div>
          </section>

          {/* === ЧАСТЬ 9: ИНСТРУМЕНТЫ И ЧЕК-ЛИСТ === */}
          <section className="space-y-6 animate-fade-in pb-6">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">9</div>
                <h3 className="text-xl font-serif text-white">Инструменты и сервисы (сводка)</h3>
             </div>

             <div className="overflow-x-auto">
                <table className="min-w-full text-xs border border-white/10">
                   <thead className="bg-white/5 font-bold text-white">
                      <tr>
                         <th className="p-2 text-left">Категория</th>
                         <th className="p-2 text-left">Инструменты</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr className="border-t border-white/5">
                         <td className="p-2 text-white">Антидетект-браузеры</td>
                         <td className="p-2">Indigo, Dolphin{'{'}anty{'}'}, AdsPower, GoLogin, Octo</td>
                      </tr>
                      <tr className="border-t border-white/5">
                         <td className="p-2 text-white">Прокси</td>
                         <td className="p-2">ProxyLine, LiveProxy, MobileProxy.Space, OxyLabs</td>
                      </tr>
                      <tr className="border-t border-white/5">
                         <td className="p-2 text-white">Виртуальные номера</td>
                         <td className="p-2">SMS-aktivator, Vak-sms, 5sim, SMSPool</td>
                      </tr>
                      <tr className="border-t border-white/5">
                         <td className="p-2 text-white">Клоакинг / трекеры</td>
                         <td className="p-2">Keitaro, Binom, самостопные скрипты</td>
                      </tr>
                      <tr className="border-t border-white/5">
                         <td className="p-2 text-white">Сокращение ссылок</td>
                         <td className="p-2">clck.ru, bit.ly, свой домен</td>
                      </tr>
                      <tr className="border-t border-white/5">
                         <td className="p-2 text-white">Автоматизация</td>
                         <td className="p-2">ZennoPoster, Browser Automation Studio, Python+Selenium</td>
                      </tr>
                      <tr className="border-t border-white/5">
                         <td className="p-2 text-white">Покупка аккаунтов</td>
                         <td className="p-2">Аккаунты в Telegram-каналах, биржи (например, avito, plibber)</td>
                      </tr>
                   </tbody>
                </table>
             </div>

             <div className="glass-card p-6 rounded-xl border border-white/10 space-y-4 mt-6">
                <h4 className="text-white font-bold flex items-center gap-2"><UserPlus size={20} className="text-green-400"/> Чек-лист перед запуском мультиаккаунтинга</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Выбран антидетект-браузер и установлен</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Куплены прокси (мобильные для соцсетей, резидентские для VK/Яндекс)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Куплены/зарегистрированы аккаунты с виртуальных номеров</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Каждому аккаунту присвоен уникальный прокси и профиль</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Настроены редиректы для ссылок</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Подготовлены белые лендинги для маскировки</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Составлен план прогрева аккаунтов (минимум 3-5 дней без рекламы)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Изучены правила платформ (чтобы не нарушать явно)</li>
                </ul>
             </div>

             <div className="bg-gradient-to-br from-rose-500/20 to-red-900/20 p-8 rounded-2xl border border-rose-500/30 text-center relative overflow-hidden mt-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-red-500"></div>
                
                <h3 className="text-white font-serif text-2xl mb-4">Резюме</h3>
                <div className="text-sm text-ios-textSec mb-8 leading-relaxed space-y-4 text-left">
                    <p>Секретные фишки — это не чёрная магия, а системный технический подход. Если ты научишься работать с антидетект-браузерами, прокси и маскировкой ссылок, ты сможешь:</p>
                    <ul className="list-disc list-inside space-y-1">
                       <li>Масштабировать трафик без ограничений</li>
                       <li>Обходить блокировки конкурентов</li>
                       <li>Экономить на покупке новых аккаунтов</li>
                       <li>Чувствовать себя уверенно в любой нише</li>
                    </ul>
                    <p>Главное правило: всегда думай как модератор. Если ты делаешь что-то, что выглядит подозрительно (массовые регистрации с одного IP, однотипный контент), платформа это заметит. Имитируй живого человека, и твои аккаунты будут жить долго.</p>
                    <p className="mt-2 text-white font-bold">В следующем блоке мы разберём психологию трейдера и создание комьюнити. А пока — внедряй мультиаккаунтинг и тестируй! 🚀🛡️</p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500/20 rounded-full border border-rose-500/50 mb-2 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                   <ShieldCheck size={18} className="text-rose-400" />
                   <span className="text-xs text-white font-bold uppercase tracking-widest">Безопасность прежде всего!</span>
                </div>
             </div>
          </section>

          {/* Finish Button */}
          <div className="pt-4 pb-4">
             <button 
               onClick={onComplete}
               className="w-full btn-primary h-16 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-purple-900/20 active:scale-95 transition-transform"
             >
                ЗАВЕРШИТЬ МОДУЛЬ 5
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson5;