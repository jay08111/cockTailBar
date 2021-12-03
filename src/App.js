import React, { useEffect } from "react";
import styled from "styled-components";
import { CockTail, Header } from "./components/index";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/cockTailSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Main>
      <Header />
      <section>
        <CockTail />
      </section>
    </Main>
  );
}
const Main = styled.main`
  section {
    width: 90vw;
    margin: 2rem auto;
  }
`;
export default App;
