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
/* harmony export */   "menu2": () => (/* binding */ menu2),
/* harmony export */   "menuCard": () => (/* binding */ menuCard),
/* harmony export */   "menuCardClear": () => (/* binding */ menuCardClear)
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdDQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0MsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjb2ZmZSBmcm9tICcuL2NvZmZlZS5zdmcnO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbmNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuc2VjdGlvbjEuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbjEnKTtcbmNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuc2VjdGlvbjIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbjInKTtcbmNvbnN0IGRpdkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbmxvZ28uc3JjID0gY29mZmU7XG5jb25zdCBsb2dvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGxvZ29UaXRsZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5sb2dvVGl0bGVQLmlubmVyVGV4dCA9ICdDb2ZmZSBKJztcbmV4cG9ydCBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5ob21lLmlubmVyVGV4dCA9ICdIb21lJztcbmV4cG9ydCBjb25zdCBtZW51MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbm1lbnUyLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbm1lbnUyLmlubmVyVGV4dCA9ICdNZW51JztcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5jb250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0cyc7XG5leHBvcnQgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5ob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuaG91cnMuaW5uZXJUZXh0ID0gJ0hvdXJzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51LmNsYXNzTGlzdC5hZGQoJ21lbnVDYXJkJyk7XG5jb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51VGl0bGUnKTtcbm1lbnVUaXRsZS5pbm5lclRleHQgPSAnQ29mZmUgTWVudSc7XG5jb25zdCBob3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvdC5jbGFzc0xpc3QuYWRkKCdob3QnKTtcbmNvbnN0IGhvdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdob3RUaXRsZScpO1xuaG90VGl0bGUuaW5uZXJUZXh0ID0gJ0hvdCc7XG5jb25zdCBob3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmhvdExpc3QuY2xhc3NMaXN0LmFkZCgnaG90TGlzdCcpO1xuY29uc3QgY29sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29sZC5jbGFzc0xpc3QuYWRkKCdjb2xkJyk7XG5jb25zdCBjb2xkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbGRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb2xkVGl0bGUnKTtcbmNvbGRUaXRsZS5pbm5lclRleHQgPSAnQ29sZCc7XG5jb25zdCBjb2xkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5jb2xkTGlzdC5jbGFzc0xpc3QuYWRkKCdjb2xkTGlzdCcpO1xuXG5jb25zdCBob3RBcnIgPSBbXG4gICdBbWVyaWNhbm8gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDYwIFJEJCcsXG4gICdCcmV3ZWQgQ29mZmVlcyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDgwIFJEJCcsXG4gICdDYXBwdWNjaW5vIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDEwMCBSRCQnLFxuICAnRXNwcmVzc28gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiA4MCBSRCQnLFxuICAnRmxhdCBXaGl0ZSAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDkwIFJEJCcsXG4gICdMYXR0ZSAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDgwIFJEJCcsXG4gICdNYWNjaGlhdG8gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiAxMjAgUkQkJyxcbiAgJ01vY2hhcyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gMTEwIFJEJCcsXG5dO1xuXG5jb25zdCBjb2xkQXJyID0gW1xuICAnUmVmcmVzaGVyIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDYwIFJEJCcsXG4gICdKdWljZSAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIDgwIFJEJCcsXG4gICdNaWxrIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gMTAwIFJEJCcsXG4gICdTcGFya2xpbmcgV2F0ZXIgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gODAgUkQkJyxcbiAgJ1dhdGVyIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gOTAgUkQkJyxcbl07XG5cbmZ1bmN0aW9uIEhvdGFyckxpc3RlcihBcnIpIHtcbiAgQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBob3RMaXN0LmlubmVySFRNTCArPSBgPGxpPiAke2VsZW1lbnR9IDwvbGk+YDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIENvbGRhcnJMaXN0ZXIoQXJyKSB7XG4gIEFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29sZExpc3QuaW5uZXJIVE1MICs9IGA8bGk+ICR7ZWxlbWVudH0gPC9saT5gO1xuICB9KTtcbn1cblxuSG90YXJyTGlzdGVyKGhvdEFycik7XG5Db2xkYXJyTGlzdGVyKGNvbGRBcnIpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudUNhcmQoKSB7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgbmF2LmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcbiAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoZGl2TG9nbyk7XG4gIGRpdkxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGRpdkxvZ28uYXBwZW5kQ2hpbGQobG9nb1RpdGxlKTtcbiAgbG9nb1RpdGxlLmFwcGVuZENoaWxkKGxvZ29UaXRsZVApO1xuICBzZWN0aW9uMi5hcHBlbmRDaGlsZChob21lKTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQobWVudTIpO1xuICBzZWN0aW9uMi5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgbWVudS5hcHBlbmRDaGlsZChob3QpO1xuICBob3QuYXBwZW5kQ2hpbGQoaG90VGl0bGUpO1xuICBob3QuYXBwZW5kQ2hpbGQoaG90TGlzdCk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY29sZCk7XG4gIGNvbGQuYXBwZW5kQ2hpbGQoY29sZFRpdGxlKTtcbiAgY29sZC5hcHBlbmRDaGlsZChjb2xkTGlzdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51Q2FyZENsZWFyKCkge1xuICBib2R5LnJlbW92ZUNoaWxkKG5hdik7XG4gIG5hdi5yZW1vdmVDaGlsZChzZWN0aW9uMSk7XG4gIG5hdi5yZW1vdmVDaGlsZChzZWN0aW9uMik7XG4gIHNlY3Rpb24xLnJlbW92ZUNoaWxkKGRpdkxvZ28pO1xuICBkaXZMb2dvLnJlbW92ZUNoaWxkKGxvZ28pO1xuICBkaXZMb2dvLnJlbW92ZUNoaWxkKGxvZ29UaXRsZSk7XG4gIGxvZ29UaXRsZS5yZW1vdmVDaGlsZChsb2dvVGl0bGVQKTtcbiAgc2VjdGlvbjIucmVtb3ZlQ2hpbGQoaG9tZSk7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKG1lbnUyKTtcbiAgc2VjdGlvbjIucmVtb3ZlQ2hpbGQoY29udGFjdCk7XG4gIHNlY3Rpb24yLnJlbW92ZUNoaWxkKGhvdXJzKTtcbiAgYm9keS5yZW1vdmVDaGlsZChtYWluKTtcbiAgbWFpbi5yZW1vdmVDaGlsZChtZW51KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==