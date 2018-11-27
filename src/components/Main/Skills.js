import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import SkillCircle from './SkillCircle'

const styles = theme => ({
  root: {
    flex: '1',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
})

class Skills extends React.Component{
  state = {

  }

  render() {
    const { classes } = this.props
    return(
      <div className={classes.root}>
        <SkillCircle yMax={0} yMin={-150} size={1} logo="" opposite={false}/>
        <SkillCircle yMax={0} yMin={-150} size={1} logo="" opposite={true}/>
      </div>
    )
  }
}

// Skills.propTypes = {
//
// }

export default withStyles(styles)(Skills)
