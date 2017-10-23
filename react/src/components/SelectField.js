import React from 'react';

const Select = props => {
  let optionElements = props.options.map(item =>{
    return (
      <option key={item.id} value={item.id}>{item.name}</option>
    );
  })

  return (
    <label>{props.label}
      <select name={props.name} value={props.selectedOption} onChange={props.handlerFunction}>
        <option value=""></option>
        {optionElements}
      </select>
    </label>
  );
}

export default Select;
