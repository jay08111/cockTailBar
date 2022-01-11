import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ReviewComment, InputField } from "../components/index";
import { useLocation } from "react-router-dom";
function Review() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { reviewList, toggleLang, reviewListKR } = useSelector(
    (state) => state.liquor
  );

  return (
    <Wrapper className="about__us2" $lang={toggleLang}>
      <h2>Customers Review</h2>
      <h3>what our customers think</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="review__grid">
          {toggleLang
            ? reviewListKR.map((reviews) => (
                <ReviewComment key={reviews.id} {...reviews} />
              ))
            : reviewList.map((reviews) => (
                <ReviewComment key={reviews.id} {...reviews} />
              ))}
        </div>
        <InputField />
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-height: 110vh;
  h2 {
    font-size: 4rem;
    margin-top: 3rem;
    color: #fff;
  }
  h3 {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    color: #b1b1b1;
    font-weight: 300;
  }
  .review__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    padding: 5rem;
    gap: 20px;
    width:80vw;
    margin-bottom: 1rem;
  }
 
  .review__inputField {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-end;
    margin-top: 2rem;
    input,textarea{
     font-family: ${(props) =>
       props.$lang ? "'Noto Sans KR', sans-serif" : "'Oswald', sans-serif"};
         }
     } 
    input {
      width: 50vw;
      min-height: 30px;
      padding: 5px;
    }
    input[type="text"]::placeholder {
      text-align: left;
    }
    input[type="text"],
    textarea[type="text"] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 20px;
    }
    textarea {
      resize: none;
      min-height: 60px;
      padding: 5px;
      width: 50vw;
    }
    textarea[type="text"]::placeholder {
      text-align: left;
    }
  }
  .review__btn__box {
    display: flex;
    justify-content: flex-end;
    .review__btn {
      background-color: transparent;
      padding: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      transition: all 0.5s;
      border: 1px solid #fff;
      width: 150px;
      font-size: 1rem;
      &:hover {
        color:#b32614;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .review__grid {
    grid-template-columns: repeat(3, 1fr);
  }
  }
  @media screen and (max-width: 1035px) {
    .review__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  }
  @media screen and (max-width: 693px) {
    .review__grid {
    grid-template-columns: repeat(1, 1fr);
  }
  }
  @media screen and (max-width: 575px) {
  h2 {
    font-size:3rem;
  }
  }
  @media screen and (max-width: 416px) {
  h2 {
    font-size:2.5rem;
  }
  h3 {
    font-size:1.4rem;
  }
  }
  @media screen and (max-width: 319px) {
  h2 {
    font-size:2rem;
  }
  h3 {
    font-size:1.4rem;
  }
  }
 
`;
export default Review;
