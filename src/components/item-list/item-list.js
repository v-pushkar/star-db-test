import React, { Component } from "react";
import "./item-list.scss";
import SwapiService from "./../../services/swapi-service";
import Spiner from "./../spiner";

export default class ItemList extends Component {
  swapiSerice = new SwapiService();
  state = {
    peopleList: null,
    loading: true
  };

  componentDidMount() {
    this.swapiSerice.getAllPeople().then(peopleList => {
      this.setState({
        peopleList,
        loading: false
      });
    });
  }
  personOnItemSelect(id) {
    console.log("Item clicked", id);
  }
  renderItems = arr => {
    // console.log("Arr", arr);
    return arr.map(person => {
      return (
        <li
          key={person.id}
          className="list-group-item list-group-item-action"
          onClick={() => this.personOnItemSelect(person.id)}
        >
          {person.name}
        </li>
      );
    });
  };
  render() {
    const { peopleList, loading } = this.state;
    if (loading) {
      return <Spiner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <div className="item-list-wrapp">
        <div className="list-group">{items}</div>
      </div>
    );
  }
}
