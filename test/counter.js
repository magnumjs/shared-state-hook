// counter.js
import React from 'react'
import {useSharedState} from '../src/main'


const CounterVal = ({initialVal=0}) => {
    const [count, setCount] = useSharedState("counter1", initialVal)

    const incrementCount = () => setCount(count + 1)
    return <button onClick={incrementCount}>{count}</button>
}


const CounterObj = ({initialVal}) => {
    const [counter, setCount] = useSharedState("counter2", initialVal)

    const incrementCount = () => setCount({count: counter.count + 1})
    return <button onClick={incrementCount}>{counter.count}</button>
}



const CounterFunVal = ({initialVal=0}) => {
    const [count, setCount] = useSharedState("counter3", initialVal)

    const incrementCount = () => setCount(c => c + 1)
    return <button onClick={incrementCount}>{count}</button>
}


const CounterFunObj = ({initialVal}) => {
    const [counter, setCount] = useSharedState("counter4", initialVal)

    const incrementCount = () => setCount(c => ({count: c.count + 1}))
    return <button onClick={incrementCount}>{counter.count}</button>
}


export {CounterVal, CounterObj, CounterFunVal, CounterFunObj}