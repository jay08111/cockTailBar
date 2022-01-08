import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { deleteCartItem } from "../redux/liquorSlice";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { setTotalAmount } from "../redux/liquorSlice";
function MyCartItem({
  id,
  name,
  image,
  category,
  price,
  priceKr,
  quantity,
  totalAmount,
}) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setTotalAmount());
  // }, []);
  const [amount, setAmount] = useState(quantity);
  const { cart, toggleLang } = useSelector((state) => state.liquor);
  const increaseAmount = (id) => {
    const findCartId = cart.find((item) => item.id === id);
    if (findCartId) {
      setAmount(amount + 1);
    }
  };
  const decreaseAmount = (id) => {
    const findCartId = cart.find((item) => item.id === id);
    if (findCartId) {
      if (amount === 1) {
        dispatch(deleteCartItem(id));
      } else {
        setAmount(amount - 1);
      }
    }
  };
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
                onClick={() => decreaseAmount(id)}
              />
              <p> 잔 : {amount}</p>
              <AiOutlinePlusCircle
                className="arrow"
                onClick={() => increaseAmount(id)}
              />
            </div>
          </div>
        </div>
        <div className="cart__price__btn">
          <div>
            <p>{toggleLang ? priceKr + "원" : "$" + price}</p>
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
const Wrapper = styled.div`
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
    display: grid;
    grid-template-columns: 0.5fr 2fr 1.5fr;
    width: 100%;
    .cart__image { 
      display: flex;
      align-items:center;
    img {
   
    width: 150px;
    height: 150px;
       }
  }
    .cart__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap:10px;
      font-size: 1.5rem;
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
`;
export default MyCartItem;
