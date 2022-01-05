import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as Logo } from "../pictures/barLogo.svg";
function Header() {
  return (
    <>
      <Button>
        <div>
          <GiHamburgerMenu />
        </div>
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
  div {
    display: flex;
    justify-content: flex-end;
  }
`;
const Wrapper = styled.header`
  overflow: hidden;
  .logo {
    transform: scale(1.2);
  }
`;
export default Header;
