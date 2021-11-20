import styled from 'styled-components';

export const simpleStyles = {
    nameH2: {
        "fontSize": 40,
        "color": "#47525E",
        "margin": "0 0 18px 0"
      },
      priceParagraph: {
        "fontSize": 28,
        "color": "#47525E",
        "margin": "0 0 28px 0"
      },
      secondParagraph: {
        "fontSize": 24,
        "color": "#47525E",
        "margin": "0 0 10px 0"
      },
      thirdParagraph: {
        "fontSize": 18,
        "color": "#47525E",
        "margin": "0 0 36px 0"      
      },
      productImg: {
        "width": 458,
        "height": 416,
      },
      sizeButton: {
        "width": 52,
        "height": 20,
        "textAlign": "center",
        "border": "1px solid #47525E",
      }
}

export const Container = styled.div`
    margin: 0;
    padding: 0;
    font-family: Roboto;
    background-color: white;
    height: calc(100vh - 85px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Product = styled.div`
    display: flex
`;

export const ProductDetailsDiv = styled.div`
    width: 400px;
    height: inherit;
    display: flex;
    flex-direction: column;
`;

export const AddToCartButton = styled.div`
    width: 193px;
    height: 50px;
    border: none;
    font-size: 18px;
    border-radius: 4px;
    color: white;
    background-color: #13CE66;
`;

export const Sizes = styled.div`
    display: flex;
    width: auto;
    border-radius: 4px;
    border: 1px solid #47525E;
    margin: 0 0 50px 0;
    width: 160px;
`;

