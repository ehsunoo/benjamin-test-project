import React from "react";
import PeriodBar from "./PeriodBar";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      <PeriodBar />
      {props.children}
    </>
  );
}

export default Layout;
