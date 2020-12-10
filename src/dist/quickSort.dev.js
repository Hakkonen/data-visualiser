"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _quickSortPartition = _interopRequireDefault(require("./quickSortPartition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function quickSort(A, lo, hi) {
  if (lo < hi) {
    var p = (0, _quickSortPartition["default"])(A, lo, hi);
    quickSort(A, lo, p - 1);
    quickSort(A, p + 1, hi);
  }
}

var _default = quickSort;
exports["default"] = _default;