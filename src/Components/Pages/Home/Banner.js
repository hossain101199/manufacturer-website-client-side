import React from "react";

const Banner = () => {
  return (
    <div>
      <div
      alt=""
        className="hero min-h-screen"
        style={{
          background: `url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80w=1000&h=800)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-4xl font-bold">SEE FURTHER</h1>
            <h1 className="mb-5 text-5xl font-bold">GO FASTER</h1>
            <p className="mb-5">
              Light the way with Aitch's Light Lighting Solution
            </p>
            <button className="btn">Exploree Now > </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
