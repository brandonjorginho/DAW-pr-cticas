// App.jsx

// ... (imports)

function App() {
  // ... (otras partes del componente)

  const onRegisterUser = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const userWithId = {
      ...formValues,
      id: formattedTime,
    };

    dispatch({
      type: 'ADD_USER',
      payload: userWithId,
    });
    Swal.fire("Usuario Agregado", 'Se registró al usuario correctamente', "success");
    reset();
  };

  const onRemoveUser = (userId) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: userId,
    });
  };

  return (
    <UserContext.Provider value={{ usuarios: state.users }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <h5>CRUD USUARIOS</h5>
            <form onSubmit={onRegisterUser}>
              {/* (input fields, etc.) */}
              <button type="submit" className="btn btn-dark btn-block">
                REGISTRAR
              </button>
            </form>
          </div>
          <div className="col-6">
            <Table
              users={state.users}
              onRemoveUser={onRemoveUser}
            />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
