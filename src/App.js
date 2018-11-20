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

import Header from './components/Header';


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
              <Header currentTheme={this.state.currentTheme} changeTheme={this.switchTheme}/>
            </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
