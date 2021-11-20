import styled from 'styled-components';

export const Container = styled.div`
    background-color: #13CE66;
    display: flex;
    width: 100%;
    align-items: center;
    height: 85px;
    padding: 0 25px;
    outline: 0;
    position: relative;
    border: none;
    justify-content: space-between;
    box-sizing: border-box;
`

export const LeftSideContainer = styled.div`
    height: 100%
    width: auto;
    display: flex;
    align-items: center;
`;

export const LogoutIcon = styled.div`
    width: 48px;
    height: 48px;
    background-image: url(${props => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
`;

export const MenuButton = styled.div`
    width: 48px;
    height: 48px;
    background-image: url(${props => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 25px 0 0;
`

export const SearchInput = styled.input`
    width: 343px;
    height: 58px;
    background-color: white;
    border-radius: 88px;
    display: flex;
    align-items: center;
    outline: 0;
    bordeR: none;
    justify-content: space-between;
`

export const MenuPanel = styled.div`
    Height: 100vh;
    z-index: 100;
    left: ${props => props.visibility === true ? '0px' : '-300px'};
    position: absolute;
    background: white;
    Width: 300px;
    border: 1px solid black;
    top: 0;
    transition: all 0.5s ease-out;
`;