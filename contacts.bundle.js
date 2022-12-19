/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/coffee.svg":
/*!************************!*\
  !*** ./src/coffee.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cbc4bbd643d725c80ed.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "contactsCard": () => (/* binding */ contactsCard),
/* harmony export */   "contactsCardClear": () => (/* binding */ contactsCardClear),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "hours": () => (/* binding */ hours),
/* harmony export */   "menu2": () => (/* binding */ menu2)
/* harmony export */ });
/* harmony import */ var _coffee_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffee.svg */ "./src/coffee.svg");


const body = document.querySelector('body');
const nav = document.createElement('nav');
const section1 = document.createElement('section');
section1.classList.add('section1');
const section2 = document.createElement('section');
section2.classList.add('section2');
const divLogo = document.createElement('div');
const logo = new Image();
logo.src = _coffee_svg__WEBPACK_IMPORTED_MODULE_0__;
const logoTitle = document.createElement('div');
const logoTitleP = document.createElement('p');
logoTitleP.innerText = 'Coffe J';
const home = document.createElement('a');
home.classList.add('home');
home.innerText = 'Home';
const menu2 = document.createElement('a');
menu2.classList.add('menu');
menu2.innerText = 'Menu';
const contact = document.createElement('a');
contact.classList.add('contact');
contact.innerText = 'Contacts';
const hours = document.createElement('a');
hours.classList.add('hours');
hours.innerText = 'Hours';

const main = document.createElement('main');
const contacts = document.createElement('div');
contacts.classList.add('contactsCard');
const contactsTitle = document.createElement('div');
contactsTitle.classList.add('contactsTitle');
contactsTitle.innerText = 'Contacts';
const manager = document.createElement('div');
manager.classList.add('manager');
const managerTitle = document.createElement('div');
managerTitle.classList.add('managerTitle');
managerTitle.innerText = 'Manager';
const managerList = document.createElement('ul');
managerList.classList.add('managerList');
const customerService = document.createElement('div');
customerService.classList.add('customerService');
const customerServiceTitle = document.createElement('div');
customerServiceTitle.classList.add('customerServiceTitle');
customerServiceTitle.innerText = 'Customer Service';
const customerServiceList = document.createElement('ul');
customerServiceList.classList.add('customerServiceList');
const location = document.createElement('div');
location.classList.add('location');
const locationTitle = document.createElement('div');
locationTitle.classList.add('locationTitle');
locationTitle.innerText = 'Location';
const locationList = document.createElement('div');
locationList.classList.add('locationList');
locationList.innerText =
  'Av Ing Roberto Pastoriza 110, Santo Domingo, Dominican Republic';

const managerArr = {
  Email: 'somemanager@outlook.com',
  Fax: '555-333-4555',
};

const customerServiceArr = {
  Email: 'customerServiceCoffeJ@outlook.com',
  Fax: '555-333-4555',
  Telephone: '809-685-4555',
};

function ManagerListArr(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const tempProp = document.createElement('li');
      tempProp.classList.add('tempProp');
      const span = document.createElement('span');
      span.classList.add('header');
      const span2 = document.createElement('span');
      span2.classList.add('response');
      managerList.appendChild(tempProp);
      tempProp.appendChild(span);
      tempProp.appendChild(span2);

      span.innerHTML = prop + ': ';
      span2.innerHTML = obj[prop];
    }
  }
}

function customerServiceListArr(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const tempProp = document.createElement('li');
      tempProp.classList.add('tempProp');
      const span = document.createElement('span');
      span.classList.add('header');
      const span2 = document.createElement('span');
      span2.classList.add('response');
      customerServiceList.appendChild(tempProp);
      tempProp.appendChild(span);
      tempProp.appendChild(span2);

      span.innerHTML = prop + ': ';
      span2.innerHTML = obj[prop];
    }
  }
}

ManagerListArr(managerArr);
customerServiceListArr(customerServiceArr);

function contactsCard() {
  body.appendChild(nav);
  nav.appendChild(section1);
  nav.appendChild(section2);
  section1.appendChild(divLogo);
  divLogo.appendChild(logo);
  divLogo.appendChild(logoTitle);
  logoTitle.appendChild(logoTitleP);
  section2.appendChild(home);
  section2.appendChild(menu2);
  section2.appendChild(contact);
  section2.appendChild(hours);

  body.appendChild(main);
  main.appendChild(contacts);
  contacts.appendChild(contactsTitle);
  contacts.appendChild(manager);
  manager.appendChild(managerTitle);
  manager.appendChild(managerList);
  contacts.appendChild(customerService);
  customerService.appendChild(customerServiceTitle);
  customerService.appendChild(customerServiceList);
  contacts.appendChild(location);
  location.appendChild(locationTitle);
  location.appendChild(locationList);
}

function contactsCardClear() {
  body.removeChild(nav);
  nav.removeChild(section1);
  nav.removeChild(section2);
  section1.removeChild(divLogo);
  divLogo.removeChild(logo);
  divLogo.removeChild(logoTitle);
  logoTitle.removeChild(logoTitleP);
  section2.removeChild(home);
  section2.removeChild(menu2);
  section2.removeChild(contact);
  section2.removeChild(hours);

  body.removeChild(main);
  main.removeChild(contacts);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdDQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY29mZmUgZnJvbSAnLi9jb2ZmZWUuc3ZnJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5zZWN0aW9uMS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uMScpO1xuY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5zZWN0aW9uMi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uMicpO1xuY29uc3QgZGl2TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xubG9nby5zcmMgPSBjb2ZmZTtcbmNvbnN0IGxvZ29UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbG9nb1RpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmxvZ29UaXRsZVAuaW5uZXJUZXh0ID0gJ0NvZmZlIEonO1xuZXhwb3J0IGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5ob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbmhvbWUuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuZXhwb3J0IGNvbnN0IG1lbnUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xubWVudTIuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xubWVudTIuaW5uZXJUZXh0ID0gJ01lbnUnO1xuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbmNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NvbnRhY3RzJztcbmV4cG9ydCBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG5ob3Vycy5pbm5lclRleHQgPSAnSG91cnMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuY29uc3QgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzQ2FyZCcpO1xuY29uc3QgY29udGFjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0c1RpdGxlJyk7XG5jb250YWN0c1RpdGxlLmlubmVyVGV4dCA9ICdDb250YWN0cyc7XG5jb25zdCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYW5hZ2VyLmNsYXNzTGlzdC5hZGQoJ21hbmFnZXInKTtcbmNvbnN0IG1hbmFnZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFuYWdlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ21hbmFnZXJUaXRsZScpO1xubWFuYWdlclRpdGxlLmlubmVyVGV4dCA9ICdNYW5hZ2VyJztcbmNvbnN0IG1hbmFnZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbm1hbmFnZXJMaXN0LmNsYXNzTGlzdC5hZGQoJ21hbmFnZXJMaXN0Jyk7XG5jb25zdCBjdXN0b21lclNlcnZpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmN1c3RvbWVyU2VydmljZS5jbGFzc0xpc3QuYWRkKCdjdXN0b21lclNlcnZpY2UnKTtcbmNvbnN0IGN1c3RvbWVyU2VydmljZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jdXN0b21lclNlcnZpY2VUaXRsZS5jbGFzc0xpc3QuYWRkKCdjdXN0b21lclNlcnZpY2VUaXRsZScpO1xuY3VzdG9tZXJTZXJ2aWNlVGl0bGUuaW5uZXJUZXh0ID0gJ0N1c3RvbWVyIFNlcnZpY2UnO1xuY29uc3QgY3VzdG9tZXJTZXJ2aWNlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5jdXN0b21lclNlcnZpY2VMaXN0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbWVyU2VydmljZUxpc3QnKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9jYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvblRpdGxlJyk7XG5sb2NhdGlvblRpdGxlLmlubmVyVGV4dCA9ICdMb2NhdGlvbic7XG5jb25zdCBsb2NhdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvY2F0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbkxpc3QnKTtcbmxvY2F0aW9uTGlzdC5pbm5lclRleHQgPVxuICAnQXYgSW5nIFJvYmVydG8gUGFzdG9yaXphIDExMCwgU2FudG8gRG9taW5nbywgRG9taW5pY2FuIFJlcHVibGljJztcblxuY29uc3QgbWFuYWdlckFyciA9IHtcbiAgRW1haWw6ICdzb21lbWFuYWdlckBvdXRsb29rLmNvbScsXG4gIEZheDogJzU1NS0zMzMtNDU1NScsXG59O1xuXG5jb25zdCBjdXN0b21lclNlcnZpY2VBcnIgPSB7XG4gIEVtYWlsOiAnY3VzdG9tZXJTZXJ2aWNlQ29mZmVKQG91dGxvb2suY29tJyxcbiAgRmF4OiAnNTU1LTMzMy00NTU1JyxcbiAgVGVsZXBob25lOiAnODA5LTY4NS00NTU1Jyxcbn07XG5cbmZ1bmN0aW9uIE1hbmFnZXJMaXN0QXJyKG9iaikge1xuICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGNvbnN0IHRlbXBQcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHRlbXBQcm9wLmNsYXNzTGlzdC5hZGQoJ3RlbXBQcm9wJyk7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3BhbjIuY2xhc3NMaXN0LmFkZCgncmVzcG9uc2UnKTtcbiAgICAgIG1hbmFnZXJMaXN0LmFwcGVuZENoaWxkKHRlbXBQcm9wKTtcbiAgICAgIHRlbXBQcm9wLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgdGVtcFByb3AuYXBwZW5kQ2hpbGQoc3BhbjIpO1xuXG4gICAgICBzcGFuLmlubmVySFRNTCA9IHByb3AgKyAnOiAnO1xuICAgICAgc3BhbjIuaW5uZXJIVE1MID0gb2JqW3Byb3BdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjdXN0b21lclNlcnZpY2VMaXN0QXJyKG9iaikge1xuICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGNvbnN0IHRlbXBQcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHRlbXBQcm9wLmNsYXNzTGlzdC5hZGQoJ3RlbXBQcm9wJyk7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3BhbjIuY2xhc3NMaXN0LmFkZCgncmVzcG9uc2UnKTtcbiAgICAgIGN1c3RvbWVyU2VydmljZUxpc3QuYXBwZW5kQ2hpbGQodGVtcFByb3ApO1xuICAgICAgdGVtcFByb3AuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICB0ZW1wUHJvcC5hcHBlbmRDaGlsZChzcGFuMik7XG5cbiAgICAgIHNwYW4uaW5uZXJIVE1MID0gcHJvcCArICc6ICc7XG4gICAgICBzcGFuMi5pbm5lckhUTUwgPSBvYmpbcHJvcF07XG4gICAgfVxuICB9XG59XG5cbk1hbmFnZXJMaXN0QXJyKG1hbmFnZXJBcnIpO1xuY3VzdG9tZXJTZXJ2aWNlTGlzdEFycihjdXN0b21lclNlcnZpY2VBcnIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdHNDYXJkKCkge1xuICBib2R5LmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XG4gIG5hdi5hcHBlbmRDaGlsZChzZWN0aW9uMik7XG4gIHNlY3Rpb24xLmFwcGVuZENoaWxkKGRpdkxvZ28pO1xuICBkaXZMb2dvLmFwcGVuZENoaWxkKGxvZ28pO1xuICBkaXZMb2dvLmFwcGVuZENoaWxkKGxvZ29UaXRsZSk7XG4gIGxvZ29UaXRsZS5hcHBlbmRDaGlsZChsb2dvVGl0bGVQKTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIHNlY3Rpb24yLmFwcGVuZENoaWxkKG1lbnUyKTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RzKTtcbiAgY29udGFjdHMuYXBwZW5kQ2hpbGQoY29udGFjdHNUaXRsZSk7XG4gIGNvbnRhY3RzLmFwcGVuZENoaWxkKG1hbmFnZXIpO1xuICBtYW5hZ2VyLmFwcGVuZENoaWxkKG1hbmFnZXJUaXRsZSk7XG4gIG1hbmFnZXIuYXBwZW5kQ2hpbGQobWFuYWdlckxpc3QpO1xuICBjb250YWN0cy5hcHBlbmRDaGlsZChjdXN0b21lclNlcnZpY2UpO1xuICBjdXN0b21lclNlcnZpY2UuYXBwZW5kQ2hpbGQoY3VzdG9tZXJTZXJ2aWNlVGl0bGUpO1xuICBjdXN0b21lclNlcnZpY2UuYXBwZW5kQ2hpbGQoY3VzdG9tZXJTZXJ2aWNlTGlzdCk7XG4gIGNvbnRhY3RzLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uTGlzdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWN0c0NhcmRDbGVhcigpIHtcbiAgYm9keS5yZW1vdmVDaGlsZChuYXYpO1xuICBuYXYucmVtb3ZlQ2hpbGQoc2VjdGlvbjEpO1xuICBuYXYucmVtb3ZlQ2hpbGQoc2VjdGlvbjIpO1xuICBzZWN0aW9uMS5yZW1vdmVDaGlsZChkaXZMb2dvKTtcbiAgZGl2TG9nby5yZW1vdmVDaGlsZChsb2dvKTtcbiAgZGl2TG9nby5yZW1vdmVDaGlsZChsb2dvVGl0bGUpO1xuICBsb2dvVGl0bGUucmVtb3ZlQ2hpbGQobG9nb1RpdGxlUCk7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKGhvbWUpO1xuICBzZWN0aW9uMi5yZW1vdmVDaGlsZChtZW51Mik7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKGNvbnRhY3QpO1xuICBzZWN0aW9uMi5yZW1vdmVDaGlsZChob3Vycyk7XG5cbiAgYm9keS5yZW1vdmVDaGlsZChtYWluKTtcbiAgbWFpbi5yZW1vdmVDaGlsZChjb250YWN0cyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=