import React from "react";
import {
  Header,
  Introduction,
  Loading,
  BarDescription,
} from "./components/index";
import { useSelector } from "react-redux";
import styled from "styled-components";
function App() {
  const { loading } = useSelector((state) => state.liquor);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Main className="main">
        <BarDescription />
        <div>
          <Introduction />
        </div>
      </Main>
    </>
  );
}
const Main = styled.main`
  .description {
    color: white;
  }
`;
export default App;
