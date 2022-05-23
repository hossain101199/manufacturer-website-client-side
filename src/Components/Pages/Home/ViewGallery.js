import React from "react";
import car1 from "../../Image/gallery (1).jpg";
import car2 from "../../Image/gallery (2).jpg";
import car3 from "../../Image/gallery (3).jpg";
import car4 from "../../Image/gallery (4).jpg";
import car5 from "../../Image/gallery (5).jpg";
import car6 from "../../Image/gallery (6).jpg";
import car7 from "../../Image/gallery (7).jpg";
import car8 from "../../Image/gallery (8).jpg";
import car9 from "../../Image/gallery (9).jpg";
import car10 from "../../Image/gallery (10).jpg";
import car11 from "../../Image/gallery (11).jpg";
import car12 from "../../Image/gallery (12).jpg";

const ViewGallery = () => {
  return (
    <div className="mx-auto ">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={car1} className="h-80" alt="" />
          <img src={car2} className="h-80" alt="" />
          <img src={car3} className="h-80" alt="" />
          <img src={car4} className="h-80" alt="" />
          <img src={car5} className="h-80" alt="" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={car5} className="h-80" alt="" />
          <img src={car6} className="h-80" alt="" />
          <img src={car7} className="h-80" alt="" />
          <img src={car8} className="h-80" alt="" />
          <img src={car9} className="h-80" alt="" />
          <img src={car10} className="h-80" alt="" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={car10} className="h-80" alt="" />
          <img src={car11} className="h-80" alt="" />
          <img src={car12} className="h-80" alt="" />
          <img src={car1} className="h-80" alt="" />
          <img src={car2} className="h-80" alt="" />
          <img src={car3} className="h-80" alt="" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewGallery;
