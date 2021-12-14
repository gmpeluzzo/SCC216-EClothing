import React, { useContext } from "react";
import ShippingForm from "./shipping";
import PaymentForm from "./payment";
import styled from "styled-components";
import CartSummary from "./cart";
import ShopContext from "../Context/shop-context";

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
    const { cart, addProductToCart, removeProductFromCart } = useContext(ShopContext);

    return (
        <div className="checkoutEssentials" style={{overflow:'auto'}}>
            <CartSummary cart={cart} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart}/>
            <PaymentForm/>
            <ShippingForm/>
            <FinishPurchase>Confirm Purchase</FinishPurchase>
        </div>
    );
}

export default CheckoutPage;