import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleData } from "../redux/liquorSlice";
import { Loading, FetchError } from "../components/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
function SingleCockTail() {
  const { singleLiquorList, loading, error } = useSelector(
    (state) => state.liquor
  );
  const { name, image, info, category, glass, instructions, ingredients } =
    singleLiquorList;
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleData(id));
  }, [dispatch, id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError />;
  }
  return (
    <Wrapper>
      <h1>{name}</h1>
      <div className="container">
        <img src={image} alt={name} className="container__img" />
        <div className="container__right">
          <p>Information :{info}</p>
          <p>Category: {category}</p>
          <p>Glass: {glass}</p>
          <p>Instructions: {instructions}</p>
          <div>
            <p>Ingredients:</p>
            {ingredients &&
              ingredients.map((item, index) => <p key={index}>{item}</p>)}
          </div>
          <div className="btn__container">
            <StyledLink to="/cartPage">back to cart</StyledLink>
            <StyledLink to="/menu">back to menu</StyledLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  min-height: 100vh;
  font-size: 32px;
  color:#fff;
     h1 {
    text-align: center;
    position: absolute;
    right:50%;
    top:10%;
    transform:translateX(50%);
  }
  .container {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    padding: 0 1rem;
    margin-top:3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .container__img {
      display: block;
      object-fit: cover;
      /* width: 37.5rem; */
      /* height: 660px; */
      width: 70%;
      height: auto;
      margin: 0 auto;
      border-radius: 10px;
    }
    .container__right {
      margin-left: 8rem;
      display: flex;
      flex-direction: column;
      justify-content:center;
      gap: 12.5px;
      p {
      line-height: 1.3;
      font-size: 1.4rem;
      margin-top:1.3rem;
    }
    }
    
    .btn__container {
      display:flex;
      width:40vw;
      justify-content:space-around;
      gap:10px;
      text-transform:capitalize;
    }
  }
  @media screen and (max-width: 1220px) {
    .container {
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 90%;
      height: auto;
      margin: 0 auto;
      .container__right {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 625px) {
    .container {
      .container__right {
        font-size: 1.7rem;
      }
    }
  }
  @media screen and (max-width: 554px) {
    .container {
      padding: 5rem 3rem;
      .container__right {
        font-size: 1.4rem;
        .link__btn {
          font-size: 1rem;
        }
      }
      }
    }
  }
  @media screen and (max-width: 420px) {
    .container {
      .container__right {
        font-size: 1.2rem;
        .link__btn {
          font-size: 0.8rem;
        }
      }
      }
    }
  }
  @media screen and (max-width: 360px) {
    .container {
      width: 100%;
      padding: 5rem 3rem;
      .container__right {
        font-size: 1.2rem;
        .link__btn {
          font-size: 0.3rem;
        }
      }
    }
  }
  @media screen and (max-width: 277px) {
    .container {
      .container__right {
        font-size: 0.9rem;
        .link__btn {
          font-size: 0.3rem;
        }
      }
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-align: center;
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    color: #b32614;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default SingleCockTail;
