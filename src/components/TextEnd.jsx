import React from "react";

function TextEnd({ title, subTitle }) {
  return (
    <div className="trips-title text-end select-none">
      <p className="text-[#A5A5A5] mb-1 font-semibold sm:text-2xl text-lg">
        {subTitle}
      </p>
      <h1 className="sm:text-4xl text-2xl font-semibold">{title}</h1>
    </div>
  );
}

export default TextEnd;
