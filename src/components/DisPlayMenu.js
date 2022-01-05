import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddButton } from "./index";
import { useDispatch } from "react-redux";
import { fetchSingleData } from "../redux/liquorSlice";
function DisPlayMenu({ name, image, description, id, price }) {
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);
  const { cart } = useSelector((state) => state.liquor);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Wrapper>
      <div className="menu__description">
        <div className="menu__description__inner">
          <h2>{name}</h2>
          <div className="menu__description__content">
            <p>{readMore ? description : `${description.slice(0, 40)}...`}</p>
            <p>price : ${price.item1}</p>
          </div>
          <div className="menu__description__button">
            <button className="des__btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "Read More"}
            </button>
          </div>
          <p className="vaccinated">*Proof of vaccination is required.</p>
        </div>
      </div>
      <div className="menu__image">
        <img src={image} alt={name} />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  max-width: 60%;
  min-width: 60%;
  padding: 0.9rem;
  margin: 3rem auto 3rem;
  display: flex;
  border: 40px solid transparent;
  border-image: url("https://media-cdn.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/accounts/media/TBBjpsToRMaQp7vLG6Ty_border-image-white-decor.png")
    100 round;
  gap: 20px;
  .menu__description {
    flex: 1.5;
    position: relative;
    .menu__description__inner {
      border-right: 2px solid #fff;
      height: 100%;
      .menu__description__content {
        max-width: 60%;
        text-align: left;
      }
      .menu__description__button {
        display: flex;
        flex-direction: column;
        gap: 10px;
        button {
          border: 1px solid #fff;
          background-color: transparent;
          padding: 10px;
          color: #fff;
          cursor: pointer;
          width: 100px;
          margin-top: 10px;
          transition: all 0.2s linear;
          &:hover {
            background-color: #fff;
            color: #000;
            border-radius: 4px;
          }
        }
      }
      .vaccinated {
        font-size: 0.8rem;
        font-weight: 300;
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
    h2 {
      color: #fff;
      font-size: 2rem;
      text-align: center;
      &:after {
        content: "";
        display: block;
        border: 0px solid #fff;
        width: 100%;
        margin-top: 3px;
      }
    }
    p {
      color: #fff;
      font-size: 1.3rem;
    }
  }
  .menu__image {
    flex: 1;
    img {
      width: 100%;
    }
  }
`;

export default DisPlayMenu;
