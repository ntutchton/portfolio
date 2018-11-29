import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgLogo from '../../Logo'

const styles = theme => ({
  root: {
    maxWidth: '26.6vw',
    padding: '1vw',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '30vw',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '45vw'
    },
  },
  img: {
    // flex: '1',
    // height: '10em',
    background: 'url(https://purr.objects-us-west-1.dream.io/i/rQIjIKH.jpg)',
    backgroundImage: 'contain',
    display: 'flex',
    overflow: 'hidden',
    // '&:after':{
    //   content: '""',
    //   display:'block',
    //   paddingBottom: '100%',
    // }
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'rgba(27,27,27,.7)'
  },
  overlaySvgWrapper: {
    transform: 'scale(1.15) translateX(-4.5vw)',
    opacity: '.2',
  },
  projectName: {
    color: '#fafafa',
    textAlign: 'center',
    fontWeight: '700',
  },

})

class ProjectCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      imgHeight: 0
    }
    this.cardRoot = React.createRef()
  }

  componentDidMount(){
    this.recalculateImgHeight()
    window.addEventListener('resize', this.recalculateImgHeight)
  }

  //set height to width of element after sudtracting horizontal padding from width (i.e. innerWidth or element)
  recalculateImgHeight = () => {
    this.setState({
      imgHeight : this.cardRoot.current.clientWidth - (parseFloat(getComputedStyle(this.cardRoot.current).paddingLeft) + parseFloat(getComputedStyle(this.cardRoot.current).paddingRight))
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div ref={this.cardRoot} className={classes.root}>
        <div className={classes.img} style={{height: `${this.state.imgHeight}px`}}>
          <div className={classes.overlay}>
            <div className={classes.overlaySvgWrapper}>
              <SvgLogo type={'light'} size={this.state.imgHeight}></SvgLogo>
            </div>
          </div>
        </div>
        <div  >
          <Typography variant="h4" className={classes.projectName}>
            Placeholder
          </Typography>
        </div>
      </div>
    );
  }
}

ProjectCard.propType = {
  // height: PropTypes.number.isRequired,
}

export default withStyles(styles)(ProjectCard);
