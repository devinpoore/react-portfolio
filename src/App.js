import React from 'react';

import './App.css';

// Import PROJECT Components
import Artwave from "./Components/Artwave";

// Other Components
import ContactModal from "./Components/ContactModal";

class App extends React.Component {
  state = {
    selected: "artwave"
  }

  projectTabClicked = (event) => {
    event.preventDefault();
    this.setState({
      selected: event.target.value
    });
  }

  determineProjectComponent = () => {
    if (this.state.selected === "artwave") {
      return <Artwave />
    }
  }
  
  render() {
    return (
      <div className="container">
        <hr id="topHr"/>
        <header>
          <h1>devin poore - portfolios.tech/prototype_0.0</h1>
        </header>
        <hr/>
  
        <div className="row">
  
          <div id="projectButtons" className="col-md-2">
            <h4>projects</h4>
            <hr/>
            <button id="aw" className="btn btn-md" onClick={this.projectTabClicked} value="artwave">artwave</button>
            <button id="aw2" className="btn btn-md" onClick={this.projectTabClicked} name="" value="artwave 2.0">artwave 2.0</button>
            <button id="cp" className="btn btn-md" onClick={this.projectTabClicked} name="" value="carpoolify">carpoolify</button>
            <button id="cp2" className="btn btn-md" onClick={this.projectTabClicked} name="" value="carpoolify 2.0">carpoolify 2.0</button>
            <button id="spawtted" className="btn btn-md" onClick={this.projectTabClicked} name="" value="spawtted">spawtted</button>
            <button id="cc" className="btn btn-md" onClick={this.projectTabClicked} name="" value="chorechat">chorechat</button>
            <button id="pf" className="btn btn-md" onClick={this.projectTabClicked} name="" value="portfolio">portfolio</button>
          </div>
  
          {/* This should be a ternary depending on whether the sidebar 'about' is showing */}
          <div id="projectDesc" className="col-md-6">
            {/* Possibly factor the TitleLinks component out of the Artwave component */}
            {this.determineProjectComponent()}
          </div>
  
          <div id="about" className="col-md-4">
            <div id="insideAbout">

              <div id="insideAbout2">
                <p>about</p>
                <hr/>
                <button className="btn btn-md btn-success" data-toggle="modal" data-target="#contactModal">Contact Me</button>

                <pre>
                  <code>
                  </code>
                </pre>

              </div>

            </div>
          </div>

        </div>

        <ContactModal />
  
      </div>
    );
  }
}

export default App;
