import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom'

import TimelineSection from './TimelineSection'

let lastScrollY = 0;
let ticking = false;

const styles = theme => ({
  root: {
    overflow: 'hidden'
  },
  link: {
    textDecoration: 'none',
  },
  wrapper: {
    padding: '5%',
    [theme.breakpoints.down('md')]: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  headerWrapper: {
    [theme.breakpoints.down('md')]: {
      padding: '1em 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      flexGrow: '1',
    },
  },
  header:{
    padding: '.5em 0',
    [theme.breakpoints.down('md')]: {
      width:'60%',
      padding: '0',
    },
  },
  date: {
    padding: '0 5%',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      width: '60%',
      padding: '0',
      fontSize: '130%',
      textAlign: 'left',
    },
  },
  textWrapper: {
      display:'flex',
      flexDirection: 'column',
      flexGrow: '1',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        flexGrow: '2',
        maxWidth: '50%',
        justifyContent: 'flex-start',
      },
      [theme.breakpoints.down('sm')]: {
        flexGrow: '2',
        justifyContent: 'space-evenly',
        maxWidth: '70%',
        marginTop: '1em',
      },
  },
  paper: {
    margin: '1em 0 3em 0',
    padding: '1em 1.5em',
    [theme.breakpoints.down('md')]: {
      padding: '1em',
      marginTop: '1em',
      order: '2',
      margin:  '0 0 0 0', //TODO tweak for blurb height
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0',
      background: 'none',
      boxShadow:  'none', //TODO tweak for blurb height
    },
  },
  seeMoreButton: {
    width: '15em',
    height: '4em',
    [theme.breakpoints.down('md')]: {
      order: '1',
    },
  },
  popover:{
    margin: '2em',
    textAlign:'center',
  },
})

class Timeline extends React.Component {
  state = {
    scroll: 0,
    anchorEl: null,
    defaultSectionHeight: 700,
  }

  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.setState({
          scroll: lastScrollY
        })
        ticking = false;
      });
      ticking = true;
    }
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render(){
    const { classes } = this.props
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>

        <TimelineSection scroll={this.state.scroll} sectionHeight={this.state.defaultSectionHeight} type="left" order='top' logoSource="logos/DISH.svg" backgroundImageUrl={'images/mobo.jpg'} currentTheme={this.props.theme.palette.type}>
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                Software Configuration and Build Engineer
              </Typography>
              <Typography variant="subtitle2" className={classes.date}>
                2017
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  I started my development career with a homegrown Colorado business – DISH.  I helped build large scale internal applications to manage software update processes.  My team was primarily responsible for configuring updates and bugfixes prior to release in satellite uplink channels.
                </Typography>
              </Paper>
              <span></span>
            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={this.state.defaultSectionHeight} type="right" order='top' logoSource="logos/DU.svg" backgroundImageUrl={'images/laptop.jpg'} currentTheme={this.props.theme.palette.type}>
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <div className={classes.headerWrapper}>
                <Typography variant="h4" className={classes.header}>
                  M.S. in Software Engineering
                </Typography>
                <Typography variant="subtitle2" className={classes.date}>
                  2018 - 2020
                </Typography>
              </div>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  After leaving DISH I began work on a Software Engineering Master's Degree at University of Denver.  This program has expanded my abilities beyond web development and into other ares of the software management lifecycle. Working alongside students with different personal and educational backgrounds has allowed me to build a diverse and valuable professional network.
                </Typography>
              </Paper>

              <span></span>

            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={this.state.defaultSectionHeight} type="left" order="top" logoSource="logos/BITS.svg" backgroundImageUrl={'images/UX.jpg'} currentTheme={this.props.theme.palette.type}>
          <div className={classes.wrapper} id="current-work">
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                UI / UX Developer
              </Typography>
              <Typography variant="subtitle2" className={classes.date}>
                2018 - Present
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1">
                  Currently, I work as full stack developer on a  BIT Systems contract for the National Geospacial Administration.  Our tool manages DevOps pipelines and processes for NGA groups.  I primarily work on the frontend as the UI/UX lead, using industry standard tools to create seamless user experiences.
                </Typography>
              </Paper>
              <Button
                 aria-owns={open ? 'bits-popover' : undefined}
                 aria-haspopup="true"
                 variant="contained"
                 className={classes.seeMoreButton}
                 color="primary"
                 onClick={this.handleClick}
               >
                 See More
               </Button>
               <Popover
                 id="bits-popover"
                 open={open}
                 anchorEl={anchorEl}
                 onClose={this.handleClose}
                 anchorOrigin={{
                   vertical: 'bottom',
                   horizontal: 'center',
                 }}
                 transformOrigin={{
                   vertical: 'top',
                   horizontal: 'center',
                 }}
               >
                  <div className={classes.popover}>
                    <Typography variant="subtitle1" >You will need TS/SCI NGA login credentials to view this content.</Typography>
                    <Button style={{marginTop: '1em'}} href={'https://my.gs.mil/login'}>
                      No Problem <ArrowForward style={{marginLeft: '5px'}}/>
                    </Button>
                  </div>
               </Popover>
            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={this.state.defaultSectionHeight} type="right" order='top' logoSource="logos/FUTURE.svg" backgroundImageUrl={'images/cliff.jpg'} currentTheme={this.props.theme.palette.type}>
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                Who Knows?
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  As long as there are new and exciting ideas out there, I will be developing them.  I'm always looking for new challenges – freelance or full-time.  Let's create something awesone, together.
                </Typography>
              </Paper>

              <Link to="/contact" className={classes.link} onClick={()=>{this.props.updateActiveUrlHash('')}}>
                <Button variant="contained" color="primary" className={classes.seeMoreButton} >
                  Get in touch
                </Button>
              </Link>

            </div>
          </div>
        </TimelineSection>
      </div>
    )
  }
}

Timeline.propTypes = {
  updateActiveUrlHash: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
}


export default withStyles(styles)(Timeline)
