# shared-state-hook

[![npm (scoped)](https://img.shields.io/npm/v/shared-state-hook.svg)](https://www.npmjs.com/package/shared-state-hook)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/shared-state-hook.svg)](https://www.npmjs.com/package/shared-state-hook)

This is a module for React that implements a hook named `useSharedState` for managing application state. 
It is similar to the provided hook `useState`, but rather than associating the state with the component that uses the hook,
it stores the state outside of the component so it can be shared by many components.
 
 
 
## Install

```
$ npm install shared-state-hook
```

## Usage

```js
const useSharedState = require("shared-state-hook");

const [userInfo, setUserInfo] = useSharedState("userInfo", initialValues);
//=> "!"
```