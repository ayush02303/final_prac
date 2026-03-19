import React, { useState } from 'react'

const LiftingtheStateUp = () => {

     const [ name , setName ] = useState("Ayush")
  return (
    <div>
         <AnotherRound name = { name } setName = {setName}/>
      
    </div>
  )
}

const AnotherRound = ({ name , setName })=>{

    const handleClick = (e)=>{
        console.log(e); 
    }

    return <>
     <p>{name}</p>
     <button onClick={handleClick}>Click </button>
    </>
}

export default LiftingtheStateUp
