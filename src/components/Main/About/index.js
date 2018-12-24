import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

import Typed from 'react-typed';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ChevronRight'
import ArrowBack from '@material-ui/icons/ChevronLeft'

import testimonials from './testimonials'
import TestimonialCard from './TestimonialCard'

const styles = theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    }
  },
  aboutSection: {
    textAlign: 'center',
    width: '50%',
    paddingTop: '6em',
    minHeight: '750px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '3em 1em 0 1em',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '200px',
    },
  },
  aboutHeader: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  leftWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightWrapper: {
    background: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: '1',
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: '1',
    padding: '0 5%',
  },
  contentRed: {
    background: theme.palette.primary.light,
    color: '#fff',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  contentDark: {
    background: '#424242', //theme.palette.primary.main, //'#303030',
    color: '#fff',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
  typedWrapper: {
    fontSize: '300%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '150%',
    },
  },
  navButton: {
    // display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
})

class About extends React.Component {

  state = {
    slideIndex: 0
  }

  componentDidMount(){
    // have to trigger one autoplay cycle when navigating from another page or component displays very strangely prior to autoplay
    this.setState({
      slideIndex: 1
    })
  }


  render(){
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classNames([
            classes.leftWrapper,
            classes.aboutSection,
            (this.props.currentTheme === 'dark'
              ? null
              : classes.contentRed)
          ])}>
          <Typography variant="h5" className={
            (this.props.currentTheme === 'dark'
              ? null
              : classes.contentRed)}>
            Things I say about myself
          </Typography>
          <div className={classes.leftContent}>
            <Typography variant="subtitle1" className={classNames([
                classes.typedWrapper,
                (this.props.currentTheme === 'dark'
                  ? null
                  : classes.contentRed)
              ])}>
              <Typed
                  strings={[
                    'I <b class="love-dogs-hightlight">LOVE</b> my dogs.',
                    'I like backpacking.',
                    'I like coffee.',
                    'I like woodworking.',
                    'I like hiking.',
                    'I like drawing.',
                    'I like pizza.',
                    'I like video games.',
                    'I like running.',
                    'I like cooking.',
                    'I like writing.',
                    'I like live music.',
                    'I like my dogs.',]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={2500}
                  smartBackspace={true}
                  loop />
            </Typography>
          </div>
        </div>
        <div className={classNames([
            classes.rightWrapper,
            classes.aboutSection,
            (this.props.currentTheme === 'dark'
              ? classes.contentDark
              : null)
          ])}>
          <Typography variant="h5" className={classNames([
              classes.aboutHeader,
              (this.props.currentTheme === 'dark'
                ? classes.contentDark
                : null)
            ])}>
            Things other people say about me
          </Typography>
          <div className={classes.rightContent}>
            <Carousel
              renderCenterLeftControls={({ previousSlide }) => (
                <IconButton className={classes.navButton} onClick={previousSlide}><ArrowBack/></IconButton>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <IconButton className={classes.navButton} onClick={nextSlide}><ArrowForward/></IconButton>
              )}
              renderBottomCenterControls={({ currentSlide }) => (null)}
              swiping={true}
              slideIndex={this.state.slideIndex}
              wrapAround={true}
              autoplay={true}
              autoplayInterval={6500}
              pauseOnHover={true}
              easing={'easePolyInOut'}
              disableKeyboardControls={true}>
              {
                testimonials.map( (testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    image={testimonial.image}
                    author={testimonial.author}
                    authorTitle={testimonial.authorTitle}
                    quote={testimonial.quote}
                  />
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(About)
