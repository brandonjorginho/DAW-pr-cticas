import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';

const Tbody = () => {
  const {usuarios} = useContext(UserContext);

  return (
    <tbody>
        {usuarios.map((user) => (
          <tr>
            <td>{user.nombres}</td>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-danger">X</button>
            </td>
          </tr>
        ))}
      </tbody>
  )
}

export default Tbody