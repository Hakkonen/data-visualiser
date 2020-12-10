"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getRandomInt = _interopRequireDefault(require("./getRandomInt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function generateArray() {
  var numberArray = [];
  var arrayCounter = 0;

  while (arrayCounter < 10) {
    var newNumber = (0, _getRandomInt["default"])(20);

    if (!numberArray.includes(newNumber)) {
      numberArray.push(newNumber);
      arrayCounter += 1;
    }
  }

  return numberArray;
}

var _default = generateArray;
exports["default"] = _default;