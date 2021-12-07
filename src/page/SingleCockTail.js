import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/cockTailSlice";
import { Loading } from "../components/index";
function SingleCockTail() {
  const { singleCockTailList, loading } = useSelector((state) => state.states);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch, id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>{singleCockTailList.idDrink}</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default SingleCockTail;
