import React from "react";
import { Link, NavLink } from "react-router";

function ShortNews({ newsid, title, image_url }) {
  return (
    <div className="my-6">
      <NavLink to={`/newspage/${newsid}`}>
        <div className=" object-cover rounded-lg overflow-hidden">
          <img src={image_url} alt="show" />
        </div>
        <h3 className="h-20 overflow-hidden text-lg font-bold">{title}</h3>
      </NavLink>
    </div>
  );
}

export default ShortNews;
