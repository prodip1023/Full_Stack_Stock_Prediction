import React from 'react'

// const LearnProps = (props) => {
//   return (
//     <>
//     <h2>Props</h2>
//     <h2>Stock Name : {props.stock}</h2>
//     <h2>Stock Price : {props.price}</h2>

//     </>
//   )
// }

const LearnProps = ({stock,price})=> {
    return (
      <>
      <h2>Props</h2>
      <h2>Stock Name : {stock}</h2>
      <h2>Stock Price : {price}</h2>
  
      </>
    )
  }
  

export default LearnProps