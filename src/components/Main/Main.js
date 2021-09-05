import React from "react";
import "./Main.scss";
import Carrusel from "../Carrusel/Carrusel";
import Noticias from "../Noticias/Noticias";

const Content = () => {
  return (
    <div className="content">
      <Carrusel />
    </div>
  );
};

const Main = () => {
  return (
    <main className="main">
      <div className="main-content">
        <Content />
        <Noticias />
      </div>
    </main>
  );
};

export default Main;
