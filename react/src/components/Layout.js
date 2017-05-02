import React, { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <div className="top-bar">
          <div className="moveit">
            <h1>move it!</h1>
          </div>
          <div className="authentication text-right">
            <Link to="/register">Register</Link>
            <span> | </span>
            <Link to="/login">Log In</Link>
          </div>
        </div>
        { props.children }
      </div>
    )
  }
}

export default Layout;
