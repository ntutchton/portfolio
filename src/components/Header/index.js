import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { red } from '@material-ui/core/colors/';
import SvgLogo from '../Logo'
import ThemeToggle from './ThemeToggle'

const styles = theme => ({
  root: {
        zIndex: '10',
  },
  container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridRowGap: '1em',
  },
  logo: {
    gridColumnStart: '2',
    margin:'.4em',
    display:'flex',
    justifyContent: 'center',
  },
  navButtons: {
    gridColumnStart: '3',
    gridColumnEnd: '9',
    display:'flex',
    justifyContent:'flex-end',
    paddingTop:'22px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  button: {
    height: '36px',
    margin:'0 1em',
  },
  themeToggle: {
    gridColumnStart: '10',
    margin: '0 .5em',
  },
  contact: {
    paddingTop:'20px',
    gridColumnStart: '11',
    gridColumnEnd: '13',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  contactButton: {
    margin: '0 .5em',
  },
  link: {
    textDecoration: 'none',
    outline: 'none',
  },
  burgerMenu: {
    gridColumnStart:12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});


class Header extends React.Component{
  state = {
    anchorEl: null,
  };

  determineLogoColor = () => {
    if (this.props.currentTheme === 'dark'){ return 'light' }
    if (this.props.currentTheme === 'light'){ return 'dark' }
  }

  //returns active link color style object if link is included in url #
  isActive = (linkName) => {
    if (this.props.activeUrlHash.includes(linkName)) { return { color: red[500] } }
  }

  updateActiveUrlHash = destination => {
    this.props.updateActiveUrlHash(destination)
  }

  handleBurgerMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleBurgerMenuClose = destination => {
    this.setState({ anchorEl: null });
    if (destination){
      this.props.updateActiveUrlHash(destination)
    }
  };

  smoothScroll = (el, subElementId) => {
    if (subElementId){
      let subEl = document.getElementById(subElementId)
      subEl.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        el.scrollIntoView({ behavior: 'smooth' })
    }
  }


  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    //contains both a large screen menu and a burger menu. They are not rendered contitionally, but rather hidden with JSS media queries at screen breakpoints
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <div className={classes.container}>
              <div className={classes.logo}>
                <SvgLogo type={this.determineLogoColor()} size={64}></SvgLogo>
              </div>
              <div className={classes.navButtons}>
                <Link to="/#history" className={classes.link} scroll={el => {this.smoothScroll(el, 'current-history')}}>
                  <Button size="medium" variant="text" className={classes.button} onClick={()=>{this.updateActiveUrlHash('#history')}}>
                    <span style={ this.isActive('history') }> History </span>
                  </Button>
                </Link>
                <Link to="/#work" className={classes.link} scroll={this.smoothScroll} >
                  <Button size="medium" variant="text" className={classes.button} onClick={()=>{this.updateActiveUrlHash('#work')}} >
                    <span style={ this.isActive('work') }> Work </span>
                  </Button>
                </Link>
                <Link to="/#skills" className={classes.link} scroll={this.smoothScroll}>
                  <Button size="medium" variant="text" className={classes.button} onClick={()=>{this.updateActiveUrlHash('#skills')}}>
                    <span style={ this.isActive('skills') }> Skills </span>
                  </Button>
                </Link>
                <Link to="/#about" className={classes.link} scroll={this.smoothScroll}>
                  <Button size="medium" variant="text" className={classes.button} onClick={()=>{this.updateActiveUrlHash('#about')}}>
                    <span style={ this.isActive('about') }> About </span>
                  </Button>
                </Link>
{ /*
  <Link to="/content#featured" className={classes.link} scroll={this.smoothScroll}>
    <Button size="medium" variant="text" className={classes.button} onClick={()=>{this.updateActiveUrlHash('#featured')}}>
      <span style={ this.isActive('featured') }> Life </span>
    </Button>
  </Link>
  <Link to="/content#podcasts" className={classes.link} scroll={this.smoothScroll}>
    <Button size="medium" variant="text" className={classes.button} onClick={()=>{this.updateActiveUrlHash('#podcasts')}}>
      <span style={ this.isActive('podcasts') }> Podcasts </span>
    </Button>
  </Link>
  <Link to="/content#media" className={classes.link} scroll={this.smoothScroll}>
    <Button size="medium" variant="text" className={classes.button} onClick={()=>{this.updateActiveUrlHash('#media')}}>
      <span style={ this.isActive('media') }> Media </span>
    </Button>
  </Link> */ null
}
              </div>
              <div className={classes.themeToggle}>
                <ThemeToggle currentTheme={this.props.currentTheme} changeTheme={this.props.changeTheme}></ThemeToggle>
              </div>
              <div className={classes.contact}>
                <Link to="/contact" className={classes.link}>
                  <Button size="large" variant="outlined"  className={classes.contactButton} onClick={()=>{this.updateActiveUrlHash('')}}>
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className={classes.burgerMenu}>
                <div>
                  <IconButton
                    aria-owns={anchorEl ? 'burger-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleBurgerMenuClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="burger-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => {this.handleBurgerMenuClose()}}
                  >
                    <Link to="/#history" className={classes.link} scroll={el => {this.smoothScroll(el, 'current-history')}}>
                      <MenuItem onClick={()=>{this.handleBurgerMenuClose('#history')}}>
                        <span style={ this.isActive('history') }> History </span>
                      </MenuItem>
                    </Link>
                    <Link to="/#work" className={classes.link} scroll={this.smoothScroll}>
                      <MenuItem onClick={()=>{this.handleBurgerMenuClose('#work')}}>
                        <span style={ this.isActive('work') }> Work </span>
                      </MenuItem>
                    </Link>
                    <Link to="/#skills" className={classes.link} scroll={this.smoothScroll}>
                      <MenuItem onClick={()=>{this.handleBurgerMenuClose('#skills')}}>
                        <span style={ this.isActive('skills') }> Skills </span>
                      </MenuItem>
                    </Link>
                    <Link to="/#about" className={classes.link} scroll={this.smoothScroll}>
                      <MenuItem onClick={()=>{this.handleBurgerMenuClose('#about')}}>
                        <span style={ this.isActive('about') }> About </span>
                      </MenuItem>
                    </Link>
{/*
  <Link to="/content#featured" className={classes.link} scroll={this.smoothScroll}>
    <MenuItem onClick={()=>{this.handleBurgerMenuClose('#featured')}}>
      <span style={ this.isActive('featured') }> Life </span>
    </MenuItem>
  </Link>
  <Link to="/content#podcasts" className={classes.link} scroll={this.smoothScroll}>
    <MenuItem onClick={()=>{this.handleBurgerMenuClose('#podcasts')}}>
      <span style={ this.isActive('podcasts') }> Podcasts </span>
    </MenuItem>
  </Link>
  <Link to="/content#media" className={classes.link} scroll={this.smoothScroll}>
    <MenuItem onClick={()=>{this.handleBurgerMenuClose('#media')}}>
      <span style={ this.isActive('media') }> Media </span>
    </MenuItem>
  </Link>
  */ null
}
                    <Link to="/contact" className={classes.link} scroll={this.smoothScroll}>
                      <MenuItem onClick={()=>{this.handleBurgerMenuClose('')}}>
                        <span style={ this.isActive('contact') }> Contact Me </span>
                      </MenuItem>
                    </Link>
                  </Menu>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  activeUrlHash: PropTypes.string.isRequired,
  updateActiveUrlHash: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
