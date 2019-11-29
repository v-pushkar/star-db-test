import React from "react";

import { SwapiServiceConsumer } from "./../swapi-servise-context";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviseProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviseProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};
export default withSwapiService;
