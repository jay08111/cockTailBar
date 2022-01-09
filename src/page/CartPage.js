import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { NoItems, MyCartItem } from "../components/index";
import { deleteCartItemAll } from "../redux/liquorSlice";
import { setTotalAmount } from "../redux/liquorSlice";
function CartPage() {
  const location = useLocation();
  const { cart } = useSelector((state) => state.liquor);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  if (cart.length === 0) {
    return <NoItems />;
  }
  return (
    <Wrapper className="about__us3">
      <h2>My Cart</h2>
      <div className="cart__item">
        {cart.map((cartItem) => (
          <MyCartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <div className="btn-container">
        {/* {cart.length > 0 && (
          <button
            onClick={() => dispatch(deleteCartItemAll())}
            className="btn btn__delete__all"
          >
            delete all
          </button>
        )} */}
        <p>Total:</p>
        <p>100$</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  
  h2 {
    margin-top: 3rem;
    color: #fff;
    font-size: 4rem;
  }
  button {
    width: 6rem;
    padding: 10px;
  }
  .cart__item {
    gap: 20px;
    margin-top: 2rem;
    padding: 10px 0;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
    width: 60vw;
    padding: 0 0 5rem 0;
    .btn__book {
      transition: all 0.2s linear;
      background-color: transparent;
      border: 1px solid #fff;
      &:hover {
        background-color: #b32614;
        border: 1px solid #b32614;
        border-radius: 10px;
      }
    }
    .btn__delete__all {
      transition: all 0.2s linear;
      background-color: transparent;
      border: 1px solid #fff;
      &:hover {
        background-color: #b32614;
        border: 1px solid #b32614;
        border-radius: 10px;
    }
    }
    p {
      color: #fff;
      font-size: 2rem;
    }
  @media screen and (max-width: 963px) {
    .cart__item {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default CartPage;
