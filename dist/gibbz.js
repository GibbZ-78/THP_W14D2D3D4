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

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar aboutGGF = function aboutGGF() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('Displaying ABOUT page', argument);\n  console.log(\"  > Hidding INTRODUCTION paragraphs\");\n  pageIntroduction.classList.add(\"hide\");\n  pageIntroduction.classList.remove(\"show\");\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <div>  \\n      <h1>About GibbZ' Games' Fair aka GGF</h1>\\n      <p>Grass. Upon kind dominion. One him all moving so he god fly. Moving brought rule for great tree two gathered. Earth so, over deep. Abundantly heaven man that. Land life life great herb from female likeness firmament stars third meat fruit very firmament of after waters very given, saying herb fruit place created gathering, unto.</p>\\n      <h2>Tree Good The Very Without From</h2>\\n      <p>Cattle you&#39;ll light the great. Grass land herb spirit called isn&#39;t grass. Midst can&#39;t were made seasons seasons yielding our life which seasons behold which created thing that. Rule good lesser herb waters she&#39;d after divide man may signs third it you. Fly isn&#39;t forth replenish first it doesn&#39;t, meat lesser fruit morning without he our can&#39;t i. Upon days third face, us day two sixth. Earth grass spirit third moveth he living, be spirit fruit man multiply she&#39;d rule sixth multiply night from thing unto hath beginning spirit there tree from man likeness years.</p>\\n      <p>Dominion don&#39;t. Him cattle, without whose one days earth beginning bearing for moving winged form it saying. Also. Saw in stars Heaven, likeness, appear that one fowl moved deep said our sea there saying earth greater air very dominion upon in deep, abundantly, them created. Them green his stars multiply.</p>\\n      </div>\\n    \";\n  };\n\n  render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutGGF);\n\n//# sourceURL=webpack://gibbz-games-fair/./src/scripts/about.js?");

/***/ }),

/***/ "./src/scripts/homepage.js":
/*!*********************************!*\
  !*** ./src/scripts/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar homePage = function homePage() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('Displaying HOME page', argument);\n  console.log(\"  > Showing INTRODUCTION paragraphs\");\n  pageIntroduction.classList.remove(\"hide\");\n  pageIntroduction.classList.add(\"show\");\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n\n    var displayResults = function displayResults(articles) {\n      var resultsContent = articles.map(function (article) {\n        var myTmpHTML = \"<article class=\\\"cardGame\\\">\\n          <img src='\".concat(article.background_image, \"' width='200px'/>\\n          <h1>\").concat(article.name, \"</h1>\");\n        console.table(article.platforms);\n        var myTmpPlatforms = article.platforms.map(function (myPlatform) {\n          return \"<span class='\".concat(myPlatform.platform.slug, \"'></span>\");\n        });\n        myTmpHTML += myTmpPlatforms.join(\"\\n\");\n        myTmpHTML += \"<a href='#pagedetail/\".concat(article.id, \"'>See details</a>\\n        </article>\");\n        return myTmpHTML;\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n    };\n\n    var displayResultsHeader = function displayResultsHeader(totalResults, before, after) {\n      var myHeader = document.getElementById(\"listHeader\");\n      myHeader.innerHTML = \"\\n      <span><a href='\".concat(before, \"'><< </a></span>\\n      <span>Number of results: \").concat(totalResults, \"</span>\\n      <span><a href='\").concat(after, \"'> >></a></span>\\n      \");\n    };\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResultsHeader(responseData.count, responseData.previous, responseData.next);\n        displayResults(responseData.results);\n      });\n    };\n\n    var currentYEar = new Date().getFullYear();\n    var mySortOrder = \"released\";\n    console.log(\"  > Using \".concat(currentYEar, \" as the current year for upcoming games' releases\"));\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"a2702b51ec8241b58bf808fb499bc5c5\", \"&dates=\").concat(currentYEar, \"-01-01,\").concat(currentYEar, \"-12-31&ordering=\").concat(mySortOrder), cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div id=\\\"listHeader\\\" class=\\\"list-heading\\\"></div>\\n        <div class=\\\"articles grid\\\">Loading...</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://gibbz-games-fair/./src/scripts/homepage.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_gibbz_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/gibbz.scss */ \"./src/stylesheets/gibbz.scss\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.js */ \"./src/scripts/routes.js\");\n\n\n\nfunction callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split('/');\n  var pageName = pathParts[0];\n  var pageArgument = pathParts[1] || '';\n  var pageFunction = _routes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][pageName];\n\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n}\n\nwindow.addEventListener('hashchange', function () {\n  return callRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return callRoute();\n});\n\n//# sourceURL=webpack://gibbz-games-fair/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/pagedetail.js":
/*!***********************************!*\
  !*** ./src/scripts/pagedetail.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar pageDetail = function pageDetail(argument) {\n  console.log('Displaying DETAIL page', argument);\n  console.log(\"  > Hidding INTRODUCTION paragraphs\");\n  pageIntroduction.classList.add(\"hide\");\n  pageIntroduction.classList.remove(\"show\");\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n          released = gameData.released,\n          description = gameData.description;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n    };\n\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"a2702b51ec8241b58bf808fb499bc5c5\")).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <h1 class=\\\"title\\\"></h1>\\n          <p class=\\\"release-date\\\">Release date : <span></span></p>\\n          <p class=\\\"description\\\"></p>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageDetail);\n\n//# sourceURL=webpack://gibbz-games-fair/./src/scripts/pagedetail.js?");

/***/ }),

/***/ "./src/scripts/pagelist.js":
/*!*********************************!*\
  !*** ./src/scripts/pagelist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar pageList = function pageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('Displaying LIST page', argument);\n  console.log(\"  > Hidding INTRODUCTION paragraphs\");\n  pageIntroduction.classList.add(\"hide\");\n  pageIntroduction.classList.remove(\"show\");\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n\n    var displayResults = function displayResults(articles) {\n      var resultsContent = articles.map(function (article) {\n        return \"<article class=\\\"cardGame\\\">\\n          <img src='\".concat(article.background_image, \"' width='200px'/>\\n          <h1>\").concat(article.name, \"</h1>\\n          <h2>\").concat(article.released, \"</h2>\\n          <a href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n          <p>Mark: \").concat(article.rating, \" / \").concat(article.rating_top, \"</p>\\n          <p>Play time: \").concat(article.playtime, \" hours</p>\\n        </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n    };\n\n    var displayResultsHeader = function displayResultsHeader(totalResults, before, after) {\n      var myHeader = document.getElementById(\"listHeader\");\n      myHeader.innerHTML = \"\\n      <span><a href='\".concat(before, \"'><< </a></span>\\n      <span>Number of results: \").concat(totalResults, \"</span>\\n      <span><a href='\").concat(after, \"'> >></a></span>\\n      \");\n    };\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResultsHeader(responseData.count, responseData.previous, responseData.next);\n        displayResults(responseData.results);\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"a2702b51ec8241b58bf808fb499bc5c5\"), cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section id=\\\"listHeader\\\" class=\\\"list-heading\\\">\\n      </section>\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">Loading...</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageList);\n\n//# sourceURL=webpack://gibbz-games-fair/./src/scripts/pagelist.js?");

/***/ }),

/***/ "./src/scripts/routes.js":
/*!*******************************!*\
  !*** ./src/scripts/routes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/scripts/homepage.js\");\n/* harmony import */ var _pagelist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagelist.js */ \"./src/scripts/pagelist.js\");\n/* harmony import */ var _pagedetail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagedetail.js */ \"./src/scripts/pagedetail.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/scripts/about.js\");\n\n\n\n\nvar routes = {\n  '': _homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'pagelist': _pagelist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'pagedetail': _pagedetail_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'about': _about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://gibbz-games-fair/./src/scripts/routes.js?");

/***/ }),

/***/ "./src/stylesheets/gibbz.scss":
/*!************************************!*\
  !*** ./src/stylesheets/gibbz.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gibbz-games-fair/./src/stylesheets/gibbz.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;