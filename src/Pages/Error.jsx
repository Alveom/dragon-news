import React from "react";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div className="text-center text-8xl font-bold h-screen ">
      <NavLink to={"/"}>
        <h3>404</h3>
        <h3>Page Not Found</h3>
        <button className="btn">GO Back to Home</button>
      </NavLink>
    </div>
  );
};

export default Error;
