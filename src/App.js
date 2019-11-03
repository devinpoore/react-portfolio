import React from 'react';

import './App.css';

import Artwave from "./Components/Artwave";

class App extends React.Component {
  state = {
    selected: "artwave"
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
             <button id="aw" className="btn btn-md">artwave</button>
             <button id="aw2" className="btn btn-md">artwave 2.0</button>
             <button id="cp" className="btn btn-md">carpoolify</button>
             <button id="cp2" className="btn btn-md">carpoolify 2.0</button>
             <button id="spawtted" className="btn btn-md">spawtted</button>
             <button id="cc" className="btn btn-md">chorechat</button>
          </div>
  
          {/* This should be a ternary depending on whether the sidebar 'about' is showing */}
          <div id="projectDesc" className="col-md-6">
            {/* <h2>Selected project description here</h2> */}
            <Artwave />
          </div>
  
          <div id="about" className="col-md-4">

            <div id="insideAbout">

              <div id="insideAbout2">
                <p>about section</p>
                <hr/>
              </div>

            </div>

          </div>

        </div>
  
      </div>
    );
  }
}

export default App;
