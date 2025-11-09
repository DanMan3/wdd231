
import fetchandRenderMembers from "./fetch-members.js";

const dataUrl = 'data/members.json'
let companiesData = [];
let eligibleMembers = [];


try {
    companiesData = await fetchandRenderMembers(dataUrl)
} catch (err) {
    console.log(err);
}

eligibleMembers = Array.isArray(companiesData)
    ? companiesData.filter(m => {
        const level = Number(m.membershipLevel);
        return level === 2 || level === 3;
    })
    : [];

renderSpotlights()


function renderSpotlights() {


    const companyCardSection = document.querySelector('.company-cards section');
    companyCardSection.innerHTML = '';


    const spots = getRandomMember(eligibleMembers, 2);
    if (!Array.isArray(spots) || spots.length === 0) return;


    for (const randomMember of spots) {

        const companyCard = document.createElement('div');
        companyCard.classList = 'company-card'


        const companyName = document.createElement('h3');
        companyName.textContent = randomMember.name;

        const companyTagLine = document.createElement('p');
        companyTagLine.textContent = randomMember.description

        const company = document.createElement('div');
        company.classList = 'company';
        const companyImage = document.createElement('img');
        companyImage.src = randomMember.image;
        companyImage.alt = randomMember.description;

        const companyContact = document.createElement('div');
        companyContact.classList = 'company-contact';

        const companyEmail = document.createElement('b');
        companyEmail.innerHTML = `Email: <span>${randomMember.email}</span>`;

        const companyPhone = document.createElement("b");
        companyPhone.innerHTML = `Phone: <span>${randomMember.phone}</span>`;

        const companyUrl = document.createElement('b');
        const rawUrl = String(randomMember?.website ?? '').trim();
        const shortenedUrl = rawUrl.replace(/^https?:\/\/(www\.)?/i, '');
        companyUrl.innerHTML = `URL: <span>${shortenedUrl}</span>`;

        const companyMembership = document.createElement('b')
        if (randomMember.membershipLevel === 2) {
            companyMembership.innerHTML = `Membership Level: <span>Silver</span>`;
        } else if (randomMember.membershipLevel === 3) {
            companyMembership.innerHTML = `Membership Level: <span>Gold</span>`;
        }

        companyCard.appendChild(companyName);
        companyCard.appendChild(companyTagLine);

        const hr = document.createElement('hr');
        companyCard.appendChild(hr);

        company.appendChild(companyImage);
        companyContact.appendChild(companyEmail);
        companyContact.appendChild(companyPhone);
        companyContact.appendChild(companyUrl);
        companyContact.appendChild(companyMembership);

        company.appendChild(companyContact)


        companyCard.appendChild(company);




        companyCardSection.appendChild(companyCard);
    }

}


function getRandomMember(arr, n = 1) {
    if (!Array.isArray(arr) || arr.length === 0) return [];
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, Math.min(n, a.length));
}