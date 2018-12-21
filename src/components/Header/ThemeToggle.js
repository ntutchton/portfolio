import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import LightThemeIcon from '@material-ui/icons/Brightness5TwoTone';
// import DarkThemeIcon from '@material-ui/icons/Brightness3TwoTone';

const styles = {
  container: {
    display:'flex',
    height:'100%',
  },
  column:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
};

class ThemeToggle extends React.Component {

  handleChange = () => {
    this.props.changeTheme(this.props.currentTheme)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.container }>
      
        <div className={ classes.column }>
          <Switch
            checked={ this.props.currentTheme === 'light' }
            onChange={ () => {this.handleChange()} }
            color="primary"
          />
        </div>
        <div className={ classes.column }>
          <LightThemeIcon />
        </div>
      </div>
    );
  }
}

ThemeToggle.propTypes = {
  classes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default withStyles(styles)(ThemeToggle);
