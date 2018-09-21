import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nathan's Development Pipeline</h1>
        </header>
        <p className="App-intro">
          Create React App makes this project way easier... still working on getting my dependencies through the pipeline.
        </p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
      </div>
    );
  }
}

export default App;
