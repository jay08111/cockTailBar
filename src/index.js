import React from "react";
import App from "./App";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  rootElement
);
