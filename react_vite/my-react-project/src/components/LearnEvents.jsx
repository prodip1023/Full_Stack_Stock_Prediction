import React from 'react'

const LearnEvents = () => {
    const handleClick = () => {
        console.log("Button Clicked")
    }

    const handleClickAgain = (param) => {
        console.log(param)

    }
  return (
    <>
    <button onClick={handleClick}>Click Here</button>
    <br/>
    <button onClick={() => handleClickAgain("Clicked again")}>Click Again</button>
    </>
  )
}

export default LearnEvents