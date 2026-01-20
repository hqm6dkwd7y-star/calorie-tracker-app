// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

// Настраиваем цвета темы
tg.setHeaderColor('#667eea');
tg.setBackgroundColor('#f8f9ff');

// Включаем кнопку "Назад" если нужно
// tg.BackButton.show();

// Анимация прогресс-бара
function updateProgressRing() {
    const consumed = 1240;
    const total = 2000;
    const percentage = (consumed / total) * 100;
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (percentage / 100) * circumference;
    
    const progressRing = document.querySelector('.progress-ring-fill');
    if (progressRing) {
        progressRing.style.strokeDashoffset = offset;
    }
}

// Обработчик кнопки FAB
document.querySelector('.fab').addEventListener('click', () => {
    // Вибрация при нажатии
    tg.HapticFeedback.impactOccurred('medium');
    
    // Здесь будет логика добавления нового приема пищи
    tg.showAlert('Функция добавления еды будет реализована в следующей версии! 🍽️');
});

// Обработчик кнопки настроек
document.querySelector('.settings-btn').addEventListener('click', () => {
    tg.HapticFeedback.impactOccurred('light');
    tg.showAlert('Настройки в разработке ⚙️');
});

// Обработчики для карточек приемов пищи
document.querySelectorAll('.meal-card:not(.empty)').forEach(card => {
    card.addEventListener('click', () => {
        tg.HapticFeedback.impactOccurred('light');
        // Здесь будет логика просмотра/редактирования приема пищи
    });
});

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateProgressRing();
    
    // Добавляем градиент для SVG
    const svg = document.querySelector('.progress-ring');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('style', 'stop-color:#667eea;stop-opacity:1');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('style', 'stop-color:#764ba2;stop-opacity:1');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
});

// Отправка данных обратно в бота (пример)
function sendDataToBot(data) {
    tg.sendData(JSON.stringify(data));
}

// Закрытие приложения
function closeApp() {
    tg.close();
}
