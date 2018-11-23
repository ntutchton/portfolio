import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'grid',
    height:'100%',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  timelineImage: {
    height: '600px',
    backgroundColor: 'gold',
    gridColumnStart: '1',
    gridColumnEnd: '8',
  },
}

class Timeline extends React.Component {

  render(){
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.timelineImage}>

        </div>
        <div>

        </div>
      </div>
    )
  }
}

Timeline.propTypes = {

}

export default withStyles(styles)(Timeline)
