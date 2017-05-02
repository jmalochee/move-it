import React, { Component } from 'react';

class Auth extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="auth row">
        Welcome to Move It!
        <div className="user 6 columns">
          Log in as a user
          <form className="user_auth">
            <label>email
              <input type="text" name="email"/>
            </label>
            <label>password
              <input type="text" name="password"/>
            </label>
          </form>
        </div>
        <div className="mover 6 columns">
          Log in as a mover
          <form className="mover_auth">
            <label>email
              <input type="text" name="email"/>
            </label>
            <label>password
              <input type="text" name="password"/>
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default Auth;
