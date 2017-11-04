import React, { Component } from 'react';
import Experience from './Experience';
import PropTypes from 'prop-types';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: ""
    }
  }

  componentWillMount() {
    fetch('/api/v1/user.json', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      if(!!responseData) {
        this.context.router.replace(`/app`);
      }
    })
  }

  render() {
    let moverBlurb = "I'm a moving company that values my customer's time but still want to be able to provide them with an accurate quote."
    let userBlurb = "I'm getting ready to move and don't have time to apply for a quote more than once."

    return(
      <div className="home row">
        <Experience modifier="user" blurb={userBlurb} regLink="/auth/google_oauth2"/>
        <Experience modifier="mover" blurb={moverBlurb} regLink="/auth/google_oauth2"/>
      </div>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object
};

export default Home;
