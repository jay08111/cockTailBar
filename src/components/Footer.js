import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <h1>&copy; made by hoyeoun {new Date().getFullYear()}</h1>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
`;

export default Footer;
