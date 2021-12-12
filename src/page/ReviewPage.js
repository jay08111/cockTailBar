import React from "react";
import styled from "styled-components";
import { reviewData } from "../data";
import { useSelector } from "react-redux";
function Review() {
  const { reviewList } = useSelector((state) => state.liquor);
  console.log(reviewData);
  return (
    <Wrapper className="review__page">
      <h1>Reviews</h1>
      {reviewData.map((reviews) => {
        const { id, name, review } = reviews;
        return (
          <div key={id} className="review__container">
            <p>{name}</p>
            <p>{review}</p>
          </div>
        );
      })}
      <div className="review__inputField">
        <input type="text" placeholder="name" />
        <textarea type="text" placeholder="comment" />
      </div>
      <button className="btn review__btn">comment</button>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-height: 90vh;
  background-color: #e57124;
  h1 {
    margin-top: 2rem;
  }
  .review__container {
    padding: 10px;
    width: 60vw;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
  }
  .review__inputField {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-end;
  }
  input {
    width: 50vw;
    min-height: 30px;
    padding: 5px;
  }
  input[type="text"]::placeholder {
    text-align: left;
  }
  textarea {
    resize: none;
    padding: 5px;
  }
  textarea[type="text"]::placeholder {
    text-align: left;
  }
  .review__btn {
    background-color: #cba779;
    padding: 1rem;
  }
`;
export default Review;
