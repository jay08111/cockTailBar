import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsX } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../redux/liquorSlice";
import Aos from "aos";
function Navbar() {
  const { show } = useSelector((state) => state.liquor);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <Nav>
      <button onClick={() => dispatch(setShow(!show))} data-aos="zoom-in">
        {show ? (
          <BsX className="nav__button  x__button" />
        ) : (
          <GiHamburgerMenu className="nav__button" />
        )}
      </button>
    </Nav>
  );
}
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  display: flex;
  justify-content: flex-end;
  button {
    padding: 30px;
    cursor: pointer;
    background: transparent;
  }
  .nav__button {
    font-size: 2rem;

    color: #fff;
    transition: all 0.2s ease-in-out 0s;
    &:hover {
      color: #b32614;
    }
  }
  .x__button {
    font-size: 2rem;
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
