import React from "react";

const PokeData = ({ pokemonData }) => {
  return (
    <li>
      <h3>{pokemonData.name}</h3>

      <img
        src={pokemonData?.sprites?.front_default}
        alt={pokemonData?.name}
      />

      <p>ID: {pokemonData.id}</p>
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>

      <p>
        Types:{" "}
        {pokemonData.types.map((t) => t.type.name).join(", ")}
      </p>

      <p>
        Abilities:{" "}
        {pokemonData.abilities.map((a) => a.ability.name).join(", ")}
      </p>
    </li>
  );
};

export default PokeData;