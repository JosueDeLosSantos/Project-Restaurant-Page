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
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "center": () => (/* binding */ center),
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "homePage": () => (/* binding */ homePage),
/* harmony export */   "homePageClear": () => (/* binding */ homePageClear),
/* harmony export */   "hours": () => (/* binding */ hours),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "menu": () => (/* binding */ menu)
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
const menu = document.createElement('a');
menu.classList.add('menu');
menu.innerText = 'Menu';
const contact = document.createElement('a');
contact.classList.add('contact');
contact.innerText = 'Contacts';
const hours = document.createElement('a');
hours.classList.add('hours');
hours.innerText = 'Hours';
const main = document.createElement('main');
const center = document.createElement('div');
center.classList.add('center');
const welcome = document.createElement('div');
welcome.classList.add('welcome');
welcome.innerText = 'Welcome!';
const centerLogo = document.createElement('div');
centerLogo.classList.add('centerLogo');
const logoBody = new Image();
logoBody.src = _coffee_svg__WEBPACK_IMPORTED_MODULE_0__;
const logoBodyTitle = document.createElement('div');
logoBodyTitle.innerText = 'COFFE J';
const motto = document.createElement('div');
motto.classList.add('motto');
motto.innerText = 'Serving the best coffe in the Dominican Republic!';
const menuLink = document.createElement('a');
menuLink.classList.add('menuLink');
menuLink.innerText = 'CHECK OUT OUR MENU';

function homePage() {
  body.appendChild(nav);
  nav.appendChild(section1);
  nav.appendChild(section2);
  section1.appendChild(divLogo);
  divLogo.appendChild(logo);
  divLogo.appendChild(logoTitle);
  logoTitle.appendChild(logoTitleP);
  section2.appendChild(home);
  section2.appendChild(menu);
  section2.appendChild(contact);
  section2.appendChild(hours);
  body.appendChild(main);
  main.appendChild(center);
  center.appendChild(welcome);
  center.appendChild(centerLogo);
  centerLogo.appendChild(logoBody);
  centerLogo.appendChild(logoBodyTitle);
  center.appendChild(motto);
  center.appendChild(menuLink);
}

function homePageClear() {
  body.removeChild(nav);
  nav.removeChild(section1);
  nav.removeChild(section2);
  section1.removeChild(divLogo);
  divLogo.removeChild(logo);
  divLogo.removeChild(logoTitle);
  logoTitle.removeChild(logoTitleP);
  section2.removeChild(home);
  section2.removeChild(menu);
  section2.removeChild(contact);
  section2.removeChild(hours);
  body.removeChild(main);
  main.removeChild(center);
  center.removeChild(welcome);
  center.removeChild(centerLogo);
  centerLogo.removeChild(logoBody);
  centerLogo.removeChild(logoBodyTitle);
  center.removeChild(motto);
  center.removeChild(menuLink);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQzs7QUFFMUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0NBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3Q0FBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY29mZmUgZnJvbSAnLi9jb2ZmZWUuc3ZnJztcblxuZXhwb3J0IGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbmNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuc2VjdGlvbjEuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbjEnKTtcbmNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuc2VjdGlvbjIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbjInKTtcbmNvbnN0IGRpdkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbmxvZ28uc3JjID0gY29mZmU7XG5jb25zdCBsb2dvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGxvZ29UaXRsZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5sb2dvVGl0bGVQLmlubmVyVGV4dCA9ICdDb2ZmZSBKJztcbmV4cG9ydCBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5ob21lLmlubmVyVGV4dCA9ICdIb21lJztcbmV4cG9ydCBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5tZW51LmlubmVyVGV4dCA9ICdNZW51JztcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5jb250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0cyc7XG5leHBvcnQgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5ob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuaG91cnMuaW5uZXJUZXh0ID0gJ0hvdXJzJztcbmV4cG9ydCBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuZXhwb3J0IGNvbnN0IGNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2VudGVyLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud2VsY29tZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG53ZWxjb21lLmlubmVyVGV4dCA9ICdXZWxjb21lISc7XG5jb25zdCBjZW50ZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jZW50ZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2NlbnRlckxvZ28nKTtcbmNvbnN0IGxvZ29Cb2R5ID0gbmV3IEltYWdlKCk7XG5sb2dvQm9keS5zcmMgPSBjb2ZmZTtcbmNvbnN0IGxvZ29Cb2R5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZ29Cb2R5VGl0bGUuaW5uZXJUZXh0ID0gJ0NPRkZFIEonO1xuY29uc3QgbW90dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1vdHRvLmNsYXNzTGlzdC5hZGQoJ21vdHRvJyk7XG5tb3R0by5pbm5lclRleHQgPSAnU2VydmluZyB0aGUgYmVzdCBjb2ZmZSBpbiB0aGUgRG9taW5pY2FuIFJlcHVibGljISc7XG5jb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbm1lbnVMaW5rLmNsYXNzTGlzdC5hZGQoJ21lbnVMaW5rJyk7XG5tZW51TGluay5pbm5lclRleHQgPSAnQ0hFQ0sgT1VUIE9VUiBNRU5VJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuICBib2R5LmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XG4gIG5hdi5hcHBlbmRDaGlsZChzZWN0aW9uMik7XG4gIHNlY3Rpb24xLmFwcGVuZENoaWxkKGRpdkxvZ28pO1xuICBkaXZMb2dvLmFwcGVuZENoaWxkKGxvZ28pO1xuICBkaXZMb2dvLmFwcGVuZENoaWxkKGxvZ29UaXRsZSk7XG4gIGxvZ29UaXRsZS5hcHBlbmRDaGlsZChsb2dvVGl0bGVQKTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIHNlY3Rpb24yLmFwcGVuZENoaWxkKG1lbnUpO1xuICBzZWN0aW9uMi5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICBtYWluLmFwcGVuZENoaWxkKGNlbnRlcik7XG4gIGNlbnRlci5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgY2VudGVyLmFwcGVuZENoaWxkKGNlbnRlckxvZ28pO1xuICBjZW50ZXJMb2dvLmFwcGVuZENoaWxkKGxvZ29Cb2R5KTtcbiAgY2VudGVyTG9nby5hcHBlbmRDaGlsZChsb2dvQm9keVRpdGxlKTtcbiAgY2VudGVyLmFwcGVuZENoaWxkKG1vdHRvKTtcbiAgY2VudGVyLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlQ2xlYXIoKSB7XG4gIGJvZHkucmVtb3ZlQ2hpbGQobmF2KTtcbiAgbmF2LnJlbW92ZUNoaWxkKHNlY3Rpb24xKTtcbiAgbmF2LnJlbW92ZUNoaWxkKHNlY3Rpb24yKTtcbiAgc2VjdGlvbjEucmVtb3ZlQ2hpbGQoZGl2TG9nbyk7XG4gIGRpdkxvZ28ucmVtb3ZlQ2hpbGQobG9nbyk7XG4gIGRpdkxvZ28ucmVtb3ZlQ2hpbGQobG9nb1RpdGxlKTtcbiAgbG9nb1RpdGxlLnJlbW92ZUNoaWxkKGxvZ29UaXRsZVApO1xuICBzZWN0aW9uMi5yZW1vdmVDaGlsZChob21lKTtcbiAgc2VjdGlvbjIucmVtb3ZlQ2hpbGQobWVudSk7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKGNvbnRhY3QpO1xuICBzZWN0aW9uMi5yZW1vdmVDaGlsZChob3Vycyk7XG4gIGJvZHkucmVtb3ZlQ2hpbGQobWFpbik7XG4gIG1haW4ucmVtb3ZlQ2hpbGQoY2VudGVyKTtcbiAgY2VudGVyLnJlbW92ZUNoaWxkKHdlbGNvbWUpO1xuICBjZW50ZXIucmVtb3ZlQ2hpbGQoY2VudGVyTG9nbyk7XG4gIGNlbnRlckxvZ28ucmVtb3ZlQ2hpbGQobG9nb0JvZHkpO1xuICBjZW50ZXJMb2dvLnJlbW92ZUNoaWxkKGxvZ29Cb2R5VGl0bGUpO1xuICBjZW50ZXIucmVtb3ZlQ2hpbGQobW90dG8pO1xuICBjZW50ZXIucmVtb3ZlQ2hpbGQobWVudUxpbmspO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9