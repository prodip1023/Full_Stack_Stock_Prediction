import {useState} from 'react'

const LearnUseState = () => {
    const [num, setNum] = useState(5)
    console.log(num);

    const handleNum = () => {
        setNum(10)
    }
    const [stockPrice,setStockPrice] = useState({stock:'Apple',price:100})
    console.log(stockPrice);
    const updateStockPrice = () => {
      setStockPrice({...stockPrice,price:300}) 
    }
    

  return (
    <>
    <h2>Number:{num}</h2>
    <button onClick={handleNum}>Click Here</button>
    <hr />
    <h2>Stock Name : {stockPrice.stock} : {stockPrice.price}</h2>
    <button onClick={updateStockPrice}> Click for Update Price </button>
    </>
  )
}

export default LearnUseState