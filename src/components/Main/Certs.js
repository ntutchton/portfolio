import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  certWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    background: '#fff'
  },
  certLink: {
    display: 'flex',
    margin: '20px 50px',
    [theme.breakpoints.down('sm')]: {
      margin: '20px',
    },
  },
  cert: {
    width: '100%',
    height: '200px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
})

const Certs = props => {
  const { classes } = props
   return (
     <div className={classes.root}>
       <div className={classes.certWrapper}>
         <a className={classes.certLink} href="certs/AWS_Certified_Developer.pdf">
           <div className={classes.cert} style={{backgroundImage: `url(${'certs/AWSCERT.png'})`}}></div>
         </a>
       </div>
       <div className={classes.certWrapper}>
         <div className={classes.cert}>
           <span>TODO: COMPTIA</span>
         </div>
       </div>
       <div className={classes.certWrapper}>
         <a className={classes.certLink} href="https://gocode.colorado.gov/media-advisory-announcing-the-2018-go-code-colorado-winners/">
           <div className={classes.cert} style={{backgroundImage: `url(${'certs/GOCODE.png'})`}}></div>
         </a>
       </div>
       <div className={classes.certWrapper}>
         <div className={classes.cert}>
           <span>TODO SCRUM</span>
         </div>
       </div>
     </div>
   )
}

export default withStyles(styles)(Certs)
