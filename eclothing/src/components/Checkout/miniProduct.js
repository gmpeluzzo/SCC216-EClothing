import React from "react";
import styled from "styled-components";
import ModaInfaltil from "../LoginContainer/modaInfantil.jpeg"

const ProductWrapper = styled.div`
width: 90%;
height: 15%;
flex-direction: row;
position: absolute;
display: flex;
left: 5%;
justify-content: space-between;
align-items: center;
color: white;
background-color: #13CE66;
border-radius: 4px;
`

const Label = styled.label`
font-size: 21px;
font-weight: 600;
padding: 0 20px 0 20px;
`

const ControlQuantity = styled.div`
justify-content:center;
`

const QuantityButtons = styled.button`
background-color: white;
border: none;
color: black;
width: 30px;
height: 30px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 18px;
margin: 10px;
`

const Image = styled.img`
    height: 90%;
    width: auto;
    margin: 10px;
    border-radius: 4px;
`

const MiniProduct = (props) => {
    const { imgsrc, name, price, quantity } = props;
    return (
        <ProductWrapper>
            <Image src={ModaInfaltil}/>
            <Label>{name}</Label>
            <Label>{'$' + price}</Label>
            <ControlQuantity>
                <QuantityButtons>-</QuantityButtons>
                <Label>{quantity}</Label>
                <QuantityButtons>+</QuantityButtons>
            </ControlQuantity>
        </ProductWrapper>
    )
};

export default MiniProduct;