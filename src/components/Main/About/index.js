import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

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
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  leftWrapper: {
    //// TEMP:
    minHeight: '100vh',
    //END TEMP
  },
})

/*
<Typography variant="h4" >
  Things I say about myself
</Typography>
*/

const About= props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <div className={classNames([
          classes.leftWrapper,
          classes.aboutSection
        ])}>

      </div>
      <div className={classNames([
          classes.rightWrapper,
          classes.aboutSection
        ])}>
        <Typography variant="h4" >
          Things other people say about me
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(About)
