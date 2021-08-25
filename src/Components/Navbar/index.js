import React from 'react'
import { NavLink , Nav, NavBtnLink, Bars, NavMenu, NavBtn} from '/NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign-in</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    );
};

export default Navbar;
