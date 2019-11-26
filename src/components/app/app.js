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
import ItemDetiles from "./../item-detiles";
import PersonDetiles from "./../person-detiles";
import SwapiService from "./../../services/swapi-service";

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
    const personDetiles = (
      <ItemDetiles itemId={11} getData={getPerson} getImgUrl={getPersonImg} />
    );
    const starshipDitales = (
      <ItemDetiles
        itemId={5}
        getData={getStarship}
        getImgUrl={getStarShipImg}
      />
    );
    return (
      <div>
        <Header />
        <div className="container">
          {/* <Randomplanet /> */}
          <Row left={personDetiles} right={starshipDitales} />
          {/* <PeoplePage />
          <StarshipPage />
          <PlanetsPage /> */}
        </div>
      </div>
    );
  }
}

export default App;
