import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flex: '1'
  }
})

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h2">
          Main
        </Typography>
        <div id="projects">
          projects
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Main);
