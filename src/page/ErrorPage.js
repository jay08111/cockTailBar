import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Error() {
  return (
    <Wrapper>
      <div>
        <h1>404 page not found</h1>
        <h2>there is no page that you are looking for </h2>
      </div>
      <StyledLink to="/">Go back to home</StyledLink>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  div {
    margin-bottom: 3rem;
    h1 {
      font-size: 5rem;
      text-align: center;
    }
    h2 {
      font-size: 4rem;
      text-align: center;
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 515px) {
    div {
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 3rem;
  border: 1px solid #fff;
  padding: 20px;
  border-radius: 10px;
  transition: color 0.3s ease-in;
  &:hover {
    color: #b32614;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  margin-top: 3rem auto;
  @media screen and (max-width: 515px) {
    font-size: 1.5rem;
  }
`;
export default Error;
