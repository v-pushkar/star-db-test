import React from "react";

const Row = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">{left}</div>
      <div className="col-lg-6 col-md-6 colsm-12">{right}</div>
    </div>
  );
};
export default Row;
