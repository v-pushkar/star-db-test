import React, { Component } from "react";
import "./random-planet.scss";
import PropTypes from "prop-types";
import SwapiService from "./../../services/swapi-service";
import Spiner from "./../spiner";
import PlanetView from "./_planetVieu";
import ErrorIndicator from "./../errorIndicator";

class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 20000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiSwervice = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanetLoadet = planet => {
    this.setState({ planet, loading: false });
  };
  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    // const id = 200;
    this.swapiSwervice
      .getPlanet(id)
      .then(this.onPlanetLoadet)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const spiner = loading ? <Spiner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    const errormess = error ? <ErrorIndicator /> : null;
    return (
      <div className="random-planet-wrapp text-center">
        {spiner}
        {errormess}
        {content}
      </div>
    );
  }
}

export default RandomPlanet;
