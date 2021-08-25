import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"

export const nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
paddig: o.5rem calc((100vw - 1000px)/2);
z-index: 10;
`
export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;

 &.active{
     color: #15cdfc;
 }
`

export const Bars = styled(FaBars)`
 display: none;
 color: #fff;

 @media screen and (max-width: 760px){
     display: block;
     position: absalute;
     top: 0;
     right: 0;
     transform: translate(-100, 75%);
     font-size: 1.8rem;
     cursor: pointer;
 }
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24x;

 @media screen and (max-width: 760px){
     display: none;
 }
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 760px){
    display: none;
}
`
export const NavBtnLink = styled(link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transaction: all 0.2s ease-in-out;
text-decoration: none;
 &hover{
     transition: all 0.2s ease-in-out;
     background: #fff;
     color: #01006;
 }
`