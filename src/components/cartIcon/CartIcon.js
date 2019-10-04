import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopbag.svg";

import "./CartIcon.scss";

const CartIcon = ({ ontoggleCartHidden }) => (
  <div className="cart-icon" onClick={ontoggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">4</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  ontoggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
