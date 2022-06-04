import React from "react";
import me from "../../Image/image2.png";

const MyPortfolio = () => {
  return (
    <div className=" container mx-auto ">
      <div className="card bg-base-100 shadow-xl grid lg:grid-cols-3 m-4 p-4 ">
        <div className="lg:col-span-1 grid justify-items-center flex items-center">
          <img className="" src={me} alt="Album" />
        </div>
        <div className="lg:col-span-2 max-w-full leading-normal">
          <h2 className="text-center font-bold text-2xl">MOHAMMAD HOSSAIN</h2>
          <h4 className="text-center">
            Front-end Developer || Full Stack Developer || MERN Stack Developer
          </h4>
          <p className="text-center">
            4335 Chittagong, Bangladesh | +880 1756-400875 |
            fshossain10@gmail.com |
            <a
              className="text-blue-600"
              href="https://www.linkedin.com/in/hossain1011/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              LinkedIn{" "}
            </a>
            |
            <a
              className="text-blue-600"
              href="https://github.com/hossain101199"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              GitHub{" "}
            </a>
          </p>
          <div className="divider"></div>
          <p className="text-lg font-semibold"> SKILLS </p>
          <p>
            <span className="font-semibold">Front-End Technologies:</span>{" "}
            React, JavaScript, Bootstrap, Tailwind CSS, HTML5, CSS3. <br />
            <span className="font-semibold">Back-End Technologies:</span>{" "}
            Node.js, Express.js, MongoDB, Firebase.
            <br />
            <span className="font-semibold">Familiar:</span> TypeScript, React
            Native, Expo, Next.js. <br />
            <span className="font-semibold">Tools:</span> VS Code, Notepad++,
            Git, GitHub, Chrome Dev Tools, Figma, Netlify, Postman, Heroku.
          </p>
          <div className="divider"></div>
          <p className="text-lg font-semibold"> PROJECTS </p>
        </div>
      </div>
      <div className="divider mt-6"></div>
    </div>
  );
};

export default MyPortfolio;
