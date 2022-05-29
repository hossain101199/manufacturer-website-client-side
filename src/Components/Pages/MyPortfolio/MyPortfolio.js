import React from "react";
import me from "../../Image/image2.png";

const MyPortfolio = () => {
  return (
    <div className=" container mx-auto ">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={me} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">MOHAMMAD HOSSAIN</h2>
          <h4 className="">FRONT-END WEB DEVELOPER</h4>
          <p>email address: fshossain10@gmail.com</p>
          <p>educational background:</p>
          <p>
            Higher Secondary Certificate in Science 2020-2022 <br />
            Secondary School Certificate in Science 2015- 2017
          </p>
          <p>PROFESSIONAL SKILL:</p>
          <p>
            *React *JavaScript *ES6 *Bootstrap *Node.js *MongoDB *Express.js
            *Firebase
          </p>
        </div>
      </div>
      <div className="divider mt-6"></div>
    </div>
  );
};

export default MyPortfolio;
