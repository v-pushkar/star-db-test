import React from "react";
import { StarshippList } from "./../sw-components";
import { withRouter } from "react-router-dom";

const StarshipPage = ({ history }) => {
  return (
    <StarshippList
      onItemSelected={itemId => {
        history.push(`/starships/${itemId}`);
      }}
    />
  );
};

export default withRouter(StarshipPage);
