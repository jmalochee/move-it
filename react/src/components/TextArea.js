import React from 'react';

const TextArea = props => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        onChange={props.handlerFunction}
        placeholder={props.placeholder}
        form=""
      >
        {props.content}
      <textarea>
    </label>
  );
}

export default TextArea;
