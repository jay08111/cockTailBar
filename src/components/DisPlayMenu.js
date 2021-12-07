import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function DisPlayMenu({ name, image, description, id }) {
  const [read, setRead] = useState(false);
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <div className="description">
        <p className="des-p">
          {read ? description : `${description.substring(0, 20)}...`}
        </p>
        <button className="des-btn" onClick={() => setRead(!read)}>
          {read ? "Show Less" : "Read More"}
        </button>
      </div>
      <StyledLink to={`/singlePage/${id}`} className="btn">
        details
      </StyledLink>
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
  gap: 30px;
  .description {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  img {
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  text-align: center;
  padding: 0.9rem 0;
  background-color: #ffec99;
  font-size: 1.8rem;
  margin-top: 5rem;
`;

export default DisPlayMenu;
