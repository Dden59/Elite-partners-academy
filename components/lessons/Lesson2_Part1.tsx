// ========================================================================================================
// FILE: components/lessons/Lesson2_Part1.tsx
// ========================================================================================================
import React from 'react';
import { Instagram, Video, Edit3, CheckCircle2, Music, Hash, Layout } from 'lucide-react';

const Lesson2_Part1: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
       
       {/* INTRO */}
       <div className="glass-card p-6 rounded-xl border-l-4 border-l-blue-500">
          <h1 className="text-2xl font-serif text-white mb-4">Полное руководство по привлечению трейдеров: Instagram, TikTok и контент-стратегия</h1>
          <div className="text-white/90 font-serif leading-relaxed text-sm space-y-4">
             <p>Привет, будущие мастера трафика! 👋</p>
             <p>Мы разобрали платформу Pocket Option вдоль и поперёк. Теперь самое мясо — где искать трейдеров, как оформлять аккаунты, чтобы они доверяли, и какой контент лить, чтобы они регистрировались по вашим ссылкам. Этот блок обучения — самая практическая часть. Здесь нет воды, только конкретные инструкции, названия, примеры и чек-листы.</p>
             <p>Поехали!</p>
          </div>
       </div>

       {/* === 1. INSTAGRAM === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center text-white font-bold"><Instagram size={20}/></div>
             <h2 className="text-2xl font-serif text-white">1. Instagram: настраиваем профессиональный аккаунт для привлечения трейдеров</h2>
          </div>

          <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 text-ios-textSec text-sm leading-7 font-serif space-y-6">
             <p>Instagram остаётся одной из самых мощных площадок для привлечения аудитории, интересующейся заработком, инвестициями и трейдингом . Но чтобы люди доверяли и переходили по ссылке, аккаунт должен выглядеть солидно и профессионально.</p>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🔧 Как создать и настроить бизнес-аккаунт</h3>
                
                <p><strong className="text-white">Шаг 1. Переход на профессиональный аккаунт</strong></p>
                <p>Если у вас уже есть личный аккаунт, его нужно конвертировать в профессиональный :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Зайдите в профиль, нажмите «Редактировать профиль»</li>
                   <li>Выберите «Переключиться на профессиональный аккаунт»</li>
                   <li>Выберите категорию «Блогер» или «Финансовые услуги» (это повышает доверие)</li>
                   <li>Подтвердите действие</li>
                </ul>
                <p>Профессиональный аккаунт даёт доступ к статистике, рекламному кабинету и кнопкам связи .</p>

                <p><strong className="text-white">Шаг 2. Привязка к Facebook (обязательно)</strong></p>
                <p>Без страницы в Facebook нельзя в полной мере использовать бизнес-аккаунт Instagram . Создайте пустую страницу (или используйте существующую) и привяжите её в настройках.</p>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">📝 Как назвать аккаунт (Username)</h3>
                <p>Ваш username должен быть:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Узнаваемым — желательно одинаковым на всех площадках</li>
                   <li>Связанным с тематикой — чтобы сразу было понятно, про что аккаунт</li>
                   <li>Легким для запоминания</li>
                </ol>
                
                <p className="font-bold text-white mt-2">Варианты названий для трейдерской тематики:</p>
                <div className="grid grid-cols-1 gap-2 text-xs font-mono text-gray-300">
                   <div className="bg-white/5 p-3 rounded">
                      <strong className="text-white">Имя + трейдинг:</strong> @alex_trader, @kate_invest, @dmitry.trades
                   </div>
                   <div className="bg-white/5 p-3 rounded">
                      <strong className="text-white">Крипто-стиль:</strong> @crypto_samurai, @bitcoin_hunter, @eth_whale
                   </div>
                   <div className="bg-white/5 p-3 rounded">
                      <strong className="text-white">Профессиональный:</strong> @market_pro, @forex_life, @trading_master
                   </div>
                   <div className="bg-white/5 p-3 rounded">
                      <strong className="text-white">Игровой/дерзкий:</strong> @profit_hacker, @money_machine, @chart_killer
                   </div>
                   <div className="bg-white/5 p-3 rounded">
                      <strong className="text-white">Сообщество:</strong> @traders_club, @invest_community, @pips_family
                   </div>
                </div>
                <p className="text-rose-400 text-xs mt-2">Важно: Не используйте одинаковые имена с цифрой в конце на всех аккаунтах — это выглядит как ферма и вызывает бан .</p>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🖼️ Аватарка (Profile picture)</h3>
                <p>Аватарка — это лицо вашего бренда. Варианты:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Ваше реальное фото в деловом стиле (максимум доверия)</li>
                   <li>Логотип, если вы строите бренд</li>
                   <li>Абстрактное изображение с крипто- или трейдерской тематикой (биткоин, графики)</li>
                </ul>
                <p>Главное правило: аватарка должна быть качественной и не вызывать подозрений . Если ведёте несколько аккаунтов — делайте их разными .</p>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">📋 Поле "Имя" (Name field)</h3>
                <p>Это поле работает как поисковые ключи. Здесь нужно указать не только имя, но и ключевые слова .</p>
                <p className="font-bold text-white">Примеры:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Александр Трейдер | Крипта и Forex</li>
                   <li>Екатерина | Инвестиции для всех</li>
                   <li>Trading Hub | Сигналы и аналитика</li>
                   <li>Crypto Whale | Биткоин и альты</li>
                </ul>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">✍️ Био (Bio) — самый важный элемент</h3>
                <p>Био должно за 3 секунды отвечать на вопросы: кто ты, чем полезен, что делать дальше. У вас 150 символов, используйте их максимально эффективно .</p>
                
                <p><strong className="text-white">Структура идеального био:</strong></p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Кто ты / чем занимаешься (коротко и ясно)</li>
                   <li>Что получает подписчик (ценность)</li>
                   <li>Призыв к действию (CTA) + ссылка</li>
                </ol>

                <p className="font-bold text-white mt-4">Готовые шаблоны био для трейдеров :</p>
                <div className="grid gap-4">
                   <div className="bg-white/5 p-4 rounded border-l-2 border-ios-lilac">
                      <p className="text-xs text-gray-400 uppercase mb-1">Для эксперта/аналитика:</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         📊 Трейдер с 5-летним опытом
                         📈 Делюсь сетапами и аналитикой
                         👇 Забрать бонус + стратегию
                      </p>
                   </div>
                   <div className="bg-white/5 p-4 rounded border-l-2 border-blue-500">
                      <p className="text-xs text-gray-400 uppercase mb-1">Для крипто-тематики:</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         ₿ Bitcoin maximalist
                         🚀 Ищу альты до взлёта
                         🔽 Переходи за сигналами
                      </p>
                   </div>
                   <div className="bg-white/5 p-4 rounded border-l-2 border-green-500">
                      <p className="text-xs text-gray-400 uppercase mb-1">Для новичков (обучающий стиль):</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         🎓 Учу зарабатывать на трейдинге
                         💰 С нуля до первого профита
                         👉 Твой бонус в закрепе
                      </p>
                   </div>
                   <div className="bg-white/5 p-4 rounded border-l-2 border-rose-500">
                      <p className="text-xs text-gray-400 uppercase mb-1">Смешные/дерзкие (привлекают внимание) :</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         💔 Моя девушка думает, что я смотрю порно
                         📈 На самом деле я смотрю графики
                         👇 Зацени мои сделки
                      </p>
                   </div>
                   <div className="bg-white/5 p-4 rounded border-l-2 border-white">
                      <p className="text-xs text-gray-400 uppercase mb-1">Короткие и стильные :</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         Trade simply.
                         Charts. Coffee. Calm.
                         Signal &gt; Noise
                         Process over profit.
                      </p>
                   </div>
                   <div className="bg-white/5 p-4 rounded border-l-2 border-purple-500">
                      <p className="text-xs text-gray-400 uppercase mb-1">Для женщин-трейдеров :</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         👑 Queen of candlesticks
                         💅 Липстик, латте и лонги
                         👠 Breaking glass ceilings & trading charts
                      </p>
                   </div>
                </div>

                <p className="mt-4"><strong className="text-white">Что обязательно добавить:</strong></p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Эмодзи (они структурируют текст и привлекают внимание)</li>
                   <li>Призыв к действию (CTA) — «жми», «переходи», «забирай»</li>
                   <li>Ссылку (можно использовать мультиссылку типа Beacons, Taplink или просто ссылку на Telegram-канал с вашим промокодом)</li>
                </ul>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🔗 Кнопки действия и ссылки</h3>
                <p>В бизнес-аккаунте можно добавить до 5 ссылок . Используйте это:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Основная ссылка — на ваш Telegram-канал или лендинг с промокодом</li>
                   <li>Дополнительные — на YouTube, Discord, обучающие материалы</li>
                </ul>
                <p>Также настройте кнопки связи (email, телефон, если есть) — это повышает доверие .</p>
             </div>
          </div>
       </section>

       {/* === 2. TIKTOK === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white font-bold"><Video size={20}/></div>
             <h2 className="text-2xl font-serif text-white">2. TikTok: настраиваем аккаунт под бешеный трафик</h2>
          </div>

          <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 text-ios-textSec text-sm leading-7 font-serif space-y-6">
             <p>TikTok — это главный хайповый канал для привлечения молодой аудитории, которая интересуется криптой и быстрым заработком. Здесь самые высокие охваты и низкий порог входа .</p>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🔧 Создание аккаунта</h3>
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
                <p>Бизнес-аккаунт даёт аналитику и доступ к рекламным инструментам .</p>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">📝 Имя аккаунта в TikTok</h3>
                <p>Правила те же, что и в Instagram, но TikTok любит креатив .</p>
                <p><strong className="text-white">Варианты:</strong></p>
                <ul className="list-disc list-inside ml-2 space-y-1 font-mono text-gray-300 text-xs">
                   <li>@crypto.drops</li>
                   <li>@forex.dog</li>
                   <li>@trading.panda</li>
                   <li>@profit.pulse</li>
                   <li>@alex.trades</li>
                   <li>@invest.with.me</li>
                </ul>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🖼️ Аватарка</h3>
                <p>В TikTok для привлечения внимания часто работают :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Красивые девушки (если тематика позволяет и не противоречит вашей этике)</li>
                   <li>Крутые локации (дорогая жизнь, тачки, яхты — ассоциация с успехом)</li>
                   <li>Популярные NFT или крипто-арт</li>
                   <li>Ваше фото в стиле "успешный трейдер"</li>
                </ul>
                <p className="text-rose-400 text-xs mt-2">Важно: аватарки должны быть разными для разных аккаунтов, чтобы не спалиться под ферму .</p>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">✍️ Био в TikTok</h3>
                <p>Био должно быть коротким, броским и содержать призыв перейти по ссылке .</p>
                
                <p className="font-bold text-white mt-4">Примеры:</p>
                <div className="grid gap-4">
                   <div className="bg-white/5 p-4 rounded">
                      <p className="text-xs text-gray-400 uppercase mb-1">Прямой пролив:</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         🔥 Зарабатывай на трейдинге
                         💸 Бонус 50% на первый депозит
                         👇 Жми, забирай
                         [домен com]
                      </p>
                   </div>
                   <div className="bg-white/5 p-4 rounded">
                      <p className="text-xs text-gray-400 uppercase mb-1">Пролив через Twitter (промежуточная страница) :</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         🚀 Новый крипто-проект
                         🎁 Free mint & Whitelist
                         🔽 Линк внизу
                         [ссылка на Twitter]
                      </p>
                   </div>
                   <div className="bg-white/5 p-4 rounded">
                      <p className="text-xs text-gray-400 uppercase mb-1">Для экспертного контента:</p>
                      <p className="font-mono text-white text-sm whitespace-pre-line">
                         📈 Трейдер с опытом
                         💰 Делюсь сетапами
                         👉 Мой Telegram
                         [ссылка]
                      </p>
                   </div>
                </div>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🔑 Хештеги</h3>
                <p>Используйте только тематические хештеги, это критически важно для попадания в целевую аудиторию .</p>
                <div className="bg-white/5 p-4 rounded">
                   <p className="text-xs text-gray-400 uppercase mb-1">Основные хештеги:</p>
                   <p className="font-mono text-white text-sm leading-relaxed">
                      #trading #forex #crypto #bitcoin #investing #stocks #options #wallstreet #finance #stonks #sp500 #altcoins #eth #btc #trader
                   </p>
                </div>
                <div className="bg-white/5 p-4 rounded">
                   <p className="text-xs text-gray-400 uppercase mb-1">Дополнительные (более широкие):</p>
                   <p className="font-mono text-white text-sm leading-relaxed">
                      #money #rich #success #motivation #passiveincome #financialfreedom
                   </p>
                </div>
                <p className="text-rose-400 text-xs mt-2">Важно: Не ставьте одни и те же хештеги под каждым видео — меняйте их, импровизируйте .</p>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🎵 Музыка</h3>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Используйте трендовую музыку — это даёт дополнительные охваты</li>
                   <li>Музыка должна быть приятной, ненавязчивой, подходящей под настроение видео</li>
                   <li>Для спокойных обзоров — инструментал или lo-fi</li>
                   <li>Для динамичных нарезок — энергичные треки</li>
                </ul>
             </div>
          </div>
       </section>

       {/* === 3. КОНТЕНТ-СТРАТЕГИЯ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold"><Edit3 size={20}/></div>
             <h2 className="text-2xl font-serif text-white">3. Контент-стратегия: ТОП-30 идей для видео (Reels + TikTok)</h2>
          </div>

          <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 text-ios-textSec text-sm leading-7 font-serif space-y-6">
             <p>Теперь самое главное — что снимать, чтобы люди подписывались, верили и переходили по вашей ссылке. Я разбил идеи на категории. Выбирайте те, что ближе вам, и тестируйте.</p>

             <div className="space-y-4">
                <h4 className="text-white font-bold text-base bg-blue-500/20 p-2 rounded">Категория 1: Образовательный контент (строим доверие)</h4>
                <ol className="list-decimal list-inside ml-2 space-y-1">
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
                </ol>
             </div>

             <div className="space-y-4">
                <h4 className="text-white font-bold text-base bg-green-500/20 p-2 rounded">Категория 2: Личный опыт и лайфстайл (вызываем доверие)</h4>
                <ol className="list-decimal list-inside ml-2 space-y-1">
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
                </ol>
             </div>

             <div className="space-y-4">
                <h4 className="text-white font-bold text-base bg-purple-500/20 p-2 rounded">Категория 3: Новости и аналитика (актуальность)</h4>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>«Крипта сегодня: главное событие дня» — новости биткоина или эфира</li>
                   <li>«ФРС подняла ставку: что будет с рынком?» — влияние макроэкономики</li>
                   <li>«Эта монета выстрелила на 100%: разбор» — кейс</li>
                   <li>«Прогноз на сегодня: куда пойдёт цена?» — короткий анализ</li>
                   <li>«Что сейчас покупают киты?» — обзор крупных движений</li>
                </ol>
             </div>

             <div className="space-y-4">
                <h4 className="text-white font-bold text-base bg-ios-lilac/20 p-2 rounded">Категория 4: Платформа Pocket Option (прямая реклама)</h4>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>«Обзор платформы Pocket Option: интерфейс, фишки» — просто показываете, как всё красиво</li>
                   <li>«Как зарегистрироваться и получить бонус 50%» — пошаговка с вашим промокодом</li>
                   <li>«Как вывести деньги с Pocket Option» — показываете скорость выплат</li>
                   <li>«Турниры на Pocket Option: как участвовать и побеждать» — про геймификацию</li>
                   <li>«Копирование сделок: как зарабатывать без опыта» — про социальный трейдинг</li>
                </ol>
             </div>

             <div className="space-y-4">
                <h4 className="text-white font-bold text-base bg-rose-500/20 p-2 rounded">Категория 5: Вирусные/трендовые форматы</h4>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>«POV: Ты трейдер и видишь зелёный график» — эмоциональный монтаж под трендовую музыку</li>
                   <li>«Трейдинг vs Офисная работа» — сравнение в юмористическом ключе</li>
                   <li>«Топ-5 отмазок, почему ты ещё не начал торговать» — юмор</li>
                   <li>«Когда зашёл в сделку, а цена пошла не туда» — смешная реакция</li>
                   <li>«Мама: чем ты занимаешься? Я: трейдер» — диалог-стендап</li>
                </ol>
             </div>
          </div>
       </section>

       {/* === 4. ТЕХНИЧЕСКИЕ ФИШКИ === */}
       <section className="space-y-6">
          <h2 className="text-2xl font-serif text-white">4. Технические фишки для TikTok (из практики арбитражников)</h2>
          <div className="bg-[#120B1F] p-6 rounded-xl border border-white/5 text-ios-textSec text-sm leading-7 font-serif space-y-6">
             <p>На основе опыта тех, кто льёт трафик на подобные офферы :</p>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🔥 Текст на видео (обязательно!)</h3>
                <p>В самом видео должен быть текст, который доносит ключевое сообщение. Используйте красивые шрифты (можно нагенерить в специальных приложениях).</p>
                <p className="font-bold text-white">Пример текста:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Домен + ваш промокод</li>
                   <li>«Забери бонус 50% на первый депозит»</li>
                   <li>«Торгуй без риска на демо-счёте»</li>
                   <li>«Копируй сделки профитов»</li>
                </ul>
                <p>Текст не должен перекрывать важные элементы и должен быть читаемым .</p>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🎤 Озвучка</h3>
                <p>Голос в видео вызывает больше доверия, чем просто текст . Варианты:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>Записываете свой голос (максимум доверия)</li>
                   <li>Используете робота женским голосом (многие так делают)</li>
                </ul>
                <p className="font-bold text-white mt-2">Примеры озвучки :</p>
                <ul className="list-disc list-inside ml-2 space-y-1 italic text-gray-300">
                   <li>"Look at this crazy project that i found for you guys"</li>
                   <li>"They will be organizing a free mint, yes this is real"</li>
                   <li>"Follow me for more trading tips"</li>
                </ul>
             </div>

             <div className="space-y-4">
                <h3 className="text-white font-bold text-lg border-b border-white/10 pb-2">🔄 Прогрев аккаунта</h3>
                <p>Перед тем как выкладывать видео, аккаунт нужно "прогреть" :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                   <li>10-20 минут листаете ленту</li>
                   <li>Досматриваете видео до конца (важно для алгоритмов)</li>
                   <li>Подписываетесь на каналы по тематике крипты и трейдинга</li>
                   <li>Лайкаете, комментируете</li>
                </ul>
                <p>Когда ваша лента станет полностью состоять из тематических видео — можно начинать выкладывать свои .</p>
             </div>
          </div>
       </section>

       {/* === 5. ЧЕК-ЛИСТ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold"><CheckCircle2 size={20}/></div>
             <h2 className="text-2xl font-serif text-white">5. Чек-лист перед запуском</h2>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-6 text-sm text-gray-300">
             <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Instagram-аккаунт:</h4>
                <ul className="space-y-2">
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Переключен на профессиональный</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Привязан к Facebook-странице</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Username: понятный, без цифр в конце</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Аватарка: качественная, тематическая</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Имя: содержит ключевые слова</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Био: 150 символов, эмодзи, CTA, ссылка</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Кнопки связи настроены</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> 5-10 постов уже в ленте (для доверия)</li>
                </ul>
             </div>
             <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">TikTok-аккаунт:</h4>
                <ul className="space-y-2">
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Зарегистрирован, возраст 18+</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Переключен на бизнес-аккаунт</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Username: креативный, тематический</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Аватарка: цепляющая</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Био: короткое, с призывом и ссылкой</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Прогрет (лента из тематических видео)</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> 3-5 видео уже загружено для теста</li>
                </ul>
             </div>
          </div>
       </section>

       <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/30">
          <h3 className="text-blue-200 text-lg font-serif font-bold mb-2">6. Что дальше?</h3>
          <p className="text-blue-100/80 text-sm font-serif leading-relaxed">
             Когда аккаунты настроены и первые видео запущены, вы начинаете получать трафик. Люди переходят по ссылке, регистрируются с вашим промокодом, и вы получаете комиссию с каждой их сделки.<br/><br/>
             В следующих блоках обучения мы разберём:<br/>
             · Как настраивать платную рекламу (таргет, контекст, посевы)<br/>
             · Как работать с возражениями и увеличивать конверсию<br/>
             · Как масштабировать успешные связки и выводить доход на новый уровень<br/><br/>
             Но основа основ — это правильно оформленный аккаунт и регулярный качественный контент. Начните с этого, и результат не заставит себя ждать.<br/><br/>
             Погнали лить трафик! 🚀📈
          </p>
       </div>

    </div>
  );
};

export default Lesson2_Part1;