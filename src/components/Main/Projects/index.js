import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import ProjectCard from './ProjectCard'

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    // gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridColumnGap: '3em',
    gridRowGap: '3em',
    margin: '1em 10%',
    [theme.breakpoints.down('lg')]: {
      margin: '1em 5%',
    },
    [theme.breakpoints.down('md')]: {
      margin: '1em 10px',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '5%',
    },
  }
})

class Projects extends React.Component{

  state = {

  }

  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    )
  }
}

export default withStyles(styles)(Projects)
