import React, { useEffect } from "react";
import {
  Liquors,
  Header,
  Pagination,
  Loading,
  BarDescription,
} from "./components/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/liquorSlice";

import styled from "styled-components";
function App() {
  const { loading } = useSelector((state) => state.liquor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Main className="main">
        <BarDescription />
        <section className="section__center">
          <Liquors />
          {!loading && <Pagination />}
        </section>
      </Main>
    </>
  );
}
const Main = styled.main`
  .description {
    color: white;
  }
  .section__center {
    margin: 3rem auto;
  }
`;
export default App;
