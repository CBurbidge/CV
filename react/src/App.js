import React, { Component } from 'react';
//import './App.css';
import CV from './components/CV/CV';
import resume from "./components/CV/resume.json";
import skills from "./components/CV/skills.json";

class App extends Component {
  
  render() {
    var theme = "default";

    return (
      <div id="cvElement" className="App">
        <CV jsonResume={resume} skills={skills} theme={theme} print={true} divId={"cvElement"} />
      </div>
    );
  }
}

export default App;

