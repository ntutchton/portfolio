import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '../Icon'

const styles = {
  root: {
    display: 'grid',
    height:'100%',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  timelineImage: {
    height: '600px',
    backgroundColor: '#9E9E9E',
    gridColumnStart: '1',
    gridColumnEnd: '8',
  },
  timelineWrapper: {
    gridColumnStart: '8',
    gridColumnEnd: '13',
    marginLeft: '-31%',
    minHeight: '2000px',
  },
  svg: {
    strokeDasharray: '5056',
    // strokeDashoffset: '5056'
    transition: 'stroke-dashoffset .4s cubic-bezier(.17,.67,.83,.67)',
    // transitionDelay: '.1s',
  }
}

let lastScrollY = 0;
let ticking = false;

class WorkTimeline extends React.Component {

  state = {
    progress: 0,
    svgDrawOffset: '5056',
    scrollStartHeight: 500, //945
    scrollEndHeight: 3650, //3175
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.updateProgress(lastScrollY)
        ticking = false;
      });
      ticking = true;
    }
  };

  updateProgress = scrollY => {
    if (scrollY > this.state.scrollStartHeight && scrollY < this.state.scrollEndHeight){
      this.setState({
        progress: this.normalizeScrollValue(scrollY)
      })
    }
    else if (scrollY < this.state.scrollStartHeight){
      this.setState({
        progress: 1
      })
    }
    else if (scrollY > this.state.scrollEndHeight){
      this.setState({
        progress: 0
      })
    }
  }

  //returns 0-100 value based off scrollStartHeight and scrollEndHeight range
  normalizeScrollValue = value => {
    return 1-((value - this.state.scrollStartHeight)/(this.state.scrollEndHeight - this.state.scrollStartHeight))
  }

  render(){
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.timelineImage}>

        </div>
        <div className={classes.timelineWrapper}>


          <svg width="196px" height="2222px" viewBox="0 0 196 2222" version="1.1" >
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                  <g className={classes.svg} id="Timeline-Wrapper" transform="translate(-165.000000, -242.000000)" fillRule="nonzero" stroke="#F44336" strokeWidth="10" strokeDashoffset={`${this.state.svgDrawOffset * this.state.progress}`}>
                      <g id="Timeline-Wrapper" transform="translate(170.000000, 247.000000)">
                          <g id="RIGHT" transform="translate(93.000000, 0.000000)">
                              <path d="M-3.41060513e-13,0 L-1.12069862e-14,215 C61.8970092,215 92.8455138,245.666667 92.8455138,307 C92.8455138,368.333333 61.8970092,399.333333 -1.12069862e-14,400 L-1.12069862e-14,600 L-1.12069862e-14,955 C61.8970092,955 92.8455138,985.666667 92.8455138,1047 C92.8455138,1108.33333 61.8970092,1139.33333 -1.12069862e-14,1140 L-1.12069862e-14,1330 L-1.12069862e-14,1693 C61.8970092,1693 92.8455138,1723.66667 92.8455138,1785 C92.8455138,1846.33333 61.8970092,1877.33333 -1.12069862e-14,1878 L-3.41060513e-13,2211" id="RIGHT_TOP"></path>
                          </g>
                          <g id="LEFT">
                              <path d="M92.8455138,0 L92.8455138,215 C30.9485046,215 -4.54747351e-13,245.666667 -1.42108547e-14,307 C3.97903932e-13,368.333333 30.9485046,399.333333 92.8455138,400 L92.8455138,740 L92.8455138,955 C30.9485046,955 -4.54747351e-13,985.666667 -1.42108547e-14,1047 C3.97903932e-13,1108.33333 30.9485046,1139.33333 92.8455138,1140 L92.8455138,1200 L92.8455138,1693 C30.9485046,1693 -4.54747351e-13,1723.66667 -1.42108547e-14,1785 C3.97903932e-13,1846.33333 30.9485046,1877.33333 92.8455138,1878 L92.8455138,2212" id="LEFT_TOP"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>



        </div>
      </div>
    )
  }
}

WorkTimeline.propTypes = {

}

export default withStyles(styles)(WorkTimeline)
