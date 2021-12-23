import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/liquorSlice";
import styled from "styled-components";
function AddButton({ id }) {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const { cart } = useSelector((state) => state.liquor);
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
        toast.success("예약목록에 추가 완료!");
      }}
    >
      {disable ? "in cart" : "add to cart"}
    </Button>
  );
}
const Button = styled.button`
  color: #000;
  border: none;
  text-align: center;
  padding: 0.9rem 0;
  background-color: #ffec99;
  font-size: 1.8rem;
  margin-top: auto;
  text-transform: capitalize;
  cursor: pointer;
  font-family: "Dosis", sans-serif;
`;
export default AddButton;
