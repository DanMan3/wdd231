
// Punch time stamp on submit form 
document.addEventListener('DOMContentLoaded', () => {
    const tsInput = document.getElementById('time-stamp');
    tsInput.value = new Date().toISOString();

    params = loadInquiriesFromLocalStorage();
    const inquiries = document.querySelector('.inquiries')

    for (item of params) {
        const formattedTime = new Date(item.timeStamp).toLocaleString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
        const inquiry = document.createElement('div')
        inquiry.className = "inquiry"
        inquiry.innerHTML = `
       <p id="name">Name: <b>${item.first} ${item.last}</b></p>
        <p id="email">Email: <b>${item.email}</b></p>
        <p id="phone">Phone: <b>${item.phone}</b></p>
        <p id="inquiry">Inquiry: ${item.membership}</p>
        <p id="comments">Comments: <span class=comments>"${item.comment}</span>"</p>
        <p id="time-stamp"><i>${formattedTime}</i></p>
        `;

        inquiries.appendChild(inquiry)

        const page = document.querySelector('.page-width')
        page.appendChild(inquiries)
    }
});

function loadInquiriesFromLocalStorage() {
    try {
        const jsonRaw = localStorage.getItem('inquiries')

        if (jsonRaw) {
            const data = JSON.parse(jsonRaw);

            return data;
        } else {
            return
        }
    } catch (error) {
        console.error(`Error returning inquiries from local storage`, error)
    }
}


