import {useState, useEffect} from 'react';

/* Forked from: /github.com/mvolkmann/top-state-hook */

function isObject(value) {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

const stateMap = {};

const copy = val => isObject(val) ? Object.assign({}, val): val


export default function useSharedState(name, initialValue, notifier) {
  // Get a function that can be called later
  // to re-render the calling component.
  const [, setState] = useState();

  let state = stateMap[name];

  if (!state) {
    const setValue = pvalue => {
      let temp
      if (typeof pvalue == 'function') {
        temp = pvalue(state.value);
      }
       let value = copy(temp?temp:pvalue)

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
      value: copy(initialValue)
    };
    stateMap[name] = state;
    if (notifier) state.updaters.add(notifier);
  }

  //remove on unmounting
  useEffect(() => {
    state.updaters.add(setState);
    return () => {
      state.updaters.delete(setState);
    };
  }, [state.value]);

  return [state.value, state.setValue];
}
