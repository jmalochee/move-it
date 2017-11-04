import React from 'react';
import { Link } from 'react-router';
import MoveList from './MoveList';
import EditButton from './EditButton';

const UserPanel = props => {
  return(
    <div className="user-panel ">
      <div className="card-section user-image">
        <img src={props.current_user.avatar}/>
      </div>
      <EditButton linkTo="/app/user/edit"/>
      <div className="user-info">
        <p>
          <strong>{props.current_user.name}</strong>
        </p>
        <p>
          {props.current_user.email} <br/>
          {props.current_user.phone_neat}
        </p>
      </div>
    </div>
  )
}

export default UserPanel;
