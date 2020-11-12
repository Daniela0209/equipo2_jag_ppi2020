import React from "react";
import "../Style/styles.css";
import fondoranking from "../imagenes/fondoRanking.jpg";
import userH from "../imagenes/userRanking.png";
import userM from "../imagenes/userRankingM.png";
import userHM from "../imagenes/userRankingHM.png";
import flechaAtras from "../imagenes/flechaAtrasRanking.jpg";

class medallas extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoranking})` }}
      >
        <div>
          <br></br>
          <br></br>
          <h1 className="tituloRanking">
            <strong>RANKING</strong>
          </h1>
          <div className="row text-rigth">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="container-fluid">
                <img
                  class="rounded mx-auto d-block usuarioHombre"
                  src={userH}
                  alt="x"
                />
              </div>
              <div className="container-fluid">
                <img
                  class="rounded mx-auto d-block usuarioMujer"
                  src={userM}
                  alt="x"
                />
              </div>
              <div className="container-fluid">
                <img
                  class="rounded mx-auto d-block usuarioHM"
                  src={userHM}
                  alt="x"
                />
              </div>
              <div className="container-fluid">
                <button class="flechaRanking" type="submit">
                  <a href="barraNavegacion">
                    <img
                      class="rounded mx-auto d-block flechaAtrasRanking"
                      src={flechaAtras}
                      alt="x"
                    />
                  </a>
                </button>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h3 class="nombreUser">Julian Marin</h3>
              <h3 class="nombreUser_">Karina Santos</h3>
              <h3 class="nombreUser_">Samuel Aguirre</h3>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h1 className="tituloPuntaje">
                <strong>Puntuación</strong>
              </h1>

              <h3 class="puntosU">
                <strong>100 puntos </strong>
              </h3>
              <h3 class="puntosD">
                <strong>80 puntos</strong>
              </h3>
              <h3 class="puntosT">
                <strong>60 puntos</strong>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default medallas;
