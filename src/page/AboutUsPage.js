import React, { useEffect } from "react";
import styled from "styled-components";
import { AboutUs, Picture } from "../components/index";
import { useLocation } from "react-router-dom";
function AboutUsPage() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
