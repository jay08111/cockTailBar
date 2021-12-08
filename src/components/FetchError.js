import React from "react";
import styled from "styled-components";
function FetchError() {
  return (
    <Wrapper>
      <h1>Fetch Error ! We can't render our data. Sorry !</h1>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;
export default FetchError;
