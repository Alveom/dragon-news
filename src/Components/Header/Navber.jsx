import React, { useState } from "react";
import { NavLink } from "react-router";
import User from "../../assets/demo-user.png";

function Navber() {
  const [login, setLogin] = useState(false);

  const handleLogout = () => {
    setLogin(false);
    console.log("Logout");
  };
  const handleLogin = () => {
    setLogin(true);
    console.log("Login");
  };
  return (
    <>
      <div className="bg-[#403f3f1a] flex items-center my-2 p-3 rounded-lg">
        <p className="text-left px-6 py-4 rounded-lg w-40 bg-[#D72050] text-white">
          Latest news
        </p>
        <marquee>
          {" "}
          Bangladesh's Export Earnings Show Strong Growth in Q1 2025.
        </marquee>
      </div>
      <div className="flex justify-between items-center poppins font-extralight  p-4">
        <div className="ml-[40%]">
          <NavLink to={"/"}> Home</NavLink>
          <NavLink className={"px-5"} to={"/about"}>
            {" "}
            About
          </NavLink>
          <NavLink to={"/carear"}> Carear</NavLink>
        </div>
        <div>
          {!login ? (
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          ) : (
            <button className="" onClick={handleLogout}>
              <img src={User} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navber;
