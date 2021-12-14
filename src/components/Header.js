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
  }
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
`;
export default Header;
