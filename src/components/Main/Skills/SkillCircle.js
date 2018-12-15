import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: '100%',
    textAlign: 'center',
    transition: 'all .35s cubic-bezier(.39,.64,.63,.9)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1px', //to stop slight shift after transform
  },
  hidden:{
    transform: 'scale3d(0, 0, 1)',
  },
  transition: {
    transform: 'scale3d(1.03, 1.03, 1)',
  },
  active: {
    transform: 'scale3d(1, 1, 1)',
    transition: 'all .1s cubic-bezier(.1,.69,.97,.09)',
  },
  circle: {
    background: '#fff',
    boxShadow: '0px 1px 6px 0 rgba(0,0,0,0.30)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  darkCircleBackground: {
    background: '#535353',
  },
  logoImg: {
    margin: '0 auto',
    padding: '3px',
  },
  label: {
    marginTop: '10px',
    // color: '#fafafa',
  },
})

let lastScrollY = 0;

class SkillCircle extends React.Component{

  constructor(props){
    super(props)
    this.circleWrapper = React.createRef()
  }
  state = {
    hidden: true,
    transitioning: false,
    active: false,
    largestSquare: (Math.floor((this.props.height * Math.sqrt(2))/2)),
    delay: (Math.random() * 300),
    ticking: false,
    startSrollListeners: 3000,
  }

  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount(){
    let bodyRect = document.getElementById('root').getBoundingClientRect();
    let elemRect = this.circleWrapper.current.getBoundingClientRect();
    this.setState({
      startTransitionScroll: (elemRect.top - bodyRect.top) - (window.innerHeight * 0.9),  //start when element top is < 80% screen
    })
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!this.state.ticking && window.scrollY > this.state.startSrollListeners) {
      window.requestAnimationFrame(() => {
        if (lastScrollY > this.state.startTransitionScroll){
          this.startTransition()
        }
        this.setState({
          ticking: false
        })
      });
      this.setState({
        ticking: true
      })
    }
  };

  //two timeouts that set state flags that conditionally apply "transitioning" and "active" classes to root div (mounts with "hidden")
  startTransition = () => {
    if (!this.state.active){
      setTimeout( () => {
        this.setState({
          transitioning: true,
          hidden: false,
        })
        setTimeout( () => {
          this.setState({
            active: true,
            transitioning: false,
          })
          window.removeEventListener('scroll', this.handleScroll);
        }, 370);
      }, 1 * this.state.delay);
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <div ref={this.circleWrapper} className={classNames([
          classes.root,
            (this.state.hidden
            ? classes.hidden
            : this.state.transitioning
              ? classes.transition
              : this.state.active
                ? classes.active
                : {}),
        ])}>
        <div className={classNames([
            classes.circle,
            (this.props.theme.palette.type === 'dark'
              ? classes.darkCircleBackground
              : null)
          ])} style={{width: `${this.props.height}px`, height: `${this.props.height}px`}}>
          <div>
            <img
              className={classes.logoImg}
              src={this.props.logo}
              alt="logo"
              style={{
                maxWidth: `${this.state.largestSquare}px`,
                maxHeight:  `${this.state.largestSquare}px`,
              }}/>
          </div>
        </div>
        <Typography className={classes.label} variant="subtitle2" >
          {this.props.name}
        </Typography>
      </div>
    );
  }
}

SkillCircle.propTypes = {
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
}

export default withStyles(styles)(SkillCircle);
