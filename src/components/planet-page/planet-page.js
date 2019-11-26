import React, { Component } from "react";
import Itemlist from "./../item-list";
import SwapiService from "./../../services/swapi-service";
import Spiner from "./../spiner";
import Persondetiles from "./../person-detiles";
import ErrorIndicator from "./../errorIndicator";

class PlanetPage extends Component {
  swapiSerice = new SwapiService();
  state = {
    selectedItem: 5,
    hasError: false
  };

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
      // hasError: true
    });
  };
  componentDidCatch(error, info) {
    console.error(info);
    // console.error("componentDidCatch");
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row">
        <div className="col-lg-4 col-md-5 col-sm-12">
          <Itemlist
            onItemSelected={this.onItemSelected}
            getData={this.swapiSerice.getAllPlanets}
          />
        </div>
        <div className="col-lg-8 col-md-7 colsm-12">
          {/* <Persondetiles personId={this.state.selectedItem}></Persondetiles> */}
        </div>
      </div>
    );
  }
}

export default PlanetPage;
