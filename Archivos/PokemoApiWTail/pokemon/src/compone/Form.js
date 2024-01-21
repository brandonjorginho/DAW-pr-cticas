import React, { useState, useEffect } from "react";
import axios from "axios";


const Form = () => {
  const [counter, setCounter] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        //N° Especifico del pokemon
        const currentNumber = randomNumber !== null ? randomNumber + counter : null;
        if (currentNumber !== null) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${currentNumber}`);
          setPokemon(response.data);
        }
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchRandomPokemon();
  }, [randomNumber, counter]);

  useEffect(() => {
    //numero aleatorio
    const fetchRandomNumber = async () => {
      try {
        const randomIndex = Math.floor(Math.random() * 898) + 1;
        setRandomNumber(randomIndex);
      } catch (error) {
        console.error("Error generating random number:", error);
      }
    };
//Al cargarse por 1ra vez
    if (randomNumber === null) {
      fetchRandomNumber();// Se encarga de generar un número aleatorio y actualizar el estado 
    }
  }, []);

  const handleCounterIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * 898) + 1;
    setRandomNumber(randomIndex);
    setCounter(0);//independiente de las veces que se haya invrementado el contador
  };

  return (
    <div class="pokemon-search-container flex flex-col items-center justify-center">
      <h2 class="pokemon-info text-xl font-semibold my-1">
        N° de Pokémon: {pokemon ? pokemon.id : ""}
      </h2>
      <div class="button-container mb-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 h-12 mr-2" onClick={handleCounterIncrement}>
          Incremento
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 h-12" onClick={handleRandomPokemon}>
          Aleatorio
        </button>
      </div>
      {pokemon ? (
        <div class="pokemon-card-container border-4 border-gray-300 rounded-lg p-4 w-64">
          <PokemonCard pokemon={pokemon} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="flex flex-col items-center justify-center">
        <div className="pokemon-image">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} /> 
        </div>
        <div className="pokemon-info">
          <h2 className="text-base font-semibold mb-2 text-center">
            <span className="text-blue-500">Nombre:</span> {pokemon.name}
          </h2>
          <p className="text-base font-semibold mb-2 text-center">
            <span className="text-blue-500">Tipo:</span> {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;