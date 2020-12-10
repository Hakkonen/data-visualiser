"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function swap(a, b) {
  var i = a;
  var j = b;
  var swap = j;
  j = i;
  i = swap;
  return [b, a];
}

var _default = swap;
exports["default"] = _default;