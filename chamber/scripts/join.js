const membershipCards = document.querySelector('.membership-cards');
const modals = document.querySelector('.modals');


const benefits = {
    np: [
        "No membership fee",
        "Basic directory listing (name, address, contact)",
        "Inclusion in quarterly member newsletter",
        "Invitations to public chamber events",
        "One social media shoutout per year"
    ],
    bronze: [
        "Everything in Non Profit",
        "Featured directory listing (priority sort)",
        "10% discount on chamber event fees",
        "Access to member-only training webinars",
        "One sponsored social media post per quarter"
    ],
    silver: [
        "Everything in Bronze",
        "Higher-priority directory placement with logo",
        "25% discount on event fees and workshops",
        "Two homepage spotlight placements per year",
        "Invitations to exclusive networking events",
        "Featured article in one newsletter issue per year"
    ],
    gold: [
        "Everything in Silver",
        "Top homepage spotlight rotation and premium placement",
        "Complimentary booth/table at one major chamber event",
        "Free or maximum-discounted access to most events",
        "VIP roundtable access with local officials and sponsors",
        "Dedicated social-media campaign / multi-post promotion",
        "Enhanced directory listing (images, video, extended description)"
    ]
};

const idMap = {
    np: 'non-profit-details',
    bronze: 'bronze-details',
    silver: 'silver-details',
    gold: 'gold-details'
};


function constructBenefitCards() {


    // Render
    Object.entries(benefits).forEach(([key, items]) => {
        const membershipCard = document.createElement('div')
        membershipCard.className = "membership-card";

        const membershipLevelText = document.createElement('h3');
        membershipLevelText.className = "card-h3";
        membershipLevelText.id = `${key}-h3`;
        if (key === "np") {
            membershipLevelText.textContent = "Non Profit";
        } else {
            membershipLevelText.textContent = capitalize(key);
        }
        const learnMore = document.createElement('button');
        learnMore.className = "learn-more"
        learnMore.id = key;
        learnMore.textContent = "Learn More";


        // locate the unique ID for each dialog
        const dialogId = idMap[key];

        // Create dialog
        let dialogElement = document.getElementById(dialogId);
        if (!dialogElement) {
            dialogElement = document.createElement('dialog');
            dialogElement.id = dialogId;
            modals.appendChild(dialogElement);
        }

        learnMore.addEventListener('click', () => {
            displayMembershipModal(dialogElement, key, items);
        })


        membershipCard.appendChild(membershipLevelText);
        membershipCard.appendChild(learnMore);
        membershipCards.appendChild(membershipCard);
    });

}


function displayMembershipModal(dialogElement, key, items) {

    const title = key === 'np' ? 'Non Profit' : capitalize(key);
    // Wrap each element in the array with an li, then join them together in a single string.
    const listHtml = items.map(b => `<li><span class="bulletpoint">•</span>${b}</li>`).join('');

    dialogElement.innerHTML = `<button id="close" aria-label="close">❌</button>
      <h3>${title}</h3>
      <ul>${listHtml}</ul>`;

    const close = dialogElement.querySelector('#close');

    dialogElement.showModal();

    close.addEventListener('click', () => {
        dialogElement.close();
    })

}


// Capitalize the first letter of a string
function capitalize(s) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// Display timestamp on form page
function displayTimeStamp() {
    const ts = document.querySelector("#time-stamp")
    if (!ts) return;

    ts.value = new Date().toDateString();
}




constructBenefitCards();
displayTimeStamp();