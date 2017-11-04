import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import TextField from '../components/TextField';
import TextAreaField from '../components/TextAreaField';
import NumberField from '../components/NumberField';
import SelectField from '../components/SelectField';
import DateField from '../components/DateField';

class MoveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: {},
      errors: {},
      message: {},
      move: {},
      options: {
        states: [],
        access: [],
        truck_access: []
      },
      current_div: 0
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.fetchMoveForm = this.fetchMoveForm.bind(this);
    this.navNextHandler = this.navNextHandler.bind(this);
    this.navBackHandler = this.navBackHandler.bind(this);
    this.formDivHandler = this.formDivHandler.bind(this);
    this.toggleButtons = this.toggleButtons.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.toMoveShow = this.toMoveShow.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.context.router.goBack();
  }

  handleFieldChange(event) {
    let move = this.state.move
    move[event.target.name] = event.target.value;
    this.forceUpdate()
  }

  toMoveShow(id) {
    this.context.router.push(`/app/moves/${id}`);
  }

  componentDidMount(){
    this.fetchMoveForm();
    this.fetchUser();
  }

  fetchUser(){
    fetch('/api/v1/user.json', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ current_user: responseData });
    })
  }

  fetchMoveForm(){
    fetch(this.props.getMoveAddress, {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ move: responseData.move });
      this.setState({ options: responseData.options });
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.state.move.user_id = this.state.current_user.id
    let token = $('meta[name="csrf-token"]').attr('content');
    fetch(this.props.submitMoveAddress, {
      credentials: "same-origin",
      method: this.props.submitFetchMethod,
      headers: { "X-CSRF-Token": token },
      body: JSON.stringify(this.state.move)
    })
    .then(response => {
      let parsed = response.json()
      return parsed
    })
    .then(parsed => {
      if ( parsed.message ) {
        this.setState({ message: parsed.message });
        this.toMoveShow(parsed.move_id);
      } else if ( parsed.errors ) {
        this.setState({ errors: parsed.errors });
      }
    })
  }

  toggleButtons() {
    if (document.getElementById("origin-addr").style.display === "block") {
      document.getElementById("moveformback").style.display = "none";
      document.getElementById("moveformnext").style.display = "inline";
      document.getElementById("moveformcancel").style.display = "inline";
      document.getElementById("moveformsubmit").style.display = "none";
    } else if (document.getElementById("last-step").style.display === "block") {
      document.getElementById("moveformback").style.display = "inline";
      document.getElementById("moveformnext").style.display = "none";
      document.getElementById("moveformsubmit").style.display = "inline";
      document.getElementById("moveformcancel").style.display = "none";
    } else {
      document.getElementById("moveformback").style.display = "inline";
      document.getElementById("moveformnext").style.display = "inline";
      document.getElementById("moveformsubmit").style.display = "none";
      document.getElementById("moveformcancel").style.display = "none";
    }
  }

  navNextHandler() {
    this.formDivHandler(1);
    this.progressHandler()
  }

  navBackHandler() {
    this.formDivHandler(-1);
    this.progressHandler()
  }

  progressHandler(step) {
    document.getElementById("moveform-progress").style.width = (20 * (step+1)) + "%";
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
    this.progressHandler(divIndex);
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
      <div className='row align-center'>
        <form id='moveform' className='callout small-12 medium-8 large-10 columns' onSubmit={this.handleFormSubmit}>
          <h3> lets get started! </h3>
          <div className="progress round" role="progressbar">
            <div id='moveform-progress' className='progress-meter round'></div>
          </div>
          {errorDiv}
          <div id="origin-addr">
            where are you moving from?
            <TextField
              content={this.state.move.orig_address}
              label='street address'
              name='orig_address'
              handlerFunction={this.handleFieldChange}
              placeholder='123 easy street'
            />
            <TextField
              content={this.state.move.orig_unit}
              label='unit/apt/ste'
              name='orig_unit'
              handlerFunction={this.handleFieldChange}
              placeholder='1'
            />
            <TextField
              content={this.state.move.orig_city}
              label='city'
              name='orig_city'
              handlerFunction={this.handleFieldChange}
              placeholder='city'
            />
            <SelectField
              label='state'
              name='orig_state'
              handlerFunction={this.handleFieldChange}
              options={this.state.options.states}
              selectedOption={this.state.move.orig_state}
            />
            <TextField
              content={this.state.move.orig_zip}
              label='zip code'
              name='orig_zip'
              handlerFunction={this.handleFieldChange}
              placeholder='zip'
            />
          </div>
          <div id="origin-info">
            <NumberField
              content={this.state.move.orig_rooms}
              label='how many rooms are being moved out from this address?'
              name='orig_rooms'
              handlerFunction={this.handleFieldChange}
              placeholder='#'
              />
            <NumberField
              content={this.state.move.orig_floor}
              label='what floor are you moving from?'
              name='orig_floor'
              handlerFunction={this.handleFieldChange}
              placeholder='#'
            />
            <SelectField
              label='where can the movers plan on parking the truck?'
              name='orig_truck_access'
              handlerFunction={this.handleFieldChange}
              options={this.state.options.truck_access}
              selectedOption={this.state.move.orig_truck_access}
            />
            <p className="help-text" id="truckHelpText">
              be sure to acquire any necessary parking permits or reservations in advance!
            </p>
            <SelectField
              label='how will movers get from the truck to your floor?'
              name='orig_access'
              handlerFunction={this.handleFieldChange}
              options={this.state.options.access}
              selectedOption={this.state.move.orig_access}
              />
              <NumberField
                content={this.state.move.orig_distance}
                label='about how far will the trip be from the truck to your door?'
                name='orig_distance'
                handlerFunction={this.handleFieldChange}
                placeholder='#'
              />
            <p className="help-text" id="distanceHelpText">
              the distance in feet, without counting any stairs
            </p>
          </div>
          <div id="destination-addr">
            where are you moving to?
            <TextField
              content={this.state.move.dest_address}
              label='street address'
              name='dest_address'
              handlerFunction={this.handleFieldChange}
              placeholder='123 easy street'
            />
            <TextField
              content={this.state.move.dest_unit}
              label='unit, apartnemt, or suite number'
              name='dest_unit'
              handlerFunction={this.handleFieldChange}
              placeholder='1'
            />
            <TextField
              content={this.state.move.dest_city}
              label='city'
              name='dest_city'
              handlerFunction={this.handleFieldChange}
              placeholder='city'
            />
            <SelectField
              label='state'
              name='dest_state'
              handlerFunction={this.handleFieldChange}
              options={this.state.options.states}
              selectedOption={this.state.move.dest_state}
            />
            <TextField
              content={this.state.move.dest_zip}
              label='zip code'
              name='dest_zip'
              handlerFunction={this.handleFieldChange}
              placeholder='zip'
            />
          </div>
          <div id="destination-info">
            <NumberField
              content={this.state.move.dest_rooms}
              label='how many rooms are you moving into at this address?'
              name='dest_rooms'
              handlerFunction={this.handleFieldChange}
              placeholder='#'
              />
            <NumberField
              content={this.state.move.dest_floor}
              label='what floor are you moving to?'
              name='dest_floor'
              handlerFunction={this.handleFieldChange}
              placeholder='#'
            />
            <SelectField
              label='where can the movers plan on parking the truck?'
              name='dest_truck_access'
              handlerFunction={this.handleFieldChange}
              options={this.state.options.truck_access}
              selectedOption={this.state.move.dest_truck_access}
            />
            <p className="help-text" id="truckHelpText">
              be sure to acquire any necessary parking permits or reservations in advance!
            </p>
            <SelectField
              label='how will movers get from the truck to your floor?'
              name='dest_access'
              handlerFunction={this.handleFieldChange}
              options={this.state.options.access}
              selectedOption={this.state.move.dest_access}
            />
            <NumberField
              content={this.state.move.dest_distance}
              label='about how far in feet will the trip be from the truck to your door?'
              name='dest_distance'
              handlerFunction={this.handleFieldChange}
              placeholder='#'
            />
            <p className="help-text" id="distanceHelpText">
              the distance in feet, without counting any stairs
            </p>
          </div>
          <div id='last-step'>
            <DateField
              content={this.state.move.move_date}
              label='when are you planning to moving?'
              name='move_date'
              handlerFunction={this.handleFieldChange}
              placeholder='--/--/----'
              size='30'
              />
            <TextAreaField
              content={this.state.move.comments}
              label='please provide any additional comments or clarification here'
              name='comments'
              handlerFunction={this.handleFieldChange}
              placeholder='this is a great place to let movers know about tight corners accessing driveways, narrow staircases, whether you needed a hoist to get large items into the house, or other miscelaneous details or instructions'
              rows='8'
              form='moveform'
            />
          </div>
          <div className='moveform-buttons row'>
            <div className='column align-left'>
              <input type='button' className='button' value='back' id='moveformback' onClick={this.navBackHandler}/>
              <input type='button' className='button cancel' value='cancel' id='moveformcancel' onClick={this.handleCancel}/>
            </div>
            <div className='column text-right'>
              <input type='button' className='button' value='next' id='moveformnext' onClick={this.navNextHandler}/>
              <input type='submit' className='button submit' value='submit' id='moveformsubmit'/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

MoveForm.contextTypes = {
  router: PropTypes.object
};

export default MoveForm;
