import React from 'react';
import { Instagram, Video, Edit3, CheckCircle2, Music, TrendingUp } from 'lucide-react';

const Lesson2_Part1: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
       
       {/* INTRO */}
       <section className="space-y-4">
          <div className="glass-card p-5 rounded-xl border-l-4 border-l-blue-500 relative overflow-hidden">
             <p className="text-white font-serif leading-relaxed text-base relative z-10">
               <span className="text-2xl float-left mr-2 mt-[-6px]">👋</span>
               <strong>Привет, будущие мастера трафика!</strong><br/><br/>
               Мы разобрали платформу Pocket Option вдоль и поперёк. Теперь самое мясо — где искать трейдеров, как оформлять аккаунты, чтобы они доверяли, и какой контент лить. Этот блок обучения — самая практическая часть. Здесь нет воды, только конкретные инструкции.
             </p>
          </div>
       </section>

       {/* === 1. INSTAGRAM === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center text-white font-bold"><Instagram size={18}/></div>
             <h3 className="text-xl font-serif text-white">1. Instagram: Профессиональный аккаунт</h3>
          </div>

          <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
             <p>Instagram остаётся одной из самых мощных площадок. Но чтобы люди доверяли, аккаунт должен выглядеть солидно.</p>
             
             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3">🔧 Настройка бизнес-аккаунта</h4>
                <ul className="list-disc list-inside space-y-2">
                   <li><strong>Переход на профи:</strong> Настройки → Аккаунт → Переключиться на профессиональный. Категория: «Блогер» или «Финансы».</li>
                   <li><strong>Связка с Facebook:</strong> Обязательно создайте пустую страницу на ФБ и привяжите её. Без этого нет рекламы.</li>
                </ul>
             </div>

             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3">📝 Имя (Username)</h4>
                <p className="mb-2">Должно быть узнаваемым и без цифр в конце (выглядит как бот). Примеры:</p>
                <ul className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                   <li className="bg-white/5 p-2 rounded">@alex_trader (Имя + ниша)</li>
                   <li className="bg-white/5 p-2 rounded">@crypto_samurai (Крипто-стиль)</li>
                   <li className="bg-white/5 p-2 rounded">@profit_hacker (Дерзкий)</li>
                </ul>
             </div>

             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3">✍️ Био (Самое важное)</h4>
                <p className="mb-2">У вас 3 секунды, чтобы объяснить, кто вы. Структура: Кто ты → Ценность → Призыв.</p>
                <div className="bg-white/5 p-3 rounded-lg border-l-2 border-purple-500 italic text-white mb-2">
                   📊 Трейдер с 5-летним опытом<br/>
                   📈 Делюсь сетапами и аналитикой<br/>
                   👇 Забрать бонус + стратегию
                </div>
                <div className="bg-white/5 p-3 rounded-lg border-l-2 border-purple-500 italic text-white">
                   🎓 Учу зарабатывать на трейдинге<br/>
                   💰 С нуля до первого профита<br/>
                   👉 Твой бонус в закрепе
                </div>
             </div>
          </div>
       </section>

       {/* === 2. TIKTOK === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-black border border-white/20 flex items-center justify-center text-white font-bold"><Video size={18}/></div>
             <h3 className="text-xl font-serif text-white">2. TikTok: Бешеный трафик</h3>
          </div>

          <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
             <p>Главный хайповый канал. Здесь самые высокие охваты и низкий порог входа.</p>
             
             <div className="glass-card p-5 rounded-xl border border-white/10">
                <h4 className="text-white font-bold mb-2">Технические моменты</h4>
                <ul className="space-y-2">
                   <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-1"/> <span>Регистрируем на бизнес-почту. Возраст 18+.</span></li>
                   <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-1"/> <span>Переключаем на Бизнес-аккаунт (Настройки → Управление → Бизнес).</span></li>
                   <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-1"/> <span>Используем прокси (желательно) и английский язык системы.</span></li>
                </ul>
             </div>

             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Music size={16}/> Фишки арбитражников</h4>
                <ul className="space-y-3">
                   <li>
                      <strong className="text-white block">Текст на видео (Обязательно!)</strong>
                      Пишем прямо на экране: «Забери бонус 50%», «Торгуй без риска». Текст должен быть читаемым.
                   </li>
                   <li>
                      <strong className="text-white block">Озвучка</strong>
                      Голос вызывает доверие. Можно использовать AI-роботов ("Look at this crazy project...").
                   </li>
                   <li>
                      <strong className="text-white block">Прогрев</strong>
                      Перед первым видео 15-20 минут листаем ленту, лайкаем крипту. Алгоритм должен понять вашу нишу.
                   </li>
                </ul>
             </div>
          </div>
       </section>

       {/* === 3. КОНТЕНТ-СТРАТЕГИЯ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold"><Edit3 size={18}/></div>
             <h3 className="text-xl font-serif text-white">3. Что снимать? (ТОП Идей)</h3>
          </div>

          <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
             <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#120B1F] p-4 rounded-xl border-l-4 border-blue-500">
                   <h4 className="text-white font-bold mb-2">🎓 Образование (Доверие)</h4>
                   <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Что такое бинарные опционы за 60 сек</li>
                      <li>Как читать свечной график</li>
                      <li>Топ-3 индикатора для новичка</li>
                      <li>Почему 90% сливают депозит (ошибки)</li>
                   </ul>
                </div>

                <div className="bg-[#120B1F] p-4 rounded-xl border-l-4 border-green-500">
                   <h4 className="text-white font-bold mb-2">😎 Лайфстайл (Эмоции)</h4>
                   <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Мой путь: с чего я начинал</li>
                      <li>Сколько я заработал сегодня (челлендж)</li>
                      <li>Моё рабочее место (мониторы, эстетика)</li>
                      <li>Реакция на удачную сделку</li>
                   </ul>
                </div>

                <div className="bg-[#120B1F] p-4 rounded-xl border-l-4 border-ios-lilac">
                   <h4 className="text-white font-bold mb-2">💎 Pocket Option (Продажа)</h4>
                   <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Обзор платформы: интерфейс, фишки</li>
                      <li>Как получить бонус 50% (инструкция)</li>
                      <li>Как работает копирование сделок</li>
                      <li>Вывод денег (показываем скорость)</li>
                   </ul>
                </div>
             </div>
          </div>
       </section>

       {/* === ЧЕК-ЛИСТ ЗАПУСКА === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold"><CheckCircle2 size={18}/></div>
             <h3 className="text-xl font-serif text-white">Чек-лист перед стартом</h3>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-3">
             {[
                "Insta: Проф. аккаунт + Facebook",
                "Insta: Био с призывом и ссылкой",
                "TikTok: Бизнес-аккаунт 18+",
                "TikTok: Прогретая лента (15 мин)",
                "Контент: Заготовлено 3-5 видео",
                "Ссылки: Проверены, ведут куда надо"
             ].map((item, idx) => (
                 <div key={idx} className="flex gap-3 items-center">
                    <div className="w-4 h-4 rounded-full border border-ios-lilac/50"></div>
                    <span className="text-sm text-gray-300">{item}</span>
                 </div>
             ))}
          </div>
       </section>

    </div>
  );
};

export default Lesson2_Part1;