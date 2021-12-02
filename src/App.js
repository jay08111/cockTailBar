import React, { useEffect } from "react";
import styled from "styled-components";
import CockTail from "./cockTail";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/allStatesSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <main>
      <Nav>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          <h1>The Bar</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </Nav>
      <Header>
        <div className="header-img">
          <div className="header-box">
            <h1 className="header-p">
              Welcome to our <span>Bar</span>
            </h1>
          </div>
        </div>
      </Header>
      <Section>
        <CockTail />
      </Section>
    </main>
  );
}
const Nav = styled.nav`
  height: 8vh;
  background-color: #ffd8a8;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin: 0 4.5rem;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
  }
  svg {
    width: 40px;
    cursor: pointer;
  }
`;
const Header = styled.header`
  .header-box {
    background: rgba(255, 255, 255, 0.2);
    padding: 5rem;
    text-align: center;
  }
  .header-p {
    color: #000;
    padding: 5rem;
    border: 7px solid #ffc078;
    font-size: 2.8rem;
    text-transform: capitalize;
  }
  span {
    color: #ffc078;
  }
`;
const Section = styled.section`
  width: 90vw;
  margin: 2rem auto;
`;
export default App;
