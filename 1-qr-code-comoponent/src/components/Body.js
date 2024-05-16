import React from "react";
import image from "../assets/images/image-qr-code.png";

const Body = () => {
  return (
    <div className="p-2 flex flex-col justify-around items-center w-[320px] h-[479px] bg-white rounded-[20px]">
      <div>
        <img
          className="w-72 h-72 rounded-[10px]"
          src={image}
          alt="image"
        />
      </div>
      <div className="w-72 h-32 text-center">
        <h1 className="font-bold text-[20px] text-[#1F314F]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[15px] text-[#7D889E]">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
};

export default Body;
