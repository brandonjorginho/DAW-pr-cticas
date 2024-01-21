import React from "react";
import Tbody from "./Tbody";

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombres</th>
          <th scope="col">Correo</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <Tbody /> 
    </table>
  );
};

export default Table;
