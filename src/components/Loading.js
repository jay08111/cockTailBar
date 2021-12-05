import React from "react";
import styled from "styled-components";
function Loading() {
  return (
    <Wrapper>
      <h1>Loading ...</h1>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 8rem;
  }
`;

export default Loading;
