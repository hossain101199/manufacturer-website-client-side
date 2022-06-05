import React from "react";
import me from "../../Image/image2.png";

const MyPortfolio = () => {
  return (
    <div className=" container mx-auto ">
      <div className="card bg-base-100 shadow-xl grid lg:grid-cols-3 m-4 p-4 ">
        <div className="lg:col-span-1 grid justify-items-center flex items-center">
          <img className="" src={me} alt="Album" />
        </div>
        <div className="text-black lg:col-span-2 max-w-full leading-normal">
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
          <p className="text-lg font-semibold underline underline-offset-4">
            {" "}
            SKILLS{" "}
          </p>
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
          <p
            className="text-lg font-semibold underline underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            PROJECTS{" "}
          </p>
          <div tabIndex="0" className="collapse collapse-arrow  bg-base-100">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <p>
                <span className="font-semibold">Aitch's Light</span>
              </p>
            </div>
            <div className="collapse-content">
              <p>
                <a
                  className="text-blue-600"
                  href="https://aitch-s-light.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  live site
                </a>{" "}
                |{" "}
                <a
                  className="text-blue-600"
                  href="https://github.com/hossain101199/manufacturer-website-server-side"
                  rel="noreferrer"
                  target="_blank"
                >
                  server-side code
                </a>{" "}
                |{" "}
                <a
                  className="text-blue-600"
                  href="https://github.com/hossain101199/manufacturer-website-client-side"
                  rel="noreferrer"
                  target="_blank"
                >
                  client-side code
                </a>
                .
              </p>
              <br />
              <p>
                Introducing a manufacturing website that interacts with both
                end-users and system administrators. Users can order products,
                pay with cards, and cancel orders before payment. Users can also
                rate and review. In contrast, the system administrator can
                manage orders, cancel orders prior to receiving payment, and add
                products. Lastly, the administrator can grant access to the
                administrative capabilities to any user.
              </p>
              <br />
              <p>
                <span className="font-semibold">Technologies:</span> React,
                Firebase, Express.js, JWT, MongoDB, Stripe, Tailwind, React
                Query, DaisyUI, React Toastify, React Hook Form, React Firebase
                Hooks
              </p>
            </div>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow  bg-base-100">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <p>
                <span className="font-semibold">Healthy Health</span>
              </p>
            </div>
            <div className="collapse-content">
              <p>
                <a
                  className="text-blue-600"
                  href="https://healthy-health-ade6b.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  live site
                </a>{" "}
                |{" "}
                <a
                  className="text-blue-600"
                  href="https://github.com/hossain101199/warehouse-management-server-side"
                  rel="noreferrer"
                  target="_blank"
                >
                  server-side code
                </a>{" "}
                |{" "}
                <a
                  className="text-blue-600"
                  href="https://github.com/hossain101199/warehouse-management-client-side"
                  rel="noreferrer"
                  target="_blank"
                >
                  client-side code
                </a>
                .
              </p>
              <br />
              <p>
                This warehouse management website has several interesting
                features. It starts with a homepage showing inventory items.
                Managed products, a feature of the website, allow users to make
                changes to the required quantity and product specifications.
                Users can utilise the "Add items" tool to add items, and
                logged-in users are the only ones who can interact with the
                site.
              </p>
              <br />
              <p>
                <span className="font-semibold">Technologies:</span> React,
                Firebase, Express.js, MongoDB, Bootstrap, React Toastify, React
                Firebase Hooks.
              </p>
            </div>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow  bg-base-100">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <p>
                <span className="font-semibold">Samiha's Mehendi</span>
              </p>
            </div>
            <div className="collapse-content">
              <p>
                <a
                  className="text-blue-600"
                  href="https://samiha-s-mehendi.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  live site
                </a>{" "}
                |{" "}
                <a
                  className="text-blue-600"
                  href="https://github.com/hossain101199/independent-service-provider"
                  rel="noreferrer"
                  target="_blank"
                >
                  code
                </a>
                .
              </p>
              <br />
              <p>
                Introducing an independent service provider website, which is,
                at its core, pretty straightforward: Only logged-in users can
                select a package and schedule an appointment at a convenient
                time.
              </p>
              <br />
              <p>
                <span className="font-semibold">Technologies:</span> React,
                Firebase, Bootstrap, React Toastify, React Firebase Hooks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider mt-6"></div>
    </div>
  );
};

export default MyPortfolio;
