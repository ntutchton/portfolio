import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import SkillCircle from './SkillCircle'
// import AI from './logos/AI'
// import ANGULAR from 'logos/ANGULAR'

const styles = theme => ({
  root: {
    flex: '1',
    margin: '3% 10% 5% 10%',
    [theme.breakpoints.down('md')]: {
      margin: '5% 10%',
    },
  },
  circleWrapper: {
    display: 'grid',
    // gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridColumnGap: '25px',
    gridRowGap: '25px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  }
})

class Skills extends React.Component{
  state = {
    defaultHeight: 150,
  }

  randomDelay = () => {
    return Math.floor(Math.random() * 5)
  }

  componentDidMount(){
    this.setState({
      largestSquare: Math.floor((this.state.defaultHeight * Math.sqrt(2))/2)
    })
  }

  //create largestsquare inside circle of height dimeter (where height is also width of container square)
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
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Angular" logo="logos/ANGULAR.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="NodeJS" logo="logos/NODE.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Webpack" logo="logos/WEBPACK.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Sketch" logo="logos/SKETCH.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Docker" logo="logos/DOCKER.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Illustrator" logo="logos/AI.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="PostgreSQL" logo="logos/PSQL.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="React" logo="logos/REACT.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="MongoDB" logo="logos/MONGO.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Python" logo="logos/PYTHON.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="SCSS" logo="logos/SASS.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Photoshop" logo="logos/PS.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Vue" logo="logos/VUE.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Material UI" logo="logos/MUI.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="AWS" logo="logos/AWS.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Gulp" logo="logos/GULP.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="HTML" logo="logos/HTML.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Redux" logo="logos/REDUX.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Material Design" logo="logos/MD.png"/>
          <SkillCircle delay={this.randomDelay()} height={this.state.defaultHeight} name="Jenkins" logo="logos/JENKINS.png"/>
        </div>
      </div>
    )
  }
}

// Skills.propTypes = {
//
// }

export default withStyles(styles)(Skills)
