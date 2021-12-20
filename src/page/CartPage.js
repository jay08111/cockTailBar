import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { NoItems, MyCartItem } from "../components/index";
import { deleteCartItemAll } from "../redux/liquorSlice";
function CartPage() {
  const { cart } = useSelector((state) => state.liquor);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  if (cart.length === 0) {
    return <NoItems />;
  }
  return (
    <Wrapper>
      <h1>My Cart</h1>
      <div className="cart__item">
        {cart.map((cartItem) => (
          <MyCartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <div className="btn-container">
        <button className="btn btn__book">예약하기!</button>
        {cart.length > 0 && (
          <button
            onClick={() => dispatch(deleteCartItemAll())}
            className="btn btn__delete__all"
          >
            delete all
          </button>
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  h1 {
    text-align: center;
    margin-top: 4rem;
    font-size: 2rem;
  }
  button {
    width: 6rem;
    padding: 10px;
  }
  .cart__item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .btn-container {
    display: flex;
    gap: 100px;
    .btn__book {
      background-color: #ffa153;
      &:hover {
        background-color: #ffefc1;
        color: #000;
      }
    }
    .btn__delete__all {
      background-color: #cd5c5c;
      &:hover {
        background-color: red;
      }
    }
  }
`;
export default CartPage;
