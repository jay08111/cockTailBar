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
  min-height: 3vh;
  text-transform: capitalize;
  background-color: #ffd8a8;
  margin-top: 10px;
`;

export default Footer;
