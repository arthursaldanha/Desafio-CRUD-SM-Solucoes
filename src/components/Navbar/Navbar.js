import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';

// Styles
import * as S from './Styled.js';

// Content
import { routes } from './content';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClickedMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const onCLoseMenu = () => {
    if (window.innerWidth <= 600 && menuVisible === true) {
      window.scrollTo(0, 0);
      handleClickedMenu();
    }
  };

  window.addEventListener('resize', function () {
    if (window.innerWidth > 600) setMenuVisible(false);
  });

  const Navbar = menuVisible ? S.NavbarMenuActive : S.NavbarMenu;
  const UnorderedList = menuVisible
    ? S.MenuUnorderedListActive
    : S.MenuUnorderedList;
  const NavbarLink = menuVisible ? S.NavbarLinkActive : S.NavbarLink;

  return (
    <S.Navbar>
      <S.ContainerNavbar>
        <S.NavbarLogo>
          <S.NavLink to="/">
            <S.Logo src={logo} alt="logo" />
          </S.NavLink>
        </S.NavbarLogo>
        <S.MenuIcon onClick={handleClickedMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </S.MenuIcon>
        <Navbar>
          <S.MenuList>
            {routes.map(({ id, text, path }) => {
              return (
                <UnorderedList key={id}>
                  <NavbarLink to={path} onClick={onCLoseMenu}>
                    {console.log(menuVisible)}
                    {text}
                  </NavbarLink>
                </UnorderedList>
              );
            })}
          </S.MenuList>
        </Navbar>
      </S.ContainerNavbar>
    </S.Navbar>
  );
};

export default Navbar;
