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
/* harmony export */   "center": () => (/* binding */ center),
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "homePage": () => (/* binding */ homePage),
/* harmony export */   "hours": () => (/* binding */ hours),
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
contact.innerText = 'Contact';
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
motto.innerText = 'Serving the best breakfasts in the Dominican Republic!';
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0NBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3Q0FBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjb2ZmZSBmcm9tICcuL2NvZmZlZS5zdmcnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5jb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbnNlY3Rpb24xLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24xJyk7XG5jb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbnNlY3Rpb24yLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24yJyk7XG5jb25zdCBkaXZMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG5sb2dvLnNyYyA9IGNvZmZlO1xuY29uc3QgbG9nb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBsb2dvVGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubG9nb1RpdGxlUC5pbm5lclRleHQgPSAnQ29mZmUgSic7XG5leHBvcnQgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuaG9tZS5pbm5lclRleHQgPSAnSG9tZSc7XG5leHBvcnQgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xubWVudS5pbm5lclRleHQgPSAnTWVudSc7XG5leHBvcnQgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuY29udGFjdC5pbm5lclRleHQgPSAnQ29udGFjdCc7XG5leHBvcnQgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5ob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuaG91cnMuaW5uZXJUZXh0ID0gJ0hvdXJzJztcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5leHBvcnQgY29uc3QgY2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jZW50ZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG5jb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcbndlbGNvbWUuaW5uZXJUZXh0ID0gJ1dlbGNvbWUhJztcbmNvbnN0IGNlbnRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNlbnRlckxvZ28uY2xhc3NMaXN0LmFkZCgnY2VudGVyTG9nbycpO1xuY29uc3QgbG9nb0JvZHkgPSBuZXcgSW1hZ2UoKTtcbmxvZ29Cb2R5LnNyYyA9IGNvZmZlO1xuY29uc3QgbG9nb0JvZHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9nb0JvZHlUaXRsZS5pbm5lclRleHQgPSAnQ09GRkUgSic7XG5jb25zdCBtb3R0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubW90dG8uY2xhc3NMaXN0LmFkZCgnbW90dG8nKTtcbm1vdHRvLmlubmVyVGV4dCA9ICdTZXJ2aW5nIHRoZSBiZXN0IGJyZWFrZmFzdHMgaW4gdGhlIERvbWluaWNhbiBSZXB1YmxpYyEnO1xuY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5tZW51TGluay5jbGFzc0xpc3QuYWRkKCdtZW51TGluaycpO1xubWVudUxpbmsuaW5uZXJUZXh0ID0gJ0NIRUNLIE9VVCBPVVIgTUVOVSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgYm9keS5hcHBlbmRDaGlsZChuYXYpO1xuICBuYXYuYXBwZW5kQ2hpbGQoc2VjdGlvbjEpO1xuICBuYXYuYXBwZW5kQ2hpbGQoc2VjdGlvbjIpO1xuICBzZWN0aW9uMS5hcHBlbmRDaGlsZChkaXZMb2dvKTtcbiAgZGl2TG9nby5hcHBlbmRDaGlsZChsb2dvKTtcbiAgZGl2TG9nby5hcHBlbmRDaGlsZChsb2dvVGl0bGUpO1xuICBsb2dvVGl0bGUuYXBwZW5kQ2hpbGQobG9nb1RpdGxlUCk7XG4gIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvbWUpO1xuICBzZWN0aW9uMi5hcHBlbmRDaGlsZChtZW51KTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjZW50ZXIpO1xuICBjZW50ZXIuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gIGNlbnRlci5hcHBlbmRDaGlsZChjZW50ZXJMb2dvKTtcbiAgY2VudGVyTG9nby5hcHBlbmRDaGlsZChsb2dvQm9keSk7XG4gIGNlbnRlckxvZ28uYXBwZW5kQ2hpbGQobG9nb0JvZHlUaXRsZSk7XG4gIGNlbnRlci5hcHBlbmRDaGlsZChtb3R0byk7XG4gIGNlbnRlci5hcHBlbmRDaGlsZChtZW51TGluayk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=