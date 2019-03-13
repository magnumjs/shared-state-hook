// counter.js
import React from 'react'
import useSharedState from '../src/index'

const Counter = props => {
    const {initialVal} = props
    const [count, setCount] = useSharedState("counter", initialVal?initialVal:0)

    const incrementCount = () => setCount(c => c + 1)
    return <button onClick={incrementCount}>{count}</button>
}

export default Counter