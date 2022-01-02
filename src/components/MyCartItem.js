import React, { useState } from "react";
import styled from "styled-components";
import { deleteCartItem } from "../redux/liquorSlice";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
function MyCartItem({ id, name, image, info }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const { cart } = useSelector((state) => state.liquor);
  const increaseAmount = (e, id) => {
    console.log(e.target.getAttribute("class"));
    const findIncId = cart.find((item) => item.id === id);
    if (findIncId) {
      setAmount(amount + 1);
    }
  };
  const decreaseAmount = (id) => {
    const findIncId = cart.find((item) => item.id === id);
    if (findIncId) {
      if (amount === 1) {
        dispatch(deleteCartItem(id));
      } else {
        setAmount(amount - 1);
      }
    }
  };
  return (
    <Wrapper className="cart__wrapper">
      <div className="cart__container">
        <Link to={`/singlePage/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <div className="cart__info">
          <p>{name}</p>
          <p>{info}</p>
          <div className="cart__amount">
            <div
              className="arrow arrow-down"
              onClick={() => decreaseAmount(id)}
            >
              <AiOutlineArrowLeft />
            </div>
            <p> 잔 : {amount}</p>
            <div>
              <AiOutlineArrowRight
                className="arrow arrow-up"
                onClick={(e) => increaseAmount(e, id)}
              />
            </div>
          </div>
          <button
            onClick={() => dispatch(deleteCartItem(id))}
            className="btn btn__delete"
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  width: auto;
  .cart__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .cart__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap:7px;
    }
    .cart__amount {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .arrow {
        cursor: pointer;
        display: flex;
      }
    }
  }
  img {
    display: block;
    width: 150px;
    height: 150px;
  }
  .btn {
    font-size: 20px;
    padding: 5px;
  }
  .btn__delete {
    display:flex;
    justify-content: center;
    background-color: #ff5966;
    &:hover {
      background-color: #dc143c;
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
