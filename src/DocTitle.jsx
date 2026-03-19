import React, { useEffect, useState } from 'react'

const DocTitle = () => {

     const [ num , setNum ] = useState(0)

     useEffect( ()=>{

        document.title = `count : ${num}`

     }, [num])

     const handleChange = ()=>{
        setNum( prev => prev+1)
     }
  return (
    <div>
        <button onClick={ handleChange}>Click to change </button>

      
    </div>
  )
}

export default DocTitle
