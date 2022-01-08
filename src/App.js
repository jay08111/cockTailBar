import React, { useEffect } from "react";
import {
  Header,
  Introduction,
  Loading,
  BarDescription,
} from "./components/index";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { loading } = useSelector((state) => state.liquor);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Main className="main">
        <BarDescription />
        <section>
          <Introduction />
        </section>
      </Main>
    </>
  );
}
const Main = styled.main`
  overflow: hidden;
  .description {
    color: white;
  }
`;
export default App;
