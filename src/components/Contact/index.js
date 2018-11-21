import React from 'react';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import EmailForm from '../EmailForm'

const styles = theme => ({
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
  },
  formContainer: {
    margin: '4em 20%',
    [theme.breakpoints.down('md')]: {
      margin: '5em 10%',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '5em 5%',
    },
  }
})

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3">
        Get in Touch
      </Typography>
      <div className={classes.formContainer}>
        <EmailForm currentTheme={props.currentTheme}/>
      </div>
    </div>
  );
}

Contact.propTypes = {
  currentTheme: PropTypes.string.isRequired,
};

export default withStyles(styles)(Contact);
