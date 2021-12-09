import React from "react";
import styled from "styled-components";
function FetchError() {
  return (
    <Wrapper>
      <div>
        <h1>Fetch Error ! We can't render our data. Sorry !</h1>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2rem;
  }
`;
export default FetchError;
