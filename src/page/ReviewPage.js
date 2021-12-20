import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setReviewValue,
  addReviews,
  setCommentValue,
} from "../redux/liquorSlice";
import { ReviewComment, Nocomment } from "../components/index";

function Review() {
  const dispatch = useDispatch();
  const { reviewList, reviewNameValue, reviewCommentValue } = useSelector(
    (state) => state.liquor
  );
  if (reviewList.length === 0) {
    return <Nocomment />;
  }
  return (
    <>
      <Wrapper>
        <h1>Reviews</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {reviewList.map((reviews) => {
            return <ReviewComment key={reviews.id} {...reviews} />;
          })}
          <div className="review__inputField">
            <input
              type="text"
              placeholder="name"
              value={reviewNameValue}
              onChange={(e) => dispatch(setReviewValue(e.target.value))}
            />
            <textarea
              type="text"
              placeholder="comment"
              value={reviewCommentValue}
              onChange={(e) => dispatch(setCommentValue(e.target.value))}
            />
          </div>
          <button
            className="review__btn btn"
            type="submit"
            onClick={() => {
              dispatch(addReviews());
            }}
          >
            comment
          </button>
        </form>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-height: 90vh;
  background-color: #fff;
  h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }
  .review__inputField {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-end;
    margin-top: 2rem;
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
      min-height: 60px;
      padding: 5px;
      width: 50vw;
    }
    textarea[type="text"]::placeholder {
      text-align: left;
    }
  }
  .review__btn {
    background-color: #cba779;
    padding: 1rem;
    margin-top: 1rem;
  }
`;
export default Review;
