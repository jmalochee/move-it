import React, { Component } from 'react';
import TextField from '../components/TextField'
import PasswordField from '../components/PasswordField'

class NewMove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      message: {},
      origin_rooms: "",
      dest_rooms: "",
      move_date: "",
      orig_address: "",
      orig_unit: "",
      orig_city: "",
      orig_state: "",
      orig_zip: "",
      orig_floor: "",
      orig_truck_access: "",
      orig_distance: "",
      dest_address: "",
      dest_unit: "",
      dest_city: "",
      dest_state: "",
      dest_zip: "",
      dest_floor: "",
      dest_truck_access: "",
      dest_distance: ""
    }
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
        email: this.state.email.toLowerCase(),
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }
      fetch('/api/v1/moves', {
        credentials: "same-origin",
        method: 'POST',
        body: JSON.stringify(requestBody)
      })
      .then(response => {
        let parsed = response.json()
        return parsed
      }).then(parsed => {
        if ( parsed.message ) {
        this.setState({ message: parsed.message })
        window.location=`/moves/1`
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
          move_date: "",
          origin_rooms: "",
          orig_address: "",
          orig_unit: "",
          orig_city: "",
          orig_state: "",
          orig_zip: "",
          orig_floor: "",
          orig_truck_access: "",
          orig_distance: "",
          dest_rooms: "",
          dest_address: "",
          dest_unit: "",
          dest_city: "",
          dest_state: "",
          dest_zip: "",
          dest_floor: "",
          dest_truck_access: "",
          dest_distance: ""
          <div className="move-origin">
          lets start by getting the basics out of the way:
          <TextField
            content={this.state.move_date}
            label='when are you moving?'
            name='move_date'
            handlerFunction={this.handleMoveDate}
            placeholder='mm/dd/yyyy'
          />
          where are you moving from?
          <TextField
            content={this.state.orig_address}
            label='street address'
            name='orig_address'
            handlerFunction={this.handleOrigAddress}
            placeholder='123 easy street'
          />
          <TextField
            content={this.state.orig_unit}
            label='unit, apartnemt, or suite number'
            name='orig_unit'
            handlerFunction={this.handleOrigUnit}
            placeholder='1'
          />
          <TextField
            content={this.state.orig_city}
            label='city'
            name='orig_city'
            handlerFunction={this.handleOrigCity}
            placeholder='city'
          />
          <TextField
            content={this.state.orig_state}
            label='state'
            name='orig_state'
            handlerFunction={this.handleOrigState}
            placeholder='state'
          />
          <TextField
            content={this.state.orig_zip}
            label='zip code'
            name='orig_zip'
            handlerFunction={this.handleOrigZip}
            placeholder='zip'
          />
          <TextField
            content={this.state.orig_floor}
            label='what floor is the entrance to your home on?'
            name='orig_floor'
            handlerFunction={this.handleOrigFloor}
            placeholder='floor'
          />
        <Select
            content={this.state.orig_city}
            label='where can a mover plan on parking the truck?'
            name='orig_truck_access'
            handlerFunction={this.handleOrigTruck}
            placeholder=''
          />
          
          <TextField
            content={this.state.orig_city}
            label='city'
            name='orig_city'
            handlerFunction={this.handleOrigCity}
            placeholder='city'
          />
          <TextField
            content={this.state.orig_city}
            label='city'
            name='orig_city'
            handlerFunction={this.handleOrigCity}
            placeholder='city'
          />
          <TextField
            content={this.state.orig_city}
            label='city'
            name='orig_city'
            handlerFunction={this.handleOrigCity}
            placeholder='city'
          />
          <input type='submit' className='button'/>
        </form>
      </div>
    )
  }
}

export default NewMove;
