import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'
import Button from '@material-ui/core/Button';

import ProjectCard from './ProjectCard'

//TODO JSON from s3
import projectInfo from './projectInfo'

const styles = theme => ({
  projectWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    margin: '1em 10% 5em 10%',
    // gridRowGap: '10vw',
    [theme.breakpoints.down('lg')]: {
      margin: '1em 5% 5em 5%',
      gridRowGap: '1em'
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  filterWrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 30% 2em 30%',
    [theme.breakpoints.down('lg')]: {
      margin: '0 10% 2em 10%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  button: {
    borderRadius: '0',
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  filterEnabled: {
    backgroundColor: theme.palette.action.selected,
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
    projects: projectInfo,
  }

  setFilter = filter => {
    if (this.state.FILTER.includes(filter)){ //remove
      this.setState({
        FILTER: this.state.FILTER.filter( tag => tag !== filter)
      })
    }
    else { //add
      this.setState({
        FILTER: [
          ...this.state.FILTER,
          filter
        ]
      })
    }
  }

  setProjectVisibility = tags => {
    if (!this.state.FILTER.length) { //no filters selected, display all
      return true
    }
    else {
      let filter = tags.filter( tag => { //a tag exists in FILTER and only matching tags will be rendered
        if (this.state.FILTER.includes(tag)){
          return tag
        } else return null
      })
      return filter.length >= 1
        ? true
        : false
    }
  }

  render(){
    const { classes } = this.props

    return (
      <div>
        <div className={classes.filterWrapper}>
          <Button
            onClick={()=>{this.setFilter('website')}}
            className={classNames([
              classes.button,
              this.state.FILTER.includes('website')
              ? classes.filterEnabled
              : {}
            ])}>
            Website
          </Button>
          <Button
            onClick={()=>{this.setFilter('application')}}
            className={classNames([
              classes.button,
              this.state.FILTER.includes('application')
              ? classes.filterEnabled
              : {}
            ])}>
            Application
          </Button>
          <Button
            onClick={()=>{this.setFilter('design')}}
            className={classNames([
              classes.button,
              this.state.FILTER.includes('design')
              ? classes.filterEnabled
              : {}
            ])}>
            Design
          </Button>
          <Button
            onClick={()=>{this.setFilter('frontend')}}
            className={classNames([
              classes.button,
              this.state.FILTER.includes('frontend')
              ? classes.filterEnabled
              : {}
            ])}>
            Frontend
          </Button>
          <Button
            onClick={()=>{this.setFilter('backend')}}
            className={classNames([
              classes.button,
              this.state.FILTER.includes('backend')
              ? classes.filterEnabled
              : {}
            ])}>
            Backend
          </Button>
        </div>

        <div className={classes.projectWrapper}>
          {
            this.state.projects.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                name={project.name}
                tags={project.tags}
                description={project.description}
                links={project.links}
                labels={project.labels}
                visibility={this.setProjectVisibility(project.tags)}
                imageUrl={project.imageUrl}
              />
            ))
          }
        </div>
      </div>

    )
  }
}

export default withStyles(styles)(Projects)
