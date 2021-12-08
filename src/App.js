import React, { useEffect } from "react";
import { Liquors, Header } from "./components/index";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/liquorSlice";
import styled from "styled-components";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Main>
      <Header />
      <section className="section__center">
        <Liquors />
      </section>
    </Main>
  );
}
const Main = styled.main`
  .section__center {
    margin: 3rem auto;
  }
`;
export default App;
