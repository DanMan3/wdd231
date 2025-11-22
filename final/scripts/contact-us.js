// Punch time stamp on submit form 
document.addEventListener('DOMContentLoaded', () => {
    const tsInput = document.getElementById('time-stamp');
    if (tsInput) {
        tsInput.value = new Date().toISOString();
    }

    const inquiriesContainer = document.querySelector('.inquiries');
    if (!inquiriesContainer) return;

    const params = loadInquiriesFromLocalStorage();
    if (!params.length) return;

    for (const item of params) {
        const formattedTime = new Date(item.timeStamp ?? Date.now()).toLocaleString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });

        const inquiry = document.createElement('div');
        inquiry.className = 'inquiry';
        inquiry.innerHTML = `
            <p class="name">Name: <b>${item.first ?? ''} ${item.last ?? ''}</b></p>
            <p class="email">Email: <b>${item.email ?? ''}</b></p>
            <p class="phone">Phone: <b>${item.phone ?? ''}</b></p>
            <p class="membership">Inquiry: ${item.membership ?? ''}</p>
            <p class="comments">Comments: <span class="comment">&ldquo;${item.comment ?? ''}&rdquo;</span></p>
            <p class="time-stamp"><i>${formattedTime}</i></p>
        `;
        inquiriesContainer.appendChild(inquiry);
    }
});

function loadInquiriesFromLocalStorage() {
    try {
        const jsonRaw = localStorage.getItem('inquiries');
        if (!jsonRaw) return [];
        const parsed = JSON.parse(jsonRaw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error('Error returning inquiries from local storage', error);
        return [];
    }
}


