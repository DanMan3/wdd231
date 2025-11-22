const params = new URLSearchParams(window.location.search);

document.addEventListener('DOMContentLoaded', () => {
    renderThankYou(params);
    saveInquiry(params);
});

function renderThankYou(params) {
    const card = document.querySelector('.thankyou-card');
    if (!card) return;

    const tStampRaw = params.get('time-stamp');
    const timeStamp = new Date(tStampRaw ?? Date.now()).toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });

    card.innerHTML = `
        <h2>Submission Details</h2>
        <p class="name">Name: <b>${params.get('first') ?? ''} ${params.get('last') ?? ''}</b></p>
        <p class="email">Email: <b>${params.get('email') ?? ''}</b></p>
        <p class="phone">Phone: <b>${params.get('phone') ?? ''}</b></p>
        <p class="membership">Inquiry: ${params.get('membership') ?? ''}</p>
        <p class="comments">Comments: <span class="comment">&ldquo;${params.get('comment') ?? ''}&rdquo;</span></p>
        <p class="time-stamp"><i>${timeStamp}</i></p>
    `;
}

function saveInquiry(params) {
    try {
        const stored = JSON.parse(localStorage.getItem('inquiries')) ?? [];
        stored.push({
            first: params.get('first'),
            last: params.get('last'),
            email: params.get('email'),
            phone: params.get('phone'),
            membership: params.get('membership'),
            comment: params.get('comment'),
            timeStamp: params.get('time-stamp') ?? new Date().toISOString()
        });
        localStorage.setItem('inquiries', JSON.stringify(stored));
    } catch (error) {
        console.error('Error saving to local storage', error);
    }
}