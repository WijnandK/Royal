import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_DXeKYgO17Q574HxF90P5VpZ000OHg4rCxD";

  const onToken = token => {
    console.log(token);
    alert("succes");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="RoyalStore"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
