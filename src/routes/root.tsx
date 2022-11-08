import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { App } from "../App";
import React from "react";
import { Home } from "../pages/home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/top_page",
        element: <Home />,
      },
      {
        path: "/my_record",
        element: <Home />,
      },
      {
        path: "/column_oage",
        element: <Home />,
      },
    ],
  },
]);
