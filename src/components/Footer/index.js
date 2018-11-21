import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgLogo from '../Logo'
import Icon from '../Icon'

const styles = (theme) => ({
  root: {
    backgroundColor: '#212121',
    width: '100%',
    minHeight: '64px',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridRowGap: '1em',
    justifySelf: ' flex-end',
  },
  logo: {
    gridColumnStart: '2',
    margin:'.2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tagline: {
    gridColumnStart: '3',
    gridColumnEnd: '11',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    textAlign: 'center',
  },
  return: {
    gridColumnStart: '12',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  returnWrapperButton:{
    padding: '0',
    minWidth: '0',
    height: '100%',
    display: 'flex',
  },
  emojiPadding:{
    padding: '0 2px 0 7px',
  }
})


const Footer = (props) => {
  const { classes } = props;

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    window.history.pushState('', '/', window.location.pathname);
    props.updateActiveUrlHash(window.location.hash)
  }

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <SvgLogo type="light" size={48}></SvgLogo>
      </div>
      <div className={classes.tagline}>
        <Typography variant="body2" style={{color:"#fafafa"}}>
          <span>Created with<span role="img" aria-label="heart" className={classes.emojiPadding}>❤️</span>and<span role="img" aria-label="covefe" className={classes.emojiPadding}>☕</span>by Nathan Tutchton.</span>
        </Typography>
      </div>
      <div className={classes.return}>
        <Button className={classes.returnWrapperButton} onClick={()=> {scrollToTop()}}>
          <Icon type="ReturnTop" size={18} color="#fff"/>
        </Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Footer);
