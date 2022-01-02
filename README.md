  <div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jay08111/cockTailBar.git">
    <img src="/src/pictures/TheBar.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">The Bar</h3>

  <p align="center">
    바에서 각종 메뉴를 확인하고 , 리뷰를 달수있고 , 예약을 할수있는 사이트입니다 .
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
 <li><a href="#git-flow">git-flow</a></li>
    <li><a href="#description">Description</a></li>
    <li><a href="#contact">Contact</a></li>
   <li><a href="#url">project URL</a></li> 
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
  
</div>
<p>외부 API를 사용하여 각 항목을 렌더링 , 데이터를 사용 용도에 맞게 sorting , 등등 기본작업과 ,
반응형작업을 하였습니다 . </p>
<p>git flow 방식을 채택하여 진행하였습니다 .</p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Styled-Component](https://styled-components.com/)
- [Redux-toolkit](https://redux-toolkit.js.org/)
- [React-Router v6](https://reactrouter.com/)
- [Axios](https://axios-http.com/docs/intro)
- [React-icons](https://react-icons.github.io/react-icons/)
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [React-loader-spinner](https://openbase.com/js/react-loader-spinner/documentation)
- [nanoid](https://openbase.com/js/nanoid/documentation)
- [Netlify](https://www.netlify.com/)
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

프로젝트 실행방법

- yarn

  ```sh
  npm install --global yarn
  ```

  ```
  yarn start
  ```

### Installation

1. API [cockTailDB](https://www.thecocktaildb.com/api.php)
2. Clone the repo
   ```sh
   git clone https://github.com/jay08111/cockTailBar.git
   ```
3. Install yarn packages
   ```sh
   yarn install
   ```
   <p align="right">(<a href="#top">back to top</a>)</p>

## git-flow

<p>git-flow는 git branch 전략 중 하나입니다 .</p>
<p>여러 기업에서 채택해서 사용하고있는것을 보았고 , 지금은 비록 혼자 작업하고있지만 , 협업을 한다는 가정하에 저또한 이런 전략을 채택해서 사용하였습니다 .</p>
<p>Git-flow를 사용했을 때 작업을 어떻게 하는지 살펴보기 전에 먼저 Git-flow에 대해서 간단히 살펴보겠습니다.</p>
<p>Git-flow에는 5가지 종류의 브랜치가 존재합니다. 항상 유지되는 메인 브랜치들(master, develop)과 일정 기간 동안만 유지되는 보조 브랜치들(feature, release, hotfix)이 있습니다.</p>
<ul>
<li>master : 제품으로 출시될 수 있는 브랜치</li>
<li>develop : 다음 출시 버전을 개발하는 브랜치</li>
<li>feature : 기능을 개발하는 브랜치</li>
<li>release : 이번 출시 버전을 준비하는 브랜치</li>
<li>hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치</li>
</ul>

<p>저 같은경우엔 여기서 develop브렌치만 따로 쳐서 거기서 작업하고 main(master)로 merge 하는 방식으로 작업을 하였습니다 .</p>

## Description

전반적인 코드의 내용을 해석하고 , 제가 왜 이렇게 작성하였는지 , 어떤 문제들을 겪고 어떻게 해결하였는지 서술 해보도록 하겠습니다 .

제가 사용한 핵심 기술 목록은

<ol>
<li>React ^17.0.2</li> 
 facebook의 라이브러리인 React를 이용해서 개발 진행 하였습니다 . (Javascript)
<li>Router ^6</li> 
 Router에서 대대적인 업데이트를 진행해서, 기존에 작성하던 코드 , Router에서 제공하던 각종 메소드들의 변화가 조금 있었습니다 .
<li>Redux toolkit ^1.6.2</li> 
state를 관리하기 위해서 redux를 사용했고 , redux를 더 편리하게 사용하기 위해 toolkit을 사용하였습니다.
<li>styled-components ^5.3.3</li> 
 각 컴포넌트마다 css모듈화를 통해서 더욱더 정비성이 용이한 css를 작성하기 위해서 styled-components를 사 
 용했습니다 .
<li>axios ^0.24.0</li> 
axios를 활용해 비동기로 data를 fetch 했습니다 .
</ol>

제가 구현한 기능들에는

<ol>
<li>기본적인 routing</li>
<li>각 아이템들의 사진 , description에 대한 더보기 기능</li>
<li>아이템들이 많아서 아이템들을 한페이지에 8개씩만 보여주고 페이지를 넘겨 다음 아이템들을 볼수 있는 pagination 기능</li>
<li>각 아이템들의 카테고리 별로 필터링 기능</li>
<li>각 아이템들을 카트에 담을 수 있음</li>
<li>바에대한 댓글 추가 기능 , 아이디와 코멘트를 등록해야 등록이 됌</li>
<li>댓글 삭제와 댓글 좋아요 기능</li>
<li>댓글이 아무것도 없다면 댓글이 달리지 않았다는 컴포넌트를 렌더링</li>
<li>카트에 담긴 목록을 지우기 , 한번에 모든 아이템 지우기</li>
<li>카트의 정보를 localStorage에 담아서 저장</li>
<li>카트의 아이템 수량 조절 가능</li>
</ol>

#### Router

```
index.js

import React from "react";
import App from "./App";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/singlePage/:id" element={<SingleLiquorPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
```

기존 Router에서는 App.js 에서

```
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/cartPage">
          <CartPage/>
        </Route>
        <Route exact path="/singlePage/:id" children={<SingleLiquorPage />} />
        <Route exact path="/review">
          <ReviewPage />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
```

<p>이런식으로 switch를 사용해서 routing을 하였었는데 , 편하게 업데이트가 된것 같습니다 .</p>
<p>또한 index.js , react의 가장 최상단층 부모에서 바로 routing을 할 수 있게 업데이트가 되어서 ,
App.js에서 바로 컴포넌트를 붙이고 코드를 작성할수 있어서 좋은것 같습니다 .</p>
<p>기존에는 App.js에서밖에 router를 사용할수 없었어서 App.js 는 그저 라우팅 페이지가 되어버렸었거든요. </p>

#### Redux Toolkit

```
store.js

import { configureStore } from "@reduxjs/toolkit";
import liquorSlice from "./liquorSlice";
export const store = configureStore({
  reducer: {
    liquor: liquorSlice,
  },
});

```

먼저 configureStore를 생성해서 slice를 reducer안에 넣어서 store를 생성 ,

```
liquorSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";
import { reviewData } from "../data";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const urliD = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const initialState = {};

export const fetchData = createAsyncThunk("users/fetchLiquor", async () => {
  const res = await axios.get(url);
  const { drinks } = res.data;
  if (drinks) {
    const newLiquors = drinks.slice(0, 24).map((item) => {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strGlass,
        strInstructions,
        strCategory,
      } = item;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
        description: strInstructions,
        category: strCategory,
      };
    });
    return newLiquors;
  }
});
export const fetchSingleData = createAsyncThunk(
  "users/fetchSingleLiquor",
  async (id) => {
    const res = await axios.get(`${urliD}${id}`);
    const { drinks } = res.data;
    if (drinks) {
      const {
        idDrink,
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drinks[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newLiquors = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
        idDrink,
      };
       return newLiquors;
    }
  }
);
const liquorSlice = createSlice({
  name: "liquor",
  initialState,
  reducers: {

  };

export const {} = liquorSlice.actions;
export default liquorSlice.reducer;

```

<p>Slice에서 state를 생성할수 있고 , function을 만들수 있으며 , createAsyncThunk를 통해서 비동기 처리를 할 
수 있습니다 . </p>
<p>리덕스 툴킷을 사용하지 않은 기존 리덕스에서는 비동기 처리를 해야할 때에 middleware라는 것을 사용해야했는데 , 리덕스 툴킷에서는
기본적으로 비동기를 지원하는 createAsyncThunk를 사용할수 있습니다 .</p>
<p>저는 api를 잡아온뒤에 , slice로 필요에 의해 24개까지 항목을 잘라서 , map을 통해서 이름을 재정의했습니다. </p>
<p>id별로 나누어 싱글 데이터를 가져오는 api에서는 , 대상이 한개밖에없는 array라 인덱스[0]로 접근해서</p>
<p>ingredients라는 새 배열과 각종 element들의 이름을 바꾸어서 새로 return 해주었습니다 .</p>
<p>fetchData function은 useEffect로 실행 시켰습니다 .</p>

<p>현재 제가 하려고하는 작업에서는 , id별로 싱글 데이터를 추려내어 singlePage를 작성하여 그 해당 아이템에 대한 설명을 클라이언트에게 보여주려고 합니다 .</p>

```
export const fetchData = createAsyncThunk(
  "users/fetchCockTail",
  async (id = null) => {
    if (id === null) {
      const res = await axios.get(url);
      const { drinks } = res.data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strInstructions,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            description: strInstructions,
          };
        });
        return { data: newCocktails, id: null };
      }
    } else {
      const res = await axios.get(`${urliD}${id}`);
      const { drinks } = res.data;
      if (drinks) {
        const {
          idDrink,
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
          idDrink,
        };
        return { data: newCocktail, id: id };
      }
    }
  }
);
```

<p>처음에는 이런식으로 코드를 한 createAsyncThunk만 이용하여서 id를 받아오면 single-data를 가져오고 , id
가 없는 경우에는 전체의 데이터를 가져오는 형식으로 작성하였습니다 .
처음에는 오류없이 동작을 잘 하였으나 ,
</p>
<p> 후에 pagination을 만들고싶어서 구현을 하고보니까 , 싱글 data를 fetch할때에 자꾸 오류가 생겨 , 
고민을 하고 여러가지 방법을 시도해보았지만 해결하지못하여서 createAsyncThunk 를 두개 만들게 되었습니다 .</p>

#### 각 아이템들의 사진 , description에 대한 더보기 기능

```
DisplayMenu.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddButton } from "./index";
function DisPlayMenu({ name, image, description, id }) {
  const [readMore, setReadMore] = useState(false);
  const { cart } = useSelector((state) => state.liquor);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <Wrapper>
      <Link to={`/singlePage/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="description">
        <p className="des__p">
          {readMore ? description : `${description.substring(0, 20)}...`}
        </p>
        <button className="des__btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </div>
      <AddButton id={id} />
    </Wrapper>
  );
}
```

<p>description을 렌더링 해보았더니 어떤것은 너무 길고 어떤것은 너무 짧아서 박스의 길이기 맞지 않아 이 기능을 도입하게 되었습니다. </p>
<p>간단하게 state를 작성하여서 , false값을 initial Value로 지정을 하고 , 버튼을 누르면 toggle을 시켜 true로 값을 변경하여 , ternary operator를 통해 description의 전체를 렌더링 하게 하는원리입니다 .</p>
<p>처음에 이 state를 redux에서 꺼내서 사용하였는데요 , redux에서 꺼내 사용하니 버튼을 통해서 state를 바꿨더니 모든 컴포넌트의 state이 한번에 false 에서 true로 바뀌어서 , useState로 재정의 해서 사용하게 되었습니다 .</p>

#### pagination 기능

```
Liquor.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DisPlayMenu, Loading, FetchError } from "./index";
import { filterList, setFilter } from "../redux/liquorSlice";
function CockTail() {
  const {
    list,
    postPerPage,
    currentPage,
  } = useSelector((state) => state.liquor);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <Wrapper>
      <div className="grid">
        { currentPosts.map((items) => (
              <DisPlayMenu key={items.id} {...items} />
            )}
      </div>
    </Wrapper>
  );
}
```

<p>list는 모든 아이템들이 담겨져 있는 array입니다 .</p>
<p>저는 페이지당 아이템을 8개로 , 하고 , 페이지는 3개정도로 만들고싶어서 , 윗 코드에서 보여드린대로 fetch할때에 slice(0,24)로 항목을 24개 가져왔습니다 . </p>
<p>currentPage 는 redux store에 저장되어있으며 , initial value 는 1입니다 , postPerPage도 redux store에 저장되어있으며 initial value값은 8 입니다 , </p>
<p>indexOfLastPost 를 만들어서 currentPage 와 PostPerPage를 곱한 이유는 , 동적으로 페이지가 변하기 위해서 변수에 할당을 하여 나중에 list slice의 값으로 사용하기 위해서 입니다 .</p>
<p>indexOfFirstPost는 0으로 만들기위해서 indexOfLastPost에서 postPerPage를 뺀 값, 0으로 만들어,</p>
<p>의도적으로  currentPost를 list.slice(0,8)로 만들어 , currentPost를 맵을 돌려 컴포넌트를 뿌렸습니다 .</p>

```
Pagination.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/liquorSlice";
function Pagination() {
  const dispatch = useDispatch();
  const { postPerPage, list, currentPage, filter } = useSelector(
    (state) => state.liquor
  );
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(list.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      {!filter &&
        pageNumbers.map((number) => (
          <li key={number} className="pagination__list">
            <button
              className={
                number === currentPage
                  ? "pagination__btn active"
                  : "pagination__btn"
              }
              onClick={() => dispatch(setCurrentPage(number))}
            >
              {number}
            </button>
          </li>
        ))}
    </Wrapper>
  );

`;

export default Pagination;

```

<p>for loop을 돌려서 list.lenght / postPerPage 즉 3개의 페이지를 생성합니다. 정보는 pageNumbers라는 array에 push하여 저장합니다 .</p>
<p>후에 그 array를 map을 돌려서 숫자를 렌더링 합니다 . onClick에 페이지 숫자 버튼을 누르면 setCurrentPage function을 실행시키고 , 그안에 array안에 있는 숫자를 set 시킴으로써 currentPage를 변화 시키고 , 변화시킨 currentPage는 indexOfLastPost를 변화시키고 , 더 나아가 결국 currentPost를 변화시켜 다른 화면을 렌더링 시키게 됩니다 .</p>

#### 각 아이템들의 카테고리 별로 필터링 기능

```
liquors.js

 <select
        className="liquor__select"
        onChange={(e) => {
          dispatch(setSelected(e.target.value));
          dispatch(filterList());
        }}
        value={selected}
      >
        {category.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
```

<p>우선 select를 만들어서 , select의 value가 선택되면 조건에 맞는 아이템들을 필터링하여 렌더링 하는 방식으로  구현을 하고 싶었습니다 .</p>
<p>그러기 위해서는 우선 api에서 받아온 아이템들의 카테고리들을 전부 모은후 , 중복값을 없앤 array를 만들어야 하는데요 , 그것은 이렇게 구현했습니다 .</p>

```
 state.category = ["all",  ...new Set(state.list.map((item) => item.category)), ];
```

<p>redux 측에서 category라는 state를 생성했고 , 그 state의 initial value는 array입니다 .</p>
<p>list는 모든 아이템의 정보가 담긴 array입니다 .</p>
<p>Set을 이용하여 중복값을 빼기를 원하여 , 처음에 코드를 이렇게 작성하였습니다</p>

```
state.category = new Set(state.list.map((item) => item.category);
```

<p>이렇게 작성하였더니 문제가 발생하였는데 , 바로 Set이 값을 object로 return해주는것이었습니다 .</p>
<p>저는 map을 돌려야 했기 때문에 array가 필요했습니다 . 나중에 값을 동적으로 삽입하거나 삭제할때에도 편리하기 때문에 저는 주로 값을 array로 만들어서 high-order functions를 사용합니다 . </p> 
<p>또한 저는 'all'이라는 value를 추가 삽입시켜 , 전체를 렌더링 해야했기때문에 ES6 spread operator를 사용해서 shallow copy를 하여 객체의 값을 복사해서 새 array로 만들었습니다 . </p>
<p>카테고리는 값을 불러오는데 성공이었고 , 나머지는 이 카테고리와 filter function을 연결시켜서 조건에 맞는 렌더링을 진행시키는 일이 남았었습니다 .</p>
<p>우선 여러가지 문제가 있었는데요 , select를 처음 쓰는 저로써는 select에는 onClick을 사용할 수 없다는걸 몰랐습니다 .</p>
<p>검색해보니 onChange로 대체를 할수 있다고 해서 onChange로 대체를 하여 사용하였습니다 .</p>

```
liquorSlice.js

filterList: (state) => {
      state.filter = true;
      switch (state.selected) {
        case "all":
          state.filter = false;
          break;
        case "Ordinary Drink":
          const ordinaryDrink = state.ordinaryDrink.filter(
            (item) => item.category === "Ordinary Drink"
          );
          state.filteredList = ordinaryDrink;
          break;
        case "Cocktail":
          const cockTail = state.cockTail.filter(
            (item) => item.category === "Cocktail"
          );
          state.filteredList = cockTail;
          break;
        case "Shot":
          const shot = state.shot.filter((item) => item.category === "Shot");
          state.filteredList = shot;
          break;
        case "Coffee / Tea":
          const coffeeAndTea = state.coffeeAndTea.filter(
            (item) => item.category === "Coffee / Tea"
          );
          state.filteredList = coffeeAndTea;
          break;
        case "Punch / Party Drink":
          const punchandPartyDrink = state.punchAndParty.filter(
            (item) => item.category === "Punch / Party Drink"
          );
          state.filteredList = punchandPartyDrink;
          break;
        default:
          break;
      }
    },
```

<p>개인적으로 이 부분에서 고민을 많이  했고 , 마음에 들지 않는 코드중 하나입니다 . 구현하는데에는 성공을 했지만, 
정말 비 효율적으로 짰습니다 .</p>
<p>select쪽 onChange에서 event.target.value로 값을 selected state에 넘겨주면 switch statement에서 selected state 에 들어온 value에 따라서 case별로 logic을 실행시켜주는 코드입니다.</p>
<p> 제가 지금은 정말 완벽히 이해하지만 , filter method에 대해서 이해가 부족했던것 같습니다.</p>
<p> 정확한 문제점은 , 항상 첫 필터링은 잘 됐습니다 , 그러나 그다음 필터링을 연속적으로 하게된다면 아무것도 렌더링되지않는 현상이 발생을 하였습니다 , 밑 코드가 당시의 코드입니다 .</p>

```
   filterList: (state) => {
      let tempCart = [...state.filteredList];
      switch (state.selected) {
        case "all":
          state.filter = false;
          break;
        case "Ordinary Drink":
          state.filter = true;
          tempCart = tempCart.filter(
            (item) => item.category === "Ordinary Drink"
          );
          break;
        case "Cocktail":
          state.filter = true;
          tempCart = tempCart.filter((item) => item.category === "Cocktail");
          break;
        case "Shot":
          state.filter = true;
          tempCart = tempCart.filter((item) => item.category === "Shot");
          break;
        case "Coffee / Tea":
          state.filter = true;
          tempCart = tempCart.filter(
            (item) => item.category === "Coffee / Tea"
          );
          break;
        case "Punch / Party Drink":
          state.filter = true;
          tempCart = tempCart.filter(
            (item) => item.category === "Punch / Party Drink"
          );
          break;
        default:
          break;
      }
      state.filteredList = tempCart;
    },
```

<p>filteredList는 전체 아이템들이 담겨져 있는 리스트입니다 .</p>
<p>해당 코드를 살펴보면 , tempCart를 만들어서 filteredList의 값을 복사한후 ,  case에 따라서 tempCart의 값을 계속 필터링 해 나가는것을 알 수 있습니다 ,</p>
<p>여기서의 문제점은 , 해당 tempCart를 필터링한 상태에서 다시한번 필터링을 하기때문에 (연속으로) 첫번째에서는 렌더링이 잘 됐지만 두번째부터 아무 값도 렌더링이 되지 않는것이었습니다 .</p>
<p>이 문제를 어떻게 해결하였냐면 .. </p>

```
        state.filteredList = state.list;
        state.ordinaryDrink = state.list;
        state.cockTail = state.list;
        state.shot = state.list;
        state.coffeeAndTea = state.list;
        state.punchAndParty = state.list;
```

<p>이런식으로 value 1개마다 state를 1개씩 총 5개의 state를 만들어서 ,</p>
<p>필터링할때 한 array에서 필터링을 하도록 만들어 랜더링에 지장이 없게 만들었지만 .. 다시봐도 무식(?) 한 방법인것 같습니다 . 누군가 피드백을 주시면 좋을거 같습니다 .. </p>
<p>개인적으로 코드를 제대로 구현하는 만큼이나 코드를 깨끗하게 하는것도 똑같이 중요하다고 생각하여 , 리펙토링에 관심이 많습니다 .</p>

#### 아이템을 카트에 담는 기능

```
addItemToCart: (state, { payload }) => {
      const id = state.list.map((item) => item.id);
      const findItemId = id.find((item) => item === payload);
      const findItemById = state.list.find((item) => item.id === findItemId);
      if (findItemId === payload) {
        const newCartItem = { ...findItemById };
        state.cart = [...state.cart, newCartItem];
      }
    },
```

<p>먼저 모든 아이템들이 들어있는 list라는 array에서 id만을 추출합니다 . </p>
<p>그리고 난후 그 id와 function을 실행하는곳에서 넘긴 parameter를 대조하여 같은 값을 가지고있는 객체를 반환합니다 .  (  findItemById )</p>
<p>그리고 list 에서 추출한 id와 function을 실행하는곳에서 넘긴 id값이 같으면 해당 if statement을 실행시킵니다 .</p>
<p>새 객체를 만들어서 findItemById 에서 찾은 객체 데이터를 복사해서 할당합니다 .</p>
<p>해당 아이템을 맵으로 뿌려줄것이기때문에 array로 데이터를 만들어서 state.cart에 할당합니다 .</p>
<p>cart라는 state를 이제 페이지에서 맵으로 뿌려줍니다. 항목이 수정되면 동적으로 반영합니다 .</p>

```
Proxy {i: 0, A: {…}, P: false, I: false, D: {…}, …}
```

<p>간혹 redux slice에서 console.log로 어떤 데이터를 확인하려 할때 , 이렇게 proxy형태로 출력이 되어 값을 확인 할수 없는 경우가 있는데요 ,이럴때엔  </p>

```
import { current } from "@reduxjs/toolkit";
```

<p>current라는 toolkit에서 제공되는 method를 추가하여 console.log(current(something)) 을 실행시키면 정상적으로 작동이 됩니다 .</p>

#### 해당 항목 삭제 기능

```
deleteCartItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
```

<p>무엇인가 삭제할때 가장 많이 , 흔하게 사용하는 방법입니다 . filter를 통해 다른 id값을 가지고있는 객체를 돌려줌으로써 삭제를 시킵니다 .</p>

#### 전체 삭제 기능

```
 deleteCartItemAll: (state) => {
      state.cart = [];
    },
```

<p>해당 array를 빈 array로 초기화를 시켜 전체를 한번에 삭제시킵니다 .</p>

#### 무엇인가 값을 만족할때 어떠한 컴포넌트를 return해주고싶다 , 할때 쓰는 방법

```
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError />;
  }
```

<p>loading , error의 값이 true일때 각 조건에 맞는 컴포넌트를 이런식으로 return 해 줄수 있습니다 .</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## 각종 문제가 있었던 부분들과 해결과정

<ol>
<li>redux proxy가 console창에 출력되는 문제</li>
      => redux 에서 제공하는 current라는 method로 랩핑하니 문제 해결 
<li>Button Disabled하는 과정</li>
      => 따로 하단에 서술하였습니다 .
<li>Map을 하는 과정에서 component state가 동시에 작동 (readMore)</li>
   => 따로 state를 만들어서 각자 동작하도록 수정하여 문제 해결
<li>singlePage에서 ingredients가 혼자 늦게 렌더링 되는 문제</li> 
   => 따로 하단에 서술하였습니다 .
<li>Create Thunk에서 fetch를 id별로 하지 못하는 문제</li>
 =>  상단에서 진행하였던것처럼 thunk를 2개 만들어서 문제 해결 *만족스럽지못함
<li>useEffect에서 빈 dependency를 넣었더니 계속 경고문구가 뜨는 문제</li>
 => 따로 하단에 서술하였습니다 .
<li>Filter진행시 첫렌더링은 되나 두번째 부터 렌더링이 전혀 되지않는 문제</li>
=> 상단에서 진행한것처럼 각 카테고리마다 따로 array를 만들어서 값을 담아 문제 해결 *비효율적임
</ol>

##### 2번. Button Disabled하는 과정

<p>버튼을 disabled하려면 바닐라자바스크립트로 하려면 그냥 DOM을 잡아와 disabled속성값에 true를 주면 된다는것은 알았는데 , 정확히 React에서는 어떻게 구현을 해야할지 감이 잘 오지않았습니다 . </p>
<p>예전에 React Hook에 대해서 공부할때 , useRef를 어디에 써야할지 좀 이해가 안갔었는데 , 이런경우에 Ref를 쓰면 정말 효율적일거같다는 생각이 들었고 , 바로 구현을 해보았습니다.</p>

```
const forbiddenDuplicates = (id) => {
      const cartItemsId = cart.map((cart) => cart.id);
      const compareIdToCartId = cartItemsId.find((item) => item === id);
      if (compareIdToCartId) {
        setDisable(true);
        buttonRef.current.disabled = true;
      }
    };

    <button
      ref={buttonRef}
      onClick={() => {
        forbiddenDuplicates(id);
      }}
    >
      {disable ? "in cart" : "add to cart"}
    </button>
```

<p>제 아이디어는 간단했습니다 . id 를 추출하여 클라이언트가 onClick 을 실행시킬때에 같은 id를 가지고있는 버튼을 disabled시키는것이었습니다.</p>

<p>위의 코드는 정상적으로 작동 하였으나 렌더링을 다시하면 전부 disabled가 풀리고 다시 클릭을 할수 있도록 돌아오는것이 또다른 문제였습니다 .</p>

<p>이렇게 렌더링시에 다시 돌아오는것을 보니 렌더링을 할때마다 이 함수를 실행시켜 이런일이 없도록 방지를 했어야 했는데 , 이런일에는 useEffect가 제격이죠 .</p>

##### 6번 . useEffect에서 빈 dependency를 넣었더니 계속 경고문구가 뜨는 문제

<p>그래서 onClick에서 함수를 실행하지말고 useEffect에서 실행을 해보기로했습니다 . </p>

```
useEffect(() => {
        forbiddenDuplicates(id)
} , [id] )
```

<p>id값은 부모컴포넌트에서 넘겨받았습니다 .</p>
<p>이렇게 코드를 작성하였더니 , 리액트 터미널에서 오류가 하나 발생하였습니다 , 그 오류는</p>
<p>React Hook useEffect has a missing dependency: 'forbiddenDuplicates'. Either include it or remove the dependency array 라는 경고문이었습니다 .</p>
<p>useEffect 에서 empty dependency(의존성 배열) 을 쓸거면 , forbiddenDuplicates를 배열에 추가하고 , 쓰지않을거면 빈 배열을 삭제하라는 경고문이었는데요 , </p>
<p>dependency를 삭제하면 useEffect에 지장이 생기지 않을까 ?를 고려해서 한번 이문제에 대해 공부를 해보았습니다.</p>
<p>리액트 공식문서에 따르면 ,useEffect 내부에서 사용하는 외부의 값이 없다면</p>
<p> dependency를 []로 적는 것이 안전하다고 얘기하고 있으며, dependency를 제거하기 위해 함수를 effect 내부로 이동시키는 것을 권하고 있습니다. </p>
<p>그리고 제가 읽은 블로그 글의 저자의 의견은 , </p>
<p>Hook을 사용할 때 dependency 배열을 생략하는 것은 좋지 않은 습관이라 생각한다고 합니다 .
<p>왜냐하면 , useEffect 안에 존재하는 state, prosp, 함수 등의 모든 값은 dependency 배열로 존재해야 하는데, 무한루프에 빠지는 현상 등을 막기 위해 dependency를 제거하게 될 경우, 렌더링이 무시되거나 전달해야 할 값이 갱신되지 않는 등 다른 문제를 일으킬 수 있어 좋은 해결 방법이라 생각되지 않는다고 합니다 .
<p>그래서 저는 이문제를 이렇게 해결하였습니다 .</p>

```
useEffect(() => {
    const forbiddenDuplicates = (id) => {
      const cartItemsId = cart.map((cart) => cart.id);
      const compareIdToCartId = cartItemsId.find((item) => item === id);
      if (compareIdToCartId) {
        setDisable(true);
        buttonRef.current.disabled = true;
      }
    };
    forbiddenDuplicates(id);
  }, [cart, id]);
```

<p>useEffect안에서 함수를 정의하고 바로 실행해서 , dependency에 함수를 넣지 않아도 됐고 , 경고문도 더이상 뜨지 않았습니다 .</p>

출처: https://jungpaeng.tistory.com/61 [개발자스러운 블로그]</p>

##### 4번. singlePage에서 ingredient요소가 혼자 늦게 렌더링 되는 문제

```
<p>Ingredients:
  {ingredients.map((item, index) => <p key={index}>{item}</p>)}
</p>
```

<p>ingredients를 array로 제가 redux slice에서 일부로 만들어서 map을 돌렸는데요 , </p> <p>Cannot read properties of undefined (reading 'map') 이라는 오류가 계속 잡히더라구요 ,개인적인 경험으로 데이터가 전송이 완료되지않으면 이런 오류가 발생하는것을 자주 보았는데 , 이번에도 그런 오류인것같아서 </p>

```
<p>Ingredients:
  {ingredients && ingredients.map((item, index) => <p key={index}>{item}</p>)}
</p>
```

<p>간단하게 ingredients가 들어오면 map을 실행하는 코드로 변경하였더니 오류가 해결되었습니다 .</p>

## Contact

gmail - qusghdus12345@gmail.com

블로그 [https://jay0811.tistory.com/](https://jay0811.tistory.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## url

프로젝트 url: [https://thebar-react.netlify.app](https://thebar-react.netlify.app)

## 긴글 읽어주셔서 감사합니다

<p align="right">(<a href="#top">back to top</a>)</p>
