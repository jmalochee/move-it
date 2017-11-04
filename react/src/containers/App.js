import React, { Component } from 'react';
import { Link } from 'react-router';
import EditUser from './EditUser';
import SidePanel from '../components/SidePanel';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {
        moves: []
      }
    }
  }

  componentDidMount(){
    fetch('/api/v1/user.json', {
      credentials: "include",
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      if (!!responseData) {
        this.setState({ current_user: responseData });
      } else {
        this.context.router.replace(`/`);
      }
    })
  }

  render() {
    return(
      <div className="app row">
        <SidePanel current_user={this.state.current_user} />
        <div className="small-12 medium-8 large-9 columns">
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.contextTypes = {
  router: PropTypes.object
};

export default App;
