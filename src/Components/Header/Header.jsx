import React from "react";
import "./Header.css";
import Logo from "../Logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
    return (
        <>
            <MainHeader>
                <NavLink to={"/"}>
                    <img src="img/logo.png" alt="logo"/>
                </NavLink>
                <Nav />
            </MainHeader>
        </>
    )
}
const MainHeader = styled.section`
    padding:0 4.8rem;
    height:8rem;
    background-color:${({ theme }) => theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;

    .logo{
        height:5rem
    }
`;
export default Header;