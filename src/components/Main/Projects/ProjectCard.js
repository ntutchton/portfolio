import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flex: '1',
    height: '10em',
    background: '#888',
  },
})

function ProjectCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <span>placholder</span>
    </div>
  );
}

export default withStyles(styles)(ProjectCard);
