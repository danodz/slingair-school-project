import React from "react";
import styled from "styled-components";

import logoImg from "../assets/air-sling.png";

const Footer = () => (
  <Wrapper>
    <Logo src={logoImg} />
    <Text>The only way to fly!</Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  margin: auto auto 24px;
  height: 60px;
`;
const Logo = styled.img`
  height: 100%;
`;
const Text = styled.p`
  color: var(--color-alabama-crimson);
  font-family: var(--font-heading);
  font-size: 36px;
  text-align: center;
  margin: 12px 0 0 24px;
`;

export default Footer;
