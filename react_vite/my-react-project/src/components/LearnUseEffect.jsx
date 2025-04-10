import {useEffect, useState} from 'react'

const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const [randomNum,setRandomNum] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const generateRandomNum = () => {
        setRandomNum(Math.floor(Math.random() * 100))
    }
    useEffect(()=>{
        console.log('useEffect called')

        // Cleanup function
        return () => {
            console.log('Cleanup function called');
        }

    },[count])
    
  return (
    <>
    <h2>Count :{count}</h2>
    <button onClick={increaseCount}>Increase Count</button>
    <hr />
    <h1>Random Number : {randomNum}</h1>
    <button onClick={generateRandomNum}>Generate Number</button>


    </>
  )
}

export default LearnUseEffect