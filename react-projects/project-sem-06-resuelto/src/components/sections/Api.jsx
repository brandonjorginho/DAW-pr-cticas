import React, { useState } from "react";
import axios from "axios";
import Card from "../ui/Card";
const Api = () => {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const {
      data: { results },
    } = await axios.get("https://rickandmortyapi.com/api/character");
    setCharacters([...results]);
  };
  return (
    <section>
      <h3 className="text-gray-300 text-2xl font-title">API</h3>
      <p className="text-gray-400">Consumo de la API</p>
      <button className="Button font-title p-2 mt-3" onClick={getCharacters}>
        Consultar
      </button>
      <div className="flex flex-row mt-3 flex-wrap">
        {characters.map((character) => (
          <Card character={character} />
        ))}
      </div>
    </section>
  );
};

export default Api;
