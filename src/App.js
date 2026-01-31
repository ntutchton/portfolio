import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import smoothscroll from 'smoothscroll-polyfill';
import darkTheme from './themes/dark.theme.js';
import lightTheme from './themes/light.theme.js';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main'
import Content from './components/Content'
import Contact from './components/Contact'

const easterEgg = () => {
  console.log(
`
|\\  |  /|
| \\ | / |
|  \\|/  |
|  /|\\  |
| / | \\ |
|/ _|_ \\|
|  |_|  |
|   |   |
|   |   |
    |
    |
`)
}

class App extends Component {

  //grab theme pref from local storage, if set. otherwise return light theme
  fetchThemePreference = () => {
    return 'dark'
    // let themePreference = localStorage.getItem('themePreference');
    // if (themePreference) {
    //   return JSON.parse(themePreference)
    // } else return 'light'
  }

  state = {
    currentTheme: this.fetchThemePreference(),
    activeUrlHash: window.location.hash
  }

  componentWillMount = () => {
    smoothscroll.polyfill();
    easterEgg()
  }


  // switches currentTheme type between dark and light
  switchTheme = currentTheme => {
    switch (currentTheme) {
      case 'dark':
       localStorage.setItem('themePreference', JSON.stringify('light'));
        this.setState({
          currentTheme: 'light'
        })
        break;
      case 'light':
       localStorage.setItem('themePreference', JSON.stringify('dark'));
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
    return darkTheme
    // switch (currentTheme) {
    //   return 'dark'
    //   case 'dark':
    //     return darkTheme
    //     // break;
    //   case 'light':
    //     return lightTheme
    //     // break;
    //   default:
    //     console.error('failed to return a valid theme object')
    //     break;
    // }
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
          <ParallaxProvider>
            <CssBaseline />
            <MuiThemeProvider theme={this.getThemeObject(this.state.currentTheme)}>
                <div className={
                  (this.state.currentTheme === 'dark')
                    ? 'App dark-app'
                    : 'App dark-app'}>
                  {/* <Header
                    updateActiveUrlHash={this.updateActiveUrlHash}
                    activeUrlHash={this.state.activeUrlHash}
                    currentTheme={this.state.currentTheme}
                    changeTheme={this.switchTheme}/>
                  <Switch>
                    <Route exact path="/" render={(props) => <Main {...props} currentTheme={this.state.currentTheme} theme={this.getThemeObject(this.state.currentTheme)} updateActiveUrlHash={this.updateActiveUrlHash} />} />
                    <Route exact path="/content" component={Content} />
                    <Route exact path="/contact"
                      component={()=>(
                        <Contact currentTheme={this.state.currentTheme}/>
                      )}/>
                    <Route component={ ()=>(<Redirect to="/" />) } />
                  </Switch>
                  <Footer updateActiveUrlHash={this.updateActiveUrlHash}/> */}
                  <Route exact path="/" render={(props) => 
                  <React.Fragment>
                    <Main {...props} currentTheme={this.state.currentTheme} theme={this.getThemeObject(this.state.currentTheme)} updateActiveUrlHash={this.updateActiveUrlHash} />
                    <div id="contact" style={{ width: '100%' }}>
                    <Contact currentTheme={this.state.currentTheme}/>
                    </div> 
                  </React.Fragment>
                  } />
                </div>
            </MuiThemeProvider>
          </ParallaxProvider>
        </React.Fragment>
      </Router>
    );
  }
}


export default App;
