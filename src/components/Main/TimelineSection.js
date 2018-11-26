import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import SvgIcon from '../Icon'

const styles = {
  root: {
    display: 'grid',
    height:'100%',
    overflow: 'hidden',
    gridTemplateColumns: 'repeat(12, 1fr)',
    margin: '-5px 0'
  },
  timelineImageWrapper: {
    // height: '100%',
    // backgroundColor: '#9E9E9E',
    // background: 'linear-gradient(to bottom, #ffb76b 0%,#ffa73d 50%,#ff7c00 51%,#ff7f04 100%)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  timelineImage: {
    height: '650px',
    background: '#9E9E9E',
  },
  imageLeft:{
    gridColumnStart: '1',
    gridColumnEnd: '8',
  },
  imageRight: {
    gridColumnStart: '6',
    gridColumnEnd: '13',
  },
  inmageTop: {
    justifyContent: 'flex-start'
  },
  imageBottom: {
    justifyContent: 'flex-end',
  },
  timelineText: {

  },
  timelineLogo: {
    gridColumn: '6 / span 2',
    zIndex: '9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  timelineTextRight: {
    gridColumnStart: '8',
    gridColumnEnd: '13',
  },
  timelineTextLeft: {
    gridColumnStart: '1',
    gridColumnEnd: '6',
  },
  // timelineWrapper: {
  //   transform: 'scale(1.01)',
  //   minHeight: '2000px',
  //   marginBottom: '-2245px',
  //   gridColumnEnd: '13',
  //   display: 'flex',
  //   gridColumnStart: '1',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  // },
  animatedSvg: {
    transition: 'stroke-dashoffset .4s cubic-bezier(.17,.67,.83,.67)',
    gridColumnStart: '6',
    gridColumnEnd: '8',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent:'center',
    // transform: 'scale(1.01)',
    margin: '0 auto',
    zIndex: '10',
  }
}

class TimelineSection extends React.Component {

  constructor(props) {
    super(props);
    this.timelineSvgPath = React.createRef()
    this.timelineWrapper = React.createRef()
    this.state = {
      progress: 1,
      sectionHeight: this.props.sectionHeight,
      width: 200,
    }
  }

  componentDidMount() {
    //to draw offset
    let path = this.timelineSvgPath.current.getTotalLength();

    //get page locations
    let bodyRect = document.getElementById('root').getBoundingClientRect();
    let elemRect = this.timelineWrapper.current.getBoundingClientRect();

    //negative page margins mean this elements top is only relavent in relative to the document body
    let trueElementTop = elemRect.top - bodyRect.top
    let trueElementBottom = (elemRect.bottom - bodyRect.top) - 10 // compensate for line height and ensure overlap between timeline elements

    this.setState({
      pathLength: path,
      elementTop: trueElementTop,
      elementBottom: trueElementBottom,
      scrollStart: trueElementTop - (window.innerHeight * 0.7),  //start when element top is < 70% screen
      scrollStop: trueElementBottom - (window.innerHeight * 0.7),  //finish when bottom is at 70% screen
    })
  }

  getProgress = scrollY => {
    if (scrollY > this.state.scrollStart && scrollY < this.state.scrollStop){
        return this.normalizeScrollValue(scrollY)
    }
    else if (scrollY > this.state.scrollStop){
        return 0 //full drawing
    }
    else if (scrollY < this.state.scrollStart){
        return 1 //no drawing
    }
  }

  //returns 0-100 value based off elementTop and elementBottom range
  normalizeScrollValue = value => {
    return 1-((value - this.state.scrollStart)/(this.state.scrollStop - this.state.scrollStart))
  }

  render(){
    const { classes } = this.props

    const logos = {

    }

    return (
      <div className={classes.root} style={{height: `${this.state.sectionHeight}`}}>

        <svg ref={this.timelineWrapper} className={classes.animatedSvg} width={`${this.state.width}px`} height={`${this.state.sectionHeight}px`} viewBox="0 0 196 854" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                <g id="Artboard" transform="translate(-84.000000, -1654.000000)" fillRule="nonzero" stroke="#F44336" strokeWidth="10" strokeDasharray={`${this.state.pathLength}`} strokeDashoffset={`${this.state.pathLength * this.getProgress(this.props.scroll)}`}>
                    <g id="TIMELINE" transform="translate(89.000000, 1659.000000)">
                        <g id="RIGHT" transform="translate(92.000000, 0.000000)">
                            <path id="RIGHT-PATH"  d="M0.845513826,0.163037186 L1,325 C62.8970092,325 93.8455138,355.666667 93.8455138,417 C93.8455138,478.333333 62.8970092,509.333333 1,510 L1,843"></path>
                        </g>
                        <g id="LEFT">
                            <path ref={this.timelineSvgPath} d="M92.8455138,0.163037186 C92.8455138,72.3490289 92.8455138,180.628017 92.8455138,325 C30.9485046,325 -4.40536496e-13,355.666667 0,417 C4.12114787e-13,478.333333 30.9485046,509.333333 92.8455138,510 L92.8455138,844"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

          <div className={classes.timelineLogo} style={{marginTop: `-${this.state.sectionHeight}px`, height: `${this.state.sectionHeight}px`, minWidth: `${this.state.width}px`}}>
            <img style={{ height: `${this.state.sectionHeight * 0.21327}px`, margin: '0 auto', transform: 'translateY(-5px)'}} src={this.props.logoSource} alt="logo"/>

          </div>

          <div className={classes.timelineInfo}>

          </div>

          <div className={classNames([
              classes.timelineImageWrapper,
              (this.props.type === 'right'
                ? classes.imageRight
                : classes.imageLeft),
              (this.props.order === 'top'
                ? classes.inmageTop
                : this.props.order === 'bottom'
                  ? classes.imageBottom
                  : {})
            ])} style={{marginTop: `-${this.state.sectionHeight}px`}}>
            <img className={classes.timelineImage}/>
          </div>


      </div>
    )
  }
}

TimelineSection.propTypes = {
  scroll: PropTypes.number.isRequired,
  sectionHeight: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  logoSource: PropTypes.string.isRequired,
}

export default withStyles(styles)(TimelineSection)
