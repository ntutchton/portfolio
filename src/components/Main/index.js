import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import SvgLogo from '../Logo'
import { Parallax } from 'react-scroll-parallax';


const styles = theme => ({
  root: {
    flex: '1'
  },
  section: {
    height: '1000px',
    width:'100%',
    zIndex: '2',
  },
  hero: {
    display: 'grid',
    height: '870px',
    overflow: 'hidden',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  heroImage: {
    height:'750px', //TEMP
    gridColumnStart: '5',
    gridColumnEnd: '13',
    backgroundColor: 'grey',
    display: 'flex',
    zIndex: '2',
    [theme.breakpoints.down('sm')]: {
      gridColumnStart: '1',
      zIndex: '3',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumnEnd: '12',
    },
  },
  heroText: {
    gridColumnStart: '2',
    gridColumnEnd: '5',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10em',
    zIndex: '3',
    marginBottom: '-750px',
    [theme.breakpoints.down('sm')]: {
      gridColumnEnd: '12',
    },
  },
  heroName: {
    marginBottom: '1.3em',
    fontWeight: '700',
    width:'200%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heroContactButton: {
    width: '15em',
    height: '4em',
    marginBottom: '15em',
  },
  paralaxWrapper: {
    // transform: 'translateY(60px)translateX(-80px)',//OR translateX(-60px) to support bad zindexing
    transform: 'translateY(-460px)translateX(-50px)',
    zIndex: '-1',
  },
  paralaxDark: {
    opacity: '.3'
  }
})
//            <div style={{ transform: 'translateX(0px)translateY(-470px)', zIndex: '-1', overflow: 'hidden', width: '200%' }}>
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
            <Button variant="contained" color="primary" className={classes.heroContactButton}>
              Contact Me
            </Button>


              <Parallax
                className={classNames([classes.paralaxWrapper, (props.currentTheme === 'dark' ? classes.paralaxDark: null)])}
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
              >
                  <SvgLogo size={700} type="greyscale"></SvgLogo>
              </Parallax>


          </div>

          <div className={classes.heroImage}>

          </div>

        </div>

        <div id="work" className={classes.section}>
          <Typography variant="h2">
            work
          </Typography>
        </div>

        <div id="skills" className={classes.section}>
          <Typography variant="h2">
            skills
          </Typography>
        </div>

        <div className={classes.blurb}>
          <Typography variant="h2">
            blurb
          </Typography>
        </div>

        <div id="projects" className={classes.section}>
          <Typography variant="h2">
            projects
          </Typography>
        </div>

      </div>

    </div>
  );
}

export default withStyles(styles)(Main);
