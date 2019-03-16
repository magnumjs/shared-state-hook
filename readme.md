# shared-state-hook

[![npm (scoped)](https://img.shields.io/npm/v/shared-state-hook.svg)](https://www.npmjs.com/package/shared-state-hook)
[![npm bundle size (minified)](https://img.shields.io/github/size/magnumjs/shared-state-hook/dist/shared-state-hook.min.js.svg)](https://unpkg.com/shared-state-hook)

This is a module for <a href="https://reactjs.org/docs/hooks-intro.html">React</a> that implements a hook named `useSharedState` for managing application state. 
It is similar to the provided hook `useState`, but rather than associating the state with the component that uses the hook,
it stores the state outside of the component so it can be shared by many components.
 
 
 
## Install

```
$ npm install shared-state-hook
```

## Browser

```html
<script src="//unpkg.com/shared-state-hook"></script>
```
[https://unpkg.com/shared-state-hook](https://unpkg.com/shared-state-hook)

## Example


```js
import {useSharedState} from 'shared-state-hook'

const Counter = props => {
  
 const [count, setCount] = useSharedState("counter", props.count)
 
 return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
  
const CounterApp1 = props => <Counter count={1}/>
//Order matters, initial value has already been set
const CounterApp2 = props => <Counter count={2}/>
```

[Try it on JSBin](https://jsbin.com/reduregace/edit?html,js,output) - [CodeSandBox](https://codesandbox.io/s/zl509roppm)

## API

### useSharedState

```js
import {useSharedState} from "shared-state-hook"

const Component = props => {
const [userInfo, setUserInfo] = useSharedState("userInfo", optionalInitialValue, optionalOnUpdatesCallback)
return ""
}
//=> "!"
```

### useHooksOutside

Allows you to use React Hooks outside of the function body

Invariant React Error 307
![image](https://user-images.githubusercontent.com/5196767/54329644-e3515c00-45e8-11e9-983e-956d098542c0.png)

```js
import {useHooksOutside} from "shared-state-hook"

const callbackReturnValue = useHooksOutside(()=>{
    //Call any restricted React Hook outside of a component function body! 
    useState()
    useEffect()
    useContext()
    return useSharedState("userInfo", initialValues)
});
//=> "!"
```

You can initialize `useSharedState` from `useHooksOutside` as a external Provider that will both update the shared state by others as well as get notified if anyone else updates the same `name` share

```js
let notifier
const rel = useHooksOutside(() => {
  const onUpdate = updates => {
    $scope.user = {
        ...$scope.user, ...updates
    }
    $scope.$apply()
  }
  
  const [, setUser] = useSharedState("user", $scope.user, onUpdate)
  notifier=setUser    
})
```
<hr>

Forked from <a href="https://github.com/mvolkmann/top-state-hook">top-state-hook</a>