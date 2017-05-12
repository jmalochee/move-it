import React, { Component } from 'react';
import Inventory from '../components/Inventory';
import MoveDetails from '../containers/MoveDetails';
import MovePrompt from '../components/MovePrompt';

class MoveShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {},
      current_move: null
    }
    this.getMove = this.getMove.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount(){
    this.getUser();
    this.getMove();
  }

  getUser() {
    fetch('/api/v1/user.json', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ current_user: responseData })
    })
  }

  getMove() {
    fetch('/api/v1/move.json', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ current_move: responseData })
    })
  }


  render() {
    let moveDisplay = () => {
      if (current_move) {
        return(
          <div className="row moveShow">
            <div className="small-12 medium-10 large-10 columns">
              <MoveDetails
                move={this.state.current_move}
                />
            </div>
            <div className="small-12 medium-2 large-2 columns">
              <div className="inventory">
                <Inventory

                />
              </div>
            </div>
          </div>
        )
      } else {
        return( <MovePrompt/> )
      }
    }
    return(
      <div>
        {moveDisplay}
      </div>
    )
  }
}

export default MoveShow;
