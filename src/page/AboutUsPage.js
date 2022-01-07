import React from "react";
import styled from "styled-components";
import { AboutUs, Picture } from "../components/index";
function AboutUsPage() {
  return (
    <Wrapper>
      <Picture />
      <AboutUs />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  color: #fff;
`;
export default AboutUsPage;
