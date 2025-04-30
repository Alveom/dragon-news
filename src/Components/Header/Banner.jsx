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
    </div>
  );
}

export default Banner;
