import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
      <h1>About {name}</h1>
      <article className="descriptions">
        <div className="descriptions__inner">
          <p>
            name : <span>{name}</span>
          </p>
          <p>
            information : <span>{info}</span>
          </p>
          <p>
            category : <span>{category}</span>
          </p>
          <p>
            glass : <span>{glass}</span>
          </p>
          <p>
            instructions : <span>{instructions}</span>
          </p>
          <p>
            ingredients :
            {ingredients &&
              ingredients.map((item, index) => (
                <span className="descriptions__ingredients" key={index}>
                  {item}
                </span>
              ))}
          </p>
        </div>
        <img src={image} alt={name} />
      </article>
      <div className="goBack__btns">
        <StyledLink to="/menu">Go to Menu</StyledLink>
        <StyledLink to="/cartPage">Go to Cart</StyledLink>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  min-height: 100vh;
  padding: 3rem 5rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 4rem;
  }
  .descriptions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    text-transform: capitalize;
    .descriptions__inner {
      flex: 1;
      margin-right: 50px;
      p {
        font-size: 1.5rem;
        line-height: 2;
      }
      span {
        margin-left: 10px;
      }
      .descriptions__ingredients {
        display: block;
        margin-left: 0px;
      }
    }
  }
  img {
    width: 250px;
    height: 520px;
    flex: 1;
    object-fit: contain;
  }
  .goBack__btns {
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 20vw;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 1500px) {
    .goBack__btns {
      width: 30vw;
    }
  }
  @media screen and (max-width: 1290px) {
    .goBack__btns {
      width: 40vw;
    }
  }
  @media screen and (max-width: 896px) {
    .descriptions {
      flex-direction: column;
    }
    img {
      width: 500px;
      margin-top: 30px;
    }
    .goBack__btns {
      width: 50vw;
    }
  }
  @media screen and (max-width: 622px) {
    img {
      width: 400px;
      margin-top: 30px;
    }
    .goBack__btns {
      width: 60vw;
    }
  }
  @media screen and (max-width: 441px) {
    img {
      width: 300px;
      margin-top: 30px;
    }
    .goBack__btns {
      width: 60vw;
    }
  }
  @media screen and (max-width: 406px) {
    h1 {
      font-size: 3rem;
    }
    img {
      width: 300px;
      margin-top: 30px;
    }
    .goBack__btns {
      width: 80vw;
    }
  }
  @media screen and (max-width: 350px) {
    h1 {
      font-size: 2.5rem;
    }
    .descriptions {
      .descriptions__inner {
        p {
          font-size: 1.2rem;
        }
      }
    }
    img {
      width: 300px;
      margin-top: 30px;
    }
    .goBack__btns {
      width: 80vw;
    }
  }
  @media screen and (max-width: 339px) {
    h1 {
      font-size: 2rem;
    }
    .descriptions {
      .descriptions__inner {
        p {
          font-size: 1.2rem;
        }
      }
    }
    img {
      width: 250px;
      margin-top: 30px;
    }
    .goBack__btns {
      width: 90vw;
    }
  }
  @media screen and (max-width: 290px) {
    h1 {
      font-size: 1.6rem;
    }
    .descriptions {
      .descriptions__inner {
        p {
          font-size: 1rem;
        }
      }
    }
    img {
      width: 230px;
      margin-top: 30px;
    }
    .goBack__btns {
      width: 85vw;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid #fff;
  padding: 20px;
  color: #fff;
  text-align: center;
  transition: all 0.2s ease-in-out 0s;
  font-size: 1.6rem;
  &:hover {
    color: #b32614;
    border-radius: 10px;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  @media screen and (max-width: 617px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 469px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 356px) {
    font-size: 0.9rem;
  }
`;
export default SingleCockTail;
