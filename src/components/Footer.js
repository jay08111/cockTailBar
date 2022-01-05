import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <h1 onClick={() => window.open("https://whoami-hoyeoun.netlify.app/")}>
        &copy; made by hoyeoun {new Date().getFullYear()}
      </h1>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.5rem;
  font-size: 0.6rem;
  text-transform: capitalize;
  margin-top: 10px;

  h1 {
    cursor: pointer;
    transition: color 0.2s ease-in-out 0s;
    &:hover {
      color: #b32614;
    }
  }
  /* @media screen and (max-width: 339px) {
    h1 {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 260px) {
    h1 {
      font-size: 1rem;
    }
  } */
`;

export default Footer;
