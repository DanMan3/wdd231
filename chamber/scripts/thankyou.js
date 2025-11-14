document.addEventListener('DOMContentLoaded', () => {
    const submittedInfo = new URLSearchParams(window.location.search);

    const resultsCard = document.querySelector('#results');

    resultsCard.innerHTML = `
    <p><b>Name:</b> ${submittedInfo.get('first')} ${submittedInfo.get('last')}</p>
    <p><b>Email:</b> ${submittedInfo.get('email')}</p>
    <p><b>Phone:</b> ${submittedInfo.get('phone')}</p>
    <p><b>Organization:</b> ${submittedInfo.get('organization')}</p>
    <p><b>Date Submitted:</b> ${submittedInfo.get('time-stamp')}</p>
    `

});