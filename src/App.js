import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import darkTheme from './themes/dark.theme.js';
import lightTheme from './themes/light.theme.js';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main'
import Content from './components/Content'
import Contact from './components/Contact'


class App extends Component {

  state = {
    currentTheme: 'light',
    activeUrlHash: window.location.hash
  }

  componentWillMount = () => {
    smoothscroll.polyfill();
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

  updateActiveUrlHash = newValue => {
    this.setState({
      activeUrlHash: newValue
    })
  }


  render() {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={this.getThemeObject(this.state.currentTheme)}>
              <div className={
                (this.state.currentTheme === 'dark')
                  ? 'App dark-app'
                  : 'App light-app'}>
                <Header
                  updateActiveUrlHash={this.updateActiveUrlHash}
                  activeUrlHash={this.state.activeUrlHash}
                  currentTheme={this.state.currentTheme}
                  changeTheme={this.switchTheme}/>
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/content" component={Content} />
                  <Route exact path="/contact"
                    component={()=>(
                      <Contact currentTheme={this.state.currentTheme}/>
                    )}/>
                  <Route component={ ()=>(<Redirect to="/" />) } />
                </Switch>
                <Footer updateActiveUrlHash={this.updateActiveUrlHash}/>
              </div>
          </MuiThemeProvider>
        </React.Fragment>
      </Router>
    );
  }
}


export default App;
