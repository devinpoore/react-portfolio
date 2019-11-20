import React from 'react';

import './App.css';

// Import PROJECT Components
import Artwave from "./Components/ProjectComponents/Artwave";
import Artwave2 from "./Components/ProjectComponents/Artwave2";
import Carpoolify from "./Components/ProjectComponents/Carpoolify";

// Import BIO Components
import FullBio from "./Components/FullBio";
import ShortBio from "./Components/ShortBio";

// Other Components
import ContactModal from "./Components/ContactModal";
import TitleLinks from "./Components/ProjectComponents/TitleLinks";

class App extends React.Component {
  state = {
    selected: "artwave",
    bio: "short",
    projectInfo: require("./Components/ProjectComponents/projectInfo.json"),
    buttonInfo: []
  }

  // componentDidMount = () => {
  //   const buttonInfo = [];
  //   const projectInfo = require("./Components/ProjectComponents/projectInfo.json");
  //   for (let project in projectInfo) {
  //     buttonInfo.push({
  //       id: project.buttonId,
  //       value: project.buttonValue,
  //       text: project.title
  //     });
  //   }
  //   console.log(buttonInfo);
  //   this.setState({ buttonInfo, projectInfo });
  // }

  projectTabClicked = (event) => {
    event.preventDefault();
    this.setState({
      selected: event.target.value
    });
  }

  toggleBio = (event) => {
    event.preventDefault();
    this.setState({
      bio: event.target.value
    });
  }

  determineProjectComponent = () => {
    if (this.state.selected === "artwave") {
      return <Artwave />
    } else if (this.state.selected === "artwave2") {
      return <Artwave2 />
    } else if (this.state.selected === "carpoolify") {
      return <Carpoolify />
    }
  }

  render() {
    return (
      <div className="container">
        <hr id="topHr" />
        <header>
          {/* <h1>devin poore - portfolios.tech/prototype_0.0</h1> */}
          <h1>devin poore - portfolio</h1>
          {/* <h1>welcome to my portfolio <span role="img" aria-label="smiley emoji">🙂</span></h1> */}
        </header>
        <hr />
        {/* <h5>**this portfolio is currently under construction</h5>
        <hr /> */}

        <div className="row">

          <div id="projectButtons" className="col-md-2">
            <h4 id="projectsHeader">projects</h4>
            <hr />

            {/* {this.state.buttonInfo.map(button => {
              return <button id={button.id} className="btn btn-md" onClick={this.projectTabClicked} value={button.value}>{button.text}</button>
            })} */}

            <button id="aw" className="btn btn-md btn-block" onClick={this.projectTabClicked} value="artwave">artwave</button>
            <button id="aw2" className="btn btn-md btn-block" onClick={this.projectTabClicked} value="artwave2">artwave 2.0</button>
            <button id="cp" className="btn btn-md btn-block" onClick={this.projectTabClicked} value="carpoolify">carpoolify</button>
            <button id="cp2" className="btn btn-md btn-block" onClick={this.projectTabClicked} value="carpoolify2">carpoolify 2.0</button>
            <button id="spawtted" className="btn btn-md btn-block" onClick={this.projectTabClicked} value="spawtted">spawtted</button>
            <button id="cc" className="btn btn-md btn-block" onClick={this.projectTabClicked} value="chorechat">chorechat</button>
            <button id="pf" className="btn btn-md btn-block" onClick={this.projectTabClicked} value="portfolio">portfolio</button>

          </div>

          {/* PROJECTS */}
          {/* This should be a ternary depending on whether the sidebar 'about' is showing */}
          <div id="projectDesc" className="col-md-6" style={{ borderTop: "1px solid " + this.state.projectInfo[this.state.selected].hexCode }}>
            <TitleLinks projectObj={this.state.projectInfo[this.state.selected]} />
            <div id="projectContent">
              {this.determineProjectComponent()}
            </div>
          </div>


          {/* ABOUT */}
          <div id="about" className="col-md-4">
            <div id="insideAbout">

              <h4>about me</h4>
              <hr />

              <div className="row bioButtons">

                <div className="col-md-6">
                  <button className="btn btn-md btn-block" value="short" onClick={this.toggleBio}>Elevator Pitch</button>
                </div>

                <div className="col-md-6">
                  <button className="btn btn-md btn-block" value="full" onClick={this.toggleBio}>Full Bio</button>
                </div>

              </div>

              <hr/>

              <div id="insideAbout2">

                <div id="aboutText">
                  {this.state.bio === "short" ? <ShortBio /> : <FullBio />}
                </div>

              </div>

            </div>
            <button id="contactBtn" className="btn btn-md btn-success btn-block" data-toggle="modal" data-target="#contactModal">Contact Me</button>
          </div>

        </div>

        <ContactModal />

      </div>
    );
  }
}

export default App;
