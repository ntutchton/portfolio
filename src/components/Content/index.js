import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flex: '1'
  },
  section: {
    height: '100vh', //TEMP
  }
})

function Content(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <div id="featured" className={classes.section}>
        <Typography variant="h2">
          Featured
        </Typography>
      </div>

      <div >
        <Typography variant="h2">
          Other Stuff?
        </Typography>
      </div>

      <div id="podcasts" className={classes.section}>
        <Typography variant="h2">
          Podcasts
        </Typography>
      </div>

      <div id="media" className={classes.section}>
        <Typography variant="h2">
          Media
        </Typography>
      </div>

    </div>
  );
}

// LogoDark.propTypes = {
//   size: PropTypes.number.isRequired,
// };

export default withStyles(styles)(Content);
