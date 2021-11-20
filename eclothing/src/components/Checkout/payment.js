import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 25%;
height: 25%;
margin: 0 0 0 20px;
border: 1px solid #8492A6;
display: flex;
align-items: center;
padding: 1% 1% 0 0;
flex-direction: column;
position: fixed;
bottom: 5%;
left: 5%;
`

const Form = styled.form`
display:flex;
justify-content: space-between;
width: 90%;
font-size: 16px;
height: 60%;
`

const Method = styled.select`
align-self: center;
font-size: 16px;
display: flex;
flex-direction: column;
border: 1px solid #8492A6;
width: 100%;
height: 36px;
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 7px;
`

const TextField = styled.input`
height: 30px;
width: 96%;
font-size: 16px;
`

const TextFieldSmall = styled.input`
width: 30%;
font-size: 16px;
height: 30px;
`

const TextFieldMedium = styled.input`
width: 50%;
height: 30px;
font-size: 16px;
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
width:100%;
`

const SpacedDiv = styled.div`
display: flex;
justify-content: space-between;
`

const Title = styled.h2`
text-align:center;
height: 20%;
`

const InLine = styled.div`
width:45%;
height: 100%;
`

const PaymentForm = () => {

    return (
    <Wrapper>
        <Title>Payment</Title>
        <Form>
            <InLine>
                <Method placeholder="select a method" defaultValue="initialValue">
                    <option value="initialValue" disabled hidden>Make a Selection</option>
                    <option value="debit">Debit Card</option>
                    <option value="credit">Credit Card</option>
                </Method><br/>
                <TextField type="text" placeholder="Card Number" required/>
            </InLine>
            <InLine>
                <SpacedDiv>
                    <TextFieldMedium type="text" placeholder="Exp. Date" required/>
                    <TextFieldSmall type="number" placeholder="CVV" required/>
                </SpacedDiv><br/>
                <Submit type="submit" value="Submit Payment Info"/>
            </InLine>
        </Form>
    </Wrapper>
    );
}

export default PaymentForm;