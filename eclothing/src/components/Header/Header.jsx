import React, {useState, useEffect, useRef} from 'react';
import { SearchInput, Container, MenuButton, LeftSideContainer, LogoutIcon, MenuPanel, Text, MenuItem } from './styles';
import MenuIcon from '../../images/hamburguer_menu.svg';
import Logout from '../../images/logout.svg';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
    const [visibility, setVisibility] = useState(false);
    const [isLoginPage, setIsLoginPage] = useState(false)
    const ref = useRef();

    const handleOutsideClick = (e) => {
        if(visibility && ref.current && !ref.current.contains(e.target)) {
            setVisibility(false);
        }
    }

    const location = useLocation();
    

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        if (location.pathname === '/')
            setIsLoginPage(true);
        else
            setIsLoginPage(false);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        };
    }, [handleOutsideClick, location])

    return (
        <Container shouldDisplay={isLoginPage}>
            <MenuPanel visibility={visibility} ref={ref}>
                <MenuItem>
                    Admin
                </MenuItem>
            </MenuPanel>
            <LeftSideContainer shouldDisplay={isLoginPage}>
                <MenuButton imgUrl={MenuIcon} onClick={() => setVisibility(!visibility)}/>
                <SearchInput/>
            </LeftSideContainer>
            <Text shouldDisplay={isLoginPage}>E-clothing</Text>
            <Link to={'/'}>
                <LogoutIcon imgUrl={Logout} shouldDisplay={isLoginPage}/>
            </Link>
            
        </Container>
    )
}
    

export default Header;