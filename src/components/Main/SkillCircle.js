import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-scroll-parallax';

const styles = theme => ({
  root: {
    background: 'white'
  },
  paralaxWrapper: {

  },
  logoWrapper: {
    height: '100px',
    width: '100px',
    background: 'tomato',
  }
})


const SkillCircle = (props) => {
  const { classes } = props;

  // const circle = React.createRef()
  //
  // function setScrollRate() {
  //   if (props.opposite) {
  //     this.circle.current.set
  //   }
  // }


  return (
    <div className={classes.root}>

      <Parallax
        ref={this.circle}
        className={classes.paralaxWrapper}
        offsetYMax={props.yMan}
        offsetYMin={props.yMin}
        offsetXMax={props.xMax}
        offsetXMin={props.xMin}
        slowerScrollRate={props.opposite}
        tag="figure">
          <div className={classes.logoWrapper} style={{ width: `${props.size * 100}px`, height:  `${props.size * 100}px`}}></div>
      </Parallax>

    </div>
  );
}

SkillCircle.propTypes = {
  xMax: PropTypes.number,
  yMax: PropTypes.number,
  xMin: PropTypes.number,
  yMin: PropTypes.number,
  size: PropTypes.number.isRequired,
  opposite: PropTypes.bool,
}

SkillCircle.defaultProps = {
  xMax: 0,
  yMax: 0,
  xMin: 0,
  yMin: 0,
  size: 1,
  opposite: false,
};

export default withStyles(styles)(SkillCircle);
