"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function attachArray(id, array, name) {
  var div = document.getElementById(id);
  var numberList = document.createElement("ul");
  numberList.setAttribute("class", name);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var number = _step.value;
      var numberItem = document.createElement("li");
      var numberItemText = document.createTextNode(number);
      numberItem.appendChild(numberItemText);
      numberList.appendChild(numberItem);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (div.innerHTML) {
    div.innerHTML = "";
  }

  div.appendChild(numberList);
}

var _default = attachArray;
exports["default"] = _default;