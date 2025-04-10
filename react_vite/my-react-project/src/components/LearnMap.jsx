import React from 'react'

const LearnMap = () => {
    const names = ['Prodip','Subinoy','Mou','Bimal']
  return (
    <>
    <h1>Map Function</h1>
    <ul>
        {names.map((names,index)=>(
            <li key={index} >{names}</li>

        ))}
    </ul>
    </>
  )
}

export default LearnMap