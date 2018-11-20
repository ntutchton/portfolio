import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReCAPTCHA from "react-google-recaptcha";


const styles = theme => ({

});


class EmailForm extends React.Component{
  state = {

  };

  onCaptcha = (value) => {
    console.log("Captcha value:", value);
  }

  render(){
    const { classes } = this.props
    return(
      <div>
        <ReCAPTCHA
          theme={this.props.currentTheme}
          data-theme={this.props.currentTheme}
          sitekey="6Le8FnwUAAAAAKeQ11z970K2piq3pHosN-_bXXl9"
          onChange={this.onCaptcha}
        />
      </div>

    )
  }
}

EmailForm.propTypes = {

};

export default withStyles(styles)(EmailForm);
