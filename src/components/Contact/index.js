import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    margin: '0 auto',
    paddingTop: '3em',
    width: '70%',
    flex:'1',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  }
})

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3">
        Get in Touch.
      </Typography>
    </div>
  );
}

// LogoDark.propTypes = {
//   size: PropTypes.number.isRequired,
// };

export default withStyles(styles)(Contact);
