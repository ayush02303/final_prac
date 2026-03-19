import React, { useEffect, useState } from 'react'

const CleanUp = () => {

    const [ num , setNum ] = useState(0)

    useEffect( ()=>{
        const Interval = setInterval( ()=>{
            setNum( prev => prev+1)

        }, 1000)

        return ()=> clearInterval(Interval)
    }, [])
  return (
    <div>
        <h1>I will be writing the numbers here</h1>
        <h3>{num}</h3>
       
      
    </div>
  )
}

export default CleanUp
