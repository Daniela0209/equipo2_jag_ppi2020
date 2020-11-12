import React from "react";
import "../Style/styles.css";
import fondoSticker from "../imagenes/fondoSticker.jpg";
import stickerPata from "../imagenes/stickerPata.webp";

class StickerCorreDos extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoSticker})` }}
      >
        <div>
          <div>
            <div>
              <h3 class="tituloSticker">
                Click sobre la imagen para continuar
              </h3>
              <a href="preguntaDosCorre">
                <button class="StickerIncorrecto" type="submit">
                  <img
                    class="rounded mx-auto d-block "
                    src={stickerPata}
                    alt="x"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StickerCorreDos;
