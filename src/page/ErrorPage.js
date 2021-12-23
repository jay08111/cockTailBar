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
  min-height: 90vh;
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
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  margin-top: 3rem auto;
`;
export default Error;
