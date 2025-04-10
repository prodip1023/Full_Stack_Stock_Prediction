import React, { useState,useRef } from 'react'

const LearnUseRef = () => {
    const [name,setName] = useState('')
    const refElement = useRef('')
    const PreviousNameRef = useRef('')

    console.log(refElement)


    const clearText = () => {
        setName('')
        refElement.current.focus()
    }

    const HandelInput = (e) => {
        
        PreviousNameRef.current = name
        setName(e.target.value)
    }
  return (
    <>
    <h1>Learn UseRef</h1>
    <input ref={refElement} type="text" value={name} onChange={HandelInput} />
    <button onClick={clearText}>Clear</button>
    <br />
    <p>Previous Name: {PreviousNameRef.current}</p>

    </>
  )
}

export default LearnUseRef