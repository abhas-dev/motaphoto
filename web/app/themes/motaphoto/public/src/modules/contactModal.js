class ContactModal {
    constructor() {
        this.addModalHtml();
        this.contactModal = document.querySelector('.contact-modal');
        this.contactBtn = document.querySelectorAll('.contact');
        this.referenceParagraph = document.querySelector('.referenceParagraph');
        this.referenceField = document.querySelector('#ref-photo');
        this.eventListeners();
    }

    eventListeners() {
        for (let btn of this.contactBtn) {
            btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.referenceParagraph) {
                this.referenceField.value = this.referenceParagraph.dataset.photoReference;
            }
            this.contactModal.showModal();
            });
        }
        // Close the modal when the user clicks anywhere outside of it
        window.addEventListener('click', (e) => {
            if (e.target === this.contactModal) {
                this.contactModal.close();
            }
        });
    }

    addModalHtml() {
        document.body.innerHTML += `
       <dialog class="contact-modal" id="contact-modal">
           <div class="modal-container">
               <div class="contact-modal__title">
                  <h2>contact</h2>
                  <h2>contact</h2>
               </div>
       
               <form action="#" method="dialog">
                  <div class="contact-form__fields">
                      <div class="group-input">
                          <label for="name">Nom</label>
                          <input type="text" name="name" id="name">
                      </div>
                      <div class="group-input">
                          <label for="email">E-mail</label>
                          <input type="email" name="email" id="email">
                      </div>
                      <div class="group-input">
                          <label for="ref-photo">Réf.Photo</label>
                          <input type="text" name="ref-photo" id="ref-photo">
                      </div>
                      <div class="group-input">
                          <label for="message">message</label>
                          <textarea name="message" id="message"></textarea>
                      </div>
                  </div>
                  <button type="submit" class="btn btn-grey">Envoyer</button>
               </form>
           </div>
       </dialog>
       `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new ContactModal();
});
export default ContactModal;


// const contactModal = document.querySelector('.contact-modal');
// const contactBtn = document.querySelectorAll('.contact');
// let referenceParagraph = document.querySelector('.referenceParagraph');
// const referenceField = document.querySelector('#ref-photo');
//
// contactBtn.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         // if(referenceParagraph.dataset.photoReference) {
//         //     referenceField.value = referenceParagraph.dataset.photoReference;
//         // }
//         contactModal.showModal();
//     });
// });
//
// // Close the modal when the user clicks anywhere outside of it
// window.addEventListener('click', (e) => {
//     if (e.target === contactModal) {
//         contactModal.close();
//     }
// });