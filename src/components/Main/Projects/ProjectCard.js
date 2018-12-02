import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
// import { Link }from 'react-router-dom'
import SvgLogo from '../../Logo'
import LaptopWindow from '@material-ui/icons/LaptopMacTwoTone';

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
    // overflow: 'hidden',
    borderRadius: '5px',
    transition: 'all 1s cubic-bezier(.19,1,.22,1)',

  },
  activeOverlay:{
    opacity: '1!important',
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'rgba(27,27,27,.3)',
    opacity: '0',
    transition: 'opacity 1s cubic-bezier(.19,1,.22,1)',
    [theme.breakpoints.down('sm')]: {
      opacity: '0 !important',
    },
  },
  overlayTransformLayer: {
    [theme.breakpoints.down('sm')]: {
      transform: 'none !important',
    },
  },
  overlaySvgWrapper: {
    transform: 'translateX(15vw)',
    opacity: '.3',
    [theme.breakpoints.down('md')]: {
      transform: 'translateX(25vw)',
    },
    [theme.breakpoints.down('sm')]: {
      // transform: 'scale(1.1)translateX(25vw)',
      display: 'none',
      margin: '0 !important',
    },
  },
  projectButtons: {
    color: '#fafafa',
    textAlign: 'center',
    fontWeight: '700',
    transition: 'opacity 1s cubic-bezier(.19,1,.22,1)',
    opacity: '0',
    [theme.breakpoints.down('sm')]: {
      // minHeight: '215px',
      opacity: '1',
      margin: '1em 0'
    },
  },
  linkButtonWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      // justifyContent:'center',
      flexDirection: 'column',
      height: '90px',
    },
  },
  linkButton: {
    zIndex : '50',
    margin: '0 1em',
    [theme.breakpoints.down('sm')]: {
      margin: '5px'
    },
  },
  linkText: {
    marginLeft: '7px',
  },
  projectText: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: { //compensate for stacking link buttons
      // paddingBottom: '50px',
      // marginBottom: '-50px',
      // marginTop: '-50px',
    },
  },
  projectName: {
    marginBottom: '.5em',
  },
  projectDescription: {
    marginTop: '.8em',
  },
  chip: {
    margin: '3px 5px',
  },
  avatar: {
    backgroundColor: 'transparent'
  },
  blurred: {
    filter: 'blur(30px)',
    '-webkit-filter': 'blur(30px)',
    margin: ' 0 1em',
    opacity: '.7',
    [theme.breakpoints.down('sm')]: {
      // filter: 'blur(5px)',
      // '-webkit-filter': 'blur(5px)',
      filter: 'none',
      margin: '0',
    },
  },
})

class ProjectCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      imgHeight: 0,
      activeOverlay: false,
    }
    this.cardRoot = React.createRef()
  }

  componentDidMount(){
    this.recalculateImgHeight()
    window.addEventListener('resize', this.recalculateImgHeight)
  }

  //set height to width of element after sudtracting horizontal padding from width (i.e. innerWidth or element)
  recalculateImgHeight = () => {
    if (this.cardRoot.current){ //if filtered the ref will not be rendered
      this.setState({
        imgHeight : this.cardRoot.current.clientWidth - (parseFloat(getComputedStyle(this.cardRoot.current).paddingLeft) + parseFloat(getComputedStyle(this.cardRoot.current).paddingRight))
      })
    }
  }

  render() {
    const { classes } = this.props;

    //TODO define these in projectInfo.js and just render the component without this logic
    const icons = type => (
      type === 'site'
      ? <LaptopWindow />
      : type ===   'github'
        ? <SvgLogo type="github" size={24} />
        : type === 'dribbble'
          ? <SvgLogo type='dribbble' size={24} />
          : type === 'gitlab'
            ? <SvgLogo type='gitlab' size={24} />
            : null
    )
// style={{maxHeight: `${this.state.imgHeight*1.3}px`}}
    return (
        this.props.visibility
        ? <div
            ref={this.cardRoot}
            className={classNames([
              classes.root,
              {}
            ])}>
            <div onMouseEnter={()=>{this.setState({activeOverlay:true})}}
              onMouseLeave={()=>{this.setState({activeOverlay:false})}}>
            <div
              style={{height: `${this.state.imgHeight}px`, backgroundImage: `url(${this.props.imageUrl})`}}
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
            <div className={classes.overlayTransformLayer} style={{transform: `translateY(-${this.state.imgHeight/2}px)`}} >
              <div className={classNames([
                  classes.projectButtons,
                  ( this.state.activeOverlay
                    ? classes.activeOverlay
                    : {}
                  ),
                ])}>
                <div
                  className={classes.overlaySvgWrapper}
                  style={{
                    margin: `-${this.state.imgHeight/2}px`,
                    height: `${this.state.imgHeight}px`,
                    width: `${this.state.imgHeight/2}px`,
                  }}>
                  <SvgLogo type={'light'} size={this.state.imgHeight}></SvgLogo>
                </div>
                <div className={classes.linkButtonWrapper}>
                  {
                    this.props.links.map( (link, index) => (
                      // Link?
                      <Button
                        className={classes.linkButton}
                        variant="contained"
                        key={index}
                        disabled={link.inactive}
                        href={link.to}>
                        { icons(link.type) }
                        <span className={classes.linkText}>{link.text}</span>
                      </Button>
                    ))
                  }
                </div>
              </div>
            </div>

            </div>

            <div className={classes.projectText}>
              <Typography variant="h6" className={classes.projectName}>
                {this.props.name}
              </Typography>
              {
                this.props.labels.map( (label, index) => (
                    <Chip
                       avatar={
                         <Avatar className={classes.avatar}>
                           <div style={{ backgroundImage: `url(logos/${label}.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                         </Avatar>
                       }
                       classes={{label: 'chipLabel'}}
                       key={index}
                       label={label.toUpperCase()}
                       className={classes.chip}
                     /> //.chipLabel is defined globally in App.css, not ideal but works for now
                ))
              }
              <Typography variant="body2" className={classes.projectDescription}>
                {this.props.description}
              </Typography>
            </div>
          </div>
        : null
    );
  }
}

ProjectCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  visibility: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
}

ProjectCard.defaultProps = {
  links: [],
  labels: [],
}

export default withStyles(styles)(ProjectCard);
