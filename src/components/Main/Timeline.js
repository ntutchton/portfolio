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
      justifyContent: 'space-around',
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
      textAlign: 'left',
    },
  },
  textWrapper: {
      display:'flex',
      flexDirection: 'column',
      flexGrow: '1',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexGrow: '2',
      },
  },
  paper: {
    margin: '1em 0 3em 0',
    padding: '1em 1.5em',
    [theme.breakpoints.down('md')]: {
      padding: '1em',
      order: '2',
      margin:  '0 0 0 0', //TODO tweak for blurb height
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

        <TimelineSection scroll={this.state.scroll} sectionHeight={800} type="left" order='top' logoSource="logos/DISH.svg">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus sapien eget eleifend lacinia. In sagittis in risus non dictum. Ut sit amet lorem arcu. Proin sed nulla feugiat, blandit eros eu, tempor ex. Etiam non condimentum ex. Vivamus dapibus ante sed rhoncus vehicula. Cras dictum porttitor leo, ac sodales mauris scelerisque sed. Donec odio neque, consectetur nec pulvinar eu, maximus id arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </Typography>
              </Paper>
              <span></span>
            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={800} type="right" order='top' logoSource="logos/QUESTION.svg">
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                Who Knows?
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus sapien eget eleifend lacinia. In sagittis in risus non dictum. Ut sit amet lorem arcu. Proin sed nulla feugiat, blandit eros eu, tempor ex. Etiam non condimentum ex. Vivamus dapibus ante sed rhoncus vehicula. Cras dictum porttitor leo, ac sodales mauris scelerisque sed. Donec odio neque, consectetur nec pulvinar eu, maximus id arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </Typography>
              </Paper>

              <Link to="/contact" className={classes.link} onClick={()=>{this.props.updateActiveUrlHash('')}}>
                <Button variant="contained" color="primary" className={classes.seeMoreButton} >
                  Let's Work Together
                </Button>
              </Link>

            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={800} type="left" order="top" logoSource="logos/BITS.svg">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus sapien eget eleifend lacinia. In sagittis in risus non dictum. Ut sit amet lorem arcu. Proin sed nulla feugiat, blandit eros eu, tempor ex. Etiam non condimentum ex. Vivamus dapibus ante sed rhoncus vehicula. Cras dictum porttitor leo, ac sodales mauris scelerisque sed. Donec odio neque, consectetur nec pulvinar eu, maximus id arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
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
                    <Typography variant="subtitle1" >You will need an active security clearence to view this content.</Typography>
                    <Button style={{marginTop: '1em'}} href={'https://my.gs.mil/login'}>
                      No Problem <ArrowForward style={{marginLeft: '5px'}}/>
                    </Button>
                  </div>
               </Popover>
            </div>
          </div>
        </TimelineSection>

        <TimelineSection scroll={this.state.scroll} sectionHeight={800} type="right" order='top' logoSource="logos/QUESTION.svg">
          <div className={classes.wrapper}>
            <div className={classes.headerWrapper}>
              <Typography variant="h4" className={classes.header}>
                Who Knows?
              </Typography>
            </div>
            <div className={classes.textWrapper}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="body1" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus sapien eget eleifend lacinia. In sagittis in risus non dictum. Ut sit amet lorem arcu. Proin sed nulla feugiat, blandit eros eu, tempor ex. Etiam non condimentum ex. Vivamus dapibus ante sed rhoncus vehicula. Cras dictum porttitor leo, ac sodales mauris scelerisque sed. Donec odio neque, consectetur nec pulvinar eu, maximus id arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </Typography>
              </Paper>

              <Link to="/contact" className={classes.link} onClick={()=>{this.props.updateActiveUrlHash('')}}>
                <Button variant="contained" color="primary" className={classes.seeMoreButton} >
                  Let's Work Together
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
