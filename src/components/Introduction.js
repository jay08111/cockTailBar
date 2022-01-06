import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { DisPlayMenu, Loading, FetchError, Menu } from "./index";
function CockTail() {
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
      <div className="grid__container max-min__60 margin-left-move">
        <div>
          <h2> Lucia CA</h2>
          <p>
            Lucia is open for Indoor Dining. Reservations are not accepted.
            Seating is on a a first come, first served basis. Open Daily: 6pm -
            1am We can accommodate parties of up to 8 people. Proof of
            vaccination is required.
          </p>
        </div>
        <img
          src="https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg"
          alt="alcohol"
        />
      </div>
      <div className="grid__container max-min__60 margin-right-move">
        <div>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg"
            alt="alcohol"
          />
          <div className="grid__container__bar"></div>
        </div>
        <div>
          <h2> Lucia CA</h2>
          <p>
            DEATH & CO DENVER AND DC/AM COFFEE BAR OPERATE ON A FIRST COME,
            FIRST SERVED BASIS. DC/AM Coffee Bar: Breakfast & Lunch - 7am - 2pm
            daily Death & Co: 4pm - 12am, 1am on Thursday, Friday & Saturday
            Kitchen: 4pm - 10pm, 11pm on Thursday, Friday & Saturday Suite 6a:
            "Holiday Suite" is back in our mezzanine bar Suite 6a for the fall
            and winter 2021/2022 season. Open Thursday - Sunday at 5pm. FACE
            COVERINGS REQUIRED FOR ALL INDIVIDUALS per City and County of Denver
            Public Health Order, issued November 24, 2021. For parties of 7-10
            please inquire at denver@deathandcompany.com - all parties of more
            than 10 guests are considered an Event - please fill out an event
            inquiry form here.
          </p>
        </div>
      </div>
      <div className="grid__container max-min__60 margin-left-move">
        <div>
          <h2> Lucia CA</h2>
          <p>
            Lucia is open for Indoor Dining. Reservations are not accepted.
            Seating is on a a first come, first served basis. Open Daily: 6pm -
            1am We can accommodate parties of up to 8 people. Proof of
            vaccination is required.
          </p>
        </div>
        <img
          src="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"
          alt="alcohol"
        />
      </div>
      <div className="grid__container max-min__60 margin-right-move last">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg"
          alt="alcohol"
        />
        <div>
          <h2> Lucia CA</h2>
          <p>
            Lucia is open for Indoor Dining. Reservations are not accepted.
            Seating is on a a first come, first served basis. Open Daily: 6pm -
            1am We can accommodate parties of up to 8 people. Proof of
            vaccination is required.
          </p>
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
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  .grid__container__bar {
    border-right: 10px solid #fff;
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
