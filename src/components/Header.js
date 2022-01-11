import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../pictures/reallucialogo.svg";
function Header() {
  return (
    <Wrapper>
      <h1 className="header__img">
        <Logo fill="white" className="logo" />
      </h1>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  overflow: hidden;
  .header__img {
    position: relative;
    .logo {
      transform: scale(0.5);
    }
    @media screen and (max-width: 1280px) {
      .logo {
        transform: scale(0.4);
      }
    }
    @media screen and (max-width: 1030px) {
      .logo {
        transform: scale(0.5);
      }
    }
    @media screen and (max-width: 1024px) {
      .logo {
        transform: scale(0.4);
      }
    }
    @media screen and (max-width: 912px) {
      .logo {
        transform: scale(0.8);
      }
    }
    @media screen and (max-width: 820px) {
      .logo {
        transform: scale(0.9);
      }
    }
    @media screen and (max-width: 614px) {
      .logo {
        transform: scale(0.6);
      }
    }
    @media screen and (max-width: 419px) {
      .logo {
        transform: scale(0.75);
      }
    }
    @media screen and (max-width: 287px) {
      .logo {
        transform: scale(0.8);
      }
    }
  }
`;
export default Header;
