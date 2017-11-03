import React from 'react';
import { Link } from 'react-router';

const MoveList = props => {
  let moveItems = props.moves.map(move => {
    return(
      <div className="link" key={move.id}>
        <Link to={`/app/moves/${move.id}`}>
          <p>{move.move_date}<br/>
          {`${move.orig_city}, ${move.orig_state} to ${move.dest_city}, ${move.dest_state}`}</p>
        </Link>
      </div>
    )
  });

  return(
    <div className="move-list text-center">
      <div className="add-move-button">
        <Link to="/app/moves/new">
          <div className="button round medium">
            create a new move
          </div>
        </Link>
      </div>
      <div className="text-left">
        {moveItems}
      </div>
    </div>
  )
}

export default MoveList;
