import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
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

const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridColumnGap: '1em',
    gridRowGap: '1em',
  },
  logo: {
    gridColumnStart: '2',
    margin:'.4em',
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
  },
  contact: {
    paddingTop:'20px',
    gridColumnStart: '11',
    gridColumnEnd: '13',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
    let url = window.location
    if (url.hash.includes(linkName)) { return { color: red[500] } }
  }

  handleBurgerMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleBurgerMenuClose = () => {
    this.setState({ anchorEl: null });

  };


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
                <Link to="/#work" className={classes.link}>
                  <Button size="medium" variant="text" className={classes.button}>
                    <span style={ this.isActive('work') }> Work </span>
                  </Button>
                </Link>
                <Link to="/#skills" className={classes.link}>
                  <Button size="medium" variant="text" className={classes.button}>
                    <span style={ this.isActive('skills') }> Skills </span>
                  </Button>
                </Link>
                <Link to="/#projects" className={classes.link}>
                  <Button size="medium" variant="text" className={classes.button}>
                    <span style={ this.isActive('projects') }> Projects </span>
                  </Button>
                </Link>
                <Link to="/content#featured" className={classes.link}>
                  <Button size="medium" variant="text" className={classes.button}>
                    <span style={ this.isActive('featured') }> Life </span>
                  </Button>
                </Link>
                <Link to="/content#podcasts" className={classes.link}>
                  <Button size="medium" variant="text" className={classes.button}>
                    <span style={ this.isActive('podcasts') }> Podcasts </span>
                  </Button>
                </Link>
                <Link to="/content#media" className={classes.link}>
                  <Button size="medium" variant="text" className={classes.button}>
                    <span style={ this.isActive('media') }> Media </span>
                  </Button>
                </Link>
              </div>
              <div className={classes.themeToggle}>
                <ThemeToggle currentTheme={this.props.currentTheme} changeTheme={this.props.changeTheme}></ThemeToggle>
              </div>
              <div className={classes.contact}>
                <Link to="/contact" className={classes.link}>
                  <Button size="large" variant="outlined"  className={classes.contactButton}>
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
                    onClose={this.handleBurgerMenuClose}
                  >
                    <Link to="/#work" className={classes.link}>
                      <MenuItem onClick={this.handleBurgerMenuClose}>
                        <span style={ this.isActive('work') }> Work </span>
                      </MenuItem>
                    </Link>
                    <Link to="/#skills" className={classes.link}>
                      <MenuItem onClick={this.handleBurgerMenuClose}>
                        <span style={ this.isActive('skills') }> Skills </span>
                      </MenuItem>
                    </Link>
                    <Link to="/#projects" className={classes.link}>
                      <MenuItem onClick={this.handleBurgerMenuClose}>
                        <span style={ this.isActive('projects') }> Projects </span>
                      </MenuItem>
                    </Link>
                    <Link to="/content#featured" className={classes.link}>
                      <MenuItem onClick={this.handleBurgerMenuClose}>
                        <span style={ this.isActive('featured') }> Life </span>
                      </MenuItem>
                    </Link>
                    <Link to="/content#podcasts" className={classes.link}>
                      <MenuItem onClick={this.handleBurgerMenuClose}>
                        <span style={ this.isActive('podcasts') }> Podcasts </span>
                      </MenuItem>
                    </Link>
                    <Link to="/content#media" className={classes.link}>
                      <MenuItem onClick={this.handleBurgerMenuClose}>
                        <span style={ this.isActive('media') }> Media </span>
                      </MenuItem>
                    </Link>
                    <Link to="/contact" className={classes.link}>
                      <MenuItem onClick={this.handleBurgerMenuClose}>
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
};

export default withStyles(styles)(Header);
