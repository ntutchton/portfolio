import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { red, green } from '@material-ui/core/colors/';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/SendTwoTone';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircleTwoTone';
import Close from '@material-ui/icons/Close';
import Email from '@material-ui/icons/EmailTwoTone';
import Message from '@material-ui/icons/TextsmsTwoTone';

const styles = theme => ({
  messageRow: {
    minHeight: '2em',
    width:'100%',
    textAlign: 'right',
  },
  confirmationRow:{
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1em 0'
  },
  hideConfirmation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  confirmationText: {
    color: green[400],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
  },
  emoji:{
    fontSize: '200%',
    paddingRight:  '.5em',
  },
  confirmationMessageWrapper:{
    display: 'flex',
    justifyContent: 'center'
  },
  errorText: {
    color: red[500]
  },
  input:{
    width:'60%',
    marginBottom: '2em',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  message:{
    width:'100%',
    marginBottom: '2em',
  },
  messageIcon:{
    marginLeft: '0',
    marginRight:'8px',
    marginBottom: '13em',
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
  },
});

const RECAPTCHA_SITE_KEY = '6LdocVwsAAAAAMPPqRg1tXwWswSesGITdABcm3rZ';

class EmailForm extends React.Component{
  state = {
    recaptchaReady: false,
    showConfirmation: false,
    errorText: '',
    name:'',
    email:'',
    message:'',
    errors: {
      any: false,
      name: false,
      email: false,
      message: false
    }
  };

  componentDidMount() {
    this.loadReCaptchaScript();
  }

  loadReCaptchaScript = () => {
    if (window.grecaptcha) {
      this.setState({ recaptchaReady: true })
      return
    }

    const existingScript = document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => {
        this.setState({ recaptchaReady: true })
      })
      return
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.setState({ recaptchaReady: true })
    };
    document.head.appendChild(script);
  }

  executeReCaptcha = () => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error('reCAPTCHA not loaded'))
        return
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then(resolve)
          .catch(reject)
      })
    })
  }

  setErrorText = text => {
    this.setState({
      errorText: text
    })
  }

  toggleErrorText = () => {
    this.setState({
      errors: {
        any: !this.state.errors.any
      }
    })
  }

  validateEmail = () => {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (this.state.email.length > 1 && regex.test((this.state.email).toLowerCase()));
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

  submit = async () => {
    //clean errors
    this.clearFormErrors()
    //everything looks good, return
    if (this.validateEmail()
      && this.validateName()
      && this.validateMessage()) {
      if (!this.state.recaptchaReady) {
        this.setErrorText('reCAPTCHA is still loading. Please try again in a moment.')
        this.toggleErrorText()
        return
      }
      try {
        const token = await this.executeReCaptcha()
        this.submitToFormspree(token)
      } catch (error) {
        this.setErrorText('reCAPTCHA failed. Please try again.')
        this.toggleErrorText()
      }
      return
    }
    //build new error object and only make one call to setState at end
    let errors = {}
    let numErrors = 0

    if (!this.validateEmail()) {
      errors.email= true
      errors.any=true
      numErrors += 1
    }
    if (!this.validateName()){
      errors.name= true
      errors.any= true
      numErrors += 1
    }
    if (!this.validateMessage()){
      errors.message= true
      errors.any= true
      numErrors += 1
    }
    //check all errors at once to set multipleErrors bool and decide if we should use and
    if ( numErrors > 1 ){}
    //if any non-recaptcha errors found, display error message
    if (errors.any){
      this.setState({
        errors: errors
      })
      this.setErrorText('Please correct the errors in the form and submit again.')
    }
  }

  clearFormErrors = () => {
    this.setState({
      errors:{
        any: false,
        name: false,
        email: false,
        message: false
      }
    })
  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: ''
    })
  }

  displayConfirmation = () => {
    this.setState({
      showConfirmation: true
    })
  }

  submitToFormspree = (recaptchaToken) => {
    fetch('https://formspree.io/f/xzdgnzby', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        'g-recaptcha-response': recaptchaToken,
      }),
    })
      .then((res) => {
        if (res.ok) {
          this.displayConfirmation()
          this.resetForm()
          return
        }
        this.setErrorText('Something went wrong. Please try again later.')
        this.toggleErrorText()
      })
      .catch(() => {
        this.setErrorText('Something went wrong. Please try again later.')
        this.toggleErrorText()
      })
  }

  render(){
    const { classes } = this.props

    return(
      <div>
          {
            this.state.showConfirmation
            ?
            <div className={classNames([classes.messageRow, classes.confirmationRow])}>
              <Typography variant="subtitle1" className={classes.confirmationText}>
                <span className={classes.confirmationMessageWrapper}>
                  <span role="img" aria-label="thumbs-up" className={classes.emoji}>👍🏻</span>
                  <span className={classes.confirmationText}>I've received your message and will be in touch soon.</span>
                </span>
              </Typography>
              <div className={classes.hideConfirmation}>
                <Close color={this.props.currentTheme === 'dark' ? 'primary' : 'inherit'} onClick={()=>{this.setState({showConfirmation:false})}}/>
              </div>
            </div>
            :
            null
          }
        <form onSubmit={(event) => { event.preventDefault(); this.submit(); }}>
          <TextField
            className={classes.input}
            label="Your Name"
            value={this.state.name}
            error={this.state.errors.name}
            onChange={this.handleChange('name')}
            variant="outlined"
            name="name"
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
            name="email"
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
            name="message"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end" className={classes.messageIcon}>
                  <Message />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <div className={classes.sendButtonRow}>
            <Button className={classes.sendButton} size="large" variant="contained" color="primary" disabled={!this.state.recaptchaReady} onClick={ ()=> {this.submit()} }>
              Send
              <SendIcon className={classes.sendIconPadding}></SendIcon>
            </Button>
        </div>
          {
            this.state.errors.any
            ?
            <div className={classes.messageRow}>
              <Typography variant="subtitle2" className={classes.errorText}>
                {this.state.errorText}
              </Typography>
            </div>
            :
            null
          }
      </div>

    )
  }
}

export default withStyles(styles)(EmailForm);
