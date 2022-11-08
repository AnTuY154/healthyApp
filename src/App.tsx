import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { withHeaderAndFooter } from "./hoc/WrapperLayout";
import { Home } from "./pages/home/home";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
