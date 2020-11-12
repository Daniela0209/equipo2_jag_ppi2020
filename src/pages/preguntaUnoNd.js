import React from "react";
import "../Style/styles.css";
import iconVerde from "../imagenes/iconVerde.png";
import fondoPrgUno from "../imagenes/fondoPreguntaUno.jpg";
import exit from "../imagenes/iconsExit.png";

class preguntaUno extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoPrgUno})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <botton class="salida" type="submit">
              <a href="ppNivelDos">
                <img
                  class="rounded mx-auto d-block Salida"
                  src={exit}
                  alt="x"
                />
              </a>
            </botton>
            <a href="StickerIncoUno">
              <botton class="preguntaUnoNdA" type="submit">
                <h2>A. En la caneca verde</h2>
              </botton>
            </a>
            <a href="StickerCorreUno">
              <botton class="preguntaUnoNdC" type="submit">
                <h2>C. En la caneca roja</h2>
              </botton>
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 class="tituloPreguntas">
              <strong>
                1.¿En que caneca se depositan los residuos biológicos?
              </strong>
            </h1>

            <button class="iconVerdeUno" type="submit">
              <img
                class="rounded mx-auto d-block iconVerde"
                src={iconVerde}
                alt="x"
              />
            </button>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <a href="StickerIncoUno">
              <botton class="preguntaUnoNdB" type="submit">
                <h2>B. En la caneca azul</h2>
              </botton>
            </a>
            <a href="StickerIncoUno">
              <botton class="preguntaUnoNdD" type="submit">
                <h2>D. En ninguna de las anteriores</h2>
              </botton>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default preguntaUno;
