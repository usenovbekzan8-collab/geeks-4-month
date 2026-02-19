

// pers


const API = "https://thronesapi.com/api/v2/Characters";
const container = document.getElementById("characters");

async function loadCharacters() {
    try {
        const res = await fetch(API);
        const characters = await res.json();

        characters.forEach(char => {
            const card = document.createElement("div");
            card.className = "character-card";

            card.innerHTML = `
                <img src="${char.imageUrl}" alt="${char.fullName}">
                <div class="character-content">
                    <h4>${char.fullName}</h4>
                    ${char.title ? `<p><strong>Возраст:</strong> ${char.age || "—"}</p>` : ""}
                    ${char.family ? `<p><strong>Дом:</strong> ${char.family}</p>` : ""}
                    ${char.title ? `<p>${char.title}</p>` : ""}
                </div>
            `;

            container.appendChild(card);
        });
    } catch (e) {
        console.error(e);
        container.innerHTML = "<p style='color:red; text-align:center;'>Ошибка загрузки персонажей</p>";
    }
}

loadCharacters();