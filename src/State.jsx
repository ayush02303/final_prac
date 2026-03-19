import { useState } from "react"


const State = ()=>{

    const [ age , setAge] = useState(0)
    const [employed , setIsEmployed] = useState(false)

    function handleClick(){
        setAge(age+1)
    }


    return(
        <>
        <h1>Just Enter your age buddy </h1>
        <o>{ age }</o>
        <br />
        <button onClick={ handleClick}>Click  here to change your age </button>
        </>
    )

}
export default State