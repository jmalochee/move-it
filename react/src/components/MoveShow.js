import React, { Component } from 'react';

class MoveShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_move: {}
    }
  }

  render() {
    return(
      <div className="column">
        <div className="moves row align-center">
          select a move or create a new one to get started
        </div>
        <div className="newmovebutton row align-center">
          <a href="/moves/new" className="button large">create a new move!</a>
        </div>
      </div>
    )
  }
}
export default MoveShow;
