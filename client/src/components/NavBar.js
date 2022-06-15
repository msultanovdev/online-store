import React, { useContext } from 'react';
import { Context } from '..';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="primary" variant="primary">
            <Container>
                <NavLink style={{color: "white", fontWeight: "700", fontSize: "22px", textTransform: "uppercase"}} to={SHOP_ROUTE}>Купить товар</NavLink>
                { user.isAuth ? 
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button onClick={() => navigate(ADMIN_ROUTE)} style={{marginRight: '15px'}} variant='outline-light'>Админ панель</Button>
                            <Button onClick={() => logOut()} variant='outline-light'>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;