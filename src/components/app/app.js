import React, { Component } from "react";
import Header from "./../header";
import Randomplanet from "./../random-planet";
import ErrorIndicator from "./../errorIndicator";
import ErrorBoundry from "./../error-boundry";
import SwapiService from "./../../services/swapi-service";
import DummySwapiService from "./../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "./../swapi-servise-context";
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  LoginPage,
  SecretPage
} from "./../pages";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { StarshippDetails } from "../sw-components";

class App extends Component {
  state = {
    selectedPerson: null,
    hasError: false,
    swapiSerwice: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
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
  onServiceChange = () => {
    this.setState(({ swapiSerwice }) => {
      const Service =
        swapiSerwice instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("onServiceChange swiched to:", Service.name);
      return {
        swapiSerwice: new Service()
      };
    });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiSerwice}>
          <Router>
            <Header onServiceChange={this.onServiceChange} />

            <div className="container">
              <Randomplanet />

              <Switch>
                <Route
                  path="/"
                  render={() => <h2>Wellcom to star DB</h2>}
                  exact
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetPage} />
                <Route path="/starships" component={StarshipPage} exact />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    console.log("match", match.params.id);
                    return <StarshippDetails itemId={match.params.id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={this.state.isLoggedIn}
                      onLogin={this.onLogin}
                    />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={this.state.isLoggedIn} />
                  )}
                />
                <Route
                  render={() => (
                    <div className="jumbotron">
                      <h3>404. Page not found</h3>
                    </div>
                  )}
                />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
