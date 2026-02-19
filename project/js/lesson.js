// TAB SLIDER 

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_items button') // кнопки внутри родителя
const tabContentItemsParent = document.querySelector('.tab_content_items') // родитель кнопок

const hide = () => {
    tabContentBlocks.forEach(block => block.style.display = 'none')
    tabContentItems.forEach(button => button.classList.remove('tab_content_item_active'))
}

const show = (i = 0) => {
    tabContentBlocks[i].style.display = 'block'
    tabContentItems[i].classList.add('tab_content_item_active')
}

hide()
show()

tabContentItemsParent.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        tabContentItems.forEach((button, index) => {
            if (button === event.target) {
                hide()
                show(index)
            }
        })
    }
})

let currentIndex = 0; 


setInterval(() => {
    let nextIndex = currentIndex + 1;        
    if (nextIndex >= tabContentBlocks.length) { 
        nextIndex = 0;                        
    }
    hide();
    show(nextIndex);
    currentIndex = nextIndex; 
}, 3000)
 

// CONVERTOR 

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

let isUpdating = false

const getRates = async () => {
    try {
        const response = await fetch('../data/convertor.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Ошибка загрузки курсов', error)
        return null
    }
}

// SOM → USD, EUR
somInput.oninput = async () => {
    if (isUpdating || !somInput.value) {
        usdInput.value = ''
        eurInput.value = ''
        return
    }

    isUpdating = true
    const rates = await getRates()

    if (rates) {
        usdInput.value = (somInput.value / rates.usd).toFixed(2)
        eurInput.value = (somInput.value / rates.eur).toFixed(2)
    }

    isUpdating = false
}

// USD → SOM, EUR
usdInput.oninput = async () => {
    if (isUpdating || !usdInput.value) {
        somInput.value = ''
        eurInput.value = ''
        return
    }

    isUpdating = true
    const rates = await getRates()

    if (rates) {
        somInput.value = (usdInput.value * rates.usd).toFixed(2)
        eurInput.value = ((usdInput.value * rates.usd) / rates.eur).toFixed(2)
    }

    isUpdating = false
}

// EUR → SOM, USD
eurInput.oninput = async () => {
    if (isUpdating || !eurInput.value) {
        somInput.value = ''
        usdInput.value = ''
        return
    }

    isUpdating = true
    const rates = await getRates()

    if (rates) {
        somInput.value = (eurInput.value * rates.eur).toFixed(2)
        usdInput.value = ((eurInput.value * rates.eur) / rates.usd).toFixed(2)
    }

    isUpdating = false
}

// card switcher 

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let cardId = 1
const MAX_ID = 200

const getCard = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        if (!response.ok) {
            throw new Error('Network error')
        }

        const data = await response.json()
        const { title, id, completed } = data

        card.innerHTML = `
            <p>${title}</p>
            <p style="color: ${completed ? 'green' : 'red'}">
                ${completed ? 'yes' : 'no'}
            </p>
            <span>${id}</span>
        `
    } catch (error) {
        console.error('Ошибка card switcher', error)
        card.innerHTML = 'Ошибка загрузки карточки'
    }
}

// первая карточка сразу
getCard()

btnNext.onclick = () => {
    cardId++
    if (cardId > MAX_ID) cardId = 1
    getCard()
}

btnPrev.onclick = () => {
    cardId--
    if (cardId < 1) cardId = MAX_ID
    getCard()
}
 
// post 

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))


// weather 


const searchInput = document.querySelector('.cityName')
const searchButton = document.querySelector('#search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const API_KEY = '291aa3950880603684e43c6cc36aed88'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

searchButton.onclick = async () => {
    if (!searchInput.value) {
        city.style.color = 'red'
        city.innerHTML = 'Введите название города'
        temp.innerHTML = ''
        return
    }

    try {
        const response = await fetch(
            `${BASE_URL}?q=${searchInput.value}&units=metric&lang=ru&appid=${API_KEY}`
        )
        const data = await response.json()

        if (data.cod === 200) {
            city.style.color = 'white'
            city.innerHTML = data.name
            temp.innerHTML = Math.round(data.main.temp) + '°C'
        } else {
            city.style.color = 'red'
            city.innerHTML = 'Такой город не найден'
            temp.innerHTML = ''
        }
    } catch (error) {
        console.error('Ошибка запроса погоды', error)
        city.style.color = 'red'
        city.innerHTML = 'Ошибка запроса'
        temp.innerHTML = ''
    }
}
