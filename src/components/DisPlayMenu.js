import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addItemToCart } from "../redux/liquorSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function DisPlayMenu({ name, image, description, id }) {
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);
  const [disable, setDisable] = useState(false);
  const { cart } = useSelector((state) => state.liquor);
  const buttonRef = useRef();
  const disableButton = (e) => {
    setDisable(true);
    buttonRef.current.disabled = true;
  };
  return (
    <Wrapper>
      <Link to={`/singlePage/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="description">
        <p className="des__p">
          {readMore ? description : `${description.substring(0, 20)}...`}
        </p>
        <button className="des__btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </div>
      <button
        className="addItem"
        data-id={id}
        ref={buttonRef}
        onClick={(e) => {
          dispatch(addItemToCart(id));
          toast.success("예약목록에 추가 완료!");
          disableButton(e);
        }}
      >
        {disable ? "added already" : "add to cart"}
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .description {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  .des__p {
    padding: 1rem;
    line-height: 1.4;
  }
  .des__btn {
    padding: 0.4rem 1.2rem;
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
  .details {
    margin-top: auto;
    width: 100%;
  }
  .addItem {
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
  }
`;

export default DisPlayMenu;
