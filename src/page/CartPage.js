import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { NoItems, MyCartItem } from "../components/index";
import { deleteCartItemAll, countTotal } from "../redux/liquorSlice";
import { toast } from "react-toastify";
function CartPage() {
  const location = useLocation();
  const { cart, toggleLang, cartTotalEn, cartTotalKr } = useSelector(
    (state) => state.liquor
  );
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    dispatch(countTotal());
  }, [dispatch, cart]);
  if (cart.length === 0) {
    return <NoItems />;
  }
  return (
    <Wrapper className="about__us3">
      <h1>My Cart</h1>
      <section className="cart__item">
        {cart.map((cartItem) => (
          <MyCartItem key={cartItem.id} {...cartItem} />
        ))}
      </section>
      <div className="btn-container">
        {cart.length > 0 && (
          <div>
            <button
              onClick={() => dispatch(deleteCartItemAll())}
              className="btn btn__delete__all"
            >
              delete all
            </button>
            <StyledLink
              to="/"
              onClick={() => {
                dispatch(deleteCartItemAll());
                toggleLang
                  ? toast.success("예약 완료되었습니다!")
                  : toast.success("you made a reservation!");
              }}
            >
              reserve
            </StyledLink>
          </div>
        )}
        <div>
          <p>Total:</p>
          <p>{toggleLang ? `${cartTotalKr}원` : `$${cartTotalEn}`}</p>
        </div>
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

  h1 {
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
    margin-top: 30px;
    .btn__delete__all {
      transition: all 0.2s linear;
      background-color: transparent;
      border: 1px solid #fff;
      font-family: "Oswald", sans-serif;
      &:hover {
        background-color: #b32614;
        border: 1px solid #b32614;
        border-radius: 10px;
      }
    }
    div {
      display: flex;
      gap: 20px;
      p {
        color: #fff;
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 1015px) {
    .btn-container {
      width: 65vw;
    }
  }
  @media screen and (max-width: 963px) {
    .cart__item {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and (max-width: 932px) {
    .btn-container {
      width: 90vw;
    }
  }

  @media screen and (max-width: 590px) {
    .btn-container {
      flex-direction: column;
      align-items: center;
      width: 60vw;
    }
  }
  @media screen and (max-width: 377px) {
    .btn-container {
      flex-direction: column;
      align-items: center;
      width: 90vw;
    }
  }
`;
const StyledLink = styled(Link)`
  transition: all 0.2s linear;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 5px;
  width: 6rem;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-family: "Oswald", sans-serif;
  &:hover {
    border-radius: 4px;
    background-color: green;
    border: 1px solid green;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default CartPage;
