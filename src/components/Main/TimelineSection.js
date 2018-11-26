import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '../Icon'

const styles = {
  root: {
    display: 'grid',
    height:'100%',
    overflow: 'hidden',
    gridTemplateColumns: 'repeat(12, 1fr)',
    margin: '-5px 0'
  },
  timelineImage: {
    height: '600px',
    // backgroundColor: '#9E9E9E',
    background: 'linear-gradient(to bottom, #ffb76b 0%,#ffa73d 50%,#ff7c00 51%,#ff7f04 100%)',
    gridColumnStart: '1',
    gridColumnEnd: '8',
  },
  timelineText: {
    gridColumnStart: '8',
    gridColumnEnd: '13',
  },
  timelineTextLeft: {
    gridColumnStart: '1',
    gridColumnEnd: '6',
  },
  timelineImageRight: {
    height: '600px',
    background: 'linear-gradient(to bottom, #ffb76b 0%,#ffa73d 50%,#ff7c00 51%,#ff7f04 100%)',
    gridColumnStart: '6',
    gridColumnEnd: '13',
  },
  timelineWrapper: {
    transform: 'scale(1.01)',
    minHeight: '2000px',
    marginBottom: '-2245px',
    gridColumnEnd: '8',
    display: 'flex',
    gridColumnStart: '6',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  svg: {
    transition: 'stroke-dashoffset .4s cubic-bezier(.17,.67,.83,.67)',
  }
}

let lastScrollY = 0;
let ticking = false;

class TimelineSection extends React.Component {

  state = {
    progress: 1,
    sectionHeight: 854,
    }

  componentDidMount() {

    let path = document.getElementById(`${this.props.identifier}-path`).getTotalLength();
    let windowHeight = window.innerHeight
    let bodyRect = document.getElementById('root').getBoundingClientRect();
    let elemRect = document.getElementById(`${this.props.identifier}-element`).getBoundingClientRect();


    this.setState({
      pathLength: path,
      elementTop: (elemRect.top - bodyRect.top),             //start when element top is < 70% screen
      elementBottom: (elemRect.bottom - bodyRect.top),                    //finish when bottom is at 70% screen
      scrollStart: (elemRect.top - bodyRect.top) - (window.innerHeight * 0.7),
      scrollStop: (elemRect.bottom - bodyRect.top) - (window.innerHeight * 0.7),
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

    return (
      <div className={classes.root} style={{height: `${this.state.sectionHeight - 5}`}}>


          <svg id={`${this.props.identifier}-element`} ref={this.elementWrapper} className={classes.svg} width="196px" height={`${this.state.sectionHeight}px`} viewBox="0 0 196 854" version="1.1">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                  <g id="Artboard" transform="translate(-84.000000, -1654.000000)" fillRule="nonzero" stroke="#F44336" strokeWidth="10" strokeDasharray={`${this.state.pathLength}`} strokeDashoffset={`${this.state.pathLength * this.getProgress(this.props.scroll)}`}>
                      <g id="TIMELINE" transform="translate(89.000000, 1659.000000)">
                          <g id="RIGHT" transform="translate(92.000000, 0.000000)">
                              <path id="RIGHT-PATH"  d="M0.845513826,0.163037186 L1,325 C62.8970092,325 93.8455138,355.666667 93.8455138,417 C93.8455138,478.333333 62.8970092,509.333333 1,510 L1,843"></path>
                          </g>
                          <g id="LEFT">
                              <path id={`${this.props.identifier}-path`} d="M92.8455138,0.163037186 C92.8455138,72.3490289 92.8455138,180.628017 92.8455138,325 C30.9485046,325 -4.40536496e-13,355.666667 0,417 C4.12114787e-13,478.333333 30.9485046,509.333333 92.8455138,510 L92.8455138,844"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>


      </div>
    )
  }
}

TimelineSection.propTypes = {

}

export default withStyles(styles)(TimelineSection)
