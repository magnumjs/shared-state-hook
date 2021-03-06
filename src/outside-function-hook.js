import * as React from 'react';
import * as ReactDOM from 'react-dom';

const vElement = {
  nodeType: 1,
  tagName: 'b',
  childNodes: [],
  style: {}
};

export default function useHooksOutside(callback) {
  let response;
  const Component = () => {
    response = callback();

    return null;
  };
  // create fake Element when not in React
  ReactDOM.render(React.createElement(Component, {}), vElement);

  return response;
}
