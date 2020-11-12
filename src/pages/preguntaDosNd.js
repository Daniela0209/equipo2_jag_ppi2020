import React from "react";
import "../Style/styles.css";
import iconVerde from "../imagenes/iconVerde.png";
import fondoPrgUno from "../imagenes/fondoPreguntaUno.jpg";
import exit from "../imagenes/iconsExit.png";

class preguntaDosNd extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoPrgUno})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <botton class="salidaDos" type="submit">
              <a href="ppNivelDos">
                <img
                  class="rounded mx-auto d-block Salida"
                  src={exit}
                  alt="x"
                />
              </a>
            </botton>
            <a href="stickerCorreDos">
              <botton class="preguntaDosNdA" type="submit">
                <h2>A. Vidrio y plástico</h2>
              </botton>
            </a>
            <a href="StickerIncoDos">
              <botton class="preguntaDosNdC" type="submit">
                <h2>C. Jeringas y vendas </h2>
              </botton>
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 class="tituloPreguntas">
              <strong>2. ¿Que residuos se depositan en la caneca azul?</strong>
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
            <a href="StickerIncoDos">
              <botton class="preguntaDosNdB" type="submit">
                <h2>B. Plastico y papeles</h2>
              </botton>
            </a>
            <a href="StickerIncoDos">
              <botton class="preguntaDosNdD" type="submit">
                <h2>D. Cajas y periodico</h2>
              </botton>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default preguntaDosNd;
