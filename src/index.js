import React from "react";
import App from "./App";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCockTail from "./page/SingleCockTail";
import Error from "./page/Error";
import { Footer, NavBar } from "./components/index";
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/singlePage/:id" element={<SingleCockTail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  rootElement
);
