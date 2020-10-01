import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import inicio from "../pages/inicio";
import logins from "../pages/logins";
import registro from "../pages/registro";
import barraNavegacion from "../pages/barraNavegacion";
import perfil from "../pages/perfil";
import menu from "../pages/menu";
import trofeos from "../pages/trofeos";
import medallas from "../pages/medallas";
import configuracion from "../pages/configuracion";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={inicio} />
        <Route exact path="/logins" component={logins} />
        <Route exact path="/registro" component={registro} />
        <Route exact path="/barraNavegacion" component={barraNavegacion} />
        <Route exact path="/perfil" component={perfil} />
        <Route exact path="/menu" component={menu} />
        <Route exact path="/trofeos" component={trofeos} />
        <Route exact path="/medallas" component={medallas} />
        <Route exact path="/configuracion" component={configuracion} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
