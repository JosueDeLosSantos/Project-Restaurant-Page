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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "hours": () => (/* binding */ hours),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "menu2": () => (/* binding */ menu2),
/* harmony export */   "menuCard": () => (/* binding */ menuCard),
/* harmony export */   "menuCardClear": () => (/* binding */ menuCardClear),
/* harmony export */   "menuTitle": () => (/* binding */ menuTitle)
/* harmony export */ });
/* harmony import */ var _coffee_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffee.svg */ "./src/coffee.svg");


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

const body = document.querySelector('body');
const main = document.createElement('main');
const menu = document.createElement('div');
menu.classList.add('menuCard');
const menuTitle = document.createElement('div');
menuTitle.classList.add('menuTitle');
menuTitle.innerText = 'Coffe Menu';
const hot = document.createElement('div');
hot.classList.add('hot');
const hotTitle = document.createElement('div');
hotTitle.classList.add('hotTitle');
hotTitle.innerText = 'Hot';
const hotList = document.createElement('ul');
hotList.classList.add('hotList');
const cold = document.createElement('div');
cold.classList.add('cold');
const coldTitle = document.createElement('div');
coldTitle.classList.add('coldTitle');
coldTitle.innerText = 'Cold';
const coldList = document.createElement('ul');
coldList.classList.add('coldList');

const hotArr = [
  'Americano .............................................................................. 60 RD$',
  'Brewed Coffees ...................................................................... 80 RD$',
  'Cappuccino ............................................................................. 100 RD$',
  'Espresso .................................................................................. 80 RD$',
  'Flat White ............................................................................... 90 RD$',
  'Latte ........................................................................................ 80 RD$',
  'Macchiato ............................................................................... 120 RD$',
  'Mochas .................................................................................... 110 RD$',
];

const coldArr = [
  'Refresher ................................................................................ 60 RD$',
  'Juice ........................................................................................ 80 RD$',
  'Milk ........................................................................................ 100 RD$',
  'Sparkling Water ....................................................................... 80 RD$',
  'Water ........................................................................................ 90 RD$',
];

function HotarrLister(Arr) {
  Arr.forEach((element) => {
    hotList.innerHTML += `<li> ${element} </li>`;
  });
}

function ColdarrLister(Arr) {
  Arr.forEach((element) => {
    coldList.innerHTML += `<li> ${element} </li>`;
  });
}

HotarrLister(hotArr);
ColdarrLister(coldArr);

function menuCard() {
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
  main.appendChild(menu);
  menu.appendChild(menuTitle);
  menu.appendChild(hot);
  hot.appendChild(hotTitle);
  hot.appendChild(hotList);
  menu.appendChild(cold);
  cold.appendChild(coldTitle);
  cold.appendChild(coldList);
}

function menuCardClear() {
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
  main.removeChild(menu);
  /* menu.removeChild(menuTitle);
  menu.removeChild(hot);
  hot.removeChild(hotTitle);
  hot.removeChild(hotList);
  menu.removeChild(cold);
  cold.removeChild(coldTitle);
  cold.removeChild(coldList); */
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdDQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ0E7QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0MsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY29mZmUgZnJvbSAnLi9jb2ZmZWUuc3ZnJztcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5jb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbnNlY3Rpb24xLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24xJyk7XG5jb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbnNlY3Rpb24yLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24yJyk7XG5jb25zdCBkaXZMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG5sb2dvLnNyYyA9IGNvZmZlO1xuY29uc3QgbG9nb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBsb2dvVGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubG9nb1RpdGxlUC5pbm5lclRleHQgPSAnQ29mZmUgSic7XG5leHBvcnQgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuaG9tZS5pbm5lclRleHQgPSAnSG9tZSc7XG5leHBvcnQgY29uc3QgbWVudTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5tZW51Mi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5tZW51Mi5pbm5lclRleHQgPSAnTWVudSc7XG5leHBvcnQgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuY29udGFjdC5pbm5lclRleHQgPSAnQ29udGFjdHMnO1xuZXhwb3J0IGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcbmhvdXJzLmlubmVyVGV4dCA9ICdIb3Vycyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbmV4cG9ydCBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51LmNsYXNzTGlzdC5hZGQoJ21lbnVDYXJkJyk7XG5leHBvcnQgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG5tZW51VGl0bGUuaW5uZXJUZXh0ID0gJ0NvZmZlIE1lbnUnO1xuY29uc3QgaG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob3QuY2xhc3NMaXN0LmFkZCgnaG90Jyk7XG5jb25zdCBob3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG90VGl0bGUuY2xhc3NMaXN0LmFkZCgnaG90VGl0bGUnKTtcbmhvdFRpdGxlLmlubmVyVGV4dCA9ICdIb3QnO1xuY29uc3QgaG90TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5ob3RMaXN0LmNsYXNzTGlzdC5hZGQoJ2hvdExpc3QnKTtcbmNvbnN0IGNvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbGQuY2xhc3NMaXN0LmFkZCgnY29sZCcpO1xuY29uc3QgY29sZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb2xkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29sZFRpdGxlJyk7XG5jb2xkVGl0bGUuaW5uZXJUZXh0ID0gJ0NvbGQnO1xuY29uc3QgY29sZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuY29sZExpc3QuY2xhc3NMaXN0LmFkZCgnY29sZExpc3QnKTtcblxuY29uc3QgaG90QXJyID0gW1xuICAnQW1lcmljYW5vIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiA2MCBSRCQnLFxuICAnQnJld2VkIENvZmZlZXMgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiA4MCBSRCQnLFxuICAnQ2FwcHVjY2lubyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiAxMDAgUkQkJyxcbiAgJ0VzcHJlc3NvIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gODAgUkQkJyxcbiAgJ0ZsYXQgV2hpdGUgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiA5MCBSRCQnLFxuICAnTGF0dGUgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiA4MCBSRCQnLFxuICAnTWFjY2hpYXRvIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gMTIwIFJEJCcsXG4gICdNb2NoYXMgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDExMCBSRCQnLFxuXTtcblxuY29uc3QgY29sZEFyciA9IFtcbiAgJ1JlZnJlc2hlciAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiA2MCBSRCQnLFxuICAnSnVpY2UgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiA4MCBSRCQnLFxuICAnTWlsayAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDEwMCBSRCQnLFxuICAnU3BhcmtsaW5nIFdhdGVyIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDgwIFJEJCcsXG4gICdXYXRlciAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDkwIFJEJCcsXG5dO1xuXG5mdW5jdGlvbiBIb3RhcnJMaXN0ZXIoQXJyKSB7XG4gIEFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaG90TGlzdC5pbm5lckhUTUwgKz0gYDxsaT4gJHtlbGVtZW50fSA8L2xpPmA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBDb2xkYXJyTGlzdGVyKEFycikge1xuICBBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbGRMaXN0LmlubmVySFRNTCArPSBgPGxpPiAke2VsZW1lbnR9IDwvbGk+YDtcbiAgfSk7XG59XG5cbkhvdGFyckxpc3Rlcihob3RBcnIpO1xuQ29sZGFyckxpc3Rlcihjb2xkQXJyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVDYXJkKCkge1xuICBib2R5LmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XG4gIG5hdi5hcHBlbmRDaGlsZChzZWN0aW9uMik7XG4gIHNlY3Rpb24xLmFwcGVuZENoaWxkKGRpdkxvZ28pO1xuICBkaXZMb2dvLmFwcGVuZENoaWxkKGxvZ28pO1xuICBkaXZMb2dvLmFwcGVuZENoaWxkKGxvZ29UaXRsZSk7XG4gIGxvZ29UaXRsZS5hcHBlbmRDaGlsZChsb2dvVGl0bGVQKTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIHNlY3Rpb24yLmFwcGVuZENoaWxkKG1lbnUyKTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xuICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoaG90KTtcbiAgaG90LmFwcGVuZENoaWxkKGhvdFRpdGxlKTtcbiAgaG90LmFwcGVuZENoaWxkKGhvdExpc3QpO1xuICBtZW51LmFwcGVuZENoaWxkKGNvbGQpO1xuICBjb2xkLmFwcGVuZENoaWxkKGNvbGRUaXRsZSk7XG4gIGNvbGQuYXBwZW5kQ2hpbGQoY29sZExpc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVudUNhcmRDbGVhcigpIHtcbiAgYm9keS5yZW1vdmVDaGlsZChuYXYpO1xuICBuYXYucmVtb3ZlQ2hpbGQoc2VjdGlvbjEpO1xuICBuYXYucmVtb3ZlQ2hpbGQoc2VjdGlvbjIpO1xuICBzZWN0aW9uMS5yZW1vdmVDaGlsZChkaXZMb2dvKTtcbiAgZGl2TG9nby5yZW1vdmVDaGlsZChsb2dvKTtcbiAgZGl2TG9nby5yZW1vdmVDaGlsZChsb2dvVGl0bGUpO1xuICBsb2dvVGl0bGUucmVtb3ZlQ2hpbGQobG9nb1RpdGxlUCk7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKGhvbWUpO1xuICBzZWN0aW9uMi5yZW1vdmVDaGlsZChtZW51Mik7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKGNvbnRhY3QpO1xuICBzZWN0aW9uMi5yZW1vdmVDaGlsZChob3Vycyk7XG4gIGJvZHkucmVtb3ZlQ2hpbGQobWFpbik7XG4gIG1haW4ucmVtb3ZlQ2hpbGQobWVudSk7XG4gIC8qIG1lbnUucmVtb3ZlQ2hpbGQobWVudVRpdGxlKTtcbiAgbWVudS5yZW1vdmVDaGlsZChob3QpO1xuICBob3QucmVtb3ZlQ2hpbGQoaG90VGl0bGUpO1xuICBob3QucmVtb3ZlQ2hpbGQoaG90TGlzdCk7XG4gIG1lbnUucmVtb3ZlQ2hpbGQoY29sZCk7XG4gIGNvbGQucmVtb3ZlQ2hpbGQoY29sZFRpdGxlKTtcbiAgY29sZC5yZW1vdmVDaGlsZChjb2xkTGlzdCk7ICovXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=