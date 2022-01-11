import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
function AboutUs() {
  const { toggleLang } = useSelector((state) => state.liquor);
  return (
    <Wrapper $lang={toggleLang}>
      <h1>WELCOME TO LUCIA</h1>
      <article className={toggleLang ? "bold" : undefined}>
        <p>
          {toggleLang
            ? "술을 마시는 것은 그늘진 삶을 사는 것이라고 생각했습니다. 술을 마시는 자는 죽음과 교제한다는 것입니다."
            : "It was thought that to drink alcohol was to live a life shadowed by death; that those who drank were keeping company with death."}
        </p>
        <p>
          {toggleLang
            ? "음료와 클래스의 풍미를 복원하는 데 거의 한 세기가 걸렸습니다."
            : "It's taken us nearly a century to restore flavor to the drink and class to the specialty cocktail."}
        </p>
        <p>
          {toggleLang
            ? "고급 와인, 정교하게 만들어진 칵테일, 아름답게 준비된 음식, 흠 잡을 데 없는 소주로 인생의 단순한 즐거움을 축하하는 밤은"
            : "In our time, a night to celebrate life's simple pleasures with fine wine, exquisitely crafted cocktails, beautifully prepared food, and impeccable sipping spirits is a rare gift."}
        </p>
        <p>
          {toggleLang
            ? "드문 기회입니다."
            : "and impeccable sipping spirits is a rare gift."}
        </p>
        <p>
          {toggleLang
            ? "밤을 기피하는 사람들에게 우리는 모자를 기울입니다. 황혼 뒤에 빛나는 이들에게 우리는 따뜻한 포옹을 제공합니다. "
            : " To those who shun the night, we tip our hat. To those who shine after dusk, we offer a warm embrace."}
        </p>
        <p>
          {toggleLang
            ? "새로운 황금 시대에 오신 것을 환영합니다. 루시아에 오신 것을 환영합니다."
            : "Welcome to the new golden age. Welcome to Lucia."}
        </p>
        <p>
          {toggleLang
            ? "2006/07년 새해 전야에 역삼동에서 문을 연 루시아는 창의적인 바텐더와 놀라운 서버로 구성된 직원 덕분에"
            : " Opened on New Year's Eve 2006/07 in California's East Village,"}
        </p>
        <p>
          {toggleLang
            ? "빠르게 칵테일 전문점으로 자리 잡았습니다."
            : "Lucia quickly became a cocktail institution, owed greatly to our staff of creative bartenders and incredible servers."}
        </p>
        <p>
          {toggleLang
            ? "그 이후로 우리는 진화하고 변화했습니다. 역삼동의 친밀한 바에서 신림동의 거대한 칵테일 라운지와 레스토랑까지 , "
            : " Since then, we have evolved and changed; from an intimate bar in NYC to a sprawling cocktail lounge and restaurant in Chicago."}
        </p>
        <p>
          {toggleLang
            ? "도곡동에서 세 번째로 선보이는 도곡점은 편안한 좌석 전용 바이며 이번에는 보다 캐주얼한 스탠딩 룸 전용 바와 짝을 이루었습니다."
            : "Our third installment in Los Angeles pays homage to NYC as it is an intimate seated only bar, paired this time with a more casual standing room only bar."}
        </p>
        <p>
          {toggleLang
            ? "이러한 성장을 통해 우리는 훌륭한 제품과 탁월한 경험에 대한 약속, 환대에 중점, 지역사회의 중심이 되고자 하는 깊은 열망을 유지해 왔습니다."
            : "Through this growth, we've maintained our commitment to fine product and exceptional experiences, a focus on hospitality, and a deep desire to be a center for our communities."}
        </p>
      </article>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  text-align: center;
  padding: 1rem 3.5rem 2.5rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  line-height: 1.5;
  article {
    p {
      margin-bottom: 1rem;
      font-size: 1.4rem;
      line-height: 1.3;
      font-family: ${(props) =>
        props.$lang ? "'Gowun Batang', serif" : "'EB Garamond', sans-serif"};
    }
  }
  .bold {
    p {
      font-weight: bold;
    }
  }
  h1 {
    font-size: 4rem;
    margin-top: 2rem;
    margin-bottom: 4.5rem;
    font-family: "Oswald", sans-serif !important;
  }
  @media screen and (max-width: 610px) {
    h1 {
      font-size: 3.6rem;
    }
  }
  @media screen and (max-width: 562px) {
    h1 {
      font-size: 3.4rem;
    }
  }
  @media screen and (max-width: 537px) {
    h1 {
      font-size: 3.2rem;
    }
  }
  @media screen and (max-width: 512px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 487px) {
    h1 {
      font-size: 2.4rem;
    }
  }
  @media screen and (max-width: 412px) {
    h1 {
      font-size: 2rem;
    }
    div {
      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 280px) {
    padding: 1rem 2rem 2.5rem;
    h1 {
      font-size: 2rem;
    }
  }
`;
export default AboutUs;
