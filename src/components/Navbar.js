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
    <Wrapper>
      <button onClick={() => dispatch(setShow(!show))} className="nav__button">
        {show ? (
          <BsX className="nav__logo  x__button" />
        ) : (
          <GiHamburgerMenu className="nav__logo" />
        )}
      </button>
      <nav className={show ? "nav__container works" : "nav__container"}>
        <div className="nav__inner">
          <div className="nav__link">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/cartPage">Cart</StyledLink>
            <StyledLink to="/">About us</StyledLink>
            <StyledLink to="/review">Review</StyledLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .nav__button {
    cursor: pointer;
    background: transparent;
    position: fixed;
    top: 0;
    right: 20px;
    bottom: 700px;
    z-index: 20;
    border: none;
    .nav__logo {
      font-size: 2rem;
      color: #fff;
      transition: all 0.2s ease-in-out 0s;
      &:hover {
        color: #b32614;
      }
    }
    .x__button {
      font-size: 3rem;
    }
  }
  .nav__container {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    width: 35vw;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.9);
    padding: 1.5rem;
    transform: translateX(100%);
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1) 0s;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav__inner {
      font-weight: 300;
      .nav__link {
        display: flex;
        flex-direction: column;
        gap: 60px;
      }
    }
  }
  .works {
    transform: translateX(0%);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #b32614;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default Navbar;
