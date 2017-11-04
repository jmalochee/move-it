import React, { Component } from 'react';
import MoveForm from './MoveForm'

class EditMove extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className='newmove'>
        <MoveForm
          submitFetchMethod='PATCH'
          submitMoveAddress={`/api/v1/moves/${this.props.params.id}.json`}
          getMoveAddress={`/api/v1/moves/${this.props.params.id}/edit.json`}
        />
      </div>
    )
  }
}

export default EditMove;
