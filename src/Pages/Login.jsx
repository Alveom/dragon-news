import React from "react";
import RegisterPage from "../Components/Login/RegisterPage";
import { NavLink, Outlet } from "react-router";
import Navber from "../Components/Header/Navber";

const Login = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default Login;
