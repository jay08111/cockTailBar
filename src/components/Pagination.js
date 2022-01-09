import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/liquorSlice";
import styled from "styled-components";
function Pagination() {
  const dispatch = useDispatch();
  const { postPerPage, list, currentPage, filter } = useSelector(
    (state) => state.liquor
  );
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(list.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      {!filter &&
        pageNumbers.map((number) => (
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
  padding: 10px 0 60px 0;
  gap: 30px;
  .pagination__list {
    list-style: none;
  }
  .pagination__btn {
    border: 1px solid #fff;
    font-size: 24px;
    height: 50px;
    width: 50px;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s;
    color: #fff;
    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
  @media screen and (max-width: 480px) {
    .pagination__btn {
      font-size: 20px;
      height: 40px;
      width: 40px;
    }
  }
  @media screen and (max-width: 400px) {
    .pagination__btn {
      font-size: 15px;
      height: 30px;
      width: 30px;
    }
  }
  @media screen and (max-width: 335px) {
    .pagination__btn {
      font-size: 15px;
      height: 25px;
      width: 25px;
    }
  }
  @media screen and (max-width: 307px) {
    gap: 20px;
    .pagination__btn {
      font-size: 15px;
      height: 30px;
      width: 30px;
    }
  }
  @media screen and (max-width: 285px) {
    gap: 16px;
    .pagination__btn {
      font-size: 15px;
      height: 30px;
      width: 30px;
    }
  }
  @media screen and (max-width: 263px) {
    gap: 10px;
    .pagination__btn {
      font-size: 15px;
      height: 30px;
      width: 30px;
    }
  }
  @media screen and (max-width: 233px) {
    gap: 8px;
    .pagination__btn {
      font-size: 15px;
      height: 30px;
      width: 30px;
    }
  }
  @media screen and (max-width: 211px) {
    gap: 5px;
    .pagination__btn {
      font-size: 15px;
      height: 30px;
      width: 30px;
    }
  }
`;

export default Pagination;
