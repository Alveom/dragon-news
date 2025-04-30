import React from "react";
import Header from "./Header/Header";
import Navber from "../Components/Header/Navber";
import { Outlet } from "react-router";

function Root() {
  return (
    <div className="max-w-[1080px] h-max-screen mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
