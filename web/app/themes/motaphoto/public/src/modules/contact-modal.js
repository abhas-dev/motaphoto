const contactModal = document.querySelector('.contact-modal');
const contactBtn = document.querySelectorAll('.contact');
let referenceParagraph = document.querySelector('.referenceParagraph');
const photoReference = referenceParagraph.dataset.photoReference;
const referenceField = document.querySelector('#ref-photo');

contactBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(photoReference) {
            referenceField.value = photoReference;
        }
        contactModal.showModal();
    });
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.close();
    }
});
