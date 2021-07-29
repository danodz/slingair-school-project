import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import slingairLogo from "../assets/logo_text.png";

const Header = () => (
  <Wrapper>
    <Logo>
      <h1>Sling Airlines</h1>
    </Logo>
    <Nav>
      {/* TODO: only show links if the user has a reservation already */}
      <>
        <StyledNavLink to="/view-reservation">Reservation</StyledNavLink>
        <StyledNavLink to="/profile">Profile</StyledNavLink>
      </>
    </Nav>
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background: var(--color-alabama-crimson);
  height: 110px;
  padding: var(--padding-page) 18px;
`;
const Logo = styled.div`
  background-image: url(${slingairLogo});
  background-repeat: no-repeat;
  background-position: left center, right center;
  background-size: contain;
  overflow: hidden;
  text-indent: -1000px;
  height: 60px;
  width: 550px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const StyledNavLink = styled(NavLink)`
  background: var(--color-selective-yellow);
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--color-alabama-crimson);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-heading);
  font-size: 18px;
  height: 42px;
  margin: 0 0 0 8px;
  padding: 0 14px;
  width: 100%;
  text-decoration: none;
  transition: all ease 400ms;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    background: var(--color-alabama-crimson);
    color: var(--color-selective-yellow);
    border-color: var(--color-selective-yellow);
  }
`;

export default Header;
