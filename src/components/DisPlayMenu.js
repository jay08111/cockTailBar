import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddButton } from "./index";
import { useDispatch } from "react-redux";
import { fetchSingleData } from "../redux/liquorSlice";
function DisPlayMenu({ name, image, description, id, price }) {
  const dispatch = useDispatch();
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
            <p>{description}</p>
          </div>
          <p className="menu__price">price : ${price.item1}</p>
          <div className="menu__description__button">
            <AddButton id={id} />
            <StyledLink to={`/singlePage/${id}`}>See More</StyledLink>
          </div>
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
    .menu__description__inner {
      border-right: 2px solid #fff;
      height: 100%;
      .menu__price {
        margin-top: 10px;
      }
      .menu__description__content {
        max-width: 60%;
        text-align: left;
      }
      .menu__description__button {
        display: flex;
        justify-content: center;
        gap: 10px;
        position: relative;
        button {
          border: 1px solid #fff;
          background-color: transparent;
          padding: 3px;
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
      font-size: 1.4rem;
    }
  }
  .menu__image {
    flex: 1;
    img {
      width: 100%;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  padding: 3px;
  color: #fff;
  cursor: pointer;
  width: 100px;
  margin-top: 10px;
  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fff;
    color: #000;
    border-radius: 4px;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default DisPlayMenu;
