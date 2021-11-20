import React, {useState, useEffect, useRef} from 'react';
import { SearchInput, Container, MenuButton, LeftSideContainer, LogoutIcon, MenuPanel } from './styles';
import MenuIcon from '../../images/hamburguer_menu.svg';
import Logout from '../../images/logout.svg';

const Header = () => {
    const [visibility, setVisibility] = useState(false);

    const ref = useRef();

    const handleOutsideClick = (e) => {
        if(visibility && ref.current && !ref.current.contains(e.target)) {
            setVisibility(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        };
    }, [handleOutsideClick])

    return (
        <Container>
            <MenuPanel visibility={visibility} ref={ref}/>
            <LeftSideContainer  >
                <MenuButton imgUrl={MenuIcon} onClick={() => setVisibility(!visibility)}/>
                <SearchInput/>
            </LeftSideContainer>
            <LogoutIcon imgUrl={Logout}/>
        </Container>
    )
}
    

export default Header;