import React from "react";
import App from "./App";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ReviewPage,
  CartPage,
  ErrorPage,
  SingleLiquorPage,
} from "./page/index";
import { Footer, NavBar } from "./components/index";
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/singlePage/:id" element={<SingleLiquorPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  rootElement
);
