// MODAL 

const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.modal_close');
const openBtn = document.getElementById('btn-get');
const submitBtn = modal.querySelector('.btn');

// Получаем инпуты
const nameInput = modal.querySelector('input[name="name"]');
const phoneInput = modal.querySelector('input[name="phone"]');
const emailInput = modal.querySelector('input[name="email"]');

let modalShown = false; // показывали ли модалку
let clicked = false;    // нажата ли кнопка Click me!

// Функция показа модалки
const showModal = () => {
    if (modalShown) return;
    modal.classList.add('show');
    modalShown = true;
    document.body.style.overflow = 'hidden';
};

// Функция скрытия модалки
const closeModal = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
};



// Клик по кнопке "Click me!"
openBtn.addEventListener('click', () => {
    clicked = true;
    showModal();
});

// Закрытие крестиком
closeBtn.addEventListener('click', () => closeModal());

// Закрытие при клике по фону
modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

// Кнопка внутри модалки
submitBtn.addEventListener('click', () => {
    const data = {
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value
    };
    console.log('Данные пользователя:', data);
    closeModal();
    alert('Спасибо! Мы свяжемся с вами.');
});

// --- Автооткрытие через 15 секунд, если еще не кликнули ---
setTimeout(() => {
    if (!clicked) {
        showModal();
    }
}, 15000);

// --- Показ модалки при скролле до конца страницы ---
window.addEventListener('scroll', () => {
    if (modalShown) return; // если уже показана — не показываем
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showModal();
    }
});