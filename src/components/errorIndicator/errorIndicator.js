import React from "react";
import "./errorIndicator.scss";
import ds_ikon from "./deth-star.png";

const ErrorIndicator = () => {
  return (
    <div className="text-center">
      <div className="icon-wrapp text-center">
        <img src={ds_ikon} width="75" alt="error icon" />
      </div>
      <h4>BOOM!</h4>
      <p>Somthin is wrong</p>
      <p>but we already sent droids to fix it</p>
    </div>
  );
};

export default ErrorIndicator;
