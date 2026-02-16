import React from 'react';
import { Smartphone, Radio, QrCode, Globe, Rss, Copy, Download, MessageSquare } from 'lucide-react';

const Lesson2_Part3: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">

       <div className="glass-card p-4 rounded-xl bg-purple-500/10 border-purple-500/30 mb-6">
          <p className="text-purple-200 text-sm font-serif">
             <strong>Часть 3:</strong> Альтернативные источники, создание своего канала с сигналами и готовый текст Гайда-магнита.
          </p>
       </div>

       {/* === 7. ДОП ИСТОЧНИКИ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">7</div>
             <h3 className="text-xl font-serif text-white">Где еще брать трафик?</h3>
          </div>

          <div className="grid grid-cols-1 gap-3 text-sm text-ios-textSec">
             <div className="glass-card p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-white font-bold"><Smartphone size={16} className="text-blue-400"/> OEM (Xiaomi/Huawei)</div>
                <p>Реклама в предустановленных сторах (GetApps). Низкая конкуренция, огромный охват Android.</p>
             </div>
             <div className="glass-card p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-white font-bold"><Radio size={16} className="text-green-400"/> Push-сети (ROIads)</div>
                <p>Дешевый массовый трафик. Хорошо для тестов широких гео.</p>
             </div>
             <div className="glass-card p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-white font-bold"><Globe size={16} className="text-amber-400"/> SEO и Блоги</div>
                <p>Статьи на Дзен, VC, свой сайт. Долго, но дает "вечный" бесплатный трафик.</p>
             </div>
             <div className="glass-card p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-white font-bold"><QrCode size={16} className="text-white"/> Оффлайн</div>
                <p>QR-коды на визитках, в коворкингах. Локальный, но теплый метод.</p>
             </div>
          </div>
       </section>

       {/* === 8. СВОЙ КАНАЛ С СИГНАЛАМИ === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">8</div>
             <h3 className="text-xl font-serif text-white">Твой главный магнит: Канал с сигналами</h3>
          </div>

          <div className="space-y-4 text-ios-textSec font-serif text-sm leading-7">
             <p>Люди идут на ценность. Сигналы — это то, за что готовы регистрироваться.</p>
             
             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3">Откуда брать сигналы (если не умеешь торговать)?</h4>
                <ul className="list-disc list-inside space-y-2">
                   <li><strong>Подписка:</strong> Купи доступ к VIP-каналу профи (CryptoNinjas, Fat Pig) и ретранслируй.</li>
                   <li><strong>Социальный трейдинг:</strong> Зайди на Pocket Option, выбери топа и копируй его сделки.</li>
                   <li><strong>Аналитика:</strong> Используй TradingView для теханализа.</li>
                </ul>
             </div>

             <div className="bg-[#120B1F] p-5 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Copy size={16}/> Структура сигнала</h4>
                <div className="bg-white/5 p-3 rounded font-mono text-xs text-gray-300">
                   📊 СИГНАЛ: BTC/USDT (Long)<br/>
                   💰 Вход: $42,500<br/>
                   🎯 Цель: $43,500<br/>
                   🛑 Стоп: $41,800<br/>
                   ⚠️ Риск: 2%
                </div>
                <p className="mt-2 text-xs">Публикуй статистику честно! Доверие — главное.</p>
             </div>
          </div>
       </section>

       {/* === 9. БЕСПЛАТНЫЙ ГАЙД (ТЕКСТ) === */}
       <section className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-ios-lilac/20 flex items-center justify-center text-ios-lilac font-bold">9</div>
             <h3 className="text-xl font-serif text-white">Готовый Лид-магнит (Гайд)</h3>
          </div>

          <div className="bg-[#151520] p-6 rounded-xl border border-dashed border-white/20">
             <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-bold flex items-center gap-2"><Download size={16}/> Текст для твоего PDF/Поста</h4>
                <span className="text-xs text-ios-lilac bg-ios-lilac/10 px-2 py-1 rounded">Копируй и используй</span>
             </div>

             <div className="space-y-4 text-xs text-gray-300 font-mono leading-relaxed h-64 overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-white font-bold text-sm">Бесплатный гайд: Трейдинг на Pocket Option с нуля</p>
                <p>Привет, друг! Если ты читаешь это, значит хочешь зарабатывать. Pocket Option — это платформа для обычных людей. В этом гайде я расскажу, как стартовать.</p>
                
                <p className="text-white font-bold mt-2">Глава 1. Как это работает?</p>
                <p>Представь прогноз погоды. Только тут ты гадаешь цену актива. Вверх (Call) или Вниз (Put). Угадал? Получил до 92% прибыли.</p>
                
                <p className="text-white font-bold mt-2">Глава 2. Регистрация</p>
                <p>1. Переходи по ссылке: [ТВОЯ ССЫЛКА]<br/>2. Жми "Регистрация".<br/>3. Забирай бонус +50%.</p>
                
                <p className="text-white font-bold mt-2">Глава 3. Интерфейс</p>
                <p>Слева — активы. Центр — график (включи Свечи!). Справа — кнопки Купить/Продать.</p>
                
                <p className="text-white font-bold mt-2">Глава 4. Демо-счет</p>
                <p>Обязательно включи Демо! Там 10,000$ виртуальных денег. Тренируйся без риска.</p>
                
                <p className="text-white font-bold mt-2">Глава 5. Стратегия новичка</p>
                <p>Торгуй по тренду. Если график ползет вверх — жди небольшого отката вниз и покупай "Вверх". Время сделки: 1 мин.</p>
                
                <p className="text-white font-bold mt-2">Глава 6. Риски</p>
                <p>Ставь не больше 1-2% от депозита. Слил 5 раз подряд? Иди отдыхать. Эмоции — враг.</p>
                
                <p className="mt-4 border-t border-white/10 pt-2 italic">
                   👉 Хочешь сигналы каждый день? Подпишись на мой канал и регистрируйся по ссылке: [ТВОЯ ССЫЛКА]
                </p>
             </div>
          </div>
       </section>

    </div>
  );
};

export default Lesson2_Part3;