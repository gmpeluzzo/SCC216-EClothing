import React, { useState } from "react";
import ShippingForm from "./shipping";
import PaymentForm from "./payment";
import styled from "styled-components";
import CartSummary from "./cart";

const FinishPurchase = styled.button`
    color:white;
    background-color:#13CE66;
    font-weight: 600;
    position:fixed;
    bottom:12%;
    right:7.5%;
    width:15%;
    height:7.5%;
    font-size: 20px;
    border:none;
    border-radius: 4px;
`

const CheckoutPage = () => {

    const [cart, setCartState] = useState(JSON.parse(localStorage.getItem('cart')));

    const setCart = (cart) => {
        setCartState(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <div className="checkoutEssentials" style={{overflow:'auto'}}>
            <CartSummary cart={cart} setCart={setCart}/>
            <PaymentForm/>
            <ShippingForm/>
            <FinishPurchase>Confirm Purchase</FinishPurchase>
        </div>
    );
}

export default CheckoutPage;