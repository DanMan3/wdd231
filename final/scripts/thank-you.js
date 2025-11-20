
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



}

document.addEventListener('DOMContentLoaded', () => {
    getUserData(params);
});