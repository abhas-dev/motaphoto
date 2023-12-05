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
      loadMoreBtn.style.display = 'none';
      console.log(data);
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
    // fetch(motaphotoData.root_url + '/wp-json/motaphoto/v1/photos?offset=' + loadedPhotos)
    fetch(motaphotoData.root_url + '/wp-json/motaphoto/v1/photos/load-more').then(response => response.json()).then(data => {
      if (data.length === 0) {
        console.log(data);
      } else {
        console.log(data);
        gallery.innerHTML += data.cards;
        loadedPhotos += 12;
        loadMoreBtn.style.display = 'none';
      }
    }).catch(error => {
      console.error('Erreur lors du chargement des photos : ', error);
    });
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
/* harmony import */ var _modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadMorePhotos */ "./public/src/modules/loadMorePhotos.js");
/* harmony import */ var _modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_loadMorePhotos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/categoryPhotoFilter */ "./public/src/modules/categoryPhotoFilter.js");
/* harmony import */ var _modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_categoryPhotoFilter__WEBPACK_IMPORTED_MODULE_1__);


// import ContactModal from "./modules/contactModal";
})();

/******/ })()
;
//# sourceMappingURL=index.js.map