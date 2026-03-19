import React, { useState } from 'react'

const Final = () => {
    const [ users , setUsers ] = useState( [
  {
    name: "Ayush",
    age: 22,
    city: "Delhi"
  },
  {
    name: "Rohan",
    age: 25,
    city: "Mumbai"
  },
  {
    name: "Sneha",
    age: 21,
    city: "Bangalore"
  },
  {
    name: "Priya",
    age: 24,
    city: "Pune"
  }
])

 let age = users.reduce( (acc, ele) => acc+ele.age, 0)
  return (
    <div>
     {
        users.map( (user, index) =>{
            return <li key={index}>
                { user.name} - {user.age} - {user.city} - { age }
             </li>
        })
     }
    </div>
  )
}

export default Final
