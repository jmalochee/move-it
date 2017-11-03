import React from 'react';

const Inventory = props => {
  let things = props.inventory.map(item => {
    <li>{item.qty} x {item.name}</li>
  })

  return(
    <div className="inventory row column">
      <h2>inventory</h2>
      <ul className="inventory-list">
        {things}
      </ul>
    </div>
  )
}
export default Inventory;
