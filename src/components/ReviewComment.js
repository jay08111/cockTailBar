import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteReviews } from "../redux/liquorSlice";
import styled from "styled-components";
function ReviewComment({ id, name, review, like, image }) {
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
    <Wrapper>
      <div className="review__content">
        <img src={image} alt={name} />
        <div>
          <p>{name}</p>
          <p>{review}</p>
        </div>
      </div>
      <div className="review__btn__container">
        {/* <button onClick={() => dispatch(deleteReviews(id))}>
          <BsTrash />
        </button> */}
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
  border: 1px solid #fff;
  border-radius: 20px;
   padding: 9rem 3rem;
    .red__Heart {
      color: red;
    }
  }
`;
export default ReviewComment;
