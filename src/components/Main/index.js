import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {  }
})

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h2">
          Main
        </Typography>
        <div style={{height:'500vh'}}></div>
        <div id="projects">
          projects
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Main);
