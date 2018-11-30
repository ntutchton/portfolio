import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import ProjectCard from './ProjectCard'

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '1em 10%',
    // gridRowGap: '10vw',
    [theme.breakpoints.down('lg')]: {
      margin: '1em 5%',
      gridRowGap: '1em'
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  }
})

class Projects extends React.Component{
  state = {
    FILTER: [
      //if one of these strings appears in this list, projects with a matching string in their "tag" list will not be visibile on the page
      // 'website',
      // 'application',
      // 'design',
      // 'backend',
      // 'frontend',
    ],
    projects: [
      {
        tags: [],
        imageUrl: 'https://i.imgur.com/MFPafGN.jpg',
      },
      {
        tags: [],
        imageUrl: 'https://purr.objects-us-west-1.dream.io/i/rQIjIKH.jpg',
      },
      {
        tags: [],
        imageUrl: 'https://purr.objects-us-west-1.dream.io/i/rQIjIKH.jpg',
      },
      {
        tags: [],
        imageUrl: 'https://i.imgur.com/MFPafGN.jpg',
      },
    ]
  }

//TEMP for testing filter
  randomFunction = () => {
    return Math.round(Math.random()) === 0
  }

  getTags = () => {
    let returnTags= []
    let snarf = [
      { value: this.randomFunction() ? 'website' : null },
      { value: this.randomFunction() ? 'application' : null },
      { value: this.randomFunction() ? 'design' : null },
      { value: this.randomFunction() ? 'backend' : null },
      { value: this.randomFunction() ? 'frontend' : null },
    ]
    snarf.forEach(el => {
      el.value
      ? returnTags.push(el.value)
      : null
    })
    return returnTags
  }
//END TEMP

  render(){
    const { classes } = this.props

//TEMP
    this.state.projects.forEach(project => {
      project.tags = this.getTags()
    })
//END TEMP

    return (
      <div className={classes.root}>
        {
          this.state.projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              tags={project.tags}
              FILTER={this.state.FILTER}
              imageUrl={project.imageUrl}
            />
          ))
        }
      </div>
    )
  }
}

export default withStyles(styles)(Projects)
