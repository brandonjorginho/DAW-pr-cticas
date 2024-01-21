// App.jsx
import { useReducer } from "react";
import { UseForm } from "./hooks/useForm";
import { userReducer } from "./reducers/userReducer";
import Swal from 'sweetalert2';

const initialState = {
  users: [],
  nextUserId: 1,
};

function App() {
  const [formValues, handleInputChange, reset] = UseForm({
    nombres: "",
    email: "",
  });
  const { nombres, email } = formValues;
  const [state, dispatch] = useReducer(userReducer, initialState);

  const onRegisterUser = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('es-ES', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

    const newUser = {
      ...formValues,
      id: state.nextUserId,
      registrationDate: formattedDate,
    };

    dispatch({
      type: 'ADD_USER',
      payload: newUser,
    });

    Swal.fire("Usuario Agregado", 'Se registró al usuario correctamente', "success");

    reset();
  };

  const onRemoveUser = (userId) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: userId,
    });

    Swal.fire("Usuario Eliminado", 'Se eliminó al usuario correctamente', "success");
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <h5>CRUD USUARIOS</h5>
            <form onSubmit={onRegisterUser}>
              <div className="form-group">
                <input
                  placeholder="Nombres"
                  type="text"
                  className="form-control"
                  name="nombres"
                  value={nombres}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Correo"
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-dark btn-block">
                REGISTRAR
              </button>
            </form>
          </div>
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Fecha de Registro</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nombres}</td>
                    <td>{user.email}</td>
                    <td>{user.registrationDate}</td>
                    <td>
                      <button
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
