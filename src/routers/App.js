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
import ayuda from "../pages/ayuda";
import creditos from "../pages/creditos";
import acercaDe from "../pages/acerdaDe";
import nivelUno from "../pages/nivelUno";
import ppnivelDos from "../pages/ppnivelDos";
import pNivelUno from "../pages/pNivelUno";
import StickerIncoUno from "../pages/StickerIncoUno";
import StickerIncoDos from "../pages/StickerIncoDos";
import StickerIncoTres from "../pages/StickerIncoTres";
import StickerIncoCuatro from "../pages/StickerIncoCuatro";
import StickerIncoCinco from "../pages/StickerIncoCinco";
import StickerCorreUno from "../pages/StickerCorreUno";
import StickerCorreDos from "../pages/StickerCorreDos";
import StickerCorreTres from "../pages/StickerCorreTres";
import StickerCorreCuatro from "../pages/StickerCorreCuatro";
import StickerCorreCinco from "../pages/StickerCorreCinco";
import preguntaUnoInco from "../pages/preguntaUnoInco";
import preguntaDosInco from "../pages/preguntaDosInco";
import preguntaTresInco from "../pages/preguntaTresInco";
import preguntaCuatroInco from "../pages/preguntaCuatroInco";
import preguntaCincoInco from "../pages/preguntaCincoInco";
import preguntaUnoNd from "../pages/preguntaUnoNd";
import preguntaDosNd from "../pages/preguntaDosNd";
import preguntaTresNd from "../pages/preguntaTresNd";
import preguntaCuatroNd from "../pages/preguntaCuatroNd";
import preguntaCincoNd from "../pages/preguntaCincoNd";
import preguntaUnoCorre from "../pages/preguntaUnoCorre";
import preguntaDosCorre from "../pages/preguntaDosCorre";
import preguntaTresCorre from "../pages/preguntaTresCorre";
import preguntaCuatroCorre from "../pages/preguntaCuatroCorre";
import preguntaCincoCorre from "../pages/preguntaCincoCorre";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={inicio} />
        <Route exact path="/logins" component={logins} />
        <Route exact path="/barraNavegacion" component={barraNavegacion} />
        <Route exact path="/perfil" component={perfil} />
        <Route exact path="/registro" component={registro} />
        <Route exact path="/menu" component={menu} />
        <Route exact path="/trofeos" component={trofeos} />
        <Route exact path="/medallas" component={medallas} />
        <Route exact path="/ayuda" component={ayuda} />
        <Route exact path="/creditos" component={creditos} />
        <Route exact path="/acercaDe" component={acercaDe} />
        <Route exact path="/nivelUno" component={nivelUno} />
        <Route exact path="/ppnivelDos" component={ppnivelDos} />
        <Route exact path="/pNivelUno" component={pNivelUno} />
        <Route exact path="/StickerIncoUno" component={StickerIncoUno} />
        <Route exact path="/StickerIncoDos" component={StickerIncoDos} />
        <Route exact path="/StickerIncoTres" component={StickerIncoTres} />
        <Route exact path="/StickerIncoCuatro" component={StickerIncoCuatro} />
        <Route exact path="/StickerIncoCinco" component={StickerIncoCinco} />
        <Route exact path="/StickerCorreUno" component={StickerCorreUno} />
        <Route exact path="/StickerCorreDos" component={StickerCorreDos} />
        <Route exact path="/StickerCorreTres" component={StickerCorreTres} />
        <Route
          exact
          path="/StickerCorreCuatro"
          component={StickerCorreCuatro}
        />
        <Route exact path="/StickerCorreCinco" component={StickerCorreCinco} />
        <Route exact path="/preguntaUnoInco" component={preguntaUnoInco} />
        <Route exact path="/preguntaDosInco" component={preguntaDosInco} />
        <Route exact path="/preguntaTresInco" component={preguntaTresInco} />
        <Route
          exact
          path="/preguntaCuatroInco"
          component={preguntaCuatroInco}
        />
        <Route exact path="/preguntaCincoInco" component={preguntaCincoInco} />
        <Route exact path="/preguntaUnoNd" component={preguntaUnoNd} />
        <Route exact path="/preguntaDosNd" component={preguntaDosNd} />
        <Route exact path="/preguntaTresNd" component={preguntaTresNd} />
        <Route exact path="/preguntaCuatroNd" component={preguntaCuatroNd} />
        <Route exact path="/preguntaCincoNd" component={preguntaCincoNd} />
        <Route exact path="/preguntaUnoCorre" component={preguntaUnoCorre} />
        <Route exact path="/preguntaDosCorre" component={preguntaDosCorre} />
        <Route exact path="/preguntaTresCorre" component={preguntaTresCorre} />
        <Route
          exact
          path="/preguntaCuatroCorre"
          component={preguntaCuatroCorre}
        />
        <Route
          exact
          path="/preguntaCincoCorre"
          component={preguntaCincoCorre}
        />
        <Route exact path="/preguntaTresCorre" component={preguntaTresCorre} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
