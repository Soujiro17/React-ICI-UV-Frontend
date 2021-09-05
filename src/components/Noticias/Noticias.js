import React from "react";
import "./Noticias.scss";
import { tarjetas } from "../../data/tarjeta";
import Tarjeta from "../Tarjeta/Tarjeta";

const Noticias = () => {
  return (
    <div style={{ paddingLeft: "37px" }}>
      <div className="noticias-title">Noticias</div>
      <div className="noticias">
        {tarjetas.map(({ titulo, fecha, tipo }, i) => {
          return <Tarjeta titulo={titulo} fecha={fecha} tipo={tipo} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Noticias;
