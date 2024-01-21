// Table.jsx (o el nombre de tu componente)

import React from 'react';

const Table = ({ users, onRemoveUser }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.nombres}</td>
            <td>{user.email}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onRemoveUser(user.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
