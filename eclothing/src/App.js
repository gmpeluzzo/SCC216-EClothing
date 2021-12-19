import logo from './logo.svg';
import Header from './components/Header/Header';
import styled from 'styled-components';
import { 
  Routes,
  Route,
  Link,
  useRoutes} from "react-router-dom";
import CarousselPage from './components/CarousselPage';
import LoginForm from './components/LoginContainer';
import ProductDetails from './components/ProductDetails';
import CheckoutPage from './components/Checkout';
import product from './products';
import GlobalState from './components/Context/GlobalState';
import AdminPage from './components/AdminPage';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <LoginForm/>},
    {path: '/carousel', element: <CarousselPage/>},
    {path: '/product/1', element: <ProductDetails product={product[1]}/>},
    {path: '/product/2', element: <ProductDetails product={product[2]}/>},
    {path: '/product/3', element: <ProductDetails product={product[4]}/>},
    {path: '/product/4', element: <ProductDetails product={product[6]}/>},
    {path: '/product/5', element: <ProductDetails product={product[7]}/>},
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
  return (
    <AppContainer>
      <Header/>
      <GlobalState>
        <AppRoutes/>
      </GlobalState>
    </AppContainer>
    
  );
}

export default App;
