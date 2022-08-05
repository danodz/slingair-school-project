import styled from "styled-components";

import slingImg from "../assets/air-sling.png";

const Footer = () => (
    <Wrapper>
        <Logo src={slingImg} />
        <Text>The only way to fly!</Text>
    </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  margin: 0px auto;
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
