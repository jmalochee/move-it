import React from 'react';
import { Link } from 'react-router';
import MoveList from './MoveList';
import UserPanel from './UserPanel';

const SidePanel = props => {
  return(
    <div className="side-panel small-12 medium-3 large-3 columns">
      <UserPanel current_user={props.current_user}/>
      <MoveList moves={props.current_user.moves} />
    </div>
  )
}

export default SidePanel;
