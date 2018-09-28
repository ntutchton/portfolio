import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import darkTheme from './themes/dark.theme.js';
import lightTheme from './themes/light.theme.js';
import logo from './logo.svg';
import './App.css';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class App extends Component {

  state = {
    currentTheme: 'dark',
  }

  // switches currentTheme type between dark and light
  switchTheme = currentTheme => {
    switch (currentTheme) {
      case 'dark':
        this.setState({
          currentTheme: 'light'
        })
        break;
      case 'light':
        this.setState({
          currentTheme: 'dark'
        })
        break;
      default:
        console.error('failed to switch to a valid theme')
        break;
    }
  }

  //returns valid MUI Theme Object based on state's currentTheme type
  //themes can be found in ./themes/*.theme.js
  getThemeObject = currentTheme => {
    switch (currentTheme) {
      case 'dark':
        return darkTheme
        // break;
      case 'light':
        return lightTheme
        // break;
      default:
        console.error('failed to return a valid theme object')
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={this.getThemeObject(this.state.currentTheme)}>
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">
                  <Typography>    Welcome to Nathan's Development Pipeline </Typography>
                  </h1>
                </header>
                <Paper>
                  <Button variant="outlined" color="primary" onClick={()=> {this.switchTheme(this.state.currentTheme)}}>
                    Test Theme Change
                  </Button>
                  <Button variant="raised" color="secondary">
                    MEEP
                  </Button>
                </Paper>
            </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
