import React from "react";
import ItemDetiles, { Records } from "./../item-detiles";

import { withSwapiService } from "./../hoc";

const PlanetDetails = props => {
  return (
    <ItemDetiles {...props}>
      <Records field="population" label="Population" />
      <Records field="rotationPeriod" label="Rotation period" />
      <Records field="diametr" label="Diametr" />
    </ItemDetiles>
  );
};
const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImgUrl: swapiService.getPlanetImg
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
