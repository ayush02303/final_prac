import React, { useState } from 'react'

const Fourth = () => {

     const [ name , setName ] = useState("Guest")

     const handleChange = (e)=>{
        setName(e.target.value)
     }
  return (
    <div>
      <input type="text" onChange={ handleChange} />
      <h4>{name}</h4>
    </div>
  )
}

export default Fourth
