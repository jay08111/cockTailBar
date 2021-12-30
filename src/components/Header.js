import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Wrapper>
      <div className="header__img">
        <div className="header__box">
          <h1 className="header__p">
            Welcome to our <span>Bar</span>
          </h1>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  .header__box {
    background: rgba(255, 255, 255, 0.2);
    padding: 5rem;
    text-align: center;
    width: 100vw;
    .header__p {
      color: #000;
      padding: 5rem;
      border: 7px solid #ffc078;
      font-size: 3.5rem;
      text-transform: capitalize;
      font-family: "Dancing Script", cursive;
    }
    span {
      color: #ffc078;
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
