import React from "react";

export default function About() {
  return (
    <div className="container about " id="about-section">
      <div className="row">
        <div className="col">
          <h2 className="hr-lines hr-lines-1">ME?</h2>
          <h1>Let's get to know me</h1>
          <h3 className="blue-text">FullStack Web Developer / MERN Stack</h3>
          <p>
            I seek to work in a competitive field and ready to accept the
            challenges, utilizing my skills, would like to work with a highly
            esteemed company which gives me a platform to use my expertise and
            skills for mutual growth and benefit of company and myself.
          </p>
          <div className="row">
            <div className="col about-list">
              <ul>
                <li>
                  <strong>
                    <span className="green-arrow">➤ </span>
                    Full Name :
                  </strong>
                  <span>R.S.Jayasuriya</span>
                </li>
                <li>
                  <strong>
                    <span className="green-arrow">➤ </span>
                    Born :
                  </strong>
                  <span>01-07-1999</span>
                </li>
                <li>
                  <strong>
                    <span className="green-arrow">➤ </span>
                    Degree :
                  </strong>
                  <span>Engineering</span>
                </li>
                <li>
                  <strong>
                    <span className="green-arrow">➤ </span>
                    Nationality :
                  </strong>
                  <span>Indian</span>
                </li>
                <li>
                  <strong>
                    <span className="green-arrow">➤ </span>
                    Languages :
                  </strong>
                  <span>Tamil,English,Telugu</span>
                </li>
                <li>
                  <strong>
                    <span className="green-arrow">➤ </span>
                    City :
                  </strong>
                  <span>Virudhunagar,india</span>
                </li>
              </ul>
              <div style={{ color: "#000000" }} className="btn mb-4">
                <a
                  href="https://drive.google.com/file/d/1rIl9N4voaB_YMi11XF312_VAIPt1Ov2L/view?usp=sharing"
                  target="_blank"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
          <p>
            I Started off my self-learning journey with online tutorials Google,
            YouTube, SoloLearn, etc and take a step further and Enrolled in the
            GUVI IIT MADRAS Fullstack developer Nanodegree Program which
            involved extensive programming and real world projects. Later, I
            learned MERN Stack From Guvi and built an Website using React JS,
            Node, Express Js, MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
}
