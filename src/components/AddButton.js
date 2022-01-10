import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/liquorSlice";
import styled from "styled-components";
function AddButton({ id }) {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const { cart, toggleLang } = useSelector((state) => state.liquor);
  const buttonRef = useRef();
  useEffect(() => {
    const forbiddenDuplicates = (id) => {
      const cartItemsId = cart.map((cart) => cart.id);
      const compareIdToCartId = cartItemsId.find((item) => item === id);
      if (compareIdToCartId) {
        setDisable(true);
        buttonRef.current.disabled = true;
      }
    };
    forbiddenDuplicates(id);
  }, [cart, id]);
  return (
    <Button
      className={disable && "active"}
      ref={buttonRef}
      onClick={() => {
        dispatch(addItemToCart(id));
        toggleLang
          ? toast.success("카트에 담았습니다!")
          : toast.success("Add to Cart!");
      }}
    >
      {toggleLang
        ? disable
          ? "카트에 담김"
          : "카트에 담기"
        : disable
        ? "In Cart"
        : "Add to Cart"}
    </Button>
  );
}
const Button = styled.button`
  color: #000;
  border: none;
  text-align: center;
  padding: 0.9rem 0;
  background-color: #ffec99;
  font-size: 1.1rem;
  margin-top: auto;
  text-transform: capitalize;
  cursor: pointer;
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: 300px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 260px) {
    font-size: 0.8rem;
  }
`;
export default AddButton;
