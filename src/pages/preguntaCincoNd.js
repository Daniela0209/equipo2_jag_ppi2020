import React from "react";
import "../Style/styles.css";
import iconVerde from "../imagenes/iconVerde.png";
import fondoPrgUno from "../imagenes/fondoPreguntaUno.jpg";
import exit from "../imagenes/iconsExit.png";

class preguntaCincoNd extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoPrgUno})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <a href="StickerCorreCinco">
              <botton class="preguntaCincoNdA" type="submit">
                <h2>A. En la caneca roja</h2>
              </botton>
            </a>
            <a href="StickerIncoCinco">
              <botton class="preguntaCincoNdC" type="submit">
                <h2>C. En la caneca gris </h2>
              </botton>
            </a>
            <botton class="salidaCinco" type="submit">
              <a href="ppNivelDos">
                <img
                  class="rounded mx-auto d-block Salida"
                  src={exit}
                  alt="x"
                />
              </a>
            </botton>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 class="tituloPreguntas">
              <strong>
                5. ¿En que caneca se depositan las cuchillas de afeitar?
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
            <a href="StickerIncoCinco">
              <botton class="preguntaCincoNdB" type="submit">
                <h2>B. En la caneca verde</h2>
              </botton>
            </a>
            <a href="StickerIncoCinco">
              <botton class="preguntaCincoNdD" type="submit">
                <h2>D. En la caneca azul</h2>
              </botton>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default preguntaCincoNd;
