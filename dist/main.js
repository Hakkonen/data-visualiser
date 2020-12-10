/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attachArray.js":
/*!****************************!*
  !*** ./src/attachArray.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function attachArray(id, array) {
  var div = document.getElementById(id);
  var numberList = document.createElement("ul");

  var _iterator = _createForOfIteratorHelper(array),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var number = _step.value;
      var numberItem = document.createElement("li");
      var numberItemText = document.createTextNode(number);
      numberItem.appendChild(numberItemText);
      numberList.appendChild(numberItem);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (div.innerHTML) {
    div.innerHTML = "";
  }

  div.appendChild(numberList);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attachArray);

/***/ }),

/***/ "./src/generateArray.js":
/*!******************************!*
  !*** ./src/generateArray.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _getRandomInt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomInt */ "./src/getRandomInt.js");


function generateArray() {
  var numberArray = [];
  var arrayCounter = 0;

  while (arrayCounter < 10) {
    var newNumber = (0,_getRandomInt__WEBPACK_IMPORTED_MODULE_0__.default)(20);

    if (!numberArray.includes(newNumber)) {
      numberArray.push(newNumber);
      arrayCounter += 1;
    }
  }

  return numberArray;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateArray);

/***/ }),

/***/ "./src/getRandomInt.js":
/*!*****************************!*
  !*** ./src/getRandomInt.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomInt);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateArray */ "./src/generateArray.js");
/* harmony import */ var _attachArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attachArray */ "./src/attachArray.js");
/* harmony import */ var _quickSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickSort */ "./src/quickSort.js");




function main() {
  console.log("Main Start"); // Event listeners

  document.getElementById("quick-sort-sort-button").addEventListener("click", function () {
    console.log("Hello jello");
  });
  document.getElementById("quick-sort-reset-button").addEventListener("click", function () {
    quickSortBox();
  });

  function quickSortBox() {
    // Generate random array
    var quickSortBoxArray = (0,_generateArray__WEBPACK_IMPORTED_MODULE_0__.default)();
    console.log("Unsorted Numbers: ", quickSortBoxArray); // Attach to box

    (0,_attachArray__WEBPACK_IMPORTED_MODULE_1__.default)("quick-sort-id", quickSortBoxArray); // Sort

    (0,_quickSort__WEBPACK_IMPORTED_MODULE_2__.default)(quickSortBoxArray, 0, quickSortBoxArray.length - 1);
    console.log(quickSortBoxArray);
  }

  quickSortBox();
}

main();

/***/ }),

/***/ "./src/quickSort.js":
/*!**************************!*
  !*** ./src/quickSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _quickSortPartition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickSortPartition */ "./src/quickSortPartition.js");


function quickSort(A, lo, hi) {
  if (lo < hi) {
    var p = (0,_quickSortPartition__WEBPACK_IMPORTED_MODULE_0__.default)(A, lo, hi);
    quickSort(A, lo, p - 1);
    quickSort(A, p + 1, hi);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quickSort);

/***/ }),

/***/ "./src/quickSortPartition.js":
/*!***********************************!*
  !*** ./src/quickSortPartition.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function quickSortPartition(A, lo, hi) {
  // Pivot pointer := last index of array
  var pivot = A[hi]; // 'i' low pointer := first index of array

  var i = lo; // For length of partition, compare pointer to pivot

  for (var j = lo; j < hi; j++) {
    if (A[j] < pivot) {
      // Swap A[i] with A[j]
      var a = A[i];
      var b = A[j];
      A[i] = b;
      A[j] = a;
      i += 1;
    }
  } // Swap A[i] with A[hi]


  var c = A[i];
  var d = A[hi];
  A[hi] = c;
  A[i] = d; // Return last index

  return i;
} // quickSort(A, 0, length(A) - 1)


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quickSortPartition);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map