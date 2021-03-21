import React from "react";
import "./about.css";
// import images from "../images/profilePic.jpg";
//import images from "../images/myPic-goat.png";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage " id="aboutpage">
        <div className="project-top">
          <div className="h1-top">About Me</div>
          <div className="h3-top">Hard working, Passionate, Team Player.</div>
          <p>I am extremely passionate about Web Development</p>
        </div>
        <div className="about-image-div">
          <div className="about-Image">
            {/* <img alt="my-pic" src={images}></img> */}
          </div>

          <div className="about-Info">
            <div>
              <h1>Hi, This is Shashi 😄</h1>
            </div>
            <div className="about-description">
              <p>
                I am passionate Web Developer.I am a Front End Developer with
                passion for problem solving and creating intuitive, dynamic user
                experiences.
              </p>
            </div>

            <div>
              <div className="about-Links">
                <div>
                  <a
                    style={{ display: "table-cell" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                  >
                    <i id="aboutIcon" class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <div id="about-github-Icon">
                  <a
                    style={{ display: "table-cell" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                  >
                    <i id="aboutIcon" class="fab fa-github"></i>
                  </a>
                </div>
                <div id="about-email-Icon">
                  <a href="mailto:shashidharjonchhe1991@gmail.com">
                    <i id="aboutIcon" class="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
