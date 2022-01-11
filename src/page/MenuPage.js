import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  DisPlayMenu,
  Loading,
  FetchError,
  Pagination,
} from "../components/index";
import {
  setSelected,
  filterList,
  setFilter,
  fetchData,
  setCurrentPage,
} from "../redux/liquorSlice";
import { useLocation } from "react-router-dom";

function Menu() {
  const {
    list,
    loading,
    error,
    postPerPage,
    currentPage,
    selected,
    category,
    filter,
    filteredList,
  } = useSelector((state) => state.liquor);
  const dispatch = useDispatch();
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    dispatch(setFilter(false));
    dispatch(setSelected("all"));
    dispatch(fetchData());
    dispatch(setCurrentPage(1));
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError />;
  }
  return (
    <Wrapper className="about__us4">
      <h1 className="heading__menu">Menu</h1>
      <Select
        onChange={(e) => {
          dispatch(setSelected(e.target.value));
          dispatch(filterList());
        }}
        value={selected}
      >
        {category.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </Select>
      <article className="flex">
        {!loading && filter
          ? filteredList.map((items) => (
              <DisPlayMenu key={items.id} {...items} />
            ))
          : currentPosts.map((items) => (
              <DisPlayMenu key={items.id} {...items} />
            ))}
      </article>
      {!loading && <Pagination />}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .heading__menu {
    margin-top: 3rem;
    color: #fff;
    font-size: 4rem;
  }
  .flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;
const Select = styled.select`
  margin-top: 5rem;
  appearance: none;
  min-width: 300px;
  height: 35px;
  text-align: center;
  margin-bottom: 2rem;
  background: url("https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-right-arrow-icon-png-image_4231911.jpg")
    calc(100% - 5px) center no-repeat;
  background-size: 22px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
  color: #fff;
  font-size: 1.2rem;
  option {
    background: #000;
    color: #fff;
    padding: 2px 0;
    transition: color 0.3s ease-in;
  }
  @media screen and (max-width: 315px) {
    min-width: 250px;
  }

  @media screen and (max-width: 260px) {
    min-width: 200px;
  }
  @media screen and (max-width: 210px) {
    min-width: 150px;
  }
`;
export default Menu;
