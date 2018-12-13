import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import SkillCircle from './SkillCircle'

const styles = theme => ({
  root: {
    flex: '1',
    margin: '3% 10%',
    [theme.breakpoints.down('md')]: {
      margin: '5% 5%',
    },
  },
  circleWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridColumnGap: '1em',
    gridRowGap: '3em',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  }
})

class Skills extends React.Component{
  state = {
    defaultHeight: 80,
  }

  componentDidMount(){
    this.setState({
      largestSquare: Math.floor((this.state.defaultHeight * Math.sqrt(2))/2)
    })
  }

  //create largestsquare inside circle of height dimeter (where height is also width of container square)
  //originally I thought icons would be different sizes and paralax, but that didn't look great so they are all set to defaultHeight
  calculateSquareDimentions = diameter => {
    if (!diameter) {
      return Math.floor((this.state.defaultHeight * Math.sqrt(2))/2)
    }
    else return Math.floor((diameter * Math.sqrt(2))/2)
  }

  render() {
    const { classes } = this.props
    return(
      <div className={classes.root}>
        <div className={classes.circleWrapper}>
          <SkillCircle height={this.state.defaultHeight} name="React" logo="logos/REACT.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Redux" logo="logos/REDUX.png"/>
          <SkillCircle height={this.state.defaultHeight} name="NodeJS" logo="logos/NODE.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Webpack" logo="logos/WEBPACK.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Sketch" logo="logos/SKETCH.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Docker" logo="logos/DOCKER.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Illustrator" logo="logos/ILLUSTRATOR.png"/>
          <SkillCircle height={this.state.defaultHeight} name="PostgreSQL" logo="logos/PSQL.png"/>
          <SkillCircle height={this.state.defaultHeight} name="MongoDB" logo="logos/MONGO.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Angular" logo="logos/ANGULAR.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Python" logo="logos/PYTHON.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Vue" logo="logos/VUE.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Photoshop" logo="logos/PHOTOSHOP.png"/>
          <SkillCircle height={this.state.defaultHeight} name="AWS" logo="logos/AWS.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Material Design" logo="logos/MATERIAL.png"/>
          <SkillCircle height={this.state.defaultHeight} name="Jenkins" logo="logos/JENKINS.png"/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Skills)
