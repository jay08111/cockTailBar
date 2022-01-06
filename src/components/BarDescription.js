import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Aos from "aos";
function BarDescription() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { toggleLang } = useSelector((state) => state.liquor);
  const tock = <span>TOCK!</span>;
  return (
    <Wrapper>
      <div data-aos="fade-up">
        <h2>{toggleLang ? "운영 지침" : "Hours of Operations"}</h2>
        <div className="heading__3">
          <h3>
            {toggleLang
              ? "루시아는 실내 주점입니다."
              : "Lucia Nappa Valley is Open for Indoor Dining."}
          </h3>
          <h3>
            {toggleLang
              ? "예약은 받지않습니다 , 먼저 오신분께 먼저 배정해 드립니다."
              : "Reservations are not accepted. Seating is on a first come, first served basis."}
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
        <h3>
          {toggleLang
            ? "루시아에서는 커피도 판매하고 있습니다! 먼저 오시는분께 먼저 배정해 드려요."
            : "LUCIA COFFEE BAR ARE OPEN FOR INDOOR DINING! FIRST COME, FIRST SERVED."}
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
            : "if covid situation is incredibly getting worse , we can be closed early than usual with the CA gorvernmet's rule."}
        </p>
        <p>
          {toggleLang
            ? "서울시 코로나 확진자 증가로 마스크를 착용하셔야 입장가능하십니다 ! "
            : "FACE COVERINGS REQUIRED FOR ALL INDIVIDUALS per City and County of CA Public Health Order, issued November 24, 2021."}
        </p>
        <h3>
          {toggleLang
            ? "루시아에서 판매하는 커피 2022년도 3월까지 15% 할인됩니다!"
            : `ALL OF COFFIES ARE DISCOUTED FOR 15% 'TILL 03/2022`}
        </h3>
        <p>
          {toggleLang
            ? "테이블은 먼저오신분께 먼저 배정됩니다!"
            : "Tables are available for walk-ins on a first come, first served basis."}
        </p>
        <p>
          <strong>Sunday - Wednesday:</strong>6pm - 1am
        </p>
        <p>
          <strong>Thursday, Friday & Saturday: </strong>6pm - 2am
        </p>
        <p>
          {toggleLang
            ? "백신패스 필수로 지참하셔야 합니다."
            : "Proof of vaccination is required."}
        </p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  color: #fff;
  text-align: center;
  padding: 3rem 2rem 2.5rem;
  min-height: 90vh;
  margin: auto;
  max-width: 1160px;
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
  }
  h3 {
    margin-top: 20px;
    font-size: 2rem;
    font-weight: 300;
    span {
      color: #b32614;
    }
  }
  p {
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: 300;
    font-family: "EB Garamond", serif;
    .exception {
      margin-right: 0px;
    }
    strong {
      font-weight: bold;
      margin-right: 7px;
    }
  }
`;

export default BarDescription;
