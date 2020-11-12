import React from "react";
import "../Style/styles.css";
import canecarojaayuda from "../imagenes/canecarojaayuda.jpg";
import canecaazulayuda from "../imagenes/canecaazulayuda.jpg";
import canecaverdeayuda from "../imagenes/canecaverdeayuda.jpg";
import canecagrisayuda from "../imagenes/canecagrisayuda.jpg";
import fondoAyuda from "../imagenes/fondoAyuda.jpg";
import flechaAtras from "../imagenes/flechaAtrasAyuda.jpg";

class ayuda extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoAyuda})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button class="canecarojaAyuda" type="submit">
              <img
                class="rounded mx-auto d-block canecarojaayuda"
                src={canecarojaayuda}
                alt="x"
              />
            </button>

            <button class="canecaverdeAyuda" type="submit">
              <img
                class="rounded mx-auto d-block canecaverdeayuda"
                src={canecaverdeayuda}
                alt="x"
              />
            </button>
            <button class="flechaAtras" type="submit">
              <a href="menu">
                <img
                  class="rounded mx-auto d-block flechaHaciaAtras"
                  src={flechaAtras}
                  alt="x"
                />
              </a>
            </button>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 class="tituloAyuda">
              {" "}
              <strong>TE ENSEÑAREMOS A RECICLAR</strong>
            </h1>

            <div id="canecarojaayudaText">
              <h6>
                En mi, depositaremos desechos biológicos: cuchillas,
                jeringas,algodones sucios ..
              </h6>
            </div>

            <div id="canecaazulayudaText">
              <h6>
                En mi, depositaremos : vidrio, botellas, bolsas plasticas{" "}
              </h6>
            </div>

            <div id="canecaverdeayudaText">
              <h6>
                En mi, depositaremos : sobrantes de comida, papel sucio, mecatos
                y cubierto.
              </h6>

              <div id="canecagrisayudaText">
                <h6>
                  En mi, depositaremos : carton, el papel. Es importante tener
                  en cuenta que estos desechos no pueden estar plastificados
                  (puesto que este factor impide su reutilización) ni sucios de
                  líquidos, grasa o cualquier tipo de fluido similar.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button class="canecaazulAyuda" type="submit">
              <img
                class="rounded mx-auto d-block canecaazulayuda"
                src={canecaazulayuda}
                alt="x"
              />
            </button>

            <button class="canecagrisAyuda" type="submit">
              <img
                class="rounded mx-auto d-block canecagrisayuda"
                src={canecagrisayuda}
                alt="x"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ayuda;
