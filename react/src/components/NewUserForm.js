import React from 'react';

const NewUserForm = props => {
  return (
    <form className="callout signup" onSubmit={this.handleFormSubmit}>
      {errorDiv}
      <label>First Name
        <input className="row" type="text" placeholder="first"/>
      </label>
      <label>Last Name
        <input className="row" type="text" placeholder="last"/>
      </label>
      <label>Email
        <input className="row" type="text" placeholder="em@il.com"/>
      </label>
      <label>Pass
        <input className="row" type="text" placeholder="em@il.com"/>
      </label>
      <label>Email
        <input className="row" type="text" placeholder="em@il.com"/>
      </label>
    </form>
  )
}
