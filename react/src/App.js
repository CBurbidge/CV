import React, { Component } from 'react';
import './App.css';
import CV from './components/cv/CV';
import cv from "./resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CV react</h1>
        </header>
        <CV jsonResume={cv}/>
      </div>
    );
  }
}

export default App;

