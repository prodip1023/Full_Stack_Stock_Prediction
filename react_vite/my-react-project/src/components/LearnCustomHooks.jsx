import React from 'react'
import useCounter from '../Hooks/useCounter'

const LearnCustomHooks = () => {
    const {count,increaseCount,decreaseCount,resetCount} = useCounter(5)
  return (
    <>
    <h1>Custom Hook</h1>
    <h2>Count: {count}</h2>
    <button onClick={increaseCount}>Increase Count</button>
    <br />
    <button onClick={decreaseCount}>Decrease Count</button>
    <br />
    <button onClick={resetCount}>Reset Count</button>
    </>
  )
}

export default LearnCustomHooks