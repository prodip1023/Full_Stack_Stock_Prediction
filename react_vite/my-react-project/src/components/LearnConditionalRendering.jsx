import React, { useState } from 'react'

const LearnConditionalRendering = () => {
    // Conditional Rendering
    const [isLoggedIn,setIsLoggedIn] = useState(true)
    const [status,setStatus] = useState(true)
  return (
    <>
    <h1>Conditional Rendering</h1>
    {isLoggedIn ? (
        <h3>Welcome, User!</h3>
    ) :(
        <h3>Please log in</h3>
    )}
    {status && 
    <h3>Show data</h3>
    }
    </>
  )
}

export default LearnConditionalRendering