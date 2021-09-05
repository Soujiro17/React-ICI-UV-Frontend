import React from "react";
import "./Header.scss";
import UV from "../../assets/uv-logo.png";
import { Navbar } from "..";

const Head = () => {
  return (
    <div className="head">
      <img src={UV} alt="logo" className="logo" />
      <div className="right-head">
        <p>Escuela de Ingeniería en Informática</p>
        Redes sociales
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="head-body">
      <Navbar />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Head />
      <Body />
    </header>
  );
};

export default Header;
