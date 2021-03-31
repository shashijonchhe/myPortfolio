import React from "react";
import Projects from "../Projects/project";
import AboutPage from "../About-Page/about";
import Contact from "../Contact/contact";
import Navigation from "../Navbar/nav";
import "./home.css";
//import Navbar from "../Navbar/navbar";

class HomePage extends React.Component {
  render() {
    return (
      <div id="home">
         <Navigation />
        <div className="Home">
          <div className="intro">
            <p>Hi, My Name Is</p>
            <h1>Shashidhar Jonchhe</h1>
            <h1>I Am UI Developer</h1>
            <h6>
              <div>
                <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
              </div>
              <div>
                <span>React</span> <span className="css">Redux</span>{" "}
              </div>
              <div>
                <span>Bootstrap</span> <span>Angular</span>
              </div>
            </h6>
          </div>
          <div className="Buttons">
            <div className="button-div">
              {/* <a href="/#projects">
                <span className="view-projects-button ">
                  View Projects <i class="fas fa-arrow-down"></i>
                </span>
              </a> */}
            </div>
          </div>
        </div>
       
        {/* <Navbar /> */}
        <Projects />
        <AboutPage />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
