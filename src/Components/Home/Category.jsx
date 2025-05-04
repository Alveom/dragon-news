import React from "react";
import { Link, NavLink } from "react-router";

function Category({ id, name }) {
  return (
    <div>
      <NavLink to={`/category/${id}`}>
        <h3
          className="category font-light cursor-pointer p-3 rounded-lg"
          onClick={bgChange}
          id={`cate-${id}`}
        >
          {name}
        </h3>
      </NavLink>
    </div>
  );
}

function bgChange(e) {
  const category = document.querySelectorAll(".category");

  category.forEach((item) => {
    item.classList.remove("bg-[#E7E7E7]");
    item.classList.remove("font-bold");
    item.classList.remove("text-[#FF3D3D]");
    item.classList.add("font-light");
    item.classList.add("bg-white");
  });
  e.target.classList.remove("bg-white");
  e.target.classList.add("bg-[#E7E7E7]");
  e.target.classList.add("text-[#FF3D3D]");
  e.target.classList.remove("font-light");
  e.target.classList.add("font-bold");
}
export default Category;
