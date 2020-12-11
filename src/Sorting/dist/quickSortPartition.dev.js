"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _attachArray = _interopRequireDefault(require("../DOM/attachArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function quickSortPartition(A, lo, hi) {
  // Update HTML array
  (0, _attachArray["default"])("quick-sort-id", A, "quick-ul"); // Define DOM element for visualiser

  var sortingList = document.getElementsByTagName("ul")[0]; // Pivot pointer := last index of array

  var pivot = A[hi]; // 'i' low pointer := first index of array

  var i = lo; // For length of partition, compare pointer to pivot

  for (var j = lo; j < hi; j++) {
    if (A[j] < pivot) {
      // Swap A[i] with A[j]
      var a = A[i];
      var b = A[j];
      A[i] = b;
      A[j] = a;
      i += 1; // Change lower than colour

      sortingList.getElementsByTagName("li")[j].style.color = "rgb(10, 132, 255)";
    }
  } // Swap A[i] with A[hi]


  var c = A[i];
  var d = A[hi];
  A[hi] = c;
  A[i] = d; // Change higher than colour

  sortingList.getElementsByTagName("li")[hi].style.color = "rgb(255, 69, 58)"; // Change pivot colour

  sortingList.getElementsByTagName("li")[i].style.color = "rgb(255, 159, 10)"; // Return last index

  return i;
} // quickSort(A, 0, length(A) - 1)


var _default = quickSortPartition;
exports["default"] = _default;