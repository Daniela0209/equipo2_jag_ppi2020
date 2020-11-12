import React from "react";
import "../Style/styles.css";
import fondo from "../imagenes/StickerNiñoDos.jpg";
import fondoSticker from "../imagenes/fondoSticker.jpg";

class StickerIncoCinco extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoSticker})` }}
      >
        <div>
          <h3 class="tituloSticker">Click sobre la imagen para continuar</h3>
          <a href="preguntaCincoInco">
            <button class="StickerIncorrecto" type="submit">
              <img class="rounded mx-auto d-block " src={fondo} alt="x" />
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default StickerIncoCinco;
