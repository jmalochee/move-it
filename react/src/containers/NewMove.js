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
      current_div: 0,
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
      access_options: [
        {id: "1", name: "partial staircase"},
        {id: "2", name: "multiple staircases"},
        {id: "3", name: "elevator"},
        {id: "4", name: "i can literally roll a ball from the street into the entrance"}
      ],
      truck_access_options: [
        {id: "1", name: "Loading Dock"},
        {id: "2", name: "Street"},
        {id: "3", name: "Driveway"}
      ]
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
    this.navNextHandler = this.navNextHandler.bind(this);
    this.navBackHandler = this.navBackHandler.bind(this);
    this.formDivHandler = this.formDivHandler.bind(this);
    this.toggleButtons = this.toggleButtons.bind(this);
  }

  handleMoveDate(event) {
    this.setState({ move_date: event.target.value })
  }

  handleOrigRooms(event) {
    this.setState({ orig_rooms: event.target.value })
  }

  handleOrigAddress(event) {
    this.setState({ orig_address: event.target.value })
  }

  handleOrigUnit(event) {
    this.setState({ orig_unit: event.target.value })
  }

  handleOrigCity(event) {
    this.setState({ orig_city: event.target.value })
  }

  handleOrigState(event) {
    this.setState({ orig_state: event.target.value })
  }

  handleOrigZip(event) {
    this.setState({ orig_zip: event.target.value })
  }

  handleOrigFloor(event) {
    this.setState({ orig_floor: event.target.value })
  }

  handleOrigTruck(event) {
    this.setState({ orig_truck_access: event.target.value })
  }

  handleOrigAccess(event) {
    this.setState({ orig_access: event.target.value })
  }

  handleOrigDistance(event) {
    this.setState({ orig_distance: event.target.value })
  }

  handleDestRooms(event) {
    this.setState({ dest_rooms: event.target.value })
  }

  handleDestAddress(event) {
    this.setState({ dest_address: event.target.value })
  }

  handleDestUnit(event) {
    this.setState({ dest_unit: event.target.value })
  }

  handleDestCity(event) {
    this.setState({ dest_city: event.target.value })
  }

  handleDestState(event) {
    this.setState({ dest_state: event.target.value })
  }

  handleDestZip(event) {
    this.setState({ dest_zip: event.target.value })
  }

  handleDestFloor(event) {
    this.setState({ dest_floor: event.target.value })
  }

  handleDestTruck(event) {
    this.setState({ dest_truck_access: event.target.value })
  }

  handleDestAccess(event) {
    this.setState({ dest_access: event.target.value })
  }

  handleDestDistance(event) {
    this.setState({ dest_distance: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let requestBody = {
      move_date: this.state.move_date,
      orig_rooms: this.state.orig_rooms,
      orig_address: this.state.orig_address,
      orig_unit: this.state.orig_unit,
      orig_city: this.state.orig_city,
      orig_state: this.state.orig_state,
      orig_zip: this.state.orig_zip,
      orig_floor: this.state.orig_floor,
      orig_access: this.state.orig_access,
      orig_truck_access: this.state.orig_truck_access,
      orig_distance: this.state.orig_distance,
      dest_rooms: this.state.dest_rooms,
      dest_address: this.state.dest_address,
      dest_unit: this.state.dest_unit,
      dest_city: this.state.dest_city,
      dest_state: this.state.dest_state,
      dest_zip: this.state.dest_zip,
      dest_floor: this.state.dest_floor,
      dest_access: this.state.dest_access,
      dest_truck_access: this.state.dest_truck_access,
      dest_distance: this.state.dest_distance
    }
    debugger;
    fetch('/api/v1/moves', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(requestBody)
    }).then(response => {
      let parsed = response.json()
      return parsed
    }).then(parsed => {
      if ( parsed.message ) {
        this.setState({ message: parsed.message });
        window.location=`/moves/{parsed.move.id}`;
      } else if ( parsed.errors ) {
        this.setState({ errors: parsed.errors })
      }
    })
  }

  toggleButtons() {
    if (document.getElementById("origin-addr").style.display === "block") {
      document.getElementById("newmoveback").style.display = "none";
      document.getElementById("newmovenext").style.display = "inline";
      document.getElementById("newmovesubmit").style.display = "none";
    } else if (document.getElementById("last-step").style.display === "block") {
      document.getElementById("newmoveback").style.display = "inline";
      document.getElementById("newmovenext").style.display = "none";
      document.getElementById("newmovesubmit").style.display = "inline";
    } else {
      document.getElementById("newmoveback").style.display = "inline";
      document.getElementById("newmovenext").style.display = "inline";
      document.getElementById("newmovesubmit").style.display = "none";
    }
  }

  navNextHandler() {
    this.formDivHandler(1);
    this.toggleButtons();
  }

  navBackHandler() {
    this.formDivHandler(-1);
    this.toggleButtons();
  }

  formDivHandler(value) {
    let formDivs = [
      "origin-addr",
      "origin-info",
      "destination-addr",
      "destination-info",
      "last-step"
    ];
    let divIndex = this.state.current_div + value
    document.getElementById(formDivs[this.state.current_div]).style.display = "none";
    document.getElementById(formDivs[divIndex]).style.display = "block";
    this.setState({ current_div: divIndex });
    this.toggleButtons();
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
          <div id="origin-addr">
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
              label='unit/apt/ste'
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
          </div>
          <div id="origin-info">
            <NumberField
              content={this.state.orig_floor}
              label='what floor are you moving from?'
              name='orig_floor'
              handlerFunction={this.handleOrigFloor}
              placeholder=''
            />
            <NumberField
              content={this.state.orig_rooms}
              label='how many rooms are there at this address?'
              name='orig_rooms'
              handlerFunction={this.handleOrigRooms}
              placeholder=''
            />
            <SelectField
              content={this.state.orig_access}
              label='how do you get from the street level to your floor?'
              name='orig_access'
              handlerFunction={this.handleOrigAccess}
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
          <div id="destination-addr">
            where are you moving to?
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
          </div>
          <div id="destination-info">
            <NumberField
              content={this.state.dest_floor}
              label='what floor are you moving to?'
              name='dest_floor'
              handlerFunction={this.handleDestFloor}
              placeholder='#'
            />
            <NumberField
              content={this.state.dest_rooms}
              label='how many rooms are there at this address?'
              name='dest_rooms'
              handlerFunction={this.handleDestRooms}
              placeholder='#'
            />
            <SelectField
              label='how do you get from the street level to your floor?'
              name='dest_access'
              handlerFunction={this.handleDestAccess}
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
          <div id='last-step'>
            <DateField
              content={this.state.move_date}
              label='when are you moving?'
              name='move_date'
              handlerFunction={this.handleMoveDate}
              placeholder='--/--/----'
              />
            <TextAreaField
              content={this.state.comments}
              label='please provide any additional comments or clarification here'
              name='comments'
              handlerFunction={this.handleComments}
              placeholder='this is a great place to let movers know about tight corners accessing driveways, narrow staircases, whether you needed a hoist to get large items into the house, or other miscelaneous details or instructions'
              rows='8'
            />
          </div>
          <div className='newmove-buttons row'>
            <div className='column align-left'>
              <input type='button' className='button' value='back' id='newmoveback' onClick={this.navBackHandler}/>
            </div>
            <div className='column text-right'>
              <input type='button' className='button' value='next' id='newmovenext' onClick={this.navNextHandler}/>
              <input type='submit' className='button submit' value='submit' id='newmovesubmit'/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NewMove;
