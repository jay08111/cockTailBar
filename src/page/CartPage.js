import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NoItems, MyCartItem } from "../components/index";
function CartPage() {
  const { cart } = useSelector((state) => state.liquor);
  if (cart.length === 0) {
    return <NoItems />;
  }
  return (
    <Wrapper>
      <h1>My Cart</h1>
      {cart.map((cartItem) => (
        <MyCartItem key={cartItem.id} {...cartItem} />
      ))}
      <div className="underline"></div>
      <button>예약하기!</button>
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
    padding: 20px 20px;
  }
  .underline {
    height: 0.01rem;
    border: 1px solid #000;
    width: 90vw;
  }
`;
export default CartPage;
