import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import Aos from "aos";
function BarDescription() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { toggleLang } = useSelector((state) => state.liquor);
  return (
    <Wrapper>
      <GlobalStyle $lang={toggleLang} />
      <article data-aos="fade-up" className="fade-up">
        <h1>Lucia</h1>
        <h2>{toggleLang ? "운영 지침" : "Hours of Operations"}</h2>
        <div className="heading__3">
          <h3>
            {toggleLang
              ? "루시아는 실내 주점입니다."
              : "Lucia Nappa Valley is Open for Indoor Dining."}
          </h3>
          <h3 className="heading__event">
            {toggleLang
              ? "예약을 해주시면 친절히 도와드리겠습니다 ! , 이벤트룸 , 파티룸만 가능하십니다."
              : "Reservations are accepted only for event , party rooms."}
          </h3>
        </div>
        <p>
          <strong>Open Daily:</strong>
          6pm - 1am
        </p>
        <p>
          {toggleLang
            ? "파티룸 , 이벤트룸은 8명이상부터 수용가능합니다."
            : "We can accommodate parties of up to 8 people."}
        </p>
        <p>
          {toggleLang
            ? "백신패스 필수로 지참하셔야 합니다."
            : "Proof of vaccination is required."}
        </p>
        <h3 className="red">
          {toggleLang
            ? "루시아에서는 커피도 판매하고 있습니다!"
            : "LUCIA COFFEE BAR ARE OPEN FOR INDOOR DINING!."}
        </h3>
        <p>
          <strong>Coffee Bar:</strong>
          Breakfast & Lunch - 7am - 2pm daily
        </p>
        <p>
          <strong>Bar Event:</strong>4pm - 12am, 1am
          {toggleLang ? " 목 , 금 & 토요일" : "on Thursday,Friday & Saturday"}
        </p>
        <p>
          <strong>Kitchen:</strong>5pm - 10pm, 11pm
          {toggleLang ? " 목 , 금 & 토요일" : "on Thursday,Friday & Saturday"}
        </p>
        <p>
          {toggleLang
            ? "코로나 확진자 증가시 서울특별시 정책으로 조기 마감될 수 있습니다 ."
            : "if the covid situation gets worse , we may close earlier than usual with the CA Government's restriction."}
        </p>
        <p>
          {toggleLang
            ? "서울시 코로나 확진자 증가로 마스크를 착용하셔야 입장가능하십니다 ! "
            : "FACE COVERINGS REQUIRED FOR ALL INDIVIDUALS per City and County of CA Public Health Order, issued November 24, 2021."}
        </p>
        <h3 className="red">
          {toggleLang
            ? "루시아에서 판매하는 커피 2022년도 3월까지 15% 할인됩니다!"
            : `COFFIE IS DISCOUNTED FOR 15% UNTIL 03/2022`}
        </h3>
        <p>
          {toggleLang
            ? "일반석은 먼저오신분께 먼저 배정됩니다!"
            : "Tables are available for walk-ins on a first come, first served basis."}
        </p>
        <p>
          <strong>Sunday - Wednesday:</strong>6pm - 1am
        </p>
        <p>
          <strong>Thursday, Friday & Saturday: </strong>6pm - 2am
        </p>
        <p className="red">
          {toggleLang
            ? "백신패스 필수로 지참하셔야 합니다."
            : "Proof of vaccination is required."}
        </p>
      </article>
    </Wrapper>
  );
}
const GlobalStyle = createGlobalStyle`
 .fade-up > p {
  font-family: ${(props) =>
    props.$lang ? "'Noto Sans KR', sans-serif" : "'EB Garamond', sans-serif"};
 }
`;
const Wrapper = styled.section`
  color: #fff;
  text-align: center;
  padding: 3rem 2rem 2.5rem;
  min-height: 90vh;
  margin: auto;
  max-width: 1160px;
  h1 {
    visibility: hidden;
    height: 0;
  }
  .red {
    color: #b32614;
  }
  h2 {
    font-size: 4rem;
    letter-spacing: normal;
    margin-bottom: 1.2rem;
    &:after {
      content: "";
      display: block;
      border-bottom: 1px dotted #fff;
      width: 100%;
      height: 5px;
      margin-bottom: 10px;
    }
  }
  .heading__3 {
    margin-top: 0;
    .heading__event {
      font-size: 1.9rem;
    }
  }
  h3 {
    margin-top: 20px;
    font-size: 2rem;
    font-weight: 300;
  }
  p {
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: 300;
    .exception {
      margin-right: 0px;
    }
    strong {
      font-weight: bold;
      margin-right: 7px;
    }
  }
  @media screen and (max-width: 586px) {
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 446px) {
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.7rem;
    }
  }
  @media screen and (max-width: 390px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 325px) {
    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 273px) {
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 246px) {
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export default BarDescription;
