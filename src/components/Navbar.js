import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
function Navbar() {
  const { cart } = useSelector((state) => state.liquor);
  return (
    <Nav className="nav__bar">
      <div>
        <StyledLink to="/review">
          <MdOutlineRateReview className="review__icon" />
        </StyledLink>
        <StyledLink to="/">
          <h1>The Bar</h1>
        </StyledLink>
        <StyledLink to="/cartPage">
          <AiOutlineShoppingCart className="cartPage__icon" />
          <div className="cart__itemAmount">{cart.length}</div>
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
    .review__icon {
      font-size: 40px;
      cursor: pointer;
      display: flex;
    }
    .cartPage__icon {
      font-size: 40px;
      cursor: pointer;
      position: relative;
      display: flex;
    }
    .cart__itemAmount {
      position: absolute;
      top: 8px;
      right: -8px;
      height: 30px;
      width: 30px;
      padding: 0 10px;
      background-color: #ffffda;
      border-radius: 50%;
      font-size: 1.3rem;
      font-family: "Dosis", sans-serif;
    }
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
