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
        <div className="small-12 medium-4 large-3 columns">
          <div className="user-panel row large-up-1">
            <div className="column">
              <div className="card text-center">
                <div className="card-section user-image">
                  <img src="https://i.imgur.com/oXghwZK.png"/>
                </div>
                <p>
                  {`${this.state.current_user.name}`}
                </p>
                <p>
                  {this.state.current_user.email}
                </p>
                <p>
                  {this.state.current_user.phone}
                </p>
                <p>
                  {this.state.current_user.email}
                </p>
                <div className="edit-button text-right">
                  <div className="button large">
                    edit <i className="fa fa-pencil" aria-hidden="true"></i>
                  </div>
                </div>
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
