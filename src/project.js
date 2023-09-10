import React from "react";

export default function Project() {
  return (
    <div className="container project" id="project-section">
      <h2 className="hr-lines hr-lines-2">PROJECTS</h2>
      <div className="row">
        <div className="col-sm-12 col-lg-6 ">
          <div class="card" style={{ width: "18rem;" }}>
            <img src="/image/CRM.jpg" class="card-img-top" alt="..."></img>
            <div className="project-details">
              <h1 className="name" style={{ color: "#41c9ff" }}>
                CRM Web App
              </h1>
              <div>
                <a
                  className="project-btn"
                  href="https://github.com/Jayasuriya1/crm_Front_End"
                  target="_blank"
                >
                  Github FE <i class="bx bxl-github"></i>
                </a>
                <a
                  className="project-btn"
                  href="https://crm-jayasuriya.netlify.app/"
                  target="_blank"
                >
                  View Site <i class="bx bx-desktop"></i>
                </a>
                <a
                  className="project-btn"
                  href="https://github.com/Jayasuriya1/crm_Back_End"
                  target="_blank"
                >
                  Github BE <i class="bx bxl-github"></i>
                </a>
              </div>
              <p>
                This is Fullstack MERN website made it as a CRM.
                <br></br>
                This application is used for reviewing customer contacts, leads
                and Service Requests.
              </p>
              <p style={{ fontSize: "0.7rem" }}>
                <span style={{ color: "#41c9ff" }}>TECT USED :</span>
                <span style={{ color: "#d18d0d" }}>
                  REACT, NODE, EXPRESS JS, MONGODB
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div class="card" style={{ width: "18rem;" }}>
            <img
              src="/image/url-shortener.jpg"
              class="card-img-top"
              alt="..."
            ></img>
            <div className="project-details">
              <h1 className="name" style={{ color: "#2c49a7" }}>
                URL Shortener
              </h1>
              <div>
                <a
                  className="project-btn"
                  href="https://github.com/Jayasuriya1/url-shortener-FE"
                  target="_blank"
                >
                  Github FE <i class="bx bxl-github"></i>
                </a>
                <a
                  className="project-btn"
                  href="https://shorturl0.netlify.app/"
                  target="_blank"
                >
                  View Site <i class="bx bx-desktop"></i>
                </a>
                <a
                  className="project-btn"
                  href="https://github.com/Jayasuriya1/URL-Shortner-BE"
                  target="_blank"
                >
                  Github BE <i class="bx bxl-github"></i>
                </a>
              </div>
              <p>
                This is Fullstack MERN website made it as a URL Shortener.
                <br></br>
                This application is used to convert long URLs into concise.
              </p>
              <p style={{ fontSize: "0.7rem" }}>
                <span style={{ color: "#41c9ff" }}>TECT USED :</span>
                <span style={{ color: "#d18d0d" }}>
                  REACT, NODE, EXPRESS JS, MONGODB
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div class="card" style={{ width: "18rem;" }}>
            <img src="/image/weather.png" class="card-img-top" alt="..."></img>
            <div className="project-details">
              <h1 className="name" style={{ color: "#00ffff" }}>
                Weather App
              </h1>
              <div>
                <a
                  className="project-btn"
                  href="https://github.com/Jayasuriya1/weather-application"
                  target="_blank"
                >
                  Github <i class="bx bxl-github"></i>
                </a>
                <a
                  className="project-btn"
                  href="https://weather-app-666.netlify.app/"
                  target="_blank"
                >
                  View Site <i class="bx bx-desktop"></i>
                </a>
              </div>
              <p>
                This website made it as a Weather App
                <br></br>
                This site is used to know your Current Location Weather.
              </p>
              <p style={{ fontSize: "0.7rem" }}>
                <span style={{ color: "#41c9ff" }}>TECT USED :</span>
                <span style={{ color: "#d18d0d" }}>REACT</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div class="card" style={{ width: "18rem;" }}>
            <img
              src="/image/post-office.jpg"
              class="card-img-top"
              alt="..."
            ></img>
            <div className="project-details">
              <h1 className="name" style={{ color: "#ff4141" }}>
                India Post - Get Details of Your Nearest Post Office
              </h1>
              <div>
                <a
                  className="project-btn"
                  href="https://github.com/Jayasuriya1/Postalpincode"
                  target="_blank"
                >
                  Github <i class="bx bxl-github"></i>
                </a>
                <a
                  className="project-btn"
                  href="https://rsj-locatepostoffice.netlify.app/"
                  target="_blank"
                >
                  View Site <i class="bx bx-desktop"></i>
                </a>
              </div>
              <p>This application is used search the Post Office Details.</p>
              <p style={{ fontSize: "0.7rem" }}>
                <span style={{ color: "#41c9ff" }}>TECT USED :</span>
                <span style={{ color: "#d18d0d" }}>HTML, CSS, JAVASCRIPT</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
