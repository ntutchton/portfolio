import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'grid',
    padding: '0 8.3%',
        background: '#fff',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  certWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // background: '#fff',
    padding: '24px 0',
  },
  certLink: {
    display: 'flex',
    margin: '20px 50px',
    [theme.breakpoints.down('sm')]: {
      margin: '20px',
    },
  },
  noLink: {
    pointerEvents: 'none',
  },
  cert: {
    width: '100%',
    height: '125px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
})

const Certs = props => {
  const { classes } = props
   return (
     <div className={classes.root} style={ props.currentTheme === 'dark' ? {opacity: '.7'} : null }>
       <div className={classes.certWrapper}>
         <a className={classes.certLink} href="certs/AWS_Certified_Developer.pdf">
           <div className={classes.cert} style={{backgroundImage: `url(${'certs/AWSCERT.png'})`}}></div>
         </a>
       </div>
       <div className={classes.certWrapper}>
         <a className={classNames([ classes.certLink, classes.noLink ])} href="#">
           <div className={classes.cert} style={{backgroundImage: `url(${'certs/COMPTIA.png'})`}}></div>
         </a>
       </div>
       <div className={classes.certWrapper}>
         <a className={classes.certLink} href="https://gocode.colorado.gov/media-advisory-announcing-the-2018-go-code-colorado-winners/">
           <div className={classes.cert} style={{backgroundImage: `url(${'certs/GOCODE.png'})`}}></div>
         </a>
       </div>
       <div className={classes.certWrapper}>
         <a className={classNames([ classes.certLink, classes.noLink ])} href="#">
           <div className={classes.cert} style={{backgroundImage: `url(${'certs/Clearence.png'})`}}></div>
         </a>
       </div>
     </div>
   )
}

export default withStyles(styles)(Certs)
