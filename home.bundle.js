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
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "homePage": () => (/* binding */ homePage),
/* harmony export */   "homePageClear": () => (/* binding */ homePageClear),
/* harmony export */   "hours": () => (/* binding */ hours),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "menuLink": () => (/* binding */ menuLink)
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdDQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0NBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNvZmZlIGZyb20gJy4vY29mZmVlLnN2Zyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbmNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuc2VjdGlvbjEuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbjEnKTtcbmNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuc2VjdGlvbjIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbjInKTtcbmNvbnN0IGRpdkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbmxvZ28uc3JjID0gY29mZmU7XG5jb25zdCBsb2dvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGxvZ29UaXRsZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5sb2dvVGl0bGVQLmlubmVyVGV4dCA9ICdDb2ZmZSBKJztcbmV4cG9ydCBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5ob21lLmlubmVyVGV4dCA9ICdIb21lJztcbmV4cG9ydCBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5tZW51LmlubmVyVGV4dCA9ICdNZW51JztcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5jb250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0cyc7XG5leHBvcnQgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5ob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuaG91cnMuaW5uZXJUZXh0ID0gJ0hvdXJzJztcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5jb25zdCBjZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNlbnRlci5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcbmNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbndlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xud2VsY29tZS5pbm5lclRleHQgPSAnV2VsY29tZSEnO1xuY29uc3QgY2VudGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2VudGVyTG9nby5jbGFzc0xpc3QuYWRkKCdjZW50ZXJMb2dvJyk7XG5jb25zdCBsb2dvQm9keSA9IG5ldyBJbWFnZSgpO1xubG9nb0JvZHkuc3JjID0gY29mZmU7XG5jb25zdCBsb2dvQm9keVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2dvQm9keVRpdGxlLmlubmVyVGV4dCA9ICdDT0ZGRSBKJztcbmNvbnN0IG1vdHRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tb3R0by5jbGFzc0xpc3QuYWRkKCdtb3R0bycpO1xubW90dG8uaW5uZXJUZXh0ID0gJ1NlcnZpbmcgdGhlIGJlc3QgY29mZmUgaW4gdGhlIERvbWluaWNhbiBSZXB1YmxpYyEnO1xuZXhwb3J0IGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xubWVudUxpbmsuY2xhc3NMaXN0LmFkZCgnbWVudUxpbmsnKTtcbm1lbnVMaW5rLmlubmVyVGV4dCA9ICdDSEVDSyBPVVQgT1VSIE1FTlUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgbmF2LmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcbiAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoZGl2TG9nbyk7XG4gIGRpdkxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGRpdkxvZ28uYXBwZW5kQ2hpbGQobG9nb1RpdGxlKTtcbiAgbG9nb1RpdGxlLmFwcGVuZENoaWxkKGxvZ29UaXRsZVApO1xuICBzZWN0aW9uMi5hcHBlbmRDaGlsZChob21lKTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIHNlY3Rpb24yLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICBzZWN0aW9uMi5hcHBlbmRDaGlsZChob3Vycyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2VudGVyKTtcbiAgY2VudGVyLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICBjZW50ZXIuYXBwZW5kQ2hpbGQoY2VudGVyTG9nbyk7XG4gIGNlbnRlckxvZ28uYXBwZW5kQ2hpbGQobG9nb0JvZHkpO1xuICBjZW50ZXJMb2dvLmFwcGVuZENoaWxkKGxvZ29Cb2R5VGl0bGUpO1xuICBjZW50ZXIuYXBwZW5kQ2hpbGQobW90dG8pO1xuICBjZW50ZXIuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2VDbGVhcigpIHtcbiAgYm9keS5yZW1vdmVDaGlsZChuYXYpO1xuICBuYXYucmVtb3ZlQ2hpbGQoc2VjdGlvbjEpO1xuICBuYXYucmVtb3ZlQ2hpbGQoc2VjdGlvbjIpO1xuICBzZWN0aW9uMS5yZW1vdmVDaGlsZChkaXZMb2dvKTtcbiAgZGl2TG9nby5yZW1vdmVDaGlsZChsb2dvKTtcbiAgZGl2TG9nby5yZW1vdmVDaGlsZChsb2dvVGl0bGUpO1xuICBsb2dvVGl0bGUucmVtb3ZlQ2hpbGQobG9nb1RpdGxlUCk7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKGhvbWUpO1xuICBzZWN0aW9uMi5yZW1vdmVDaGlsZChtZW51KTtcbiAgc2VjdGlvbjIucmVtb3ZlQ2hpbGQoY29udGFjdCk7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKGhvdXJzKTtcbiAgYm9keS5yZW1vdmVDaGlsZChtYWluKTtcbiAgbWFpbi5yZW1vdmVDaGlsZChjZW50ZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9