"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksynthesiscapital"] = self["webpackChunksynthesiscapital"] || []).push([["home"],{

/***/ "./js/src/components/home-intro.js":
/*!*****************************************!*\
  !*** ./js/src/components/home-intro.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeIntro\": () => (/* binding */ homeIntro)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.default.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\n\nfunction homeIntro() {\n\n  function invertBgGrad(){\n    document.querySelector('.page-reveal').classList.toggle('page-reveal--home');\n  }\n  invertBgGrad();\n\n  let bgGrad = document.createElement('div');\n  bgGrad.classList.add('hero-bg-gradient');\n  document.querySelector('.hero-home').append(bgGrad);\n\n  let tl = gsap__WEBPACK_IMPORTED_MODULE_0__.default.timeline({\n    onComplete: () => { invertBgGrad(); }\n  });\n    tl.fromTo('.home ul.menu li', {\n      autoAlpha: 0\n    }, {\n      autoAlpha: 1,\n      stagger: {\n        each: .25\n      },\n      duration: 2,\n      ease: 'power3.out'\n    }, 2.75)\n    .fromTo( '.site-header .logo', {\n      autoAlpha: 0\n    }, {\n      autoAlpha: 1,\n      duration: 1\n    }, 3.75)\n    .fromTo( 'lottie-player', {\n      autoAlpha: 0\n    }, {\n      autoAlpha: 1,\n      stagger: {\n        each: .125,\n      },\n      duration: 2\n    }, 0.25 )\n    .to('#logo-fill', {\n      yPercent: 66.6666,\n    }, 0)\n    .fromTo('.home .hero-home h1', {\n      autoAlpha: 0\n    }, {\n      autoAlpha: 1,\n      duration: 2,\n      ease: 'power3.inOut'\n    }, 1)\n    .fromTo('.home .hero-home p', {\n      autoAlpha: 0\n    }, {\n      autoAlpha: 1,\n      duration: 2,\n      ease: 'power3.inOut'\n    }, 1.25)\n    .fromTo('.home .hero-home .hero-bg-gradient', {\n      transformOrigin: '50% 100%',\n      scaleY: 0.4\n    }, {\n      scaleY: 1,\n      ease: 'power2.inOut',\n      duration: 2\n    }, 0)\n    ;\n\n  gsap__WEBPACK_IMPORTED_MODULE_0__.default.fromTo('#logo-fill', {\n    yPercent: 66.6666\n  }, {\n    yPercent: 0,\n    scrollTrigger: {\n      trigger: '.hero-home',\n      start: '90% top',\n      end: '90.1% top',\n      toggleActions: 'play none reverse none ',\n      overwrite: true\n    }\n  })\n\n} \n\n\n\n//# sourceURL=webpack://synthesiscapital/./js/src/components/home-intro.js?");

/***/ }),

/***/ "./js/src/home.js":
/*!************************!*\
  !*** ./js/src/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home_intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home-intro.js */ \"./js/src/components/home-intro.js\");\n\n\n(0,_components_home_intro_js__WEBPACK_IMPORTED_MODULE_0__.homeIntro)();\n\n//# sourceURL=webpack://synthesiscapital/./js/src/home.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./js/src/home.js"));
/******/ }
]);