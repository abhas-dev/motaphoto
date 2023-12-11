/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/modules/categoryPhotoFilter.js":
/*!***************************************************!*\
  !*** ./public/src/modules/categoryPhotoFilter.js ***!
  \***************************************************/
/***/ (() => {

const categoryPhotoFilter = document.querySelector('#categories');
const gallery = document.querySelector('.photo-grid');
const loadMoreBtn = document.querySelector('.btn-load-more');
if (categoryPhotoFilter) {
  categoryPhotoFilter.addEventListener('change', e => {
    fetch(`${motaphotoData.root_url}/wp-json/motaphoto/v1/photos?category=${e.target.value}`).then(response => response.json()).then(data => {
      loadMoreBtn.style.display = !data.filter.length ? 'block' : 'none';
      gallery.innerHTML = data.output;
    }).catch(error => console.error('Erreur:', error));
  });
}

/***/ }),

/***/ "./public/src/modules/contactModal.js":
/*!********************************************!*\
  !*** ./public/src/modules/contactModal.js ***!
  \********************************************/
/***/ (() => {

const contactModal = document.querySelector('.contact-modal');
const contactBtn = document.querySelectorAll('.contact');
let referenceParagraph = document.querySelector('.referenceParagraph');
const referenceField = document.querySelector('#ref-photo');
contactBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    referenceField.value = referenceParagraph && e.target.tagName === "BUTTON" ? referenceParagraph.dataset.photoReference : '';
    contactModal.showModal();
  });
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', e => {
  if (e.target === contactModal) {
    contactModal.close();
  }
});

// class ContactModal {
//     constructor() {
//         this.addModalHtml();
//         this.contactModal = document.querySelector('.contact-modal');
//         this.contactBtn = document.querySelectorAll('.contact');
//         this.referenceParagraph = document.querySelector('.referenceParagraph');
//         this.referenceField = document.querySelector('#ref-photo');
//         this.eventListeners();
//     }
//
//     eventListeners() {
//         for (let btn of this.contactBtn) {
//             btn.addEventListener('click', (e) => {
//             e.preventDefault();
//             if (this.referenceParagraph) {
//                 this.referenceField.value = this.referenceParagraph.dataset.photoReference;
//             }
//             this.contactModal.showModal();
//             });
//         }
//         // Close the modal when the user clicks anywhere outside of it
//         window.addEventListener('click', (e) => {
//             if (e.target === this.contactModal) {
//                 this.contactModal.close();
//             }
//         });
//     }
//
//     addModalHtml() {
//         document.body.innerHTML += `
//        <dialog class="contact-modal" id="contact-modal">
//            <div class="modal-container">
//                <div class="contact-modal__title">
//                   <h2>contact</h2>
//                   <h2>contact</h2>
//                </div>
//
//                <form action="#" method="dialog">
//                   <div class="contact-form__fields">
//                       <div class="group-input">
//                           <label for="name">Nom</label>
//                           <input type="text" name="name" id="name">
//                       </div>
//                       <div class="group-input">
//                           <label for="email">E-mail</label>
//                           <input type="email" name="email" id="email">
//                       </div>
//                       <div class="group-input">
//                           <label for="ref-photo">Réf.Photo</label>
//                           <input type="text" name="ref-photo" id="ref-photo">
//                       </div>
//                       <div class="group-input">
//                           <label for="message">message</label>
//                           <textarea name="message" id="message"></textarea>
//                       </div>
//                   </div>
//                   <button type="submit" class="btn btn-grey">Envoyer</button>
//                </form>
//            </div>
//        </dialog>
//        `;
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     new ContactModal();
// });
// export default ContactModal;

/***/ }),

/***/ "./public/src/modules/formatPhotoFilter.js":
/*!*************************************************!*\
  !*** ./public/src/modules/formatPhotoFilter.js ***!
  \*************************************************/
/***/ (() => {

const formatPhotoFilter = document.querySelector('#format');
const gallery = document.querySelector('.photo-grid');
const loadMoreBtn = document.querySelector('.btn-load-more');
if (formatPhotoFilter) {
  formatPhotoFilter.addEventListener('change', e => {
    fetch(`${motaphotoData.root_url}/wp-json/motaphoto/v1/photos?format=${e.target.value}`).then(response => response.json()).then(data => {
      loadMoreBtn.style.display = !data.filter.length ? 'block' : 'none';
      gallery.innerHTML = data.output;
    }).catch(error => console.error('Erreur:', error));
  });
}

/***/ }),

/***/ "./public/src/modules/lightbox.js":
/*!****************************************!*\
  !*** ./public/src/modules/lightbox.js ***!
  \****************************************/
/***/ (() => {

const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox>img');
const fullScreenBtn = document.querySelectorAll('.icon-fullscreen');
const closeBtn = document.querySelector('.lightbox__close');
const lightboxPrevBtn = document.querySelector('.lightbox__previous');
const lightboxNextBtn = document.querySelector('.lightbox__next');
function photoNavigation(currentPhoto) {
  const data = {};
  if (!currentPhoto) {
    return false;
  } else {
    data.current = {
      title: currentPhoto.querySelector('.card-title').innerText,
      imageUrl: currentPhoto.querySelector('img').src,
      category: currentPhoto.querySelector('.card-photo-category').innerText
    };
  }
  const previousPhoto = currentPhoto.previousElementSibling;
  const nextPhoto = currentPhoto.nextElementSibling;
  if (previousPhoto) {
    data.prev = {
      title: previousPhoto.querySelector('.card-title').innerText,
      imageUrl: previousPhoto.querySelector('img').src,
      category: previousPhoto.querySelector('.card-photo-category').innerText
    };
  }
  if (nextPhoto) {
    data.next = {
      title: nextPhoto.querySelector('.card-title').innerText,
      imageUrl: nextPhoto.querySelector('img').src,
      category: nextPhoto.querySelector('.card-photo-category').innerText
    };
  }
  return data;
}
if (fullScreenBtn.length) {
  fullScreenBtn.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const currentCard = e.target.closest('.card-photo');
      const photoData = photoNavigation(currentCard);
      if (photoData && photoData.current) {
        lightboxImg.src = photoData.current.imageUrl;
        lightboxImg.alt = photoData.current.title;
      }
      lightbox.classList.toggle('active');
    });
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', e => {
    lightbox.classList.toggle('active');
  });
}
if (lightboxPrevBtn) {
  lightboxPrevBtn.addEventListener('click', e => {
    lightboxImg.src = photoData.prev.imageUrl;
    lightboxImg.alt = photoData.prev.title;
    photoNavigation(photoData.prev);
  });
}
if (lightboxNextBtn) {
  lightboxNextBtn.addEventListener('click', e => {
    lightboxImg.src = photoData.next.imageUrl;
    lightboxImg.alt = photoData.next.title;
    photoNavigation(photoData.next);
  });
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

/***/ }),

/***/ "./public/src/modules/loadMorePhotos.js":
/*!**********************************************!*\
  !*** ./public/src/modules/loadMorePhotos.js ***!
  \**********************************************/
/***/ (() => {

const loadMoreBtn = document.querySelector('.btn-load-more');
const gallery = document.querySelector('.photo-grid');
let currentPage = 1;
let loadedPhotos = 12;
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', e => {
    e.preventDefault();
    try {
      fetch(`${motaphotoData.root_url}/wp-json/motaphoto/v1/photos/load-more?offset=${loadedPhotos}`).then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des photos');
        }
        return response.json();
      }).then(data => {
        if (!data || data.html.length === 0) {
          console.log('Aucun contenu disponible.');
          // loadMoreBtn.style.display = 'none';
          const noMoreContentMessage = document.createElement('p');
          noMoreContentMessage.classList.add('no-content-message');
          noMoreContentMessage.textContent = "Il n'y a plus de contenu à afficher.";
          loadMoreBtn.replaceWith(noMoreContentMessage);
        } else {
          gallery.innerHTML += data.html;
          loadedPhotos += 12;
        }
      }).catch(error => {
        console.error(error);
      });
    } catch (error) {
      console.error('erreur dans le try catch: ', error);
    }
  });
}

// .then(data => {
//     console.log(data);
//     if (data.length === 0) {
//         loadMoreBtn.style.display = 'none';
//         console.log('plus de contenu');
//         // A
//     } else {
//         gallery.innerHTML += data.html;
//
//         loadedPhotos += 12;
//         // loadMoreBtn.style.display = 'none';
//     }
// })

/***/ }),

/***/ "./public/src/modules/photoNavigation.js":
/*!***********************************************!*\
  !*** ./public/src/modules/photoNavigation.js ***!
  \***********************************************/
/***/ (() => {

const thumbnailDiv = document.querySelector('.navigation-thumbnail');
const interactionSection = document.querySelector('.single__interaction');
const leftArrow = document.querySelector('.navigation-arrows__left');
const rightArrow = document.querySelector('.navigation-arrows__right');
if (interactionSection) {
  const previousThumbnailUrl = interactionSection.dataset.previousThumbnailUrl;
  const nextThumbnailUrl = interactionSection.dataset.nextThumbnailUrl;
  const thumbnail = document.createElement('img');
  thumbnail.style.display = 'none';
  thumbnailDiv.appendChild(thumbnail);
  leftArrow.style.display = previousThumbnailUrl === '' ? 'none' : 'block';
  rightArrow.style.display = nextThumbnailUrl === '' ? 'none' : 'block';
  leftArrow.addEventListener('mouseover', () => {
    if (previousThumbnailUrl !== '') {
      thumbnail.style.display = 'block';
      thumbnail.src = previousThumbnailUrl;
    }
  });
  rightArrow.addEventListener('mouseover', () => {
    if (nextThumbnailUrl !== '') {
      thumbnail.style.display = 'block';
      thumbnail.src = nextThumbnailUrl;
    }
  });
}

/***/ }),

/***/ "./public/src/modules/sortPhotos.js":
/*!******************************************!*\
  !*** ./public/src/modules/sortPhotos.js ***!
  \******************************************/
/***/ (() => {

const sortSelect = document.querySelector('#sort');
const gallery = document.querySelector('.photo-grid');
if (sortSelect) {
  sortSelect.addEventListener('change', e => {
    console.log(e.target.value);
    fetch(`${motaphotoData.root_url}/wp-json/motaphoto/v1/photos?sort=${e.target.value}`).then(response => response.json()).then(data => {
      gallery.innerHTML = data.output;
    }).catch(error => console.error('Erreur:', error));
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/lightbox */ "./public/src/modules/lightbox.js");
/* harmony import */ var _modules_lightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_lightbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadMorePhotos */ "./public/src/modules/loadMorePhotos.js");
/* harmony import */ var _modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/categoryPhotoFilter */ "./public/src/modules/categoryPhotoFilter.js");
/* harmony import */ var _modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_formatPhotoFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/formatPhotoFilter */ "./public/src/modules/formatPhotoFilter.js");
/* harmony import */ var _modules_formatPhotoFilter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_formatPhotoFilter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_sortPhotos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sortPhotos */ "./public/src/modules/sortPhotos.js");
/* harmony import */ var _modules_sortPhotos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_sortPhotos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_contactModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/contactModal */ "./public/src/modules/contactModal.js");
/* harmony import */ var _modules_contactModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_contactModal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_photoNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/photoNavigation */ "./public/src/modules/photoNavigation.js");
/* harmony import */ var _modules_photoNavigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_photoNavigation__WEBPACK_IMPORTED_MODULE_6__);







// import ContactModal from "./modules/contactModal";
})();

/******/ })()
;
//# sourceMappingURL=index.js.map