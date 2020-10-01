import React from "react";
import "../Style/styles.css";

class barraNavegacion extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 class="titulo">
          {" "}
          <strong>barra navegacion </strong>
        </h1>
        <div className="row">
          <div className="col-sm">
            <button class="canecaRoja" type="submit">
              <img
                src="https://i.ibb.co/1b5kL1c/61547918-mascota-de-la-historieta-papelera-de-reciclaje-rojo-feliz-del-car-cter-agitando-para-el-sal.png"
                alt="x"
              />
            </button>
          </div>
          <div className="col-sm">
            <button class="canecaVerde" type="submit">
              <img
                src="https://i.ibb.co/wJgDv7W/image-removebg-preview-3-removebg-preview.png"
                alt="x"
              />
            </button>
          </div>
        </div>
        <div class="barraNavegacionIcon">
          <button class="casa" type="submit">
            <img src="https://i.ibb.co/4fPwspb/casa.png" alt="x" />
          </button>

          <button class="perfil" type="submit">
            <a href="perfil">
              <img src="https://i.ibb.co/mC9TP04/usuario.png" alt="x" />
            </a>
          </button>

          <button class="menu" type="submit">
            <a href="menu">
              <img src="https://i.ibb.co/tqgr3zS/menu-1.png" alt="x" />
            </a>
          </button>

          <button class="trofeo" type="submit">
            <a href="trofeos">
              <img src="https://i.ibb.co/tzqggY1/trofeo.png" alt="x" />
            </a>
          </button>

          <button class="medalla" type="submit">
            <a href="medallas">
              <img src="https://i.ibb.co/zHSdCL6/premio.png" alt="x" />
            </a>
          </button>

          <button class="configuracion" type="submit">
            <a href="configuracion">
              <img
                src="https://i.ibb.co/KL4VF8R/configuraciones-1.png"
                alt="x"
              />
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default barraNavegacion;
