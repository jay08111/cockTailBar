import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/liquorSlice";
function Pagination() {
  const dispatch = useDispatch();
  const { postPerPage, list } = useSelector((state) => state.liquor);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(list.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));
  return (
    <div>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      ))}
    </div>
  );
}

export default Pagination;
