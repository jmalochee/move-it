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
    })
  }


  render() {
    let loginLinks = () => {
      if (this.state.current_user) {
        return(
          <div className="auth column text-right">
            <Link to="/user/1" >signed in as <strong> {this.state.current_user} </strong></Link>
            <span> | </span>
            <Link to="/signout" id="sign_out">sign out</Link>
          </div>
        )
      } else {
        return(
          <div className="auth column text-right">
            <Link to="/register" >register</Link>
            <span> | </span>
            <Link to="/auth/google_oauth2" id="sign_in">sign in</Link>
          </div>
        )
      }
    }

    return(
      <div className="background">
        { this.props.children }
      </div>
    )
  }
}

export default Layout;
