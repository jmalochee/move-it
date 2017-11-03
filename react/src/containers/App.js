import React, { Component } from 'react';
import { Link } from 'react-router';
import EditUser from './EditUser';
import SidePanel from '../components/SidePanel';

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
      this.setState({ current_user: responseData })
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
export default App;
