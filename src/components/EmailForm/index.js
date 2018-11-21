import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReCAPTCHA from "react-google-recaptcha";
import verifyReCaptcha from '../../http/reCaptcha'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors/';

const styles = theme => ({
  errorRow: {
    minHeight: '2em',
    width:'100%',
  },
  errorText: {
    color: red[500]
  },
  sendButtonRow:{
    width:'100%',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '1em 0'
  },
  sendIconPadding: {
    marginLeft: '.5em',
  },
  sendButton: {
    width: '25%',
  }
});

const recaptchaRef = React.createRef();

class EmailForm extends React.Component{
  state = {
    validReCaptcha: false,
    formError: true,
    errorText: ''
  };

  onCaptcha = (value) => {
    verifyReCaptcha(value)
      .then( res => {
        if (res.data.success === true){
          this.setState({
            validReCaptcha: true
          })
        }
        else {
          this.toggleErrorText()
          this.setErrorText('There was an external error with the ReCaptcha API.  Please recomplete the ReCaptcha.')
          recaptchaRef.current.reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  setErrorText = text => {
    this.setState({
      errorText: text
    })
  }

  toggleErrorText = () => {
    this.setState({
      formError: !this.state.formError
    })
  }

  submit = () => {
    this.toggleErrorText()
  }

  render(){
    const { classes } = this.props

    return(
      <div>
        <div className={classes.errorRow}>
          {
            this.state.formError
            ?
            <Typography variant="subtitle2" className={classes.errorText}>
              {this.state.errorText}
            </Typography>
            :
            null
          }
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          theme={this.props.currentTheme}
          sitekey="6Le8FnwUAAAAAKeQ11z970K2piq3pHosN-_bXXl9"
          onChange={this.onCaptcha}
        />
      <div className={classes.sendButtonRow}>
          <Button className={classes.sendButton} size="large" variant="contained" color="primary" disabled={!this.state.validReCaptcha} onClick={ ()=> {this.submit()} }>
            Send
            <SendIcon className={classes.sendIconPadding}></SendIcon>
          </Button>
        </div>
      </div>

    )
  }
}

EmailForm.propTypes = {

};

export default withStyles(styles)(EmailForm);
