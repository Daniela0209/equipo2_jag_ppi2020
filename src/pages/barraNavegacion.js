import React from "react";
import "../Style/styles.css";
import Iconocasa from "../imagenes/casa.png";
import Iconoperfil from "../imagenes/usuario.png";
import Iconotrofeo from "../imagenes/trofeo.png";
import Iconomedalla from "../imagenes/medalla.png";

import Iconocanecaroja from "../imagenes/canecarojabdn.jpg";
import Iconomenu from "../imagenes/menu.png";
import Iconocanecaverde from "../imagenes/canecaverdebdn.jpg";
import fondoBarraNavegacion from "../imagenes/fondobn.jpg";

class barraNavegacion extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoBarraNavegacion})` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <a href="/">
                <button
                  type="button"
                  className="btn text-center btn-primary cerrarSesion"
                >
                  <h4>Cerrar sesión</h4>
                </button>
              </a>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
              <h1 class="titulobn">
                <strong>barra navegacion </strong>
              </h1>

              <div className="row">
                <div className="col-sm">
                  <div id="canecaRojaTextbn">
                    <h6>
                      <a href="pNivelUno" className="Residuo">
                        <strong>Nivel 1 Dirige el residuo</strong>
                      </a>
                    </h6>
                  </div>
                  <button class="canecaRoja" type="submit">
                    <a href="pNivelUno" className="niveluno">
                      <img
                        class="rounded mx-auto d-block iconcanecaroja"
                        src={Iconocanecaroja}
                        alt="x"
                      />
                    </a>
                  </button>
                </div>
                <div className="col-sm">
                  <div id="canecaVerdeTextbn">
                    <h6>
                      <a href="ppNivelDos" className="reciclaje">
                        <strong>Nivel 2 Preguntas sobre reciclaje</strong>
                      </a>
                    </h6>
                  </div>
                  <button class="canecaVerde" type="submit">
                    <a href="ppNivelDos" className="niveldos">
                      <img
                        class="rounded mx-auto d-block iconcanecaverde"
                        src={Iconocanecaverde}
                        alt="x"
                      />
                    </a>
                  </button>
                </div>
              </div>
              <div class="barraNavegacionIcon">
                <button class="casa" type="submit">
                  <img
                    class="rounded mx-auto d-block iconcasa"
                    src={Iconocasa}
                    alt="x"
                  />
                </button>

                <button class="perfil" type="submit">
                  <a href="perfil">
                    <img
                      class="rounded mx-auto d-block iconperfil"
                      src={Iconoperfil}
                      alt="x"
                    />
                  </a>
                </button>

                <button class="menu" type="submit">
                  <a href="menu">
                    <img
                      class="rounded mx-auto d-block iconomenu"
                      src={Iconomenu}
                      alt="x"
                    />
                  </a>
                </button>

                <button class="trofeo" type="submit">
                  <a href="trofeos">
                    <img
                      class="rounded mx-auto d-block icontrofeo"
                      src={Iconotrofeo}
                      alt="x"
                    />
                  </a>
                </button>

                <button class="medalla" type="submit">
                  <a href="medallas">
                    <img
                      class="rounded mx-auto d-block Iconomedalla"
                      src={Iconomedalla}
                      alt="x"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default barraNavegacion;
