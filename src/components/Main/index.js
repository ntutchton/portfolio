import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flex: '1'
  },
  section: {
    height: '100vh', //TEMP
  }
})

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>

        <div className={classes.section}>
          <Typography variant="h2">
            Main
          </Typography>
        </div>

        <div id="work" className={classes.section}>
          <Typography variant="h2">
            work
          </Typography>
        </div>

        <div id="skills" className={classes.section}>
          <Typography variant="h2">
            skills
          </Typography>
        </div>

        <div className={classes.blurb}>
          <Typography variant="h2">
            blurb
          </Typography>
        </div>

        <div id="projects" className={classes.section}>
          <Typography variant="h2">
            projects
          </Typography>
        </div>

      </div>

    </div>
  );
}

export default withStyles(styles)(Main);
