import * as React from 'react';
import * as ReactDOM from 'react-dom';
var vElement = {
  nodeType: 1,
  tagName: 'b',
  childNodes: [],
  style: {}
};
export default function useHooksOutside(callback) {
  var Component = function Component() {
    callback();
    return null;
  };

  var rElement = React.createElement(Component, {}); // create fake Element when not in React

  ReactDOM.render(rElement, vElement);
  return rElement;
}