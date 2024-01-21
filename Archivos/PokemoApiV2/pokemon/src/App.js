import React, { useState } from 'react';
import Form from './compone/Form.js/.';
import pokemonLogo from './pokemon-logo.png';

function App() {
  return (
    <div>
      <h1 className="flex items-center justify-center">
        <img src={pokemonLogo} alt="Logo de Pokémon" className="w-40 h-auto my-4" />
      </h1>
      <Form />
    </div>
  );
}

export default App;