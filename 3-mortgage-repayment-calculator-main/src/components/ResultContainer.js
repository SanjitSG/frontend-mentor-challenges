import React from "react";
import emptyImg from "../images/illustration-empty.svg";
const ResultContainer = () => {
  return (
    <div className="bg-[color:hsl(202,55%,16%)] text-white flex flex-col justify-center items-center text-center p-3">
      <img
        src={emptyImg}
        alt=""
      />
      <div>
        <h2>Results shown here</h2>
        <p>
          Complete the form and click "calculate repayments" to see what your monthly repayments
          would be.
        </p>
      </div>
    </div>
  );
};

export default ResultContainer;
