import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  align-items: center;
  background-color: #1B232A;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 0;
  min-height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const ContainerNavbar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1000px;
  min-height: inherit;
  position: relative;
  width: 100%;
`;

export const NavbarLogo = styled.div``;
export const NavLink = styled(Link)``;

export const Logo = styled.img`
  filter: invert(100%) sepia(99%) saturate(16%) hue-rotate(319deg)
    brightness(103%) contrast(100%);
  padding: 10px 20px;
`;

export const MenuIcon = styled.div`
  color: #fff;
  display: none;

  @media only screen and (max-width: 600px) {
    color: #fff;
    display: block;
    position: absolute;
    right: 20px;
  }

  svg {
    cursor: pointer;
    height: 30px;
    width: 30px;
  }
`;

export const NavbarMenu = styled.nav`
  @media only screen and (max-width: 600px) {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 80px;
    width: 100%;
  }
`;

export const NavbarMenuActive = styled(NavbarMenu)`
  background-color: #1B232A;
  display: none;
  height: calc(100vh - 80px);
  left: 0;
  top: 80px;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
  }
`;

export const MenuUnorderedList = styled.li``;

export const MenuUnorderedListActive = styled(MenuUnorderedList)`
  @media only screen and (max-width: 600px) {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const NavbarLinkActive = styled(NavLink)`
  border-bottom: 3px solid #1B232A;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  padding: 30px 35px;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    border-bottom: 3px solid #5ED5A8;
    color: #b5b9c2;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const NavbarLink = styled(NavbarLinkActive)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
