import React from "react";
import "../Style/styles.css";
import stickerPerro from "../imagenes/stickerPerro.jpg";
import fondoSticker from "../imagenes/fondoSticker.jpg";
class StickerCorreUno extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoSticker})` }}
      >
        <div>
          <div>
            <h3 class="tituloSticker">Click sobre la imagen para continuar</h3>
            <a href="preguntaUnoCorre">
              <button class="StickerIncorrecto" type="submit">
                <img
                  class="rounded mx-auto d-block "
                  src={stickerPerro}
                  alt="x"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default StickerCorreUno;
