import React from 'react';

const OriginAddr = props => {
  return (
    <div className="move-origin">
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

  )
}
