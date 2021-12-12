import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/liquorSlice";
import styled from "styled-components";
function Pagination() {
  const dispatch = useDispatch();
  const { postPerPage, list, currentPage } = useSelector(
    (state) => state.liquor
  );
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(list.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      {pageNumbers.map((number) => (
        <li key={number} className="pagination__list">
          <button
            className={
              number === currentPage
                ? "pagination__btn active"
                : "pagination__btn"
            }
            onClick={() => dispatch(setCurrentPage(number))}
          >
            {number}
          </button>
        </li>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 10px;
  gap: 30px;
  .pagination__list {
    list-style: none;
  }
  .pagination__btn {
    border: 1px solid #b7966d;
    font-size: 24px;
    height: 50px;
    width: 50px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #fff;
      background-color: #cba779;
    }
  }
  .active {
    background-color: #cba779;
    color: #fff;
  }
`;

export default Pagination;
