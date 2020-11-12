import React from "react";
import "../Style/styles.css";
import Iconocanecarojamenu from "../imagenes/canecarojamenu.jpg";
import Iconocanecaazuljamenu from "../imagenes/canecaazulmenu.jpg";
import Iconocanecagrisjamenu from "../imagenes/canecagrismenu.jpg";
import IconocasaMenu from "../imagenes/casaMenu.png";
import fondomenu from "../imagenes/fondoMenu.png";

class menu extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondomenu})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div id="canecaRojaText">
              <h6>
                <strong>AYUDA</strong>
              </h6>
            </div>
            <button class="canecaRojaAyuda" type="submit">
              <a href="ayuda">
                <img
                  class="rounded mx-auto d-block iconcanecarojamenu"
                  src={Iconocanecarojamenu}
                  alt="x"
                />
              </a>
            </button>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="container-fluid">
              <h1 class="titulo">
                <strong>Menú </strong>
              </h1>
            </div>

            <div>
              <button className="casaMenu" type="submit">
                <a href="barraNavegacion">
                  <img
                    class="rounded mx-auto d-block iconocasaMenu"
                    src={IconocasaMenu}
                    alt="x"
                  />
                </a>
              </button>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div>
              <div id="canecaAzulText">
                <h6>
                  <strong>CRÉDITOS</strong>
                </h6>
              </div>

              <button class="canecaAzul" type="submit">
                <a href="creditos">
                  <img
                    class="rounded mx-auto d-block iconcanecaazulmenu"
                    src={Iconocanecaazuljamenu}
                    alt="x"
                  />
                </a>
              </button>
            </div>

            <div>
              <div id="canecaGrisText">
                <h6>
                  <strong>ACERCA DE</strong>
                </h6>
              </div>
              <button class="canecaGris" type="submit">
                <a href="acercaDe">
                  <img
                    class="rounded mx-auto d-block iconcanecagrismenu"
                    src={Iconocanecagrisjamenu}
                    alt="x"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default menu;
