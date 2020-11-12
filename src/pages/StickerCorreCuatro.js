import React from "react";
import "../Style/styles.css";
import fondoSticker from "../imagenes/fondoSticker.jpg";
import stickerNiñoGafas from "../imagenes/stickerNiñoGafas.webp";

class StickerCorreCuatro extends React.Component {
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
              <a href="preguntaCuatroCorre">
                <button class="StickerIncorrecto" type="submit">
                  <img
                    class="rounded mx-auto d-block "
                    src={stickerNiñoGafas}
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

export default StickerCorreCuatro;
