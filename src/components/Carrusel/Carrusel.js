import React from "react";
import "./Carrusel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { carousel } from "../../data/carousel";

const Carrusel = () => {
  return (
    <div className="carrusel">
      <Carousel showThumbs={false}>
        {carousel.map((banner, i) => {
          return (
            <div key={i}>
              <img src={banner} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carrusel;
