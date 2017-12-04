import React from 'react';
import EditButton from '../components/EditButton';

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
      <div className="move-end row">
        <div className="small-12 medium-12 large-4 columns align-self-middle address">
          {address(i.address)}
        </div>
        <div className="small-12 medium-12 large-8 columns address-details">
          <table>
            <tbody>
              {row("floor", i.floor)}
              {row("rooms", i.rooms)}
              {row("home access", i.access)}
              {row("truck access", i.truck_access)}
              {row("walking distance", i.distance)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return(
    <div className="small-12 medium-10 large-10 columns move-details">
      <h3>this move will take us</h3>
      <div className="row">
        ...from here
      </div>
      {side(props.move.origin)}
      <div className="row">
        ...to here
      </div>
      {side(props.move.destination)}
      <div className="general row column">
        <p>scheduled for {props.move.move_date}</p>
        <p>additional information:</p>
        <blockquote> {props.move.comments || "no additional information provided"} </blockquote>
        <EditButton linkTo={`/app/moves/${props.move.id}/edit`} />
      </div>
    </div>
  )
}

export default MoveDetails;
