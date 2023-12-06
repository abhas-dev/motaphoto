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
    fetch(motaphotoData.root_url + '/wp-json/motaphoto/v1/photos?category=' + e.target.value).then(response => response.json()).then(data => {
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
    if (referenceParagraph && e.target.tagName === "BUTTON") {
      referenceField.value = referenceParagraph.dataset.photoReference;
    }
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
    fetch(motaphotoData.root_url + '/wp-json/motaphoto/v1/photos?format=' + e.target.value).then(response => response.json()).then(data => {
      loadMoreBtn.style.display = !data.filter.length ? 'block' : 'none';
      gallery.innerHTML = data.output;
    }).catch(error => console.error('Erreur:', error));
  });
}

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
/* harmony import */ var _modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadMorePhotos */ "./public/src/modules/loadMorePhotos.js");
/* harmony import */ var _modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/categoryPhotoFilter */ "./public/src/modules/categoryPhotoFilter.js");
/* harmony import */ var _modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_formatPhotoFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formatPhotoFilter */ "./public/src/modules/formatPhotoFilter.js");
/* harmony import */ var _modules_formatPhotoFilter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_formatPhotoFilter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_contactModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contactModal */ "./public/src/modules/contactModal.js");
/* harmony import */ var _modules_contactModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_contactModal__WEBPACK_IMPORTED_MODULE_3__);




// import ContactModal from "./modules/contactModal";
})();

/******/ })()
;
//# sourceMappingURL=index.js.map