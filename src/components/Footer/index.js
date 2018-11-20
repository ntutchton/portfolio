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
    height: '64px',
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
  }
})


const Footer = (props) => {
  const { classes } = props;

  function scrollToTop() {
    console.log('TODO');
  }

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <SvgLogo type="light" size={48}></SvgLogo>
      </div>
      <div className={classes.tagline}>
        <Typography variant="body2" style={{color:"#fafafa"}}>
          Created with ❤️ and  ☕  by Nathan Tutchton.
        </Typography>
      </div>
      <div className={classes.return}>
        <Button className={classes.returnWrapperButton} onClick={scrollToTop}>
          <Icon type="ReturnTop" size={18} color="#fff"/>
        </Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Footer);
