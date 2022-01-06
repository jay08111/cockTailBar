import React, { useEffect } from "react";
import Aos from "aos";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { DisPlayMenu, Loading, FetchError, Menu } from "./index";
function CockTail() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { loading, error } = useSelector((state) => state.liquor);
  const dispatch = useDispatch();

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
        data-aos="fade-left"
      >
        <div>
          <h2>Lucia CA</h2>
          <p>
            <strong>Lucia is open for Indoor Dining.</strong>
          </p>
          <p>
            <strong>Reservations are not accepted.</strong>
          </p>
          <p>
            <strong>Seating is on a a first come, first served basis.</strong>
          </p>
          <p>
            <strong>Open Daily:</strong> 6pm - 1am , We can accommodate parties
            of up to 8 people.
          </p>
          <p> Proof of vaccination is required.</p>
        </div>
        <img
          src="https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg"
          alt="alcohol"
        />
      </div>
      <div
        className="grid__container max-min__60 margin-right-move"
        data-aos="fade-up"
      >
        <div>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg"
            alt="alcohol"
          />
        </div>
        <div>
          <h2>Lucia CA</h2>
          <p>
            Lucia CA AND DC/AM COFFEE BAR OPERATE ON A FIRST COME, FIRST SERVED
            BASIS
          </p>
          <p>
            <strong> DC/AM Coffee Bar:</strong> Breakfast & Lunch - 7am - 2pm
            daily Open Thursday - Sunday at 5pm.
          </p>
          <p>
            <strong>Death & Co:</strong> 4pm - 12am, 1am on Thursday, Friday &
            Saturday
          </p>
          <p>
            <strong>Kitchen:</strong> 4pm - 10pm, 11pm on Thursday, Friday &
            Saturday
          </p>
          <p>
            <strong> Suite 6a: </strong>
            "Holiday Suite" is back in our mezzanine bar Suite 6a for the fall
            and winter 2021/2022 season.
          </p>
          <p>
            For parties of 7-10 please inquire at qusghdus12345@gmail.com - all
            parties of more than 10 guests are considered an Event
          </p>
        </div>
      </div>
      <div
        className="grid__container max-min__60 margin-left-move"
        data-aos="fade-right"
      >
        <div>
          <h2>Lucia CA</h2>
          <p>Lucia is open for Indoor Dining.</p>
          <p>
            Reservations are not accepted. Seating is on a a first come, first
            served basis.
          </p>
          <p>
            <strong>Open Daily:</strong> 6pm - 1am , We can accommodate parties
            of up to 8 people.
          </p>
          <p>Proof of vaccination is required.</p>
        </div>
        <img
          src="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"
          alt="alcohol"
        />
      </div>
      <div
        className="grid__container max-min__60 margin-right-move last"
        data-aos="fade-up"
      >
        <img
          src="https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg"
          alt="alcohol"
        />
        <div>
          <h2>Lucia CA</h2>
          <p>Lucia is open for Indoor Dining.</p>
          <p>Reservations are not accepted.</p>
          <p> Seating is on a a first come, first served basis.</p>
          <p>
            <strong>Open Daily:</strong> 6pm - 1am , We can accommodate parties
            of up to 8 people.
          </p>
          <p> Proof of vaccination is required.</p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
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
`;

export default CockTail;
