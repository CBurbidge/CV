import React, { Component } from 'react';
import './App.css';
import CV from './components/CV';
import resume from "./resume.json";
import skills from "./skills.json";

class App extends Component {
  
  render() {
    var theme = "default";

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CV react</h1>
        </header>
        <CV jsonResume={resume} skills={skills} theme={theme} />
      </div>
    );
  }
}

export default App;

