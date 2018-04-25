import React, { Component } from 'react';
import CV from './components/CV/CV';
import resume from "./components/CV/resume.json";
import skills from "./components/CV/skills.json";

class App extends Component {
  
  render() {
    var theme = "default";
    var divId = "cvElement"

    var print = false;

    return (
      <div id={divId} >
        <CV jsonResume={resume} skills={skills} theme={theme} print={print} divId={divId} />
      </div>
    );
  }
}

export default App;

