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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar tileSize;\r\nvar Snake = /** @class */ (function () {\r\n    function Snake() {\r\n        this.x = 5;\r\n        this.y = 5;\r\n    }\r\n    return Snake;\r\n}());\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n        this.ctx = canvas.getContext(\"2d\");\r\n        tileSize = canvas.offsetHeight / 8;\r\n        this.snake = new Snake();\r\n    }\r\n    Game.prototype.render = function () {\r\n        console.log(\"Render\");\r\n        this.snake.x += 1;\r\n        this.showGrid();\r\n        this.renderSnake();\r\n    };\r\n    Game.prototype.renderSnake = function () {\r\n        this.ctx.beginPath();\r\n        this.ctx.fillStyle = \"green\";\r\n        this.ctx.fillRect(this.snake.x * tileSize, this.snake.y * tileSize, tileSize, tileSize);\r\n    };\r\n    Game.prototype.showGrid = function () {\r\n        this.ctx.beginPath();\r\n        this.ctx.fillStyle = \"black\";\r\n        for (var i = 0; i < 8; i++) {\r\n            for (var ii = 0; ii < 8; ii++) {\r\n                if ((i + ii) % 2 == 0) {\r\n                    this.ctx.rect(i * tileSize, ii * tileSize, tileSize, tileSize);\r\n                }\r\n                else {\r\n                    this.ctx.fillRect(i * tileSize, ii * tileSize, tileSize, tileSize);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return Game;\r\n}());\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.game = new Game();\r\n    }\r\n    App.prototype.gameloop = function () {\r\n        requestAnimationFrame(this.gameloop.bind(this));\r\n        this.game.render();\r\n    };\r\n    return App;\r\n}());\r\nvar canvas;\r\ncanvas = document.getElementById(\"my-canvas\");\r\nvar app;\r\napp = new App();\r\napp.gameloop();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });