import React from "react";
import { addItem } from "../../redux/cart/cartActions";
import { connect } from "react-redux";
import Button from "../Button/Button";

import "./collection.scss";

const CollectionItem = ({ item, onAddItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name} </span>
        <span className="price"> {price} </span>
      </div>
      <Button onClick={() => onAddItem(item)} inverted>
        {" "}
        Add to Cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onAddItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
