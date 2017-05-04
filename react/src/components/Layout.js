import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
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
