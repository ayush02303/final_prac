import React, { useEffect, useState } from "react";
import PokeData from "./PokeData";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading , setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API = "https://pokeapi.co/api/v2/pokemon?limit=20";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log(data);

      const detailedPokeData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });
      // console.log(detailedPokeData)

      const detailedData = await Promise.all(detailedPokeData);
      console.log(detailedData);
      setPokemon(detailedData);
      setLoading(false); 
    } catch (error) {
      console.log(error);
      setError(error)
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if( loading){
    return <div>
        <h2>Loading...</h2>
    </div>
  }


  if( error ){
    return <div>
        <h2>{error.message}</h2>
    </div>
  }


  return (
    <div>
      <h1>Hii from pokemon </h1>
      <ul>
        {
            pokemon.map( currPokemon =>{
               return <PokeData key = {currPokemon.id} pokemonData = {currPokemon}/>
            }) 
        }
      </ul>
    </div>
  );
};

export default Pokemon;
