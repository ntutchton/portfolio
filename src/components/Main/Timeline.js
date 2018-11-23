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
    backgroundColor: 'gold',
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
    transition: 'stroke-dashoffset.3s ease',
  }
}

let lastScrollY = 0;
let ticking = false;

class WorkTimeline extends React.Component {

  state = {
    progress: 0,
    svgDrawOffset: '5056',
    componentStartHeight: 945,
    componentEndHeight: 1800,
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
    if (scrollY > this.state.componentStartHeight && scrollY < this.state.componentEndHeight){
      console.log(scrollY);
      this.setState({
        progress: this.normalizeScrollValue(scrollY)
      })
    }
    else if (scrollY < this.state.componentStartHeight){
      return 0
    }
    else if (scrollY > this.state.componentEndHeight){
      return 100
    }
  }

  //returns 0-100 value based off componentStartHeight and componentEndHeight range
  normalizeScrollValue = value => {
    return 1-((value - this.state.componentStartHeight)/(this.state.componentEndHeight - this.state.componentStartHeight))
  }


  // <svg width="197px" height="1800px" viewBox="0 0 197 1800" version="1.1">
  //     <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
  //         <g className={classes.svg} id="Timeline-Wrapper" transform="translate(-164.000000, -247.000000)" fillRule="nonzero" stroke="#F44336" strokeWidth="10" strokeDashoffset={`${this.state.svgDrawOffset * this.state.progress}`}>
  //             <g id="RIGHT" transform="translate(262.845514, 247.000000)">
  //                 <path d="M-1.42108547e-14,5.68434189e-14 L-1.42108547e-14,215 C61.8970092,215 92.8455138,245.666667 92.8455138,307 C92.8455138,368.333333 61.8970092,399.333333 -1.42108547e-14,400 L-1.42108547e-14,600 L-1.42108547e-14,815 C61.8970092,815 92.8455138,845.666667 92.8455138,907 C92.8455138,968.333333 61.8970092,999.333333 -1.42108547e-14,1000 L-1.42108547e-14,1200 L-1.42108547e-14,1415 C61.8970092,1415 92.8455138,1445.66667 92.8455138,1507 C92.8455138,1568.33333 61.8970092,1599.33333 -1.42108547e-14,1600 L-1.42108547e-14,1800" id="RIGHT_TOP"></path>
  //             </g>
  //             <g id="LEFT" transform="translate(169.845514, 247.000000)">
  //                 <path d="M92.8455138,5.68434189e-14 L92.8455138,215 C30.9485046,215 -4.54747351e-13,245.666667 -1.42108547e-14,307 C3.97903932e-13,368.333333 30.9485046,399.333333 92.8455138,400 L92.8455138,600 L92.8455138,815 C30.9485046,815 -4.54747351e-13,845.666667 -1.42108547e-14,907 C3.97903932e-13,968.333333 30.9485046,999.333333 92.8455138,1000 L92.8455138,1200 L92.8455138,1415 C30.9485046,1415 -4.54747351e-13,1445.66667 -1.42108547e-14,1507 C3.97903932e-13,1568.33333 30.9485046,1599.33333 92.8455138,1600 L92.8455138,1800" id="LEFT_TOP"></path>
  //             </g>
  //         </g>
  //     </g>
  // </svg>

  render(){
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.timelineImage}>

        </div>
        <div className={classes.timelineWrapper}>


        </div>
      </div>
    )
  }
}

WorkTimeline.propTypes = {

}

export default withStyles(styles)(WorkTimeline)
