import {useState} from 'react';

/* Forked from: /github.com/mvolkmann/top-state-hook */

function isObject(value) {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

const stateMap = {};

export default function useSharedState(name, initialValue, notifier) {
  // Get a function that can be called later
  // to re-render the calling component.
  const [, setState] = useState();

  let state = stateMap[name];

  if (!state) {
    const setValue = pvalue => {
      let value = pvalue;
      if (typeof pvalue == 'function') {
        value = pvalue(state.value);
      }
      if (value !== state.value) {
        if (isObject(value)) {
          state.value = {...state.value, ...value};
        } else {
          state.value = value;
        }
        state.updaters.forEach(fn => fn(value));
      }
    };

    state = {
      name,
      setValue,
      updaters: new Set(),
      value: initialValue
    };
    stateMap[name] = state;
    if (notifier) state.updaters.add(notifier);
  }

  state.updaters.add(setState);
  return [state.value, state.setValue];
}
