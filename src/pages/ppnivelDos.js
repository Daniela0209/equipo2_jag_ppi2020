import React from "react";
import "../Style/styles.css";
import youtubeDos from "../imagenes/youtubeDos.jpg";
import bolaDos from "../imagenes/bolaDos.png";
import fondoNDos from "../imagenes/fondoppNivelDos.jpg";
import flechaAtras from "../imagenes/flechaAtrasRanking.jpg";

class ppnivelDos extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoNDos})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button class="flechaAtrasNvD">
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

            <button class="Youtube" type="submit">
              <img
                class="rounded mx-auto d-block youtubeDos"
                src={youtubeDos}
                alt="x"
              />
            </button>

            <h1>PREGUNTAS SOBRE EL RECICLAJE</h1>

            <button class="bolaDos" type="submit">
              <a href="preguntaUnoNd" className="bolaNivelDos">
                <img
                  class="rounded mx-auto d-block bolaDos"
                  src={bolaDos}
                  alt="x"
                />
              </a>
            </button>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default ppnivelDos;
