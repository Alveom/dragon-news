import React from "react";
import Logo from "../../assets/logo.png";

function Banner() {
  const date = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[date.getDay()];
  const year = date.getFullYear();
  const datePresent = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[date.getMonth()];

  return (
    <div className="poppins text-center ">
      <img className="mt-5 m-auto" src={Logo} alt="logo" />
      <p className="font-extralight py-2">Journalism Without Fear or Favour</p>
      <p>
        <span className="font-lightbold">{dayName}</span>,
        <span className="font-semibold text-[#00000086]">{` ${monthName} ${datePresent}, ${year}`}</span>
      </p>
      <div className="bg-[#403f3f1a] flex items-center my-2 p-3 rounded-lg">
        <p className="text-left px-6 py-4 rounded-lg w-40 bg-[#D72050] text-white">
          Latest news
        </p>
        <marquee>
          {" "}
          Bangladesh's Export Earnings Show Strong Growth in Q1 2025.
        </marquee>
      </div>
    </div>
  );
}

export default Banner;
