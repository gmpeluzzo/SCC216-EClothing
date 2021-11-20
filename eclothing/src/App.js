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

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <LoginForm/>},
    {path: '/carousel', element: <CarousselPage/>},
  ]);

  return routes;
}

const AppContainer = styled.div`
  display: block;
  overflow: hidden;
`;



function App() {
  return (
    <AppContainer>
      <Header/>
      <AppRoutes/>
    </AppContainer>
    
  );
}

export default App;
