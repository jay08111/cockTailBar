import React from "react";
import styled from "styled-components";
function Picture() {
  return (
    <Wrapper>
      <div className="about__us">
        <h1>About Us</h1>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  overflow: hidden;
  height: 70vh;
  position: relative;
  .about__us {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 6rem;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;
export default Picture;
