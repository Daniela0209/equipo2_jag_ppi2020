import React from "react";
import "../Style/styles.css";
import FondoPrincipal from "../imagenes/fondo.jpg";
import Icono from "../imagenes/caneca.jpg";

class inicio extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${FondoPrincipal})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 class="titulo">
              <strong>Bienvenidos a reciclando "Ando"</strong>
            </h1>
            <img
              className="rounded mx-auto d-block ImagenInicio"
              src={Icono}
              alt="x"
            />
            <button
              type="button"
              className="btn text-center btn-success centrarBtnInicio"
            >
              <a href="logins" className="comenzar">
                <strong>Comenzar</strong>
              </a>
            </button>
            <div className="col-sm-4 col-md-4 col-lg-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default inicio;
