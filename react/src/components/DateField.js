import React from 'react';

const DateField = props => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type='date'
        value={props.content}
        placeholder={props.placeholder}
        size={props.size}
      />
    </label>
  );
}

export default DateField;
