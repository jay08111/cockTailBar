import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setShowLess } from "../redux/cockTailSlice";
import { DisPlayMenu } from "./index";
function CockTail() {
  return (
    <Wrapper>
      <h1>Menu</h1>
      <div className="underline"></div>
      <DisPlayMenu />
    </Wrapper>
  );
}
const Wrapper = styled.article`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 3rem;
  }
`;
export default CockTail;
