import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '4em',
    margin: '0 15%',
    padding: '3em 0',
    [theme.breakpoints.down('lg')]: {
      margin: '0 5% 5em 5%',
    },
    [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridRowGap: '2em',
    },
  },
  blurbWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  blurbTitle: {
    fontWeight:'600',
    marginBottom: '.8em',
  },
  blurbText: {
    margin: '1em 0',
  },
})

const Blurb = props => {
  const { classes } = props
  return (
      <div className={classes.root}>

        <div className={classes.blurbWrapper}>
          <Typography className={classes.blurbTitle} variant="h5">
            My Passion
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            Act like an artist... think like a scientist.
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            Scaffolding applications from new ideas or restructuring aging systems allows for tremendous creative freedom.  I express myself through my designs, and bring them to life with my code.
          </Typography>
        </div>

        <div className={classes.blurbWrapper}>
          <Typography className={classes.blurbTitle} variant="h5">
            My Vision
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            I believe that excellent UX and memorable interfaces are the most important part of any application.  I try to leverage my experiences to modernize legacy systems using modern frameworks.
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            With new ideas, I hope to build a foundation of intelligent design standards and a flexible code base to guides future development.
          </Typography>
        </div>

        <div className={classes.blurbWrapper}>
          <Typography className={classes.blurbTitle} variant="h5">
            My Impact
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            I design from scratch when no design team exists, or translate UX decisions into working code.
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            I enjoy taking on multiple roles, acting as a liaison between either designers and engineers, or clients and products. I bring the desire to create lasting, enjoyable UX (and the technical ability to do it) to any team.
          </Typography>
        </div>

      </div>
  )
}

export default withStyles(styles)(Blurb)
