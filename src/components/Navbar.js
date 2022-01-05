import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
function Navbar() {
  const { cart } = useSelector((state) => state.liquor);
  return (
    <Button>
      <GiHamburgerMenu />
    </Button>
  );
}
const Button = styled.button`
  z-index: 2;
  color: #fff;
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
