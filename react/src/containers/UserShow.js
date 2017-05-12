import React, { Component } from 'react';

class UserShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {}
    }
  }

  componentDidMount(){
    fetch('/api/v1/user.json', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ current_user: responseData })
    })
  }

  render() {
    return(
      <div className="userShow">
<<<<<<< HEAD
        <div className="small-12 medium-3 large-2 columns">
          <div className="row">
            this is where the user panel goes
          </div>
        </div>
        <div className="small-12 medium-6 large-8 columns">
          <div className="row">
            this is where the selected move info goes!
          </div>
        </div>
        <div className="small-12 medium-3 large-2 columns">
          <div className="row">
            this is where move inventory goes!
          </div>
=======
        <div className="small-12 medium-4 large-3 columns">
          <div className="user-panel row large-up-1">
            <div className="column">
              <div className="card">
                <div className="card-section user-image">
                  <img src="https://i.imgur.com/oXghwZK.png"/>
                </div>
                {`${this.state.current_user.name}`}
                {this.state.current_user.email}
              </div>
            </div>
          </div>
        </div>
        <div className="small-12 medium-8 large-9 columns">
          {this.props.children}
>>>>>>> 9278fe9cf6930be1cb2142cf2f3d78c82870650c
        </div>
      </div>
    )
  }
}
export default UserShow;
