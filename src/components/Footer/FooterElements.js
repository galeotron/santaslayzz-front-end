import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  margin-left: 3%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 8px;
`;

export const SocialIconLink = styled.a`
  color: #8dbc00;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 35px;
  transition: all 400ms ease-in-out;

  &:hover {
    transition: all 400ms ease-in-out;
    color: #fe212d;
  }
`;
