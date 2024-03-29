import React from "react";

function TextCenter({ subTitle, title }) {
  return (
    <div className="services-title text-center select-none ">
      <p className="text-[#A5A5A5] mb-1 sm:text-2xl text-lg font-semibold ">
        {subTitle}
      </p>
      <h2 className="sm:text-4xl text-2xl font-semibold mb-10 ">{title}</h2>
    </div>
  );
}

export default TextCenter;
