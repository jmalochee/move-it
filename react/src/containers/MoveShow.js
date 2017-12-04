import React, { Component } from 'react';
import Inventory from '../components/Inventory';
import MoveDetails from '../components/MoveDetails';
import MovePrompt from '../components/MovePrompt';

class MoveShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {},
      current_move: {
        "move_date": null,
        "comments": null,
        "origin": {
          "address": {
            "street": null,
            "unit": null,
            "city": null,
            "state": null,
            "zip": null
          },
          "floor": null,
          "rooms": null,
          "access": null,
          "truck_access": null,
          "distance": null
        },
        "destination": {
          "address": {
            "street": null,
            "unit": null,
            "city": null,
            "state": null,
            "zip": null
          },
          "floor": null,
          "rooms": null,
          "access": null,
          "truck_access": null,
          "distance": null
        },
        "user_id": null,
        "created_at": null,
        "updated_at": null
      }
    }
    this.getMove = this.getMove.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if ( this.props.params.id !== nextProps.params.id ) {
      this.getMove(nextProps.params.id);
    }
  }

  componentDidMount(){
    this.getUser();
    this.getMove(this.props.params.id);
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

  getMove(id) {
    fetch(`/api/v1/moves/${id}.json`, {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ current_move: responseData })
    })
  }

  render() {
    return(
      <div className="moveShow row">
        <MoveDetails
          move={this.state.current_move}
        />
        <div className="small-12 medium-3 large-3 columns">
          <div className="inventory">

          </div>
        </div>
      </div>
    )
  }
}

export default MoveShow;
