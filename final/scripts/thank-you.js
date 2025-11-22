
const params = new URLSearchParams(window.location.search);


function getUserData(params) {
    const thankYouCard = document.querySelector(".thankyou-card");

    const tStampRaw = params.get("time-stamp")
    const d = new Date(tStampRaw);
    const timeStamp = d.toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: '2-digit'
    })

    thankYouCard.innerHTML = `
    <h2>Submission Details</h2>
    <p id="name">Name: <b>${params.get("first")} ${params.get("last")}</b></p>
    <p id="email">Email: <b>${params.get("email")}</b></p>
    <p id="phone">Phone: <b>${params.get("phone")}</b></p>
    <p id="inquiry">Inquiry: ${params.get("membership")}</p>
    <p id="comments">Comments: <span class=comments>"${params.get("comment")}</span>"</p>
    <p id="time-stamp"><i>${timeStamp}</i></p>
    `;

    saveInquiryToLocalStorage(params, timeStamp)

}

document.addEventListener('DOMContentLoaded', () => {
    getUserData(params);
});


function saveInquiryToLocalStorage(params, date) {
    // Convert URLSearchParams to an object
    try {
        const data = {
            date: date,
            first: params.get("first"),
            last: params.get("last"),
            email: params.get("email"),
            phone: params.get("phone"),
            membership: params.get("membership"),
            comment: params.get("comment"),
            timeStamp: params.get("time-stamp")
        };
        const existingData = JSON.parse(localStorage.getItem('inquiries')) || [];
        existingData.push(data);
    } catch (error) {
        console.error(`Error saving to local storage`, error)
    }

    localStorage.setItem('inquiries', JSON.stringify(existingData));

}