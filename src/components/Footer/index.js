import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMediaWrap,
  SocialIconLink,
  AdminLink,
} from "./FooterElements";



const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMediaWrap>
          <SocialIconLink
            href="//twitter.com/SantaSlayzz"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink
            href="//www.youtube.com/channel/UCA0PgwN-39IuyxBua2kUkNw"
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink
            href="//www.twitch.tv/santaslayzz"
            target="_blank"
            aria-label="Twitch"
          >
            <FaTwitch />
          </SocialIconLink>
          <SocialIconLink
            href="//www.instagram.com/santaslayzz/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href="//discord.gg/kgAsbXWF"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord />
          </SocialIconLink>
        </SocialMediaWrap>
      </FooterWrap>
      <AdminLink to="/signin">
        <p>Admin</p>
      </AdminLink>
    </FooterContainer>
  );
};

export default Footer;
