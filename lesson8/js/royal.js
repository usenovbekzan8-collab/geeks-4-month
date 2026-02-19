
const track = document.querySelector('.hero .innrt_hero');
const cards = Array.from(track.children);
const visibleCards = 3;
const cardWidth = cards[0].getBoundingClientRect().width + 20; // +gap между карточками

// клонируем карточки для бесконечного эффекта
cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
});

let scrollPosition = 0;
const speed = 0.5; // скорость прокрутки в px за кадр

function animateCarousel() {
    scrollPosition += speed;

    // если прокрутили весь оригинальный набор, сбрасываем в начало
    if (scrollPosition >= cardWidth * cards.length) {
        scrollPosition = 0;
    }

    track.style.transform = `translateX(${-scrollPosition}px)`;

    // рекурсивный вызов
    requestAnimationFrame(animateCarousel);
}


animateCarousel();

// dino 

const dino = document.querySelector('.dino');
const map = document.querySelector('.inner_map');

let lastX = 0;

setInterval(() => {
    const mapRect = map.getBoundingClientRect();
    const dinoRect = dino.getBoundingClientRect();

    const maxX = mapRect.width - dinoRect.width;
    const maxY = mapRect.height - dinoRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // направление
    const direction = x > lastX ? 1 : -1;

    dino.style.transition = 'transform 5000ms linear';
    dino.style.transform = `
        translate(${x}px, ${y}px)
        scaleX(${direction})
    `;

    lastX = x;
}, 5000);





// mainCharacter 

// Получаем контейнер для карточек
const container = document.getElementById("characters");

// Асинхронная функция для загрузки персонажей из JSON
async function loadCharacters() {
    try {
        // Путь к JSON относительно royal.html
        const response = await fetch("../data/mainCharacter.json");
        const charactersData = await response.json();

        // Для каждого персонажа создаём карточку
        charactersData.forEach(char => {
            const card = document.createElement("div");
            card.className = "character-card";

            card.innerHTML = `
        <img src="${char.imageUrl}" alt="${char.fullName}">
        <div class="character-content">
          <h3>${char.fullName}</h3>
          <p><strong>Возраст:</strong> ${char.age}</p>
          <p><strong>Дом:</strong> ${char.house}</p>
          <p>${char.bio}</p>
        </div>
      `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = "<p>Ошибка загрузки персонажей</p>";
        console.error("Ошибка при загрузке JSON:", error);
    }
}


loadCharacters();