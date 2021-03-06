import React from "react";
import App from "./App";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import { ToastContainer, Zoom } from "react-toastify";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ReviewPage,
  CartPage,
  ErrorPage,
  SingleLiquorPage,
  MenuPage,
  AboutUsPage,
} from "./page/index";
import { Footer, NavBar } from "./components/index";
import "./locales/i18n.js";
const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/singlePage/:id" element={<SingleLiquorPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer autoClose={2000} transition={Zoom} position="top-left" />
    </Provider>
  </React.StrictMode>,
  rootElement
);
