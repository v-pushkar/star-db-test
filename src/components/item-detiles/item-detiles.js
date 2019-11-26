import React, { Component } from "react";
import "./item-detiles.scss";
import SwapiService from "./../../services/swapi-service";
import Spiner from "./../spiner";
import ItemCard from "./_ItemCard";

class ItemDetiles extends Component {
  swapiSerwice = new SwapiService();
  state = {
    item: null,
    loading: false,
    image: null
  };
  componentDidMount() {
    this.updateitem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateitem();
      this.setState({
        loading: true
      });
    }
  }

  updateitem() {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then(item => {
      this.setState({ item, loading: false, image: getImgUrl(item) });
    });
  }
  render() {
    if (!this.state.item) {
      return (
        <div className="item-det-wrapp">
          <span>Select a item from itemlist</span>
        </div>
      );
    }
    const { loading, item, image } = this.state;
    const spiner = loading ? <Spiner /> : null;
    const itemCard = !loading ? (
      <ItemCard person={this.state.item} img={image} />
    ) : null;

    return (
      <div className="item-det-wrapp">
        {spiner}
        {itemCard}
      </div>
    );
  }
}

export default ItemDetiles;
