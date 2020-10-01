import React from "react";
import "../Style/styles.css";

class perfil extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <img
            class="iconPerfil"
            src="https://i.ibb.co/mC9TP04/usuario.png"
            alt="x"
          />
          <h1 class="tituloPerfil">
            <strong>Perfil </strong>
            <br></br>
          </h1>
          <div>
            <div>
              <h5>
                <strong>
                  <center>ID 3456 </center>
                </strong>
                <br></br>
              </h5>
            </div>
            <img
              className="iconNombre"
              src="https://i.ibb.co/hcDJLS8/avatar.png"
              alt="x"
            />
            <h5>
              <center> Nombre </center>
              <br></br>
            </h5>
          </div>
          <div>
            <img
              className="iconCorreo"
              src="https://i.ibb.co/8bPdTjV/logotipo-de-gmail.png"
              alt="x"
            />

            <h5>
              <center> Correo </center>
            </h5>
          </div>
          <br></br>
          <div>
            <img className="iconPuntos" src="https://i.ibb.co/85SBqNT/dinero.png" alt="x" />
            <h5>
              <center> Puntos obtenidos </center>
            </h5>
          </div>
          <div>
            <button className="flechaAtras" type="submit">
              <a href="barraNavegacion">
                <img
                  src="https://i.ibb.co/68rttRz/flecha-hacia-atras.png"
                  alt="x"
                />
              </a>
            </button>

            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default perfil;
