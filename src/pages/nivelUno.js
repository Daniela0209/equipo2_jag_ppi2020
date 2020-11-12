import React from "react";
import "../Style/styles.css";
import canecaVerdeUno from "../imagenes/canecaVerdeNUno.png";
import canecaRojaUno from "../imagenes/canecaRojaNUno.png";
import canecaGrisUno from "../imagenes/canecaGrisNUno.png";
import canecaAzulUno from "../imagenes/canecaAzulNUno.png";
import fondoNivelNUno from "../imagenes/fondoNivelNUno.jpg";
import periodico from "../imagenes/periodico.jpg";
import pez from "../imagenes/pez.jpg";
import pan from "../imagenes/pan.jpg";
import papel from "../imagenes/papel.jpg";
import banano from "../imagenes/banano.jpg";
import bolsa from "../imagenes/bolsa.jpg";
import botella from "../imagenes/botella.jpg";
import caja from "../imagenes/caja.jpg";
import copavidrio from "../imagenes/copavidrio.jpg";
import cuchilla from "../imagenes/cuchilla.jpg";
import cura from "../imagenes/cura.jpg";
import tapabocas from "../imagenes/tapabocas.jpg";
import flechaAdelante from "../imagenes/flechaAdelanteNUno.png";
import iconsNv from "../imagenes/iconsNv.png";

class nivelUno extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoNivelNUno})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button className="periodicoNv" type="submit">
              <img
                class="rounded mx-auto d-block periodico "
                src={periodico}
                alt="x"
              />
            </button>

            <button class="pescadoNv" type="submit">
              <img class="rounded mx-auto d-block pez " src={pez} alt="x" />
            </button>

            <button class="cajaNv" type="submit">
              <img class="rounded mx-auto d-block caja" src={caja} alt="x" />
            </button>

            <button class="curaNv" type="submit">
              <img class="rounded mx-auto d-block cura " src={cura} alt="x" />
            </button>
            <button class="botellaNv" type="submit">
              <img
                class="rounded mx-auto d-block botella"
                src={botella}
                alt="x"
              />
            </button>

            <button class="iconsSalidaNu" type="submit">
              <a href="pNivelUno" className="exit">
                <img
                  class="rounded mx-auto d-block iconsNv "
                  src={iconsNv}
                  alt="x"
                />
              </a>
            </button>

            <button class="canecaGrisNivelUno" type="submit">
              <img
                class="rounded mx-auto d-block canecaGrisn1 "
                src={canecaGrisUno}
                alt="x"
              />
            </button>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <button class="panNv" type="submit">
              <img class="rounded mx-auto d-block pan " src={pan} alt="x" />
            </button>

            <button class="papelNv" type="submit">
              <img class="rounded mx-auto d-block papel " src={papel} alt="x" />
            </button>

            <button class="cuchillaNv" type="submit">
              <img
                class="rounded mx-auto d-block cuchilla "
                src={cuchilla}
                alt="x"
              />
            </button>

            <button class="copavidrioNv" type="submit">
              <img
                class="rounded mx-auto d-block copavidrio "
                src={copavidrio}
                alt="x"
              />
            </button>

            <button class="canecaVerdeNivelUno" type="submit">
              <img
                class="rounded mx-auto d-block canecaverdeNUno "
                src={canecaVerdeUno}
                alt="x"
              />
            </button>

            <button class="canecaAzulNivelUno" type="submit">
              <img
                class="rounded mx-auto d-block canecaAzul "
                src={canecaAzulUno}
                alt="x"
              />
            </button>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <button className="tapabocasNv" type="submit">
              <img
                class="rounded mx-auto d-block tapabocas "
                src={tapabocas}
                alt="x"
              />
            </button>
            <button class="bolsaNv" type="submit">
              <img class="rounded mx-auto d-block bolsa" src={bolsa} alt="x" />
            </button>

            <button class="bananoNV" type="submit">
              <img
                class="rounded mx-auto d-block banano "
                src={banano}
                alt="x"
              />
            </button>

            <button class="canecaRojaNivelUno" type="submit">
              <img
                class="rounded mx-auto d-block canecaRojan1 "
                src={canecaRojaUno}
                alt="x"
              />
            </button>
            <button className="flechaDelantera" type="submit">
              <a href="ppnivelDos" className="nivelDospp">
                <img
                  class="rounded mx-auto d-block FlechaDelante "
                  src={flechaAdelante}
                  alt="x"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default nivelUno;
