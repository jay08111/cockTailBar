import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setReviewValue,
  addReviews,
  setCommentValue,
} from "../redux/liquorSlice";
import { ReviewComment, Nocomment } from "../components/index";
import { useLocation } from "react-router-dom";
function Review() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const dispatch = useDispatch();
  const {
    reviewList,
    reviewNameValue,
    reviewCommentValue,
    toggleLang,
    reviewListKR,
  } = useSelector((state) => state.liquor);
  if (reviewList.length === 0) {
    return <Nocomment />;
  }
  return (
    <Wrapper className="about__us2">
      <h2>Customers Review</h2>
      <h3>what our customers think</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="review__grid">
          {toggleLang
            ? reviewListKR.map((reviews) => (
                <ReviewComment key={reviews.id} {...reviews} />
              ))
            : reviewList.map((reviews) => (
                <ReviewComment key={reviews.id} {...reviews} />
              ))}
        </div>
        <div className="new__comment"></div>
        <div className="review__inputField">
          <input
            type="text"
            placeholder={toggleLang ? "닉네임" : "name"}
            value={reviewNameValue}
            onChange={(e) => dispatch(setReviewValue(e.target.value))}
          />
          <textarea
            type="text"
            placeholder={toggleLang ? "댓글" : "comment"}
            value={reviewCommentValue}
            onChange={(e) => dispatch(setCommentValue(e.target.value))}
          />
          <div className="review__btn__box">
            <button
              className="review__btn btn"
              type="submit"
              onClick={() => {
                dispatch(addReviews());
              }}
            >
              {toggleLang ? "등록" : "comment"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-height: 100vh;
  h2 {
    font-size: 4rem;
    margin-top: 3rem;
    color: #fff;
  }
  h3 {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    color: #b1b1b1;
    font-weight: 300;
  }
  .review__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    gap: 20px;
    width: 40vw;
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
    input[type="text"],
    textarea[type="text"] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 20px;
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
  .review__btn__box {
    display: flex;
    justify-content: flex-end;
    .review__btn {
      background-color: #cba779;
      padding: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      transition: all 0.5s;
      width: 150px;
      &:hover {
        background-color: #e57124;
      }
    }
  }
`;
export default Review;
