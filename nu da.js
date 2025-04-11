document.addEventListener('DOMContentLoaded', function() {
    // Имитация загрузки
    setTimeout(function() {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loader').style.display = 'none';
            document.querySelector('.container').classList.remove('hidden');
        }, 500);
    }, 2000);

    // Данные скриптов
    const scripts = [
        {
            id: 1,
            title: "Auto Farmer",
            description: "Автоматический сбор ресурсов в популярных играх Roblox",
            price: 499,
            tags: ["Автофарм", "Экономия времени", "Без бана"],
            image: "https://i.imgur.com/5XJQZ0l.png"
        },
        {
            id: 2,
            title: "Aimbot Pro",
            description: "Точный прицел в шутерах с настройкой чувствительности",
            price: 799,
            tags: ["Шутеры", "Точность", "Настройки"],
            image: "https://i.imgur.com/8KjQZ0l.png"
        },
        {
            id: 3,
            title: "Speed Hack",
            description: "Увеличение скорости передвижения персонажа",
            price: 349,
            tags: ["Скорость", "Гонки", "Платформеры"],
            image: "https://i.imgur.com/3XJQZ0l.png"
        },
        {
            id: 4,
            title: "Fly Script",
            description: "Возможность летать в любых играх Roblox",
            price: 599,
            tags: ["Полёт", "Свобода", "Исследование"],
            image: "https://i.imgur.com/7KjQZ0l.png"
        },
        {
            id: 5,
            title: "ESP Hack",
            description: "Отображение игроков через стены и объекты",
            price: 649,
            tags: ["Видение", "Тактика", "Шутеры"],
            image: "https://i.imgur.com/2XJQZ0l.png"
        },
        {
            id: 6,
            title: "Custom Script",
            description: "Индивидуальный скрипт под ваши требования",
            price: 1299,
            tags: ["Уникальный", "Под заказ", "Персонализация"],
            image: "https://i.imgur.com/9KjQZ0l.png"
        }
    ];

    // Отзывы
    const reviews = [
        {
            name: "Иван",
            text: "Auto Farmer просто спасение! Теперь могу заниматься другими делами, пока скрипт работает.",
            rating: 5
        },
        {
            name: "Алексей",
            text: "Aimbot Pro - лучший скрипт для шутеров. Точность на высшем уровне!",
            rating: 5
        },
        {
            name: "Мария",
            text: "Заказала кастомный скрипт, сделали быстро и качественно. Очень довольна!",
            rating: 5
        }
    ];

    // FAQ
    const faq = [
        {
            question: "Как использовать скрипты?",
            answer: "После покупки вы получите файл с инструкцией по установке и использованию."
        },
        {
            question: "Безопасны ли ваши скрипты?",
            answer: "Да, наши скрипты используют безопасные методы и имеют минимальный риск бана."
        },
        {
            question: "Как происходит оплата?",
            answer: "Оплата через криптовалюту, QIWI или банковскую карту. После оплаты вы сразу получаете скрипт."
        },
        {
            question: "Как долго делают кастомные скрипты?",
            answer: "Обычно 1-3 дня в зависимости от сложности. Мы сообщим вам точные сроки после обсуждения деталей."
        }
    ];

    // Инициализация корзины
    let cart = [];
    
    // Заполнение скриптов
    const scriptsGrid = document.querySelector('.scripts-grid');
    scripts.forEach(script => {
        const scriptCard = document.createElement('div');
        scriptCard.className = 'script-card';
        scriptCard.innerHTML = `
            <div class="script-image">
                <img src="${script.image}" alt="${script.title}">
            </div>
            <div class="script-content">
                <h3 class="script-title">${script.title}</h3>
                <p class="script-description">${script.description}</p>
                <div class="script-tags">
                    ${script.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="script-price">${script.price} ₽</div>
                <button class="add-to-cart" data-id="${script.id}">Добавить в корзину</button>
            </div>
        `;
        scriptsGrid.appendChild(scriptCard);
    });

    // Заполнение отзывов
    const reviewsSlider = document.querySelector('.reviews-slider');
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <div class="review-content">
                <div class="review-text">"${review.text}"</div>
                <div class="review-author">— ${review.name}</div>
                <div class="review-rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
            </div>
        `;
        reviewsSlider.appendChild(reviewItem);
    });

    // Заполнение FAQ
    const faqContainer = document.querySelector('.faq-container');
    faq.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <h3>${item.question}</h3>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
        
        // Добавляем обработчик клика для FAQ
        const question = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');
        const icon = faqItem.querySelector('i');
        
        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            
            // Закрываем все ответы
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            document.querySelectorAll('.faq-question i').forEach(ic => {
                ic.className = 'fas fa-chevron-down';
            });
            
            // Открываем текущий, если был закрыт
            if (!isOpen) {
                answer.style.display = 'block';
                icon.className = 'fas fa-chevron-up';
            }
        });
    });

    // Обработчики кнопок "Добавить в корзину"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const scriptId = parseInt(this.getAttribute('data-id'));
            const script = scripts.find(s => s.id === scriptId);
            
            cart.push(script);
            updateCartCount();
            
            // Анимация добавления в корзину
            this.textContent = 'Добавлено!';
            this.style.backgroundColor = 'var(--success)';
            
            setTimeout(() => {
                this.textContent = 'Добавить в корзину';
                this.style.backgroundColor = 'var(--primary)';
            }, 2000);
        });
    });

    // Кнопка "Исследовать магазин"
    document.getElementById('explore-btn').addEventListener('click', function() {
        document.getElementById('scripts').scrollIntoView({ behavior: 'smooth' });
    });

    // Кнопка корзины
    document.getElementById('cart-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Ваша корзина пуста');
            return;
        }
        
        openPaymentModal();
    });

    // Обновление счетчика корзины
    function updateCartCount() {
        document.getElementById('cart-count').textContent = cart.length;
    }

    // Модальное окно оплаты
    const modal = document.getElementById('payment-modal');
    const closeModal = document.querySelector('.close-modal');
    
    function openPaymentModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    function closePaymentModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    closeModal.addEventListener('click', closePaymentModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closePaymentModal();
        }
    });

    // Выбор метода оплаты
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => {
                m.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Оформление заказа
    document.getElementById('complete-payment').addEventListener('click', function() {
        const scriptCode = document.getElementById('script-code').value;
        const userIdea = document.getElementById('user-idea').value;
        const telegram = document.getElementById('telegram').value;
        const paymentMethod = document.querySelector('.payment-method.active').getAttribute('data-method');
        
        if (!scriptCode && !userIdea) {
            alert('Пожалуйста, укажите код скрипта или опишите свою идею');
            return;
        }
        
        if (!telegram) {
            alert('Пожалуйста, укажите ваш Telegram для связи');
            return;
        }
        
        // Здесь должна быть логика отправки данных на сервер
        // Для демонстрации просто покажем сообщение
        alert(`Заказ оформлен! Мы свяжемся с вами в Telegram @${telegram} для уточнения деталей.`);
        
        // Отправка данных в Telegram бота (пример)
        sendToTelegramBot(scriptCode, userIdea, telegram, paymentMethod);
        
        // Очистка корзины и закрытие модального окна
        cart = [];
        updateCartCount();
        closePaymentModal();
    });

    // Функция отправки данных в Telegram бота
    function sendToTelegramBot(scriptCode, idea, telegram, paymentMethod) {
        // В реальном проекте здесь должен быть AJAX запрос к вашему бэкенду
        // который будет отправлять сообщение в Telegram бота
        
        console.log('Данные для Telegram бота:', {
            scriptCode,
            idea,
            telegram,
            paymentMethod,
            cartItems: cart.map(item => item.title)
        });
        
        // Пример реализации с использованием Telegram Bot API:
        /*
        const botToken = 'YOUR_BOT_TOKEN';
        const chatId = 'YOUR_CHAT_ID';
        const message = `Новый заказ!\n\nТелеграм: @${telegram}\nСкрипт: ${scriptCode}\nИдея: ${idea}\nМетод оплаты: ${paymentMethod}\n\nКорзина: ${cart.map(item => item.title).join(', ')}`;
        
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
            .then(response => response.json())
            .then(data => console.log('Сообщение отправлено:', data))
            .catch(error => console.error('Ошибка:', error));
        */
    }

    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});