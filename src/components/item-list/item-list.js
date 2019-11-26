import React, { Component } from "react";
import "./item-list.scss";
import SwapiService from "./../../services/swapi-service";
import Spiner from "./../spiner";

export default class ItemList extends Component {
  swapiSerice = new SwapiService();
  state = {
    itemsList: null,
    loading: true
  };

  componentDidMount() {
    const { getData } = this.props;   
    getData().then(itemsList => {
      this.setState({
        itemsList,
        loading: false
      });
    });
  }

  renderItems = arr => {
    // console.log("Arr", arr);
    return arr.map(person => {
      return (
        <li
          key={person.id}
          className="list-group-item list-group-item-action"
          onClick={() => this.props.onItemSelected(person.id)}
        >
          {person.name}
        </li>
      );
    });
  };
  render() {
    const { itemsList, loading } = this.state;
    if (loading) {
      return <Spiner />;
    }

    const items = this.renderItems(itemsList);

    return (
      <div className="item-list-wrapp">
        <div className="list-group">{items}</div>
      </div>
    );
  }
}
