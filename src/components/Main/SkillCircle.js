import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { Parallax } from 'react-scroll-parallax';

const styles = theme => ({
  root: {
    // background: 'white'
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
    // display: 'flex',
    // justifyContent: 'space-around',
    // flexDirection: 'column',
  },
  circle: {
    background: '#535353',
    // background: #888888;
    boxShadow: '-2px 7px 6px 0 rgba(0,0,0,0.30)',
    borderRadius: '50%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logoImg: {
    margin: '0 auto',
    padding: '3px',
  },
  label: {
    marginTop: '10px',
    color: '#fafafa',
  },
  // outerCircle: {
  //   borderRadius: '50%',
  //   background: 'gold',
  //   // display: 'flex',
  //   // flexDirection: 'column',
  //   // justifyContent: 'center',
  // },
  // imgWrapper: {
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'column'
  // },
  // logoImg: {
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  //   objectFit: 'cover',
  //   overflow: 'hidden',
  //   margin: '0 auto',
  // }
})


const SkillCircle = (props) => {
  const { classes } = props;
  const largestSquare = Math.floor((props.height * Math.sqrt(2))/2)
  // const circle = React.createRef()
  //

  return (
    <div className={classes.root}>
      <div className={classes.circle} style={{width: `${props.height}px`, height: `${props.height}px`}}>
        <div>
          <img
            className={classes.logoImg}
            src={props.logo}
            alt="logo"
            style={{
              maxWidth: `${largestSquare}px`,
              maxHeight:  `${largestSquare}px`,
            }}/>
        </div>
      </div>
      <Typography className={classes.label} variant="subtitle2" >
        {props.name}
      </Typography>
    </div>
  );
}

SkillCircle.propTypes = {
  // xMax: PropTypes.number,
  // yMax: PropTypes.number,
  // xMin: PropTypes.number,
  // yMin: PropTypes.number,
  // delay: PropTypes.number.isRequired,
  // active: PropTypes.boolean.isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  // parentHeight: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  // opposite: PropTypes.bool,
}

SkillCircle.defaultProps = {
  // xMax: 0,
  // yMax: 0,
  // xMin: 0,
  // yMin: 0,
  // size: 1,
  // opposite: false,
};

// <Parallax
//   ref={this.circle}
//   className={classes.paralaxWrapper}
//   offsetYMax={props.yMan}
//   offsetYMin={props.yMin}
//   offsetXMax={props.xMax}
//   offsetXMin={props.xMin}
//   slowerScrollRate={props.opposite}
//   tag="figure">
//     <div className={classes.logoWrapper} style={{ width: `${props.size * 100}px`, height:  `${props.size * 100}px` }}>
//       <img className={classes.logoImg} src={props.logo} atl="logo" />
//     </div>
// </Parallax>

// <table className={classes.outerCircle} style={{ width: `${props.height}px`, height:  `${props.height}px` }}>
//   <tbody style={{ width: `${largestSquare}px`, height:  `${largestSquare}px`}}>
//     <tr className={classes.imgWrapper}>
//       <td style={{ width: `${largestSquare}px`, height:  `${largestSquare}px`, verticalAlign: 'middle'}}>
//         <img
//           className={classes.logoImg}
//           src={props.logo}
//           alt="logo"
//           style={{
//             maxWidth: `${largestSquare}px`,
//             maxHeight:  `${largestSquare}px`,
//           }}/>
//       </td>
//     </tr>
//   </tbody>
//   <Typography variant="subtitle1">
//     {props.name}
//   </Typography>
// </table>


export default withStyles(styles)(SkillCircle);
