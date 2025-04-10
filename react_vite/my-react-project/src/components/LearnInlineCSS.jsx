import React from 'react'
import '../assets/css/style.css'

const LearnInlineCSS = () => {
    const style = {
        container: {
            backgroundColor: 'red',
            height: '100px',
            width: '100px'
        },
        h2Text:{
            fontSize: '20px',
            color: 'green'
        }
    }
  return (
    <>
    <style>
      {
        `
        .container{
            background-color: yellow;
            height: 100px;
            width: 100px
        }
        `
      }
    </style>
    <h1>Learn InLine CSS</h1>
    <p style={{ fontSize:'20px',fontWeight: 600,color: 'blue'}}>Hello,This is a Paragraph</p>
    <div style={style.container}>

    </div>
    <h2 style={style.h2Text}>This is a Heading</h2>
    <hr />
    <h1>Internal CSS</h1>
    <div className='container'></div>
    <hr />
    <h1>Learn Externale CSS</h1>
    <div className='bluebox'></div>
    <h3 className='bluetext'>Blue Box</h3>


    </>
  )
}

export default LearnInlineCSS