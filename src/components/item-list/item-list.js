import React from "react";
import "./item-list.scss";


const ItemList = props => {
  const { data, onItemSelected } = props;
  const items = data.map(item => {
    return (
      <li
        key={item.id}
        className="list-group-item list-group-item-action"
        onClick={() => onItemSelected(item.id)}
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className="item-list-wrapp">
      <div className="list-group">{items}</div>
    </div>
  );
};


export default ItemList;
