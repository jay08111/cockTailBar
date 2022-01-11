import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddButton } from "./index";
function DisPlayMenu({
  name,
  image,
  description,
  id,
  price,
  priceKr,
  descriptionKR,
}) {
  const { cart, toggleLang } = useSelector((state) => state.liquor);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <Wrapper $lang={toggleLang}>
      <div className="menu__description">
        <div className="menu__description__inner">
          <h2>{name}</h2>
          <div className="menu__description__content">
            <p>{toggleLang ? descriptionKR : description}</p>
          </div>
          <p className="menu__price">
            {toggleLang ? "가격" : "price"} :
            {toggleLang ? priceKr + "원" : "$" + price}
          </p>
          <div className="menu__description__button">
            <AddButton id={id} />
            <StyledLink to={`/singlePage/${id}`} $lang={toggleLang}>
              {toggleLang ? "더 보기" : "See More"}
            </StyledLink>
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
  font-family: ${(props) =>
    props.$lang ? "'Noto Sans KR', sans-serif" : "'EB Garamond', sans-serif"};
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
        font-color: #fff;
        font-size: 1.8rem;
      }
      .menu__description__content {
        max-width: 95vw;
        margin: 0 1rem 0 0;
        p {
          font-size: 1.4rem;
        }
      }
      .menu__description__button {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        gap: 2.2rem;
        position: relative;
        button {
          border: 1px solid #fff;
          background-color: transparent;
          color: #fff;
          cursor: pointer;
          width: 100px;
          margin-top: 10px;
          transition: all 0.2s linear;
          &:hover {
            background-color: #fff;
            color: #000;
            border-radius: 9px;
          }
        }
      }
    }
    h2 {
      color: #fff;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1.2rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 1156px) {
    .menu__image {
      img {
        width: 100%;
        height: 90%;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .menu__image {
      img {
        width: 100%;
        height: 80%;
      }
    }
  }
  @media screen and (max-width: 986px) {
    max-width: 70%;
    min-width: 70%;
    .menu__image {
      img {
        width: 100%;
        height: 95%;
      }
    }
  }
  @media screen and (max-width: 824px) {
    .menu__description {
      h2 {
        font-size: 1.8rem;
      }
      .menu__description__inner {
        .menu__price {
          font-size: 1.5rem;
        }
        .menu__description__content {
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
    .menu__image {
      img {
        width: 100%;
        margin-left: 20px;
        display: block;
      }
    }
  }
  @media screen and (max-width: 793px) {
    max-width: 90%;
    min-width: 90%;
    flex-direction: column;
    .menu__description {
      h2 {
        font-size: 1.8rem;
      }
      .menu__description__inner {
        border-right: 0px;
        .menu__description__content {
          p {
            font-size: 1.4rem;
          }
        }
      }
    }
    .menu__image {
      img {
        width: 60%;
        margin-left: 0;
      }
    }
  }
  @media screen and (max-width: 664px) {
    max-width: 100%;
    min-width: 100%;
    .menu__description {
      h2 {
        font-size: 1.5rem;
      }
      .menu__description__inner {
        .menu__description__content {
          p {
            font-size: 1.3rem;
          }
        }
      }
    }
    .menu__image {
      img {
        width: 80%;
        height: 95%;
      }
    }
  }
  @media screen and (max-width: 361px) {
    .menu__description {
      .menu__description__inner {
        .menu__description__content {
          p {
            font-size: 1.1rem;
          }
        }
      }
    }
    .menu__image {
      img {
        width: 100%;
        height: 95%;
      }
    }
  }
  @media screen and (max-width: 300px) {
    max-width: 80%;
    min-width: 80%;
    .menu__description {
      h2 {
        font-size: 1.5rem;
      }
      .menu__description__content {
        p {
          font-size: 1.2rem;
        }
      }
      .menu__description__button {
        font-size: 0.8rem;
      }
    }
    .menu__image {
      img {
        width: 100%;
        height: 95%;
      }
    }
  }
  @media screen and (max-width: 260px) {
    max-width: 70%;
    min-width: 70%;
    .menu__description {
      h2 {
        font-size: 1rem;
      }
      .menu__description__inner {
        .menu__description__content {
          p {
            font-size: 1rem;
          }
        }
        .menu__price {
          font-size: 0.8rem;
        }
      }
      .menu__description__button {
        font-size: 0.8rem;
      }
    }
    .menu__image {
      img {
        width: 100%;
        height: 95%;
      }
    }
  }
`;
const StyledLink = styled(Link)`
  font-family: ${(props) =>
    props.$lang ? "'Noto Sans KR', sans-serif" : "'Oswald', sans-serif"};
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
  @media screen and (max-width: 300px) {
    padding: 4px;
  }
  @media screen and (max-width: 260px) {
    padding: 8px;
    font-size: 0.7rem;
    display: block;
    text-align: center;
  }
`;

export default DisPlayMenu;
