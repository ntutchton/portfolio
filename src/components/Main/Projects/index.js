import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import ProjectCard from './ProjectCard'

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '1em 10%',
    [theme.breakpoints.down('lg')]: {
      margin: '1em 5%',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  }
})

class Projects extends React.Component{

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
