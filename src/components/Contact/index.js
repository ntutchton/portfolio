import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  test: {
    height:'500px',
    width: '500px',
    backgroundColor: 'tomato',
  }
})

function Contact(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h2">
        Contact
      </Typography>
    </div>
  );
}

// LogoDark.propTypes = {
//   size: PropTypes.number.isRequired,
// };

export default withStyles(styles)(Contact);
