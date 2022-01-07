import React from "react";
import styled from "styled-components";
function Nocomment() {
  return (
    <Wrapper>
      <h1>there are no reviews yet ...</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  h1 {
    text-transform: capitalize;
    display: flex;
    gap: 6px;
    align-items: center;
    color: #fff;
  }
  .cry__emoji {
    font-size: 3rem;
  }
`;
export default Nocomment;
