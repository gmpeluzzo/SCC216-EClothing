import React, { useContext } from "react";
import ShippingForm from "./shipping";
import PaymentForm from "./payment";
import styled from "styled-components";
import CartSummary from "./cart";
import ShopContext from "../Context/shop-context";

const FinishPurchase = styled.button`
  color: white;
  background-color: #13ce66;
  font-weight: 600;
  position: fixed;
  bottom: 12%;
  right: 7.5%;
  width: 15%;
  height: 7.5%;
  font-size: 20px;
  border: none;
  border-radius: 4px;
`;

const CheckoutPage = () => {
  const { products, cart, addProductToCart, removeProductFromCart } = useContext(
    ShopContext
  );

  const completePurchase = () => {
      fetch(`http://localhost:9000/products/purchase`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(cart)  
      })
        .then(response => response.json())
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
  }


  return (
    <div className="checkoutEssentials" style={{ overflow: "auto", display: "flex", height: "calc(100vh - 85px)" }}>
      <CartSummary
        products={products}
        cart={cart}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
      />
      <PaymentForm />
      <ShippingForm />
      <FinishPurchase onClick={completePurchase}>
        Confirm Purchase
      </FinishPurchase>
    </div>
  );
};

export default CheckoutPage;