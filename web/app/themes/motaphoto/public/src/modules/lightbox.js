const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox>img');
const fullScreenBtn = document.querySelectorAll('.icon-fullscreen');
const closeBtn = document.querySelector('.lightbox__close');
const lightboxPrevBtn = document.querySelector('.lightbox__previous');
const lightboxNextBtn = document.querySelector('.lightbox__next');

function photoNavigation(currentPhoto) {
    const data = {};

    if(!currentPhoto) {
        return false;
    } else {
        data.current = {
            title: currentPhoto.querySelector('.card-title').innerText,
            imageUrl: currentPhoto.querySelector('img').src,
            category: currentPhoto.querySelector('.card-photo-category').innerText,
        }
    }

    const previousPhoto = currentPhoto.previousElementSibling;
    const nextPhoto = currentPhoto.nextElementSibling;

    if (previousPhoto) {
        data.prev = {
            title: previousPhoto.querySelector('.card-title').innerText,
            imageUrl: previousPhoto.querySelector('img').src,
            category: previousPhoto.querySelector('.card-photo-category').innerText,
        };
    }

    if (nextPhoto) {
        data.next = {
            title: nextPhoto.querySelector('.card-title').innerText,
            imageUrl: nextPhoto.querySelector('img').src,
            category: nextPhoto.querySelector('.card-photo-category').innerText,
        };
    }

    return data;
}

if (fullScreenBtn.length) {
    fullScreenBtn.forEach(link => {
        link.addEventListener('click',(e) => {
            e.preventDefault();
            const currentCard = e.target.closest('.card-photo');
            const photoData = photoNavigation(currentCard);

            if (photoData && photoData.current) {
                lightboxImg.src = photoData.current.imageUrl;
                lightboxImg.alt = photoData.current.title;
            }

            lightbox.classList.toggle('active');
        })
    })
}

if(closeBtn) {
    closeBtn.addEventListener('click', (e) => {
        lightbox.classList.toggle('active');
    })
}

if(lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
        lightboxImg.src = photoData.prev.imageUrl;
        lightboxImg.alt = photoData.prev.title;
        photoNavigation(photoData.prev);
    })
}

if(lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
        lightboxImg.src = photoData.next.imageUrl;
        lightboxImg.alt = photoData.next.title;
        photoNavigation(photoData.next);
    })
}

// /**
//  * @property {HTMLElement} lightbox
//  * @property {HTMLElement} fullScreenBtn
//  * @property {HTMLElement} closeBtn
//  * @property {HTMLElement} lightboxPrevBtn
//  * @property {HTMLElement} lightboxNextBtn
//  */
// class Lightbox {
//     static init () {
//         const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]')
//             .forEach(link => link.addEventListener('click', e => {
//                 e.preventDefault();
//                 new Lightbox(e.currentTarget.getAttribute('href'));
//             }))
//     }
//
//     /**
//      * @param {string} url URL de l'image
//      */
//     constructor(url) {
//         this.lightbox = document.querySelector('#lightbox');
//         this.lightboxImg = document.querySelector('#lightbox>img');
//         this.fullScreenBtn = document.querySelectorAll('.icon-fullscreen');
//         this.closeBtn = document.querySelector('.lightbox__close');
//         this.lightboxPrevBtn = document.querySelector('.lightbox__previous');
//         this.lightboxNextBtn = document.querySelector('.lightbox__next');
//     }
//
//     buildDOM (url) {
//         const dom = document.createElement('div');
//         dom.classList.add('lightbox');
//     }
//
//     loadImage (url) {
//         const image = new Image();
//         image.onload = function () {
//
//         }
//         image.src = url;
//     }
//
//     openLightbox() {
//             this.fullScreenBtn.forEach(link => {
//         link.addEventListener('click',(e) => {
//             e.preventDefault();
//             console.log(e.target.closest('.card-photo__description').querySelector('.card-title'));
//             this.lightbox.classList.toggle('active');
//         })
//     })
//     }
//
//
//
//
//
// }
//
// Lightbox.init();