import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as Logo } from "../pictures/barLogo.svg";
function Header() {
  return (
    <Wrapper>
      <div className="header__img">
        <Logo fill="white" className="logo" />
        {/* <img src="../pictures/barlogo2.png" alt="" /> */}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  overflow: hidden;
  .header__img {
    position: relative;
    .logo {
      transform: scale(1.2);
    }
  }
`;
export default Header;
