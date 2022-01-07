import React from "react";
import styled from "styled-components";

function Picture() {
  return (
    <Wrapper>
      <div className="about__us"></div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  .about__us {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1,
  p {
    font-size: 6rem;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;
export default Picture;
