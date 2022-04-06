import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.ExtendNavBar ? "100vh" : "80px")};
  background-color: #2c394b;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavBarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
`;

export const NavBarLink = styled(Link)`
  color: white;
  font-size: 15px;
  font-family: "SF Pro Display", sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  height: 40px;
  filter: brightness(0) invert(1);
  color: white;
`;

export const Menu = styled.img`
  margin: 10px;
  max-width: 40px;
  height: auto;
  filter: brightness(0) invert(1);
`;

export const MenuClose = styled.img`
  margin: 5px;
  max-width: 50px;
  height: auto;
  filter: brightness(0) invert(1);
`;

export const OpenLinkButton = styled.button`
  width: 60px;
  height: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 20px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ExtendNavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavBarLinkExtended = styled(Link)`
  color: white;
  font-size: 20px;
  font-family: "SF Pro Display", sans-serif;
  text-decoration: none;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
