const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {

    const response = await fetch(url);
    data = await response.json();
    displayProphets(data.prophets);

}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const dateOfBirth = document.createElement("p");
        const placeOfBirth = document.createElement("p");
        const img = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`

        img.setAttribute('src', prophet.imageurl)
        img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`)
        img.setAttribute('loading', 'lazy')
        img.setAttribute('width', '340');
        img.setAttribute('height', '440');

        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`


        card.appendChild(fullName)
        card.appendChild(dateOfBirth)
        card.appendChild(placeOfBirth)
        card.appendChild(img)

        cards.appendChild(card)

    });
}

getProphetData();
