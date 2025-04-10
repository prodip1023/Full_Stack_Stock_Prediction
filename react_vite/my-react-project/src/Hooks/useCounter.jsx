import { useState } from "react"

function useCounter(initialValue=0){
    const [count, setCount] = useState(initialValue)

    const increaseCount = () => {setCount(count + 1)}
    const decreaseCount = () => {setCount(count - 1)}
    const resetCount = () => {setCount(initialValue)}

    return {count, increaseCount, decreaseCount,resetCount}
}

export default useCounter