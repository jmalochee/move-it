import React from 'react';

const NumberField = props => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type='number'
        value={props.content}
        placeholder={props.placeholder}
        pattern="[123456789]\d*"
      />
    </label>
  );
}

export default NumberField;
