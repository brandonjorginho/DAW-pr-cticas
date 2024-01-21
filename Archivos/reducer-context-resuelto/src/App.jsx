// App.jsx
// Reto Semana 08
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { userReducer } from "./reducers/userReducer";
import Swal from 'sweetalert2';

const initialState = {
  users: [],
};

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [state, dispatch] = useReducer(userReducer, initialState);

  const onRegisterUser = (data) => {
    const currentDate = new Date();
    const formattedId = currentDate.toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(/(\D)/g, '');

    const newUser = {
      ...data,
      id: formattedId,
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
            <form onSubmit={handleSubmit(onRegisterUser)}>
              <div className="form-group">
                <input
                  placeholder="Nombres"
                  type="text"
                  className={`form-control ${errors.nombres ? 'is-invalid' : ''}`}
                  {...register('nombres', { required: 'Este campo es requerido' })}
                />
                {errors.nombres && (
                  <div className="invalid-feedback">{errors.nombres.message}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  placeholder="Correo"
                  type="text"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  {...register('email', {
                    required: 'Este campo es requerido',
                    pattern: {
                      value: /^[\w-]+(\.[\w-]+)*@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com)$/,
                      message: 'Ingrese correctamente el correo',
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
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
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nombres}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => onRemoveUser(user.id)}
                      >
                        X
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
