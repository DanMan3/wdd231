import fetchandRenderMembers from "./fetch-members.js";

const dataUrl = 'data/members.json'

let companiesData = [];
let currentView = 'grid';

let viewContainer = null;


async function renderMembers() {
    viewContainer = document.querySelector('.view');


    if (!viewContainer) return;
    viewContainer.innerHTML = '';

    viewContainer = document.querySelector(".view")


    if (currentView === 'grid') {

        const grid = document.createElement('div');
        grid.className = 'cards';

        companiesData.forEach(c => {

            const card = document.createElement('div')
            card.className = 'card'

            const companyImage = document.createElement("img")
            companyImage.src = c.image
            companyImage.alt = c.description

            const companyName = document.createElement('h2')
            companyName.textContent = c.name

            const companyTagLine = document.createElement('p')
            companyTagLine.classList = 'company-tag-line'
            companyTagLine.textContent = c.description

            const companyAddress = document.createElement('p');
            companyAddress.classList = 'company-address'
            companyAddress.textContent = `${c.address.street}, ${c.address.city}, ${c.address.state}, ${c.address.zip}`

            const companyPhone = document.createElement('p')
            companyPhone.classList = 'company-phone'
            companyPhone.textContent = c.phone

            const companyWebsite = document.createElement('a')
            companyWebsite.classList = 'company-website'
            companyWebsite.href = c.website
            companyWebsite.textContent = c.website

            const companyMembership = document.createElement('p')
            companyMembership.classList = 'company-membership'

            if (c.membershipLevel === 1) {
                companyMembership.innerHTML = `Membership level: <strong>Member</strong>`
            }
            else if (c.membershipLevel === 2) {
                companyMembership.innerHTML = `Membership level: <strong>Silver</strong>`
            }
            if (c.membershipLevel === 3) {
                companyMembership.innerHTML = `Membership level: <strong>Gold</strong>`
            }


            card.append(companyImage, companyName, companyTagLine, companyAddress, companyPhone, companyWebsite, companyMembership);
            grid.appendChild(card);

        })


        viewContainer.appendChild(grid)
    } else {

        const list = document.createElement('ul')
        list.className = 'list'

        companiesData.forEach(c => {

            const listItem = document.createElement('li')
            listItem.classList = 'list-item'

            const companyName = document.createElement('h2')
            companyName.textContent = c.name

            const companyAddress = document.createElement('p');
            companyAddress.classList = 'company-address'
            companyAddress.textContent = `${c.address.street}, ${c.address.city}, ${c.address.state}, ${c.address.zip}`

            const companyPhone = document.createElement('p')
            companyPhone.classList = 'company-phone'
            companyPhone.textContent = c.phone

            const companyWebsite = document.createElement('a')
            companyWebsite.classList = 'company-website'
            companyWebsite.href = c.website
            companyWebsite.textContent = c.website


            listItem.append(companyName, companyAddress, companyPhone, companyWebsite);
            list.appendChild(listItem);


        })
        viewContainer.appendChild(list)

    }


}



// Display grid view

document.addEventListener('DOMContentLoaded', async () => {

    try {
        companiesData = await fetchandRenderMembers(dataUrl);
    } catch (err) {
        console.error(err);
        companiesData = [];
    }

    renderMembers();

    const viewButtons = document.querySelector(".view-buttons")
    viewButtons.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || !viewButtons.contains(btn)) return;

        const selected = btn.dataset.view;
        if (selected === 'grid' || selected === 'list') {
            currentView = selected;
            renderMembers(); // re-render 

            viewButtons.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', 'false'));
            btn.setAttribute('aria-pressed', 'true');
        }
    });



})

