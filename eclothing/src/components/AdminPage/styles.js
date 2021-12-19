import styled from 'styled-components';

export const ManagementWrapper = styled.div`
width: 65%;
height: 80%;
margin: 0 0 0 20px;
border: 2px solid #8492A6;
display: flex;
align-items: center;
flex-direction: column;
position: fixed;
bottom: 5%;
right: 5%;
`

export const StockControl = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 75%;
width: 100%;
overflow: auto;
`

export const ProdName = styled.label`
width: 100%;
font-size: 21px;
`

export const MediumText = styled.input`
width: 60%;
font-size: 16px;
height: 40px;
padding: 0 20px 0 20px;
margin: 3%;
border-radius: 4px;
`

export const BigText = styled.input`
width: 95%;
font-size: 16px;
height: 40px;
border-radius: 4px;
`

export const SmallText = styled.input`
width: 25%;
font-size: 16px;
height: 40px;
padding: 0 20px 0 20px;
margin: 3%;
border-radius: 4px;
`

export const ProdImg = styled.img`
height: 60px;
width: 60px;
width: auto;
margin: 3%;
`

export const ProdUpdate = styled.button`
font-size: 14px;
font-weight: bold;
width: 20%;
color: white;
padding: 0 1% 0 1%;
background-color:#13CE66;
height: 45px;
margin: 0 0 0 3%;
border-radius: 4px;
border:none;
`

export const ProdForm = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
font-size: 16px;
height: 90px;
left: 5%;
flex-direction: row;
align-items: center;
`

export const AddButton = styled.input`
    color:white;
    background-color:#13CE66;
    font-size: 20px;
    font-weight: bold;
    padding: 0 1.5% 0 1.5%;
    width: 20%;
    height: 45px;
    margin: 0 0 0 3%;
    border:none;
    border-radius: 4px;
`

export const SelectImage = styled.input`
    color: white;
    background-color: #13CE66;
    font-size: 16px;
    font-weight: bold;
    width: 60px;
    height: 45px;
    margin: 3%;
    border:none;
    border-radius: 4px;
`

export const ManagementHeader = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
font-size: 21px;
font-weight: bold;
flex-direction: row;
align-items: center;
`

export const AdminButton = styled.button`
    color:white;
    background-color:#13CE66;
    font-weight: 600;
    position:fixed;
    left:5%;
    width:16%;
    height:7.5%;
    font-size: 20px;
    border:none;
    border-radius: 4px;
`

export const AdminInfo = styled.div`
width: 15%;
height: 50%;
border: 2px solid #8492A6;
display: flex;
flex-direction: column;
position: fixed;
bottom: 5%;
left: 5%;
`

export const InfoLabel = styled.p`
font-weight: 400;
padding: 0 0 0 20px;
font-size: 21px;
color: gray;
`

export const InfoContent = styled.p`
text-align: center;
font-size: 21px;
`

export const InfoDiv = styled.div`
line-height: 90%;
height: 20%;
margin: 5% 0 0 0;
`