import React from "react";
import { items } from "../../data/navbar";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item active" style={{ border: "0" }}>
          Inicio
        </li>
        {items?.map(({ nombre, path }, i) => {
          return (
            <li className="nav-item" key={i}>
              {nombre}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
