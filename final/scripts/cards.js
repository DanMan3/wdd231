
const cards = document.querySelector(".cards")
try {
    fetch("/final/data/resorts.json").then(response => response.json()).then(resorts => {
        resorts.forEach((card, i) => {
            try {
                const constructedCard = constructCard(card, i);
                cards.appendChild(constructedCard);
            } catch (error) {
                console.error(`Error constructing card for ${card.name}`, error)
            }
        });
    })
} catch (error) {
    console.error(`error fetching json data`, error)
}




function constructCard(card, i) {

    const constructedCard = document.createElement("div")
    constructedCard.className = "card"

    const resortName = document.createElement("h2")
    resortName.textContent = card.name;

    const resortImage = document.createElement("img")
    resortImage.src = card.image;
    resortImage.alt = `${card.name} Ski Resort`
    resortImage.loading = "lazy";
    resortImage.width = "300";
    resortImage.height = "200";


    const resortText = document.createElement("p")
    resortText.textContent = `${card.about} (Click for price info)`

    const modals = document.querySelector(".modals")
    const dialogElement = document.createElement("dialog")
    dialogElement.id = `modal-${i}`
    dialogElement.className = "modal"



    constructedCard.appendChild(resortName)
    constructedCard.appendChild(resortImage)
    constructedCard.appendChild(resortText)
    modals.appendChild(dialogElement)

    constructedCard.addEventListener('click', () => {
        displayModal(dialogElement, card)
    })

    return constructedCard
}


function displayModal(dialogElement, card) {

    var prices;
    try {
        var prices = card.prices;
        if (!prices) {
            throw new Error("Prices data missing for modal.")
        }
    } catch (error) {
        console.error(`Error displaying modal for ${card.name}`, error)
        dialogElement.innerHTML = "<p>Error loading modal content.</p>";
        dialogElement.showModal();
    }

    dialogElement.innerHTML = `<button id="close" aria-label="close">❌</button>
      <h3>${card.name}</h3>
      <h4>Tickets</h4> 
      <p>Full Day: ${prices.day}</p>
      <p>Half Day: ${prices.halfDay}</p>
      <p>Night: ${prices.night}</p>
      <hr></hr>
      <h4>Season Passes</h4>
      <p>Unlimited: ${prices.season}</p>
      <p>Midweek: ${prices.seasonMidweek}</p>
      <p>Nights Only: ${prices.seasonNight}</p>`;

    const close = dialogElement.querySelector("#close")

    dialogElement.showModal();

    close.addEventListener('click', () => {
        dialogElement.close();
    })

}


