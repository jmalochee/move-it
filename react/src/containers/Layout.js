import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: {}
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
      <div className="background">
        <div className="row nav align-middle">
          <div className="column">
            <Link to="/"><h1>move it!</h1></Link>
          </div>
          <div className="auth column text-right">
            <Link to="/register" >Register</Link>
              <span> | </span>
            <Link to="/login" >Log In</Link>
          </div>
        </div>
        { this.props.children }
      </div>
    )
  }
}

export default Layout;
