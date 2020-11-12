import React from "react";
import "../Style/styles.css";
import videoNUno from "../imagenes/videoNUno.jpg";
import bolaNUno from "../imagenes/bolaNUno.png";
import fondoPNivelUno from "../imagenes/fondoPNivelUno.jpg";
import flechaAtras from "../imagenes/flechaAtrasNivelUno.jpg";

class pNivelUno extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoPNivelUno})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button class="flechaAtras" type="submit">
              <a href="barraNavegacion">
                <img
                  class="rounded mx-auto d-block flechaAtras"
                  src={flechaAtras}
                  alt="x"
                />
              </a>
            </button>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1> FUNDAMENTOS DEL RECICLAJE</h1>

            <button class="videoNivelUno" type="submit">
              <img
                class="rounded mx-auto d-block videoNUno"
                src={videoNUno}
                alt="x"
              />
            </button>

            <h1>DIRIGE EL RESIDUO</h1>

            <button class="Bola" type="submit">
              <a href="nivelUno" className="bolaNivelUno">
                <img
                  class="rounded mx-auto d-block bolaNUno"
                  src={bolaNUno}
                  alt="x"
                />
              </a>
            </button>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4"></div>
      </div>
    );
  }
}

export default pNivelUno;
