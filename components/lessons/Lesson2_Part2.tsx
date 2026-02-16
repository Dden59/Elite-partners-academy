import React from 'react';
import { MessageCircle, Send, Search, Target, MousePointerClick, ShieldAlert, BarChart2 } from 'lucide-react';

const Lesson2_Part2: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
       
       <div className="glass-card p-4 rounded-xl bg-blue-500/10 border-blue-500/30 mb-6">
          <p className="text-blue-200 text-sm font-serif">
             <strong>Часть 2:</strong> Масштабируемся. Подключаем таргетированную и контекстную рекламу. Здесь деньги превращаются в лидов.
          </p>
       </div>

       {/* === 4. ВКОНТАКТЕ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">VK</div>
             <h3 className="text-xl font-serif text-white">4. ВКонтакте: Золотая жила</h3>
          </div>

          <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
             <p>Аудитория 90+ млн. Платёжеспособные мужчины 25–45 лет. Идеально для долгих воронок.</p>
             
             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Target size={16}/> Воронка (5 этапов)</h4>
                <ol className="list-decimal list-inside space-y-2">
                   <li><strong>Трафик:</strong> Таргет на интересы "Крипта", "Инвестиции", "Форекс".</li>
                   <li><strong>Посадка:</strong> Группа ВК, Лендинг или Витрина LeadCore.</li>
                   <li><strong>Лид-магнит:</strong> "Скачай гайд 5 стратегий". Собираем базу в Senler.</li>
                   <li><strong>Прогрев:</strong> Рассылка (80% пользы, 20% продажи).</li>
                   <li><strong>Дожим:</strong> Smart-ссылка на регистрацию.</li>
                </ol>
             </div>
          </div>
       </section>

       {/* === 5. TELEGRAM ADS === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-sky-500 flex items-center justify-center text-white font-bold"><Send size={16}/></div>
             <h3 className="text-xl font-serif text-white">5. Telegram Ads 2026</h3>
          </div>

          <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
             <p>Официальная реклама. Дорогой вход (от 300-500 евро), но самая качественная аудитория.</p>
             
             <div className="grid grid-cols-1 gap-3">
                <div className="glass-card p-4 rounded-xl border border-white/10">
                   <h4 className="text-white font-bold mb-1">🎯 Таргетинг</h4>
                   <p className="text-xs">Лучше всего работает <strong>на конкретные каналы конкурентов</strong>. Интересы работают хуже.</p>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/10">
                   <h4 className="text-white font-bold mb-1">📝 Текст объявления</h4>
                   <p className="text-xs">160 символов. Без капслока и ошибок. <br/><em>"Bitcoin пробил $50K. Аналитика и сигналы каждый день. 👇 Забирай стратегию."</em></p>
                </div>
             </div>

             <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/30 flex gap-3">
                <ShieldAlert className="text-rose-400 shrink-0" />
                <p className="text-xs text-rose-200">
                   <strong>Осторожно:</strong> Модерация жесткая. Не пишите "гарантированный доход". Ссылка должна вести на канал или бота, а не на фишинг.
                </p>
             </div>
          </div>
       </section>

       {/* === 6. ЯНДЕКС.ДИРЕКТ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center text-white font-bold">Я</div>
             <h3 className="text-xl font-serif text-white">6. Яндекс.Директ</h3>
          </div>

          <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
             <p>Самая "горячая" аудитория. Люди сами ищут "обучение трейдингу". Но модерация очень строгая.</p>
             
             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Search size={16}/> Что рекламируем?</h4>
                <ul className="space-y-2 text-xs">
                   <li className="flex gap-2"><span className="text-green-500">✅</span> <span>Обучение, Курсы, Вебинары ("Школа трейдинга").</span></li>
                   <li className="flex gap-2"><span className="text-green-500">✅</span> <span>Аналитика, Новости рынка.</span></li>
                   <li className="flex gap-2"><span className="text-rose-500">❌</span> <span>"Купи крипту", "Заработай миллион", "Бинарные опционы".</span></li>
                </ul>
             </div>

             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><MousePointerClick size={16}/> Настройка Поиска</h4>
                <p className="mb-2 text-xs">Разделяйте кампании: Поиск отдельно, РСЯ (картинки на сайтах) отдельно.</p>
                <div className="space-y-2 text-xs text-gray-300">
                   <p>• <strong>Ключи:</strong> "курсы трейдинга", "обучение инвестициям", "как торговать".</p>
                   <p>• <strong>Минус-слова:</strong> "бесплатно", "скачать", "работа".</p>
                   <p>• <strong>Обязательно:</strong> Дисклеймер о рисках на сайте.</p>
                </div>
             </div>
          </div>
       </section>

    </div>
  );
};

export default Lesson2_Part2;