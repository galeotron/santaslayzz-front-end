import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  MobileNavLogo,

  NavLogoReal,
  MobileNavLogoReal,
} from "./NavbarElements";
import nameLogo from "../../images/name.png";
import mobileNameLogo from "../../images/logo.PNG";

const Navbar = ({ toggle, isMediaPlaying }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 0) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav)
    } 
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav} isMediaPlaying={isMediaPlaying}>
        <NavbarContainer>
          {isMediaPlaying ? (
            <div></div>
          ) : (
            <NavLogo to="/">
              <NavLogoReal src={nameLogo} alt="Logo"></NavLogoReal>
            </NavLogo>
          )}
          {/* <NavLogo to="/">
                        <NavLogoReal src={nameLogo} alt="Logo"></NavLogoReal>
                    </NavLogo> */}
          {isMediaPlaying ? (
            <div></div>
          ) : (
            <MobileNavLogo to="/">
              <MobileNavLogoReal
                src={mobileNameLogo}
                alt="Logo"
              ></MobileNavLogoReal>
            </MobileNavLogo>
          )}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          {isMediaPlaying ? (
            <div></div>
          ) : (
            <NavMenu>
              <NavItem>
                <NavLinks to="/about">
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/tournaments">Tournaments</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/store">Store</NavLinks>
              </NavItem>
            </NavMenu>
          )}
          <NavBtn>
            <NavBtnLink to="/home">Home</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
