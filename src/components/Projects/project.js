import React from "react";
//import "./projects.css";
//import weather from "../images/weather-app.png";
//import taste from "../images/taste.png";
//import organize from "../images/organize.png";
//import myphy from "../images/myphy.png";

class Projects extends React.Component {
  render() {
    return (
      <div className="PortfolioPage" id="projects">
        <div className="project-top">
          <div className="h1-top">Projects</div>
          <div className="h3-top">What I've been up to.</div>
          <p>Here are some of my recent work.</p>
        </div>
        <div className="ProjectDiv">
          <div className="weather-div">
            <div className="post">{/* <img src={weather}></img> */}</div>
            <div className="div-info">
              <h3>Nitro</h3>
              <p>Internal Library for Apple. It is a design build system.</p>
              <p>Used React, HTML, JavaScriptStyled Component, CSS</p>
              <p>The internal React Library</p>
              {/* <div className="hover-buttons">
                <a
                  style={{ display: "table-cell" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://world-weather-website.herokuapp.com/"
                >
                  Visit Site
                </a>
                <a
                  style={{ display: "table-cell" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Tai510/weather-app"
                >
                  View GitHub
                </a>
              </div> */}
            </div>
          </div>

          <div className="taste-div">
            <div className="post">{/* <img src={taste}></img> */}</div>
            <div className="div-info">
              <h3>BIDM</h3>
              <p>Applied Materials.</p>
              <p>Used React, React Bootstrap, Styled Components, Css</p>
              <p>Fully Responsive on small devices</p>
              {/* <div className="hover-buttons">
                <a
                  style={{ display: "table-cell" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://himalayasinsonoma.com/"
                >
                  Visit Site
                </a>
                <a
                  style={{ display: "table-cell" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Tai510/taste-official"
                >
                  View GitHub
                </a>
              </div> */}
            </div>
          </div>

          <div className="organize-div">
            <div className="post">{/* <img src={organize}></img> */}</div>
            <div className="div-info">
              <h3>Control Tower </h3>
              <p>Quarterly resource allocation.</p>
              <p>
                Used React, React Bootstrap, Firebase, Styled Components, Css
              </p>
              <p>UI lead for this project</p>
              {/* <div className="hover-buttons">
                <a
                  style={{ display: "table-cell" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://auth-production-8d2eb.web.app"
                >
                  Visit Site
                </a>
                <a
                  style={{ display: "table-cell" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Tai510/firebase-app"
                >
                  View GitHub
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
