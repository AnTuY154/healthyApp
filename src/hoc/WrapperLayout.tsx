import React from "react";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";

export function withHeaderAndFooter<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <>
      <Header />
      <div className="app-body">
        <Component {...(props as any)} />
      </div>
      <Footer />
    </>
  );
}
