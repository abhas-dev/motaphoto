class Lightbox {
    constructor() {
        this.lightbox = document.querySelector('#lightbox');
        this.lightboxImg = document.querySelector('.lightbox__img');
        this.fullScreenBtn = document.querySelectorAll('.icon-fullscreen');
        this.closeBtn = document.querySelector('.lightbox__close');
        this.lightboxPrevBtn = document.querySelector('.lightbox__previous');
        this.lightboxNextBtn = document.querySelector('.lightbox__next');
        this.photoData = [];
        this.galleryContainer = document.querySelector('.photo-grid');

        this.init();
    }

    init() {
        if (this.fullScreenBtn.length) {
            this.fullScreenBtn.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const currentCard = e.target.closest('.card-photo');
                    this.photoData = this.collectPhotoData();
                    const clickedPhotoIndex = Array.from(currentCard.parentElement.children).indexOf(currentCard);
                    this.showPhotoInLightbox(clickedPhotoIndex);
                    this.lightbox.classList.add('active');
                });
            });
        }

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.lightbox.classList.remove('active');
            });
        }

        if (this.lightboxPrevBtn && this.lightboxNextBtn) {
            this.lightboxPrevBtn.addEventListener('click', () => {
                this.showPreviousPhoto();
            });

            this.lightboxNextBtn.addEventListener('click', () => {
                this.showNextPhoto();
            });
        }
    }

    reattachLightboxEvents() {
        const fullScreenBtns = document.querySelectorAll('.icon-fullscreen');

        fullScreenBtns.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const currentCard = e.target.closest('.card-photo');
                const clickedPhotoIndex = Array.from(currentCard.parentElement.children).indexOf(currentCard);
                this.showPhotoInLightbox(clickedPhotoIndex);
                this.lightbox.classList.add('active');
            });
        });
    }

    collectPhotoData() {
        const cards = document.querySelectorAll('.card-photo');
        const data = [];

        cards.forEach(card => {
            data.push({
                title: card.querySelector('.card-title').innerText,
                imageUrl: card.querySelector('img').src,
                category: card.querySelector('.card-photo-category').innerText,
            });
        });

        return data;
    }

    showPhotoInLightbox(index) {
        const photo = this.photoData[index];
        if (photo) {
            console.log(this.lightboxImg);
            this.lightboxImg.src = photo.imageUrl;
            this.lightboxImg.alt = photo.title;
        }
    }

    showPreviousPhoto() {
        const currentIndex = this.photoData.findIndex(photo => photo.imageUrl === this.lightboxImg.src);
        const prevIndex = (currentIndex - 1 + this.photoData.length) % this.photoData.length;
        this.showPhotoInLightbox(prevIndex);
    }

    showNextPhoto() {
        const currentIndex = this.photoData.findIndex(photo => photo.imageUrl === this.lightboxImg.src);
        const nextIndex = (currentIndex + 1) % this.photoData.length;
        this.showPhotoInLightbox(nextIndex);
    }

    updatePhotoData() {
        this.photoData = this.collectPhotoData();
        this.reattachLightboxEvents();
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
});

export default Lightbox;
