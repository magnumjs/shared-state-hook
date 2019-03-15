// counter.js
import React from 'react'
import {useSharedState} from '../src/main'

const Counter = ({initialVal=0}) => {
    const [count, setCount] = useSharedState("counter", initialVal)

    const incrementCount = () => setCount(c => c + 1)
    return <button onClick={incrementCount}>{count}</button>
}

export default Counter