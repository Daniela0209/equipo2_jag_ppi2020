import React from "react";
import "../Style/styles.css";

class logins extends React.Component {
  render() {
    return (
      <div className="container-fluid" class="fondologins">
        <div class="bordes">
          <div class="bordesForm">
            <h1 class="inicioSesion">
              <strong>Iniciar Sesión </strong>
            </h1>
            <form>
              <div className="form-group">
                <label class="letraContenido">
                  <strong>Correo Electrónico </strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputCorreoLogin"
                ></input>
                <small className="form-text text-muted">
                  Nunca compartiremos su correo electrónico con nadie más.
                </small>
              </div>
              <div className="form-group">
                <label class="letraContenido">
                  <strong> Contraseña </strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputContraseñaLogin"
                ></input>
              </div>
              <button type="button" className="btn btn-primary">
                <a href="barraNavegacion" className="comenzar">
                  <strong>Iniciar</strong>
                </a>
              </button>
            </form>
            <a href="registro" className="clickaqui">
              <strong>
                Si no tienes una cuenta, recuerda registrarte dando click aquí
              </strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default logins;
