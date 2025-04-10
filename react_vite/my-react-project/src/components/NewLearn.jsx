import React from 'react'

const NewLearn = () => {
  let stock = 'Microsoft'
  let stock_apple = 'Apple'
  return (
    <>
    <h1>Price</h1>
    <h2>Price: {10 + 20}</h2>
    <h2>Stock Name : {stock}</h2>

    <h2>Price: {10 - 20}</h2>
    <h2>Stock Name : {stock_apple}</h2>
    <h2>Price: {10 * 20}</h2>

    <h1 className='bg-success'>Class Name</h1>
    <h2 className={stock}>Dynamic Class</h2>
    
    </>
  )
}

export default NewLearn