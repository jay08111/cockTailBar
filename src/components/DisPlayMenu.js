import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddButton } from "./index";
function DisPlayMenu({ name, image, description, id }) {
  const [readMore, setReadMore] = useState(false);
  const { cart } = useSelector((state) => state.liquor);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
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
      <AddButton id={id} />
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
`;

export default DisPlayMenu;
