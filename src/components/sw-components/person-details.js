import React from "react";
import ItemDetiles, { Records } from "./../item-detiles";

import { withSwapiService } from "./../hoc";

const PersonDetails = props => {
  return (
    <ItemDetiles {...props}>
      <Records field="gender" label="Gender" />
      <Records field="eye_color" label="Eye Color" />
    </ItemDetiles>
  );
};
// const PersonDetails = ({ itemId, getData, getImgUrl }) => {
//   return (
//     <ItemDetiles itemId={itemId} getData={getData} getImgUrl={getImgUrl}>
//       <Records field="gender" label="Gender" />
//       <Records field="eye_color" label="Eye Color" />
//     </ItemDetiles>
//   );
// };

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImgUrl: swapiService.getPersonImg
  };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
