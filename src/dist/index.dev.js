"use strict";

var _generateArray = _interopRequireDefault(require("./generateArray"));

var _attachArray = _interopRequireDefault(require("./DOM/attachArray"));

var _quickSort = _interopRequireDefault(require("./Sorting/quickSort"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function main() {
  console.log("Main Start"); // VARIABLE ARRAYS
  // Quick Sort

  var quickSortArray = []; // EVENT LISTENERS
  // Quick Sort

  document.getElementById("quick-sort-sort-button").addEventListener("click", function () {
    (0, _quickSort["default"])(quickSortArray, 0, quickSortArray.length - 1);
  });
  document.getElementById("quick-sort-reset-button").addEventListener("click", function () {
    quickSortArray = (0, _generateArray["default"])(10);
    console.log("Unsorted Numbers: ", quickSortArray);
    (0, _attachArray["default"])("quick-sort-id", quickSortArray);
  });
}

main();