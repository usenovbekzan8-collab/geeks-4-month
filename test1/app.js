const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str);
};

const input = document.getElementById("input")
const button = document.getElementById("checkBtn")
const result = document.getElementById("result")

button.addEventListener("click", () => {
    if (containsOnlyDigits(input.value)) {
        result.textContent = "В строке только цифры "
    } else {
        result.textContent = "В строке не только цифры "
    }
})

// прошла сеекунда 

const showSeconds = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000)
}

showSeconds()

console.log("Js")

// Вывести числа от 1 до 10

const startBtn = document.getElementById("startBtn");
const numbersDiv = document.getElementById("numbers");

const count = () => {
    numbersDiv.innerHTML = ""
    let i = 1

    const interval = setInterval(() => {
        const span = document.createElement("span");
        span.textContent = i
        numbersDiv.appendChild(span)

        i++

        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000)
}

startBtn.addEventListener("click", count)

// блок 150 на 150 

const box = document.getElementById("box")

box.addEventListener("click", () => {
    box.classList.toggle("active")
    
})