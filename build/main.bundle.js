/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textInput__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__textInput__);








/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Header {

  constructor(root) {
      this.root = root[0];
      this.initialize();
  }

  initialize(){
    let header = document.createElement('header');
    let main  = document.querySelector('.layout');
    this.root.insertBefore(header, main);
    header.style.height = '1.5rem';
    header.style.width = '100vw';
  }

}


new Header(document.getElementsByTagName('body'))


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Layout{

    constructor(root) {
        this.root = root;
        this.parent = document.getElementsByTagName("body")[0];
        this.initialize();
        this.boxBkgdPrimary = ['blue','qa-blue'];
        this.boxBkgdSecondary = ['red','qa-red'];
    }

    initialize() {
        console.log(this.root);
        this.createButton();
        this.createColorDiv();

    }

    createColorDiv() {
        let boxList = ['main-div', 'qa-main-div'];
        let colorDiv = document.createElement('div')
        this.root.appendChild(colorDiv)
        colorDiv.classList.add(...boxList);
    }

    test(val){
      let arr = ['main-div', 'qa-main-div']
      return [...arr, ...val];
    }

    createButton() {
        let nextButton = document.createElement('button')
        this.root.appendChild(nextButton)
        nextButton.innerText = 'Submit'
        nextButton.setAttribute('class', 'qa-button')
        nextButton.addEventListener('click', this.toggleColor.bind(this))
    }

    toggleColor(){
      let _this = this;
      let box = document.querySelector('.main-div');
      let current = box.getAttribute('class').indexOf(this.boxBkgdPrimary[1]);
      box.className = '';
      if(current === -1){
        box.classList.add(...this.test(this.boxBkgdPrimary))
      }else{
        box.classList.add(...this.test(this.boxBkgdSecondary))
      }
    }
}

new Layout(document.querySelector('.layout'));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class TextInput {

    constructor(root) {
        this.root = root[0];
        this.initialize()
    }

    initialize() {
        console.log('Init')
        let layout = document.querySelector('.layout');
        let input = document.createElement('input');
        layout.appendChild(input)
        input.value = "Hello George";

    }

}

new TextInput(document.getElementsByTagName('body'));


/***/ })
/******/ ]);