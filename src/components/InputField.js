import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setReviewValue,
  addReviews,
  setCommentValue,
} from "../redux/liquorSlice";
function InputField() {
  const dispatch = useDispatch();
  const { reviewNameValue, reviewCommentValue, toggleLang } = useSelector(
    (state) => state.liquor
  );
  return (
    <Wrapper className="review__inputField">
      <div className="review__inner">
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
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 50vw;
  .review__inner {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  @media screen and (max-width: 1161px) {
    width: 80vw;
  }
`;

export default InputField;
