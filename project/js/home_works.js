const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')

const regExp = /^[a-zA-Z0-9]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "ERROR"
        gmailResult.style.color = "red"
    }

}

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let x = 0;
let y = 0;

const maxX = parentBlock.clientWidth - childBlock.offsetWidth;
const maxY = parentBlock.clientHeight - childBlock.offsetHeight;

function move() {
    childBlock.style.left = x + 'px';
    childBlock.style.top = y + 'px';

    if (x < maxX && y === 0) {
        x += 2;                
    } else if (x === maxX && y < maxY) {
        y += 2;                
    } else if (y === maxY && x > 0) {
        x -= 2;                 
    } else if (x === 0 && y > 0) {
        y -= 2;               
    }

    requestAnimationFrame(move);
}

move();

// seconds
const secondsBlock = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 0;
let timerId = null;

// START
startBtn.addEventListener('click', () => {
    // защита от повторного запуска
    if (timerId !== null) return;

    timerId = setInterval(() => {
        seconds++;
        secondsBlock.textContent = seconds;
    }, 1000);
});

// STOP (пауза)
stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
});

// RESET
resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    seconds = 0;
    secondsBlock.textContent = seconds;
});

const charactersList = document.querySelector('.characters-list')

const loadCharacters = () => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', '../data/characters.json')
    xhr.responseType = 'json'

    xhr.onload = () => {
        xhr.response.forEach(character => {
            const card = document.createElement('div')
            card.classList.add('character-card')
            card.style.color = '#fff' 

            card.innerHTML = `
                <div class="character-photo">
                    <img src="${character.photo}" alt="${character.name}">
                </div>
                <h3>${character.name}</h3>
                <span>Возраст: ${character.age}</span>
                <p>${character.bio}</p>
            `

            charactersList.append(card)
        })
    }

    xhr.send()
}

loadCharacters()


