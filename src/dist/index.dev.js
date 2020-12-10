"use strict";

var _generateArray = _interopRequireDefault(require("./generateArray"));

var _attachArray = _interopRequireDefault(require("./attachArray"));

var _quickSort = _interopRequireDefault(require("./quickSort"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    var quickSortBoxArray = (0, _generateArray["default"])();
    console.log("Unsorted Numbers: ", quickSortBoxArray); // Attach to box

    (0, _attachArray["default"])("quick-sort-id", quickSortBoxArray); // Sort

    (0, _quickSort["default"])(quickSortBoxArray, 0, quickSortBoxArray.length - 1);
    console.log(quickSortBoxArray);
  }

  quickSortBox();
}

main();