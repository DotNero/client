import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return(
        <>
        <Nav>
            <Bars />

                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        О проекте
                    </NavLink>
             
             
                    <NavLink to ='/for-student' activeStyle>
                        Студенту
                    </NavLink>
             
             
                    <NavLink to='/for-company'>
                        Работодателю
                    </NavLink>
             
             
                    <NavLink to='/help' activeStyle>
                        Помощь
                    </NavLink>
               
                </NavMenu>
             
                    <NavBtn>
                        <NavBtnLink to = '/signin'> Вход </NavBtnLink>
                    </NavBtn>
             
            
                    <NavBtn>
                        <NavBtnLink to = '/signup'> Присоединиться к бирже </NavBtnLink>
                    </NavBtn>
                
            
            
        </Nav>
        </>
    );
};

export default Navbar;