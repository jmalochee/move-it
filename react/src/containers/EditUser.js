import React, { Component } from 'react';
import TextField from '../components/TextField'
import PasswordField from '../components/PasswordField'

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      message: {},
      current_user: {},
      email: "",
      phone: "",
    }
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadRequestBody = this.loadRequestBody.bind(this);
  }

  handlePhoneChange(event) {
    let numbers = event.target.value.replace(/\D/,"")
    this.setState({ phone: numbers })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  validatePhone() {
    if ( this.state.phone.length !== 10 && this.state.phone !== "") {
      let newError = { phone: 'please enter a valid, ten digit phone number to continue' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.phone
      this.setState({ errors: errorState })
      return true
    }
  }

  validateEmail(email) {
    if (email === '' && !this.props.current_user.email) {
      let newError = { email: 'please provide your email to continue' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else if (!(email.includes("@") && email.includes(".") && !email.includes(' ')) && !email === '') {
      let newError = { email: 'please enter a valid email address' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.email
      this.setState({ errors: errorState })
      return true
    }
  }

  loadRequestBody(){
    if (this.state.email === "") {
      return {phone: this.state.phone}
    } if (this.state.phone === "") {
      return {email: this.state.email}
    } else {
      return { email: this.state.email, phone: this.state.phone }
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.email === "" && this.state.phone === "") {
      let newError = { form: 'submit what, exactly?' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
    } else {
      let errorState = this.state.errors
      delete errorState.form
      this.setState({ errors: errorState })
      if (
        this.validatePhone(this.state.phone) &&
        this.validateEmail(this.state.email)
      ) {
        debugger
        fetch(`/api/v1/users/${this.props.current_user.id}.json`, {
          method: 'PATCH',
          credentials: "include",
          body: JSON.stringify(this.loadRequestBody())
        }).then(response => {
          let parsed = response.json()
          return parsed
        }).then(parsed => {
          if ( parsed.message ) {
            this.setState({ message: parsed.message })
            this.props.getUser();
          } else if ( parsed.errors ) {
            this.setState({ errors: parsed.errors })
          }
        })
      } else {
        event.preventDefault();
        this.validatePhone(this.state.phone);
        this.validateEmail(this.state.email);
      }
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
          <h3> lets start by adding contact info </h3>
          {errorDiv}
          <TextField
            content={this.state.phone}
            label='phone number'
            name='phone'
            handlerFunction={this.handlePhoneChange}
          />
          <TextField
            content={this.state.email}
            label='email address'
            name='email'
            handlerFunction={this.handleEmailChange}
          />
          <div className='column text-right'>
            <input type='submit' className='button submit' value='submit' id='editusersubmit'/>
          </div>
        </form>
      </div>
    )
  }
}

export default EditUser;
