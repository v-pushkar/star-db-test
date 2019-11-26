import React from "react";

const ItemCard = props => {
  const {
    name,
    id,
    gender,
    hair_color,
    eye_color,
    birthYear,
    img
  } = props.person;
  return (
    <div className="row">
      <div className="col-5">
        <div className="img-wrapp">
          <img src={props.img} />
        </div>
      </div>
      <div className="col-7">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Gender:
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Birth year:
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Hair color:
            <span>{hair_color}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Eye color:
            <span>{eye_color}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ItemCard;
