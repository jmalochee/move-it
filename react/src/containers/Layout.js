import React, { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props);

  componentDidMount(){
    fetch('/api/v1/user', {
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
      <div className="background">
        { this.props.children }
      </div>
    )
  }
}

export default Layout;
