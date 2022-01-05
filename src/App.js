import React, { useEffect } from "react";
import {
  Liquors,
  Header,
  Pagination,
  Loading,
  BarDescription,
} from "./components/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchSingleData } from "./redux/liquorSlice";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function App() {
  const { id } = useParams();
  const { loading } = useSelector((state) => state.liquor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchSingleData(id));
  }, [dispatch, id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Main className="main">
        <BarDescription />
        <section>
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
`;
export default App;
