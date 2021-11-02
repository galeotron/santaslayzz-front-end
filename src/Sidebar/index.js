import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarLine,
  SidebarFooterWrapper,
  SidebarFooterIcon,
} from "./SidebarElements";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";

const Sidebar = ({ isCartOpen, toggleCart, isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/tournaments">Tournaments</SidebarLink>
          <SidebarLink to="/store">Store</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={toggleCart}>My Cart</SidebarRoute>
        </SideBtnWrap>
        <SidebarLine></SidebarLine>
        <SidebarFooterWrapper>
          <SidebarFooterIcon
            href="//www.twitter.com/SantaSlayzz"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SidebarFooterIcon>
          <SidebarFooterIcon
            href="//www.youtube.com/channel/UCA0PgwN-39IuyxBua2kUkNw"
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube />
          </SidebarFooterIcon>
          <SidebarFooterIcon
            href="//www.twitch.tv/santaslayzz"
            target="_blank"
            aria-label="Twitch"
          >
            <FaTwitch />
          </SidebarFooterIcon>
          <SidebarFooterIcon
            href="//www.instagram.com/santaslayzz/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SidebarFooterIcon>
          <SidebarFooterIcon
            href="//discord.gg/kgAsbXWF"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord />
          </SidebarFooterIcon>
        </SidebarFooterWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
