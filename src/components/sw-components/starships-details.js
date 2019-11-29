import React from "react";
import ItemDetiles, { Records } from "./../item-detiles";
import { withSwapiService } from "./../hoc";

const StarshippDetails = props => {
  return (
    <ItemDetiles {...props}>
      <Records field="model" label="Model" />
      <Records field="length" label="Length" />
      <Records field="constInCredits" label="Cost" />
      <Records field="passengers" label="Passengers" />
      <Records field="cargoCapacity" label="Cargo Capacity" />
    </ItemDetiles>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImgUrl: swapiService.getStarShipImg
  };
};

export default withSwapiService(StarshippDetails, mapMethodsToProps);
