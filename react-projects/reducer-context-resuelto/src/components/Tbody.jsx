// Tbody.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Tbody = () => {
  const { usuarios } = useContext(UserContext);
  
  return (
    <tbody>
      {usuarios.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.nombres}</td>
          <td>{user.email}</td>

        </tr>
      ))}
    </tbody>
  );
}

export default Tbody;
