import React, { Component } from "react";
import "./person-detiles.scss";
import SwapiService from "./../../services/swapi-service";
import Spiner from "./../spiner";
import PersonCard from "./_PersonCard";

export default class PersonDetiles extends Component {
  swapiSerwice = new SwapiService();
  state = {
    person: null,
    loading: false
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
      this.setState({
        loading: true
      });
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiSerwice.getPerson(personId).then(person => {
      // console.log("person", person);
      this.setState({ person, loading: false });
    });
  }
  render() {
    if (!this.state.person) {
      return (
        <div className="person-det-wrapp">
          <span>Select a person from personlist</span>
        </div>
      );
    }
    const {
      loading,
      person: { name, id, gender, hair_color, eye_color, birthYear }
    } = this.state;
    const spiner = loading ? <Spiner /> : null;
    const personCard = !loading ? (
      <PersonCard person={this.state.person} />
    ) : null;

    return (
      <div className="person-det-wrapp">
        {spiner}
        {personCard}
      </div>
    );
  }
}
