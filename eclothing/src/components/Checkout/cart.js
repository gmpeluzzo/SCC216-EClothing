import React from "react";
import styled from "styled-components";
import MiniProduct from "./miniProduct";

const SummaryWrapper = styled.div`
width: 60%;
height: 45%;
margin: 0 0 0 20px;
border: 1px solid #8492A6;
padding: 30px 0 0 0;
position: fixed;
top: 15%;
left: 5%;
overflow:auto;
`

const CartSummary = ({cart, addProductToCart, removeProductFromCart}) => {

    const removeFromCartHandler = (id) => {
        removeProductFromCart(id)
    }

    const addToCartHandler = (id) => {
        addProductToCart({ id })
    }

    return (
        <SummaryWrapper>
            {cart.map(product => <MiniProduct product={product} addToCartHandler={addToCartHandler} removeFromCartHandler={removeFromCartHandler}/>)}
        </SummaryWrapper>
    );
}

export default CartSummary;