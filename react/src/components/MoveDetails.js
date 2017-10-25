import React from 'react';

const MoveDetails = props => {
  let row = (name, value) => {
    return( <tr><td><strong>{name}:</strong></td><td>{value}</td></tr>)
  }

  let address = (addr) => {
    return(
      <div><p>{addr.street}<br/>{addr.city}, {addr.state} {addr.zip}</p></div>
    )
  }

  let side = (i) => {
    return(
      <div className="row">
        <div className="small-12 medium-6 large-6 columns address">
          {address(i.address)}
        </div>
        <div className="small-12 medium-6 large-6 columns address-details">
          <table>
            {row("floor", i.floor)}
            {row("rooms", i.rooms)}
            {row("home access", i.access)}
            {row("truck access", i.truck_access)}
            {row("walking distance", i.distance)}
          </table>
        </div>
      </div>
    )
  }

  return(
    <div className="column move-details">
      This move will take us...
      <div id="origin">
        <div className="row">
          ...from here
        </div>
        {side(props.move.origin)}
      </div>
      <div id="destination">
        <div className="row">
          ...to here
        </div>
        {side(props.move.destination)}
      </div>
    </div>
  )
}

export default MoveDetails;
