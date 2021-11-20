import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 20%;
height: 407px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #8492A6;
color: #47525E;
position: absolute;
top: 15%;
right: 5%;
`

const Form = styled.form`
width: 80%;
`

const TextField = styled.input`
height: 30px;
width: 96%;
font-size: 16px;
`

const Label = styled.label`
font-size: 21px;
font-weight: 600;
`

const Submit = styled.input`
height: 36px;
color: white;
background-color: #13CE66;
border: none;
border-radius: 4px;
margin: 0 20px 0 0;
align-self: center;
font-size: 16px;
width:98.5%;
`

const Title = styled.h2`
text-align:center;
`

const ShippingForm = () => {
    return (
        <Wrapper>
            <Title>Shipping</Title>
            <Form>
                <Label>ZIP Code:</Label><br/>
                <TextField/><br/><br/><br/>
                <Label>Address:</Label><br/>
                <TextField/><br/><br/><br/>
                <Label>Shipping Fee: $6.99</Label><br/><br/><br/>
                <Submit type="submit" value="Submit Shipping Info"/>
            </Form>
        </Wrapper>
    );
}

export default ShippingForm