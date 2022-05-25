import React from "react";

const BusinessSummary = () => {
  return (
    <div>
      <div
        alt=""
        className="hero min-h-screen"
        style={{
          background: `url(https://www.jeep.com.bd/content/dam/cross-regional/asean/jeep/common/2021/wrangler/vlp-features/MY21-Wrangler-Overview-Summer-Hero-New-Desktop.jpg.img.1440.jpg/w=1000&h=800)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="container text-white">
            <div className=" bg-gray-800 md:stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">we served</div>
                <div className="stat-value text-secondary">100+</div>
                <div className="stat-desc">customers</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">We have</div>
                <div className="stat-value text-secondary">50+</div>
                <div className="stat-desc">tools</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">revenue</div>
                <div className="stat-value text-secondary">120M+</div>
                <div className="stat-desc">Annual revenue</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img
                        alt=""
                        src="https://api.lorem.space/image/face?w=128&h=128"
                      />
                    </div>
                  </div>
                </div>
                <div className="stat-value">33K+</div>
                <div className="stat-title">Reviews</div>
                <div className="stat-desc text-secondary">Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
