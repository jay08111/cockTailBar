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
    <li><a href="#description">Description</a></li>
    <li><a href="#contact">Contact</a></li>
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

<!-- USAGE EXAMPLES -->

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
<li>바에대한 댓글 추가 기능 , 아이디와 비밀번호를 등록해야 등록이 됌</li>
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

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

gmail - qusghdus12345@gmail.com

프로젝트 url: [https://thebar-react.netlify.app](https://thebar-react.netlify.app)

블로그 [https://jay0811.tistory.com/](https://jay0811.tistory.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## 읽어주셔서 감사합니다

<p align="right">(<a href="#top">back to top</a>)</p>
