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
    // console.log(lastScrollY);
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
        <TimelineSection scroll={this.state.scroll} identifier="dish"/>
        <TimelineSection scroll={this.state.scroll} identifier="bits"/>
        <TimelineSection scroll={this.state.scroll} identifier="future"/>
      </div>
    )
  }
}

export default withStyles(styles)(Timeline)
