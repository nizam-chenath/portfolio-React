import React from 'react';
import { Link } from 'react-router-dom';
import {FaBars,  FaTimes} from 'react-icons/fa';
import MenuItems from './MenuItems';
import "./Navbar.css";

const Navbar =()=>{
     const [click, setClick] = React.useState()

     const clickHandler =()=>{
         setClick(!click);
     };
    return (
    <nav className="nav">
        <div className="nav-center container">
            <h1 className="logo">Galvanize</h1>

            <ul className={click ? "nav-list active" : "nav-list"}>
                 {MenuItems.map(({id,title,cName})=>
                     <li key={id} className="nav-item">
                         <Link className={cName}>{title}</Link>
                     </li>
                 )}   
            </ul> 
            <div onClick={clickHandler} className="hamburger">
                {click?<FaTimes/>:<FaBars/>}
            </div>
        </div>
    </nav>
    )};

export default Navbar;