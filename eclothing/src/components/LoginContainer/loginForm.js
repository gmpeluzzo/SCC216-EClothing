import React from "react";
import background from "./watermark.jpg"
import styled from "styled-components"

const Form = styled.form`
    justify-content: center;
    align-items: center;
    width: 450px;
`;

const Wrapper = styled.div`
    background-image:url(${background});
    background-position: center;
    background-repeat: no-repeat;
    height: 800px;
    background-size: 800px 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextField = styled.input`
    width: 100%;
    padding: 17px;
    border: 1px solid #ccc;
    border-radius: 0px;
    box-sizing: border-box;
`;

const Button = styled.input`
    background-color: #13CE66;
    color: white;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    float: center;
    font-size: 40px;
`;

const Label = styled.h2`
    font-weight: normal;
    line-height: 1px;
`;

const LoginForm = () => {

    return (
        <Wrapper className="formWrapper">
            <Form>
                <Label>Login</Label><br/>
                <TextField type="text" className="login"/><br/><br/>
                <Label>Password</Label><br/>
                <TextField type="password" className="password"/> <br/><br/><br/>
                <Button type="submit" value="Sign in" class="button"/>
            </Form>
        </Wrapper>
    )
}

export default LoginForm