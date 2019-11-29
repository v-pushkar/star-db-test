import React, { Component } from "react";
import Header from "./../header";
import Randomplanet from "./../random-planet";
import Itemlist from "./../item-list";
import Planetdetiles from "./../planet-detiles";
import Persondetiles from "./../person-detiles";
import Spaceshipdetiles from "./../starship-detiles";
import ErrorIndicator from "./../errorIndicator";
import PeoplePage from "./../people-page";
import StarshipPage from "./../starships-page";
import PlanetsPage from "./../planet-page";
import Row from "./../row/row";
// import ItemDetiles, { Records } from "./../item-detiles";
import PersonDetiles from "./../person-detiles";
import ErrorBoundry from "./../error-boundry";
import SwapiService from "./../../services/swapi-service";
import {
  SwapiServiceProvider,
  SwapiServiceConsumer
} from "./../swapi-servise-context";

import {
  PersonDetails,
  StarshippDetails,
  PlanetDetails,
  PersonList,
  StarshippList,
  PlanetList
} from "./../sw-components";

class App extends Component {
  swapiSerwice = new SwapiService();
  state = {
    selectedPerson: null,
    hasError: false
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
      // hasError: true
    });
  };
  componentDidCatch() {
    console.error("componentDidCatch");
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const {
      getPerson,
      getStarship,
      getPersonImg,
      getStarShipImg
    } = this.swapiSerwice;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiSerwice}>
          <Header />
          <div className="container">
            <Randomplanet />
            <Row
              left={<PersonDetails itemId={5} />}
              right={<StarshippDetails itemId={15} />}
            />
            <PlanetDetails itemId={15} />
            <PersonList />
            <PlanetList />
            <StarshippList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
