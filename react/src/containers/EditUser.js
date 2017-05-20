import React, { Component } from 'react';
import TextField from '../components/TextField'
import PasswordField from '../components/PasswordField'

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      message: {},
      current_user: {},
      email: "",
      phone: "",
      avatar: "",
      avatar_field: ""
    }
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleAvatarFieldChange = this.handleAvatarFieldChange.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadRequestBody = this.loadRequestBody.bind(this);
  }

  handlePhoneChange(event) {
    let numbers = event.target.value.replace(/\D/,"")
    this.setState({ phone: numbers })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleAvatarChange(event) {
    this.setState({ avatar: event.target.value })
  }

  handleAvatarFieldChange(event) {
    this.setState({ avatar_field: event.target.value })
    this.setState({ avatar: event.target.value })
    document.getElementById("custom-avatar").checked = true
  }

  validatePhone() {
    if ( this.state.phone.length !== 10 && this.state.phone !== "") {
      let newError = { phone: 'please enter a valid, ten digit phone number to continue' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.phone
      this.setState({ errors: errorState })
      return true
    }
  }

  validateEmail(email) {
    if (email === '' && !this.state.current_user.email) {
      let newError = { email: 'please provide your email to continue' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else if (!(email.includes("@") && email.includes(".") && !email.includes(' ')) && !email === '') {
      let newError = { email: 'please enter a valid email address' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.email
      this.setState({ errors: errorState })
      return true
    }
  }

  loadRequestBody(){
    let requestBody = {id: this.state.current_user.id}
    if (this.state.email !== "") {
      requestBody.email = this.state.email
    }
    if (this.state.phone !== "") {
      requestBody.phone = this.state.phone
    }
    if (this.state.avatar !== "") {
      requestBody.avatar = this.state.avatar
    }
    return requestBody
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.email === "" && this.state.phone === "" && this.state.avatar === "") {
      let newError = { form: 'submit what, exactly?' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
    } else {
      let errorState = this.state.errors
      delete errorState.form
      this.setState({ errors: errorState })
      if (
        this.validatePhone(this.state.phone) &&
        this.validateEmail(this.state.email)
      ) {
        fetch(`/api/v1/users/${this.state.current_user.id}.json`, {
          method: 'PATCH',
          credentials: "include",
          body: JSON.stringify(this.loadRequestBody())
        }).then(response => {
          let parsed = response.json()
          return parsed
        }).then(parsed => {
          if ( parsed.message ) {
            this.setState({ message: parsed.message });
            window.location=`/users/${this.state.current_user.id}`
          } else if ( parsed.errors ) {
            this.setState({ errors: parsed.errors })
          }
        })
      } else {
        event.preventDefault();
        this.validatePhone(this.state.phone);
        this.validateEmail(this.state.email);
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
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    let avatars = [
      "http://i.imgur.com/GHU9Gbw.png",
      "http://i.imgur.com/oXghwZK.png",
      "http://i.imgur.com/G0XyrKI.png",
      "http://i.imgur.com/0yLPYrE.png"
    ]

    return(
      <div className='registration row align-center'>
        <form className='callout small-12 medium-10 large-6 columns' onSubmit={this.handleFormSubmit}>
          <h3> lets start by adding contact info </h3>
          {errorDiv}
          <div className="row small-up-1 medium-up-4 large-up-4 avatar-select">
            <div className="card column text-center">
              <img src={avatars[0]}/>
              <input type="radio" name="avatar" value={avatars[0]} onChange={this.handleAvatarChange}/>
            </div>
            <div className="card column text-center">
              <img src={avatars[1]}/>
              <input type="radio" name="avatar" value={avatars[1]} onChange={this.handleAvatarChange}/>
            </div>
            <div className="card column text-center">
              <img src={avatars[2]}/>
              <input type="radio" name="avatar" value={avatars[2]} onChange={this.handleAvatarChange}/>
            </div>
            <div className="card column text-center">
              <img src={avatars[3]}/>
              <input type="radio" name="avatar" value={avatars[3]} onChange={this.handleAvatarChange}/>
            </div>
          </div>
          <label><input type="radio" name="avatar" value="" id="custom-avatar"/>
            use a custom personal avatar
            <input
              name="avatar"
              value={this.state.avatar_field}
              onChange={this.handleAvatarFieldChange}
              type="text"
              placeholder="avatar url"
            />
          </label>
          <TextField
            content={this.state.phone}
            label='phone number'
            name='phone'
            handlerFunction={this.handlePhoneChange}
          />
          <TextField
            content={this.state.email}
            label='email address'
            name='email'
            handlerFunction={this.handleEmailChange}
          />
          <div className='column text-right'>
            <input type='submit' className='button submit' value='submit' id='editusersubmit'/>
          </div>
        </form>
      </div>
    )
  }
}

export default EditUser;
