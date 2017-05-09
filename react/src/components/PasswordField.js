import React from 'react';

const PasswordField = props => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type='password'
        value={props.content}
        placeholder={props.placeholder}
      />
    </label>
  );
}

export default PasswordField;
