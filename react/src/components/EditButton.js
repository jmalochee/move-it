import React, { component} from 'react';
import { Link } from 'react-router';

const EditButton = props => {
  return(
    <div className="edit-button text-right column">
      <Link to={props.linkTo}>
        <div className="button large">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
      </Link>
    </div>
  )
}

export default EditButton;
