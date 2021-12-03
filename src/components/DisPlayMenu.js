import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function DisPlayMenu({ name, image, info, glass, description, id }) {
  const [read, setRead] = useState(false);
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <div className="description">
        <p className="des-p">
          {read ? description : `${description.substring(0, 15)}...`}
        </p>
        <button className="des-btn" onClick={() => setRead(!read)}>
          {read ? "Show Less" : "Read More"}
        </button>
      </div>
      <Link to={`/singlePage/${id}`}>single page</Link>
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

export default DisPlayMenu;
