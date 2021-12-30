import React from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
function Loading() {
  return (
    <Wrapper>
      <div>
        <Loader
          type="Audio"
          color="#000"
          height={300}
          width={400}
          timeout={10000}
        />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 50vh;
  }
`;

export default Loading;
