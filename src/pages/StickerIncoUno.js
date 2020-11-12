import React from "react";
import "../Style/styles.css";
import stickerTortuga from "../imagenes/stickerTortuga.jpg";
import fondoSticker from "../imagenes/fondoSticker.jpg";

class StickerIncoUno extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoSticker})` }}
      >
        <div>
          <h3 class="tituloSticker">Click sobre la imagen para continuar</h3>
          <a href="preguntaUnoInco">
            <button class="StickerIncorrecto" type="submit">
              <img
                class="rounded mx-auto d-block "
                src={stickerTortuga}
                alt="x"
              />
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default StickerIncoUno;
