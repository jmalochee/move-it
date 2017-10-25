import React, { component} from 'react';
import { Link } from 'react-router';

const MoveList = props => {
  let moveItems = props.moves.map(move => {
    return(
      <li key={move.id}>
        <Link to={`/app/moves/${move.id}`}>
          <p>{move.move_date}</p>
          <p>{`${move.orig_city}, ${move.orig_state} to ${move.dest_city}, ${move.dest_state}`}</p>
        </Link>
      </li>
    )
  });

  return(
    <div className="card text-center" id="move-list">
      <ul>
        {moveItems}
      </ul>
    </div>
  )
}

export default MoveList;
