import React, { Component } from "react";
import Itemlist from "./../item-list";
import SwapiService from "./../../services/swapi-service";
import Persondetiles from "./../person-detiles";
import ErrorBoundry from "./../error-boundry";
import ErrrorBtn from "./../error-btn";
import Row from "./../row/row";

class PeoplePage extends Component {
  swapiSerice = new SwapiService();
  state = {
    selectedItem: 5
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const itemlist = (
      <Itemlist
        onItemSelected={this.onItemSelected}
        getData={this.swapiSerice.getAllPeople}
      />
    );
    const itemDetiles = (
      <Persondetiles personId={this.state.selectedItem}></Persondetiles>
    );
    return (
      <ErrorBoundry>
        <Row left={itemlist} right={itemDetiles} />
        <ErrrorBtn />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
