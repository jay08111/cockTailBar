import React from "react";
import App from "./App";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
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
} from "./page/index";
import { Footer, NavBar } from "./components/index";
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
        <ToastContainer
          autoClose={2000}
          transition={Zoom}
          position="top-left"
        />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
