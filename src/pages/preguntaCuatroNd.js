import React from "react";
import "../Style/styles.css";
import iconVerde from "../imagenes/iconVerde.png";
import fondoPrgUno from "../imagenes/fondoPreguntaUno.jpg";
import exit from "../imagenes/iconsExit.png";

class preguntaCuatro extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoPrgUno})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <botton class="salidaCuatro" type="submit">
              <a href="ppNivelDos">
                <img
                  class="rounded mx-auto d-block Salida"
                  src={exit}
                  alt="x"
                />
              </a>
            </botton>
            <a href="StickerIncoCuatro">
              <botton class="preguntaCuatroNdA" type="submit">
                <h2>A. En la caneca gris</h2>
              </botton>
            </a>
            <a href="StickerCorreCuatro">
              <botton class="preguntaCuatroNdC" type="submit">
                <h2>C. En la caneca verde</h2>
              </botton>
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 class="tituloPreguntas">
              <strong>
                4. ¿En que caneca se depositan los restos de comida?
              </strong>
            </h1>

            <button class="iconVerdeUno" type="submit">
              <img
                class="rounded mx-auto d-block  iconVerde"
                src={iconVerde}
                alt="x"
              />
            </button>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <a href="StickerIncoCuatro">
              <botton class="preguntaCuatroNdB" type="submit">
                <h2>B. En la caneca azul</h2>
              </botton>
            </a>
            <a href="StickerIncoCuatro">
              <botton class="preguntaCuatroNdD" type="submit">
                <h2>D. En la caneca berde</h2>
              </botton>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default preguntaCuatro;
