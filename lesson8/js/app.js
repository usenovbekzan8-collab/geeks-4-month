// SLIDER 

const slides = document.querySelectorAll('.sliders')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let index = 0
let intervalId = null
const DELAY = 7000 // 4 секунды

// показать активный слайд
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('activ_slider'))
    slides[i].classList.add('activ_slider')
}

// следующий слайд
function nextSlide() {
    index++
    if (index >= slides.length) {
        index = 0
    }
    showSlide(index)
}

// предыдущий слайд
function prevSlide() {
    index--
    if (index < 0) {
        index = slides.length - 1
    }
    showSlide(index)
}

// автопрокрутка
function startAuto() {
    intervalId = setInterval(() => {
        nextSlide()
    }, DELAY)
}

// сброс таймера при ручном клике
function resetAuto() {
    clearInterval(intervalId)

    // небольшая пауза перед новым автоскроллом
    setTimeout(() => {
        startAuto()
    }, 500)
}

// кнопки
nextBtn.addEventListener('click', () => {
    nextSlide()
    resetAuto()
})

prevBtn.addEventListener('click', () => {
    prevSlide()
    resetAuto()
})

// старт
showSlide(index)
startAuto()



