/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _coffee_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffee.svg */ \"./src/coffee.svg\");\n\n\nconst body = document.querySelector('body');\nconst nav = document.createElement('nav');\nconst section1 = document.createElement('section');\nsection1.classList.add('section1');\nconst section2 = document.createElement('section');\nsection2.classList.add('section2');\nconst divLogo = document.createElement('div');\nconst logo = new Image();\nlogo.src = _coffee_svg__WEBPACK_IMPORTED_MODULE_0__;\nconst logoTitle = document.createElement('div');\nconst logoTitleP = document.createElement('p');\nlogoTitleP.innerText = 'Coffe J';\nconst home = document.createElement('a');\nhome.innerText = 'Home';\nconst menu = document.createElement('a');\nmenu.innerText = 'Menu';\nconst contact = document.createElement('a');\ncontact.innerText = 'Contact';\nconst hours = document.createElement('a');\nhours.innerText = 'Hours';\nconst main = document.createElement('main');\nconst center = document.createElement('div');\ncenter.classList.add('center');\nconst welcome = document.createElement('div');\nwelcome.classList.add('welcome');\nwelcome.innerText = 'Welcome!';\nconst centerLogo = document.createElement('div');\ncenterLogo.classList.add('centerLogo');\nconst logoBody = new Image();\nlogoBody.src = _coffee_svg__WEBPACK_IMPORTED_MODULE_0__;\nconst logoBodyTitle = document.createElement('div');\nlogoBodyTitle.innerText = 'COFFE J';\nconst motto = document.createElement('div');\nmotto.classList.add('motto');\nmotto.innerText = 'Serving the best breakfasts in the Dominican Republic!';\nconst menuLink = document.createElement('a');\nmenuLink.classList.add('menuLink');\nmenuLink.innerText = 'CHECK OUT OUR MENU';\n\nfunction homePage() {\n  body.appendChild(nav);\n  nav.appendChild(section1);\n  nav.appendChild(section2);\n  section1.appendChild(divLogo);\n  divLogo.appendChild(logo);\n  divLogo.appendChild(logoTitle);\n  logoTitle.appendChild(logoTitleP);\n  section2.appendChild(home);\n  section2.appendChild(menu);\n  section2.appendChild(contact);\n  section2.appendChild(hours);\n  body.appendChild(main);\n  main.appendChild(center);\n  center.appendChild(welcome);\n  center.appendChild(centerLogo);\n  centerLogo.appendChild(logoBody);\n  centerLogo.appendChild(logoBodyTitle);\n  center.appendChild(motto);\n  center.appendChild(menuLink);\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/coffee.svg":
/*!************************!*\
  !*** ./src/coffee.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2cbc4bbd643d725c80ed.svg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/coffee.svg?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;