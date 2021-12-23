import React from "react";
import styled from "styled-components";
import { FaRegSadCry } from "react-icons/fa";
function Nocomment() {
  return (
    <Wrapper>
      <h1>
        there are no reviews yet ...
        <FaRegSadCry className="cry__emoji" />
      </h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  h1 {
    text-transform: capitalize;
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .cry__emoji {
    font-size: 3rem;
  }
`;
export default Nocomment;
