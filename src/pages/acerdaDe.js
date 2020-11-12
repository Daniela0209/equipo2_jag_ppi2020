import React from "react";
import "../Style/styles.css";
import fondoAcercaDe from "../imagenes/fondoAcercaDe.jpg";
import flechaAtras from "../imagenes/flechaAtrasAcercaDe.jpg";

class acercaDe extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoAcercaDe})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button class="flechaAtras" type="submit">
              <a href="menu">
                <img
                  class="rounded mx-auto d-block flechaHaciaAtras"
                  src={flechaAtras}
                  alt="x"
                />
              </a>
            </button>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 class="tituloAcercaDe">
              <strong>ACERCA DE</strong>
            </h1>

            <h2 class="defAcercaDe">
              Nuestro juego trata de como es la separación de los residuos
              ambientales, en el cual se le indicara al usuario como debe
              jugarse por medio de instrucciones.
            </h2>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default acercaDe;
