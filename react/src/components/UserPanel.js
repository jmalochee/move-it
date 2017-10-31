import React, { component} from 'react';
import { Link } from 'react-router';
import MoveList from './MoveList';
import EditButton from './EditButton';

const UserPanel = props => {
  return(
    <div className="card text-center" id="user-info">
      <div className="user-panel card-section user-image">
        <img src={props.current_user.avatar}/>
      </div>
      <p>
        <strong>{props.current_user.name}</strong>
      </p>
      <div className="row">
        <div className="column align-left">
          contact&nbsp;info:
        </div>
        <EditButton linkTo="/app/user/edit"/>
      </div>
      <p>
        {props.current_user.email}
      </p>
      <p>
        {props.current_user.phone_neat}
      </p>
      <div className="card-section">
        <div className="add-move-button text-right column">
          <Link to="/app/moves/new">
            <div className="button large">
              create a new move
            </div>
          </Link>
        </div>
        <MoveList moves={props.current_user.moves} />
      </div>
    </div>
  )
}

export default UserPanel;
