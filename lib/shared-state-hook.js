function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import { useState, useEffect } from 'react';
/* Forked from: /github.com/mvolkmann/top-state-hook */

function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

var stateMap = {};
export default function useSharedState(name, initialValue, notifier) {
  // Get a function that can be called later
  // to re-render the calling component.
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      setState = _useState2[1];

  var state = stateMap[name];

  if (!state) {
    var setValue = function setValue(pvalue) {
      var value = pvalue;

      if (typeof pvalue == 'function') {
        value = pvalue(state.value);
      }

      if (value !== state.value) {
        if (isObject(value)) {
          state.value = _objectSpread({}, state.value, value);
        } else {
          state.value = value;
        }

        state.updaters.forEach(function (fn) {
          return fn(value);
        });
      }
    };

    state = {
      name: name,
      setValue: setValue,
      updaters: new Set(),
      value: initialValue
    };
    stateMap[name] = state;
    if (notifier) state.updaters.add(notifier);
  }

  state.updaters.add(setState); //remove on unmounting

  useEffect(function () {
    return function () {
      state.updaters.delete(setState);
    };
  });
  return [state.value, state.setValue];
}