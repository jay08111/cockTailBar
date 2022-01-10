import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsX } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setShow, setToggledLang } from "../redux/liquorSlice";
import { navLink } from "../data";
import Aos from "aos";
function Navbar() {
  const { show, toggleLang } = useSelector((state) => state.liquor);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Wrapper lang={toggleLang}>
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
            {navLink.map((nav) => {
              const { id, link, titleEN, titleKR } = nav;
              return (
                <StyledLink
                  key={id}
                  to={link}
                  onClick={() => dispatch(setShow(false))}
                >
                  {toggleLang ? titleKR : titleEN}
                </StyledLink>
              );
            })}
            <div className="nav__toggle">
              <Switch>
                <input
                  type="checkbox"
                  onChange={(e) => dispatch(setToggledLang(e.target.checked))}
                />
                <span className="slider"></span>
              </Switch>
              <p>{toggleLang ? "🇰🇷" : "🇺🇸"}</p>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 font-family : ${({ lang }) =>
   lang ? "'Noto Sans KR', sans-serif" : "'Oswald', sans-serif"}
  }
  .nav__button {
    cursor: pointer;
    background: transparent;
    position: fixed;
    top: 0;
    right: 2%;
    bottom: 85%;
    z-index: 20;
    border: none;
    transition: all 0.2s ease-in-out 0s;
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
    transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0s;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav__inner {
      font-weight: 300;
      .nav__link {
        display: flex;
        flex-direction: column;
        gap: 60px;
        .nav__toggle {
          color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          p {
            font-size: 2.2rem;
          }
        }
      }
    }
  }
  .works {
    transform: translateX(0%);
  }
  @media screen and (max-width: 768px) {
    .nav__container {
      width: 100vw;
    }
  }
`;
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #ccc;
    transition: all 0.4s;
    border-radius: 34px;
    &:before {
      content: "";
      position: absolute;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: #fff;
      transition: all 0.4s;
      border-radius: 50%;
    }
  }
  input:checked + .slider {
    background-color: #b32614;
  }
  input:checked + .slider:before {
    transform: translateX(26px);
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
