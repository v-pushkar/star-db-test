import React from "react";
import "./item-list.scss";
import PropTypes from "prop-types";

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

ItemList.defaultProps = {
  onItemSelected: () => {}
};
ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemList;
