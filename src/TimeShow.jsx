import React, { useEffect, useState } from 'react'

const TimeShow = () => {

    const [ date , setDate ] = useState("none")


    useEffect( ()=>{
        const interval = setInterval(()=>{
            const time = new Date()
            const formattedDate =  time.toLocaleDateString()
            const formattedTime = time.toLocaleTimeString()

            setDate(`${formattedDate} -${formattedTime}`)
        } , 1000)

        return ()=> clearInterval(interval)
    } , [])
  return (
    <div>
      {date }
    </div>
  )
}

export default TimeShow
