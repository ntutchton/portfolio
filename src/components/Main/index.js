import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import SvgLogo from '../Logo'
import { Parallax } from 'react-scroll-parallax';

import HeroImage from './HeroImage'
import Timeline from './Timeline/'
import Skills from './Skills/'
import Projects from './Projects/'
import Certs from './Certs'
import Blurb from './Blurb'


const styles = theme => ({
  root: {
    flex: '1'
  },
  link: {
    textDecoration: 'none',
  },
  hero: {
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  heroImage: {
    height:'750px',
    gridColumnStart: '5',
    gridColumnEnd: '13',
    marginBottom: '100px',
    zIndex: '3',
    display: 'flex',
    transition: 'all 1s ease-in-out',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5em',
    },
    [theme.breakpoints.down('sm')]: {
      gridColumnStart: '1',
      zIndex: '3',
      marginLeft: '0',
      marginTop: '-50px',
      marginBottom: '0',
      height: '400px',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumnEnd: '12',
    },
  },
  heroText: {
    transition: 'all 1s ease-in-out',
    gridColumnStart: '2',
    gridColumnEnd: '5',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10em',
    zIndex: '3',
    marginBottom: '-750px',
    [theme.breakpoints.down('sm')]: {
      gridColumnEnd: '12',
      marginTop: '-6em',
    },
  },
  heroName: {
    marginBottom: '1.3em',
    fontWeight: '700',
  },
  heroContactButton: {
    width: '15em',
    height: '4em',
    marginBottom: '15em',
  },
  paralaxWrapper: {
    transform: 'translateY(-430px)translateX(100px)',
    zIndex: '-1',
  },
  paralaxDark: {
    opacity: '.2'
  },
  skillSection: {
      display: 'flex',
      flexDirection: 'column',
  },
  skillsHeader: {
    padding: '0 5% 0 5%',
    textAlign: 'center',
  },
  projectHeader: {
    padding: '0 2% 1em 2%',
    textAlign: 'center',
  },
  blurbSection: {
    backgroundColor: '#ebebeb',
  },
  blurbSectionDark: {
    backgroundColor: '#303030',
  },
})

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>

        <div className={classes.hero}>

          <div className={classes.heroText}>

            <Typography variant="h6" color="textSecondary" style={{width: '150%', marginBottom: '2em'}}>
              Hello, my name is
            </Typography>
            <Typography variant="h3" className={classes.heroName}>
              Nathan Tutchton
            </Typography>
            <Typography variant="h6" color="textSecondary" style={{width: '150%'}}>
              I design and develop beautiful
            </Typography>
            <Typography variant="h6" color="textSecondary" style={{marginBottom: '4em', width: '150%'}}>
              full-stack applications.
            </Typography>
            <Link to="/contact" className={classes.link} onClick={()=>{props.updateActiveUrlHash('')}}>
              <Button variant="contained" color="primary" className={classes.heroContactButton}>
                Contact Me
              </Button>
            </Link>

            <Parallax
              className={classNames([classes.paralaxWrapper, (props.currentTheme === 'dark' ? classes.paralaxDark: null)])}
              offsetYMax={20}
              offsetYMin={-20}
              slowerScrollRate
              tag="figure">
                <SvgLogo size={700} type="greyscale"></SvgLogo>
            </Parallax>

          </div>

          <div className={classes.heroImage}>
            <HeroImage />
          </div>

        </div>

        <div id="work">
          <Timeline theme={props.theme} updateActiveUrlHash={props.updateActiveUrlHash}/>
        </div>

        <div className={classNames([classes.blurbSection, (props.currentTheme === 'dark' ? classes.blurbSectionDark : null)])}>
          <Blurb currentTheme={props.currentTheme}/>
        </div>

        <div id="projects">
          <Typography variant="h3" className={classes.projectHeader}>
            My Projects
          </Typography>
          <Projects theme={props.theme}/>
        </div>

        <div id="skills" className={classes.skillSection}>
          <Typography variant="h3" className={classes.skillsHeader}>
            <span> I built those <span role="img" aria-label="point-down" >☝🏻</span> with these <span role="img" aria-label="point-down">👇🏻</span></span>
          </Typography>
          <Skills theme={props.theme}/>
        </div>


        <div className={classes.certsSection}>
          <Certs currentTheme={props.currentTheme}/>
        </div>

      </div>

    </div>
  );
}

Main.ropTypes = {
  updateActiveUrlHash: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default withStyles(styles)(Main);
