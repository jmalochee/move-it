import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="registration row">
        <div className="user-reg 6 columns text-center">
          <div className="blurb">
            I'm getting ready to move and don't have time to apply for a quote more than once.
          </div>
          <a href="/users/new" className="button large">Register as a user!</a>
        </div>
        <div className="mover-reg 6 columns text-center">
          <div className="blurb">
            I'm a moving company that values my customer's time but still want to be able to provide them with an accurate quote.
          </div>
          <a href="/movers/new" className="button large">Register as a mover!</a>
        </div>
      </div>
    )
  }
}

export default Register;
