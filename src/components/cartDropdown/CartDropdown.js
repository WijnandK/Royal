import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import Button from "../Button/Button";
import CartItem from "../cartItem/CartItem";
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
