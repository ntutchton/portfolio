import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import TimelineSection from './TimelineSection'

let lastScrollY = 0;
let ticking = false;

const styles = theme => ({
  root: {
    overflow: 'hidden'
  }
})

class Timeline extends React.Component {
  state={
    scroll: 0
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.setState({
          scroll: lastScrollY
        })
        ticking = false;
      });
      ticking = true;
    }
  };

  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <TimelineSection scroll={this.state.scroll} sectionHeight={800} type="left" order={'top'} logoSource="logos/DISH.svg"/>
        <TimelineSection scroll={this.state.scroll} sectionHeight={800} type="right" logoSource="logos/BITS.svg"/>
        <TimelineSection scroll={this.state.scroll} sectionHeight={800} type="left" order={'bottom'} logoSource="logos/FUTURE.svg"/>
      </div>
    )
  }
}

export default withStyles(styles)(Timeline)
