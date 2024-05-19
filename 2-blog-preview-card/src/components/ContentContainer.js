import React from "react";

const ContentContainer = () => {
  return (
    <div className="my-6 w-[279px] sm:w-[336px] h-[173px] sm:h-[194px]">
      <button className="py-1 px-3 bg-yellow font-bold rounded-[4px] mb-3">Learning</button>
      <p className="mb-3 text-sm font-regular">Published 21 Dec 2023</p>
      <h1 className="mb-3 font-bold text-xl active:text-yellow cursor-pointer">
        HTML & CSS foundations
      </h1>
      <p className="text-gray text-base">
        These languages are the backbone of every website, defining structure, content, and
        presentation.
      </p>
    </div>
  );
};

export default ContentContainer;
