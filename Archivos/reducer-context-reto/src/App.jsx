import { useReducer } from "react";
import { UseForm } from "./hooks/useForm";
import { userReducer } from "./reducers/userReducer";
import Swal from 'sweetalert2'
import Table from "./components/Table";
import { UserContext } from "./context/UserContext";
const initialState = {
  users: [],
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
    dispatch({
      type:'ADD_USER',
      payload:formValues
    })
    Swal.fire("Usuario Agregado", 'Se registró al usuario correctamente', "success");
    reset();
  };
  return (
  
    <UserContext.Provider value={
      {
        usuarios:state.users
      }
    }>
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
            <Table />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
