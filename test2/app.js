// 1 

const input = document.querySelector('#textInput')
const button = document.querySelector('#btn')
const result = document.querySelector('#result')

const extractNumbers = (str) => {
    return str.match(/\d/g)?.map(Number) || []
}

button.addEventListener('click', () => {
    const numbers = extractNumbers(input.value)

    if (numbers.length === 0) {
        result.textContent = 'Числа не найдены'
        return
    }

    result.textContent = `Результат: [${numbers.join(', ')}]`
})

// 2

const fibonaci = (a = 0, b = 1) => {
    if (a > 144) return

    console.log(a)

    setTimeout(() => {
        fibonaci(b, a + b)
    }, 1000)
}

fibonaci()

// 3 


const titles = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    data.forEach(product => {
        console.log(product.title)
    })
}

titles()

//4 

const colors = document.querySelector('#colors')

colors.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent
    }
})

//5 

const box = document.querySelector('#box')
const buttoon = document.querySelector('#toggleBtn')

buttoon.addEventListener('click', () => {
    if (box.style.display === 'none') {
        box.style.display = 'block'
        buttoon.textContent = 'Скрыть'
    } else {
        box.style.display = 'none'
        buttoon.textContent = 'Показать'
    }
})

// 6
const counterEl = document.querySelector('#counter')
let count = 0

const interval = setInterval(() => {
    counterEl.textContent = count
    count++

    if (count > 100) {
        clearInterval(interval)
    }
}, 1)

//7 

const fetchBtn = document.querySelector('#fetchBtn')

const jsonUrl = 'https://jsonplaceholder.typicode.com/users'

const fetchData = async () => {
    const response = await fetch(jsonUrl)
    const data = await response.json()
    console.log(data)
}

fetchBtn.addEventListener('click', fetchData)