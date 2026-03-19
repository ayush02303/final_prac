import React from 'react'

const EventPropogation = () => {

    const handleChange = ()=>{
        console.log("button clicked")
    }

    const handleDivChange = ()=>{
        console.log("parent clicked")
    }
  return (
    <>
    <div  onClick={handleDivChange}>
        <button onClick={handleChange}>Click Me</button>
      
    </div>
    </>
  )
}

export default EventPropogation
