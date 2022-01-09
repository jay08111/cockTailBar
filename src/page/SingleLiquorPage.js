import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleData } from "../redux/liquorSlice";
import { Loading, FetchError } from "../components/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
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
  SwiperCore.use([Navigation]);
  return (
    <Wrapper>
      <StyledSwiper
        navigation
        scrollbar={{ draggable: true }}
        allowTouchMove={false}
        touchRatio={0}
      >
        <SwiperSlide onClick={(e) => e.stopPropagation()}>
          <h1>{name}</h1>
          <p>
            <strong>Information : </strong> {info}
          </p>
          <p>Category: {category}</p>
          <p>Glass : {glass}</p>
          <p>Instructions : {instructions}</p>
          <div>
            Ingredients:
            {ingredients &&
              ingredients.map((item, index) => <p key={index}>{item}</p>)}
          </div>
          <div className="nav__btn">
            <StyledLink to="/cartPage">Go to Cart</StyledLink>
            <StyledLink to="/menu">Go to Menu</StyledLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1>{name}</h1>
          <img src={image} alt={name} />
        </SwiperSlide>
      </StyledSwiper>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  min-height: 100vh;
  font-size: 32px;
  color: #fff;
  display:flex;
  align-items: center;
  text-align: center;
  position: relative;
  .nav__btn{ 
    margin-top: 3rem;
    width: 30vw;
    display:flex;
    justify-content:space-between;
    position: absolute;
    right:50%;
    transform:translateX(50%);
    gap:30px;
  }
  }
`;
const StyledSwiper = styled(Swiper)`
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 1.5rem;
  }
  img {
    border-radius: 4px;
    width: 50vw;
    height: 60vh;
  }
  @media screen and (max-width: 704px) {
    p {
      font-size: 1.6rem;
    }
    .nav__btn {
      width: 50vw;
    }
  }
  @media screen and (max-width: 617px) {
    p {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 469px) {
    p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 356px) {
    .nav__btn {
      width: 50vw;
    }
  }
  @media screen and (max-width: 246px) {
    .nav__btn {
      width: 60vw;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid #fff;
  padding: 10px;
  color: #fff;
  text-align: center;
  transition: all 0.2s ease-in-out 0s;
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
    font-size: 0.7rem;
  }
`;
export default SingleCockTail;
