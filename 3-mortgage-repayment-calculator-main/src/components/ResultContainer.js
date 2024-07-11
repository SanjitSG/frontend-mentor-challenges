import React from "react";
import emptyImg from "../images/illustration-empty.svg";
const ResultContainer = () => {
  return (
    <div className="bg-[color:hsl(202,55%,16%)] text-white flex flex-col justify-center items-center text-center p-4  md:w-6/12 md:rounded-r-2xl md:rounded-bl-[6rem] space-y-2">
      <img
        src={emptyImg}
        alt=""
      />
      <div className="space-y-4 text-center">
        <h2 className="text-xl">Results shown here</h2>
        <p className="font-light text-Slate500 text-sm w-4/6 mx-auto">
          Complete the form and click "calculate repayments" to see what your monthly repayments
          would be.
        </p>
      </div>
    </div>
  );
};

export default ResultContainer;
