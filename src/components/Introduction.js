import React, { useEffect } from "react";
import Aos from "aos";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Loading, FetchError } from "./index";
function CockTail() {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  const { loading, error, toggleLang } = useSelector((state) => state.liquor);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError />;
  }

  return (
    <Wrapper>
      <div
        className="grid__container max-min__60 margin-left-move"
        data-aos="fade-right"
      >
        <div>
          <h2>{toggleLang ? "루시아 역삼점" : "Lucia CA"}</h2>
          <p>
            <strong>
              {toggleLang
                ? "루시아는 실내주점입니다 ."
                : "Lucia is open for Indoor Dining."}
            </strong>
          </p>
          <p>
            <strong>
              {toggleLang
                ? "예약받고 있습니다 ! 카트에 메뉴를 담으시고 예약을 해주세요 , 파티룸, 이벤트룸만 가능합니다!"
                : "Reservations are accepted. get your menu in the cart and make a reservation please. you can only reserve party and event rooms"}
            </strong>
          </p>
          <p>
            <strong>
              {toggleLang
                ? "일반석은 먼저오신분께 먼저 자리를 드리는것을 원칙으로 하고있습니다."
                : "Seating is on a a first come,first served basis."}
            </strong>
          </p>
          <p>
            <strong>Open Daily:</strong> 6pm - 1am
          </p>
          <p>
            {toggleLang
              ? " 8명까지 파티룸에 입장하실 수 있습니다."
              : "We can accommodate parties of up to 8 people."}
          </p>
          <p>
            {toggleLang
              ? "백신패스는 필수입니다."
              : "Proof of vaccination is required."}
          </p>
        </div>
        <img
          src="https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg"
          alt="alcohol"
        />
      </div>
      <div
        className="grid__container max-min__60 margin-right-move"
        data-aos="fade-left"
      >
        <div>
          <img
            className="coffee__image"
            src="https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg"
            alt="coffee"
          />
        </div>
        <div>
          <h2>{toggleLang ? "루시아 신림점" : "Lucia LA"}</h2>
          <p>
            {toggleLang
              ? "루시아 커피바는 먼저오시는분께 먼저 자리가 배정됩니다!"
              : "Lucia CA AND COFFEE BAR OPERATE ON A FIRST COME, FIRST SERVED BASIS"}
          </p>
          <p>
            <strong>Coffee Bar:</strong>
            {toggleLang
              ? "  아침 & 점심 - 7am - 2pm 목-금 , 매일오픈 , 일요일은 5시 오픈"
              : "Breakfast & Lunch - 7am - 2pm daily Open Thursday - Sunday at 5pm."}
          </p>
          <p>
            <strong>Kitchen:</strong>{" "}
            {toggleLang
              ? " 4pm - 10pm , 목,금,토는 11pm"
              : "4pm - 10pm, 11pm on Thursday, Friday & Saturday"}
          </p>
          <p>
            <strong>
              {toggleLang ? "15% 할인 이벤트중!" : "15% DISCOUNT EVENT"}
            </strong>
            {toggleLang
              ? " 2022년도 3월까지 커피 15% 할인 이벤트중입니다!"
              : "COFFIE IS DISCOUTED FOR 15% UNTIL 03/2022! HURRY UP!"}
          </p>
          <p>
            {toggleLang
              ? "7-10명인원 파티룸을 예약하실분들은 qusghdus12345@gmail.com으로 연락주세요 - 10명부터는 이벤트룸을 예약하셔야 합니다."
              : "For parties of 7-10 please inquire at qusghdus12345@gmail.com - all parties of more than 10 guests are considered an Event"}
          </p>
        </div>
      </div>
      <div
        className="grid__container max-min__60 margin-left-move"
        data-aos="fade-right"
      >
        <div>
          <h2>{toggleLang ? "루시아 도곡점" : "Lucia NYC"}</h2>
          <p>
            {toggleLang
              ? "루시아는 실내주점입니다."
              : "Lucia is open for Indoor Dining."}
          </p>
          <p>
            {toggleLang
              ? "일반석은 예약을 받지않고있습니다 . 먼저오신분께 자리를 먼저 배정해 드려요."
              : " Table reservations are not accepted. Seating is on a a first come, first served basis."}
          </p>
          <p>
            <strong>Open Daily:</strong> 6pm - 1am
          </p>
          <p>
            {toggleLang
              ? "8명이상부터는 파티룸을 예약하셔야 합니다."
              : "We can accommodate parties of up to 8 people."}
          </p>
          <p>
            {toggleLang
              ? "백신패스는 필수입니다."
              : "Proof of vaccination is required."}
          </p>
        </div>
        <img
          src="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"
          alt="alcohol"
        />
      </div>
      <div
        className="grid__container max-min__60 margin-right-move last"
        data-aos="fade-left"
      >
        <img
          src="https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg"
          alt="alcohol"
        />
        <div>
          <h2>{toggleLang ? "루시아 선릉점" : "Lucia Chicago,IL"}</h2>
          <p>
            {toggleLang
              ? "루시아는 실내주점입니다."
              : "Lucia is open for Indoor Dining."}
          </p>
          <p>
            {toggleLang
              ? "일반석은 예약을 받지않고있습니다 . 먼저오신분께 자리를 먼저 배정해 드려요."
              : " Table reservations are not accepted."}
          </p>
          <p>
            <strong>Open Daily:</strong> 6pm - 1am
          </p>
          <p>
            {toggleLang
              ? "8명이상부터는 파티룸을 예약하셔야 합니다."
              : "We can accommodate parties of up to 8 people."}
          </p>
          <p>
            {toggleLang
              ? "백신패스는 필수입니다."
              : "Proof of vaccination is required."}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  color: #fff;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .grid__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    border: 40px solid transparent;
    border-image: url("https://media-cdn.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/accounts/media/TBBjpsToRMaQp7vLG6Ty_border-image-white-decor.png")
      100 round;
    padding: 20px;
    margin-top: 40px;

    div,
    img {
      transition: all 0.4s ease;
      &:hover {
        transform: translateY(-9px);
      }
    }
    h2 {
      font-size: 2rem;
    }
    p {
      text-align: left;
      font-size: 1.4rem;
      margin-top: 10px;
    }
    strong {
      font-weight: bold;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .coffee__image {
      margin-top: 20%;
      width: 85%;
      height: 80%;
    }
  }
  .max-min__60 {
    min-width: 60%;
    max-width: 60%;
  }
  .margin-left-move {
    margin: 0 10%;
  }
  .margin-right-move {
    margin: 0 30%;
  }
  @media screen and (max-width: 1000px) {
    .grid__container {
      grid-template-columns: 1fr;
      .coffee__image {
        margin-top: 10%;
        width: 100%;
        height: 80%;
      }
    }
  }
  @media screen and (max-width: 591px) {
    .max-min__60 {
      min-width: 100%;
    }
    .margin-left-move {
      margin: 0;
    }
    .margin-right-move {
      margin: 0;
    }
  }
  @media screen and (max-width: 485px) {
    .grid__container {
      p {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 307px) {
    .grid__container {
      p {
        font-size: 1.1rem;
      }
      img {
        width: 110%;
        height: 110%;
      }
    }
  }
  @media screen and (max-width: 266px) {
    .grid__container {
      p {
        font-size: 1rem;
      }
      img {
        width: 110%;
        height: 110%;
      }
      .coffee__image {
        margin-top: 5%;
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 269px) {
    .grid__container {
      .coffee__image {
        margin-top: 5%;
        width: 90%;
        height: 90%;
      }
    }
  }
  @media screen and (max-width: 254px) {
    .grid__container {
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media screen and (max-width: 230px) {
    .grid__container {
      p {
        font-size: 0.8rem;
      }
      img {
        width: 90%;
        height: 90%;
        object-fit: cover;
        display: block;
      }
    }
  }
`;

export default CockTail;
