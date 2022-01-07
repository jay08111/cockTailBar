import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../pictures/barlogo222.svg";
function Header() {
  return (
    <Wrapper>
      <div className="header__img">
        <Logo fill="white" className="logo" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  overflow: hidden;
  .header__img {
    position: relative;
    .logo {
      transform: scale(0.4);
    }
  }
`;
export default Header;
