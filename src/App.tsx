import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import './font.scss'
import "./App.scss";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <div id="body" className="body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
