import React from "react";
import styled from "styled-components";
function NoItems() {
  return (
    <Wrapper>
      <h1>there is no item in your cart yet...</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  h1 {
    text-transform: capitalize;
  }
`;
export default NoItems;
