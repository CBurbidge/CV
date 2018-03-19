import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CV from './components/cv/CV'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CV react</h1>
        </header>
        <CV />
      </div>
    );
  }
}

export default App;
