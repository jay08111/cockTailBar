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
      {cart.map((cartItem) => (
        <MyCartItem key={cartItem.id} {...cartItem} />
      ))}
      <div className="underline"></div>
      <button>예약하기!</button>
      {cart.length > 0 && (
        <button onClick={() => dispatch(deleteCartItemAll())}>
          delete all
        </button>
      )}
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
