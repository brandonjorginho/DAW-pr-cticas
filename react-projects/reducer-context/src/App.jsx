function App() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <h5>CRUD USUARIOS</h5>
            <form action="">
              <div className="form-group">
                <input
                  placeholder="Nombres"
                  type="text"
                  className="form-control"
                  name="nombres"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Correo"
                  type="text"
                  className="form-control"
                  name="email"
                />
              </div>
              <button type="submit" className="btn btn-dark btn-block">REGISTRAR</button>
            </form>
          </div>
          <div className="col-6">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stivens Espinoza</td>
                  <td>stivens@correo.com</td>
                  <td>
                    <button className="btn btn-danger">
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
