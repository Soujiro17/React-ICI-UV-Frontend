import React from "react";
import "./Tarjeta.scss";
import noticia from "../../assets/noticia.jpg";
import investigacion from "../../assets/investigacion.jpg";

const Tarjeta = ({ titulo, fecha, tipo }) => {
  return (
    <div className="tarjeta">
      <div className="tarjeta-head">
        <img
          src={tipo === "noticia" ? noticia : investigacion}
          className="tarjeta-foto"
          alt=""
        />
      </div>
      <div className="tarjeta-body">{titulo}</div>
      <div className="tarjeta-footer">{fecha}</div>
    </div>
  );
};

export default Tarjeta;
