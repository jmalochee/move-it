import React, { Component } from 'react';
import TextField from '../components/TextField'
import PasswordField from '../components/PasswordField'

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      message: {},
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: ""
    }
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmationChange = this.handleConfirmationChange.bind(this);
    this.validateFirstChange = this.validateFirstChange.bind(this);
    this.validateLastChange = this.validateLastChange.bind(this);
    this.validateEmailChange = this.validateEmailChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateConfirmation = this.validateConfirmation.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFirstChange(event) {
    this.validateFirstChange(event.target.value)
    this.setState({ first_name: event.target.value })
  }

  handleLastChange(event) {
    this.validateLastChange(event.target.value)
    this.setState({ last_name: event.target.value })
  }

  handleEmailChange(event) {
    this.validateEmailChange(event.target.value)
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleConfirmationChange(event) {
    this.setState({ password_confirmation: event.target.value })
  }

  validateFirstChange(name) {
    if (name === '' || name === ' ') {
      let newError = { first_name: 'please provide your first name to continue' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.first_name
      this.setState({ errors: errorState })
      console.log(this.state.errors);

      return true
    }
  }

  validateLastChange(name) {
    if (name === '' || name === ' ') {
      let newError = { last_name: 'please provide your last name to continue' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.last_name
      this.setState({ errors: errorState })
      return true
    }
  }

  validateEmailChange(email) {
    if (email === '' || email === ' ') {
      let newError = { email: 'please provide your email to continue' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.email
      this.setState({ errors: errorState })
      return true
    }
  }

  validatePassword(pw) {
    if ( pw.length >= 8 && pw.match(/[a-z]/i) && pw.match(/\d/) ) {
      let errorState = this.state.errors
      delete errorState.password
      this.setState({ errors: errorState })
      return true
    } else {
      let newError = { password: 'your password must have at least 8 characters, a number, and a letter' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    }
  }

  validateConfirmation(pw) {
    if ( pw !== this.state.password ) {
      let newError = { password_confirmation: 'password and confirmation do not match' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.password_confirmation
      this.setState({ errors: errorState })
      return true
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (
      this.validateFirstChange(this.state.first_name) &&
      this.validateLastChange(this.state.last_name) &&
      this.validateEmailChange(this.state.email) &&
      this.validatePassword(this.state.password) &&
      this.validateConfirmation(this.state.password_confirmation)
    ) {
      let requestBody = {
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }
      fetch('/api/v1/users', { method: 'POST', body: JSON.stringify(requestBody) })
      .then(response => {
        let parsed = response.json()
        return parsed
      }).then(parsed => {
        if ( parsed.message ) {
        this.setState({ message: parsed.message })
        debugger;
        window.location=`/users/${this.state.current_user.id}`
        } else if ( parsed.errors ) {
          this.setState({ errors: parsed.errors })
        }
      })
    } else {
      event.preventDefault();
      this.validatePassword(this.state.password);
      this.validateConfirmation(this.state.password_confirmation);
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div className='registration row align-center'>
        <form className='callout small-12 medium-10 large-6 columns' onSubmit={this.handleFormSubmit}>
          <h3> lets get started! </h3>
          {errorDiv}
          <TextField
            content={this.state.first_name}
            label='first name'
            name='first_name'
            handlerFunction={this.handleFirstChange}
            placeholder='first'
          />
          <TextField
            content={this.state.last_name}
            label='last name'
            name='last_name'
            handlerFunction={this.handleLastChange}
            placeholder='last'
          />
          <TextField
            content={this.state.email}
            label='email'
            name='email'
            handlerFunction={this.handleEmailChange}
            placeholder='em@il.com'
          />
        <PasswordField
            content={this.state.password}
            label='password'
            name='password'
            handlerFunction={this.handlePasswordChange}
            placeholder='password'
          />
        <p className="help-text" id="passwordHelpText">
          your password must have at least 8 characters, a number, and a letter.
        </p>
        <PasswordField
            content={this.state.password_confirmation}
            label='password confirmation'
            name='password_confirmation'
            handlerFunction={this.handleConfirmationChange}
            placeholder='password'
          />
          <input type='submit' className='button'/>
        </form>
      </div>
    )
  }
}

export default NewUser;
