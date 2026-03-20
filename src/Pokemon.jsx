import React, { useEffect } from 'react'

const Pokemon = () => {

    const API = "https://pokeapi.co/api/v2/pokemon?limit=20"


    const fetchPokemon = async ()=>  { 

        try{
        const res = await fetch(API)
        const data = await res.json() 
        console.log(data)
        } 
        catch(error){
            console.log(error)
        }

    }


    useEffect( ()=>{
        fetchPokemon()
    } , [])
  return (
    <div>
      <h1>Hii from pokemon </h1>
    </div>
  )
}

export default Pokemon
