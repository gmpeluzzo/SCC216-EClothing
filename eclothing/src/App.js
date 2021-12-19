import logo from './logo.svg';
import React, { useContext, useMemo } from 'react';
import ShowContext from './components/Context/shop-context'
import Header from './components/Header/Header';
import styled from 'styled-components';
import { useRoutes } from "react-router-dom";
import CarousselPage from './components/CarousselPage';
import LoginForm from './components/LoginContainer';
import ProductDetails from './components/ProductDetails';
import CheckoutPage from './components/Checkout';
import product from './products';
import GlobalState from './components/Context/GlobalState';
import AdminPage from './components/AdminPage';

const AppRoutes = ({products}) => {
  const productsArray = useMemo(() => Object.values(products), [products])
  console.log(productsArray, 'approutes')
  let routes = useRoutes([
    {path: '/', element: <LoginForm/>},
    {path: '/carousel', element: <CarousselPage/>},
    {path: '/product/61bf99cb1aafb53c0c69a5b1', element: <ProductDetails productId={"61bf99cb1aafb53c0c69a5b1"}/>},
    {path: '/product/61bf9a671aafb53c0c69a5b4', element: <ProductDetails productId={"61bf9a671aafb53c0c69a5b4"}/>},
    {path: '/product/61bf9c201aafb53c0c69a5b7', element: <ProductDetails productId={"61bf9c201aafb53c0c69a5b7"}/>},
    {path: '/product/61bf9c5b1aafb53c0c69a5ba', element: <ProductDetails productId={"61bf9c5b1aafb53c0c69a5ba"}/>},
    {path: '/product/61bf9cdc1aafb53c0c69a5bd', element: <ProductDetails productId={"61bf9cdc1aafb53c0c69a5bd"}/>},
    {path: '/product/checkout', element: <CheckoutPage/>},
    {path: '/admin', element: <AdminPage/>}
  ]);

  return routes;
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  & >  div:nth-child(2) {
    justify-content: center;
  }

`;

function App() {
  const {products} = useContext(ShowContext);
  console.log(products, 'testt')

  return (
    <AppContainer>
      <Header/>
      <GlobalState>
        <AppRoutes products={products}/>
      </GlobalState>
    </AppContainer>
    
  );
}

export default App;
