import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Nav>
      <div>
        <StyledLink to="/review">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </StyledLink>
        <StyledLink to="/">
          <h1>The Bar</h1>
        </StyledLink>
        <StyledLink to="/cartPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </StyledLink>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  height: 8vh;
  background-color: #ffd8a8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 100;
  top: 0;
  div {
    margin: 0 4.5rem;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
  }
  svg {
    width: 40px;
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default Navbar;
