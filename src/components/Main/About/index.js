import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Typed from 'react-typed';

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
    minHeight: '500px',
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
    background: '#fff'
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: '1',
  },
  contentRed: {
    background: theme.palette.primary.light,
    color: '#fff',
  },
  typedWrapper: {
    fontSize: '150%',
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
        <Typography variant="h4" className={
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
                  'I like running.',
                  'I like pizza.',
                  'I like video games.',
                  'I like drawing.',
                  'I like my dogs.',]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={3500}
                smartBackspace={true}
                loop />
          </Typography>
        </div>
      </div>
      <div className={classNames([
          classes.rightWrapper,
          classes.aboutSection,
          (props.currentTheme === 'dark'
            ? classes.contentRed
            : null)
        ])}>
        <Typography variant="h4" className={
          (props.currentTheme === 'dark'
            ? classes.contentRed
            : null)}>
          Things other people say about me
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(About)
