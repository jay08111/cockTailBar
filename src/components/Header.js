import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as Logo } from "../pictures/barLogo.svg";
function Header() {
  return (
    <>
      <Button>
        <GiHamburgerMenu />
      </Button>
      <Wrapper>
        <div className="header__img">
          <Logo fill="white" className="logo" />
          {/* <img src="../pictures/barlogo2.png" alt="" /> */}
        </div>
      </Wrapper>
    </>
  );
}
const Button = styled.button`
  position: sticky;
  top: 0;
`;
const Wrapper = styled.header`
  .logo {
    transform: scale(1.2);
  }
  img {
    width: 1000px;
    height: 800px;
  }
  /* .header__box {
    background: rgba(255, 255, 255, 0.2);
    padding: 5rem;
    text-align: center;
    width: 40vw;

    .header__p {
      color: #fff;
      padding: 5rem;
      border: 7px solid #ffc078;
      font-size: 3.5rem;
      text-transform: capitalize;
      font-family: "Dancing Script", cursive;
    }
  } */
  @media screen and (max-width: 1200px) {
    .header__box {
      width: 100vw;
    }
  }
  @media screen and (max-width: 469px) {
    .header__box {
      .header__p {
        font-size: 3rem;
      }
    }
  }
  @media screen and (max-width: 411px) {
    .header__box {
      .header__p {
        font-size: 2.8rem;
        padding: 2rem;
      }
    }
  }
  @media screen and (max-width: 345px) {
    .header__box {
      .header__p {
        font-size: 2.4rem;
        padding: 2rem;
      }
    }
  }
  @media screen and (max-width: 320px) {
    .header__box {
      .header__p {
        font-size: 2rem;
        padding: 1.8rem;
      }
    }
  }
  @media screen and (max-width: 280px) {
    .header__box {
      .header__p {
        font-size: 1.7rem;
        padding: 1rem;
      }
    }
  }
`;
export default Header;
