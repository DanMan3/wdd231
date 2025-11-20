
// Punch time stamp on submit form 
document.addEventListener('DOMContentLoaded', () => {
    const tsInput = document.getElementById('time-stamp');
    tsInput.value = new Date().toISOString();
});