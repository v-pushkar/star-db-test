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
import DummySwapiService from "./../../services/dummy-swapi-service";
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
  // swapiSerwice = new SwapiService();
  // swapiSerwice = new DummySwapiService();
  state = {
    selectedPerson: null,
    hasError: false,
    swapiSerwice : new DummySwapiService()
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
  };
  onServiceChange = ()=>{
    this.setState(({swapiSerwice})=> {
      const Service = swapiSerwice instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("onServiceChange swiched to:", Service.name);
    return {
      swapiSerwice: new Service()
    }
    })
    
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
    } = this.state.swapiSerwice;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiSerwice}>
          <Header onServiceChange={this.onServiceChange}/>
          <div className="container">
            {/* <Randomplanet /> */}
            <Row
              left={<PersonDetails itemId={1} />}
              right={<StarshippDetails itemId={3} />}
            />
            <PlanetDetails itemId={1} />
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
