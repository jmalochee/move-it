import React, { Component } from 'react';
import TextField from '../components/TextField'
import TextAreaField from '../components/TextAreaField'
import NumberField from '../components/NumberField'
import SelectField from '../components/SelectField'
import DateField from '../components/DateField'

class NewMove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      message: {},
      move_date: "",
      orig_rooms: "",
      orig_address: "",
      orig_unit: "",
      orig_city: "",
      orig_state: "",
      orig_zip: "",
      orig_floor: "",
      orig_access: "",
      orig_truck_access: "",
      orig_distance: "",
      dest_rooms: "",
      dest_address: "",
      dest_unit: "",
      dest_city: "",
      dest_state: "",
      dest_zip: "",
      dest_floor: "",
      dest_access: "",
      dest_truck_access: "",
      dest_distance: "",
      access_options: [{
        "1": "partial staircase",
        "2": "multiple staircases",
        "3": "elevator",
        "4": "i can literally roll a ball from the street into the entrance"
      }],
      truck_access_options: [{
        "1": "Loading Dock",
        "2": "Street",
        "3": "Driveway"
      }]
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleMoveDate = this.handleMoveDate.bind(this);
    this.handleOrigRooms = this.handleOrigRooms.bind(this);
    this.handleOrigAddress = this.handleOrigAddress.bind(this);
    this.handleOrigUnit = this.handleOrigUnit.bind(this);
    this.handleOrigCity = this.handleOrigCity.bind(this);
    this.handleOrigState = this.handleOrigState.bind(this);
    this.handleOrigZip = this.handleOrigZip.bind(this);
    this.handleOrigFloor = this.handleOrigFloor.bind(this);
    this.handleOrigTruck = this.handleOrigTruck.bind(this);
    this.handleOrigAccess = this.handleOrigAccess.bind(this);
    this.handleOrigDistance = this.handleOrigDistance.bind(this);
    this.handleDestRooms = this.handleDestRooms.bind(this);
    this.handleDestAddress = this.handleDestAddress.bind(this);
    this.handleDestUnit = this.handleDestUnit.bind(this);
    this.handleDestCity = this.handleDestCity.bind(this);
    this.handleDestState = this.handleDestState.bind(this);
    this.handleDestZip = this.handleDestZip.bind(this);
    this.handleDestFloor = this.handleDestFloor.bind(this);
    this.handleDestTruck = this.handleDestTruck.bind(this);
    this.handleDestAccess = this.handleDestAccess.bind(this);
    this.handleDestDistance = this.handleDestDistance.bind(this);
  }

  handleMoveDate(event) {
    this.validateOrigRooms(event.target.value)
    this.setState({ dest_rooms: event.target.value })
  }

  handleOrigRooms(event) {
    this.validateOrigRooms(event.target.value)
    this.setState({ dest_rooms: event.target.value })
  }

  handleOrigAddress(event) {
    this.validateOrigAddress(event.target.value)
    this.setState({ orig_address: event.target.value })
  }

  handleOrigUnit(event) {
    this.validateOrigUnit(event.target.value)
    this.setState({ orig_unit: event.target.value })
  }

  handleOrigCity(event) {
    this.validateOrigCity(event.target.value)
    this.setState({ orig_city: event.target.value })
  }

  handleOrigState(event) {
    this.validateOrigState(event.target.value)
    this.setState({ orig_state: event.target.value })
  }

  handleOrigZip(event) {
    this.validateOrigZip(event.target.value)
    this.setState({ orig_zip: event.target.value })
  }

  handleOrigFloor(event) {
    this.validateOrigFloor(event.target.value)
    this.setState({ orig_floor: event.target.value })
  }

  handleOrigTruck(event) {
    this.validateOrigTruck(event.target.value)
    this.setState({ orig_truck: event.target.value })
  }

  handleOrigAccess(event) {
    this.validateOrigAccess(event.target.value)
    this.setState({ orig_access: event.target.value })
  }

  handleOrigDistance(event) {
    this.validateOrigDistance(event.target.value)
    this.setState({ orig_distance: event.target.value })
  }

  handleDestRooms(event) {
    this.validateDestRooms(event.target.value)
    this.setState({ dest_rooms: event.target.value })
  }

  handleDestAddress(event) {
    this.validateDestAddress(event.target.value)
    this.setState({ dest_address: event.target.value })
  }

  handleDestUnit(event) {
    this.validateDestUnit(event.target.value)
    this.setState({ dest_unit: event.target.value })
  }

  handleDestCity(event) {
    this.validateDestCity(event.target.value)
    this.setState({ dest_city: event.target.value })
  }

  handleDestState(event) {
    this.validateDestState(event.target.value)
    this.setState({ dest_state: event.target.value })
  }

  handleDestZip(event) {
    this.validateDestZip(event.target.value)
    this.setState({ dest_zip: event.target.value })
  }

  handleDestFloor(event) {
    this.validateDestFloor(event.target.value)
    this.setState({ dest_floor: event.target.value })
  }

  handleDestTruck(event) {
    this.validateDestTruck(event.target.value)
    this.setState({ dest_truck: event.target.value })
  }

  handleDestAccess(event) {
    this.validateDestAccess(event.target.value)
    this.setState({ dest_access: event.target.value })
  }

  handleDestDistance(event) {
    this.validateDestDistance(event.target.value)
    this.setState({ dest_distance: event.target.value })
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
        <form className='callout small-12 medium-8 large-10 columns' onSubmit={this.handleFormSubmit}>
          <h3> lets get started! </h3>
          {errorDiv}
          <div className="move-origin">
            lets start by getting the basics out of the way:
            <DateField
              content={this.state.move_date}
              label='when are you moving?'
              name='move_date'
              handlerFunction={this.handleMoveDate}
              placeholder='"--/--/----"'
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
            <NumberField
              content={this.state.orig_floor}
              label='what floor are you moving from?'
              name='orig_floor'
              handlerFunction={this.handleOrigFloor}
              placeholder=''
            />
            <SelectField
              content={this.state.orig_access}
              label='how do you get from the street level to your floor?'
              name='orig_access'
              handlerFunction={this.handleOrigTruck}
              options={this.state.access_options}
              selectedOption={this.state.orig_access}
            />
            <SelectField
              label='where can a mover plan on parking the truck?'
              name='orig_truck_access'
              handlerFunction={this.handleOrigTruck}
              options={this.state.truck_access_options}
              selectedOption={this.state.orig_truck_access}
            />
            <p className="help-text" id="truckHelpText">
              be sure to acquire any necessary parking permits or reservations in advance!
            </p>
          </div>
          <div className="move-destination">
            lets start by getting the basics out of the way:
            <DateField
              content={this.state.move_date}
              label='when are you moving?'
              name='move_date'
              handlerFunction={this.handleMoveDate}
              placeholder='"--/--/----"'
            />
            where are you moving from?
            <TextField
              content={this.state.dest_address}
              label='street address'
              name='dest_address'
              handlerFunction={this.handleDestAddress}
              placeholder='123 easy street'
            />
            <TextField
              content={this.state.dest_unit}
              label='unit, apartnemt, or suite number'
              name='dest_unit'
              handlerFunction={this.handleDestUnit}
              placeholder='1'
            />
            <TextField
              content={this.state.dest_city}
              label='city'
              name='dest_city'
              handlerFunction={this.handleDestCity}
              placeholder='city'
            />
            <TextField
              content={this.state.dest_state}
              label='state'
              name='dest_state'
              handlerFunction={this.handleDestState}
              placeholder='state'
            />
            <TextField
              content={this.state.dest_zip}
              label='zip code'
              name='dest_zip'
              handlerFunction={this.handleDestZip}
              placeholder='zip'
            />
            <NumberField
              content={this.state.dest_floor}
              label='what floor are you moving from?'
              name='dest_floor'
              handlerFunction={this.handleDestFloor}
              placeholder=''
            />
            <SelectField
              label='how do you get from the street level to your floor?'
              name='dest_access'
              handlerFunction={this.handleDestTruck}
              options={this.state.access_options}
              selectedOption={this.state.dest_access}
            />
            <SelectField
              label='where can a mover plan on parking the truck?'
              name='dest_truck_access'
              handlerFunction={this.handleDestTruck}
              options={this.state.truck_access_options}
              selectedOption={this.state.dest_truck_access}
            />
            <p className="help-text" id="truckHelpText">
              be sure to acquire any necessary parking permits or reservations in advance!
            </p>
          </div>
          <TextAreaField
            content={this.state.comments}
            label='please provide any additional comments or clarification here'
            name='comments'
            handlerFunction={this.handleComments}
            placeholder=''
          />
          <input type='submit' className='button'/>
        </form>
      </div>
    )
  }
}

export default NewMove;
