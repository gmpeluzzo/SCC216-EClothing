import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    justify-content: center;
    height: calc(100vh - 85px);
    align-items: center;
`;

export const Text = styled.div`
    font-family: Roboto;
    font-size: 32px;
    position: absolute;
    top: 0;
    color: #969FAA;
    margin: 0 auto;
`;