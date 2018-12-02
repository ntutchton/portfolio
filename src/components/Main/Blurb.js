import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '4em',
    margin: '0 15%',
    padding: '8em 0',
    [theme.breakpoints.down('lg')]: {
      margin: '0 5%',
    },
    [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    },
  },
  blurbWrapper: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
  },
  blurbTitle: {
    // textAlign:'center',
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
          <Typography className={classes.blurbTitle} variant="h6">
            Blurb
          </Typography>
          <Typography className={classes.blurbText} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis bibendum iaculis. Morbi vel ornare ante. Integer dignissim dapibus sem. In hac habitasse platea dictumst. Fusce vehicula sodales orci, at faucibus sem consequat sit amet. Nam sodales nibh vitae maximus rhoncus.
          </Typography>
          <Typography className={classes.blurbText} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis bibendum iaculis. Morbi vel ornare ante. Integer dignissim dapibus sem. In hac habitasse platea dictumst. Fusce vehicula sodales orci, at faucibus sem consequat sit amet. Nam sodales nibh vitae maximus rhoncus.
          </Typography>
        </div>

        <div className={classes.blurbWrapper}>
          <Typography className={classes.blurbTitle} variant="h6">
            Blurb
          </Typography>
          <Typography className={classes.blurbText} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis bibendum iaculis. Morbi vel ornare ante. Integer dignissim dapibus sem. In hac habitasse platea dictumst. Fusce vehicula sodales orci, at faucibus sem consequat sit amet. Nam sodales nibh vitae maximus rhoncus.
          </Typography>
        </div>

        <div className={classes.blurbWrapper}>
          <Typography className={classes.blurbTitle} variant="h6">
            Blurb
          </Typography>
          <Typography className={classes.blurbText} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis bibendum iaculis. Morbi vel ornare ante. Integer dignissim dapibus sem. In hac habitasse platea dictumst. Fusce vehicula sodales orci, at faucibus sem consequat sit amet. Nam sodales nibh vitae maximus rhoncus.
          </Typography>
        </div>

      </div>
  )
}

export default withStyles(styles)(Blurb)
