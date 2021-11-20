import React from "react";
import background from "./watermark.jpg"
import styled from "styled-components"

const Form = styled.form`
    opacity: 1;
    position: absolute;
    z-index: 2;
    margin: 0 0 50px 0;
`;

const Wrapper = styled.div`
    background-color: white;
    height: calc(100vh - 85px);
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const Image = styled.img`
    position: absolute;
    z-index: 1;
    width: 800px;
    height: 775px;
    opacity: 0.27;
`

const TextField = styled.input`
    border: 1px solid #8492A6;
    width: 452px;
    height: 50px;
`;

const Button = styled.input`
    width: 456px;
    border: none;
    background-color: #13CE66;
    font-size: 39px;
    color: white;
    height: 70px;
`;

const Label = styled.h2`
    font-weight: normal;
`;

const LoginForm = () => {

    return (
        <Wrapper className="formWrapper">
            <Form>
                <Label>Login</Label>
                <TextField type="text" className="login"/><br/>
                <Label>Password</Label>
                <TextField type="password" className="password"/> <br/><br/><br/>
                <Button type="submit" value="Sign in" class="button"/>
            </Form>
            <Image src={background}/>
        </Wrapper>
    )
}

export default LoginForm