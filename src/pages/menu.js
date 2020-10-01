import React from "react";
import "../Style/styles.css";

class menu extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 class="titulo">
          <strong>Menú </strong>
        </h1>
        <div className="row">
          <div className="col-sm">
            <button class="canecaRoja" type="submit">
              <img
                src="https://i.ibb.co/4jpzL5X/Whats-App-Image-2020-07-17-at-11-removebg-preview-1-1.jpg"
                alt="x"
              />
            </button>

            <div>
              <button class="canecaAzul" type="submit">
                <img
                  src="https://i.ibb.co/2s5qWLN/Whats-App-Image-2020-07-17-at-11-removebg-preview-3-1.jpg"
                  alt="x"
                />
              </button>
            </div>
            <div>
              <button class="canecaGris" type="submit">
                <img
                  src="https://i.ibb.co/Z676NHF/Whats-App-Image-2020-07-17-at-11-removebg-preview.jpg"
                  alt="x"
                />
              </button>

              <div>
                <button class="casa" type="submit">
                  <img src="https://i.ibb.co/4fPwspb/casa.png" alt="x" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default menu;
