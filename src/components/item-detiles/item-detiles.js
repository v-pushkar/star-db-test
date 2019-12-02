import React, { Component } from "react";
import "./item-detiles.scss";

import Spiner from "./../spiner";

const Records = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {label}:<span>{item[field]}</span>
    </li>
  );
};

export { Records };

class ItemDetiles extends Component {
  state = {
    item: null,
    loading: false,
    image: null
  };
  componentDidMount() {
    this.updateitem();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImgUrl !== prevProps.getImgUrl
    ) {
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
    if (!this.state.item && !this.state.loading) {
      return (
        <div className="item-list-wrapp">
          <div className="alert alert-primary" role="alert">
  Select item, please!
</div>
        </div>
        
      );
    } else if (this.state.loading) {
      return <Spiner />;
    }
    const { loading, item, image } = this.state;
    const spiner = loading ? <Spiner /> : null;
    const itemCard = !loading ? (
      <div className="row">
        <div className="col-5">
          <div className="img-wrapp">
            <img src={image} alt="item_el" />
          </div>
        </div>
        <div className="col-7">
          <h3>{item.name}</h3>
          <ul className="list-group">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
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
