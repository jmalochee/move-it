import React, { Component } from 'react';

class UserShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {},
      current_move: null
    }
  }

  componentDidMount(){
    fetch('/api/v1/user', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ current_user: responseData })
      console.log(responseData)
    })
  }

  render() {
    return(
      <div className="userShow">
        <div className="small-12 medium-3 large-2 columns">
          <div className="row">
            <div className="user-panel">
              {`${this.state.current_user.first_name} ${this.state.current_user.last_name}`}
              {this.state.current_user.email}
            </div>
          </div>
        </div>
        <div className="small-12 medium-6 large-8 columns">
          <div className="row">
            <div className="column">
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="small-12 medium-3 large-2 columns">
          <div className="row">
            <div className="inventory">
              <h2>inventory</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;
