import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'
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
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden'
    },
  },
  img: {
    // background: 'url(https://purr.objects-us-west-1.dream.io/i/rQIjIKH.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    overflow: 'hidden',
    transition: 'all 1s cubic-bezier(.19,1,.22,1)',
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'rgba(27,27,27,.5)',
    opacity: '0',
    transition: 'opacity 1s cubic-bezier(.19,1,.22,1)',
  },
  activeOverlay:{
    opacity: '1!important',
  },
  overlaySvgWrapper: {
    transform: 'translateX(15vw)',
    opacity: '.3',
    [theme.breakpoints.down('md')]: {
      transform: 'translateX(25vw)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(1.6)translateX(25vw)',
    },
  },
  projectName: {
    color: '#fafafa',
    textAlign: 'center',
    fontWeight: '700',
    transition: 'opacity 1s cubic-bezier(.19,1,.22,1)',
    opacity: '0',
  },
  blurred: {
    filter: 'blur(30px)',
    '-webkit-filter': 'blur(30px)',
    margin: ' 0 1em',
    [theme.breakpoints.down('sm')]: {
      filter: 'blur(5px)',
      '-webkit-filter': 'blur(5px)',
      margin: '0',
    },
  },
  filtered: {
    visibility: 'hidden',
    order: '3',
  },
})

class ProjectCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      imgHeight: 0,
      activeOverlay: false,
      filtered: false
    }
    this.cardRoot = React.createRef()
  }

  componentWillMount(){
    //init state.fiiltered based on tags matching parent's array of filter strings
    let filter = this.props.tags.filter( tag => {
      if (this.props.FILTER.includes(tag)){
        return tag
      } else return null
    })
    filter.length >= 1
      ? this.setFilter(true)
      : this.setFilter(false)
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

  //setter for filter to ensure it does not get overwritten by tags in componentWillMount
  setFilter = boolean => {
    this.setState({
      filtered: boolean
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        ref={this.cardRoot}
        className={classNames([
          classes.root,
          (this.state.filtered
            ? classes.filtered
            : {}
          ),
        ])}
        style={{maxHeight: `${this.state.imgHeight*1.3}px`}}
        onMouseEnter={()=>{this.setState({activeOverlay:true})}}
        onMouseLeave={()=>{this.setState({activeOverlay:false})}}>
        <div
          style={{height: `${this.state.imgHeight}px`, background: `url(${this.props.imageUrl})`}}
          className={classNames([
            classes.img,
            ( this.state.activeOverlay
              ? classes.blurred
              : {}
            ),
          ])}>
          <div className={classNames([
              classes.overlay,
              ( this.state.activeOverlay
                ? classes.activeOverlay
                : {}
              ),
            ])}>
          </div>
        </div>
        <div style={{transform: `translateY(-${this.state.imgHeight/2}px)`}} >
          <Typography variant="h4" className={classNames([
              classes.projectName,
              ( this.state.activeOverlay
                ? classes.activeOverlay
                : {}
              ),
            ])}>
            Placeholder
            <div
              className={classes.overlaySvgWrapper}
              style={{
                margin: `-${this.state.imgHeight/2}px`,
                height: `${this.state.imgHeight}px`,
                width: `${this.state.imgHeight/2}px`,
              }}>
              <SvgLogo type={'light'} size={this.state.imgHeight}></SvgLogo>
            </div>
          </Typography>
        </div>
      </div>
    );
  }
}

ProjectCard.propType = {
  imageUrl: PropTypes.string.isRequired,
  FILTER: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
}

export default withStyles(styles)(ProjectCard);
