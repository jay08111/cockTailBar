import React, { useEffect } from "react";
import { Liquors, Header, Pagination, Loading } from "./components/index";
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
    <Main>
      <Header />
      <section className="section__center">
        <Liquors />
        {!loading && <Pagination />}
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
