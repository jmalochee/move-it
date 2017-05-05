import React, { Component } from 'react';

class UserShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {}
    }
  }

  componentDidMount(){
    fetch('/api/v1/home')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ current_user: responseData.current_user })
    })
  }

  render() {
    return(
      <div className="userShow">
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
        </div>
      </div>
    )
  }
}
export default UserShow;
