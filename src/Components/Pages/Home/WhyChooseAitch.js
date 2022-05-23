import React from "react";
import car from "../../Image/banner (3).jpg";

const WhyChooseAitch = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="basis-1/2 ">
            <img src={car} className="w-full rounded-lg shadow-2xl" alt="" />
          </div>

          <div className="basis-1/2">
            <h1 className="text-3xl font-bold">WHY CHOOSE AITCH'S LIGHT</h1>
            <p className="py-6">
              Aitch's Light as a leading brand of LED Light Bar, has been
              specialized in Automotive LED lighting technology over 10 years.
              We are committed to produce high-quality products, includes led
              work light, trailer light, headlights to meet all of your needs.
              Our mission is to supply the best led light bars for the best
              price, and offer every customer a 100% satisfaction customer care.
            </p>
            <button className="btn ">FIND OUT MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAitch;
