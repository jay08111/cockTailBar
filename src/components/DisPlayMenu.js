import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowLess } from "../redux/cockTailSlice";
import styled from "styled-components";
function DisPlayMenu() {
  const { list, showLess } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {list.map((items) => {
        const {
          idDrink: id,
          strInstructions,
          strDrinkThumb: image,
          strCategory,
          strAlcoholic,
          strDrink: title,
        } = items;
        return (
          <div key={id} className="grid-container">
            <img src={image} alt={title} />
            <div className="description">
              <p className="des-p">
                {showLess
                  ? strInstructions
                  : `${strInstructions.substring(0, 15)}...`}
                <button
                  onClick={() => {
                    dispatch(setShowLess(!showLess));
                  }}
                  className="des-btn"
                >
                  {showLess ? "Show Less" : "Read More"}
                </button>
              </p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  margin-top: 4rem;
  .grid-container {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 10;
  }
  .description {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .grid img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  .des-p {
    padding: 1rem;
  }
  .des-btn {
    padding: 0.4rem 1.2rem;
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
`;

export default DisPlayMenu;
