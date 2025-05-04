import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

function Navber() {
  const { user, signout } = use(AuthContext);
  const hendelLogout = () => {
    signout()
      .then(() => {})
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <>
      <div>{user && user.email}</div>
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
          {user ? (
            <button onClick={hendelLogout} className="btn">
              LogOut
            </button>
          ) : (
            <NavLink to={"/login/login-page"}>
              <button className="btn">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Navber;
