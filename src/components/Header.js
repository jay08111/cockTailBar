import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Wrapper>
      <div className="header-img">
        <div className="header-box">
          <h1 className="header-p">
            Welcome to our <span>Bar</span>
          </h1>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  .header-box {
    background: rgba(255, 255, 255, 0.2);
    padding: 5rem;
    text-align: center;
  }
  .header-p {
    color: #000;
    padding: 5rem;
    border: 7px solid #ffc078;
    font-size: 2.8rem;
    text-transform: capitalize;
  }

  span {
    color: #ffc078;
  }
`;
export default Header;
