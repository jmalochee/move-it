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
        <div className="small-12 medium-2 large-2 columns">
          <div className="user-panel row large-up-1">
            <div className="column">
              <div className="card text-center">
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
        </div>
      </div>
    )
  }
}
export default UserShow;
