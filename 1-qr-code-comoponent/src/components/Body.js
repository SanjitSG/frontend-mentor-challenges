import React from "react";
import image from "../assets/images/image-qr-code.png";

const Body = () => {
  return (
    <div className="p-3 flex flex-col justify-around items-center w-[320px] h-[479px] bg-white rounded-[20px]">
      <div>
        <img
          className="w-72 h-72 rounded-[10px]"
          src={image}
          alt="image"
        />
      </div>

      <div className="w-72 h-32 text-center flex flex-col">
        <h1 className="font-bold text-Dark-blue text-[22px] leading-7">
          Improve your front-end skills by building projects
        </h1>
        <p className="font-regular text-Grayish-blue h-[72] text-[15px] p-3 leading-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
};

export default Body;
