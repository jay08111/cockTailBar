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
    <Wrapper>
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
  margin-left: 20%;
  .review__inner {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  @media screen and (max-width: 1161px) {
    width: 50vw;
  }
  @media screen and (max-width: 487px) {
    width: 70vw;
    margin-left: 10%;
  }
  @media screen and (max-width: 260px) {
    width: 80vw;
    margin-left: 0;
  }
`;

export default InputField;
