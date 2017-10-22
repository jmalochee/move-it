import React, { Component } from 'react';
import { Link } from 'react-router';
import EditUser from './EditUser';
import MoveList from './MoveList';

class UserShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {}
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
    let hasContact = () => {
      if (this.state.current_user.email) {
        return (this.props.children)
      } else {
        return (<EditUser/>)
      }
    }

    let hasMove = () => {
      if (!this.state.current_user.moves[0]) {
        return (<MoveList/>)
      }
    }

    return(
      <div className="userShow">
        <div className="small-12 medium-4 large-3 columns">
          <div className="user-panel row large-up-1">
            <div className="column">
              <div className="card text-center" id="user-info">
                <div className="card-section user-image">
                  <img src={this.state.current_user.avatar}/>
                </div>
                <p>
                  <strong>{this.state.current_user.name}</strong>
                </p>
                <p className="text-left">
                  contact info:
                </p>
                <p>
                  {this.state.current_user.email}
                </p>
                <p>
                  {this.state.current_user.phone_neat}
                </p>
                <div className="edit-button text-right">
                  <Link to="/user/edit">
                    <div className="button large">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                  </Link>
                </div>
                <MoveList/>
              </div>
            </div>
          </div>
        </div>
        <div className="small-12 medium-8 large-9 columns">
          {hasContact()}

        </div>
      </div>
    )
  }
}
export default UserShow;
