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
  @media screen and (max-width: 702px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media screen and (max-width: 586px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 469px) {
    h1 {
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 410px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 352px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 292px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 235px) {
    h1 {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 210px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
export default Picture;
