import React from "react";
import styled from "styled-components";
import {
  deleteCartItem,
  increaseAmount,
  decreaseAmount,
} from "../redux/liquorSlice";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
function MyCartItem({ id, name, image, category, price, priceKr, quantity }) {
  const dispatch = useDispatch();
  const { toggleLang } = useSelector((state) => state.liquor);
  return (
    <Wrapper>
      <div className="cart__container">
        <div className="cart__image">
          <Link to={`/singlePage/${id}`}>
            <img src={image} alt={name} />
          </Link>
        </div>
        <div className="cart__info">
          <div className="cart__amount">
            <p>{name}</p>
            <p>{category}</p>
            <div>
              <AiOutlineMinusCircle
                className="arrow"
                onClick={() => dispatch(decreaseAmount(id))}
              />
              <p>
                {toggleLang ? "잔" : "amount"} : {quantity}
              </p>
              <AiOutlinePlusCircle
                className="arrow"
                onClick={() => dispatch(increaseAmount(id))}
              />
            </div>
          </div>
        </div>
        <div className="cart__price__btn">
          <div>
            <p>
              {toggleLang ? `${priceKr * quantity}원` : `$${price * quantity}`}
            </p>
          </div>
          <div>
            <button
              onClick={() => dispatch(deleteCartItem(id))}
              className="btn btn__delete"
            >
              <BsTrash />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
 border: 25px solid transparent;
    border-image: url("https://media-cdn.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/accounts/media/TBBjpsToRMaQp7vLG6Ty_border-image-white-decor.png")
      100 round;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  width: 60vw;
  .cart__container {
    gap: 25px;
    display:flex;
    width: 100%;
    .cart__image { 
      display: flex;
      align-items:center;
      flex:0.5;
    img {
    width: 150px;
    height: 150px; 
    transition: all 0.5s ease;
    overflow: hidden;
    &:hover {
        border-radius:20px;
      }
       }
  }
    .cart__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap:10px;
      font-size: 1.5rem;
      flex:2;
    }
    .cart__amount {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 15px;
      div {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .arrow {
        cursor: pointer;
        display: flex;
        color:#fff;
        background-color: transparent;
        border-radius: 50%;
        font-size:2rem;
        &:hover {
          transition: all 0.2s linear;
          background-color: #fff;
         border: 1px solid #fff;
         color:#000;
        }
      }
    }
    .cart__price__btn {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      justify-content: center;
      align-items: center;
      flex:1.5;
      p{
        text-align: center;
        font-size: 2rem;
      }
    }
  }
  .btn {
    font-size: 20px;
    padding: 5px;
  }
  .btn__delete {
    display:flex;
    justify-content: center;
    transition: all 0.2s linear;
      background-color: transparent;
      border: 1px solid #fff;
      &:hover {
        background-color: #b32614;
        border: 1px solid #b32614;
        border-radius: 10px;
      }
  }
  @media screen and (max-width: 1024px) { 
    width: 80vw;
    .cart__container  {
      .cart__price__btn {
        p {
          font-size: 1.5rem;
        }
        }
       }
  }
  @media screen and (max-width: 1015px) {
    width: 65vw;
    .cart__container  {
      .cart__price__btn {
     gap:1.5rem;
    }
    }
  }
  @media screen and (max-width: 932px) {
    width: 90vw;
    .cart__container  {
        .cart__amount {
           p {
             font-size:1.3rem;
           }
         }
    }
  }
  @media screen and (max-width: 737px) {
    img {
      display: block;
      width: 120px;
      height: 120px;
    }
    .cart__info {
      width: 100% 
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 612px) {
    width: 92vw;
    .cart__container  {
        .cart__amount {
           p {
             font-size:1.1rem;
           }
         }
    }
  }
  @media screen and (max-width: 591px) {
    width: 60vw;
    .cart__container  {
      flex-direction: column;
      .cart__image {
        display: flex;
        align-items: center;
        justify-content: center;
      }
        .cart__amount {
           p {
             font-size:1.1rem;
           }
         }
    }
  }
  @media screen and (max-width: 377px) {
    width: 90vw;
    .cart__container  {
      flex-direction: column;
      .cart__image {
        display: flex;
        align-items: center;
        justify-content: center;
      }
        .cart__amount {
           p {
             font-size:1.1rem;
           }
         }
    }
  }
  @media screen and (max-width: 325px) {
    width: 90vw;
    .cart__container  {
     .cart__price__btn {
       div {
         p {
           font-size: 1.6rem;
         }
       }
     }
  }
`;
export default MyCartItem;
