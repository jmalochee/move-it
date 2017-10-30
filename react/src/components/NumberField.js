import React from 'react';

const NumberField = props => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type='number'
        value={props.content || ""}
        placeholder={props.placeholder}
      />
    </label>
  );
}

export default NumberField;
