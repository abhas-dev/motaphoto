const contactModal = document.querySelector('.contact-modal');
const contactBtn = document.querySelectorAll('.contact');
let referenceParagraph = document.querySelector('.referenceParagraph');
const referenceField = document.querySelector('#ref-photo');

contactBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        referenceField.value = (referenceParagraph && e.target.tagName === "BUTTON") ? referenceParagraph.dataset.photoReference : '';
        contactModal.showModal();
    });
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.close();
    }
});
