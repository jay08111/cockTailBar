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
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  h1 {
    font-size: 2rem;
  }
`;
export default FetchError;
