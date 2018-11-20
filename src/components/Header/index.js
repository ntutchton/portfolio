import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SvgLogo from '../Logo'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class SimpleAppBar extends React.Component{
  // const { classes } = props;

  determineLogoColor = () => {
    if (this.props.currentTheme === 'dark'){ return 'light' }
    if (this.props.currentTheme === 'light'){ return 'dark' }
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <SvgLogo type={this.determineLogoColor()} size="50"></SvgLogo>
            <Typography variant="h6" color="inherit">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

SimpleAppBar.propTypes = {
  currentTheme: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
