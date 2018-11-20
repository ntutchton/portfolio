import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom'

const styles = (theme) => ({
  root: {  }
})

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Route path="/#work">
        <Typography variant="h2">
          Main
        </Typography>
      </Route>
    </div>
  );
}

// LogoDark.propTypes = {
//   size: PropTypes.number.isRequired,
// };

export default withStyles(styles)(Main);
