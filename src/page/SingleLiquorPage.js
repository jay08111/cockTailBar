import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/liquorSlice";
import { Loading, FetchError } from "../components/index";
function SingleCockTail() {
  const { singleLiquorList, loading, error } = useSelector(
    (state) => state.liquor
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch, id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError />;
  }
  return (
    <div>
      <h1>{singleLiquorList.idDrink}</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default SingleCockTail;
