const contactModal = document.querySelector('.contact-modal');
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal.showModal();
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.close();
    }
});
