import React from "react";

function Category({ id, name }) {
  console.log(name);
  return (
    <div>
      <h3
        className="category font-light cursor-pointer p-3 rounded-lg"
        onClick={bgChange}
        id={id}
      >
        {name}
      </h3>
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
  console.log(e.target);
}
export default Category;
