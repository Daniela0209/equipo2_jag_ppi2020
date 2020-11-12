import React from "react";
import "../Style/styles.css";
import medalla from "../imagenes/medallaT.png";
import copaE from "../imagenes/copaEstrella.png";
import copaT from "../imagenes/copaTrofeoT.png";
import flechaT from "../imagenes/flechatrofeo.jpg";
import fondoTrofeo from "../imagenes/fondoTrofeos.jpg";

class trofeos extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoTrofeo})` }}
      >
        <div>
          <h1 className="tituloTrofeo">
            <strong>ZONA DE TROFEOS</strong>
          </h1>
          <div className="row text-rigth">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="container-fluid">
                <img
                  class="rounded mx-auto d-block medallaT"
                  src={medalla}
                  alt="x"
                />
              </div>
              <div className="container-fluid">
                <img
                  class="rounded mx-auto d-block copaEstrella"
                  src={copaE}
                  alt="x"
                />
              </div>
              <div className="container-fluid">
                <img
                  class="rounded mx-auto d-block copaTrofeoT"
                  src={copaT}
                  alt="x"
                />
              </div>
              <div className="container-fluid">
                <button class="flechaTrofeo" type="submit">
                  <a href="barraNavegacion">
                    <img
                      class="rounded mx-auto d-block flechaZonaT"
                      src={flechaT}
                      alt="x"
                    />
                  </a>
                </button>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h3 class="definicionMedalla">
                Superación por cantidad de puntos.
              </h3>
              <h3 class="definicionCopaEstrella">Compresión lectora.</h3>
              <h3 class="definicionCopaT">Buen desempeño por su retentiva.</h3>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default trofeos;
