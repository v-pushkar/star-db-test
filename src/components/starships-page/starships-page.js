import React, { Component } from "react";
import Itemlist from "./../item-list";
import SwapiService from "./../../services/swapi-service";
import Spiner from "./../spiner";

import ErrorIndicator from "./../errorIndicator";

class StarshipsPage extends Component {
  swapiSerice = new SwapiService();
  state = {
    selectedPerson: 5,
    hasError: false
  };

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
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
            getData={this.swapiSerice.getAllStarships}
          />
        </div>
        <div className="col-lg-8 col-md-7 colsm-12"></div>
      </div>
    );
  }
}

export default StarshipsPage;
