import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopbag.svg";
import { selectCartItemCount } from "../../redux/cart/cartSelectors";
import "./CartIcon.scss";

const CartIcon = ({ ontoggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={ontoggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />

    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  ontoggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);