import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

import Typed from 'react-typed';

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
  },
  contentRed: {
    background: theme.palette.primary.light,
    color: '#fff',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  contentDark: {
    background: theme.palette.primary.main, //'#303030',
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
})

const About= props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <div className={classNames([
          classes.leftWrapper,
          classes.aboutSection,
          (props.currentTheme === 'dark'
            ? null
            : classes.contentRed)
        ])}>
        <Typography variant="h5" className={
          (props.currentTheme === 'dark'
            ? null
            : classes.contentRed)}>
          Things I say about myself
        </Typography>
        <div className={classes.leftContent}>
          <Typography variant="subtitle1" className={classNames([
              classes.typedWrapper,
              (props.currentTheme === 'dark'
                ? null
                : classes.contentRed)
            ])}>
            <Typed
                strings={[
                  'I <b class="love-dogs-hightlight">LOVE</b> my dogs.',
                  'I like backpacking.',
                  'I like coffee.',
                  'I like woodworking.',
                  'I like writing.',
                  'I like music.',
                  'I like running.',
                  'I like pizza.',
                  'I like video games.',
                  'I like drawing.',
                  'I like cooking.',
                  'I like camping.',
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
          (props.currentTheme === 'dark'
            ? classes.contentDark
            : null)
        ])}>
        <Typography variant="h5" className={
          (props.currentTheme === 'dark'
            ? classes.contentDark
            : null)}>
          Things other people say about me
        </Typography>
        <div className={classes.rightContent}>
          {
            testimonials.map( (testimonial, index) => (
              <TestimonialCard
                key={index}
                author={testimonial.author}
                authorTitle={testimonial.authorTitle}
                quote={testimonial.quote}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(About)
