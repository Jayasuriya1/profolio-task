import React from "react";

export default function Myskill() {
  return (
    <div className="myskill container" id="skill-section">
      <h2 className="hr-lines hr-lines-2">MY SKILLS</h2>
      <div className="tect-stack">
        <div style={{ background: "#945915" }} className="skill-container">
          HTML <i class="bx bxl-html5 bx-sm icon"></i>
        </div>
        <div style={{ background: "#0c3a80" }} className="skill-container">
          CSS <i class="bx bxl-css3 bx-sm icon"></i>
        </div>
        <div style={{ background: "#858626" }} className="skill-container">
          JAVSCRIPT <i class="bx bxl-javascript bx-sm icon"></i>
        </div>
        <div style={{ background: "#574669" }} className="skill-container">
          BOOTSTRAP <i class="bx bxl-bootstrap bx-sm icon"></i>
        </div>
        <div style={{ background: "#1c5c61" }} className="skill-container">
          REACT <i class="bx bxl-react bx-sm icon"></i>
        </div>
        <div style={{ background: "#3d1515" }} className="skill-container">
          NODE <i class="bx bxl-nodejs bx-sm icon"></i>
        </div>
        <div style={{ background: "#1c3d15" }} className="skill-container">
          EXPRESS
        </div>
        <div style={{ background: "#308320" }} className="skill-container">
          MONGODB <i class="bx bxl-mongodb bx-sm icon"></i>
        </div>
        <div style={{ background: "#b90000" }} className="skill-container">
          {" "}
          <i class="fa-brands fa-npm fa-2xl" style={{ color: "#e20c0c;" }}></i>
        </div>
        <div style={{ background: "#856969" }} className="skill-container">
          GITHUB <i class="bx bxl-github bx-sm icon"></i>
        </div>
      </div>
    </div>
  );
}
