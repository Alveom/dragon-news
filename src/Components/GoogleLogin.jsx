import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const GoogleLogin = () => {
  return (
    <div>
      <div className="my-4">
        <button className="btn flex items-center gap-2 hover:bg-red-700 hover:text-white">
          {" "}
          <FcGoogle />
          Login with Google
        </button>
      </div>

      <button className="btn flex items-center gap-2 hover:bg-black hover:text-white">
        <FaGithub />
        Login with GitHub
      </button>
    </div>
  );
};

export default GoogleLogin;
