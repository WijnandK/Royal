import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemCount } from "../../redux/cart/cartSelectors";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from "./CartIcon.styles";

const CartIcon = ({ ontoggleCartHidden, itemCount }) => (
  <CartContainer onClick={ontoggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
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
