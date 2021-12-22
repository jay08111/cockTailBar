import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { DisPlayMenu, Loading, FetchError } from "./index";
import { setSelected, filterList, setFilter } from "../redux/liquorSlice";
function CockTail() {
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
  useEffect(() => {
    dispatch(setFilter(false));
    dispatch(setSelected("all"));
  }, [dispatch]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError />;
  }
  return (
    <Wrapper>
      <h1>Menu</h1>
      <select
        className="liquor__select"
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
      </select>
      <div className="grid">
        {!loading && filter
          ? filteredList.map((items) => (
              <DisPlayMenu key={items.id} {...items} />
            ))
          : currentPosts.map((items) => (
              <DisPlayMenu key={items.id} {...items} />
            ))}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  .liquor__select {
    margin-left: 92%;
    width: 120px;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    margin-top: 4rem;
  }

  @media screen and (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default CockTail;
