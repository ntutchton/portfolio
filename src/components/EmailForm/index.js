import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors/';
import ReCAPTCHA from "react-google-recaptcha";
import verifyReCaptcha from '../../http/reCaptcha'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/SendTwoTone';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircleTwoTone';
import Email from '@material-ui/icons/EmailTwoTone';
import Message from '@material-ui/icons/TextsmsTwoTone';

const styles = theme => ({
  errorRow: {
    minHeight: '2em',
    width:'100%',
    textAlign: 'right',
  },
  errorText: {
    color: red[500]
  },
  input:{
    width:'60%',
    marginBottom: '2em',
  },
  message:{
    width:'100%',
    marginBottom: '2em',
  },
  messageIcon:{
    // positionEnd:{
      marginLeft: '0',
      marginRight:'8px',
      marginBottom: '37%',
    // }
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
    formError: false,
    errorText: '',
    name:'',
    email:'',
    message:'',
    errors: {
      name: false,
      email: false,
      message: false
    }
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

  validateEmail = () => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log();
    return regex.test((this.state.email).toLowerCase());
  }

  validateName = () => {
    return this.state.name.length > 1
  }

  validateMessage = () => {
    return this.state.message.length > 1
  }

  handleChange = name => event => {
  this.setState({
    [name]: event.target.value,
  });
};

  submit = () => {
    if (this.validateEmail()
      && this.validateName()
      && this.validateMessage()
      && this.state.validReCaptcha) {
      console.log('form is valid -> TODO send')
      return
    }

    //this structure doesn't pick up multiple erros. need to retink and refactor so that the messages make sense also
    else if (!this.validateEmail()) {
      this.setState({
        errors: {
          email: true
        }
      })
    }
    else if (!this.validateName()){
      this.setState({
        errors: {
          name: true
        }
      })
    }
    else if (!this.validateMessage()){
      this.setState({
        errors: {
          message: true
        }
      })
    }
    this.setErrorText('Please correct the errors in this form and try again.')
    this.toggleErrorText()
  }

  render(){
    const { classes } = this.props

    return(
      <div>
        <form>
          <TextField
            className={classes.input}
            label="Your Name"
            value={this.state.name}
            error={this.state.errors.name}
            onChange={this.handleChange('name')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.input}
            label="Your Email"
            value={this.state.email}
            error={this.state.errors.email}
            onChange={this.handleChange('email')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.message}
            label="Your Message"
            value={this.state.message}
            error={this.state.errors.message}
            multiline
            rows="12"
            onChange={this.handleChange('message')}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end" className={classes.messageIcon}>
                  <Message />
                </InputAdornment>
              ),
            }}
          />
        </form>
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
      </div>


    )
  }
}

EmailForm.propTypes = {

};

export default withStyles(styles)(EmailForm);
