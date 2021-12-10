import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { DisPlayMenu, Loading, FetchError } from "./index";
function CockTail() {
  const { list, loading, error, postPerPage, currentPage } = useSelector(
    (state) => state.liquor
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError />;
  }
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  console.dir(currentPosts);
  return (
    <Wrapper>
      <h1>Menu</h1>
      <div className="grid">
        {currentPosts.map((items) => (
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
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    margin-top: 4rem;
  }
  h1 {
    text-align: center;
    font-size: 3rem;
  }
  @media screen and (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default CockTail;
