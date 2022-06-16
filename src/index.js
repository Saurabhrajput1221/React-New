import ReactDOM from "react-dom";
import "./index.css";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Code_With_Harry/Redux/States/store";

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />

  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
