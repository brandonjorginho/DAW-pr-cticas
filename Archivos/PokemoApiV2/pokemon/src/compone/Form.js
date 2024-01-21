import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [counter, setCounter] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        // Número específico del Pokémon
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
    // Número aleatorio
    const fetchRandomNumber = async () => {
      try {
        const randomIndex = Math.floor(Math.random() * 898) + 1;
        setRandomNumber(randomIndex);
      } catch (error) {
        console.error("Error generating random number:", error);
      }
    };

    // Al cargarse por primera vez
    if (randomNumber === null) {
      fetchRandomNumber(); // Se encarga de generar un número aleatorio y actualizar el estado
    }
  }, []);

  const handleCounterIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * 898) + 1;
    setRandomNumber(randomIndex);
    setCounter(0); // Independiente de las veces que se haya incrementado el contador
  };

  return (
    <div className="pokemon-search-container flex flex-col items-center justify-center bg-gray-800 text-white min-h-screen">
      <h2 className="pokemon-info text-2xl  text-white-800 my-4 transition-all duration-300 ease-in-out font-indieFlower neon-text rotate-1 shadow-md">
        Id del Pokémon: {pokemon ? pokemon.id : ""}
      </h2>
      {pokemon ? (
        <div className="pokemon-card-container border-4 border-white-300 rounded-lg p-4 w-64 mb-4 animate-neon">
          <PokemonCard pokemon={pokemon} />
        </div>

      ) : (
        <p>Cargando...</p>
      )}
      <div className="button-container">
        <button style={{ backgroundColor: "#5C8374" }} className="hover:bg-#9EC8B9 text-white font-bold py-2 px-4 rounded-full w-32 h-12 mr-2 transition duration-300 transform hover:scale-105" onClick={handleCounterIncrement}>
          Incremento
        </button>
        <button style={{ backgroundColor: "#5C8374" }} className="hover:bg-#9EC8B9 text-white font-bold py-2 px-4 rounded-full w-32 h-12 transition duration-300 transform hover:scale-105" onClick={handleRandomPokemon}>
          Aleatorio
        </button>
      </div>
    </div>
  );
};

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card relative rounded-lg overflow-hidden">
      <div className="bg-cover bg-center h-48" style={{ backgroundImage: `url(${pokemon.sprites.other['official-artwork'].front_default})` }}></div>
      <div className="p-4 text-white">
        <div className="pokemon-info text-center">
          <h2 className="text-3xl font-bold mb-2">{pokemon.name}</h2>
          <p className="text-lg font-semibold">
            Tipo: {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};


export default Form;
