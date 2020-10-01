import React from "react";
import "../Style/styles.css";

class inicio extends React.Component {
  render() {
    return (
      <div className="container-fluid" class="fondo">
        <div className="row">
          <div className="col-md-11">
            <h1 class="titulo">
              <strong>Bienvenidos a reciclando "Ando"</strong>
            </h1>
          </div>
          <div className="col-md-1">
            <img
              class="ImagenInicio"
              src="https://i.ibb.co/0KqXvdV/verde-removebg-preview-removebg-preview.png"
              alt="x"
            />
          </div>
        </div>
        <div className="centrarBtnInicio">
          <button type="button" className="btn btn-success">
            <a href="logins" className="comenzar">
              <strong>Comenzar</strong>
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default inicio;
