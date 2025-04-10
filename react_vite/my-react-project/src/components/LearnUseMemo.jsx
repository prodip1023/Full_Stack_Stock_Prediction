import {useMemo,useState} from 'react'

const LearnUseMemo = () => {

    const [count, setCount] = useState(0);
    const [number,setNumber] = useState(10);

    const increaseCount = () => {
        if(count == 10){
            setNumber(number + 10);
        }
        setCount(count + 1);
    }

    // const sumOfNumbers = () =>{
    //     let sum = 0;
    //     for(let i = 1; i <= number; i++){
    //         sum = sum + i;
    //     }
    //     return sum;
    // }
    const sumOfNumbers = useMemo(()=>{
        let sum = 0;
        for(let i = 1; i <= number; i++){
            sum = sum + i;
        }
        return sum;

    },[])
    console.log(`sum of numbers from 1 to ${number}:`,sumOfNumbers);
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}

export default LearnUseMemo