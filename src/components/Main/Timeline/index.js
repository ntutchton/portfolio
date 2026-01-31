import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { HashLink as Link } from 'react-router-hash-link';

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
        maxWidth: '100%',
        marginTop: '13em',
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
                  2018 - 2021
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
          <div className={classes.wrapper} id="current-history">
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                UI / UX Developer
              </Typography>
              <Typography variant="subtitle2" className={classes.date}>
                2018 - 2020
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1">
                  I worked as a full stack developer across both small and large teams at BIT Systems supporting the FADE and BODHI contracts for the NGA. I served primarily as a frontend lead on an internal FADE application used to manage DevOps pipelines and operational processes for NGA systems. In this role, I created wireframes, UX flows, interface designs, and built new Dockerized microservices to support the core application. I also contributed to BODHI by developing and maintaining frontend components and modernizing legacy AngularJS systems to contemporary Angular.                
                </Typography>
              </Paper>
            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={this.state.defaultSectionHeight} type="right" order='top' logoSource="logos/ICR.svg" backgroundImageUrl={'images/space.jpg'} currentTheme={this.props.theme.palette.type}>
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                Software Engineer
              </Typography>
              <Typography variant="subtitle2" className={classes.date}>
                2020 - 2021
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  During my time at ICR, I contributed to a range of projects, with the majority of my efforts supporting the ICEBREAKER/SMF initiatives. I configured, deployed, containerized, and hardened multiple applications using Docker across an operational Kubernetes cluster, gaining exposure to a variety of SIGINT-related workflows and processes. In parallel with DevSecOps responsibilities, I supported rapid prototyping and surge efforts for several JavaScript-based applications.                </Typography>
              </Paper>
            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={this.state.defaultSectionHeight} type="left" order='top' logoSource="logos/PFI_logo.png" backgroundImageUrl={'images/media-room.jpg'} currentTheme={this.props.theme.palette.type}>
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                Lead Frontend Engineer
              </Typography>
              <Typography variant="subtitle2" className={classes.date}>
                2021 - 2026
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  At Pixel Forensics, I served as the technical lead for an Angular application developed in coordination with the National Media Exploitation Center (NMEC) and used to triage and analyze millions of media files daily. Operating in a highly autonomous capacity, I worked directly with customers and partner teams to shape requirements and drive new initiatives. I owned core architectural and design decisions and implemented solutions that maximized the practical impact of custom-trained AI models within a production system.                </Typography>
              </Paper>
            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={this.state.defaultSectionHeight} type="right" order='top' logoSource="logos/CACI_logo.png" backgroundImageUrl={'images/server.jpg'} currentTheme={this.props.theme.palette.type}>
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                Software Engineer
              </Typography>
              <Typography variant="subtitle2" className={classes.date}>
                2026 - Present
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  CACI Blurb
                </Typography>
              </Paper>
            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={this.state.defaultSectionHeight} type="left" order='top' logoSource="logos/FUTURE.svg" backgroundImageUrl={'images/cliff.jpg'} currentTheme={this.props.theme.palette.type}>
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                Who Knows?
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  As long as there are new and exciting ideas out there, I will be developing them.  I'm always looking for new challenges – freelance or full-time.  Let's create something awesome, together.
                </Typography>
              </Paper>

              <Link smooth to="/#contact" className={classes.link} onClick={()=>{this.props.updateActiveUrlHash('')}}>
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
