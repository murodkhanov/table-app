import React, { useState } from "react";
import {
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavBarInnerContainer,
  NavBarExtendedContainer,
  NavBarLinkContainer,
  NavBarLink,
  Logo,
  OpenLinkButton,
  Menu,
  MenuClose,
  NavBarLinkExtended,
} from "../Sytles/NavBarStyle";

import LogoImg from "../../../src/assets/security.png";
import MenuButton from "../../../src/assets/menu.png";
import MenuButtonClose from "../../../src/assets/close.png";

const NavBar = () => {
  const [ExtendNavBar, setExtendNavBar] = useState(false);

  return (
    <>
      <NavBarContainer ExtendNavBar={ExtendNavBar}>
        <NavBarInnerContainer>
          <LeftContainer>
            <NavBarLinkContainer>
              <NavBarLink to="/">БОШ САҲИФА</NavBarLink>
              <NavBarLink to="/AboutPage">БИЗ ҲАҚИМИЗДА</NavBarLink>
              <NavBarLink to="/contactpage">БОҒЛАНИШ УЧУН</NavBarLink>
              <OpenLinkButton
                onClick={() => {
                  setExtendNavBar((bar) => !bar);
                }}
              >
                {ExtendNavBar ? (
                  <>
                    <MenuClose src={MenuButtonClose}></MenuClose>
                  </>
                ) : (
                  <>
                    <Menu src={MenuButton}></Menu>
                  </>
                )}
              </OpenLinkButton>
            </NavBarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <NavBarLink to="/adminpage">
              <Logo src={LogoImg}></Logo>
            </NavBarLink>
          </RightContainer>
        </NavBarInnerContainer>
        {ExtendNavBar && (
          <NavBarExtendedContainer>
            <NavBarLinkExtended to="/#">HomePage</NavBarLinkExtended>
            <NavBarLinkExtended to="/aboutpage">AboutPage</NavBarLinkExtended>
            <NavBarLinkExtended to="/contactpage">
              ContactPage
            </NavBarLinkExtended>
          </NavBarExtendedContainer>
        )}
      </NavBarContainer>
    </>
  );
};

export default NavBar;
