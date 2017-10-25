import React, { component} from 'react';
import { Link } from 'react-router';
import MoveList from './MoveList';

const UserPanel = props => {
  return(
    <div className="card text-center" id="user-info">
      <div className="user-panel card-section user-image">
        <img src={props.current_user.avatar}/>
      </div>
      <p>
        <strong>{props.current_user.name}</strong>
      </p>
      <p className="text-left">
        contact info:
      </p>
      <p>
        {props.current_user.email}
      </p>
      <p>
        {props.current_user.phone_neat}
      </p>
      <div className="edit-button text-right">
        <Link to="/user/edit">
          <div className="button large">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </div>
        </Link>
      </div>
      <div className="card-section">
        <MoveList moves={props.current_user.moves} />
      </div>
    </div>
  )
}

export default UserPanel;
