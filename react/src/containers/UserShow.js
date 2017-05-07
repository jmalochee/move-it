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
    fetch('/api/v1/home', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ current_user: responseData.current_user })
      console.log(responseData)
    })
  }

  render() {
    return(
      <div className="userShow">
        <div className="small-12 medium-3 large-2 columns">
          <div className="row">
            <div className="full_name">
              full name here
            </div>
          </div>
        </div>
        <div className="small-12 medium-6 large-8 columns">
          <div className="row">
            <div className="column">
              <div className="moves row align-center">
                select a move or create a new one to get started
              </div>
              <div className="newmovebutton row align-center">
                <a href="/moves/new" className="button large">create a new move!</a>
              </div>
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
