import React, { useEffect } from "react";
import {
  Header,
  Introduction,
  Loading,
  BarDescription,
} from "./components/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchSingleData } from "./redux/liquorSlice";
import { useParams } from "react-router-dom";
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
