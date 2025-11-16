
import { places } from '../data/attractions.mjs';



// Construct Discover Cards
function constructDiscoverCards() {

    const discoverCards = document.querySelector('.discover-cards')

    places.forEach(a => {

        const discoverCard = document.createElement('div')
        discoverCard.className = 'discover-card';

        const discoverImage = document.createElement('figure');
        discoverImage.innerHTML = `<img src="${a.image}" alt="${a.name}" loading=lazy>`;

        const discoverTitle = document.createElement('h2')
        discoverTitle.textContent = a.name;

        const discoverAddress = document.createElement('address')
        discoverAddress.textContent = a.address;

        const discoverParag = document.createElement('p')
        discoverParag.textContent = a.description;

        const discoverButton = document.createElement('button')
        discoverButton.textContent = "Learn More";

        discoverCard.append(discoverImage, discoverTitle, discoverAddress, discoverParag, discoverButton);
        discoverCards.appendChild(discoverCard);
    })
}


// Store date in localStorage
function recordLastPageVisit() {
    const date = new Date().toISOString();
    localStorage.setItem('lastPageVisit', date)

}
// Load date from storage
function readLastPageVisit() {
    const date = localStorage.getItem('lastPageVisit')
    return date;
}

function lastVisitIsWithin(lastVisit, currentVisit, days = 1) {
    if (!lastVisit || !currentVisit) return false;
    const ms = Math.abs(Date.parse(lastVisit) - Date.parse(currentVisit));
    return ms < days * 24 * 60 * 60 * 1000;
}


document.addEventListener('DOMContentLoaded', () => {
    constructDiscoverCards()

    const welcome = document.querySelector('.welcome-message');
    const lastVisit = readLastPageVisit();
    const currentTime = new Date().toISOString();


    if (!lastVisit) {
        welcome.textContent = "Welcome! Let us know if you have any questions."
    } else if (lastVisitIsWithin(lastVisit, currentTime, 1)) {
        welcome.textContent = "Back so soon! Awesome!"
    } else {
        const dateDiff = Math.abs(Date.parse(currentTime) - Date.parse(lastVisit))
        const days = Math.floor(dateDiff / (24 * 60 * 60 * 1000))
        const unit = days === 1 ? 'day' : 'days';


        welcome.textContent = `You last visited ${days} ${unit} ago.`
    }

    recordLastPageVisit();

});