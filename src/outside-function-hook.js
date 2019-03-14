import * as React from 'react';
import * as ReactDOM from 'react-dom';

const vElement = {
  nodeType: 1,
  tagName: 'b',
  childNodes: [],
  style: {}
};

export default function useHooksOutside(callback) {
  const Component = () => {
    callback();

    return null;
  };

  const rElement = React.createElement(Component, {});

  // create fake Element when not in React
  ReactDOM.render(rElement, vElement);

  return rElement;
}
