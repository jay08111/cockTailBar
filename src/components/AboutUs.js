import React from "react";
import styled from "styled-components";
function AboutUs() {
  return (
    <Wrapper>
      <h2>WELCOME TO LUCIA</h2>
      <div>
        <p>
          It was thought that to drink alcohol was to live a life shadowed by
          death; that those who drank were keeping company with death. It's
          taken us nearly a century to restore flavor to the drink and class to
          the specialty cocktail. In our time, a night to celebrate life's
          simple pleasures with fine wine, exquisitely crafted cocktails,
          beautifully prepared food, and impeccable sipping spirits is a rare
          gift.
        </p>
        <p>
          To those who shun the night, we tip our hat. To those who shine after
          dusk, we offer a warm embrace. Welcome to the new golden age. Welcome
          to Death & Co.
        </p>
        <p>
          Opened on New Year's Eve 2006/07 in Manhattan's East Village, Death &
          Co quickly became a cocktail institution, owed greatly to our staff of
          creative bartenders and incredible servers. Since then, we have
          evolved and changed; from an intimate bar in NYC to a sprawling
          cocktail lounge and restaurant in Denver. Our third installment in Los
          Angeles pays homage to NYC as it is an intimate seated only bar,
          paired this time with a more casual standing room only bar. Through
          this growth, we've maintained our commitment to fine product and
          exceptional experiences, a focus on hospitality, and a deep desire to
          be a center for our communities.
        </p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  text-align: center;
  padding: 1rem 3.5rem 2.5rem 3.5rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  div {
    p {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
  }
  h2 {
    font-size: 4rem;
    margin-bottom: 4.5rem;
  }
`;
export default AboutUs;
