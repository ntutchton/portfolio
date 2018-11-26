import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    // background: '#424242',

  },
})

class Skills extends React.Component{
  state = {

  }

  render() {
    const { classes } = this.props
    return(
      <div className={classes.root}>
        <h1>tests</h1>
      </div>
    )
  }
}

Skills.propTypes = {

}

export default withStyles(styles)(Skills)
