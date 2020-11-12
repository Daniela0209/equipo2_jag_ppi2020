import React from "react";
import "../Style/styles.css";
class registro extends React.Component {
  render() {
    return (
      <div className="container-fluid" class="fondologins">
        <div class="bordes">
          <div class="bordesForm">
            <h1 class="tituloRegistro">
              <strong> Registro </strong>
            </h1>
            <form>
              <div className="form-group">
                <label class="letraContenido">
                  <strong> Usuario </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUsuarioRegistro"
                ></input>
              </div>
              <div className="form-group">
                <label class="letraContenido">
                  <strong> Contraseña </strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputContraseñaRegistro"
                ></input>
              </div>
              <div className="form-group">
                <label class="letraContenido">
                  <strong> Correo Electrónico </strong>{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputCorreoRegistro"
                ></input>
              </div>
              <div className="form-group">
                <div>
                  <label class="letraContenido">
                    <strong> Fecha de nacimiento: </strong>
                  </label>
                </div>
                <input
                  type="date"
                  id="FechaRegistro"
                  min="1940-01-01"
                  max="2020-01-01"
                ></input>
              </div>

              <button className="btn btn-primary" class="btonRegistro">
                <strong>
                  <a href="logins" className="registrar">
                    Siguiente
                  </a>
                </strong>
              </button>
            </form>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default registro;
