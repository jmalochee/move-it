import React, { Component } from 'react';
import MoveForm from './MoveForm'

class NewMove extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className='newmove'>
        <MoveForm
          submitFetchMethod='POST'
          submitMoveAddress='/api/v1/moves.json'
          getMoveAddress='/api/v1/moves/new.json'
        />
      </div>
    )
  }
}

export default NewMove;
