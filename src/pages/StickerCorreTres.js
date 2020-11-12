import React from "react";
import "../Style/styles.css";
import stickerAsiEs from "../imagenes/stickerAsiEs.webp";
import fondoSticker from "../imagenes/fondoSticker.jpg";

class StickerCorreTres extends React.Component {
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
              <a href="preguntaTresCorre">
                <button class="StickerIncorrecto" type="submit">
                  <img
                    class="rounded mx-auto d-block "
                    src={stickerAsiEs}
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

export default StickerCorreTres;
