import React from "react";
import styled from "styled-components";
import { deleteCartItem } from "../redux/liquorSlice";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
function MyCartItem({ id, amount, name, image, info }) {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="cart__container">
        <img src={image} alt={name} />
        <div className="cart__info">
          <p>{name}</p>
          <p>{info}</p>
          <p>amount : {amount}</p>
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
  width: 315px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  width: 40vw;
  .cart__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .cart__info {
      display: flex;
      flex-direction: column;
      align-items: center;
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
    background-color: #ff5966;
    &:hover {
      background-color: #dc143c;
    }
  }
`;
export default MyCartItem;
