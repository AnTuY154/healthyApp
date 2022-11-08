import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { router } from "./routes/root";

const appElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
     <RouterProvider router={router}/>
  </Provider>,
  appElement
);
