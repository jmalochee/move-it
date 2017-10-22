import React, { Component } from 'react';
import { Link } from 'react-router';

class MoveList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moves: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/user.json', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ moves: responseData.moves })
    })
  }

  render() {
    let moveItems = this.state.moves.map(move => {
      return(
        <li key={move.id}>
          <Link to={`/moves/${move.id}`}>
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
}

export default MoveList;
