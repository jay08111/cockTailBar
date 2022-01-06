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
  min-height: 100vh;
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  h1 {
    text-transform: capitalize;
    color: #fff;
  }
`;
export default NoItems;
