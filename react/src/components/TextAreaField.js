import React from 'react';

const TextAreaField = props => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        onChange={props.handlerFunction}
        placeholder={props.placeholder}
      >
        {props.content}
      </textarea>
    </label>
  );
}

export default TextAreaField;
