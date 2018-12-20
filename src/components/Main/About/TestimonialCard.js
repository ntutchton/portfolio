import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {

  }
})

class TestimonialCard extends React.Component{

  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>

      </div>
    )
  }
}

export default withStyles(styles)(TestimonialCard)
