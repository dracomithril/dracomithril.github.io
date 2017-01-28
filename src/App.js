import React, { Component } from 'react';
import logo from './dragon.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to DracoMithril page</h2>
        </div>
        <p className="App-intro">
          Work in progress
        </p>
      </div>
    );
  }
}

export default App;
