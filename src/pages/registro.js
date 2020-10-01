import React from "react";
import "../Style/styles.css";

class registro extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 class="tituloRegistro">
          {" "}
          <strong> Registro </strong>{" "}
        </h1>
        <form>
          <div className="form-group">
            <label>
              {" "}
              <strong> Usuario </strong>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="InputUsuarioRegistro"
            ></input>
          </div>
          <div className="form-group">
            <label>
              {" "}
              <strong> Contraseña </strong>{" "}
            </label>
            <input
              type="password"
              className="form-control"
              id="InputContraseñaRegistro"
            ></input>
          </div>
          <div className="form-group">
            <label>
              {" "}
              <strong> Correo Electronico </strong>{" "}
            </label>
            <input
              type="email"
              className="form-control"
              id="InputCorreoRegistro"
            ></input>
          </div>
          <div className="form-group">
            <div>
              <label>
                {" "}
                <strong> Fecha de nacimiento: </strong>{" "}
              </label>
            </div>
            <input
              type="date"
              id="FechaRegistro"
              min="1940-01-01"
              max="2020-01-01"
            ></input>
          </div>
          <button className="btn btn-primary">
            <a href="logins" className="registrar">
              {" "}
              <strong> Registarse </strong>
            </a>
          </button>
        </form>
      </div>
    );
  }
}

export default registro;
