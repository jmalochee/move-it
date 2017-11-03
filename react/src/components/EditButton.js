import React from 'react';
import { Link } from 'react-router';

const EditButton = props => {
  return(
    <div className="edit-button text-right">
      <Link to={props.linkTo}>
        <div className="button round medium">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
      </Link>
    </div>
  )
}

export default EditButton;
