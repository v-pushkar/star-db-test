import React, { Component } from "react";
import Header from "./../header";
import Randomplanet from "./../random-planet";
import Itemlist from "./../item-list";
import Planetdetiles from "./../planet-detiles";
import Persondetiles from "./../person-detiles";
import Spaceshipdetiles from "./../starship-detiles";

class App extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Randomplanet />
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <Itemlist onItemSelected={this.onPersonSelected} />
            </div>
            <div className="col-lg-8 col-md-7 colsm-12">
              <Planetdetiles
                personId={this.state.selectedPerson}
              ></Planetdetiles>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
