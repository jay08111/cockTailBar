import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleData } from "../redux/liquorSlice";
import { Loading, FetchError } from "../components/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
function SingleCockTail() {
  const { singleLiquorList, loading, error } = useSelector(
    (state) => state.liquor
  );
  const { id } = useParams();
  console.log(singleLiquorList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleData(id));
  }, [dispatch, id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError />;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    singleLiquorList;
  return (
    <Wrapper className="section-center">
      <div className="container">
        <img src={image} alt={name} className="container__img" />
        <div className="container__right">
          <h1>{name}</h1>
          <p>Information :{info}</p>
          <p>Category: {category}</p>
          <p>Glass: {glass}</p>
          <p>Instructions: {instructions}</p>
          <p>Ingredients:</p>
          {ingredients &&
            ingredients.map((item, index) => <p key={index}>{item}</p>)}
          <button className="btn container__btn">add to cart</button>
          <StyledLink to="/">Back to Home</StyledLink>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 90vh;
  font-size: 32px;
  .container {
    padding: 8rem 6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .container__img {
    display: block;
    object-fit: cover;
    width: 80%;
  }
  .container__right {
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  p {
    line-height: 1.3;
  }
  .container__btn {
    padding: 0.5rem;
    width: 30%;
    background-color: #e57124;
    &:hover {
      background-color: #ffa153;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default SingleCockTail;
