import React, { Component } from "react";
import "./planet-detiles.scss";

const PlanetDetiles = props => {
  return (
    <div className="planets-det-wrapp">
      <div className="row">
        <div className="col-5">
          <div className="img-wrapp">
            <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/46/1479397679-c-3po-see-threepio-68fe125c.jpeg?crop=0.501xw:1.00xh;0.301xw,0&resize=768:*" />
          </div>
        </div>
        <div className="col-7">
          <h4>Name</h4>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span className="badge badge-primary badge-pill">1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetiles;
