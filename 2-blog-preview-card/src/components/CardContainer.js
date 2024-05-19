import React from "react";
import image from "../assets/images/illustration-article.svg";
import authorImg from "../assets/images/image-avatar.webp";
import ContentContainer from "./ContentContainer";

const CardContainer = () => {
  return (
    <div className="p-6 bg-white w-[327px] sm:w-[384px] h-[501px] sm:h-[522px] border border-black rounded-[20px] shadow-[5px_8px_0px_5px_black]">
      <img
        className="rounded-[20px] w-[279px] sm:w-[384px] h-[200px] sm:h-[200px]"
        src={image}
        alt="hero-img"
      />

      <ContentContainer />
      <div className="w-[129px] h-[32px] my-6 flex items-center justify-between">
        <img
          className="w-[32px] h-[32px]"
          src={authorImg}
          alt="author-img"
        />
        <span className="font-bold text-sm">Greg Hopper</span>
      </div>
    </div>
  );
};

export default CardContainer;
