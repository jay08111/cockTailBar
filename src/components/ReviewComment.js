import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteReviews } from "../redux/liquorSlice";
import styled from "styled-components";
function ReviewComment({ id, name, review, like }) {
  const dispatch = useDispatch();
  const [clickLike, setClickLike] = useState(false);
  const [likeNumber, setLikeNumber] = useState(like);

  const addLikeNumber = () => {
    setClickLike(!clickLike);
    if (clickLike) {
      setLikeNumber(likeNumber - 1);
    } else if (!clickLike) {
      setLikeNumber(likeNumber + 1);
    }
  };
  return (
    <Wrapper className="review__container">
      <p>{name}</p>
      <p>{review}</p>
      <div className="review__btn__container">
        <button onClick={() => dispatch(deleteReviews(id))}>
          <BsTrash />
        </button>
        <button onClick={addLikeNumber}>
          {clickLike ? (
            <AiTwotoneHeart className="red__Heart" />
          ) : (
            <AiOutlineHeart />
          )}
          <span>{likeNumber}</span>
        </button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 10px;
  width: 60vw;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  margin-bottom: 30px;
  .review__btn__container {
    display: flex;
    justify-content: flex-end;
    gap: 2px;
    margin-bottom: 3px;
  }
  .review__btn__container button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    width: 40px;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .review__btn__container span {
    margin-left: 1px;
  }
  .red__Heart {
    color: red;
  }
`;
export default ReviewComment;
