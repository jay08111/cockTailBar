import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewsEN, deleteReviewsKR } from "../redux/liquorSlice";
import styled from "styled-components";
function ReviewComment({ id, name, review, like, image }) {
  const { toggleLang } = useSelector((state) => state.liquor);
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
    <Wrapper $lang={toggleLang}>
      <div className="review__content">
        <img src={image} alt={name} />
        <div>
          <p>{name}</p>
          <p>{review}</p>
        </div>
      </div>
      <div className="review__btn__container">
        <button onClick={addLikeNumber} className="review__like__btn">
          {clickLike ? (
            <AiTwotoneHeart className="red__Heart" />
          ) : (
            <AiOutlineHeart className="heart" />
          )}
          <span>{likeNumber}</span>
        </button>
        <button
          onClick={() => {
            toggleLang
              ? dispatch(deleteReviewsKR(id))
              : dispatch(deleteReviewsEN(id));
          }}
          className="review__delete__btn"
        >
          <BsTrash />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 font-family: ${(props) =>
   props.$lang ? "'Noto Sans KR', sans-serif" : "'Oswald', sans-serif"};
 border: 35px solid transparent;
 border-image: url("https://media-cdn.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/accounts/media/TBBjpsToRMaQp7vLG6Ty_border-image-white-decor.png") 100 round;
  border-radius: 20px;
   padding: 4rem 3rem;
  position:relative;
   .review__content {
     img {
       width:150px;
       height: 150px;
       object-fit:cover;
       border-radius: 50%;
       margin-top:20px;
       margin-bottom:20px;
     }
   }
   .review__btn__container {
     position:absolute;
     bottom : 2%;
     right: 2%;
     display:flex;
     .review__delete__btn {
       padding: 11px;
       background:transparent;
       color: #fff;
       border:1px solid #fff;
       font-size: 1rem;
       cursor:pointer;
     }
     .review__like__btn {
       padding: 7px;
       border:1px solid #fff;
       background:transparent;
       color: #fff;
       font-size: 1rem;
       display:flex;
       align-items:center;
       gap: 10px;
       cursor:pointer;
     .red__Heart {
      color: red;
      font-size:2rem;
      }
      .heart {
        font-size: 2rem;
      }
     }  
   }
  }
  @media screen and (max-width:350px) {
    padding: 4rem 2rem;
  }
  @media screen and (max-width:306px) {
    padding: 4rem 1rem;
  }
`;
export default ReviewComment;
