import React from "react";
import styled from "styled-components";
function BarDescription() {
  return (
    <Wrapper>
      <div>
        <h2>Hours of Operations</h2>
        <div className="heading__3">
          <h3>Lucia Nappa Valley is Open for Indoor Dining.</h3>
          <h3>
            Reservations are not accepted. Seating is on a first come, first
            served basis.
          </h3>
        </div>
        <p>
          <strong>Open Daily:</strong>
          6pm - 1am
        </p>
        <p>We can accommodate parties of up to 8 people. </p>
        <p>Proof of vaccination is required.</p>
        <h3>
          LUCIA COFFEE BAR ARE OPEN FOR INDOOR DINING! FIRST COME, FIRST SERVED.
        </h3>
        <p>
          <strong>DC/AM Coffee Bar:</strong>
          Breakfast & Lunch - 7am - 2pm daily
        </p>
        <p>
          <strong>Death & Co:</strong>4pm - 12am, 1am on Thursday, Friday &
          Saturday
        </p>
        <p>
          <strong>Kitchen:</strong>5pm - 10pm, 11pm on Thursday, Friday &
          Saturday
        </p>
        <p>
          Suite 6a: "<strong className="exception">Holiday Suite</strong>" is
          back in our mezzanine bar Suite 6a for the fall and winter 2021/2022
          season. Open Thursday - Sunday at 5pm.
        </p>
        <p>
          FACE COVERINGS REQUIRED FOR ALL INDIVIDUALS per City and County of CA
          Public Health Order, issued November 24, 2021.
        </p>
        <h3>
          LUCIA CA IS OPEN FOR INDOOR DINING! VISIT <span>TOCK</span> FOR
          RESERVATIONS.
        </h3>
        <p>
          Tables are available for walk-ins on a first come, first served basis.
        </p>
        <p>
          <strong>Sunday - Wednesday:</strong>6pm - 1am
        </p>
        <p>
          <strong>Thursday, Friday & Saturday: </strong>6pm - 2am
        </p>
        <p>Proof of vaccination is required.</p>
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
