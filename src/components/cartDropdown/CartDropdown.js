import React from "react";

import Button from "../Button/Button";

import "./cartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
