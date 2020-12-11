"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _quickSortPartition = _interopRequireDefault(require("./quickSortPartition"));

var _attachArray = _interopRequireDefault(require("../DOM/attachArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function quickSort(A, lo, hi) {
  if (lo < hi) {
    setTimeout(function () {
      var p = (0, _quickSortPartition["default"])(A, lo, hi);
      quickSort(A, lo, p - 1);
      quickSort(A, p + 1, hi);
    }, 3500);
  } else {
    // Renders final state
    var finished = false;

    for (var n = 0; n < A.length - 1; n++) {
      if (A[n] < A[n + 1]) {
        finished = true;
      } else {
        finished = false;
        break;
      }
    }

    if (finished) {
      // Update HTML array
      (0, _attachArray["default"])("quick-sort-id", A, "quick-ul");
    }
  }
}

var _default = quickSort;
exports["default"] = _default;