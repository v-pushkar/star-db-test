import React, { Component } from "react";
import Header from "./../header";
import Randomplanet from "./../random-planet";
import Itemlist from "./../item-list";
import Planetdetiles from "./../planet-detiles";
import Persondetiles from "./../person-detiles";
import Spaceshipdetiles from "./../starship-detiles";
import ErrorIndicator from "./../errorIndicator";

class App extends Component {
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
              <Persondetiles
                personId={this.state.selectedPerson}
              ></Persondetiles>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
