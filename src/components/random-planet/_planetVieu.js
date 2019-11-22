import React from "react";

const PlanetVieu = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter, climate } = planet;
  return (
    <div className="row">
      <div className="col-4">
        <div className="img-wrapp">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="planet"
          />
        </div>
      </div>
      <div className="col-8">
        <div className="planet-description">
          <h4>{name}</h4>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              ID:
              <span className="badge badge-pill">{id}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Population:
              <span className="badge badge-pill">{population}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Rotation period:
              <span className="badge  badge-pill">{rotationPeriod}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Diameter:
              <span className="badge  badge-pill">{diameter}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Climate:
              <span className="badge  badge-pill">{climate}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PlanetVieu;
