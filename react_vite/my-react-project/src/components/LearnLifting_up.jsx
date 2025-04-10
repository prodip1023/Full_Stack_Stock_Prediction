import React from 'react'

const LearnLifting_up = (props) => {

    const handleClick = () => {
        let stock = 'Apple'
        props.getStock(stock)
    }
  return (
    <>
      <h1>LearnLifting_up</h1>
      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default LearnLifting_up