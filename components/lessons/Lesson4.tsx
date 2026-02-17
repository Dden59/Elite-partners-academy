// ========================================================================================================
// FILE: components/lessons/Lesson4.tsx
// ========================================================================================================
import React from 'react';
import { 
  ArrowLeft, BookOpen, TrendingUp, Cpu, Bot, Image as ImageIcon, 
  Video, Mic, Zap, BarChart, Share2, Workflow, AlertTriangle, 
  CheckCircle2, Rocket, MessageSquare, MonitorPlay 
} from 'lucide-react';

interface LessonProps {
  onBack: () => void;
  onComplete: () => void;
}

const Lesson4: React.FC<LessonProps> = ({ onBack, onComplete }) => {
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
          <h2 className="text-sm font-medium text-white line-clamp-1">Модуль 4: Автоматизация и AI</h2>
       </div>

       <div className="px-5 py-6 space-y-10">
          
          {/* Header Info */}
          <div className="space-y-2">
             <h1 className="text-2xl font-serif text-white leading-tight">Блок 4: Автоматизация и AI — как заставить технологии работать на вас 24/7</h1>
             <div className="flex items-center gap-4 text-xs text-ios-textSec">
                <span className="flex items-center gap-1"><BookOpen size={12} /> Чтение</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} /> Полная версия</span>
             </div>
          </div>
          <hr className="border-white/10" />

          {/* === ВВЕДЕНИЕ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="glass-card p-6 rounded-xl border-l-4 border-l-purple-500 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-purple-500 opacity-10 blur-3xl rounded-full"></div>
                <p className="text-white font-serif leading-relaxed text-base relative z-10">
                  Привет! Мы прошли базу, контент-маркетинг и платный трафик. Теперь — самое интересное. То, что отделяет профессионалов от любителей, которые работают руками 24 часа в сутки.
                </p>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <p className="font-bold text-white">В этом блоке ты узнаешь:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Как нейросети пишут посты и создают картинки за секунды</li>
                   <li>Как настроить автопостинг сигналов, даже если ты спишь</li>
                   <li>Как боты принимают заявки и продают без твоего участия</li>
                   <li>Как AI анализирует твою статистику и даёт советы</li>
                </ul>
                <p>После этого блока ты поймёшь: масштабирование дохода возможно только через автоматизацию. Поехали!</p>

                <h3 className="text-xl font-serif text-white mt-6 mb-2">Введение: Почему автоматизация — это твой главный сотрудник</h3>
                <p>Посчитай сам. Сколько времени ты тратишь на:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Написание одного поста? (30 минут)</li>
                   <li>Создание картинки? (20 минут)</li>
                   <li>Ответы на одни и те же вопросы в личке? (час в день)</li>
                   <li>Анализ статистики? (ещё час)</li>
                </ul>
                <p>А теперь представь, что у тебя есть виртуальный ассистент, который делает всё это мгновенно, бесплатно и без выходных. Это и есть автоматизация + AI.</p>
                
                <div className="bg-[#120B1F] p-4 rounded-xl border border-white/5 mt-4">
                   <p className="text-white font-bold mb-2">Что ты получишь, внедрив автоматизацию:</p>
                   <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Трафик льётся, даже когда ты спишь</li>
                      <li>Ты можешь вести 10 каналов, а не 1</li>
                      <li>Твои конкуренты работают руками, а ты — головой</li>
                      <li>Масштабирование без увеличения нагрузки</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* === ЧАСТЬ 1: НЕЙРОСЕТИ ДЛЯ КОНТЕНТА === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">1</div>
                <h3 className="text-xl font-serif text-white">Нейросети для создания контента (AI-копирайтинг и дизайн)</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                
                {/* 1.1 ТЕКСТЫ */}
                <h4 className="text-white font-bold text-lg flex items-center gap-2"><Bot size={18} className="text-ios-lilac"/> 1.1. Генерация текстов: ChatGPT, YandexGPT, Notion AI</h4>
                <p>В 2026 году нейросети пишут лучше многих копирайтеров. Главное — уметь давать им правильные команды (промпты).</p>
                <p><strong>Какие задачи решаем:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Посты для Telegram и Instagram</li>
                   <li>Тексты объявлений для Яндекс.Директа и VK</li>
                   <li>Ответы на комментарии</li>
                   <li>Скрипты для личных сообщений</li>
                   <li>Описания для видео на YouTube и TikTok</li>
                </ul>

                <p className="font-bold text-white mt-2">Топ-инструменты 2026 года:</p>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Инструмент</th>
                            <th className="p-2 text-left">Фишки</th>
                            <th className="p-2 text-left">Цена</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">ChatGPT-5</td>
                            <td className="p-2">Пишет любые тексты, понимает контекст, помнит историю диалога</td>
                            <td className="p-2">Есть бесплатный уровень, Pro ~$20/мес</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">YandexGPT</td>
                            <td className="p-2">Лучше понимает русский язык, учитывает особенности аудитории</td>
                            <td className="p-2">Бесплатно в Яндекс.Браузере</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Notion AI</td>
                            <td className="p-2">Встроен в заметки, удобно для планирования контента</td>
                            <td className="p-2">$10/мес</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Claude 3</td>
                            <td className="p-2">Отлично пишет длинные статьи, гайды</td>
                            <td className="p-2">Есть бесплатный уровень</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Perplexity AI</td>
                            <td className="p-2">Пишет тексты на основе актуальных данных из интернета</td>
                            <td className="p-2">Бесплатно</td>
                         </tr>
                      </tbody>
                   </table>
                </div>

                <p className="font-bold text-white mt-4">Как правильно просить нейросеть (промпты):</p>
                <p>Плохой промпт: "Напиши пост про трейдинг"</p>
                <p>Хороший промпт:</p>
                <div className="bg-white/5 p-4 rounded text-xs font-mono text-gray-300">
                   Напиши пост для Telegram-канала о трейдинге для новичков.<br/>
                   Цель: заинтересовать людей и подтолкнуть к регистрации на платформе.<br/>
                   Стиль: дружелюбный, простой, без сложных терминов.<br/>
                   Длина: 500-700 знаков.<br/>
                   В конце добавить призыв подписаться на канал.<br/>
                   Тема: как не слить депозит в первую неделю.
                </div>

                <p className="font-bold text-white mt-2">Готовые промпты для твоих задач:</p>
                
                <div className="space-y-3">
                   <div className="bg-[#120B1F] p-3 rounded border border-white/5">
                      <p className="text-white text-xs font-bold mb-1">Для поста с сигналом:</p>
                      <p className="text-xs font-mono text-gray-300">
                         Напиши пост с сигналом на покупку Bitcoin.<br/>
                         Укажи точку входа, цели, стоп-лосс.<br/>
                         Добавь краткое обоснование (технический анализ).<br/>
                         Стиль: уверенный, профессиональный.<br/>
                         Используй эмодзи 📊, 🎯, 🛑.
                      </p>
                   </div>
                   <div className="bg-[#120B1F] p-3 rounded border border-white/5">
                      <p className="text-white text-xs font-bold mb-1">Для продающего поста про платформу:</p>
                      <p className="text-xs font-mono text-gray-300">
                         Напиши пост о преимуществах платформы Pocket Option для новичков.<br/>
                         Выдели: низкий порог входа ($5), демо-счет, копирование сделок, бонус 50%.<br/>
                         Стиль: воодушевляющий, но без обещаний лёгких денег.<br/>
                         Добавь призыв зарегистрироваться по ссылке.
                      </p>
                   </div>
                   <div className="bg-[#120B1F] p-3 rounded border border-white/5">
                      <p className="text-white text-xs font-bold mb-1">Для ответа на возражение:</p>
                      <p className="text-xs font-mono text-gray-300">
                         Напиши ответ человеку, который говорит: "Трейдинг — это лохотрон".<br/>
                         Аргументы: регулирование, многолетняя история, возможность демо-счета, личный опыт.<br/>
                         Тон: спокойный, уверенный, без агрессии.
                      </p>
                   </div>
                </div>

                {/* 1.2 ИЗОБРАЖЕНИЯ */}
                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-8"><ImageIcon size={18} className="text-blue-400"/> 1.2. Генерация изображений: Midjourney, DALL-E, Kandinsky</h4>
                <p>Картинки повышают вовлечённость в постах в разы. Теперь не нужно искать фото на стоках — нейросети создают уникальные изображения за минуты.</p>
                
                <p className="font-bold text-white mt-2">Топ-инструменты:</p>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Инструмент</th>
                            <th className="p-2 text-left">Фишки</th>
                            <th className="p-2 text-left">Цена</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Midjourney v7</td>
                            <td className="p-2">Лучшее качество, стилизация, понимание сложных запросов</td>
                            <td className="p-2">от $10/мес</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">DALL-E 3</td>
                            <td className="p-2">Хорошо понимает текст, доступен через ChatGPT</td>
                            <td className="p-2">$20/мес (ChatGPT Pro)</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Kandinsky 3.0</td>
                            <td className="p-2">Российская разработка, бесплатно, отлично понимает русский</td>
                            <td className="p-2">Бесплатно (в Телеграм-боте)</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Leonardo AI</td>
                            <td className="p-2">Много стилей, удобный интерфейс</td>
                            <td className="p-2">Есть бесплатный уровень</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Stable Diffusion</td>
                            <td className="p-2">Бесплатно, требует навыков установки, но безлимитно</td>
                            <td className="p-2">Бесплатно</td>
                         </tr>
                      </tbody>
                   </table>
                </div>

                <p className="font-bold text-white mt-4">Примеры промптов для твоих задач:</p>
                <div className="space-y-3">
                   <div className="bg-white/5 p-3 rounded">
                      <p className="text-white text-xs font-bold mb-1">Для поста про успешную сделку:</p>
                      <p className="text-xs font-mono text-gray-300">A successful trader smiling in front of multiple computer screens with green charts, modern office, cinematic lighting, photorealistic, 4k</p>
                   </div>
                   <div className="bg-white/5 p-3 rounded">
                      <p className="text-white text-xs font-bold mb-1">Для поста про обучение:</p>
                      <p className="text-xs font-mono text-gray-300">A beginner looking at a smartphone with a trading chart, cozy home environment, warm colors, educational atmosphere, 3d render style</p>
                   </div>
                   <div className="bg-white/5 p-3 rounded">
                      <p className="text-white text-xs font-bold mb-1">Для обложки гайда:</p>
                      <p className="text-xs font-mono text-gray-300">A glowing book with a bitcoin symbol on the cover, floating in the air with digital particles, futuristic style, dark blue background, neon accents</p>
                   </div>
                   <div className="bg-white/5 p-3 rounded">
                      <p className="text-white text-xs font-bold mb-1">Для мема (Kandinsky лучше понимает русский):</p>
                      <p className="text-xs font-mono text-gray-300">Кот в очках смотрит на график биткоина, стиль мем, яркие цвета</p>
                   </div>
                </div>
                <p className="bg-white/5 p-2 rounded italic text-xs">Фишка: В Midjourney можно загрузить своё фото и генерировать похожие изображения в разных сценах — идеально для личного бренда.</p>

                {/* 1.3 ВИДЕО */}
                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-8"><Video size={18} className="text-rose-400"/> 1.3. Генерация видео: Sora, Runway, Hailuo AI, Kling</h4>
                <p>В 2026 году нейросети уже создают короткие видео по текстовому описанию. Это прорыв для TikTok и Reels.</p>
                
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Инструмент</th>
                            <th className="p-2 text-left">Что делает</th>
                            <th className="p-2 text-left">Цена</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">OpenAI Sora</td>
                            <td className="p-2">Генерирует видео до 60 секунд по тексту, фотореалистично</td>
                            <td className="p-2">В ограниченном доступе</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Runway Gen-3</td>
                            <td className="p-2">Текст в видео, замена фона, генерация по фото</td>
                            <td className="p-2">Есть бесплатный уровень</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Hailuo AI</td>
                            <td className="p-2">Отлично генерирует аниме-стиль и креативные ролики</td>
                            <td className="p-2">Бесплатно (ограниченно)</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Kling</td>
                            <td className="p-2">Китайская нейросеть, качество почти как у Sora, бесплатно</td>
                            <td className="p-2">Бесплатно</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Luma Dream Machine</td>
                            <td className="p-2">Быстрая генерация, хороша для соцсетей</td>
                            <td className="p-2">Есть бесплатный уровень</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p>Что можно генерировать:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Короткие ролики "Как работает трейдинг" (анимация)</li>
                   <li>Визуализацию графиков</li>
                   <li>Аватарки, которые говорят твоим голосом (HeyGen, D-ID)</li>
                   <li>Фоновые видео для Reels</li>
                </ul>

                {/* 1.4 ОЗВУЧКА */}
                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-8"><Mic size={18} className="text-green-400"/> 1.4. Озвучка видео: ElevenLabs, VoiceMaker, Yandex SpeechKit</h4>
                <p>Если лень записывать голос или хочешь создавать видео на разных языках — нейросети озвучат текст любым голосом.</p>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Инструмент</th>
                            <th className="p-2 text-left">Особенности</th>
                            <th className="p-2 text-left">Цена</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">ElevenLabs</td>
                            <td className="p-2">Самые реалистичные голоса, эмоции, акценты</td>
                            <td className="p-2">Есть бесплатный уровень</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">VoiceMaker</td>
                            <td className="p-2">Русские голоса, просто</td>
                            <td className="p-2">Бесплатно</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Yandex SpeechKit</td>
                            <td className="p-2">Качественные русские голоса, интеграция</td>
                            <td className="p-2">Платно, есть бесплатный лимит</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Play.ht</td>
                            <td className="p-2">Голоса знаменитостей (лицензированные)</td>
                            <td className="p-2">Платно</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p className="bg-white/5 p-2 rounded italic text-xs">Фишка: Можно клонировать свой голос — один раз записать несколько фраз, и нейросеть будет говорить твоим голосом любые тексты.</p>
             </div>
          </section>

          {/* === ЧАСТЬ 2: TELEGRAM === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">2</div>
                <h3 className="text-xl font-serif text-white">Автоматизация Telegram-канала с сигналами</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                
                <h4 className="text-white font-bold text-lg flex items-center gap-2"><Share2 size={18} className="text-sky-400"/> 2.1. Автопостинг сигналов из внешних источников</h4>
                <p>Ты можешь не писать сигналы вручную, а настроить автоматическую публикацию из проверенных источников.</p>
                
                <p><strong className="text-white">Вариант 1: Парсинг каналов-доноров</strong></p>
                <p>Используй сервисы типа Telegram Parser или TGStat API, чтобы забирать посты из других каналов и публиковать их у себя (с задержкой и указанием источника).</p>
                <p>Как настроить:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Выбираешь 3-5 каналов с качественными сигналами</li>
                   <li>Настраиваешь парсер на определённые ключевые слова ("сигнал", "BTC", "вход")</li>
                   <li>Парсер забирает пост и отправляет его в твой канал через бота</li>
                   <li>Добавляешь в конце свою ссылку автоматически</li>
                </ol>

                <p><strong className="text-white">Вариант 2: Использование API сигнальных провайдеров</strong></p>
                <p>Некоторые провайдеры (например, CryptoNinjas) дают API для получения сигналов. Можно написать бота, который забирает сигналы и публикует их в твоём канале мгновенно.</p>

                <p><strong className="text-white">Вариант 3: Копирование сигналов из закрытых чатов</strong></p>
                <p>Если ты подписан на платные сигналы, можно настроить пересылку сообщений из этого чата в твой канал через Telegram Auto Forward ботов.</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><MessageSquare size={18} className="text-ios-lilac"/> 2.2. Авто-ответы на комментарии</h4>
                <p>Когда канал растёт, отвечать на все комментарии вручную становится сложно. Настрой бота, который автоматически отвечает на частые вопросы.</p>
                <p>Что автоматизируем:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>"Как зарегистрироваться?" → бот отправляет ссылку</li>
                   <li>"Сколько стоит?" → информация о минимальном депозите</li>
                   <li>"Это безопасно?" → ссылка на отзывы и регуляцию</li>
                   <li>"Как вывести деньги?" → инструкция</li>
                </ul>
                <p>Инструменты:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>@CommentBot (официальный бот Telegram для модерации комментариев)</li>
                   <li>@AutoReplyBot — настраиваемые автоответы по ключевым словам</li>
                   <li>ManyBot — конструктор ботов с автоответами</li>
                </ul>
                <p className="bg-white/5 p-2 rounded italic text-xs">Фишка: В ответах можно сразу вставлять ссылку и призыв зарегистрироваться.</p>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><Zap size={18} className="text-amber-400"/> 2.3. Автоматический сбор лидов в личные сообщения</h4>
                <p>Когда человек пишет в личку, бот может мгновенно ответить, задать несколько вопросов и передать контакт тебе (или сразу дать ссылку).</p>
                <p>Как работает:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Человек пишет @твой_ник</li>
                   <li>Бот приветствует: "Привет! Ты по поводу сигналов?"</li>
                   <li>Задаёт вопросы: "Ты уже торгуешь? Какой у тебя опыт?"</li>
                   <li>Если человек новичок — отправляет ссылку на регистрацию и гайд</li>
                   <li>Если уже трейдер — приглашает в закрытый чат</li>
                   <li>Все данные (имя, контакт, ответы) сохраняются в таблицу Google Sheets</li>
                </ol>
                <p>Инструменты:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>ManyBot (бесплатно до 500 подписчиков)</li>
                   <li>ChatApp (конструктор чат-ботов)</li>
                   <li>Flow XO (продвинутый, интеграции)</li>
                   <li>Autoface (для ВК и Telegram)</li>
                </ul>

                <h4 className="text-white font-bold text-lg flex items-center gap-2 mt-6"><Share2 size={18} className="text-green-400"/> 2.4. Рассылки и прогрев подписчиков</h4>
                <p>Когда у тебя есть база подписчиков, можно автоматически отправлять им полезные материалы и напоминания о регистрации.</p>
                <p>Инструменты:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Telegram — просто создаёшь канал и публикуешь посты</li>
                   <li>ChatApp — для рассылок в личные сообщения (осторожно, могут забанить за спам)</li>
                   <li>Senler — для ВКонтакте, но можно интегрировать с Telegram</li>
                   <li>MailerLite / Unisender — email-рассылки (если собираешь email)</li>
                </ul>
                <p>Контент для автоматической рассылки (последовательность):</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>День 1: Приветствие и ссылка на регистрацию</li>
                   <li>День 2: Обучающее видео (как пользоваться платформой)</li>
                   <li>День 3: Сигнал дня с обоснованием</li>
                   <li>День 4: Разбор ошибок новичков</li>
                   <li>День 5: Спецпредложение (бонус, конкурс)</li>
                </ol>
             </div>
          </section>

          {/* === ЧАСТЬ 3: РЕКЛАМА === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">3</div>
                <h3 className="text-xl font-serif text-white">Автоматизация рекламных кампаний</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-base">3.1. Автоматические правила в Яндекс.Директе</h4>
                <p>Яндекс.Директ позволяет настраивать автоматические правила, которые сами управляют ставками и бюджетом.</p>
                <p>Что можно автоматизировать:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Если CTR кампании ниже 1% — остановить показы</li>
                   <li>Если цена конверсии выше X — снизить ставку</li>
                   <li>Если на счету осталось меньше Y — пополнить с карты</li>
                   <li>Если ключевое слово приносит трафик, но нет конверсий — добавить в минус-слова</li>
                </ul>
                <p>Как настроить:</p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>В кабинете Директа перейти в раздел «Автоматизация»</li>
                   <li>Создать правило с условиями</li>
                   <li>Задать действие (остановить, изменить ставку, отправить уведомление)</li>
                </ol>

                <h4 className="text-white font-bold text-base mt-4">3.2. Автоматические биддеры для VK и Telegram Ads</h4>
                <p>Для VK и Telegram Ads есть сторонние сервисы, которые автоматически управляют ставками, чтобы получить максимальное количество целевых действий при минимальном бюджете.</p>
                <p>Инструменты:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>AutoBidder (для VK)</li>
                   <li>Telegram Ads Manager (встроенные автостратегии)</li>
                   <li>ElenaBidder (для Яндекса и VK)</li>
                </ul>

                <h4 className="text-white font-bold text-base mt-4">3.3. Кросс-постинг в соцсети</h4>
                <p>Если ты ведёшь несколько каналов (Telegram, Instagram, ВК), можно настроить автоматическую публикацию постов везде одновременно.</p>
                <p>Инструменты:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>SmmBox / OnlyPult — постинг в Instagram, ВК, Facebook</li>
                   <li>Telegram → ВК через кросс-постинг ботов</li>
                   <li>IFTTT / Zapier — связка любых сервисов</li>
                </ul>
             </div>
          </section>

          {/* === ЧАСТЬ 4: АНАЛИТИКА === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">4</div>
                <h3 className="text-xl font-serif text-white">AI-аналитика и прогнозирование</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-base flex items-center gap-2"><BarChart size={18} className="text-blue-400"/> 4.1. AI-ассистенты для анализа статистики</h4>
                <p>Нейросети могут анализировать твою статистику и давать рекомендации.</p>
                <p>Что они делают:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Анализируют, какие посты собирают больше всего просмотров и переходов</li>
                   <li>Определяют лучшее время для публикации</li>
                   <li>Сравнивают эффективность разных каналов трафика</li>
                   <li>Прогнозируют бюджет на следующий месяц</li>
                </ul>
                <p>Инструменты:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>ChatGPT с анализом данных — загрузи CSV с твоей статистикой и попроси найти закономерности</li>
                   <li>Google Analytics 4 — встроенные отчёты с AI-подсказками</li>
                   <li>Yandex Metrica — умные цели и прогнозы</li>
                   <li>Tableau / Power BI — для глубокой аналитики (сложно, но мощно)</li>
                </ul>

                <h4 className="text-white font-bold text-base flex items-center gap-2 mt-4"><TrendingUp size={18} className="text-green-400"/> 4.2. Прогнозирование трендов и сигналов</h4>
                <p>Нейросети могут анализировать рыночные данные и давать прогнозы. Это не заменит профессионального анализа, но для контента — отлично.</p>
                <p>Инструменты:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Perplexity AI — ищет свежие новости и даёт сводку по рынку</li>
                   <li>ChatGPT с плагинами (например, для получения данных с CoinMarketCap)</li>
                   <li>Специализированные AI-трейдеры (например, Trade Ideas, TrendSpider) — платные, но мощные</li>
                </ul>
                <p>Пример запроса:</p>
                <div className="bg-white/5 p-4 rounded text-xs font-mono text-gray-300">
                   Проанализируй последние новости по Bitcoin за последние 24 часа.<br/>
                   Какие факторы влияют на цену?<br/>
                   Дай прогноз на сегодня (бычий/медвежий).<br/>
                   Напиши краткий обзор для моего Telegram-канала.
                </div>

                <h4 className="text-white font-bold text-base flex items-center gap-2 mt-4"><CheckCircle2 size={18} className="text-rose-400"/> 4.3. AI для модерации контента</h4>
                <p>Если у тебя большой чат с подписчиками, нейросети могут автоматически фильтровать спам, оскорбления и нежелательный контент.</p>
                <p>Инструменты:</p>
                <ul className="list-disc list-inside space-y-1">
                   <li>Telegram Moderation Bot (с AI-фильтрами)</li>
                   <li>Combot — антиспам, авто-модерация</li>
                   <li>ManyBot — настройка правил для чата</li>
                </ul>
             </div>
          </section>

          {/* === ЧАСТЬ 5: КОМПЛЕКСНЫЕ РЕШЕНИЯ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">5</div>
                <h3 className="text-xl font-serif text-white">Комплексные решения: как связать всё вместе</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <h4 className="text-white font-bold text-base flex items-center gap-2"><Workflow size={18} className="text-ios-lilac"/> 5.1. Связка "Нейросеть → Бот → Канал"</h4>
                
                <p><strong>Сценарий 1: Полностью автоматический канал сигналов</strong></p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Источник: API сигнального провайдера</li>
                   <li>Обработка: Нейросеть (ChatGPT) проверяет сигнал, добавляет обоснование</li>
                   <li>Публикация: Бот публикует пост в канале с красивым оформлением</li>
                   <li>Взаимодействие: Автоответчик отвечает на комментарии</li>
                   <li>Сбор лидов: Чат-бот собирает контакты заинтересованных</li>
                </ol>

                <p><strong>Сценарий 2: Автоматическая генерация контента по расписанию</strong></p>
                <ol className="list-decimal list-inside ml-2 space-y-1">
                   <li>Планировщик: Google Calendar / Notion с расписанием постов</li>
                   <li>Генерация: Каждое утро нейросеть создаёт пост на заданную тему</li>
                   <li>Дизайн: Leonardo AI генерирует картинку</li>
                   <li>Публикация: SmmBox постит во все соцсети</li>
                   <li>Анализ: В конце дня нейросеть анализирует статистику</li>
                </ol>

                <h4 className="text-white font-bold text-base mt-4">5.2. Популярные сервисы для автоматизации (2026)</h4>
                <div className="overflow-x-auto">
                   <table className="min-w-full text-xs border border-white/10">
                      <thead className="bg-white/5 font-bold text-white">
                         <tr>
                            <th className="p-2 text-left">Сервис</th>
                            <th className="p-2 text-left">Что делает</th>
                            <th className="p-2 text-left">Цена</th>
                         </tr>
                      </thead>
                      <tbody>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Zapier</td>
                            <td className="p-2">Связывает любые приложения (Telegram, Google Sheets, ChatGPT, CRM)</td>
                            <td className="p-2">от $20/мес</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">Make (Integromat)</td>
                            <td className="p-2">Более гибкий, чем Zapier, визуальный редактор</td>
                            <td className="p-2">Есть бесплатный уровень</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">n8n</td>
                            <td className="p-2">Бесплатный open-source аналог</td>
                            <td className="p-2">Бесплатно (самостоятельная установка)</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">IFTTT</td>
                            <td className="p-2">Простые связки для новичков</td>
                            <td className="p-2">Бесплатно</td>
                         </tr>
                         <tr className="border-t border-white/5">
                            <td className="p-2 text-white">ManyBot</td>
                            <td className="p-2">Всё в одном: бот, автоответы, рассылки, платежи</td>
                            <td className="p-2">Бесплатно (до 500 подписчиков)</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
             </div>
          </section>

          {/* === ЧАСТЬ 6: ПРИМЕРЫ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">6</div>
                <h3 className="text-xl font-serif text-white">Примеры готовых решений (которые можно скопировать)</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2">Пример 1: Автоматический канал с сигналами из Twitter</h4>
                   <ol className="list-decimal list-inside space-y-1">
                      <li>Источник: Twitter-аккаунты известных аналитиков</li>
                      <li>Парсер: n8n мониторит Twitter и при появлении ключевых слов (BTC, сигнал, entry) забирает пост</li>
                      <li>Обработка: ChatGPT переписывает пост в стиль твоего канала, добавляет эмодзи и ссылку</li>
                      <li>Публикация: Telegram-бот отправляет пост в канал</li>
                      <li>Результат: Канал обновляется 24/7 без твоего участия</li>
                   </ol>
                </div>

                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2">Пример 2: Авто-воронка для новичков</h4>
                   <ol className="list-decimal list-inside space-y-1">
                      <li>Трафик: Реклама ведёт на Telegram-бота</li>
                      <li>Бот: Приветствует, спрашивает опыт, даёт бесплатный гайд</li>
                      <li>Сбор контакта: Просит email (через Google Forms)</li>
                      <li>Email-рассылка: Unisender отправляет серию писем с обучением</li>
                      <li>В каждом письме: ссылка на регистрацию (с твоим UTM)</li>
                      <li>Анализ: Google Sheets собирает статистику конверсий</li>
                   </ol>
                </div>

                <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                   <h4 className="text-white font-bold mb-2">Пример 3: AI-помощник для ответов в личке</h4>
                   <ol className="list-decimal list-inside space-y-1">
                      <li>Интеграция: Telegram подключён к ManyBot</li>
                      <li>База знаний: Загружены ответы на 50 самых частых вопросов</li>
                      <li>AI-обработка: Если вопроса нет в базе, ChatGPT генерирует ответ на основе твоих инструкций</li>
                      <li>Контроль: Ты получаешь уведомление и можешь проверить</li>
                      <li>Обучение: Бот запоминает новые вопросы и ответы</li>
                   </ol>
                </div>
             </div>
          </section>

          {/* === ЧАСТЬ 7: ПОДВОДНЫЕ КАМНИ === */}
          <section className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">7</div>
                <h3 className="text-xl font-serif text-white">Подводные камни и как их избежать</h3>
             </div>

             <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
                <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/30">
                   <h4 className="text-rose-400 font-bold flex items-center gap-2"><AlertTriangle size={18}/> 1. Нейросети могут ошибаться</h4>
                   <p className="text-rose-200 text-xs">Всегда проверяй факты, особенно в сигналах. AI не знает рынок, он только генерирует текст.</p>
                </div>
                <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/30">
                   <h4 className="text-rose-400 font-bold flex items-center gap-2"><AlertTriangle size={18}/> 2. Автоматизация без контроля ведёт к потере доверия</h4>
                   <p className="text-rose-200 text-xs">Если бот будет отвечать невпопад или постить нерелевантные сигналы, подписчики уйдут. Нужен регулярный контроль (хотя бы раз в день).</p>
                </div>
                <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/30">
                   <h4 className="text-rose-400 font-bold flex items-center gap-2"><AlertTriangle size={18}/> 3. Telegram банит за спам</h4>
                   <p className="text-rose-200 text-xs">Не используй массовые рассылки в личные сообщения без согласия пользователя. Это нарушение правил.</p>
                </div>
                <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/30">
                   <h4 className="text-rose-400 font-bold flex items-center gap-2"><AlertTriangle size={18}/> 4. API могут меняться</h4>
                   <p className="text-rose-200 text-xs">То, что работает сегодня, может сломаться завтра. Имей запасные варианты.</p>
                </div>
                <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/30">
                   <h4 className="text-rose-400 font-bold flex items-center gap-2"><AlertTriangle size={18}/> 5. Зависимость от сторонних сервисов</h4>
                   <p className="text-rose-200 text-xs">Если сервис (например, Zapier) закроется, твоя воронка остановится. Используй несколько инструментов или локальные решения (n8n).</p>
                </div>
             </div>
          </section>

          {/* === ЧЕК-ЛИСТ И РЕЗЮМЕ === */}
          <section className="space-y-6 animate-fade-in pb-6">
             <div className="glass-card p-6 rounded-xl border border-white/10 space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2"><CheckCircle2 size={20} className="text-green-400"/> Чек-лист: что внедрить в первую очередь</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Зарегистрироваться в ChatGPT / YandexGPT и научиться писать промпты</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Освоить Kandinsky / Midjourney для генерации картинок</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Настроить автопостинг сигналов в Telegram через парсер</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Создать бота с автоответами на частые вопросы</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Подключить Zapier / Make для связи Telegram и Google Sheets</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Настроить автоматические правила в Яндекс.Директе</li>
                   <li className="flex gap-2"><div className="w-4 h-4 rounded-full border border-gray-500 shrink-0"/> Протестировать AI-аналитику (загрузить статистику в ChatGPT)</li>
                </ul>
             </div>

             <div className="bg-gradient-to-br from-purple-500/20 to-indigo-900/20 p-8 rounded-2xl border border-purple-500/30 text-center relative overflow-hidden mt-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
                
                <h3 className="text-white font-serif text-2xl mb-4">Резюме</h3>
                <div className="text-sm text-ios-textSec mb-8 leading-relaxed space-y-4 text-left">
                    <p>Автоматизация и AI — это не замена тебе, а твой супер-инструмент. Они берут на себя рутину, а ты занимаешься стратегией, креативом и масштабированием.</p>
                    <p className="font-bold text-white">После внедрения этого блока ты сможешь:</p>
                    <ul className="list-disc list-inside space-y-1">
                       <li>Вести 5-10 каналов с минимальными усилиями</li>
                       <li>Генерировать контент быстрее, чем конкуренты</li>
                       <li>Отвечать подписчикам 24/7</li>
                       <li>Анализировать эффективность и принимать решения на основе данных</li>
                       <li>Масштабировать доход, не увеличивая рабочую нагрузку</li>
                    </ul>
                    <p>В следующем блоке мы разберём секретные фишки обхода блокировок и мультиаккаунтинга. А пока — внедряй автоматизацию и смотри, как твой бизнес растёт сам!</p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/50 mb-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                   <Rocket size={18} className="text-purple-400" />
                   <span className="text-xs text-white font-bold uppercase tracking-widest">Вперед в будущее! 🚀🤖</span>
                </div>
             </div>
          </section>

          {/* Finish Button */}
          <div className="pt-4 pb-4">
             <button 
               onClick={onComplete}
               className="w-full btn-primary h-16 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-purple-900/20 active:scale-95 transition-transform"
             >
                ЗАВЕРШИТЬ МОДУЛЬ 4
             </button>
          </div>
       </div>
    </div>
  );
};

export default Lesson4;