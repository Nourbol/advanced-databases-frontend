import React from "react";
import {Header} from "../header/Header.tsx";
import {Footer} from "../footer/Footer.tsx";

type PropsType = {
    children?: React.ReactNode;
};

export const Layout = ({ children }: PropsType) => {
  return (
      <>
          <Header />
          {children}
          <Footer />
      </>
  );
};
