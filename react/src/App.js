import React, { Component } from 'react';
//import './App.css';
import CV from './components/CV';
import resume from "./resume.json";
import skills from "./skills.json";

class App extends Component {
  
  render() {
    var theme = "default";

    return (
      <div className="App">
        <CV jsonResume={resume} skills={skills} theme={theme} print={true} />
      </div>
    );
  }
}

export default App;

