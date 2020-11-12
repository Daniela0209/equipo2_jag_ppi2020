import React from "react";
import "../Style/styles.css";
import fondo from "../imagenes/preguntaCincoCorre.png";

class preguntaCincoCorre extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h3 class="masPuntos">
              <strong>+20 Puntos</strong>
            </h3>
            <a href="medallas">
              <botton
                type="button"
                className="btn text-center btn-success botonSiguiente"
              >
                <h3>Ver tu posición</h3>
              </botton>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default preguntaCincoCorre;
